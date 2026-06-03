// Service + Location combination data for programmatic SEO
// Each service has unique content per location

export const serviceLocationMeta: Record<string, {
  title: string;
  description: string;
  emoji: string;
  color: string;
  entities: string[];
  problems: string[];
  steps: string[];
  faqs: { q: string; a: string }[];
}> = {
  "ac-repair": {
    title: "AC Repair",
    description: "Professional split AC and central AC repair services",
    emoji: "❄️",
    color: "blue",
    entities: ["HVAC system", "compressor", "condenser coil", "evaporator", "refrigerant", "thermostat", "capacitor", "contactor", "air handler"],
    problems: ["AC blowing warm air", "compressor not starting", "refrigerant leak", "AC tripping circuit breaker", "unusual clicking or grinding noise", "water leaking from indoor unit", "AC not turning on at all"],
    steps: ["Turn off your AC at the thermostat", "Check the circuit breaker panel", "Inspect the outdoor unit for debris", "Check if the air filter is blocked", "Call our certified technician for diagnosis", "Technician arrives within 30 minutes", "Full repair with 90-day warranty"],
    faqs: [
      { q: "How much does AC repair cost in Riyadh?", a: "AC repair in Riyadh typically costs between SAR 100–500 depending on the fault. Minor repairs like capacitor replacement cost SAR 100–200. Compressor repairs cost SAR 300–800. We provide free diagnosis before any repair." },
      { q: "How long does AC repair take?", a: "Most AC repairs in Riyadh are completed within 1–2 hours. Complex compressor replacements may take 3–4 hours. Our technicians carry common spare parts to minimize wait time." },
      { q: "Do you provide AC repair warranty?", a: "Yes. All our AC repairs come with a 90-day service warranty. If the same fault occurs within 90 days, we fix it at no additional cost." },
      { q: "Can you repair central AC systems?", a: "Yes, we repair both split AC systems and central ducted AC systems across all Riyadh areas." },
    ]
  },
  "ac-cleaning": {
    title: "AC Cleaning",
    description: "Deep chemical AC cleaning and sanitization services",
    emoji: "🧹",
    color: "green",
    entities: ["evaporator coil", "air filter", "drain pan", "ductwork", "blower fan", "refrigerant coil", "mold", "bacteria", "dust accumulation"],
    problems: ["AC producing musty smell", "reduced airflow from vents", "AC coils covered in dust", "visible mold on AC unit", "high electricity bills from dirty AC", "allergies from AC air"],
    steps: ["Technician inspects all AC components", "Filter removed and deep washed", "Coils cleaned with anti-bacterial chemical solution", "Drain pan cleaned and cleared", "Blower fan cleaned and balanced", "Unit reassembled and tested", "Air quality check performed"],
    faqs: [
      { q: "How often should I clean my AC in Riyadh?", a: "In Riyadh's dusty climate, AC filters should be cleaned every 2–3 weeks. A professional deep cleaning should be done every 3 months, or at the start of every summer season." },
      { q: "What is included in AC chemical cleaning?", a: "Our deep AC cleaning includes: filter washing, evaporator coil cleaning with chemical solution, drain pan cleaning, blower fan cleaning, and anti-bacterial sanitization spray." },
      { q: "Does AC cleaning improve cooling performance?", a: "Yes. A dirty AC can lose up to 40% of its cooling efficiency. After professional cleaning, you will notice significantly better cooling and lower electricity bills." },
      { q: "Can dirty AC cause health problems?", a: "Yes. Mold, bacteria, and dust in AC units can cause respiratory issues, allergies, and skin irritation. Regular professional cleaning prevents these health risks." },
    ]
  },
  "ac-installation": {
    title: "AC Installation",
    description: "Professional split and central AC installation services",
    emoji: "🔧",
    color: "purple",
    entities: ["split AC unit", "outdoor compressor", "indoor air handler", "copper pipe", "refrigerant line", "electrical wiring", "drainage pipe", "wall bracket", "condenser unit"],
    problems: ["no cooling in new room or villa", "old AC unit needs replacement", "new apartment needs AC installation", "villa expansion needs additional AC units", "office space needs commercial AC"],
    steps: ["Site visit and AC capacity calculation", "Select correct tonnage for room size", "Outdoor compressor unit positioned", "Indoor unit mounted on wall bracket", "Copper refrigerant lines connected", "Electrical connections completed", "System charged with refrigerant", "Full test run and temperature verification"],
    faqs: [
      { q: "What AC size do I need for my room in Riyadh?", a: "For Riyadh's climate: 1 ton for rooms up to 12 sqm, 1.5 ton for 12–18 sqm, 2 ton for 18–25 sqm, 2.5 ton for 25–35 sqm, and 3 ton for rooms up to 45 sqm. Our technician will calculate the exact requirement." },
      { q: "How long does AC installation take?", a: "A standard split AC installation takes 2–4 hours. Installing multiple units in a villa may take a full day. We always complete in one visit." },
      { q: "Do you supply the AC unit or just install?", a: "We provide both supply and installation services. We can supply trusted brands like Gree, Midea, and Carrier, or install a unit you have purchased yourself." },
      { q: "What warranty comes with AC installation?", a: "We provide a 1-year installation warranty. Any issues with the installation workmanship are fixed at no cost within this period." },
    ]
  },
  "ac-maintenance": {
    title: "AC Maintenance",
    description: "Seasonal AC maintenance and preventive service packages",
    emoji: "🛠️",
    color: "orange",
    entities: ["filter check", "refrigerant level", "electrical connections", "capacitor", "thermostat calibration", "coil inspection", "drain cleaning", "lubrication", "system pressure"],
    problems: ["AC performance degrading over time", "higher electricity bills month by month", "AC not cooling as effectively as before", "strange noises during operation", "AC shutting off randomly"],
    steps: ["Complete visual inspection of all components", "Filter cleaning and replacement if needed", "Coil inspection and light cleaning", "Refrigerant level check", "Electrical connections tightened", "Capacitor and contactor tested", "Drain line cleared", "Thermostat calibration", "Full performance test report"],
    faqs: [
      { q: "How often should AC maintenance be done in Riyadh?", a: "We recommend AC maintenance twice per year: once before summer (April) and once after summer (October). In dusty areas of Riyadh, quarterly maintenance is ideal." },
      { q: "What does AC maintenance prevent?", a: "Regular maintenance prevents compressor failure (very expensive), refrigerant leaks, electrical faults, and significantly reduces electricity consumption. It extends AC life by 5–8 years." },
      { q: "Do you offer annual maintenance contracts?", a: "Yes. Our annual AC maintenance contracts cover 2 full service visits per year, priority emergency response, and discounted repair rates. Ideal for villas and commercial spaces." },
      { q: "How much does AC maintenance cost in Riyadh?", a: "A single AC maintenance visit costs SAR 100–200 per unit. Annual contracts for multiple units are significantly cheaper per unit." },
    ]
  },
  "ac-gas-refill": {
    title: "AC Gas Refill",
    description: "R410A and R22 refrigerant gas refill with leak testing",
    emoji: "💨",
    color: "teal",
    entities: ["R410A refrigerant", "R22 refrigerant", "refrigerant pressure", "manifold gauge", "leak detector", "charging port", "refrigerant recovery", "EPA certified technician"],
    problems: ["AC not cooling despite running", "ice forming on AC pipes", "hissing sound from AC unit", "warm air from AC vents", "AC takes too long to cool room", "very high electricity consumption"],
    steps: ["Technician connects manifold gauges to AC system", "Current refrigerant pressure measured", "Leak detection test performed on all joints", "Any leaks identified and repaired first", "Correct amount of refrigerant added", "Pressures verified against manufacturer specs", "Cooling performance tested"],
    faqs: [
      { q: "How do I know my AC needs a gas refill?", a: "Signs your AC needs refrigerant: warm air from vents despite running, ice on copper pipes, hissing sound, or system running constantly without cooling. Our technician will confirm with gauges." },
      { q: "What type of gas does my AC use?", a: "Most ACs manufactured after 2015 use R410A refrigerant. Older systems may use R22 (Freon). Check your AC nameplate for the refrigerant type. We supply both." },
      { q: "How long does a gas refill last?", a: "A properly sealed AC system should never need refrigerant refill. If you need frequent refills, there is a leak that must be repaired. We fix the leak before adding refrigerant." },
      { q: "How much does AC gas refill cost in Riyadh?", a: "R410A refill costs approximately SAR 150–300 depending on how much refrigerant is needed. R22 costs more due to supply restrictions. We charge only for the actual amount added." },
    ]
  },
  "ac-duct-cleaning": {
    title: "AC Duct Cleaning",
    description: "Professional air duct and ventilation system deep cleaning",
    emoji: "💨",
    color: "gray",
    entities: ["air duct", "ventilation system", "supply vents", "return vents", "plenum", "duct blower", "HEPA vacuum", "mold remediation", "ductwork insulation"],
    problems: ["musty smell from vents", "dust coming from vents", "uneven cooling in rooms", "high energy bills in central AC system", "visible mold or dust around vent grilles", "residents experiencing respiratory issues"],
    steps: ["All vent grilles removed and inspected", "Duct camera inspection for mold and blockages", "High-power HEPA vacuum connected to main duct", "Each branch duct cleaned individually", "Anti-bacterial fog treatment applied", "All vents reinstalled and sealed", "Airflow tested at each vent"],
    faqs: [
      { q: "How often should AC ducts be cleaned?", a: "Air ducts in Riyadh homes should be cleaned every 3–5 years for normal use. If you have pets, smokers, or recent construction, clean every 1–2 years. Central AC systems in villas need more frequent cleaning." },
      { q: "Does duct cleaning improve AC performance?", a: "Yes. Blocked or dirty ducts can reduce airflow by 30–40%, causing the AC system to work harder and consume more electricity. After cleaning, you will notice more even cooling and lower bills." },
      { q: "Can dirty ducts cause health problems?", a: "Absolutely. Mold, bacteria, dust mites, and allergens in ductwork are circulated throughout your home. This is a major cause of respiratory issues, especially in children and elderly." },
      { q: "Do you use chemical treatment in duct cleaning?", a: "Yes. After mechanical cleaning, we apply an EPA-approved anti-bacterial and anti-mold fogger inside the ducts to kill remaining bacteria and prevent future mold growth." },
    ]
  },
  "ac-filter-cleaning": {
    title: "AC Filter Cleaning",
    description: "Regular AC filter maintenance and replacement services",
    emoji: "🌬️",
    color: "sky",
    entities: ["HEPA filter", "air filter", "pre-filter", "electrostatic filter", "carbon filter", "PM2.5 filtration", "dust particles", "pollen", "air quality"],
    problems: ["reduced cooling despite AC running", "AC making louder noise than usual", "dusty air inside home", "AC filter visibly grey or clogged", "increased electricity consumption"],
    steps: ["AC unit accessed and filter removed", "Filter inspected for condition", "Washable filters deep cleaned with water and cleaning solution", "Dried completely before reinstallation", "Non-washable filters replaced with new ones", "Filter track cleaned", "System tested for improved airflow"],
    faqs: [
      { q: "How often should AC filters be cleaned in Riyadh?", a: "In Riyadh's dusty desert environment, AC filters should be cleaned every 2 weeks during heavy use (summer). During moderate use, monthly cleaning is sufficient." },
      { q: "Can I clean my AC filter myself?", a: "Yes, basic filter cleaning can be done by homeowners. However, deeper internal components like evaporator coils and drain pans require professional cleaning to avoid damage." },
      { q: "What happens if I don't clean my AC filter?", a: "A blocked filter reduces airflow, forcing the compressor to work harder. This leads to higher electricity bills, reduced cooling, premature compressor failure, and poor indoor air quality." },
      { q: "When should the filter be replaced rather than cleaned?", a: "Replace your filter if it is physically damaged, has permanent discoloration, or if it is a non-washable HEPA-type filter (typically replaced every 6–12 months)." },
    ]
  },
  "ac-coil-cleaning": {
    title: "AC Coil Cleaning",
    description: "Evaporator and condenser coil deep cleaning for maximum efficiency",
    emoji: "🧊",
    color: "cyan",
    entities: ["evaporator coil", "condenser coil", "thermal efficiency", "heat exchange", "coil fins", "scale buildup", "chemical descaler", "coil fin comb", "refrigerant contact"],
    problems: ["AC cooling less than before", "outdoor unit very hot to touch", "ice forming on indoor unit", "AC running constantly without reaching set temperature", "higher than usual electricity bills"],
    steps: ["Indoor unit opened and evaporator coil exposed", "Coil sprayed with chemical cleaning solution", "20-minute soak time for chemical action", "High-pressure rinse to remove debris", "Outdoor condenser coil cleaned with safe pressure wash", "Fin straightening performed if needed", "System tested for efficiency improvement"],
    faqs: [
      { q: "How often should AC coils be cleaned in Riyadh?", a: "Evaporator coils should be cleaned annually as part of your regular AC service. Condenser coils (outdoor unit) may need cleaning every 6 months due to Riyadh's dust levels." },
      { q: "How does dirty coil affect AC performance?", a: "Dirty coils act as insulation between the refrigerant and the air, reducing heat exchange efficiency. This can reduce cooling capacity by up to 40% and increase electricity consumption significantly." },
      { q: "Is coil cleaning safe for my AC?", a: "Yes, when done by professionals using appropriate chemicals and techniques. Amateur cleaning with too-high pressure or wrong chemicals can damage the delicate aluminum fins." },
      { q: "What chemicals do you use for coil cleaning?", a: "We use non-acidic, biodegradable foaming coil cleaners that safely dissolve organic buildup without damaging aluminum fins or copper tubing." },
    ]
  },
  "plumbing": {
    title: "Plumbing",
    description: "Emergency plumbing repair, leak detection and pipe services",
    emoji: "🔧",
    color: "blue",
    entities: ["pipe repair", "water heater", "leak detection", "drain cleaning", "pressure valve", "water meter", "CPVC pipe", "PPR pipe", "sewage system"],
    problems: ["water leak behind wall", "low water pressure throughout home", "clogged drain or toilet", "water heater not heating", "burst pipe emergency", "high water bill with no obvious cause"],
    steps: ["Emergency call received and technician dispatched", "Plumber arrives with full toolkit", "Leak source identified using professional detection methods", "Water supply shut off to affected area", "Repair or replacement performed", "Pipe sealed and tested at pressure", "Area cleaned and inspected for secondary damage"],
    faqs: [
      { q: "How quickly can you respond to a plumbing emergency in Riyadh?", a: "Our emergency plumbing team responds within 30–45 minutes to all Riyadh districts. For major leaks, call us immediately and we dispatch the nearest available technician." },
      { q: "How do I know if I have a hidden pipe leak?", a: "Signs of hidden leaks: water bill doubled without explanation, damp patches on walls, musty smell in rooms, sound of running water when all taps are off, or low water pressure throughout home." },
      { q: "Do you fix water heaters?", a: "Yes. We repair all types of water heaters including storage tank, instant heaters, and solar water heaters. We also handle gas water heater connections." },
      { q: "Can you detect leaks without breaking walls?", a: "Yes. We use acoustic leak detection devices and thermal imaging cameras to locate leaks behind walls without unnecessary demolition." },
    ]
  },
};

