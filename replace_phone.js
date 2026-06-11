const fs = require('fs');
const path = require('path');

function findAndReplaceInDir(dir, searchRegexList, replaceStr) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findAndReplaceInDir(fullPath, searchRegexList, replaceStr);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const regex of searchRegexList) {
        if (regex.test(content)) {
          content = content.replace(regex, replaceStr);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

const searchRegexList = [
  /(\+966\s*50\s*123\s*456[78])/g,
  /(\+966\s*50\s*XXX\s*XXXX)/g,
  /(\+966\s*50\s*[0-9]{3}\s*[0-9]{4})/g
];

findAndReplaceInDir(path.join(__dirname, 'src'), searchRegexList, '+966 51 094 2150');
console.log('Done replacing visual phone numbers.');
