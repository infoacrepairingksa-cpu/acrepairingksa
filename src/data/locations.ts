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
    name: "Al Olaya",
    heroTitle: "AC Repair & Plumbing Services in Al Olaya, Riyadh",
    heroDesc: "Fast, reliable and affordable AC repair, installation, maintenance & plumbing services in Al Olaya with guaranteed 30-min response.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide professional AC and plumbing services in Al Olaya, Riyadh. Our team is trained to handle all types of residential and commercial systems with fast response.",
    aboutText2: "We understand the needs of Al Olaya residents and ensure quick service at your doorstep—whether it's an apartment in Olaya district or a commercial office building.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Olaya?", a: "Yes, we offer 24/7 emergency service." },
      { q: "How fast can technician arrive?", a: "Usually within 30–60 minutes in Al Olaya." },
      { q: "Do you offer installation services?", a: "Yes, full AC installation and plumbing setup." }
    ],
    testimonials: [
      { name: "Ahmed R.", text: "Very fast service in Al Olaya. Fixed my AC in 30 minutes.", rating: 5 },
      { name: "Sarah K.", text: "Professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Mohammed A.", text: "Affordable and quick response. Excellent local team.", rating: 5 }
    ]
  },
  "al-malaz": {
    slug: "al-malaz",
    name: "Al Malaz",
    heroTitle: "AC Repair & Plumbing Services in Al Malaz, Riyadh",
    heroDesc: "Fast, affordable and professional maintenance services in Al Malaz. Our expert technicians are active across the historic heart of Riyadh city.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide reliable AC and plumbing services in Al Malaz, Riyadh, ensuring fast response and high-quality solutions for homes, apartments, and offices.",
    aboutText2: "Our skilled technicians handle all types of HVAC and plumbing issues with professional tools specifically tailored for the Riyadh climate.",
    faqs: [
      { q: "Do you offer emergency AC repair in Al Malaz?", a: "Yes, we provide 24/7 emergency services for all units in Al Malaz." },
      { q: "How fast can technician arrive?", a: "Our mobile fleet in Al Malaz usually arrives within 30–60 minutes." },
      { q: "Do you provide installation services?", a: "Yes, we handle full system AC and comprehensive plumbing installations." }
    ],
    testimonials: [
      { name: "Fahad A.", text: "Quick service in Al Malaz. My AC was fixed within an hour.", rating: 5 },
      { name: "Lina M.", text: "Very professional plumbing team. Highly recommended.", rating: 5 },
      { name: "Omar S.", text: "Affordable and fast response. Great experience.", rating: 5 }
    ]
  },
  "al-yasmin": {
    slug: "al-yasmin",
    name: "Al Yasmin",
    heroTitle: "Professional AC Repair & Plumbing Services in Al Yasmin",
    heroDesc: "Trusted experts for AC installation, repair, maintenance and plumbing services in Al Yasmin with fast response and guaranteed quality.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We deliver fast and reliable AC and plumbing services across Al Yasmin, Riyadh. Our team is trained to handle residential villas and apartments with care.",
    aboutText2: "Our team ensures quick response and long-lasting solutions for every resident in this prestigious Al Yasmin community.",
    faqs: [
      { q: "Do you provide emergency AC repair in Al Yasmin?", a: "Yes, we provide 24/7 emergency services for all air conditioning units in Yasmin district." },
      { q: "How fast do you arrive?", a: "Our dedicated Al Yasmin team usually reaches your location within 30–60 minutes." },
      { q: "Do you handle villa AC systems?", a: "Yes, we specialize in high-capacity villa units and central AC systems." }
    ],
    testimonials: [
      { name: "Khalid A.", text: "Very professional team, fixed AC quickly in my villa. One of the best experiences in Al Yasmin.", rating: 5 },
      { name: "Sara M.", text: "Best plumbing service in Al Yasmin, highly recommended. Fast arrival and clean work.", rating: 5 },
      { name: "Abdul R.", text: "Fast response and affordable pricing. Professional technicians and great follow-up.", rating: 5 }
    ]
  },
  "al-narjis": {
    slug: "al-narjis",
    name: "Al Narjis",
    heroTitle: "AC Repair and Plumbing Services in Al Narjis, Riyadh",
    heroDesc: "Reliable AC repair, installation, maintenance, and plumbing services in Al Narjis. Fast response and complete home solutions at affordable rates.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We provide AC and plumbing services across Al Narjis, Riyadh for villas, apartments, and offices. Quick response and long-term solutions.",
    aboutText2: "We aim to fix issues correctly on the first visit and ensure total customer satisfaction for the Al Narjis community.",
    faqs: [
      { q: "Do you offer emergency AC repair in Al Narjis?", a: "Yes, emergency repair service is available 24/7 across all neighborhoods." },
      { q: "How fast do you respond?", a: "Usually within 30–60 minutes depending on your location in Al Narjis district." },
      { q: "Do you provide installation services?", a: "Yes, we handle complete AC installation and professional plumbing work." }
    ],
    testimonials: [
      { name: "Ahmed", text: "Quick response and professional service in Al Narjis. Master technicians.", rating: 5 },
      { name: "Sara", text: "My AC issue was fixed on the same day. Highly professional plumbing too.", rating: 5 },
      { name: "Mohammed", text: "Good plumbing service and reasonable pricing. Definitely recommended.", rating: 5 }
    ]
  },
  "al-shifa": {
    slug: "al-shifa",
    name: "Al Shifa",
    heroTitle: "Fast AC Repair and Plumbing Services in Al Shifa, Riyadh",
    heroDesc: "Avoid the heat with our 30-minute response time in Al Shifa. We fix cooling issues, leaks, and electrical faults instantly.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "Al Shifa residents trust us for fast AC repair and maintenance. Our technicians are stationed locally for the quickest possible arrival.",
    aboutText2: "From basic maintenance to complex plumbing overhauls, we bring professional workshop quality directly to your Al Shifa home.",
    faqs: [
      { q: "Are your technicians licensed for Al Shifa?", a: "Yes, all our experts are certified and familiar with Al Shifa's building codes." },
      { q: "Do you handle split AC in Al Shifa?", a: "We fix all brands of split, window, and central AC systems in Al Shifa." },
      { q: "Is plumbing service available on Fridays?", a: "Yes, we operate 24/7 including weekends and holidays in Al Shifa." }
    ],
    testimonials: [
      { name: "Yasser", text: "Best AC cleaning in Al Shifa. My unit feels like new.", rating: 5 },
      { name: "Noura", text: "The plumber fixed our kitchen leak in less than an hour. Very polite.", rating: 5 },
      { name: "Zuhair", text: "Honest pricing and very professional work. Thank you!", rating: 5 }
    ]
  },
  "al-aqiq": {
    slug: "al-aqiq",
    name: "Al Aqiq",
    heroTitle: "Expert AC Maintenance & Plumbing in Al Aqiq district",
    heroDesc: "Serving the high-end residences of Al Aqiq with premium maintenance solutions. AC repair, duct cleaning, and expert plumbing.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "Al Aqiq is a premium district, and we match it with premium service quality. Our HVAC specialists are the best in Riyadh.",
    aboutText2: "We specialize in the complex central cooling systems often found in Al Aqiq's modern buildings and luxury villas.",
    faqs: [
      { q: "Do you service offices in Al Aqiq?", a: "Yes, we provide full commercial maintenance for Al Aqiq office buildings." },
      { q: "What is your arrival time in Al Aqiq?", a: "We guarantee arrival within 45 minutes for all Al Aqiq bookings." },
      { q: "Do you offer AC duct cleaning in Al Aqiq?", a: "Yes, we use advanced robotic cameras for deep duct cleaning." }
    ],
    testimonials: [
      { name: "Bandar", text: "Professionalism at its best. They handled our villa AC perfectly.", rating: 5 },
      { name: "Lulwa", text: "Expensive-looking service for a very fair price. Highly recommend.", rating: 5 },
      { name: "Saud", text: "Great attention to detail. No more leaks or noises from my AC.", rating: 5 }
    ]
  },
  "al-malqa": {
    slug: "al-malqa",
    name: "Al Malqa",
    heroTitle: "Premium Home Maintenance & AC Services in Al Malqa",
    heroDesc: "Luxury villa maintenance specialists in Al Malqa. We handle everything from high-efficiency AC to master plumbing.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "In Al Malqa, we focus on high-durability solutions that protect your property value and ensure lasting comfort.",
    aboutText2: "Our Al Malqa fleet is equipped with the latest diagnostic tools for rapid troubleshooting of any home fault.",
    faqs: [
      { q: "Do you handle smart home AC in Al Malqa?", a: "Yes, we are experts in smart-integrated HVAC systems in Malqa villas." },
      { q: "Is emergency support 24/7 in Al Malqa?", a: "Absolutely. Our emergency crew is always ready in the Al Malqa area." },
      { q: "Do you provide scheduled maintenance?", a: "Yes, we offer seasonal maintenance contracts for Al Malqa homes." }
    ],
    testimonials: [
      { name: "Turki", text: "The most reliable maintenance company I've used in Malqa.", rating: 5 },
      { name: "Mona", text: "Excellent plumbing and AC service. Very clean and respectful.", rating: 5 },
      { name: "Hassan", text: "They arrived on time and fixed our Chiller unit professionally.", rating: 5 }
    ]
  },
  "al-munsiyah": {
    slug: "al-munsiyah",
    name: "Al Munsiyah",
    heroTitle: "Affordable AC Repair & Plumbing in Al Munsiyah",
    heroDesc: "Quick response maintenance services for the growing Al Munsiyah community. Quality work at prices you will love.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "Our Munsiyah team is dedicated to providing honest, transparent, and high-quality home repairs for every family.",
    aboutText2: "We use only genuine parts to ensure your repairs last, especially during Riyadh's peak summer months in Munsiyah.",
    faqs: [
      { q: "Do you offer discounts in Al Munsiyah?", a: "We have competitive local pricing and seasonal offers for Munsiyah residents." },
      { q: "How do I book in Al Munsiyah?", a: "Simply click the WhatsApp button for instant booking in Al Munsiyah." },
      { q: "Do you fix washing machine leaks too?", a: "Yes, our plumbing team handles all appliance-related water issues." }
    ],
    testimonials: [
      { name: "Rashed", text: "Cheap, fast, and very good. Highly recommended for Al Munsiyah.", rating: 5 },
      { name: "Amal", text: "They fixed my AC gas leak in no time. Very happy with the service.", rating: 5 },
      { name: "Saleh", text: "Great local service. Professional and honest technicians.", rating: 5 }
    ]
  },
  "al-nakheel": {
    slug: "al-nakheel",
    name: "Al Nakheel",
    heroTitle: "Elite AC & Plumbing Services in Al Nakheel, Riyadh",
    heroDesc: "Dedicated maintenance for Al Nakheel's residents. 30-minute arrival for all AC repairs and plumbing emergencies.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "Al Nakheel deserves the best. We provide certified professionals who understand the high standards of Nakheel homes.",
    aboutText2: "Our team stays updated on the latest HVAC technology to provide the most efficient cooling solutions in Nakheel.",
    faqs: [
      { q: "Are you active in Al Nakheel today?", a: "Yes, our technicians are currently serving multiple homes in Al Nakheel." },
      { q: "Do you handle central AC in Nakheel?", a: "We specialize in central, split, and ductless systems found in Nakheel." },
      { q: "Is your work guaranteed?", a: "Yes, every job in Al Nakheel comes with a full service guarantee." }
    ],
    testimonials: [
      { name: "Sulaiman", text: "Extremely professional. The best HVAC team in Riyadh.", rating: 5 },
      { name: "Haya", text: "They fixed our plumbing issue and cleaned up perfectly after.", rating: 5 },
      { name: "Majed", text: "Reliable and expert service every time. Thank you team Nakheel.", rating: 5 }
    ]
  },
  "al-qadisiyah": {
    slug: "al-qadisiyah",
    name: "Al Qadisiyah",
    heroTitle: "Rapid AC Repair & Maintenance in Al Qadisiyah",
    heroDesc: "Don't let the heat bother you in Al Qadisiyah. Our emergency team is 30 minutes away from fixing your AC or plumbing.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "Our mission in Al Qadisiyah is to provide the most reliable home maintenance services at the most competitive rates.",
    aboutText2: "We use industrial-grade equipment to ensure every cleaning and repair job in Qadisiyah is flawless.",
    faqs: [
      { q: "Can you arrive fast in Al Qadisiyah?", a: "Yes, we have a local mobile unit stationed in Al Qadisiyah 24/7." },
      { q: "Do you fix water heaters in Qadisiyah?", a: "Yes, we provide full water heater repair and replacement in Al Qadisiyah." },
      { q: "Is WhatsApp booking available?", a: "Yes, it's the fastest way to get a technician in Al Qadisiyah." }
    ],
    testimonials: [
      { name: "Zaid", text: "Quickest response I've ever seen. Fixed my AC in minutes.", rating: 5 },
      { name: "Fatima", text: "Polite staff and very clean work. The best in Qadisiyah.", rating: 5 },
      { name: "Ibrahim", text: "Great value for money. Very satisfied with the AC gas refill.", rating: 5 }
    ]
  },
  "al-rabwah": {
    slug: "al-rabwah",
    name: "Al Rabwah",
    heroTitle: "Home Maintenance & AC Experts in Al Rabwah",
    heroDesc: "Fast AC repair, plumbing, and complete home solutions for Al Rabwah residents. Professional work guaranteed.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "In Al Rabwah, we build trust through transparency and expert skill. Every repair is built to last.",
    aboutText2: "Our team is expert in Rabwah's specific mix of modern and traditional home architectures.",
    faqs: [
      { q: "Is 24/7 support available in Al Rabwah?", a: "Yes, we handle emergency calls throughout the night in Al Rabwah." },
      { q: "What brands of AC do you fix?", a: "We fix LG, Samsung, Gree, York, and all other brands in Al Rabwah." },
      { q: "Do you provide invoices for work?", a: "Yes, full digital invoices are provided for every job in Al Rabwah." }
    ],
    testimonials: [
      { name: "Nasser", text: "Professional, fast, and very clean. Highly recommended.", rating: 5 },
      { name: "Reem", text: "They saved us during a major plumbing leak. Excellent work.", rating: 5 },
      { name: "Khalil", text: "Best value for AC cleaning in Rabwah. Very thorough.", rating: 5 }
    ]
  },
  "al-rawdah": {
    slug: "al-rawdah",
    name: "Al Rawdah",
    heroTitle: "AC Repair & Plumbing Specialists in Al Rawdah",
    heroDesc: "Top-rated maintenance services for the heart of Al Rawdah. 30-min response time for all your home repair needs.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "We are Al Rawdah’s local favorite for a reason: we show up on time and we don't leave until the job is perfect.",
    aboutText2: "Thousands of Rawdah families trust us for their seasonal AC maintenance and emergency plumbing.",
    faqs: [
      { q: "Do you service Al Rawdah villas?", a: "Yes, we handle villas, compounding, and apartments in Al Rawdah." },
      { q: "How fast can you fix an AC leak?", a: "Most leaks are diagnosed and fixed in under 45 minutes in Rawdah." },
      { q: "Are your plumbers certified?", a: "Yes, all our plumbers in Rawdah are highly trained and experienced." }
    ],
    testimonials: [
      { name: "Sami", text: "The team in Rawdah is fantastic. Very fast AC fix.", rating: 5 },
      { name: "Arwa", text: "Reliable and honest. They didn't overcharge for the parts.", rating: 5 },
      { name: "Fares", text: "Highly recommend for anyone in Al Rawdah area.", rating: 5 }
    ]
  },
  "al-sahafa": {
    slug: "al-sahafa",
    name: "Al Sahafa",
    heroTitle: "Premium AC & Plumbing Maintenance in Al Sahafa",
    heroDesc: "Elite service for Al Sahafa residences. Fast, clean, and professional maintenance for all your home systems.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "In Al Sahafa, we provide a sophisticated service experience that respects your home and your time.",
    aboutText2: "Our Al Sahafa team specializes in the latest energy-efficient cooling technologies for newer homes.",
    faqs: [
      { q: "Do you offer central AC duct cleaning in Al Sahafa?", a: "Yes, it is one of our most popular services for Sahafa villas." },
      { q: "How fast is the arrival in Al Sahafa?", a: "We guarantee arrival within 30-45 minutes in Al Sahafa." },
      { q: "Do you provide emergency plumbing and pipe fixing?", a: "Yes, 24/7 emergency plumbing is available in Sahafa." }
    ],
    testimonials: [
      { name: "Meshal", text: "Excellent service as always. The best crew in Sahafa.", rating: 5 },
      { name: "Ghada", text: "They fixed our complex AC issues perfectly. Very impressed.", rating: 5 },
      { name: "Rayan", text: "Fast, clean, and worth every riyal for my Sahafa home.", rating: 5 }
    ]
  },
  "al-sulaymaniyah": {
    slug: "al-sulaymaniyah",
    name: "Al Sulaymaniyah",
    heroTitle: "Professional AC & Plumbing in Al Sulaymaniyah",
    heroDesc: "Dependable maintenance solutions for Al Sulaymaniyah homes and businesses. Quick response and guaranteed results.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "Serving the vibrant Al Sulaymaniyah area with high-efficiency repairs that keep your peace of mind intact.",
    aboutText2: "Our technicians understand the specific plumbing layouts of the Sulaymaniyah district for faster fixing.",
    faqs: [
      { q: "Do you handle restaurant kitchen plumbing in Al Sulaymaniyah?", a: "Yes, we offer specialized commercial plumbing in Sulaymaniyah." },
      { q: "Is same-day AC repair available?", a: "Always. We prioritize Al Sulaymaniyah for same-day urgent fixes." },
      { q: "Do you fix window AC units?", a: "Yes, we fix split, central, and window AC units in Sulaymaniyah." }
    ],
    testimonials: [
      { name: "Abdullah", text: "Great service in Sulaymaniyah. High quality and fast.", rating: 5 },
      { name: "Lama", text: "Very professional team. They arrived exactly on time.", rating: 5 },
      { name: "Hamad", text: "The only company I trust for my Sulaymaniyah apartment.", rating: 5 }
    ]
  },
  "hittin": {
    slug: "hittin",
    name: "Hittin",
    heroTitle: "Elite Home Maintenance & AC Services in Hittin",
    heroDesc: "Modern maintenance for Riyadh's most modern district. Fast, high-tech cooling and plumbing solutions in Hittin.",
    heroImage: "/optimized/pexels-4421160.webp",
    aboutImage: "/optimized/pexels-5691657.webp",
    aboutText1: "In Hittin, we bring the future of home maintenance—using the best tools for the best homes in Riyadh.",
    aboutText2: "Our Hittin specialists are trained in high-end European and American HVAC systems commonly found here.",
    faqs: [
      { q: "Is your Hittin team active 24/7?", a: "Yes, we have a Hittin-specific emergency crew 24 hours a day." },
      { q: "Do you handle large villa projects?", a: "Yes, we provide full AC and plumbing maintenance for Hittin estates." },
      { q: "Can I book via WhatsApp?", a: "Yes, instant WhatsApp booking is a click away for Hittin residents." }
    ],
    testimonials: [
      { name: "Osama", text: "Superb quality. No one else handles Hittin villas like them.", rating: 5 },
      { name: "Sara", text: "The team is very polite and professional. Excellent plumbing fix.", rating: 5 },
      { name: "Khalid", text: "Highly responsive and very high standards of work.", rating: 5 }
    ]
  }
};