export const locationData: Record<string, {
  nameAr: string;
  type: string;
  description: string;
  nearbyAreas: string[];
  commonProblems: string[];
  population: string;
}> = {
  "al-olaya": {
    nameAr: "العليا",
    type: "Commercial & Residential",
    description: "Al Olaya is Riyadh's prime business district, home to major towers, luxury hotels, and high-end residential compounds. It requires top-tier HVAC services for both commercial and residential clients.",
    nearbyAreas: ["Al Sulaymaniyah", "Al Malqa", "Al Aqiq"],
    commonProblems: ["Central AC failures in commercial buildings", "High-load compressor issues in towers", "VRF system maintenance"],
    population: "High-density",
  },
  "al-malaz": {
    nameAr: "الملز",
    type: "Residential",
    description: "Al Malaz is one of Riyadh's oldest and most established residential neighborhoods with a mix of government housing, traditional villas, and apartment complexes.",
    nearbyAreas: ["Al Rawdah", "Al Munsiyah", "Al Qadisiyah"],
    commonProblems: ["Older AC units requiring frequent repair", "R22 refrigerant systems needing upgrade", "Pipe corrosion in older villas"],
    population: "Dense residential",
  },
  "al-yasmin": {
    nameAr: "الياسمين",
    type: "Upscale Residential",
    description: "Al Yasmin is a prestigious residential district in northern Riyadh known for luxury villas, gated compounds, and modern amenities. Large villas require robust central AC systems.",
    nearbyAreas: ["Al Narjis", "Hittin", "Al Malqa"],
    commonProblems: ["Central AC duct cleaning in large villas", "Multi-zone AC system maintenance", "Smart thermostat integration issues"],
    population: "Upscale villa community",
  },
  "al-narjis": {
    nameAr: "النرجس",
    type: "Premium Residential",
    description: "Al Narjis is a modern, planned residential neighborhood in northern Riyadh featuring contemporary villas and family compounds with full amenities.",
    nearbyAreas: ["Al Yasmin", "Al Nakheel", "Al Rawabi"],
    commonProblems: ["New villa AC installation", "Humidity issues in basement rooms", "AC gas refill for newer R410A systems"],
    population: "Modern villa community",
  },
  "al-sahafa": {
    nameAr: "الصحافة",
    type: "Residential",
    description: "Al Sahafa is a well-established residential area in northern Riyadh with a mix of villas and apartment buildings, popular with families and professionals.",
    nearbyAreas: ["Al Malqa", "Al Nakheel", "Al Rawabi"],
    commonProblems: ["Filter cleaning for dusty area", "AC efficiency loss in summer peak", "Plumbing issues in older buildings"],
    population: "Mixed residential",
  },
  "al-malqa": {
    nameAr: "الملقا",
    type: "Upscale Residential",
    description: "Al Malqa is a prestigious northern Riyadh neighborhood featuring large villas, embassies, and premium residential compounds, requiring high-end HVAC solutions.",
    nearbyAreas: ["Al Yasmin", "Al Aqiq", "Al Olaya"],
    commonProblems: ["Central AC for large villas", "Emergency AC repair for diplomatic residences", "Regular preventive maintenance contracts"],
    population: "High-end villa area",
  },
  "al-aqiq": {
    nameAr: "العقيق",
    type: "Premium Residential",
    description: "Al Aqiq is an exclusive residential district in Riyadh known for its large compounds, luxury villas, and proximity to the major commercial hubs.",
    nearbyAreas: ["Al Malqa", "Al Olaya", "Al Sulaymaniyah"],
    commonProblems: ["Multi-unit AC maintenance contracts", "Central AC duct work for large properties", "Emergency callouts for luxury properties"],
    population: "Luxury compound area",
  },
  "hittin": {
    nameAr: "حطين",
    type: "Premium Residential",
    description: "Hittin is a sought-after residential neighborhood in northern Riyadh with modern villas and family communities, located near major shopping centers.",
    nearbyAreas: ["Al Yasmin", "Al Narjis", "Al Rawabi"],
    commonProblems: ["Seasonal AC maintenance before summer", "AC installation for new villa expansions", "Smart AC system upgrades"],
    population: "Family villa community",
  },
  "al-nakheel": {
    nameAr: "النخيل",
    type: "Residential",
    description: "Al Nakheel is a vibrant residential area in northern Riyadh with a mix of villas and apartments, known for its active community and family-friendly environment.",
    nearbyAreas: ["Al Narjis", "Al Sahafa", "Al Rawabi"],
    commonProblems: ["Apartment AC cleaning service", "Split AC repair and maintenance", "Plumbing services for residential buildings"],
    population: "Mixed residential community",
  },
  "al-rawdah": {
    nameAr: "الروضة",
    type: "Established Residential",
    description: "Al Rawdah is a mature, well-established residential district in eastern Riyadh with traditional villas and family homes, requiring reliable maintenance services.",
    nearbyAreas: ["Al Malaz", "Al Munsiyah", "Al Shifa"],
    commonProblems: ["Older AC system repairs and replacement", "Pipe maintenance for older villas", "AC efficiency upgrades"],
    population: "Traditional villa area",
  },
  "al-sulaymaniyah": {
    nameAr: "السليمانية",
    type: "Upscale Mixed",
    description: "Al Sulaymaniyah is a prestigious district adjacent to Al Olaya, home to luxury residences, embassies, and high-end commercial properties.",
    nearbyAreas: ["Al Olaya", "Al Aqiq", "Al Malqa"],
    commonProblems: ["Premium AC service for luxury residences", "24/7 emergency availability", "VRF and central AC systems"],
    population: "Premium mixed-use area",
  },
  "al-rabwah": {
    nameAr: "الربوة",
    type: "Residential",
    description: "Al Rabwah is a residential neighborhood in western Riyadh featuring a mix of villas and mid-range housing with good community infrastructure.",
    nearbyAreas: ["Al Munsiyah", "Al Shifa", "Al Qadisiyah"],
    commonProblems: ["Standard split AC service and repair", "Water heater repairs", "Annual maintenance contracts"],
    population: "Mixed residential",
  },
  "al-munsiyah": {
    nameAr: "المنسية",
    type: "Residential",
    description: "Al Munsiyah is an accessible residential area in Riyadh popular with families and offering good value housing close to essential services.",
    nearbyAreas: ["Al Malaz", "Al Rawdah", "Al Rabwah"],
    commonProblems: ["Affordable AC service packages", "Routine maintenance", "Emergency plumbing repairs"],
    population: "Family residential area",
  },
  "al-qadisiyah": {
    nameAr: "القادسية",
    type: "Residential",
    description: "Al Qadisiyah is a well-known residential district in eastern Riyadh with established communities, government housing, and family homes.",
    nearbyAreas: ["Al Malaz", "Al Rawdah", "Al Munsiyah"],
    commonProblems: ["AC repair for older units", "Government housing AC maintenance", "Routine plumbing services"],
    population: "Established residential area",
  },
  "al-shifa": {
    nameAr: "الشفا",
    type: "Residential",
    description: "Al Shifa is a residential neighborhood in southern Riyadh known for its established community and mix of traditional and modern housing.",
    nearbyAreas: ["Al Rabwah", "Al Qadisiyah", "Al Dar Al Baida"],
    commonProblems: ["AC service in hot southern Riyadh", "Older pipe system maintenance", "Split AC installation and repair"],
    population: "Mixed residential area",
  },
};
