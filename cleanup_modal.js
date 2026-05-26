const fs = require('fs');
const path = require('path');

function removeBookingModal(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      removeBookingModal(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      if (content.includes('<BookingModal')) {
          content = content.replace(/<BookingModal[\s\S]*?\/>/g, '');
          modified = true;
      }
      
      // removing any residual state just in case
      if (content.includes('isModalOpen')) {
          content = content.replace(/const \[isModalOpen, setIsModalOpen\] = useState\(false\);/g, '');
          modified = true;
      }

      if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Cleaned up BookingModal from ${fullPath}`);
      }
    }
  }
}

removeBookingModal(path.join(__dirname, 'src/app'));
console.log('Done cleaning up BookingModal.');
