const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src', 'data', 'blog-posts.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newBlogs = `
  "central-vs-split-ac-riyadh": {
    slug: "central-vs-split-ac-riyadh",
    title: "Central AC vs Split AC in Riyadh: Which is Better for Your Home?",
    metaDescription: "Choosing between central AC and split AC for your Riyadh home? Our expert comparison covers cost, efficiency, installation, and which system suits villas, apartments, and offices in Saudi Arabia.",
    publishDate: "June 8, 2026",
    readTime: "11 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-5691638.webp",
    category: "AC Buying Guide",
    sections: [
      {
        type: "paragraph",
        content: "When it comes to cooling your home in Riyadh's intense summer heat, you have two primary choices: a split AC system (the wall-mounted units you see in most apartments) or a central AC system (the ducted system common in villas and commercial buildings). Each has major advantages and specific drawbacks depending on your property type, budget, and cooling needs."
      },
      {
        type: "paragraph",
        content: "This detailed comparison will help you make the right decision for your home or office, factoring in Riyadh's specific climate conditions, electricity costs, and the realities of HVAC maintenance in Saudi Arabia."
      },
      {
        type: "heading",
        title: "What is a Split AC System?",
        content: "A split AC consists of two units: a compact indoor air handler mounted on the wall and an outdoor compressor/condenser unit. They are connected by refrigerant lines and electrical wiring. Split ACs are the most common cooling solution in Saudi apartments and smaller villas, and are available in a wide range of capacities from 1 to 3 tons."
      },
      {
        type: "heading",
        title: "What is a Central AC System?",
        content: "A central AC system uses one large compressor unit (or multiple units for large buildings) to cool an entire building through a network of ducts installed in the ceiling or walls. Air is distributed to each room via grilles and vents. Central AC is the standard in large Riyadh villas, hotels, hospitals, and commercial spaces."
      },
      {
        type: "heading",
        title: "Head-to-Head Comparison: Split AC vs Central AC",
        content: "Here is a detailed side-by-side comparison to help you decide which system is right for your property:"
      },
      {
        type: "table",
        content: [
          ["Factor", "Split AC", "Central AC"],
          ["Installation Cost", "Low — per unit", "High — duct network required"],
          ["Cooling Coverage", "One room per unit", "Entire building from one system"],
          ["Energy Efficiency", "Excellent for 1–2 rooms", "More efficient for large spaces"],
          ["Temperature Control", "Per room control", "Centralized (zone control possible)"],
          ["Aesthetics", "Visible wall units", "Hidden ducts, cleaner look"],
          ["Maintenance", "Simple — filter wash", "Complex — duct cleaning needed"],
          ["Best For", "Apartments, small villas", "Large villas, offices, commercial"]
        ]
      },
      {
        type: "heading",
        title: "Energy Efficiency in Riyadh's Climate",
        content: "In Riyadh, where outdoor temperatures regularly exceed 45°C, your AC system runs for 10–14 hours per day during summer. The energy efficiency difference between split and central systems is significant and directly impacts your monthly SEWA/SEC electricity bill."
      },
      {
        type: "list",
        content: [
          "**Modern inverter split ACs** achieve 5-star energy ratings and can be up to 60% more efficient than fixed-speed compressors",
          "**Central AC systems** lose significant energy through duct leakage — studies show 20–30% cooling loss in poorly maintained duct systems",
          "**Zone-control central systems** are the most efficient for large villas when only some areas need cooling",
          "**Multiple split ACs** are often more efficient than central AC for properties under 300 sqm"
        ]
      },
      {
        type: "heading",
        title: "Maintenance Requirements: What You Need to Know",
        content: "Maintenance is a critical factor for long-term ownership costs in Saudi Arabia's dusty environment:"
      },
      {
        type: "table",
        content: [
          ["Maintenance Task", "Split AC", "Central AC"],
          ["Filter Cleaning", "Every 2 weeks (DIY)", "Monthly by technician"],
          ["Coil Cleaning", "Annually", "Annually + duct inspection"],
          ["Gas Check", "Every 2–3 years", "Every 2–3 years"],
          ["Duct Cleaning", "Not applicable", "Every 3–5 years"],
          ["Annual Service Cost", "Lower", "Higher"]
        ]
      },
      {
        type: "heading",
        title: "Which System is Right for Your Property?",
        content: "Based on the property type, here is our professional recommendation for Riyadh homeowners:"
      },
      {
        type: "list",
        content: [
          "**Studio or 1-bedroom apartment:** 1 split AC (1.5 ton inverter) — most cost-effective",
          "**2-3 bedroom apartment:** 2–3 split ACs, one per living area",
          "**Small villa (under 300 sqm):** 4–6 split ACs or a small central system",
          "**Large villa (300+ sqm):** Central AC with zone control is recommended",
          "**Commercial office:** Central AC with VRF (Variable Refrigerant Flow) system"
        ]
      },
      {
        type: "paragraph",
        content: "Whether you have a split AC or central system, our team provides expert [AC repair](/ac-repair), [AC maintenance](/ac-maintenance), [AC cleaning](/ac-cleaning), and [gas refill](/ac-gas-refill) services across all Riyadh districts. Contact us for a free consultation on which system suits your property."
      }
    ]
  },

  "plumbing-leak-detection-riyadh": {
    slug: "plumbing-leak-detection-riyadh",
    title: "How to Detect & Fix Hidden Plumbing Leaks in Riyadh Homes (2026 Guide)",
    metaDescription: "Hidden plumbing leaks in Riyadh homes cause massive water bills and structural damage. Learn how to detect leaks behind walls, under floors, and in bathrooms — and when to call a professional plumber.",
    publishDate: "June 10, 2026",
    readTime: "9 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-5691638.webp",
    category: "Plumbing & Home Maintenance",
    sections: [
      {
        type: "paragraph",
        content: "A hidden plumbing leak in a Riyadh home can silently waste thousands of liters of water per month, dramatically increase your water bills, and cause severe structural damage to walls, ceilings, and flooring. The challenge is that the most dangerous leaks are the ones you cannot see — hidden inside walls, under concrete slabs, or behind bathroom tiles."
      },
      {
        type: "paragraph",
        content: "This comprehensive guide helps Riyadh homeowners identify the warning signs of hidden leaks, understand the most common leak locations, and know when to call a professional [plumbing service](/plumbing) for emergency repair."
      },
      {
        type: "alert",
        content: "🚰 URGENT: If you notice water stains on ceilings, bubbling paint on walls, or sudden spikes in your SEWA water bill exceeding double your normal consumption, you likely have a major hidden leak. Do not delay — water damage worsens exponentially and can lead to mold growth within 48 hours."
      },
      {
        type: "heading",
        title: "Most Common Hidden Leak Locations in Riyadh Homes",
        content: "Based on our plumbing service experience across Riyadh, these are the most frequent locations where hidden leaks occur:"
      },
      {
        type: "list",
        content: [
          "**Under-slab pipe leaks** — copper or CPVC pipes embedded in concrete floors corrode over time, especially in older Riyadh villas",
          "**Bathroom wall leaks** — faulty tile grout, deteriorated shower seals, or loose fittings behind the wall",
          "**Kitchen sink drain leaks** — often hidden under the cabinet, slowly rotting the wooden base",
          "**Water heater connections** — pressure relief valves and inlet/outlet connections are common failure points",
          "**Rooftop tank overflow pipe** — a partially open ball valve causes continuous water loss undetected for months"
        ]
      },
      {
        type: "heading",
        title: "Warning Signs of a Hidden Plumbing Leak",
        content: "You don't always need to see water to know you have a leak. Watch for these signs:"
      },
      {
        type: "table",
        content: [
          ["Warning Sign", "Likely Cause", "Urgency"],
          ["Water bill doubled with no usage change", "Under-slab or hidden pipe leak", "🔴 High — call immediately"],
          ["Damp patch or stain on wall/ceiling", "Pipe leak or failed seal behind surface", "🔴 High"],
          ["Bubbling or peeling paint on walls", "Water seeping through wall from behind", "🟡 Medium — inspect soon"],
          ["Musty or mold smell in room", "Chronic moisture from slow hidden leak", "🟡 Medium"],
          ["Low water pressure suddenly", "Major pipe leak reducing flow", "🔴 High"],
          ["Sound of running water when all taps off", "Active pipe leak in walls or slab", "🔴 High — call immediately"]
        ]
      },
      {
        type: "heading",
        title: "How to Check if You Have a Hidden Leak",
        content: "This simple test can confirm a hidden leak exists within 30 minutes:"
      },
      {
        type: "list",
        content: [
          "**Step 1:** Turn off ALL water-using appliances — taps, dishwasher, washing machine, water cooler",
          "**Step 2:** Locate your SEWA water meter (usually near the main gate) and note the reading",
          "**Step 3:** Do NOT use any water for 30–60 minutes",
          "**Step 4:** Check the meter again — if the reading has changed, you have a hidden leak",
          "**Step 5:** Call a professional plumber for leak detection — do not attempt to open walls yourself"
        ]
      },
      {
        type: "heading",
        title: "Professional Leak Detection Methods Used in Riyadh",
        content: "Modern professional plumbers use advanced, non-destructive methods to find hidden leaks without demolishing walls:"
      },
      {
        type: "list",
        content: [
          "**Acoustic leak detection** — electronic devices listen for the sound of water escaping pipes inside walls",
          "**Thermal imaging cameras** — infrared cameras detect temperature differences caused by wet areas behind walls",
          "**Tracer gas detection** — non-toxic gas injected into pipes escapes at leak points and is detected by sensors",
          "**Video pipe inspection** — miniature cameras inserted into drains to visually locate cracks and blockages"
        ]
      },
      {
        type: "heading",
        title: "Preventing Plumbing Leaks in Riyadh's Climate",
        content: "Riyadh's extreme temperature fluctuations (from 5°C in winter to 48°C in summer) cause pipes to expand and contract, stressing joints and fittings. These preventive measures significantly reduce leak risk:"
      },
      {
        type: "list",
        content: [
          "Schedule an annual [home maintenance inspection](/home-maintenance) that includes plumbing checks",
          "Replace old copper pipes with CPVC or PPR pipes that resist corrosion better",
          "Check toilet flush mechanisms annually — a running toilet can waste 200+ liters per day",
          "Inspect under-sink connections every 6 months for mineral deposits and corrosion",
          "Install a main water shutoff valve that is easily accessible for emergencies"
        ]
      },
      {
        type: "paragraph",
        content: "If you suspect a hidden leak in your Riyadh home, our certified plumbing team is available for same-day emergency service across all districts including Al Olaya, Al Malaz, Al Yasmin, Hittin, and Al Narjis. Visit our [plumbing service page](/plumbing) to book an inspection today."
      }
    ]
  }
`;

const closing = '};';
const lastIndex = content.lastIndexOf(closing);
const newContent = content.slice(0, lastIndex) + ',' + newBlogs + '\n' + closing + '\n';
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Added 2 more blogs successfully! Total: 15 blogs now.');
