const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'src');

// 1. Fix the text in page.tsx
const pageTsxPath = path.join(srcPath, 'app', 'page.tsx');
let pageContent = fs.readFileSync(pageTsxPath, 'utf8');
pageContent = pageContent.replace(/Call: \+966 50/g, 'Call: +966 590 132 864');
fs.writeFileSync(pageTsxPath, pageContent, 'utf8');

// 2. Add text to wa.me links everywhere
function updateWhatsAppLinks(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // A generic message for standard whatsapp links
  const defaultText = "?text=Hello,%20I%20need%20home%20maintenance%20and%20AC%20repair%20services.%20Can%20you%20help?";
  
  // Make sure we don't append ?text multiple times
  content = content.replace(/https:\/\/wa\.me\/966590132864(?!\?text)/g, `https://wa.me/966590132864${defaultText}`);
  
  if (content !== original) {
    console.log("Updated WhatsApp text in:", filePath);
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      updateWhatsAppLinks(fullPath);
    }
  });
}

walkDir(srcPath);
console.log("Done fixing page text and WhatsApp links.");
