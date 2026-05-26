const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'src', 'data', 'blog-posts.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newBlogs = `
  "ac-gas-refill-cost-riyadh": {
    slug: "ac-gas-refill-cost-riyadh",
    title: "AC Gas Refill Cost in Riyadh 2026: R410A & R22 Complete Guide",
    metaDescription: "Wondering how much AC gas refill costs in Riyadh? Our complete 2026 guide covers R410A & R22 pricing, leak detection, refill duration, and when to book a certified HVAC technician.",
    publishDate: "June 1, 2026",
    readTime: "9 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-5691638.webp",
    category: "AC Gas & Refrigerant",
    sections: [
      {
        type: "paragraph",
        content: "In Riyadh's extreme summer climate, a properly charged AC system is the difference between comfortable living and unbearable heat. When your split AC starts blowing warm air or struggles to cool below 26°C, the first thing most technicians check is the refrigerant gas level."
      },
      {
        type: "paragraph",
        content: "AC gas refill — also called refrigerant recharge — is one of the most frequently requested services across Riyadh. Yet many homeowners are unsure about what it costs, how long it takes, and whether they actually need it. This guide answers all those questions."
      },
      {
        type: "alert",
        content: "⚠️ IMPORTANT: Refrigerant gas cannot simply run out — low gas always means there is a leak in the system. Refilling without fixing the leak first is a temporary fix. Always insist on leak detection before recharge."
      },
      {
        type: "heading",
        title: "What is AC Gas Refill and Why is it Needed?",
        content: "Modern split ACs use a sealed refrigerant loop — the gas should never reduce under normal operation. If your system has low refrigerant, it means a leak has developed in the copper pipes, joints, or valves. The leak must be detected and repaired before adding new gas, otherwise you will need another refill within weeks."
      },
      {
        type: "heading",
        title: "Types of Refrigerant Used in Riyadh Homes",
        content: "There are two main types of refrigerant gas used in split AC units in Saudi Arabia:"
      },
      {
        type: "table",
        content: [
          ["Refrigerant Type", "AC Age", "Environment Impact", "Availability in KSA"],
          ["R22 (Freon)", "Older units (10+ years)", "High — being phased out globally", "Still available, limited supply"],
          ["R410A (Puron)", "Modern units (under 10 years)", "Lower than R22", "Widely available"],
          ["R32", "Latest inverter ACs", "Lowest of all", "Available in new units"]
        ]
      },
      {
        type: "heading",
        title: "How Much Does AC Gas Refill Cost in Riyadh?",
        content: "Costs vary depending on refrigerant type, quantity needed, and whether leak repair is required. As a general guide:"
      },
      {
        type: "table",
        content: [
          ["Service", "Estimated Duration", "Notes"],
          ["Leak Detection & Diagnosis", "30–60 min", "Always required before refill"],
          ["R22 Gas Refill (1 ton)", "45–90 min", "Older systems, limited supply"],
          ["R410A Gas Refill (1.5 ton)", "1–2 hrs", "Most common in Riyadh homes"],
          ["System Vacuum (required)", "30 min", "Must be done before refilling"],
          ["Full Leak Repair + Refill", "2–4 hrs", "Recommended complete service"]
        ]
      },
      {
        type: "heading",
        title: "Signs Your AC Needs a Gas Refill",
        content: "These are the most reliable indicators that your refrigerant level is critically low:"
      },
      {
        type: "list",
        content: [
          "**AC blows warm or lukewarm air** even when set to 18°C",
          "**Ice forming on copper pipes** near the indoor unit — paradoxically caused by low gas",
          "**Hissing or bubbling sounds** from the refrigerant lines",
          "**Unit takes hours to cool a small room** that it used to cool in 15 minutes",
          "**Electricity bills spiking** as the compressor overworks to compensate"
        ]
      },
      {
        type: "heading",
        title: "The Gas Refill Process: Step by Step",
        content: "A professional AC gas refill in Riyadh follows a strict process to ensure safety and accuracy:"
      },
      {
        type: "list",
        content: [
          "**Step 1 — Leak Detection:** Technician uses electronic detectors or UV dye to locate all leaks in the system",
          "**Step 2 — Leak Repair:** Brazed or sealed properly at the source before any gas is added",
          "**Step 3 — Vacuum:** The system is pulled into a deep vacuum to remove all air and moisture",
          "**Step 4 — Weigh-In Method:** Exact quantity of gas is measured by weight and charged into the system",
          "**Step 5 — Performance Test:** Suction and discharge pressures verified with manifold gauges"
        ]
      },
      {
        type: "heading",
        title: "DIY Gas Refill: Why It Is Dangerous",
        content: "Handling refrigerant gas without certification is illegal in many countries and dangerous everywhere. R410A operates at extremely high pressures (up to 600 PSI). Improper handling can result in freezing burns, explosion risk, and severe compressor damage from overcharging. Always use a certified [AC Gas Refill technician in Riyadh](/ac-gas-refill)."
      },
      {
        type: "heading",
        title: "How to Prevent Refrigerant Leaks",
        content: "While not all leaks are preventable, you can significantly extend your system life by:"
      },
      {
        type: "list",
        content: [
          "Scheduling [annual AC maintenance](/ac-maintenance) to inspect copper connections",
          "Avoiding physical damage to outdoor unit pipes during home renovations",
          "Not running the AC without proper airflow (dirty filters cause overpressure)",
          "Booking professional [AC coil cleaning](/ac-coil-cleaning) annually"
        ]
      },
      {
        type: "paragraph",
        content: "If you suspect a refrigerant leak, do not delay — a completely empty system can permanently burn out the compressor within hours of operation. Contact the [AC Repairing KSA team](/ac-gas-refill) for immediate leak detection and refill across all Riyadh districts."
      }
    ]
  },

  "ac-coil-cleaning-guide-riyadh": {
    slug: "ac-coil-cleaning-guide-riyadh",
    title: "Complete AC Coil Cleaning Guide for Riyadh Homes (Evaporator & Condenser)",
    metaDescription: "Dirty AC coils are the #1 cause of reduced cooling and high bills in Riyadh. Learn how to identify dirty coils, when to clean them, and why professional coil cleaning is essential in Riyadh's dusty climate.",
    publishDate: "June 3, 2026",
    readTime: "10 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-5691638.webp",
    category: "AC Maintenance & Cleaning",
    sections: [
      {
        type: "paragraph",
        content: "In Riyadh's dust-heavy environment, AC coils accumulate a thick layer of sand and debris faster than almost anywhere else in the world. This buildup silently destroys your system's efficiency — increasing electricity consumption by up to 40% and reducing cooling capacity dramatically."
      },
      {
        type: "paragraph",
        content: "Whether you own a split, window, or central air conditioning system, understanding coil cleaning is essential to keeping it running at peak performance through Saudi Arabia's brutal summer months."
      },
      {
        type: "heading",
        title: "The Two Types of AC Coils and What They Do",
        content: "Every air conditioning system has two sets of coils, each performing a critical and opposite function in the cooling cycle:"
      },
      {
        type: "table",
        content: [
          ["Coil Type", "Location", "Function", "Cleaning Frequency"],
          ["Evaporator Coil", "Indoor unit (behind filters)", "Absorbs heat from room air", "Every 6–12 months"],
          ["Condenser Coil", "Outdoor unit (aluminum fins)", "Releases heat to outside air", "Every 6–12 months"]
        ]
      },
      {
        type: "heading",
        title: "How Dirty Coils Destroy Your AC Performance",
        content: "A clean evaporator coil absorbs heat like a sponge. A dirty coil, caked with dust and mold, absorbs heat like a plastic bag — barely at all. Scientifically, a 0.1mm layer of dust on coil fins is enough to reduce heat transfer efficiency by 21%. In Riyadh, coils can accumulate this level of dust in just 3 months during haboob (sandstorm) season."
      },
      {
        type: "list",
        content: [
          "**Reduced cooling capacity** — room takes 2-3x longer to reach set temperature",
          "**Compressor overheating** — unit trips on thermal overload during peak hours",
          "**Ice formation** on evaporator coils due to restricted airflow",
          "**Mold and bacteria growth** — dirty coils are a breeding ground in humid conditions",
          "**Higher electricity bills** — dirty system consumes up to 40% more power"
        ]
      },
      {
        type: "heading",
        title: "Signs Your AC Coils Are Dirty",
        content: "You don't need to open the unit to know if your coils need cleaning. These symptoms are telltale signs:"
      },
      {
        type: "list",
        content: [
          "AC runs continuously without reaching target temperature",
          "Musty or moldy smell when AC is running",
          "Visible ice or frost on copper pipes near indoor unit",
          "Outdoor unit feels extremely hot to the touch",
          "Water dripping from indoor unit (blocked drain from bio-film on coils)"
        ]
      },
      {
        type: "heading",
        title: "Professional vs DIY Coil Cleaning",
        content: "While you can wash the basic filter yourself, the coils themselves require professional equipment and chemicals:"
      },
      {
        type: "table",
        content: [
          ["Task", "DIY Safe?", "Notes"],
          ["Outer filter wash", "✅ Yes", "Can do weekly with warm water"],
          ["Evaporator coil foam spray", "⚠️ Partial", "No-rinse foams available but limited"],
          ["Deep evaporator coil wash", "❌ No", "Requires unit disassembly and high-pressure tools"],
          ["Condenser coil cleaning", "⚠️ Partial", "Gentle hosing is ok, chemical flush requires pro"],
          ["Drain pan and pipe clean", "❌ No", "Requires vacuum and bio-treatment"]
        ]
      },
      {
        type: "heading",
        title: "What Professional AC Coil Cleaning Includes",
        content: "When you book a professional [AC coil cleaning service in Riyadh](/ac-coil-cleaning), the technician performs a comprehensive process:"
      },
      {
        type: "list",
        content: [
          "High-pressure wash of outdoor condenser coils to remove sand and dust",
          "Foam-based chemical treatment of indoor evaporator coil fins",
          "Drain pan cleaning and bio-disinfectant treatment to kill mold",
          "Air duct inlet cleaning to prevent re-contamination",
          "Full system performance test after cleaning"
        ]
      },
      {
        type: "heading",
        title: "How Often Should You Clean AC Coils in Riyadh?",
        content: "Due to Riyadh's extreme dust conditions, we recommend professional coil cleaning at least once every 6 to 12 months. During heavy sandstorm seasons (March–May), you may need outdoor condenser cleaning more frequently. The indoor evaporator coil should be professionally cleaned as part of your annual [AC maintenance package](/ac-maintenance)."
      },
      {
        type: "paragraph",
        content: "Don't wait until your AC fails completely. Book a professional [AC coil cleaning service](/ac-coil-cleaning) with our certified HVAC team and restore your unit to factory-fresh cooling performance."
      }
    ]
  },

  "ac-not-turning-on-riyadh": {
    slug: "ac-not-turning-on-riyadh",
    title: "Split AC Not Turning On in Riyadh? Complete Diagnosis & Fix Guide",
    metaDescription: "Your split AC won't turn on in Riyadh's summer heat? Before calling a technician, follow our step-by-step diagnosis guide covering power, remote, circuit breaker, capacitor, and thermostat issues.",
    publishDate: "June 5, 2026",
    readTime: "8 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-5691638.webp",
    category: "AC Repair & Troubleshooting",
    sections: [
      {
        type: "paragraph",
        content: "It happens at the worst possible time — you walk into your home at midday in Riyadh's 45°C summer heat, press the remote, and nothing happens. Your split AC simply won't turn on. No beep, no display, nothing."
      },
      {
        type: "paragraph",
        content: "Before panicking or calling for emergency AC repair, there are several quick checks you can perform yourself that resolve about 30% of 'AC not turning on' cases in minutes. This guide walks you through every possible cause from the simplest to the most serious."
      },
      {
        type: "alert",
        content: "⚡ SAFETY FIRST: If you see burn marks on the wall socket, smell burning plastic, or notice the circuit breaker trips immediately when you reset it — do NOT attempt any DIY. Call a certified electrician or our [emergency AC repair team](/ac-repair) immediately."
      },
      {
        type: "heading",
        title: "Quick Checklist: Before Calling a Technician",
        content: "Run through these checks in order — they take less than 5 minutes and often solve the problem:"
      },
      {
        type: "table",
        content: [
          ["Check", "What to Do", "Fixes?"],
          ["Remote control batteries", "Replace with fresh AA batteries", "~15% of cases"],
          ["Remote mode setting", "Ensure it's on COOL, not FAN or HEAT", "~10% of cases"],
          ["Wall socket power", "Test socket with another device", "~8% of cases"],
          ["Circuit breaker", "Check if AC breaker is tripped, reset once", "~12% of cases"],
          ["Indoor unit display", "Look for error codes on LED display", "Guides diagnosis"],
          ["Sleep / Timer mode", "Check if timer accidentally set to OFF", "~5% of cases"]
        ]
      },
      {
        type: "heading",
        title: "The Most Common Causes of AC Not Turning On",
        content: "If the quick checklist above did not solve the problem, the issue is likely one of these technical faults:"
      },
      {
        type: "list",
        content: [
          "**Dead Starting Capacitor:** The capacitor powers the compressor motor. When it fails, the outdoor unit hums but doesn't start. This is the #1 electrical fault in Riyadh due to heat stress.",
          "**Blown Control Board Fuse:** A small glass or ceramic fuse on the indoor unit PCB (control board) blows when there's a power surge. Common during Riyadh summer storms.",
          "**Faulty PCB (Printed Circuit Board):** The brain of the AC. When it fails, the unit may not respond to any commands. Displays error codes.",
          "**Thermostat Sensor Failure:** If the room temperature sensor reads incorrectly, the system may think it's already cool and not activate.",
          "**Compressor Thermal Overload:** The compressor shuts down automatically when overheated. Usually resets after 30 minutes of rest."
        ]
      },
      {
        type: "heading",
        title: "Understanding Error Codes on Your AC Display",
        content: "Most modern split AC brands display error codes when there is a fault. These codes are invaluable for diagnosis:"
      },
      {
        type: "table",
        content: [
          ["Common Error Code", "Typical Meaning", "Action"],
          ["E1 / E2", "Communication error between indoor and outdoor unit", "Check wiring, call technician"],
          ["E3 / F3", "High pressure protection — condenser blocked or overcharged", "Clean outdoor unit, check gas"],
          ["E4 / E5", "Low pressure protection — refrigerant leak or undercharged", "Book gas refill service"],
          ["E6", "Communication fault", "Power cycle the unit, then call technician"],
          ["H6 / P6", "Fan motor not running", "Fan motor or capacitor replacement needed"]
        ]
      },
      {
        type: "heading",
        title: "When It's the Outdoor Unit: Compressor Not Starting",
        content: "If your indoor unit powers on (display lights up, you hear a beep) but the outdoor unit does NOT start, the fault is almost certainly:"
      },
      {
        type: "list",
        content: [
          "**Start capacitor failure** — replace with matching microfarad rating",
          "**Contactor relay failure** — the relay that sends power to the compressor is stuck open",
          "**Low voltage to outdoor unit** — check dedicated breaker and wiring",
          "**Compressor burnout** — worst case, requires compressor replacement or full unit replacement"
        ]
      },
      {
        type: "heading",
        title: "Repair vs Replace: Making the Right Decision",
        content: "If the diagnosis reveals a compressor fault on an older unit, you face a repair vs replace decision:"
      },
      {
        type: "table",
        content: [
          ["Situation", "Recommendation"],
          ["Unit under 5 years, capacitor fault", "Repair — inexpensive and effective"],
          ["Unit 5–8 years, PCB failure", "Repair if PCB cost is under 40% of new unit price"],
          ["Unit over 8 years, compressor fault", "Consider replacement — compressor is 60–80% of unit cost"],
          ["Unit over 10 years, any major fault", "Replace — efficiency gains pay for new unit within 2–3 years"]
        ]
      },
      {
        type: "paragraph",
        content: "If your AC won't turn on and you've completed all the checks above without success, it's time to book a professional diagnostic visit. Our certified technicians across Riyadh carry replacement capacitors, PCBs, and contactors for all major brands including Gree, Midea, Carrier, Samsung, and LG. Book an [emergency AC repair](/ac-repair) appointment today."
      }
    ]
  }
`;

// Remove closing }; and append new blogs then re-add };
const closing = '};';
const lastIndex = content.lastIndexOf(closing);
const newContent = content.slice(0, lastIndex) + ',' + newBlogs + '\n' + closing + '\n';
fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Added 3 new blogs successfully!');
