const fs = require('fs');
const path = require('path');

function refactorBookingModal(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      refactorBookingModal(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Check if file has handleBookNow
      if (content.includes('handleBookNow')) {
        let modified = false;

        // Extract service name from BookingModal if exists
        let serviceName = "Home Maintenance and AC Repair";
        const serviceMatch = content.match(/<BookingModal[^>]*serviceName="([^"]+)"/);
        if (serviceMatch && serviceMatch[1]) {
            serviceName = serviceMatch[1];
        } else {
            // some pages might use dynamically
            // try to find title or something, or fallback
            if (fullPath.includes('plumbing')) serviceName = 'Plumbing';
            else if (fullPath.includes('about')) serviceName = 'Expert';
            else if (fullPath.includes('blog')) serviceName = 'AC Repair';
        }

        // 1. Remove BookingModal import
        if (content.includes('import BookingModal')) {
            content = content.replace(/import BookingModal[^\n]+\n/, '');
            modified = true;
        }

        // 2. Remove BookingModal component
        if (content.includes('<BookingModal')) {
            content = content.replace(/<BookingModal[^>]*\/>/g, '');
            modified = true;
        }

        // 3. Remove state variables
        if (content.includes('isModalOpen')) {
            content = content.replace(/const \[isModalOpen, setIsModalOpen\] = useState\(false\);/g, '');
            modified = true;
        }
        if (content.includes('selectedService')) {
            content = content.replace(/const \[selectedService, setSelectedService\] = useState\([^)]*\);/g, '');
            modified = true;
        }

        // 4. Replace handleBookNow definition
        // For generic without args
        const handle1 = /const handleBookNow = \(\) => setIsModalOpen\(true\);/g;
        if (handle1.test(content)) {
            content = content.replace(handle1, `const handleBookNow = (service?: string) => {
    const sName = service && typeof service === 'string' ? service : "${serviceName}";
    const text = \`Hello, I need \${sName} services. Can you help?\`;
    window.open(\`https://wa.me/966590132864?text=\${encodeURIComponent(text)}\`, '_blank');
  };`);
            modified = true;
        }

        // For args like (service: string) => { setSelectedService... setIsModalOpen... }
        const handle2 = /const handleBookNow = \(service([^)]*)\) => {[\s\S]*?setIsModalOpen\(true\);\s*};/g;
        if (handle2.test(content)) {
            content = content.replace(handle2, `const handleBookNow = (service$1) => {
    const sName = service && typeof service === 'string' ? service : "${serviceName}";
    const text = \`Hello, I need \${sName} services. Can you help?\`;
    window.open(\`https://wa.me/966590132864?text=\${encodeURIComponent(text)}\`, '_blank');
  };`);
            modified = true;
        }
        
        // Custom one for homepage
        const handle3 = /const handleBookNow = \(serviceName: string = ""\) => {[\s\S]*?setIsModalOpen\(true\);\s*};/g;
        if (handle3.test(content)) {
            content = content.replace(handle3, `const handleBookNow = (serviceName: string = "") => {
    const sName = serviceName || "Home Maintenance and AC Repair";
    const text = \`Hello, I need \${sName} services. Can you help?\`;
    window.open(\`https://wa.me/966590132864?text=\${encodeURIComponent(text)}\`, '_blank');
  };`);
            modified = true;
        }

        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Refactored ${fullPath}`);
        }
      }
    }
  }
}

refactorBookingModal(path.join(__dirname, 'src/app'));
console.log('Done refactoring booking modals.');
