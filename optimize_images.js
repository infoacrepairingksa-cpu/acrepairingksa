const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const acServicesDir = path.join(publicDir, 'Ac Services');

async function optimizeImage(inputPath, outputPath) {
    try {
        let quality = 80;
        let width = 1200;
        let buffer = await sharp(inputPath)
            .resize({ width, withoutEnlargement: true })
            .webp({ quality })
            .toBuffer();

        // If still over 100KB, reduce quality
        while (buffer.length > 100 * 1024 && quality > 10) {
            quality -= 5;
            buffer = await sharp(inputPath)
                .resize({ width, withoutEnlargement: true })
                .webp({ quality })
                .toBuffer();
        }
        
        // If STILL over 100KB, reduce width
        while (buffer.length > 100 * 1024 && width > 400) {
            width -= 200;
            buffer = await sharp(inputPath)
                .resize({ width, withoutEnlargement: true })
                .webp({ quality: 15 })
                .toBuffer();
        }

        fs.writeFileSync(outputPath, buffer);
        console.log(`Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)} (${(buffer.length / 1024).toFixed(2)} KB)`);
    } catch (err) {
        console.error(`Error optimizing ${inputPath}:`, err);
    }
}

async function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) continue;

        if (file.match(/\.(png|jpg|jpeg)$/i) && !file.includes('.webp')) {
            const outputName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
            const outputPath = path.join(dir, outputName);
            await optimizeImage(fullPath, outputPath);
        }
    }
}

async function main() {
    console.log('Optimizing local images with aggressive reduction...');
    await processDir(publicDir);
    await processDir(acServicesDir);
    console.log('Done!');
}

main();
