export interface BlogSection {
  type: 'paragraph' | 'heading' | 'list' | 'table' | 'alert' | 'link-box';
  title?: string;
  content: string | string[] | any;
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
    readTime: "12 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-5691638.webp",
    category: "AC Repair & Troubleshooting",
    sections: [
      {
        type: "paragraph",
        content: "When Riyadh temperatures surge past 45°C during the scorching summer, a fully functioning air conditioning system is a necessity, not a luxury. If your split AC unit suddenly starts blowing warm air, it can transform your living space into an oven within minutes. Diagnosing the underlying issue quickly is vital to prevent permanent system burnout, compressor overheating, and massive repair bills. In Saudi Arabia's extreme desert climate, the cooling loop works under maximum head pressure, meaning even minor system faults can lead to a complete loss of cooling capacity."
      },
      {
        type: "alert",
        content: "🚨 EMERGENCY NOTE: If your split AC unit is making clicking noises or the outdoor unit is hummed without starting, turn off the system immediately to prevent compressor failure. Contact our emergency teams for immediate assistance."
      },
      {
        type: "heading",
        title: "Thermodynamics of Split AC Systems in the Gulf Climate",
        content: "To understand why your air conditioner is blowing warm air, you must understand the basics of the refrigeration cycle. An AC unit does not actually 'create' cold air; instead, it extracts heat from inside your home and dumps it outside. This heat transfer is facilitated by a chemical refrigerant (typically R410A in modern Saudi homes) cycling between liquid and gas states. When Riyadh's outdoor ambient temperature reaches 45°C to 50°C, the temperature on the surface of your outdoor condenser unit can easily exceed 60°C. If the outdoor condenser cannot dissipate this heat—due to dust blocking the aluminum fins, fan motor failure, or low refrigerant levels—the system loses its ability to cool the indoor air, resulting in warm air flowing out of your indoor evaporator vents."
      },
      {
        type: "heading",
        title: "The Most Common Causes of Warm Air Vents in Split AC Units",
        content: "In the Central Region of Saudi Arabia, specific environmental conditions accelerate system faults. The most common reasons include:"
      },
      {
        type: "list",
        content: [
          "**Thermostat Set Incorrectly:** Ensure your remote is set to 'Cool' mode and not accidentally toggled to 'Fan Only' or 'Heat'. It is a common mistake when children handle remote controls or when batteries are replaced.",
          "**Extremely Dirty Air Filters:** Riyadh's sandstorms deposit fine desert dust inside the evaporator unit, restricting airflow and causing the system to blow warm air. Learn how to clean it in our [AC Filter Cleaning Guide](/ac-filter-cleaning).",
          "**Frozen Evaporator Coils:** Restricted airflow causes the temperature to drop below freezing, turning moisture into ice and insulating the heat exchange coils. This blocks heat transfer completely.",
          "**Compressor Failure or Capacitor Burnout:** If the compressor fails to start, the outdoor unit cannot circulate the cooling gas. A blown starting capacitor is the single most common cause of this issue.",
          "**Refrigerant Leaks (R410A / R22):** If your unit has low gas levels, it won't be able to absorb heat. Check our article on [how to detect a refrigerant leak](/blog/split-ac-refrigerant-leak-signs-r410a).",
          "**Blocked Outdoor Condenser Unit:** Sand, dirt, and plastic bags blown by Riyadh winds can collect around the outdoor unit, blocking airflow and causing the compressor to trip on thermal overload."
        ]
      },
      {
        type: "heading",
        title: "Step-by-Step DIY Diagnostic Checklist for Homeowners",
        content: "Before calling an HVAC technician, follow this diagnostic checklist to isolate the problem. Some simple issues can be solved immediately without professional help:"
      },
      {
        type: "table",
        content: [
          ["Diagnostic Step", "What to Check", "Action to Take"],
          ["1. Thermostat Verification", "Verify remote displays the 'Cool' symbol (snowflake) and set temperature is below room temperature (ideally 22-24°C).", "Adjust the thermostat settings accordingly. Check remote battery levels."],
          ["2. Airflow & Filter Check", "Check if the indoor blower is pushing air and if the filters are caked with dust.", "Remove and wash the filters with warm water. If dirty, book a professional [AC Cleaning service](/ac-cleaning)."],
          ["3. Evaporator Ice Check", "Open the front cover of the indoor unit and inspect the copper fins for frost or ice.", "If iced, turn the AC off and run 'Fan Only' mode for 2-3 hours to melt the ice. Change the filters."],
          ["4. Condenser Unit Clear Path", "Check if the outdoor unit is surrounded by trash, boxes, or thick dust layers.", "Clear at least 2 feet of space around the outdoor condenser unit. Wash down the coils gently with water."],
          ["5. Breaker & Power Check", "Verify if the outdoor unit is receiving power. Listen for fan and compressor hums.", "Check your main circuit breaker box. If the breaker is tripped, reset it once. If it trips again, stop."]
        ]
      },
      {
        type: "heading",
        title: "Understanding the Starting Capacitor: The AC's Heartbeat",
        content: "If you hear your outdoor unit making a hum followed by a metallic click every few minutes, but the fan or compressor does not start, the starting capacitor is likely dead. The capacitor acts as a battery, providing the high-torque electrical jolt required to kickstart the heavy compressor motor. In Riyadh's summer heat, these capacitors are under extreme thermal stress and are prone to bulging, leaking oil, or bursting. Replacing a capacitor is a quick, inexpensive repair, but it must be done by a professional because the capacitor stores high voltage and can deliver dangerous shocks even when the power is turned off."
      },
      {
        type: "heading",
        title: "The Threat of Condenser Coil Blockage in Riyadh",
        content: "Riyadh's environment is highly unique due to fine desert sand particles (dust storms) combining with high humidity during occasional summer shifts. This mixture forms a hard plaster-like layer on the aluminum condenser coils of the outdoor unit. This layer acts as a thermal blanket, keeping heat trapped inside the condenser. The refrigerant stays hot, the compressor works twice as hard, and eventually, the internal thermal overload protection switch trips. The compressor shuts down to prevent melting its own electrical windings, leaving you with only the indoor fan running, blowing warm, humid room-temperature air."
      },
      {
        type: "heading",
        title: "When to Call a Professional AC Repair Service in Riyadh",
        content: "If you have cleaned the filters and confirmed the settings but your split AC is still blowing hot air, the issue likely involves technical electrical components (like a blown capacitor, control board error, or relay failure) or a refrigerant leak. Under no circumstances should you try to recharge the gas yourself, as handling R410A or R22 requires certified gear, manifold gauges, and precise vacuum calculations to prevent overcharging."
      },
      {
        type: "paragraph",
        content: "Our certified HVAC technicians at [AC Repairing KSA](/ac-repair) have specialized diagnostic gear to handle high-pressure electrical components and refrigerant pressure lines safely. We serve all central Riyadh districts including [Al Olaya](/locations/al-olaya) and northern suburbs like [Al Malqa](/locations/al-malqa). We carry original spare parts in our mobile service vans, allowing us to resolve 95% of warm air issues on our first visit."
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
    readTime: "11 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-5691632.webp",
    category: "AC Repair & Troubleshooting",
    sections: [
      {
        type: "paragraph",
        content: "Air conditioners are designed to run with a consistent, rhythmic hum. When you start hearing unusual clicking noises from the outdoor unit, it is a warning sign that something is mechanically or electrically wrong. Ignoring a clicking sound can quickly lead to complete system failure, resulting in an [AC blowing warm air](/blog/fix-split-ac-blowing-warm-air-riyadh). Understanding the source and frequency of the clicking is essential to diagnosing whether you are dealing with a minor fan blockage or a major compressor failure."
      },
      {
        type: "heading",
        title: "The Physics of the AC Compressor and Electrical Current Flow",
        content: "The AC compressor is the mechanical pump that circulates refrigerant through your system. It contains electric motor windings that require high starting current (Locked Rotor Amps or LRA) and running current (Rated Load Amps or RLA). A series of electrical controls—including contactors, relays, and capacitors—regulate this current. When you turn on your AC, an electrical signal travels from your thermostat to the outdoor contactor, closing a switch and sending electricity to the fan motor and compressor. Any breakdown in this electrical chain results in clicking noises as switches try to engage but fail."
      },
      {
        type: "heading",
        title: "What Causes a Repetitive Clicking Noise in an AC?",
        content: "Clicking sounds can occur inside the indoor evaporator or the outdoor condenser unit. Let's look at the electrical and mechanical causes:"
      },
      {
        type: "list",
        content: [
          "**Failing Run/Start Capacitor:** The capacitor acts as a battery to start the compressor. When it begins to degrade, it struggles to send enough voltage, resulting in a clicking sound as the compressor attempts to start but stalls.",
          "**Electrical Contact Issues:** Damaged contactors, loose wiring, or failing control boards can create rapid clicking as electrical currents struggle to flow across pitted silver contact points.",
          "**Loose Fan Blades or Debris:** In Riyadh's windy periods, twigs, gravel, or sand build up inside the fan assembly, hitting the blades and producing a rhythmic clicking/clacking noise.",
          "**Worn Compressor Mounts:** The rubber isolation pads under the compressor can disintegrate over time due to heat. This causes the heavy metal compressor to vibrate and hit the outer metal chassis."
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
          ["Clicking Pattern", "Likely Cause", "Severity Level", "Action to Take"],
          ["Single click when turning on", "Normal relay switch engaging", "Normal - No Action Required", "Monitor cooling output"],
          ["Continuous rapid clicking from outdoor unit", "Electrical contactor failure or loose wire", "High - Turn off unit immediately", "Check wiring connections"],
          ["Repetitive slow clicking followed by a buzz", "Weak capacitor failing to start the compressor", "Critical - Can burn out compressor", "Replace capacitor immediately"],
          ["Loud clacking/clicking while fan runs", "Obstruction (debris/twigs) in the fan shroud", "Medium - Needs physical cleaning", "Clear fan blades of sand/twigs"]
        ]
      },
      {
        type: "heading",
        title: "The Danger of Contactor Chatter",
        content: "The contactor is a heavy-duty relay that controls the flow of electricity to the compressor and fan. Over time, the contacts can become pitted and dirty, or insects (such as ants) can get caught between them. This causes the contactor to chatter—rapidly opening and closing. This rapid clicking generates intense electrical arcs, which can weld the contacts shut. If this happens, your outdoor unit will run continuously, even when you turn the AC off at the thermostat, leading to frozen coils and motor burnout."
      },
      {
        type: "heading",
        title: "How to Prevent Compressor Failure",
        content: "If the clicking is caused by a failing capacitor or contactor, leaving the system running will overheat the compressor windings, causing it to burn out permanently. Replacing a compressor is highly expensive and often requires replacing the entire outdoor unit. Replacing a starting capacitor is a simple, inexpensive maintenance task. Therefore, early detection is key. Ensure you book a periodic [AC Maintenance Service](/ac-maintenance) twice a year to keep all electrical connections tight and inspect capacitor health."
      },
      {
        type: "paragraph",
        content: "If you live in northern Riyadh districts like [Al Yasmin](/locations/al-yasmin) or [Hittin](/locations/hittin), our local crews are equipped to replace electrical components, clean condenser coils, and repair clicking compressors on the spot. Contact [AC Repairing KSA](/ac-repair) today. We carry a wide range of capacitors (35uF, 45uF, 50uF, etc.) and heavy-duty contactors on our trucks to resolve your issue in one visit."
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
    readTime: "10 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-5691624.webp",
    category: "AC Repair & Troubleshooting",
    sections: [
      {
        type: "paragraph",
        content: "It is 2:00 PM on a scorching July afternoon in Riyadh. The outdoor temperature is touching 47°C. Suddenly, your split air conditioner turns off, and warm air begins to leak into the room. A mid-day AC breakdown in Saudi Arabia is more than just inconvenient; it can quickly become a safety hazard, especially for families with elderly relatives or children. Indoor temperatures can rise to dangerous levels in less than an hour in concrete-and-brick villas."
      },
      {
        type: "heading",
        title: "The Danger of Heatstroke and Concrete Thermal Mass",
        content: "Most homes in Riyadh are built using concrete block construction, which has high thermal mass. During the day, these walls absorb heat from the intense sun. Once the cooling system stops, this stored heat is radiated directly into your rooms, causing indoor temperatures to rise rapidly. Without proper cooling, humidity levels drop, air circulation stalls, and residents can experience heat exhaustion, dehydration, and heatstroke. Knowing what to do in the first 30 minutes of a cooling emergency is vital."
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
          "**Step 3: Check Your Main Distribution Board:** Check if the AC breaker has tripped. If it did, reset it once. If it trips again immediately, do not touch it again. This indicates a serious short circuit.",
          "**Step 4: Avoid Cooking or Running Appliances:** Minimize internal heat generation by turning off ovens, washers, and computers.",
          "**Step 5: Contact an Emergency AC Repair Service:** Call our dedicated emergency hotline at [AC Repairing KSA](/ac-repair) for fast dispatch."
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
          ["Action", "Description", "Time Frame", "Priority Level"],
          ["1. Rapid Dispatch", "We route our nearest field van located in your area (e.g., Al Malqa, Al Sahafa, or Al Olaya).", "30 - 60 minutes", "High"],
          ["2. Diagnostic Test", "We test the electrical lines, compressor refrigerant pressure, and control boards.", "15 - 20 minutes", "Critical"],
          ["3. On-Site Fix", "We replace standard parts (capacitors, contactors, fan motors) right from our fully-stocked van.", "30 - 45 minutes", "Immediate"]
        ]
      },
      {
        type: "heading",
        title: "Why Summer Voltage Fluctuations Trigger AC Failures",
        content: "During the hottest summer weeks, the city's power grid is under maximum stress due to millions of air conditioners running simultaneously. This massive load can cause voltage drops or fluctuations. Air conditioning compressors are sensitive to voltage drops; if the voltage falls too low, the compressor will draw more current to compensate, causing it to overheat and trip its internal thermal protection switch. In some cases, these fluctuations can burn out control boards or capacitors instantly."
      },
      {
        type: "heading",
        title: "Preventing Mid-Day AC Breakdowns",
        content: "The best way to handle an emergency is to prevent it entirely. Most emergency failures are caused by severe dust clogging or old electrical wear-and-tear that could have been identified during a standard service. Getting your coils washed and filters checked via an [AC Cleaning service](/ac-cleaning) before the summer rush is the single most effective way to guarantee summer comfort."
      },
      {
        type: "paragraph",
        content: "Whether you are located in central [Al Sulaymaniyah](/locations/al-sulaymaniyah) or eastern [Al Rawdah](/locations/al-rawdah), we are ready to assist you. Keep our number handy for any sudden HVAC emergency. Our technicians are available 24/7 during the summer peak to keep your home safe."
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
    readTime: "12 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-4421110.webp",
    category: "AC Repair & Troubleshooting",
    sections: [
      {
        type: "paragraph",
        content: "Water dripping down your walls from your indoor split AC unit can damage paint, wallpapers, drywall, and nearby electrical outlets. While air conditioners naturally produce water through dehumidification, this water is supposed to drain safely outside. A leak indoors means the drainage path is blocked or compromised. Understanding why this happens and how to diagnose it will save you from costly home repairs."
      },
      {
        type: "heading",
        title: "The Chemistry of AC Condensate and Dust Mud",
        content: "When warm, humid air passes over the cold evaporator coils of your split AC, moisture in the air condenses on the cold metal surface, just like water droplets forming on a cold soda can. This water drips into a plastic drain pan beneath the coils and flows out through a PVC pipe. However, in Riyadh's dusty air, the fine sand particles pulled into the system mix with this water to form a thick mud. Over months, this mud, combined with algae and mold that thrive in the dark, damp drain pan, creates a thick gel that blocks the drainage pipe."
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
          "**Incorrect Installation Angle:** If the indoor split unit was not installed level or with a slight slope towards the drain, gravity will pull the water backward into the room.",
          "**Low Refrigerant Levels:** If the system is low on gas, the coils can freeze. When the ice melts, it overflows the drain pan."
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
          ["Problem", "DIY Solution", "Professional Action Required", "Tools Used"],
          ["Dusty Air Filters", "Slide out the filters, wash under a tap, and dry before putting back.", "N/A - Simple home maintenance", "None"],
          ["Clogged Drain Line", "Locate the exit pipe outside and try to clean out the opening.", "High-pressure flush or vacuum pump to clear internal blockages.", "Wet/dry vac, drain snake"],
          ["Frozen Coils", "Turn off the AC and let the ice melt naturally. Check if airflow improves.", "Test refrigerant levels to check for leaks. [AC Gas Refill Service](/ac-gas-refill) if needed.", "Manifold gauges, leak detector"],
          ["Level & Slope Issues", "Do not try to bend or adjust the unit frame yourself.", "Re-mount the indoor unit with the correct drainage angle.", "Spirit level, mounting brackets"]
        ]
      },
      {
        type: "heading",
        title: "The Dangers of Mold Growth from AC Water Leaks",
        content: "Water leaking behind walls creates a perfect breeding ground for mold and mildew. Mold spores thrive in damp spaces and can be blown into your rooms when the AC is running, leading to respiratory issues, sinus infections, and asthma attacks. Flushing your drain lines and scheduling regular [AC Coil Cleaning](/ac-coil-cleaning) is essential to keeping your home air clean and healthy."
      },
      {
        type: "heading",
        title: "How to Prevent Water Leaks Long-Term",
        content: "To avoid sudden water leaks, schedule a comprehensive [AC Coil Cleaning](/ac-coil-cleaning) and drain flush once a year. Keeping the drainage pipes clear of sand ensures that condensation flows away smoothly. Using antimicrobial tablets in the drain pan can also help prevent algae growth."
      },
      {
        type: "paragraph",
        content: "If you have a water leak that is causing damage, our plumbing and HVAC teams are ready to help. We provide diagnostic services in [Al Munsiyah](/locations/al-munsiyah), [Al Qadisiyah](/locations/al-qadisiyah), and all surrounding suburbs. Contact [AC Repairing KSA](/ac-repair) to resolve your leak today. We use high-pressure water jets to completely clear your drain lines."
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
    readTime: "13 min read",
    author: "AC Repairing KSA Experts",
    image: "/optimized/pexels-5691631.webp",
    category: "AC Repair & Troubleshooting",
    sections: [
      {
        type: "paragraph",
        content: "Refrigerant (often called Freon) is the lifeblood of your air conditioner. It circulates between the indoor and outdoor units, absorbing heat from your home and releasing it outside. Unlike fuel or oil, an air conditioning system does not 'consume' refrigerant. It runs in a sealed closed loop. If your gas is low, it means there is a physical leak in the copper lines, flare joints, or evaporator coils. Simply topping up the gas without fixing the leak will not solve the problem."
      },
      {
        type: "heading",
        title: "The Thermodynamic Behavior of Low Refrigerant Charge",
        content: "When a system loses refrigerant, the pressure inside the evaporator coils drops. According to gas laws, a drop in pressure results in a drop in temperature. When the pressure falls below the system's design specs, the temperature of the coils drops below freezing (0°C). Any humidity in the air that condenses on the coils freezes instantly, forming a layer of ice. This ice acts as an insulator, blocking heat transfer and causing the compressor to draw more current, leading to high energy bills and potential compressor failure."
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
          "**Hissing or Bubbling Noises:** A physical hole in the copper lines will emit a distinct hissing sound (for gas) or bubbling sound (for liquid refrigerant under high pressure).",
          "**Unusually High Electricity Bills:** The compressor has to run continuously to meet the target temperature, causing a surge in energy usage.",
          "**Longer Cooling Cycles:** The AC takes hours to lower the temperature by even a few degrees."
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
          ["Refrigerant Type", "Common in System Age", "Availability in KSA", "Environmental Impact", "Operating Pressure"],
          ["R22 (Freon)", "Systems older than 10 years", "Restricted / Phasing out", "High ozone depletion potential", "Low (approx. 60-70 PSI)"],
          ["R410A (Puron)", "Modern systems (less than 10 years old)", "Widely available", "Eco-friendly, zero ozone depletion", "High (approx. 110-130 PSI)"]
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
          "**1. Leak Detection:** We use electronic leak detectors (halogen sniffers) or run a nitrogen pressure test to find the exact location of the leak.",
          "**2. Welding & Repair:** The damaged section of the copper tubing is welded and sealed using silver solder.",
          "**3. Evacuation/Vacuuming:** We run a vacuum pump to pull the lines down to 500 microns to remove air and moisture from the lines.",
          "**4. Refrigerant Recharge:** We weigh in the exact charge of R410A or R22 gas using digital scales. Book our [AC Gas Refill Service](/ac-gas-refill) for details."
        ]
      },
      {
        type: "heading",
        title: "Why You Must Never Ignore a Gas Leak",
        content: "Running an air conditioner with low refrigerant puts massive strain on the compressor. The compressor relies on the returning cool refrigerant gas to keep its own motor windings cool. When the gas is low, the compressor runs hot, leading to mechanical wear and eventually a total burnout. Additionally, breathing in leaked refrigerant can cause dizziness, headaches, and respiratory issues, making prompt repair vital."
      },
      {
        type: "paragraph",
        content: "If you are located in northern Riyadh districts like [Al Sahafa](/locations/al-sahafa) or [Al Malqa](/locations/al-malqa), our certified technicians can repair your leak and recharge your refrigerant to restore complete cooling. Contact [AC Repairing KSA](/ac-repair) today. We use high-grade copper pipes and original fittings to ensure your repairs last."
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
