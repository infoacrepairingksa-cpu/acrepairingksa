const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src');

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

const replacements = [
    { from: 'hero.png', to: 'hero.webp' },
    { from: 'riyadh_ac_cleaning_proof_1778083746729.png', to: 'riyadh_ac_cleaning_proof_1778083746729.webp' },
    { from: 'AC Cleaning.png', to: 'AC Cleaning.webp' },
    { from: 'AC Coil Cleaning.png', to: 'AC Coil Cleaning.webp' },
    { from: 'AC Duct Cleaning.png', to: 'AC Duct Cleaning.webp' },
    { from: 'AC Filter Cleaning.png', to: 'AC Filter Cleaning.webp' },
    { from: 'AC Gas Refill.png', to: 'AC Gas Refill.webp' },
    { from: 'AC Installation.png', to: 'AC Installation.webp' },
    { from: 'AC Maintenance.png', to: 'AC Maintenance.webp' },
    { from: 'AC Repair.png', to: 'AC Repair.webp' },
    { from: 'Fast & Reliable AC Repair.png', to: 'Fast & Reliable AC Repair.webp' },
    { from: 'Home Maintenance.png', to: 'Home Maintenance.webp' },
    { from: 'Plumbing.png', to: 'Plumbing.webp' }
];

async function main() {
    const files = getAllFiles(srcDir);
    for (const file of files) {
        if (file.match(/\.(js|ts|tsx|css|scss)$/i)) {
            let content = fs.readFileSync(file, 'utf8');
            let changed = false;
            for (const r of replacements) {
                if (content.includes(r.from)) {
                    // Use a simple split/join to replace all occurrences
                    content = content.split(r.from).join(r.to);
                    changed = true;
                    console.log(`Replacing ${r.from} with ${r.to} in ${path.basename(file)}`);
                }
            }
            if (changed) {
                fs.writeFileSync(file, content);
            }
        }
    }
    console.log('Finished updating local image references.');
}

main();
