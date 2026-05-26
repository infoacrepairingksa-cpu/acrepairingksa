const fs = require('fs');
const path = require('path');

function fixTypes(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      fixTypes(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      // Replace (service?: string) with (service?: any)
      const regex1 = /const handleBookNow = \(service\?: string\) => {/g;
      if (regex1.test(content)) {
          content = content.replace(regex1, 'const handleBookNow = (service?: any) => {');
          modified = true;
      }
      
      // Replace (serviceName: string = "") with (serviceName?: any)
      const regex2 = /const handleBookNow = \(serviceName: string = ""\) => {/g;
      if (regex2.test(content)) {
          content = content.replace(regex2, 'const handleBookNow = (serviceName?: any) => {');
          modified = true;
      }

      // Replace (service: string) with (service?: any)
      const regex3 = /const handleBookNow = \(service: string\) => {/g;
      if (regex3.test(content)) {
          content = content.replace(regex3, 'const handleBookNow = (service?: any) => {');
          modified = true;
      }

      if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Fixed types in ${fullPath}`);
      }
    }
  }
}

fixTypes(path.join(__dirname, 'src/app'));
console.log('Done fixing types.');
