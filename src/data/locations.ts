import { 
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

export const locations: Record<string, LocationData> = {
  "al-olaya": {
    slug: "al-olaya",
    zone: "Central Riyadh",
    name: "Al Olaya",
    heroTitle: "Expert AC Repair & Plumbing in Al Olaya, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Olaya with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Olaya, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Olaya residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Olaya?", a: "Yes, we offer 24/7 emergency service in Al Olaya." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Olaya residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Olaya. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-malaz": {
    slug: "al-malaz",
    zone: "Central Riyadh",
    name: "Al Malaz",
    heroTitle: "Expert AC Repair & Plumbing in Al Malaz, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Malaz with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Malaz, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Malaz residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Malaz?", a: "Yes, we offer 24/7 emergency service in Al Malaz." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Malaz residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Malaz. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-sulaymaniyah": {
    slug: "al-sulaymaniyah",
    zone: "Central Riyadh",
    name: "Al Sulaymaniyah",
    heroTitle: "Expert AC Repair & Plumbing in Al Sulaymaniyah, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Sulaymaniyah with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Sulaymaniyah, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Sulaymaniyah residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Sulaymaniyah?", a: "Yes, we offer 24/7 emergency service in Al Sulaymaniyah." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Sulaymaniyah residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Sulaymaniyah. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-batha": {
    slug: "al-batha",
    zone: "Central Riyadh",
    name: "Al Batha",
    heroTitle: "Expert AC Repair & Plumbing in Al Batha, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Batha with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Batha, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Batha residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Batha?", a: "Yes, we offer 24/7 emergency service in Al Batha." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Batha residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Batha. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-murabba": {
    slug: "al-murabba",
    zone: "Central Riyadh",
    name: "Al Murabba",
    heroTitle: "Expert AC Repair & Plumbing in Al Murabba, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Murabba with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Murabba, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Murabba residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Murabba?", a: "Yes, we offer 24/7 emergency service in Al Murabba." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Murabba residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Murabba. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-diriyah": {
    slug: "al-diriyah",
    zone: "Central Riyadh",
    name: "Al Diriyah",
    heroTitle: "Expert AC Repair & Plumbing in Al Diriyah, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Diriyah with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Diriyah, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Diriyah residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Diriyah?", a: "Yes, we offer 24/7 emergency service in Al Diriyah." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Diriyah residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Diriyah. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-wazarat": {
    slug: "al-wazarat",
    zone: "Central Riyadh",
    name: "Al Wazarat",
    heroTitle: "Expert AC Repair & Plumbing in Al Wazarat, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Wazarat with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Wazarat, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Wazarat residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Wazarat?", a: "Yes, we offer 24/7 emergency service in Al Wazarat." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Wazarat residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Wazarat. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-yasmin": {
    slug: "al-yasmin",
    zone: "North Riyadh",
    name: "Al Yasmin",
    heroTitle: "Expert AC Repair & Plumbing in Al Yasmin, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Yasmin with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Yasmin, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Yasmin residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Yasmin?", a: "Yes, we offer 24/7 emergency service in Al Yasmin." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Yasmin residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Yasmin. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-narjis": {
    slug: "al-narjis",
    zone: "North Riyadh",
    name: "Al Narjis",
    heroTitle: "Expert AC Repair & Plumbing in Al Narjis, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Narjis with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Narjis, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Narjis residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Narjis?", a: "Yes, we offer 24/7 emergency service in Al Narjis." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Narjis residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Narjis. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-sahafa": {
    slug: "al-sahafa",
    zone: "North Riyadh",
    name: "Al Sahafa",
    heroTitle: "Expert AC Repair & Plumbing in Al Sahafa, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Sahafa with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Sahafa, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Sahafa residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Sahafa?", a: "Yes, we offer 24/7 emergency service in Al Sahafa." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Sahafa residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Sahafa. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-malqa": {
    slug: "al-malqa",
    zone: "North Riyadh",
    name: "Al Malqa",
    heroTitle: "Expert AC Repair & Plumbing in Al Malqa, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Malqa with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Malqa, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Malqa residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Malqa?", a: "Yes, we offer 24/7 emergency service in Al Malqa." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Malqa residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Malqa. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-aqiq": {
    slug: "al-aqiq",
    zone: "North Riyadh",
    name: "Al Aqiq",
    heroTitle: "Expert AC Repair & Plumbing in Al Aqiq, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Aqiq with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Aqiq, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Aqiq residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Aqiq?", a: "Yes, we offer 24/7 emergency service in Al Aqiq." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Aqiq residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Aqiq. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "hittin": {
    slug: "hittin",
    zone: "North Riyadh",
    name: "Hittin",
    heroTitle: "Expert AC Repair & Plumbing in Hittin, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Hittin with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Hittin, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Hittin residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Hittin?", a: "Yes, we offer 24/7 emergency service in Hittin." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Hittin residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Hittin. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-nakheel": {
    slug: "al-nakheel",
    zone: "North Riyadh",
    name: "Al Nakheel",
    heroTitle: "Expert AC Repair & Plumbing in Al Nakheel, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Nakheel with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Nakheel, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Nakheel residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Nakheel?", a: "Yes, we offer 24/7 emergency service in Al Nakheel." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Nakheel residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Nakheel. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-wadi": {
    slug: "al-wadi",
    zone: "North Riyadh",
    name: "Al Wadi",
    heroTitle: "Expert AC Repair & Plumbing in Al Wadi, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Wadi with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Wadi, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Wadi residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Wadi?", a: "Yes, we offer 24/7 emergency service in Al Wadi." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Wadi residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Wadi. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-nada": {
    slug: "al-nada",
    zone: "North Riyadh",
    name: "Al Nada",
    heroTitle: "Expert AC Repair & Plumbing in Al Nada, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Nada with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Nada, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Nada residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Nada?", a: "Yes, we offer 24/7 emergency service in Al Nada." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Nada residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Nada. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-rabee": {
    slug: "al-rabee",
    zone: "North Riyadh",
    name: "Al Rabee",
    heroTitle: "Expert AC Repair & Plumbing in Al Rabee, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Rabee with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Rabee, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Rabee residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Rabee?", a: "Yes, we offer 24/7 emergency service in Al Rabee." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Rabee residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Rabee. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-ghadeer": {
    slug: "al-ghadeer",
    zone: "North Riyadh",
    name: "Al Ghadeer",
    heroTitle: "Expert AC Repair & Plumbing in Al Ghadeer, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Ghadeer with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Ghadeer, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Ghadeer residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Ghadeer?", a: "Yes, we offer 24/7 emergency service in Al Ghadeer." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Ghadeer residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Ghadeer. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-izdihar": {
    slug: "al-izdihar",
    zone: "North Riyadh",
    name: "Al Izdihar",
    heroTitle: "Expert AC Repair & Plumbing in Al Izdihar, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Izdihar with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Izdihar, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Izdihar residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Izdihar?", a: "Yes, we offer 24/7 emergency service in Al Izdihar." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Izdihar residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Izdihar. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-qayrawan": {
    slug: "al-qayrawan",
    zone: "North Riyadh",
    name: "Al Qayrawan",
    heroTitle: "Expert AC Repair & Plumbing in Al Qayrawan, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Qayrawan with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Qayrawan, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Qayrawan residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Qayrawan?", a: "Yes, we offer 24/7 emergency service in Al Qayrawan." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Qayrawan residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Qayrawan. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-rawdah": {
    slug: "al-rawdah",
    zone: "East Riyadh",
    name: "Al Rawdah",
    heroTitle: "Expert AC Repair & Plumbing in Al Rawdah, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Rawdah with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Rawdah, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Rawdah residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Rawdah?", a: "Yes, we offer 24/7 emergency service in Al Rawdah." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Rawdah residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Rawdah. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-rabwah": {
    slug: "al-rabwah",
    zone: "East Riyadh",
    name: "Al Rabwah",
    heroTitle: "Expert AC Repair & Plumbing in Al Rabwah, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Rabwah with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Rabwah, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Rabwah residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Rabwah?", a: "Yes, we offer 24/7 emergency service in Al Rabwah." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Rabwah residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Rabwah. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-munsiyah": {
    slug: "al-munsiyah",
    zone: "East Riyadh",
    name: "Al Munsiyah",
    heroTitle: "Expert AC Repair & Plumbing in Al Munsiyah, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Munsiyah with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Munsiyah, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Munsiyah residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Munsiyah?", a: "Yes, we offer 24/7 emergency service in Al Munsiyah." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Munsiyah residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Munsiyah. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-qadisiyah": {
    slug: "al-qadisiyah",
    zone: "East Riyadh",
    name: "Al Qadisiyah",
    heroTitle: "Expert AC Repair & Plumbing in Al Qadisiyah, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Qadisiyah with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Qadisiyah, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Qadisiyah residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Qadisiyah?", a: "Yes, we offer 24/7 emergency service in Al Qadisiyah." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Qadisiyah residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Qadisiyah. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-naseem": {
    slug: "al-naseem",
    zone: "East Riyadh",
    name: "Al Naseem",
    heroTitle: "Expert AC Repair & Plumbing in Al Naseem, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Naseem with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Naseem, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Naseem residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Naseem?", a: "Yes, we offer 24/7 emergency service in Al Naseem." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Naseem residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Naseem. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-fayha": {
    slug: "al-fayha",
    zone: "East Riyadh",
    name: "Al Fayha",
    heroTitle: "Expert AC Repair & Plumbing in Al Fayha, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Fayha with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Fayha, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Fayha residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Fayha?", a: "Yes, we offer 24/7 emergency service in Al Fayha." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Fayha residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Fayha. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-rayyan": {
    slug: "al-rayyan",
    zone: "East Riyadh",
    name: "Al Rayyan",
    heroTitle: "Expert AC Repair & Plumbing in Al Rayyan, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Rayyan with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Rayyan, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Rayyan residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Rayyan?", a: "Yes, we offer 24/7 emergency service in Al Rayyan." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Rayyan residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Rayyan. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "qurtubah": {
    slug: "qurtubah",
    zone: "East Riyadh",
    name: "Qurtubah",
    heroTitle: "Expert AC Repair & Plumbing in Qurtubah, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Qurtubah with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Qurtubah, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Qurtubah residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Qurtubah?", a: "Yes, we offer 24/7 emergency service in Qurtubah." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Qurtubah residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Qurtubah. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "ghirnatah": {
    slug: "ghirnatah",
    zone: "East Riyadh",
    name: "Ghirnatah",
    heroTitle: "Expert AC Repair & Plumbing in Ghirnatah, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Ghirnatah with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Ghirnatah, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Ghirnatah residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Ghirnatah?", a: "Yes, we offer 24/7 emergency service in Ghirnatah." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Ghirnatah residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Ghirnatah. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-khaleej": {
    slug: "al-khaleej",
    zone: "East Riyadh",
    name: "Al Khaleej",
    heroTitle: "Expert AC Repair & Plumbing in Al Khaleej, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Khaleej with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Khaleej, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Khaleej residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Khaleej?", a: "Yes, we offer 24/7 emergency service in Al Khaleej." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Khaleej residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Khaleej. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "ishbiliyah": {
    slug: "ishbiliyah",
    zone: "East Riyadh",
    name: "Ishbiliyah",
    heroTitle: "Expert AC Repair & Plumbing in Ishbiliyah, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Ishbiliyah with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Ishbiliyah, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Ishbiliyah residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Ishbiliyah?", a: "Yes, we offer 24/7 emergency service in Ishbiliyah." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Ishbiliyah residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Ishbiliyah. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-shifa": {
    slug: "al-shifa",
    zone: "South Riyadh",
    name: "Al Shifa",
    heroTitle: "Expert AC Repair & Plumbing in Al Shifa, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Shifa with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Shifa, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Shifa residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Shifa?", a: "Yes, we offer 24/7 emergency service in Al Shifa." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Shifa residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Shifa. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-hazm": {
    slug: "al-hazm",
    zone: "South Riyadh",
    name: "Al Hazm",
    heroTitle: "Expert AC Repair & Plumbing in Al Hazm, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Hazm with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Hazm, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Hazm residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Hazm?", a: "Yes, we offer 24/7 emergency service in Al Hazm." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Hazm residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Hazm. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-aziziya": {
    slug: "al-aziziya",
    zone: "South Riyadh",
    name: "Al Aziziya",
    heroTitle: "Expert AC Repair & Plumbing in Al Aziziya, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Aziziya with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Aziziya, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Aziziya residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Aziziya?", a: "Yes, we offer 24/7 emergency service in Al Aziziya." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Aziziya residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Aziziya. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-dar-al-baida": {
    slug: "al-dar-al-baida",
    zone: "South Riyadh",
    name: "Al Dar Al Baida",
    heroTitle: "Expert AC Repair & Plumbing in Al Dar Al Baida, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Dar Al Baida with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Dar Al Baida, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Dar Al Baida residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Dar Al Baida?", a: "Yes, we offer 24/7 emergency service in Al Dar Al Baida." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Dar Al Baida residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Dar Al Baida. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-mansourah": {
    slug: "al-mansourah",
    zone: "South Riyadh",
    name: "Al Mansourah",
    heroTitle: "Expert AC Repair & Plumbing in Al Mansourah, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Mansourah with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Mansourah, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Mansourah residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Mansourah?", a: "Yes, we offer 24/7 emergency service in Al Mansourah." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Mansourah residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Mansourah. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-yamamah": {
    slug: "al-yamamah",
    zone: "South Riyadh",
    name: "Al Yamamah",
    heroTitle: "Expert AC Repair & Plumbing in Al Yamamah, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Yamamah with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Yamamah, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Yamamah residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Yamamah?", a: "Yes, we offer 24/7 emergency service in Al Yamamah." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Yamamah residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Yamamah. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-suwaidi": {
    slug: "al-suwaidi",
    zone: "South Riyadh",
    name: "Al Suwaidi",
    heroTitle: "Expert AC Repair & Plumbing in Al Suwaidi, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Suwaidi with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Suwaidi, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Suwaidi residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Suwaidi?", a: "Yes, we offer 24/7 emergency service in Al Suwaidi." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Suwaidi residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Suwaidi. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-shumaisi": {
    slug: "al-shumaisi",
    zone: "South Riyadh",
    name: "Al Shumaisi",
    heroTitle: "Expert AC Repair & Plumbing in Al Shumaisi, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Shumaisi with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Shumaisi, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Shumaisi residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Shumaisi?", a: "Yes, we offer 24/7 emergency service in Al Shumaisi." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Shumaisi residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Shumaisi. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-urayja": {
    slug: "al-urayja",
    zone: "West Riyadh",
    name: "Al Urayja",
    heroTitle: "Expert AC Repair & Plumbing in Al Urayja, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Urayja with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Urayja, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Urayja residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Urayja?", a: "Yes, we offer 24/7 emergency service in Al Urayja." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Urayja residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Urayja. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-badi": {
    slug: "al-badi",
    zone: "West Riyadh",
    name: "Al Badi",
    heroTitle: "Expert AC Repair & Plumbing in Al Badi, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Badi with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Badi, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Badi residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Badi?", a: "Yes, we offer 24/7 emergency service in Al Badi." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Badi residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Badi. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-nuzha": {
    slug: "al-nuzha",
    zone: "West Riyadh",
    name: "Al Nuzha",
    heroTitle: "Expert AC Repair & Plumbing in Al Nuzha, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Nuzha with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Nuzha, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Nuzha residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Nuzha?", a: "Yes, we offer 24/7 emergency service in Al Nuzha." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Nuzha residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Nuzha. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-aridh": {
    slug: "al-aridh",
    zone: "West Riyadh",
    name: "Al Aridh",
    heroTitle: "Expert AC Repair & Plumbing in Al Aridh, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Aridh with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Aridh, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Aridh residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Aridh?", a: "Yes, we offer 24/7 emergency service in Al Aridh." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Aridh residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Aridh. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-maizilah": {
    slug: "al-maizilah",
    zone: "West Riyadh",
    name: "Al Maizilah",
    heroTitle: "Expert AC Repair & Plumbing in Al Maizilah, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Maizilah with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Maizilah, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Maizilah residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Maizilah?", a: "Yes, we offer 24/7 emergency service in Al Maizilah." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Maizilah residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Maizilah. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-laban": {
    slug: "al-laban",
    zone: "West Riyadh",
    name: "Al Laban",
    heroTitle: "Expert AC Repair & Plumbing in Al Laban, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Laban with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Laban, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Laban residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Laban?", a: "Yes, we offer 24/7 emergency service in Al Laban." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Al Laban residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Al Laban. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "irqah": {
    slug: "irqah",
    zone: "West Riyadh",
    name: "Irqah",
    heroTitle: "Expert AC Repair & Plumbing in Irqah, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Irqah with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Irqah, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Irqah residents and ensure quick service at your doorstep—whether it's a modern villa, apartment, or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Irqah?", a: "Yes, we offer 24/7 emergency service in Irqah." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes for Irqah residents." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Very fast service in Irqah. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  }
};
