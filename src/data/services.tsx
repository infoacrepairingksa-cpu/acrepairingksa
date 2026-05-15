import React from "react";
import { 
  Snowflake, 
  Wrench, 
  Droplets, 
  Wind, 
  Zap, 
  ShieldCheck, 
  Settings,
  Sparkles,
  Home,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldAlert,
  ThermometerSnowflake,
  Activity,
  PenTool,
  Droplet,
  Search
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ReactNode;
  heroImage: string;
  problems: {
    title: string;
    list: string[];
  };
  included: string[];
  whyChooseUs: {
    title: string;
    desc: string;
    icon: React.ReactNode;
  }[];
  stats: { label: string; value: string }[];
  systems: string[];
  process: { title: string; desc: string; icon: React.ReactNode }[];
  faqs: { question: string; answer: string }[];
  testimonials: { name: string; area: string; text: string; rating: number }[];
  metaTitle: string;
  metaDesc: string;
  designArchetype: "high-impact" | "modernist" | "tech-grid" | "trust-partner";
  brands?: string[];
  serviceTypes?: { title: string; desc: string }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "ac-repair": {
    slug: "ac-repair",
    designArchetype: "high-impact",
    title: "Expert AC Repair Services in Riyadh",
    subtitle: "Fast & Reliable AC Repair by Certified Technicians Across Riyadh.",
    shortDesc: "Don't let the Riyadh heat get to you. Our emergency AC repair team is available 24/7 to fix cooling issues, leaks, and electrical faults instantly.",
    longDesc: "Professional AC repair services for split AC, central AC, and duct systems in Riyadh. We understand that a broken AC in 45°C weather is an emergency. Our technicians are equipped with advanced diagnostic tools to find the root cause of cooling failures and fix them on the first visit.",
    heroImage: "/optimized/pexels-4421160.webp",
    icon: <Snowflake />,
    problems: {
      title: "Signs Your AC Needs Urgent Repair",
      list: [
        "Weak cooling or blowing warm air",
        "Water leakage from the indoor unit",
        "Unusual loud grinding or buzzing noises",
        "Bad smell or burning odor from vents",
        "High electricity bills despite normal usage",
        "AC turning on and off frequently (short cycling)"
      ]
    },
    included: [
      "Full system electrical diagnosis",
      "Compressor and capacitor testing",
      "Gas pressure and level checking",
      "Drainage pipe blockage removal",
      "Fan motor and blade inspection",
      "Performance and cooling optimization"
    ],
    whyChooseUs: [
      { title: "Certified Team", desc: "Expert HVAC engineers with years of Riyadh experience.", icon: <ShieldCheck /> },
      { title: "30-Min Arrival", desc: "Mobile fleet stationed in North, East & West Riyadh.", icon: <Clock /> },
      { title: "Fixed Rates", desc: "Honest pricing with no hidden charges or surprises.", icon: <Zap /> },
      { title: "Original Parts", desc: "We only use genuine manufacturer-approved spare parts.", icon: <Settings /> }
    ],
    stats: [
      { label: "Jobs Completed", value: "8,500+" },
      { label: "Customer Rating", value: "4.9/5" },
      { label: "Active Techs", value: "45+" }
    ],
    systems: ["Split AC Units", "Central AC Systems", "Window AC", "Package Units", "Cassette AC", "Chiller Systems"],
    process: [
      { title: "Book Service", desc: "Call or WhatsApp us for instant confirmation.", icon: <MapPin /> },
      { title: "Rapid Inspection", desc: "Technician arrives and diagnoses the fault.", icon: <Search /> },
      { title: "Expert Repair", desc: "Fixing the issue with professional equipment.", icon: <Wrench /> },
      { title: "Final Testing", desc: "Ensuring maximum cooling before we leave.", icon: <CheckCircle2 /> }
    ],
    faqs: [
      { question: "How much time does AC repair take?", answer: "Most repairs are completed within 45-90 minutes depending on the part replacement needed." },
      { question: "Do you offer emergency AC service in Riyadh?", answer: "Yes, we operate 24/7. Our emergency team can reach you within 30-60 minutes across Riyadh." },
      { question: "Do you repair all AC brands?", answer: "We repair all major brands including LG, Samsung, Gree, York, Carrier, Zamil, and more." }
    ],
    testimonials: [
      { name: "Ahmed Al-Fahad", area: "Al Malqa", text: "Fixed my split AC gas leak in 30 minutes. Very professional and clean work.", rating: 5 },
      { name: "Sarah Khan", area: "Al Yasmin", text: "Best service in Riyadh. They arrived exactly on time and fixed the loud noise issue.", rating: 5 }
    ],
    metaTitle: "AC Repair Services in Riyadh | Same-Day Emergency Fix",
    metaDesc: "Professional AC repair services in Riyadh. Certified technicians for split, central & window AC. Same-day service with 24/7 support. Book now!",
    brands: ["LG", "Samsung", "Gree", "Carrier", "Daikin", "Panasonic", "Midea", "Haier", "York", "Zamil", "Sharp", "Toshiba", "Fujitsu", "Trane"],
    serviceTypes: [
      { title: "Split AC Repair", desc: "Expert diagnosis and repair for all split AC brands." },
      { title: "Central AC Repair", desc: "Comprehensive fix for large central and ducted systems." },
      { title: "Compressor Repair", desc: "Professional compressor replacement and performance restoration." },
      { title: "AC Gas Leak Repair", desc: "Nitrogen testing and permanent leak fixing for gas pipes." },
      { title: "Thermostat Repair", desc: "Fixing control issues and sensor calibration." },
      { title: "Fan Motor Repair", desc: "Repairing noisy or stuck indoor/outdoor fan motors." },
      { title: "PCB Repair", desc: "Main circuit board repair for smart and inverter AC units." },
      { title: "Emergency AC Repair", desc: "Fast 24/7 response for total cooling failures." }
    ]
  },
  "ac-cleaning": {
    slug: "ac-cleaning",
    designArchetype: "modernist",
    title: "Deep AC Cleaning & Sanitization Riyadh",
    subtitle: "Breath Pure Air & Boost Cooling with Pro Jet-Wash Cleaning.",
    shortDesc: "Riyadh dust can kill your AC performance. Our deep pressure cleaning removes mold, bacteria, and dust to restore ice-cold airflow instantly.",
    longDesc: "Deep chemical cleaning and high-pressure jet wash for all Riyadh AC units. Dirty coils are the #1 cause of high electricity bills. Our specialized cleaning process not only improves cooling but also sanitizes the air your family breathes.",
    heroImage: "/optimized/pexels-5691624.webp",
    icon: <Droplets />,
    problems: {
      title: "Signs Your AC Needs Deep Cleaning",
      list: [
        "Dust coming out from the vents",
        "Musty or moldy smell when turned on",
        "Reduced airflow even at high speeds",
        "Ice forming on the copper pipes",
        "Allergies or coughing while indoors",
        "Slow cooling after a long winter break"
      ]
    },
    included: [
      "High-pressure jet wash of indoor coil",
      "Chemical cleaning of outdoor condenser",
      "Drainage line vacuuming and flushing",
      "Anti-bacterial foam treatment",
      "Filter sanitization and cleaning",
      "Unit casing and grill deep wash"
    ],
    whyChooseUs: [
      { title: "No Mess Policy", desc: "We use waterproof bags to protect your furniture and walls.", icon: <ShieldCheck /> },
      { title: "Eco-Chemicals", desc: "Safe, non-toxic cleaning agents for your health.", icon: <Droplet /> },
      { title: "Energy Saver", desc: "Clean coils reduce power consumption by up to 25%.", icon: <Zap /> },
      { title: "Expert Finish", desc: "Full performance check post-cleaning.", icon: <Sparkles /> }
    ],
    stats: [
      { label: "ACs Cleaned", value: "12,000+" },
      { label: "Dust Removed", value: "500kg+" },
      { label: "Happy Clients", value: "9,500+" }
    ],
    systems: ["Split AC", "Ductless AC", "Cassette Units", "Window Units", "Central Air"],
    process: [
      { title: "Protection", desc: "Covering walls and floor with plastic sheets.", icon: <ShieldAlert /> },
      { title: "Disassembly", desc: "Opening the unit for deep internal access.", icon: <Settings /> },
      { title: "Jet Wash", desc: "High-pressure chemical wash of the cooling fins.", icon: <Droplets /> },
      { title: "Sanitization", desc: "Applying anti-bacterial spray for fresh air.", icon: <CheckCircle2 /> }
    ],
    faqs: [
      { question: "How often should I clean my AC in Riyadh?", answer: "Due to the Riyadh sandstorms and dust, we recommend professional cleaning every 3 to 6 months." },
      { question: "Will cleaning reduce my electricity bill?", answer: "Yes, clean coils allow the compressor to work efficiently, saving up to 20-30% on power." },
      { question: "Do you use chemicals for cleaning?", answer: "We use specialized, non-corrosive AC cleaning agents that are safe for aluminum fins and human health." }
    ],
    testimonials: [
      { name: "Mohammed R.", area: "Al Olaya", text: "My AC feels like it's brand new. The ice-cold air is back!", rating: 5 },
      { name: "Lina M.", area: "Al Narjis", text: "Very impressed with the waterproof bag technique. No mess at all.", rating: 5 }
    ],
    metaTitle: "AC Cleaning Services Riyadh | Pro Jet-Wash & Sanitization",
    metaDesc: "Get professional AC cleaning in Riyadh. High-pressure jet wash, bacterial sanitization, and dust removal for split & central AC. Better cooling guaranteed!"
  },
  "ac-installation": {
    slug: "ac-installation",
    designArchetype: "tech-grid",
    title: "Professional AC Installation Riyadh",
    subtitle: "Precision AC Mounting & Setup for New Homes and Offices.",
    shortDesc: "Bought a new AC? Don't risk a poor install. Our master technicians ensure perfect mounting, copper piping, and gas balancing for all brands.",
    longDesc: "Expert AC installation for split and window units in Riyadh. A bad installation leads to gas leaks and water drips. We use high-grade American copper kits and precise leveling to ensure your new unit runs perfectly for years.",
    heroImage: "/optimized/pexels-4421110.webp",
    icon: <Wrench />,
    problems: {
      title: "Common Bad Installation Issues",
      list: [
        "Water dripping from the indoor unit",
        "Frequent gas leakage from pipe joints",
        "Vibrating or noisy outdoor units",
        "Unit not cooling despite being new",
        "Ugly exposed wiring and copper pipes",
        "Short-circuiting due to poor connections"
      ]
    },
    included: [
      "Precision bracket mounting (Indoor/Outdoor)",
      "Premium American copper kit installation",
      "PPR/PVC drainage pipe setup",
      "Vacuuming and gas level balancing",
      "Safe electrical wiring and connections",
      "Full performance testing and walkthrough"
    ],
    whyChooseUs: [
      { title: "Neat Finish", desc: "No messy wires or crooked units. Perfect alignment.", icon: <PenTool /> },
      { title: "Zero Leak Tech", desc: "Professional pipe flaring to prevent gas leaks.", icon: <Droplet /> },
      { title: "Fast Setup", desc: "Most split AC installs finished in 2 hours.", icon: <Clock /> },
      { title: "Certified Techs", desc: "Authorized installers for all major Riyadh brands.", icon: <ShieldCheck /> }
    ],
    stats: [
      { label: "Installs Done", value: "4,200+" },
      { label: "Leak-Free Rate", value: "99.9%" },
      { label: "Warranty Jobs", value: "100%" }
    ],
    systems: ["Split AC", "Window AC", "Floor Standing AC", "Cassette AC"],
    process: [
      { title: "Site Survey", desc: "Deciding the best location for airflow.", icon: <MapPin /> },
      { title: "Mounting", desc: "Drilling and securing the heavy-duty brackets.", icon: <Settings /> },
      { title: "Piping", desc: "Connecting copper and drainage lines securely.", icon: <Activity /> },
      { title: "Launch", desc: "Vacuuming and starting the system for testing.", icon: <CheckCircle2 /> }
    ],
    faqs: [
      { question: "Do you provide copper pipes for installation?", answer: "Yes, we provide standard 4-meter American copper kits. Longer lengths are available if needed." },
      { question: "Can you remove old AC and install new one?", answer: "Absolutely. We offer removal of old units and professional installation of the new one." },
      { question: "Do you offer warranty on installation?", answer: "Yes, we provide a 1-year warranty on our installation workmanship and pipe joints." }
    ],
    testimonials: [
      { name: "Khalid A.", area: "Al Malaz", text: "Professional installation for my new villa. The pipes are hidden perfectly.", rating: 5 },
      { name: "Fatima S.", area: "Al Rawdah", text: "They arrived on time and finished the install very quickly. Highly recommend.", rating: 5 }
    ],
    metaTitle: "AC Installation Riyadh | Professional Split & Window AC Setup",
    metaDesc: "Need a new AC installed in Riyadh? We offer professional split & window AC installation with premium copper kits and 1-year service warranty."
  },
  "ac-maintenance": {
    slug: "ac-maintenance",
    designArchetype: "trust-partner",
    title: "AC Maintenance & AMC Services Riyadh",
    subtitle: "Prevent Breakdowns with Professional Seasonal Tune-ups.",
    shortDesc: "Don't wait for your AC to fail in the middle of a Riyadh summer. Our maintenance plans keep your unit healthy, quiet, and energy-efficient.",
    longDesc: "Annual maintenance contracts (AMC) and seasonal tune-ups for Riyadh villas and offices. Regular checkups extend the life of your compressor and prevent sudden breakdowns during peak heat periods.",
    heroImage: "/optimized/pexels-5691657.webp",
    icon: <Settings />,
    problems: {
      title: "Risks of Neglecting AC Maintenance",
      list: [
        "Sudden compressor failure at night",
        "Clogged filters causing system freeze",
        "Loose electrical wires causing fire risk",
        "Corroded coils leading to expensive leaks",
        "Constant high electricity bills",
        "Noisy operation and poor air quality"
      ]
    },
    included: [
      "20-point electrical and mechanical check",
      "Gas pressure and top-up verification",
      "Filter cleaning and debris removal",
      "Condenser coil inspection and cleaning",
      "Thermostat calibration and testing",
      "Lubrication of fan motor and bearings"
    ],
    whyChooseUs: [
      { title: "Priority Support", desc: "AMC customers get 30-min priority arrival.", icon: <Zap /> },
      { title: "Cost Savings", desc: "Prevent expensive repairs before they happen.", icon: <Droplet /> },
      { title: "Detailed Reports", desc: "Full health check report for every AC unit.", icon: <Activity /> },
      { title: "Trusted Fleet", desc: "The same technician visits you for consistency.", icon: <ShieldCheck /> }
    ],
    stats: [
      { label: "AMC Clients", value: "850+" },
      { label: "Villas Managed", value: "1,200+" },
      { label: "Uptime Rate", value: "99%" }
    ],
    systems: ["Central AC", "Split AC", "Package Units", "Chillers", "VRV Systems"],
    process: [
      { title: "Scheduling", desc: "We call you for your periodic tune-up.", icon: <Clock /> },
      { title: "Inspection", desc: "A technician performs a 20-point check.", icon: <Search /> },
      { title: "Optimization", desc: "Cleaning and tuning for peak efficiency.", icon: <Settings /> },
      { title: "Approval", desc: "You receive a signed health certificate.", icon: <CheckCircle2 /> }
    ],
    faqs: [
      { question: "What is included in AC maintenance?", answer: "It includes filter cleaning, gas level check, electrical inspection, and full system health reporting." },
      { question: "How many times a year is maintenance needed?", answer: "In Riyadh, we highly recommend a full tune-up twice a year (Before Summer & Before Winter)." },
      { question: "Do you offer maintenance for villas?", answer: "Yes, we specialize in comprehensive villa AMC plans covering all AC units in the property." }
    ],
    testimonials: [
      { name: "Zaid H.", area: "Al Nakheel", text: "Their AMC plan is great. I don't have to worry about my AC failing anymore.", rating: 5 },
      { name: "Reem Al-Otaibi", area: "Al Sahafa", text: "Very thorough maintenance. My electric bill actually went down this month.", rating: 5 }
    ],
    metaTitle: "AC Maintenance Riyadh | Annual Contracts & Seasonal Tune-ups",
    metaDesc: "Keep your AC running smoothly with professional maintenance in Riyadh. AMC plans for villas and offices. Certified technicians & 24/7 support."
  },
  "ac-gas-refill": {
    slug: "ac-gas-refill",
    designArchetype: "high-impact",
    title: "AC Gas Refill & Leak Fix Riyadh",
    subtitle: "Restore Ice-Cold Cooling with Original R410A Refrigerant.",
    shortDesc: "Is your AC blowing hot air? You likely have a gas leak. We don't just refill; we find the leak, fix it, and recharge with high-purity gas.",
    longDesc: "Professional AC gas top-up and leak repair in Riyadh. We use industrial-grade nitrogen testing to find hidden leaks in copper pipes and coils, ensuring your gas lasts for years, not just days.",
    heroImage: "/optimized/pexels-4421110.webp",
    icon: <Zap />,
    problems: {
      title: "Signs Your AC Has a Gas Leak",
      list: [
        "AC blowing warm or room-temperature air",
        "Ice formation on the thin copper pipe",
        "Hissing noise from the indoor or outdoor unit",
        "Compressor running but no cooling",
        "AC taking too long to cool the room",
        "Oil spots around the pipe joints"
      ]
    },
    included: [
      "Full nitrogen pressure leak testing",
      "Copper joint brazing and repair",
      "Vacuum pump system flushing",
      "Original R410A or R22 gas refill",
      "Amperage and pressure monitoring",
      "90-day warranty on the gas refilled"
    ],
    whyChooseUs: [
      { title: "Pure Gas Only", desc: "We use only high-purity, branded refrigerants.", icon: <Activity /> },
      { title: "Leak Detection", desc: "We fix the leak first so you don't waste money.", icon: <Search /> },
      { title: "Safe Tools", desc: "Industrial-grade gauges and vacuum pumps.", icon: <Settings /> },
      { title: "Urgent Support", desc: "Same-day gas refill across all Riyadh areas.", icon: <Clock /> }
    ],
    stats: [
      { label: "Leaks Fixed", value: "3,200+" },
      { label: "Gas Used", value: "2,500kg" },
      { label: "Success Rate", value: "98%" }
    ],
    systems: ["Split AC", "Central AC", "Window AC", "Ductless Systems"],
    process: [
      { title: "Detection", desc: "Finding the leak point using nitrogen.", icon: <Search /> },
      { title: "Brazing", desc: "Welding the copper leak with high heat.", icon: <Wrench /> },
      { title: "Vacuum", desc: "Removing air and moisture from the lines.", icon: <Droplets /> },
      { title: "Refill", desc: "Charging gas by weight as per specs.", icon: <Zap /> }
    ],
    faqs: [
      { question: "Which gas do you use for AC?", answer: "We use R410A for modern units and R22 for older ones, always choosing original high-purity brands." },
      { question: "Why does AC gas leak?", answer: "Vibrations, corrosion, or poor installation can cause microscopic holes in copper pipes or joints." },
      { question: "Is AC gas refill dangerous?", answer: "If handled by non-professionals, it can be. Our technicians use precise gauges and safety protocols." }
    ],
    testimonials: [
      { name: "Saleh", area: "Al Munsiyah", text: "Fixed my gas leak and refilled it perfectly. Cooling is amazing now.", rating: 5 },
      { name: "Fatima", area: "Al Shifa", text: "Reasonable price and very professional equipment. They fixed the leak properly.", rating: 5 }
    ],
    metaTitle: "AC Gas Refill Riyadh | Leak Fix & Freon Recharge Services",
    metaDesc: "Professional AC gas refill in Riyadh. We fix leaks, vacuum the system, and refill with original R410A gas. Same-day service with 24/7 support."
  },
  "ac-duct-cleaning": {
    slug: "ac-duct-cleaning",
    designArchetype: "modernist",
    title: "AC Duct Cleaning & Air Quality Riyadh",
    subtitle: "Remove Dust, Mold & Allergens from Your Ventilation Vents.",
    shortDesc: "Healthy air starts with clean ducts. Our robotic brush cleaning removes years of Riyadh sand and bacteria from your central AC system.",
    longDesc: "Deep AC duct cleaning for Riyadh villas and buildings. If your family has allergies, dirty ducts are the culprit. We use high-power suction and anti-bacterial fogging to sanitize your entire ventilation system.",
    heroImage: "/optimized/pexels-5691624.webp",
    icon: <Wind />,
    problems: {
      title: "Signs Your Vents Need Cleaning",
      list: [
        "Black dust around the AC ceiling grills",
        "Musty or dead-animal smell from vents",
        "Increased asthma or allergy symptoms",
        "Unexplained dust on furniture every day",
        "Rattling noises inside the ductwork",
        "Uneven cooling in different rooms"
      ]
    },
    included: [
      "Robotic camera inspection of ductwork",
      "Mechanical brush agitation of dust",
      "High-power HEPA vacuum suction",
      "Medical-grade anti-bacterial fogging",
      "Grill and diffuser deep sanitization",
      "Full airflow performance report"
    ],
    whyChooseUs: [
      { title: "Health First", desc: "Eliminate 99% of mold and bacteria from air.", icon: <Activity /> },
      { title: "No Dust Escape", desc: "Sealed vacuum process keeps your home clean.", icon: <ShieldCheck /> },
      { title: "Robotic Tech", desc: "We see what other companies miss.", icon: <Search /> },
      { title: "Odor Removal", desc: "Long-lasting freshness with pro sanitizers.", icon: <Sparkles /> }
    ],
    stats: [
      { label: "Villas Cleaned", value: "650+" },
      { label: "Dust Extracted", value: "2,000kg" },
      { label: "Air Quality Boost", value: "100%" }
    ],
    systems: ["Central AC Ducts", "Package Unit Vents", "Supply & Return Vents"],
    process: [
      { title: "Inspection", desc: "Inserting a camera to see the buildup.", icon: <Search /> },
      { title: "Scrubbing", desc: "Using robotic brushes to loosen sand.", icon: <Wrench /> },
      { title: "Extraction", desc: "Sucking out all debris with high-power vacuum.", icon: <Wind /> },
      { title: "Fogging", desc: "Sanitizing the system with pro chemicals.", icon: <Sparkles /> }
    ],
    faqs: [
      { question: "Is duct cleaning needed for new houses in Riyadh?", answer: "Yes, construction dust is the #1 cause of clogged ducts in new Riyadh villas." },
      { question: "How long does duct cleaning take?", answer: "For a standard 4-bedroom villa, it takes about 4 to 6 hours for a complete deep clean." },
      { question: "Does it help with the smell?", answer: "Absolutely. Our anti-bacterial fogging kills mold which is the main source of vent odors." }
    ],
    testimonials: [
      { name: "Majed B.", area: "Hittin", text: "The amount of sand they took out of my ducts was shocking. Air is so fresh now.", rating: 5 },
      { name: "Noura Al-Dosari", area: "Al Aqiq", text: "Professional team and very high-tech equipment. Highly recommend for villas.", rating: 5 }
    ],
    metaTitle: "AC Duct Cleaning Riyadh | Professional Vent Sanitization",
    metaDesc: "Deep AC duct cleaning in Riyadh. Robotic brush technology, anti-bacterial fogging, and dust removal for central AC. Improve your indoor air quality today!"
  },
  "plumbing-fix": {
    slug: "plumbing-fix",
    designArchetype: "high-impact",
    title: "24/7 Emergency Plumbing Services Riyadh",
    subtitle: "Fast Leak Repair, Drain Unblocking & Master Plumbing.",
    shortDesc: "From pipe bursts to water heater leaks, our emergency plumbers are ready 24/7 to save your Riyadh home from water damage.",
    longDesc: "Professional plumbing services for villas and apartments in Riyadh. We use acoustic leak detectors and thermal cameras to find hidden leaks behind walls without breaking your expensive tiles.",
    heroImage: "/optimized/pexels-545012.webp",
    icon: <Droplets />,
    problems: {
      title: "Common Plumbing Emergencies",
      list: [
        "Major pipe burst or water flooding",
        "Water heater leaking or not heating",
        "Main sewer line or toilet blockage",
        "Hidden dampness or mold on walls",
        "Low water pressure in the whole house",
        "Faulty water pump or tank sensor"
      ]
    },
    included: [
      "Acoustic leak detection technology",
      "Water heater repair and replacement",
      "High-pressure drain unblocking",
      "PPR pipe welding and repair",
      "Bathroom and kitchen faucet fixing",
      "Water pump and tank maintenance"
    ],
    whyChooseUs: [
      { title: "Emergency Team", desc: "Plumbers stationed across Riyadh 24/7.", icon: <Clock /> },
      { title: "Non-Invasive", desc: "Finding leaks without breaking tiles.", icon: <Search /> },
      { title: "Quality PPR", desc: "We use only high-grade durable fittings.", icon: <ShieldCheck /> },
      { title: "Clean Work", desc: "No mess left behind after the repair.", icon: <CheckCircle2 /> }
    ],
    stats: [
      { label: "Leaks Found", value: "2,800+" },
      { label: "Response Time", value: "35 Min" },
      { label: "Happy Homes", value: "5,000+" }
    ],
    systems: ["Water Supply Pipes", "Drainage Systems", "Water Heaters", "Pumps", "Tanks"],
    process: [
      { title: "Isolation", desc: "Stopping the water flow to prevent damage.", icon: <Zap /> },
      { title: "Detection", desc: "Locating the leak with thermal/acoustic tools.", icon: <Search /> },
      { title: "Fix", desc: "Repairing the pipe or fixture professionally.", icon: <Wrench /> },
      { title: "Test", desc: "Pressure testing the system for zero leaks.", icon: <Activity /> }
    ],
    faqs: [
      { question: "Do you offer emergency plumbing at night?", answer: "Yes, we have a dedicated 24/7 emergency team for pipe bursts and flooding." },
      { question: "How do you find a hidden leak?", answer: "We use ultrasonic sound detectors and thermal imaging to find leaks behind tiles accurately." },
      { question: "Do you repair central water heaters?", answer: "Yes, we are experts in both individual and large central water heater systems for villas." }
    ],
    testimonials: [
      { name: "Ibrahim", area: "Al Rabwah", text: "The plumber arrived in 20 minutes for a pipe burst. Saved my living room!", rating: 5 },
      { name: "Hana S.", area: "Al Qadisiyah", text: "Fixed our water heater quickly. Very polite and professional staff.", rating: 5 }
    ],
    metaTitle: "Plumbing Services Riyadh | 24/7 Emergency Leak Repair",
    metaDesc: "Professional plumbers in Riyadh available 24/7. Leak detection, drain unblocking, and water heater repair. Same-day emergency support across Riyadh."
  },
  "home-maintenance": {
    slug: "home-maintenance",
    designArchetype: "trust-partner",
    title: "Complete Home Maintenance Riyadh",
    subtitle: "Your One-Stop Shop for Electrical, Plumbing & General Repairs.",
    shortDesc: "Managing a Riyadh home is easy with us. From flickering lights to villa renovations, our multi-skilled team handles it all under one roof.",
    longDesc: "All-in-one home maintenance solutions for Riyadh residents. We combine AC, plumbing, electrical, and handyman services into a single point of contact, ensuring your home is always in top shape.",
    heroImage: "/optimized/pexels-5691657.webp",
    icon: <Home />,
    problems: {
      title: "Signs Your Home Needs Maintenance",
      list: [
        "Electrical sparks or tripping breakers",
        "Multiple small leaks around the house",
        "Door locks or hinges not working",
        "Wall cracks or paint peeling off",
        "Faulty garden lights or water pumps",
        "General wear and tear in old villas"
      ]
    },
    included: [
      "Electrical wiring and fixture repair",
      "Plumbing and pipe health check",
      "AC system optimization and cleaning",
      "Handyman services (locks, furniture, etc.)",
      "Minor masonry and painting work",
      "Full villa safety and health audit"
    ],
    whyChooseUs: [
      { title: "One Contact", desc: "No need to call 5 different companies.", icon: <Settings /> },
      { title: "Handyman Experts", desc: "Skilled in all types of home fixes.", icon: <PenTool /> },
      { title: "Villa Packages", desc: "Special maintenance plans for large properties.", icon: <Home /> },
      { title: "Safety First", desc: "Strict background-checked technicians.", icon: <ShieldCheck /> }
    ],
    stats: [
      { label: "Homes Managed", value: "2,500+" },
      { label: "Repair Tasks", value: "15,000+" },
      { label: "Trust Score", value: "100%" }
    ],
    systems: ["Electrical", "Plumbing", "HVAC", "Civil/Masonry", "Appliance Fix"],
    process: [
      { title: "Survey", desc: "We inspect your home and give a task list.", icon: <Search /> },
      { title: "Booking", desc: "Schedule a time that suits your family.", icon: <Clock /> },
      { title: "Repair", desc: "Our multi-skilled team executes the tasks.", icon: <Wrench /> },
      { title: "Verification", desc: "You inspect and approve the quality work.", icon: <CheckCircle2 /> }
    ],
    faqs: [
      { question: "Do you offer annual maintenance plans?", answer: "Yes, we have popular AMC plans for villas that cover AC, plumbing, and electrical work." },
      { question: "Can you help with moving furniture or fixing locks?", answer: "Yes, our handyman team is expert in all those small but important tasks." },
      { question: "Are your technicians background checked?", answer: "Absolutely. All our staff are fully documented, background-checked, and highly professional." }
    ],
    testimonials: [
      { name: "Abdullah K.", area: "Al Munsiyah", text: "Excellent for villa owners. They fixed everything from the AC to the gate light.", rating: 5 },
      { name: "Sara", area: "Al Sahafa", text: "Professional and very respectful of our privacy. The best team I've hired.", rating: 5 }
    ],
    metaTitle: "Home Maintenance Riyadh | Electrical, Plumbing & Handyman",
    metaDesc: "Complete home maintenance services in Riyadh. Certified technicians for AC, plumbing, and electrical repairs. One-stop solution for your Riyadh villa."
  },
  "ac-filter-cleaning": {
    slug: "ac-filter-cleaning",
    designArchetype: "modernist",
    title: "AC Filter Cleaning & Air Health Riyadh",
    subtitle: "Boost Cooling and Filter Out Dust for a Healthier Riyadh Home.",
    shortDesc: "Clogged filters are the #1 reason for AC breakdowns. We provide deep chemical sanitization for filters to ensure pure air and high-efficiency cooling.",
    longDesc: "Professional AC filter cleaning services in Riyadh. Riyadh's sand can clog filters in just 2 weeks. Our service includes chemical sanitization to kill bacteria that grows on dirty filters.",
    heroImage: "/optimized/pexels-5691624.webp",
    icon: <Wind />,
    problems: {
      title: "Signs Your Filters are Clogged",
      list: [
        "Weak airflow from the indoor unit",
        "AC is turning off and on too fast",
        "Strange smell from the vents",
        "Ice forming on the indoor coil",
        "Electricity bill is higher than normal",
        "More dust settling on furniture"
      ]
    },
    included: [
      "Deep chemical wash of all filters",
      "Anti-bacterial spray treatment",
      "Indoor grill and diffuser cleaning",
      "Visual inspection of the indoor coil",
      "Airflow speed measurement",
      "Debris removal from the intake area"
    ],
    whyChooseUs: [
      { title: "Healthier Air", desc: "Kill 99% of germs trapped in filters.", icon: <Activity /> },
      { title: "Quick Service", desc: "Done in 30 minutes for the whole house.", icon: <Clock /> },
      { title: "Cheap & Effective", desc: "The most affordable way to boost cooling.", icon: <Zap /> },
      { title: "No Dust Mess", desc: "Cleaned outside your living room area.", icon: <ShieldCheck /> }
    ],
    stats: [
      { label: "Filters Cleaned", value: "25,000+" },
      { label: "Airflow Boost", value: "40%" },
      { label: "Clean Air Rate", value: "99.9%" }
    ],
    systems: ["Split AC Filters", "Central AC Grills", "Window AC Filters"],
    process: [
      { title: "Removal", desc: "Safely removing the filters from units.", icon: <Settings /> },
      { title: "Chemical Wash", desc: "Washing with anti-bacterial foam.", icon: <Droplet /> },
      { title: "Drying", desc: "Ensuring they are dry before install.", icon: <Wind /> },
      { title: "Refit", desc: "Installing back and checking airflow.", icon: <CheckCircle2 /> }
    ],
    faqs: [
      { question: "Can I clean filters myself?", answer: "Yes, but our chemical wash kills bacteria and mold that plain water can't remove." },
      { question: "How often should I clean filters in Riyadh?", answer: "Once a month during the summer is highly recommended for Riyadh homes." },
      { question: "Does it help with the AC smell?", answer: "Yes, the filters are the primary place where mold-causing smells start." }
    ],
    testimonials: [
      { name: "Omar", area: "Al Olaya", text: "Fast and very cheap. My AC airflow doubled after they cleaned the filters.", rating: 5 },
      { name: "Lina", area: "Al Yasmin", text: "Great service for my apartment. Very clean and professional.", rating: 5 }
    ],
    metaTitle: "AC Filter Cleaning Riyadh | Boost Airflow & Sanitization",
    metaDesc: "Professional AC filter cleaning in Riyadh. Improve airflow and air health with deep chemical sanitization. Same-day service across Riyadh districts."
  },
  "ac-coil-cleaning": {
    slug: "ac-coil-cleaning",
    designArchetype: "tech-grid",
    title: "AC Coil Cleaning & Combing Riyadh",
    subtitle: "Restore Thermal Efficiency with Deep Chemical Coil Wash.",
    shortDesc: "Dirty coils reduce cooling by 60%. We provide professional chemical wash and fin straightening to restore your AC to factory performance.",
    longDesc: "Specialized AC coil cleaning in Riyadh. When your coils are blocked by sand and grime, your compressor overheats. We use safe chemicals to dissolve the buildup and 'comb' the fins for perfect thermal exchange.",
    heroImage: "/optimized/pexels-5691657.webp",
    icon: <ThermometerSnowflake />,
    problems: {
      title: "Signs Your Coils are Blocked",
      list: [
        "AC running all day but room is not cold",
        "Compressor tripping frequently in hot sun",
        "Ice buildup on the indoor cooling coil",
        "Outdoor unit blowing extremely hot air",
        "Bent or crushed aluminum fins",
        "Water leaking from the drain pan"
      ]
    },
    included: [
      "Chemical foam wash for indoor evaporator",
      "Deep jet wash for outdoor condenser",
      "Aluminum fin straightening (Combing)",
      "Corrosion protection spray",
      "Thermal exchange performance test",
      "90-day performance guarantee"
    ],
    whyChooseUs: [
      { title: "Cooling Specialist", desc: "We focus on the heart of the AC system.", icon: <Activity /> },
      { title: "Safe Chemicals", desc: "Non-corrosive agents that protect coils.", icon: <ShieldCheck /> },
      { title: "Max Efficiency", desc: "Restores cooling power to brand new state.", icon: <Zap /> },
      { title: "Pro Equipment", desc: "Industrial fin combs and pressure pumps.", icon: <Settings /> }
    ],
    stats: [
      { label: "Coils Restored", value: "1,500+" },
      { label: "Energy Saved", value: "35%" },
      { label: "Uptime Rate", value: "100%" }
    ],
    systems: ["Split AC Coils", "Central AC Evaporators", "Window AC Condensers"],
    process: [
      { title: "Access", desc: "Opening the unit to reach the internal coils.", icon: <Search /> },
      { title: "Foaming", desc: "Applying specialized dirt-dissolving foam.", icon: <Droplets /> },
      { title: "Rinsing", desc: "Jet washing the foam and sand away.", icon: <Droplet /> },
      { title: "Combing", desc: "Straightening the fins for better airflow.", icon: <PenTool /> }
    ],
    faqs: [
      { question: "Why do coils need cleaning?", answer: "Sand and humidity in Riyadh create a 'mud' layer on coils that stops heat from escaping." },
      { question: "Will it stop my compressor from tripping?", answer: "Yes, clean coils allow the compressor to run at lower temperatures." },
      { question: "Does it help with energy bills?", answer: "Significantly. Clogged coils make your unit work twice as hard to cool." }
    ],
    testimonials: [
      { name: "Saud", area: "Al Malqa", text: "My AC was tripping every day. They cleaned the coils and now it works 24/7.", rating: 5 },
      { name: "Fares", area: "Al Nakheel", text: "High quality service. The coil combing made a huge difference in airflow.", rating: 5 }
    ],
    metaTitle: "AC Coil Cleaning Riyadh | Condenser Wash & Fin Straightening",
    metaDesc: "Professional AC coil cleaning in Riyadh. Chemical wash, fin combing, and deep sanitization for maximum cooling efficiency and lower electricity bills."
  }
};
