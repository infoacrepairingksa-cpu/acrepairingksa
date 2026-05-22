const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function reOptimize(filePath) {
    try {
        const stats = fs.statSync(filePath);
        if (stats.size <= 100 * 1024) return;

        console.log(`Re-optimizing: ${path.basename(filePath)} (${(stats.size / 1024).toFixed(2)} KB)`);
        
        const inputBuffer = fs.readFileSync(filePath);
        let quality = 70;
        let width = 1200;
        let buffer = await sharp(inputBuffer)
            .resize({ width, withoutEnlargement: true })
            .webp({ quality })
            .toBuffer();

        while (buffer.length > 100 * 1024 && quality > 10) {
            quality -= 10;
            buffer = await sharp(inputBuffer)
                .resize({ width, withoutEnlargement: true })
                .webp({ quality })
                .toBuffer();
        }

        while (buffer.length > 100 * 1024 && width > 400) {
            width -= 200;
            buffer = await sharp(inputBuffer)
                .resize({ width, withoutEnlargement: true })
                .webp({ quality: 15 })
                .toBuffer();
        }

        const tempPath = filePath + '.tmp';
        fs.writeFileSync(tempPath, buffer);
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        console.log(`Result: ${(buffer.length / 1024).toFixed(2)} KB`);
    } catch (err) {
        console.error(`Error re-optimizing ${filePath}:`, err);
    }
}

async function main(dir) {
    const fullDir = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullDir)) return;
    const files = fs.readdirSync(fullDir);
    for (const file of files) {
        const filePath = path.join(fullDir, file);
        if (fs.lstatSync(filePath).isDirectory()) continue;
        if (file.endsWith('.webp')) {
            await reOptimize(filePath);
        }
    }
}

async function run() {
    await main('public');
    await main('public/Ac Services');
    await main('public/optimized');
}

run();
