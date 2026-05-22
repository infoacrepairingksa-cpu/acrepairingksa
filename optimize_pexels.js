const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const srcDir = path.join(process.cwd(), 'src');
const publicOptimizedDir = path.join(process.cwd(), 'public', 'optimized');

if (!fs.existsSync(publicOptimizedDir)) {
    fs.mkdirSync(publicOptimizedDir, { recursive: true });
}

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

async function downloadImage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download: ${res.statusCode}`));
                return;
            }
            const chunks = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('end', () => resolve(Buffer.concat(chunks)));
            res.on('error', reject);
        }).on('error', reject);
    });
}

async function optimizeBuffer(buffer, outputPath) {
    let quality = 80;
    let width = 1200;
    let optimizedBuffer = await sharp(buffer)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality })
        .toBuffer();

    while (optimizedBuffer.length > 100 * 1024 && quality > 10) {
        quality -= 5;
        optimizedBuffer = await sharp(buffer)
            .resize({ width, withoutEnlargement: true })
            .webp({ quality })
            .toBuffer();
    }
    
    while (optimizedBuffer.length > 100 * 1024 && width > 400) {
        width -= 200;
        optimizedBuffer = await sharp(buffer)
            .resize({ width, withoutEnlargement: true })
            .webp({ quality: 15 })
            .toBuffer();
    }

    fs.writeFileSync(outputPath, optimizedBuffer);
    return optimizedBuffer.length;
}

async function main() {
    const files = getAllFiles(srcDir);
    const pexelsRegex = /https:\/\/images\.pexels\.com\/photos\/(\d+)\/[^"'\s)]+/g;
    const urlMap = new Map();

    for (const file of files) {
        if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx')) {
            const content = fs.readFileSync(file, 'utf8');
            let match;
            while ((match = pexelsRegex.exec(content)) !== null) {
                const url = match[0];
                const id = match[1];
                if (!urlMap.has(url)) {
                    const fileName = `pexels-${id}.webp`;
                    const localPath = `/optimized/${fileName}`;
                    const fullLocalPath = path.join(publicOptimizedDir, fileName);
                    urlMap.set(url, { localPath, fullLocalPath });
                }
            }
        }
    }

    console.log(`Found ${urlMap.size} unique Pexels images.`);

    for (const [url, info] of urlMap.entries()) {
        try {
            console.log(`Processing: ${url}`);
            const buffer = await downloadImage(url);
            const size = await optimizeBuffer(buffer, info.fullLocalPath);
            console.log(`Saved to ${info.localPath} (${(size / 1024).toFixed(2)} KB)`);
        } catch (err) {
            console.error(`Error processing ${url}:`, err.message);
        }
    }

    // Now update the files
    for (const file of files) {
        if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx')) {
            let content = fs.readFileSync(file, 'utf8');
            let changed = false;
            for (const [url, info] of urlMap.entries()) {
                if (content.includes(url)) {
                    content = content.split(url).join(info.localPath);
                    changed = true;
                }
            }
            if (changed) {
                fs.writeFileSync(file, content);
                console.log(`Updated: ${path.basename(file)}`);
            }
        }
    }

    console.log('Done!');
}

main();
