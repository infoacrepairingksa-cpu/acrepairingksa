const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const optimizedDir = path.join(process.cwd(), 'public', 'optimized');

async function reOptimize(filePath) {
    try {
        const stats = fs.statSync(filePath);
        if (stats.size <= 100 * 1024) return;

        console.log(`Re-optimizing: ${path.basename(filePath)} (${(stats.size / 1024).toFixed(2)} KB)`);
        
        const inputBuffer = fs.readFileSync(filePath);
        let quality = 70;
        let width = 1000;
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

async function main() {
    if (!fs.existsSync(optimizedDir)) return;
    const files = fs.readdirSync(optimizedDir);
    for (const file of files) {
        if (file.endsWith('.webp')) {
            await reOptimize(path.join(optimizedDir, file));
        }
    }
}

main();
