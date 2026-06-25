"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, ShieldCheck, Zap, ArrowRight, Star, MapPin, Wrench, AlertTriangle, 
  Check, MessageSquare, ThumbsUp, Search, Activity, Gauge, Droplets, Leaf, 
  Wind, HeartPulse, BatteryCharging, Sparkles, ThermometerSun, ShieldAlert,
  ArrowRightCircle, CheckCircle2, Factory, Home, Droplet, ArrowDown,
  Settings, PenTool, Lightbulb, TrendingDown, Clock, Shield, Plus, Minus,
  ClipboardList, CheckSquare, Zap as ZapIcon, CalendarCheck, ThermometerSnowflake,
  SearchCode, FileWarning, ArrowUpRight, GaugeCircle, Scale3d
} from "lucide-react";
import { cn } from "@/lib/utils";
import Schema, { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/components/Schema";

export default function ACGasRefillPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const handleBookNow = (service?: any) => {
    const sName = service && typeof service === 'string' ? service : "AC Gas Refill";
    const text = `Hello, I need ${sName} services. Can you help?`;
    window.open(`https://wa.me/966510942150?text=${encodeURIComponent(text)}`, '_blank');
  };

  const faqs = [
    { q: "How do I know if my AC needs gas refill?", a: "Common signs include the AC blowing warm air, ice forming on the evaporator coils, a hissing sound near the unit, and a sudden increase in electricity bills." },
    { q: "How often should AC gas be refilled?", a: "AC gas (refrigerant) is not consumed like fuel. If your AC needs a refill, it means there is a leak in the copper pipes. Once the leak is repaired and gas is filled, it should last for years." },
    { q: "What refrigerant does my AC use?", a: "Modern ACs typically use R410A or the newer, eco-friendly R32. Older systems (pre-2015) may use R22. The exact type is printed on the outdoor unit's specification plate." },
    { q: "How much does AC gas refill cost in Saudi Arabia?", a: "The cost depends on the type of gas (R410A, R22, R32) and the exact amount (measured in PSI/grams) needed. We provide transparent upfront pricing after a quick pressure test." },
    { q: "Can low refrigerant damage the compressor?", a: "Yes. The compressor relies on the returning cold refrigerant gas to cool its internal motor. Operating with low gas will cause the compressor to overheat and eventually burn out." },
    { q: "How long does gas refill take?", a: "A standard gas top-up takes about 30 to 45 minutes. If we need to locate a leak, weld it, and perform a full vacuum process, it can take 1.5 to 2 hours." },
    { q: "Do you repair leaks before refilling gas?", a: "Absolutely. Simply refilling gas without fixing the leak is a waste of money. We use electronic leak detectors and nitrogen pressure testing to find and seal the leak first." },
    { q: "Is refrigerant harmful to the environment?", a: "Older refrigerants like R22 deplete the ozone layer. Modern gases like R410A and R32 are much safer, but they must still be handled by certified professionals to prevent atmospheric release." },
    { q: "Why is ice forming on my indoor AC unit?", a: "Ice buildup is a classic symptom of low refrigerant. Low pressure causes the evaporator coil temperature to drop below freezing, turning ambient room moisture into ice." },
    { q: "Do you provide emergency gas refill services?", a: "Yes, we offer fast-response AC gas refilling services across major Saudi cities, ensuring your home or business cools down immediately during peak summer." },
    { q: "What happens if too much gas is filled?", a: "Overcharging an AC with gas can cause liquid refrigerant to enter the compressor (slugging), permanently destroying the mechanical valves. This is why we use precision digital manifolds." },
    { q: "Do I need to replace R22 with R410A?", a: "You cannot mix refrigerants or put R410A into an R22 system because they operate at completely different pressures and use different compressor oils." },
    { q: "Can low gas cause water leakage?", a: "Yes. When low gas causes the indoor coil to freeze into a block of ice, turning the AC off will cause that ice to melt rapidly, overflowing the drain pan and leaking water." },
    { q: "Do you refill gas for Central AC systems?", a: "Yes, we specialize in large-scale refrigerant recovery and charging for Central, Package, VRF, and heavy commercial HVAC systems." },
    { q: "Is gas checking part of regular maintenance?", a: "Yes, checking the operating gas pressures using manifold gauges is a standard step in all of our preventive maintenance plans." }
  ];

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Schema 
        type="Service" 
        data={generateServiceSchema(
          "Professional AC Gas Refill & Leak Detection in KSA",
          "Expert AC refrigerant charging, leak repairs, and pressure testing for R410A, R32, and R22 systems across Saudi Arabia.",
          "/ac-gas-refill"
        )} 
      />
      <Schema type="FAQPage" data={generateFAQSchema(faqs)} />
      <Schema type="BreadcrumbList" data={generateBreadcrumbSchema([ { name: "Home", item: "/" }, { name: "AC Gas Refill", item: "/ac-gas-refill" } ])} />
      
      <Navbar onBookNow={handleBookNow} />

      {/* 1. HERO SECTION (Immersive Background Image Layout) */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-primary">
        <Image src="/Ac Services/AC Gas Refill.webp" alt="AC Gas Refill Saudi Arabia" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-8 max-w-4xl">
            <span className="bg-secondary/20 border border-secondary/50 text-secondary px-6 py-2 rounded-full font-black uppercase tracking-[0.2em] text-[10px] backdrop-blur-md">
              Saudi Arabia's #1 Cooling Experts
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-heading font-black text-white leading-[1.1] tracking-tight">
              AC Gas Refill Services Across Saudi Arabia
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-2xl">
              Restore powerful cooling performance. We inspect refrigerant levels, identify hidden leaks, recharge gas accurately, and optimize AC efficiency for homes and businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
              <button onClick={() => handleBookNow("Refill AC Gas Now")} className="px-10 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-3">
                <ZapIcon size={20} /> Refill AC Gas Now
              </button>
              <button onClick={() => handleBookNow("Request Leak Inspection")} className="px-10 py-5 bg-white/10 backdrop-blur border border-white/20 text-white rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-3">
                <SearchCode size={20} /> Request Inspection
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-20">
            {[
              { t: "Fast Cooling Restoration", d: "Immediate temperature drops.", i: <ThermometerSnowflake size={24}/> },
              { t: "Leak Detection Included", d: "We find the source of the loss.", i: <Search size={24}/> },
              { t: "Certified HVAC Experts", d: "Safe refrigerant handling.", i: <ShieldCheck size={24}/> }
            ].map((card, i) => (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl text-left flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center shrink-0">{card.i}</div>
                <div>
                  <h3 className="text-white font-black text-sm uppercase tracking-wider mb-1">{card.t}</h3>
                  <p className="text-white/50 text-xs font-bold">{card.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. AI OVERVIEW SECTION */}
      <section className="py-16 bg-white border-b border-gray-100 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-[#F8FAFC] border-2 border-primary/5 rounded-[40px] p-10 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
            <div className="absolute -right-20 -bottom-20 text-primary/5 pointer-events-none"><GaugeCircle size={300} /></div>
            <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white shrink-0 shadow-xl">
              <Sparkles size={36} />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-heading font-black text-primary mb-4">What Is AC Gas Refill?</h2>
              <p className="text-lg text-primary/60 font-medium leading-relaxed">
                An AC gas refill is the technical process of recharging an air conditioning system with the correct amount of refrigerant (like R410A or R32) to restore optimal cooling. Because ACs operate as closed loops, a need for a refill indicates a leak. Professional technicians must locate and weld the leak, pull a deep vacuum, and precisely weigh the new gas charge to prevent compressor damage and ensure maximum energy efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNS YOUR AC NEEDS GAS REFILL (Warning Cards Grid) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Warning Signs of Low Refrigerant</h2>
            <p className="text-lg text-primary/50 mt-4 max-w-2xl mx-auto">If you notice these symptoms, turn off your AC immediately to prevent compressor burnout.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { s: "Weak Cooling", d: "The air coming from the vents is barely cold, taking hours to cool the room.", i: <ThermometerSun /> },
              { s: "Warm Air From Vents", d: "The AC is operating as a fan, blowing ambient room-temperature air.", i: <Wind /> },
              { s: "Long Cooling Cycles", d: "The compressor runs continuously without ever shutting off automatically.", i: <Clock /> },
              { s: "Frozen Evaporator", d: "Thick layers of solid ice form on the indoor copper pipes and filters.", i: <ThermometerSnowflake /> },
              { s: "Hissing Sounds", d: "A faint bubbling or hissing sound indicating gas actively escaping the line.", i: <AlertTriangle /> },
              { s: "High Electricity Bills", d: "Your monthly energy cost spikes because the system is working overtime.", i: <TrendingDown /> },
              { s: "Low Pressure Alerts", d: "Smart thermostats flashing low pressure or E-codes on the display.", i: <FileWarning /> },
              { s: "Water Leakage", d: "Melting ice from the frozen coils overflowing the internal drain pan.", i: <Droplet /> }
            ].map((card, i) => (
              <div key={i} className="group relative bg-[#F8FAFC] border border-gray-100 p-8 rounded-[32px] overflow-hidden hover:shadow-2xl hover:border-secondary transition-all">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6 group-hover:text-secondary group-hover:scale-110 transition-all">
                  {React.cloneElement(card.i as React.ReactElement<any>, { size: 24 })}
                </div>
                <h3 className="text-lg font-black text-primary mb-3 leading-tight">{card.s}</h3>
                <p className="text-sm font-medium text-primary/60 leading-relaxed mb-6">{card.d}</p>
                <button onClick={() => handleBookNow(card.s)} className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-secondary flex items-center gap-2 transition-colors">
                  Fix This Issue <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Diagnostic Gas Check")} className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all">
              Schedule Diagnostic Check
            </button>
          </div>
        </div>
      </section>

      {/* 4. REFRIGERANT TYPES WE HANDLE */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Refrigerants We Handle</h2>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { t: "R410A", d: "The modern standard for non-ozone depleting cooling.", u: "Inverter & Split ACs", e: "High", i: "Eco-Safe" },
              { t: "R32", d: "Next-gen refrigerant with excellent heat transfer capabilities.", u: "New Split Systems", e: "Very High", i: "Low GWP" },
              { t: "R22", d: "Older standard phased out globally. Reclaimed gas available.", u: "Legacy Systems", e: "Moderate", i: "High Ozone Impact" },
              { t: "R407C", d: "Retrofit blend used as a direct drop-in for R22 systems.", u: "Commercial Chillers", e: "High", i: "Eco-Safe" },
              { t: "R134A", d: "Primarily used in specialized heavy commercial equipment.", u: "Large Centrifugal", e: "Moderate", i: "Eco-Safe" }
            ].map((ref, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-[32px] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-secondary hover:shadow-xl transition-all">
                <div className="flex items-center gap-6 md:w-1/3">
                  <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10 shrink-0">
                    <span className="font-heading font-black text-2xl text-primary">{ref.t}</span>
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-primary">{ref.t} Gas</h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{ref.u}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 md:w-1/3">
                  <span className="px-4 py-2 bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-widest rounded-lg border border-green-200">Efficiency: {ref.e}</span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-200">Impact: {ref.i}</span>
                </div>
                <button onClick={() => handleBookNow(`Refill ${ref.t}`)} className="w-full md:w-auto px-8 py-4 bg-primary/5 text-primary rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                  Book Refill
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR AC GAS REFILL PROCESS (Vertical Timeline) */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white">The Precision Refill Process</h2>
            <p className="text-lg text-white/60 mt-4">We don't just top up. We diagnose and secure the entire system.</p>
          </div>
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full" />
            <div className="flex flex-col gap-12">
              {[
                { title: "Complete System Inspection", desc: "We visually inspect all copper lines and flare nuts for oil stains indicating leaks." },
                { title: "Pressure Testing", desc: "We attach digital manifold gauges to verify the exact standing and running pressure." },
                { title: "Electronic Leak Detection", desc: "Using advanced sniffers, we pinpoint the microscopic hole where the gas escaped." },
                { title: "Leak Repair & Welding", desc: "We braze the broken copper joints and seal the system completely." },
                { title: "Vacuum Process", desc: "We use a vacuum pump to suck out all moisture and air from the repaired lines." },
                { title: "Precise Gas Charging", desc: "We weigh the exact grams of refrigerant required using a digital scale." },
                { title: "Performance Testing", desc: "We test the compressor amp draw to ensure it is running without stress." },
                { title: "Final Cooling Verification", desc: "We use anemometers to verify the vent air is dropping to the correct cold temperature." }
              ].map((step, i) => (
                <div key={i} className={cn("relative flex items-center gap-8 md:w-1/2", i % 2 === 0 ? "md:ml-auto flex-row" : "md:mr-auto md:flex-row-reverse")}>
                  {/* Timeline Dot */}
                  <div className={cn("absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-secondary border-4 border-primary shadow-xl z-10 flex items-center justify-center text-[10px] font-black text-white", i % 2 === 0 ? "-left-12 md:-left-4" : "-left-12 md:-right-4")}>
                    {i+1}
                  </div>
                  <div className={cn("bg-white/5 border border-white/10 p-8 rounded-3xl w-full ml-8 md:ml-0 text-left", i % 2 !== 0 && "md:text-right")}>
                    <h3 className="text-xl font-black text-white mb-2">{step.title}</h3>
                    <p className="text-sm font-medium text-white/60">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 text-center">
            <button onClick={() => handleBookNow("Process Refill Check")} className="px-12 py-5 bg-white text-primary rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary hover:text-white transition-all">
              Book A Professional Technician
            </button>
          </div>
        </div>
      </section>

      {/* 6. WHY AC GAS BECOMES LOW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Why Does AC Gas Become Low?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Refrigerant Leaks", d: "Microscopic pinhole leaks naturally develop in the copper coils over years of operation." },
              { t: "Damaged Copper Pipes", d: "Physical damage from construction, moving the unit, or falling debris cracking the lines." },
              { t: "Loose Connections", d: "Vibration from the compressor loosening the brass flare nuts connecting the indoor/outdoor units." },
              { t: "Corroded Components", d: "Formicary corrosion eating through the thin aluminum fins of the evaporator coil." },
              { t: "Improper Previous Service", d: "Unqualified technicians leaving valves slightly open or failing to tighten caps properly." },
              { t: "Old AC Systems", d: "Rubber O-rings and seals drying out and cracking in systems over 10 years old." }
            ].map((reason, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-[32px] hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6"><AlertTriangle size={24}/></div>
                <h3 className="text-xl font-black text-primary mb-3">{reason.t}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{reason.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Fix Gas Leak")} className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all">
              Identify My Leak Today
            </button>
          </div>
        </div>
      </section>

      {/* 7. LEAK DETECTION SECTION (Dark Highlight) */}
      <section className="py-24 bg-primary text-white border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
           <Image src="/Ac Services/AC Repair.webp" alt="Leak Detection" fill className="object-cover" />
           <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="max-w-2xl">
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-xs">Crucial Step</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mt-4 mb-8">Why Leak Detection Matters Before Gas Refill</h2>
            <p className="text-lg text-white/70 font-medium leading-relaxed mb-8">
              A closed AC system should never run out of gas. If it is low, it has a leak. Simply topping up the gas without finding the hole means the new gas will leak out again in weeks. We use pressurized nitrogen and electronic sniffers to permanently seal the system.
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              {["Prevent Repeated Gas Loss", "Protect Compressor from Overheating", "Improve System Efficiency", "Avoid Expensive Future Repairs", "Reduce Environmental Energy Waste"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 font-bold text-white/90">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white"><Check size={14}/></div>
                  {item}
                </li>
              ))}
            </ul>
            <button onClick={() => handleBookNow("Schedule Leak Inspection")} className="px-12 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-primary transition-all">
              Schedule Leak Inspection
            </button>
          </div>
        </div>
      </section>

      {/* 8. WE REFILL ALL AC TYPES (Image Grid) */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Systems We Recharge</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Split AC Gas", img: "/Ac Services/AC Repair.webp", b: "R410A / R32" },
              { t: "Central AC Gas", img: "/Ac Services/AC Duct Cleaning.webp", b: "Bulk Refill" },
              { t: "Inverter AC", img: "/Ac Services/AC Maintenance.webp", b: "Precise Scales" },
              { t: "Window AC", img: "/Ac Services/AC Cleaning.webp", b: "Sealed Repair" },
              { t: "Cassette AC", img: "/Ac Services/Plumbing.webp", b: "Commercial" },
              { t: "Ducted AC", img: "/Ac Services/AC Gas Refill.webp", b: "Hidden Lines" },
              { t: "Commercial", img: "/Ac Services/Home Maintenance.webp", b: "High Capacity" },
              { t: "Residential", img: "/hero.webp", b: "Safe Handling" }
            ].map((ac, i) => (
              <div key={i} className="group h-72 rounded-[32px] overflow-hidden border border-gray-100 relative shadow-sm hover:shadow-xl transition-all flex flex-col justify-end p-6">
                <Image src={ac.img} alt={ac.t} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="relative z-10 text-white">
                  <span className="px-3 py-1 bg-secondary text-white rounded-md text-[9px] font-black uppercase tracking-widest mb-3 inline-block">{ac.b}</span>
                  <h3 className="font-black text-2xl leading-none">{ac.t}</h3>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-white text-primary p-3 rounded-xl cursor-pointer">
                  <ArrowUpRight size={20} onClick={() => handleBookNow(ac.t)} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Refill Any AC Type")} className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all">
              Book Gas Service For Your AC
            </button>
          </div>
        </div>
      </section>

      {/* 9. BEFORE & AFTER GAS REFILL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">The Impact of Correct Refrigerant</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-[40px] overflow-hidden shadow-2xl">
            {/* Before */}
            <div className="bg-red-50 p-12 md:p-16 flex flex-col justify-center gap-8">
              <h3 className="text-3xl font-black text-red-900 border-b border-red-200 pb-4">Before Gas Refill</h3>
              <ul className="flex flex-col gap-6">
                {[
                  { text: "Poor, weak cooling output", icon: <ThermometerSun className="text-red-500"/> },
                  { text: "Long compressor runtimes", icon: <Clock className="text-red-500"/> },
                  { text: "High electricity consumption", icon: <TrendingDown className="text-red-500"/> },
                  { text: "Extreme compressor thermal stress", icon: <Activity className="text-red-500"/> }
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-4 text-red-800 font-bold text-lg">{li.icon} {li.text}</li>
                ))}
              </ul>
            </div>
            {/* After */}
            <div className="bg-primary p-12 md:p-16 flex flex-col justify-center gap-8">
              <h3 className="text-3xl font-black text-white border-b border-white/20 pb-4">After Precision Refill</h3>
              <ul className="flex flex-col gap-6">
                {[
                  { text: "Fast, ice-cold room temperatures", icon: <ThermometerSnowflake className="text-secondary"/> },
                  { text: "Normal, quiet cooling cycles", icon: <Settings className="text-secondary"/> },
                  { text: "Lower energy bills instantly", icon: <ZapIcon className="text-secondary"/> },
                  { text: "Compressor runs smoothly and safely", icon: <ShieldCheck className="text-secondary"/> }
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-bold text-lg">{li.icon} {li.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Restore AC Performance")} className="px-12 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-primary transition-all">
              Restore Cooling Today
            </button>
          </div>
        </div>
      </section>

      {/* 10. ENERGY EFFICIENCY BENEFITS */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white p-12 rounded-[48px] shadow-sm border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
                <span className="text-secondary font-black uppercase tracking-widest text-xs">Financial Savings</span>
                <h2 className="text-4xl font-heading font-black text-primary mt-4 mb-6">Optimal Gas = Energy Efficiency</h2>
                <p className="text-primary/60 font-medium leading-relaxed mb-8">
                  Air conditioners are calibrated to run at very specific refrigerant pressures. A drop of just 10% in gas levels can result in a 20% increase in energy consumption. By restoring the correct R410A mass, you directly lower your DEWA/SEC electricity bills.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Better Heat Transfer", "Reduced Compressor Load", "Lower Electricity Bills", "Longer Equipment Life"].map((ben, i) => (
                    <div key={i} className="flex items-center gap-3 font-bold text-sm text-primary"><CheckCircle2 className="text-secondary" size={18}/> {ben}</div>
                  ))}
                </div>
                <button onClick={() => handleBookNow("Maximize Efficiency")} className="mt-10 px-10 py-4 bg-primary text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all text-xs">
                  Maximize AC Efficiency
                </button>
             </div>
             <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-gray-100 text-center flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-secondary mb-2">30%</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary/60">Faster Cooling</span>
                </div>
                <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-gray-100 text-center flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-secondary mb-2">20%</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary/60">Lower Bills</span>
                </div>
                <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-gray-100 text-center flex flex-col items-center justify-center col-span-2">
                  <span className="text-5xl font-black text-primary mb-2">Exact</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary/60">Digital Scale Measurement</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 11 & 12. RESIDENTIAL & COMMERCIAL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Residential */}
            <div className="bg-[#F8FAFC] p-10 rounded-[40px] border border-gray-100 flex flex-col gap-8">
              <div className="relative h-64 w-full rounded-3xl overflow-hidden">
                <Image src="/hero.webp" alt="Residential Gas Refill" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-white text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><Home size={14}/> Residential</div>
              </div>
              <h3 className="text-3xl font-heading font-black text-primary">Home AC Refrigerant</h3>
              <ul className="grid grid-cols-2 gap-4 flex-grow">
                {["Homes", "Apartments", "Flats", "Villas"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-600"><Check size={16} className="text-secondary"/> {item}</li>
                ))}
              </ul>
              <button onClick={() => handleBookNow("Home Gas Refill")} className="w-full py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all">Book For Home</button>
            </div>
            
            {/* Commercial */}
            <div className="bg-[#F8FAFC] p-10 rounded-[40px] border border-gray-100 flex flex-col gap-8">
              <div className="relative h-64 w-full rounded-3xl overflow-hidden">
                <Image src="/Ac Services/AC Duct Cleaning.webp" alt="Commercial Gas Refill" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><Factory size={14}/> Commercial</div>
              </div>
              <h3 className="text-3xl font-heading font-black text-primary">Corporate Bulk Refill</h3>
              <ul className="grid grid-cols-2 gap-4 flex-grow">
                {["Offices", "Hotels", "Restaurants", "Hospitals", "Schools", "Warehouses", "Shopping Malls"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-600"><Check size={16} className="text-primary"/> {item}</li>
                ))}
              </ul>
              <button onClick={() => handleBookNow("Commercial Gas Refill")} className="w-full py-5 bg-secondary text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-primary transition-all">Book For Business</button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. SERVICE AREAS */}
      <section className="py-24 bg-[#F8FAFC] border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Fast Dispatch Across KSA</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "Riyadh", "Jeddah", "Dammam", "Al Khobar", "Makkah", "Madinah", 
              "Taif", "Jubail", "Yanbu", "Abha", "Najran", "Tabuk", 
              "Jazan", "Al Ahsa", "Hail", "Buraidah"
            ].map((city, i) => (
              <div key={i} className="py-8 px-2 bg-white rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-3 hover:bg-secondary hover:text-white hover:border-secondary transition-colors group cursor-pointer shadow-sm">
                <MapPin size={24} className="text-primary group-hover:text-white" />
                <span className="text-[10px] font-black uppercase tracking-widest">{city}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Regional Gas Dispatch")} className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all">
              Request Dispatch In Your City
            </button>
          </div>
        </div>
      </section>

      {/* 14. WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Why Choose Us For Refills?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: "Certified Technicians", i: <ShieldCheck size={28}/> },
              { t: "Accurate Charging", i: <Scale3d size={28}/> },
              { t: "Leak Detection", i: <SearchCode size={28}/> },
              { t: "Quality Gas", i: <Sparkles size={28}/> },
              { t: "Fast Response", i: <Clock size={28}/> },
              { t: "Affordable Pricing", i: <ThumbsUp size={28}/> },
              { t: "24/7 Support", i: <Phone size={28}/> },
              { t: "Client Satisfaction", i: <Star size={28}/> }
            ].map((feature, i) => (
              <div key={i} className="bg-[#F8FAFC] p-6 rounded-3xl border border-gray-100 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
                <div className="text-secondary bg-white shadow-sm p-4 rounded-xl">{feature.i}</div>
                <h3 className="font-black text-sm text-primary uppercase tracking-wide">{feature.t}</h3>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Hire Gas Experts")} className="px-12 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-primary transition-all">
              Hire The Refill Experts
            </button>
          </div>
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <section className="py-24 bg-[#F8FAFC] border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-white shadow-sm">
                <button 
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-black text-primary text-lg pr-4">{faq.q}</span>
                  <span className="text-secondary text-2xl font-light shrink-0">{activeFAQ === i ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {activeFAQ === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-slate-600 font-medium leading-relaxed border-t border-gray-100 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. LONG FORM CONTENT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-8 text-center">Professional Refrigerant Management in KSA</h2>
          <div className="text-slate-700 font-medium leading-relaxed space-y-6">
            <p>Air conditioners operate using a complex thermodynamic cycle, and the lifeblood of this cycle is the refrigerant gas. When homeowners search for <strong>AC Gas Refill Saudi Arabia</strong>, they are often facing an underperforming unit that is failing to combat the intense heat of the Kingdom. A proper <strong>AC Refrigerant Recharge</strong> is not just about connecting a cylinder and opening a valve. It requires deep technical knowledge of pressure-temperature relationships, specifically handling modern gases like R410A and R32 safely.</p>
            
            <p>A frequent misconception is that air conditioners consume gas over time. This is entirely false. HVAC systems are closed-loop networks. If you need an <strong>Air Conditioner Gas Refill</strong>, it mathematically guarantees that there is a physical breach in your copper piping. That is why our <strong>HVAC Technician</strong> team performs rigorous <strong>Leak Detection Service</strong> before any gas is added. Welding the leak ensures you do not have to pay for another <strong>AC Gas Refill KSA</strong> in a few months.</p>

            <h3 className="text-2xl font-heading font-black text-primary mt-12 mb-6">Split, Central, and Commercial Charging</h3>
            <p>The charging process varies significantly depending on the system architecture. <strong>Split AC Gas Refill</strong> is generally straightforward, requiring access to the outdoor condenser's service valves. However, <strong>Central AC Refrigerant Charging</strong> requires managing massive volumes of gas distributed across long ducting networks. Furthermore, <strong>Inverter AC Gas Refill</strong> demands absolute precision using digital scales. Unlike older R22 systems, R410A is a blended gas, meaning it must be charged in a liquid state to maintain the chemical balance.</p>
            
            <p>Whether you need a localized <strong>Residential AC Gas Refill</strong> for your villa in Riyadh or a bulk <strong>Commercial AC Gas Refill</strong> for a shopping mall in Jeddah, our <strong>HVAC Refrigerant Service</strong> is equipped with the latest recovery machines, vacuum pumps, and digital manifolds to ensure your cooling system operates at peak thermodynamic efficiency without stressing the compressor.</p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
