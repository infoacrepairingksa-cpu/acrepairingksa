const fs = require('fs');
const path = require('path');

const updates = [
    {
        file: 'src/app/ac-cleaning/page.tsx',
        target: /<h1 className="text-\[52px\].*?">[\s\S]*?<\/h1>/,
        replacement: `<h1 className="text-[52px] md:text-[72px] lg:text-[84px] font-heading font-black text-primary leading-[0.95] tracking-tight">\n                Deep AC <span className="text-secondary text-stroke">Cleaning</span> & Sanitization in Riyadh\n              </h1>`
    },
    {
        file: 'src/app/ac-installation/page.tsx',
        target: /<h1 className="text-\[52px\].*?">[\s\S]*?<\/h1>/,
        replacement: `<h1 className="text-[52px] md:text-[72px] lg:text-[86px] font-heading font-black text-primary leading-[0.9] tracking-tighter">\n                Professional AC <span className="text-secondary">Installation Services</span> in Riyadh\n              </h1>`
    },
    {
        file: 'src/app/ac-gas-refill/page.tsx',
        target: /<h1 className="text-\[56px\].*?">[\s\S]*?<\/h1>/,
        replacement: `<h1 className="text-[56px] md:text-[76px] lg:text-[92px] font-heading font-black text-primary leading-[0.9] tracking-tighter">\n                Expert AC <span className="text-secondary italic text-stroke">Gas Refill</span> & Leak Repair in Riyadh\n              </h1>`
    },
    {
        file: 'src/app/ac-filter-cleaning/page.tsx',
        target: /<h1 className="text-\[62px\].*?">[\s\S]*?<\/h1>/,
        replacement: `<h1 className="text-[62px] md:text-[88px] lg:text-[104px] font-heading font-black text-primary leading-[0.85] tracking-tighter">\n                AC <span className="text-secondary italic text-stroke">Filter Cleaning</span> & Air Health in Riyadh\n              </h1>`
    },
    {
        file: 'src/app/ac-duct-cleaning/page.tsx',
        target: /<h1 className="text-\[56px\].*?">[\s\S]*?<\/h1>/,
        replacement: `<h1 className="text-[56px] md:text-[76px] lg:text-[92px] font-heading font-black text-primary leading-[0.9] tracking-tighter">\n                Professional AC <span className="text-secondary italic text-stroke">Duct Cleaning</span> in Riyadh\n              </h1>`
    },
    {
        file: 'src/app/ac-coil-cleaning/page.tsx',
        target: /<h1 className="text-\[56px\].*?">[\s\S]*?<\/h1>/,
        replacement: `<h1 className="text-[56px] md:text-[76px] lg:text-[92px] font-heading font-black text-primary leading-[0.9] tracking-tighter">\n                Expert AC <span className="text-secondary italic text-stroke">Coil Cleaning</span> & Combing in Riyadh\n              </h1>`
    },
    {
        file: 'src/app/plumbing/page.tsx',
        target: /<h1 className="text-\[52px\].*?">[\s\S]*?<\/h1>/,
        replacement: `<h1 className="text-[52px] md:text-[72px] lg:text-[86px] font-heading font-black text-primary leading-[0.9] tracking-tighter">\n                24/7 Emergency <span className="text-secondary">Plumbing Services</span> in Riyadh\n              </h1>`
    },
    {
        file: 'src/app/home-maintenance/page.tsx',
        target: /<h1 className="text-\[52px\].*?">[\s\S]*?<\/h1>/,
        replacement: `<h1 className="text-[52px] md:text-[72px] lg:text-[86px] font-heading font-black text-primary leading-[0.9] tracking-tighter">\n                Complete <span className="text-secondary">Home Maintenance</span> Services in Riyadh\n              </h1>`
    },
    {
        file: 'src/app/services/page.tsx',
        target: /<h1 className="text-\[52px\].*?">[\s\S]*?<\/h1>/,
        replacement: `<h1 className="text-[52px] md:text-[72px] lg:text-[86px] font-heading font-black text-primary leading-[0.9] tracking-tighter">\n                Professional <span className="text-secondary">Home Services</span> in Riyadh\n              </h1>`
    }
];

updates.forEach(u => {
    const fullPath = path.join(process.cwd(), u.file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        if (u.target.test(content)) {
            content = content.replace(u.target, u.replacement);
            fs.writeFileSync(fullPath, content);
            console.log(`Updated H1 in ${u.file}`);
        } else {
            console.log(`H1 not found or already updated in ${u.file}`);
        }
    }
});
