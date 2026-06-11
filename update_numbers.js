const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const originalContent = content;
  
  content = content.replace(/966501234567/g, '966510942150');
  content = content.replace(/966501234568/g, '966510942150');
  
  if (content !== originalContent) {
    console.log("Updated numbers in:", filePath);
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      updateFile(fullPath);
    }
  });
}

walkDir(directoryPath);
console.log("Done updating phone numbers.");
