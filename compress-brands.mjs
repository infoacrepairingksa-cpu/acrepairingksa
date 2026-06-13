import sharp from 'sharp';
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, extname } from 'path';

const folder = './public/AC Companies';
const files = readdirSync(folder);

for (const file of files) {
  const filePath = join(folder, file);
  const ext = extname(file).toLowerCase();
  
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) continue;

  const sizeBefore = statSync(filePath).size;

  try {
    // Read the file into memory first so sharp releases file handle
    const inputBuffer = readFileSync(filePath);

    let outputBuffer;
    if (ext === '.jpg' || ext === '.jpeg') {
      outputBuffer = await sharp(inputBuffer)
        .resize({ width: 400, withoutEnlargement: true })
        .jpeg({ quality: 72, progressive: true })
        .toBuffer();
    } else {
      // png or webp → webp
      outputBuffer = await sharp(inputBuffer)
        .resize({ width: 400, withoutEnlargement: true })
        .webp({ quality: 72 })
        .toBuffer();
    }

    // Now write back (file handle is free)
    writeFileSync(filePath, outputBuffer);

    const sizeAfter = statSync(filePath).size;
    const status = sizeAfter < 100 * 1024 ? '✅' : '⚠️  still > 100KB';
    console.log(`${status} ${file}: ${(sizeBefore/1024).toFixed(1)}KB → ${(sizeAfter/1024).toFixed(1)}KB`);
  } catch (err) {
    console.error(`❌ Failed ${file}: ${err.message}`);
  }
}

console.log('\nDone!');
