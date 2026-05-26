const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'app');

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const regex = /\{\["Al Olaya"[^]*?\}\)\)\}/g;
  
  if (content.includes('["Al Olaya"')) {
    console.log("Updating:", filePath);
    content = content.replace(regex, `{Object.values(locations).slice(0, 15).map(loc => (
              <a href={\`/locations/\${loc.slug}\`} key={loc.slug} className="p-10 bg-[#FAFAFA] rounded-[32px] border border-gray-100 flex flex-col items-center gap-5 group hover:border-secondary hover:bg-secondary/5 transition-all cursor-pointer shadow-sm text-center">
                <MapPin size={28} className="text-secondary group-hover:scale-125 transition-transform duration-500" />
                <span className="text-xs font-black uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors">{loc.name}</span>
              </a>
            ))}`);

    // Replace the count in the text
    const textRegex = /“We provide fast .*? across all (?:major )?Riyadh neighborhoods\.”/g;
    content = content.replace(textRegex, '“We provide fast maintenance services across all {Object.keys(locations).length} major Riyadh neighborhoods.”');
    
    // Replace the button
    const btnRegex = /<button.*?Book Service in Your Area.*?<\/button>/g;
    content = content.replace(btnRegex, '<a href="/locations" className="px-12 py-6 bg-primary text-white rounded-[24px] font-black uppercase tracking-widest shadow-xl border-b-4 border-slate-800 hover:bg-secondary transition-all">View All {Object.keys(locations).length} Districts</a>');

    // add import if missing
    if (!content.includes('import { locations }')) {
      // Find a safe place to put the import
      content = content.replace('import { cn } from "@/lib/utils";', 'import { cn } from "@/lib/utils";\nimport { locations } from "@/data/locations";');
    }

    fs.writeFileSync(filePath, content, 'utf8');
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('page.tsx')) {
      updateFile(fullPath);
    }
  });
}

walkDir(directoryPath);
console.log("Done updating pages.");
