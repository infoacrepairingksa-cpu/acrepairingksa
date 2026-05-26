const fs = require('fs');

const zones = {
  "Central Riyadh": ["al-olaya", "al-malaz", "al-sulaymaniyah", "al-batha", "al-murabba", "al-diriyah", "al-wazarat"],
  "North Riyadh": ["al-yasmin", "al-narjis", "al-sahafa", "al-malqa", "al-aqiq", "hittin", "al-nakheel", "al-wadi", "al-nada", "al-rabee", "al-ghadeer", "al-izdihar", "al-qayrawan"],
  "East Riyadh": ["al-rawdah", "al-rabwah", "al-munsiyah", "al-qadisiyah", "al-naseem", "al-fayha", "al-rayyan", "qurtubah", "ghirnatah", "al-khaleej", "ishbiliyah"],
  "South Riyadh": ["al-shifa", "al-hazm", "al-aziziya", "al-dar-al-baida", "al-mansourah", "al-yamamah", "al-suwaidi", "al-shumaisi"],
  "West Riyadh": ["al-urayja", "al-badi", "al-nuzha", "al-aridh", "al-maizilah", "al-laban", "irqah"]
};

function getZone(slug) {
  for (const [zone, slugs] of Object.entries(zones)) {
    if (slugs.includes(slug)) return zone;
  }
  return "Riyadh District";
}

const allSlugs = Object.values(zones).flat();

function generateLocationData(slug, name, zone) {
  return `
  "${slug}": {
    slug: "${slug}",
    zone: "${zone}",
    name: "${name}",
    heroTitle: "Expert AC Repair & Plumbing in ${name}, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in ${name} with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in ${name}, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of ${name} residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in ${name}?", a: "Yes, we offer 24/7 emergency service in ${name}." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for ${name} residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in ${name}. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  }`;
}

function titleCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

let fileContent = `import { 
  Snowflake, 
  Wind, 
  Zap, 
  Settings, 
  Search, 
  Droplets, 
  Wrench,
  Clock,
  UserCheck,
  ShieldCheck,
  Star,
  MapPin,
  Phone,
  CheckCircle2,
  CheckCircle
} from "lucide-react";
import React from "react";

export interface LocationData {
  slug: string;
  zone: string;
  name: string;
  heroTitle: string;
  heroDesc: string;
  heroImage: string;
  aboutImage: string;
  aboutText1: string;
  aboutText2: string;
  faqs: { q: string, a: string }[];
  testimonials: { name: string, text: string, rating: number }[];
}

export const locations: Record<string, LocationData> = {`;

const locationEntries = allSlugs.map(slug => {
  return generateLocationData(slug, titleCase(slug), getZone(slug));
});

fileContent += locationEntries.join(",") + "\n};\n";

fs.writeFileSync("src/data/locations.ts", fileContent);
console.log("Generated locations.ts with", allSlugs.length, "locations.");
