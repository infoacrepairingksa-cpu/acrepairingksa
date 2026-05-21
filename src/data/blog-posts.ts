export interface BlogSection {
  type: 'paragraph' | 'heading' | 'list' | 'table' | 'alert' | 'link-box';
  title?: string;
  content: string | string[] | any; // supports paragraph text, list items, or table rows
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  publishDate: string;
  readTime: string;
  author: string;
  image: string;
  category: string;
  sections: BlogSection[];
}

export const blogPosts: Record<string, BlogPost> = {
  "fix-split-ac-blowing-warm-air-riyadh": {
    slug: "fix-split-ac-blowing-warm-air-riyadh",
    title: "How to Fix a Split AC Blowing Warm Air in 45°C Riyadh Heat",
    metaDescription: "Is your split AC blowing warm air in the middle of Riyadh's 45°C heat? Read our expert troubleshooting guide on compressor issues, dirt buildup, and refrigerant leaks.",
    publishDate: "May 21, 2026",
    readTime: "8 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-5691638.webp",
    category: "AC Repair & Troubleshooting",
    sections: [
      {
        type: "paragraph",
        content: "When Riyadh temperatures surge past 45°C during the scorching summer, a fully functioning air conditioning system is a necessity, not a luxury. If your split AC unit suddenly starts blowing warm air, it can transform your living space into an oven within minutes. Diagnosing the underlying issue quickly is vital to prevent permanent system burnout."
      },
      {
        type: "alert",
        content: "🚨 EMERGENCY NOTE: If your split AC unit is making clicking noises or the outdoor unit is hummed without starting, turn off the system immediately to prevent compressor failure. Contact our emergency teams for immediate assistance."
      },
      {
        type: "heading",
        title: "Common Causes of an AC Blowing Warm Air in Riyadh",
        content: "Before calling an AC technician, understanding why your cooling has stopped is helpful. In the Gulf climate, specific environmental conditions accelerate system faults. The most common reasons include:"
      },
      {
        type: "list",
        content: [
          "**Thermostat Set Incorrectly:** Ensure your remote is set to 'Cool' mode and not accidentally toggled to 'Fan Only' or 'Heat'.",
          "**Extremely Dirty Air Filters:** Riyadh's sandstorms deposit fine desert dust inside the evaporator unit, restricting airflow and causing the system to blow warm air. Learn how to clean it in our [AC Filter Cleaning Guide](/ac-filter-cleaning).",
          "**Frozen Evaporator Coils:** Restricted airflow causes the temperature to drop below freezing, turning moisture into ice and insulating the heat exchange coils.",
          "**Compressor Failure or Capacitor Burnout:** If the compressor fails to start, the outdoor unit cannot circulate the cooling gas.",
          "**Refrigerant Leaks (R410A / R22):** If your unit has low gas levels, it won't be able to absorb heat. Check our article on [how to detect a refrigerant leak](/blog/split-ac-refrigerant-leak-signs-r410a)."
        ]
      },
      {
        type: "heading",
        title: "Step-by-Step Troubleshooting for Homeowners",
        content: "Follow this diagnostic checklist to isolate the problem before requesting professional AC repair:"
      },
      {
        type: "table",
        content: [
          ["Diagnostic Step", "What to Check", "Action to Take"],
          ["1. Thermostat Verification", "Verify remote displays the 'Cool' symbol (snowflake) and set temperature is below room temperature (ideally 22-24°C).", "Adjust the thermostat settings accordingly."],
          ["2. Airflow Inspection", "Check if the indoor blower is pushing air and if the filters are caked with dust.", "Remove and wash the filters with warm water. If dirty, book a professional [AC Cleaning service](/ac-cleaning)."],
          ["3. Outdoor Unit Inspection", "Go outside and check if the condenser fan is spinning and if the compressor is humming.", "Clear any debris surrounding the unit. If the fan spins but the compressor is silent, it may be a capacitor issue."]
        ]
      },
      {
        type: "heading",
        title: "When to Call a Professional AC Repair Service in Riyadh",
        content: "If you have cleaned the filters and confirmed the settings but your split AC is still blowing hot air, the issue likely involves technical electrical components (like a blown capacitor, control board error, or relay failure) or a refrigerant leak. Under no circumstances should you try to recharge the gas yourself, as handling R410A or R22 requires certified gear."
      },
      {
        type: "paragraph",
        content: "Our certified HVAC technicians at [AC Repairing KSA](/ac-repair) have specialized diagnostic gear to handle high-pressure electrical components and refrigerant pressure lines safely. We serve all central Riyadh districts including [Al Olaya](/locations/al-olaya) and northern suburbs like [Al Malqa](/locations/al-malqa)."
      },
      {
        type: "link-box",
        content: {
          text: "Need Immediate AC Repair? Book our certified technician team for same-day service across Riyadh.",
          link: "/ac-repair",
          buttonText: "Schedule AC Repair"
        }
      }
    ]
  },
  "ac-compressor-clicking-noise-troubleshooting": {
    slug: "ac-compressor-clicking-noise-troubleshooting",
    title: "Why Is My AC Compressor Making a Loud Clicking Noise?",
    metaDescription: "Is your outdoor AC unit making a repetitive clicking sound? Discover the common electrical faults, failing capacitors, and compressor issues that cause this warning sign.",
    publishDate: "May 22, 2026",
    readTime: "7 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-5691632.webp",
    category: "AC Repair & Troubleshooting",
    sections: [
      {
        type: "paragraph",
        content: "Air conditioners are designed to run with a consistent, rhythmic hum. When you start hearing unusual clicking noises from the outdoor unit, it is a warning sign that something is mechanically or electrically wrong. Ignoring a clicking sound can quickly lead to complete system failure, resulting in an [AC blowing warm air](/blog/fix-split-ac-blowing-warm-air-riyadh)."
      },
      {
        type: "heading",
        title: "What Causes a Repetitive Clicking Noise in an AC?",
        content: "Clicking sounds can occur inside the indoor evaporator or the outdoor condenser unit. Let's look at the electrical and mechanical causes:"
      },
      {
        type: "list",
        content: [
          "**Failing Run/Start Capacitor:** The capacitor acts as a battery to start the compressor. When it begins to degrade, it struggles to send enough voltage, resulting in a clicking sound as the compressor attempts to start.",
          "**Electrical Contact Issues:** Damaged contactors, loose wiring, or failing control boards can create rapid clicking as electrical currents struggle to flow.",
          "**Loose Fan Blades or Debris:** In Riyadh's windy periods, twigs, gravel, or sand build up inside the fan assembly, hitting the blades and producing a rhythmic clicking/clacking noise.",
          "**Worn Compressor Mounts:** The rubber isolation pads under the compressor can disintegrate, causing the heavy metal compressor to vibrate against the chassis."
        ]
      },
      {
        type: "heading",
        title: "Differentiating Clicking Sounds: What They Mean",
        content: "Not all clicking sounds are the same. Use this quick guide to understand what your air conditioner is trying to communicate:"
      },
      {
        type: "table",
        content: [
          ["Clicking Pattern", "Likely Cause", "Severity Level"],
          ["Single click when turning on", "Normal relay switch engaging", "Normal - No Action Required"],
          ["Continuous rapid clicking from outdoor unit", "Electrical contactor failure or loose wire", "High - Turn off unit immediately"],
          ["Repetitive slow clicking followed by a buzz", "Weak capacitor failing to start the compressor", "Critical - Can burn out compressor"],
          ["Loud clacking/clicking while fan runs", "Obstruction (debris/twigs) in the fan shroud", "Medium - Needs physical cleaning"]
        ]
      },
      {
        type: "heading",
        title: "How to Prevent Compressor Failure",
        content: "If the clicking is caused by a failing capacitor or contactor, leaving the system running will overheat the compressor windings, causing it to burn out permanently. Replacing a compressor is highly expensive; replacing a starting capacitor is much cheaper. Therefore, early detection is key. Ensure you book a periodic [AC Maintenance Service](/ac-maintenance) twice a year to keep all electrical connections tight and inspect capacitor health."
      },
      {
        type: "paragraph",
        content: "If you live in northern Riyadh districts like [Al Yasmin](/locations/al-yasmin) or [Hittin](/locations/hittin), our local crews are equipped to replace electrical components, clean condenser coils, and repair clicking compressors on the spot. Contact [AC Repairing KSA](/ac-repair) today."
      },
      {
        type: "link-box",
        content: {
          text: "Don't let a clicking noise destroy your compressor. Schedule a diagnostic call now.",
          link: "/ac-repair",
          buttonText: "Book Diagnostics"
        }
      }
    ]
  },
  "emergency-ac-repair-riyadh-guide": {
    slug: "emergency-ac-repair-riyadh-guide",
    title: "Emergency AC Repair Riyadh: What to Do When Your System Fails at 2 PM",
    metaDescription: "Facing a sudden air conditioner breakdown during the hottest hour of the day in Riyadh? Follow our emergency protocol to protect your home and restore cooling quickly.",
    publishDate: "May 23, 2026",
    readTime: "6 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-5691624.webp",
    category: "AC Repair & Troubleshooting",
    sections: [
      {
        type: "paragraph",
        content: "It is 2:00 PM on a scorching July afternoon in Riyadh. The outdoor temperature is touching 47°C. Suddenly, your split air conditioner turns off, and warm air begins to leak into the room. A mid-day AC breakdown in Saudi Arabia is more than just inconvenient; it can quickly become a safety hazard, especially for families with elderly relatives or children."
      },
      {
        type: "heading",
        title: "Immediate Action Steps: The Emergency AC Protocol",
        content: "If your AC breaks down during peak hours, remain calm and follow this step-by-step checklist to protect your home and HVAC equipment:"
      },
      {
        type: "list",
        content: [
          "**Step 1: Shut Off the Unit Entirely:** Leaving a broken unit powered on can overheat the motor or fuse electrical lines. Turn it off via the thermostat and remote.",
          "**Step 2: Close All Drapes and Shutters:** Keep the intense sunlight out. Seal doors, windows, and vents to trap the existing cool air as long as possible.",
          "**Step 3: Check Your Main Distribution Board:** Check if the AC breaker has tripped. If it did, reset it once. If it trips again immediately, do not touch it again. This indicates a short circuit.",
          "**Step 4: Contact an Emergency AC Repair Service:** Call our dedicated emergency hotline at [AC Repairing KSA](/ac-repair) for fast dispatch."
        ]
      },
      {
        type: "heading",
        title: "How We Handle Emergency Callouts in Riyadh",
        content: "We understand that time is of the essence during a heatwave. We have optimized our local service model to respond within 30 to 60 minutes across major districts. Here is what we do when we arrive:"
      },
      {
        type: "table",
        content: [
          ["Action", "Description", "Time Frame"],
          ["1. Rapid Dispatch", "We route our nearest field van located in your area (e.g., Al Malqa, Al Sahafa, or Al Olaya).", "30 - 60 minutes"],
          ["2. Diagnostic Test", "We test the electrical lines, compressor refrigerant pressure, and control boards.", "15 - 20 minutes"],
          ["3. On-Site Fix", "We replace standard parts (capacitors, contactors, fan motors) right from our fully-stocked van.", "30 - 45 minutes"]
        ]
      },
      {
        type: "heading",
        title: "Preventing Mid-Day AC Breakdowns",
        content: "The best way to handle an emergency is to prevent it entirely. Most emergency failures are caused by severe dust clogging or old electrical wear-and-tear that could have been identified during a standard service. Getting your coils washed and filters checked via an [AC Cleaning service](/ac-cleaning) before the summer rush is the single most effective way to guarantee summer comfort."
      },
      {
        type: "paragraph",
        content: "Whether you are located in central [Al Sulaymaniyah](/locations/al-sulaymaniyah) or eastern [Al Rawdah](/locations/al-rawdah), we are ready to assist you. Keep our number handy for any sudden HVAC emergency."
      },
      {
        type: "link-box",
        content: {
          text: "Facing a cooling emergency in Riyadh right now? Get professional help immediately.",
          link: "/ac-repair",
          buttonText: "Request Emergency Repair"
        }
      }
    ]
  },
  "water-leaking-from-indoor-ac-unit-diagnostic": {
    slug: "water-leaking-from-indoor-ac-unit-diagnostic",
    title: "Why Is Water Leaking from My Indoor AC Unit? (Step-by-Step Diagnostic)",
    metaDescription: "Discover why your indoor split AC unit is dripping water on your walls, and learn the step-by-step diagnostic to fix clogged drains and dirty coils.",
    publishDate: "May 24, 2026",
    readTime: "9 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-4421110.webp",
    category: "AC Repair & Troubleshooting",
    sections: [
      {
        type: "paragraph",
        content: "Water dripping down your walls from your indoor split AC unit can damage paint, wallpapers, and electrical outlets. While air conditioners naturally produce water through dehumidification, this water is supposed to drain safely outside. A leak indoors means the drainage path is blocked or compromised."
      },
      {
        type: "heading",
        title: "The Core Causes of Indoor AC Water Leaks",
        content: "In dry but dusty climates like Riyadh, AC water leaks are typically caused by dust mixing with water to form mud inside the system. Here are the main culprits:"
      },
      {
        type: "list",
        content: [
          "**Clogged Condensate Drain Line:** The pipe that carries water outside gets blocked by dust, mold, and algae. The water then backs up and overflows the internal drain pan.",
          "**Dirty Evaporator Coils:** Dust buildup on the coils prevents moisture from dripping smoothly into the pan. Instead, it drips off the dust layers onto your wall.",
          "**Damaged or Cracked Drain Pan:** Over time, the plastic drain pan can crack or degrade due to age, letting water slip through.",
          "**Incorrect Installation Angle:** If the indoor split unit was not installed level or with a slight slope towards the drain, gravity will pull the water backward into the room."
        ]
      },
      {
        type: "heading",
        title: "DIY Fix vs Professional HVAC Repair",
        content: "Some basic drainage checks can be done at home, but deeper issues require proper tools:"
      },
      {
        type: "table",
        content: [
          ["Problem", "DIY Solution", "Professional Action Required"],
          ["Dusty Air Filters", "Slide out the filters, wash under a tap, and dry before putting back.", "N/A - Simple home maintenance"],
          ["Clogged Drain Line", "Locate the exit pipe outside and try to clean out the opening.", "High-pressure flush or vacuum pump to clear internal blockages."],
          ["Frozen Coils", "Turn off the AC and let the ice melt naturally. Check if airflow improves.", "Test refrigerant levels to check for leaks. [AC Gas Refill Service](/ac-gas-refill) if needed."]
        ]
      },
      {
        type: "heading",
        title: "How to Prevent Water Leaks Long-Term",
        content: "To avoid sudden water leaks, schedule a comprehensive [AC Coil Cleaning](/ac-coil-cleaning) and drain flush once a year. Keeping the drainage pipes clear of sand ensures that condensation flows away smoothly."
      },
      {
        type: "paragraph",
        content: "If you have a water leak that is causing damage, our plumbing and HVAC teams are ready to help. We provide diagnostic services in [Al Munsiyah](/locations/al-munsiyah), [Al Qadisiyah](/locations/al-qadisiyah), and all surrounding suburbs. Contact [AC Repairing KSA](/ac-repair) to resolve your leak today."
      },
      {
        type: "link-box",
        content: {
          text: "Stop water from ruining your walls. Schedule a professional AC drain flush today.",
          link: "/ac-cleaning",
          buttonText: "Book Drain Cleaning"
        }
      }
    ]
  },
  "split-ac-refrigerant-leak-signs-r410a": {
    slug: "split-ac-refrigerant-leak-signs-r410a",
    title: "How to Tell If Your Split AC Has a Refrigerant Leak (R410A vs R22)",
    metaDescription: "Learn the major warning signs of an AC refrigerant leak, including weak cooling, ice buildup, and bubbling sounds, and find out how to fix it safely.",
    publishDate: "May 25, 2026",
    readTime: "8 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-5691631.webp",
    category: "AC Repair & Troubleshooting",
    sections: [
      {
        type: "paragraph",
        content: "Refrigerant (often called Freon) is the lifeblood of your air conditioner. It circulates between the indoor and outdoor units, absorbing heat from your home and releasing it outside. Unlike fuel, an AC does not consume refrigerant. If your gas is low, it means there is a leak in the copper lines or coils. Simply topping up the gas without fixing the leak will not solve the problem."
      },
      {
        type: "heading",
        title: "Signs Your Split AC Has a Refrigerant Leak",
        content: "Look out for these common warning signs of low refrigerant levels in your home cooling system:"
      },
      {
        type: "list",
        content: [
          "**AC is Blowing Warm Air:** Since there is not enough gas to absorb heat, the unit will blow lukewarm or warm air even in 'Cool' mode. Refer to our [Warm Air Troubleshooting Guide](/blog/fix-split-ac-blowing-warm-air-riyadh).",
          "**Ice Formed on Coils or Copper Pipes:** Low refrigerant causes pressure to drop, which makes the coils drop below freezing. Moisture turns to ice, insulating the unit.",
          "**Hissing or Bubbling Noises:** A physical hole in the copper lines will emit a distinct hissing sound (for gas) or bubbling sound (for liquid refrigerant).",
          "**Unusually High Electricity Bills:** The compressor has to run continuously to meet the target temperature, causing a surge in energy usage."
        ]
      },
      {
        type: "heading",
        title: "Refrigerant Types: R410A vs R22",
        content: "Modern systems use R410A, which is environmentally friendly and highly efficient. Older systems run on R22, which is being phased out globally. Knowing your system's refrigerant type is essential before booking service:"
      },
      {
        type: "table",
        content: [
          ["Refrigerant Type", "Common in System Age", "Availability in KSA", "Environmental Impact"],
          ["R22 (Freon)", "Systems older than 10 years", "Restricted / Phasing out", "High ozone depletion potential"],
          ["R410A (Puron)", "Modern systems (less than 10 years old)", "Widely available", "Eco-friendly, zero ozone depletion"]
        ]
      },
      {
        type: "heading",
        title: "The Professional Leak Repair Process",
        content: "Fixing a refrigerant leak is a multi-step process that must be carried out by a certified technician:"
      },
      {
        type: "list",
        content: [
          "**1. Leak Detection:** We use electronic leak detectors or nitrogen pressure tests to find the exact location of the leak.",
          "**2. Welding & Repair:** The damaged section of the copper tubing is welded and sealed.",
          "**3. Evacuation/Vacuuming:** We run a vacuum pump to remove air and moisture from the lines.",
          "**4. Refrigerant Recharge:** We weigh in the exact charge of R410A or R22 gas using digital scales. Book our [AC Gas Refill Service](/ac-gas-refill) for details."
        ]
      },
      {
        type: "paragraph",
        content: "If you are located in northern Riyadh districts like [Al Sahafa](/locations/al-sahafa) or [Al Malqa](/locations/al-malqa), our certified technicians can repair your leak and recharge your refrigerant to restore complete cooling. Contact [AC Repairing KSA](/ac-repair) today."
      },
      {
        type: "link-box",
        content: {
          text: "Think your AC is leaking gas? Let our experts diagnose and repair the leak permanently.",
          link: "/ac-gas-refill",
          buttonText: "Schedule Leak Repair"
        }
      }
    ]
  }
};
