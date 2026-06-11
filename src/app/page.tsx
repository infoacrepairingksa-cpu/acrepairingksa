"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, Clock, MapPin, Star, CheckCircle2, 
  CalendarCheck2, Award, Phone, Settings, AlertTriangle,
  Snowflake, Droplets, PenTool, BatteryCharging, Factory, 
  FileQuestion, Info, ArrowRight, Activity, Wrench, Thermometer,
  Grid, ClipboardCheck, Sparkles, MessageSquare, Gauge
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Link from "next/link";
import Image from "next/image";
import Schema, { 
  generateWebSiteSchema, 
  generateBreadcrumbSchema, 
  generateOrganizationSchema, 
  generateLocalBusinessSchema 
} from "@/components/Schema";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

// 1. TRUST BAR
const TrustBar = () => {
  const points = [
    { text: "Same Day Service Across Riyadh", icon: <Clock size={16} /> },
    { text: "Licensed HVAC Technicians", icon: <ShieldCheck size={16} /> },
    { text: "24/7 Emergency Support", icon: <AlertTriangle size={16} /> },
    { text: "All AC Brands Serviced", icon: <Snowflake size={16} /> },
    { text: "Residential & Commercial Fleet", icon: <Factory size={16} /> },
  ];
  return (
    <div className="bg-primary text-white py-4 relative z-20">
      <div className="container mx-auto px-4 flex flex-wrap justify-center lg:justify-between items-center gap-4 text-xs md:text-sm font-black uppercase tracking-wider">
        {points.map((p, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-secondary">{p.icon}</span>
            {p.text}
          </div>
        ))}
      </div>
    </div>
  );
};

// 2. AI OVERVIEW DIRECT ANSWER BLOCKS
const AIDirectAnswers = () => {
  const blocks = [
    {
      q: "What Is AC Repair?",
      a: "AC repair is the professional diagnostic and restoration process of fixing malfunctions in an air conditioner. This includes resolving compressor failures, repairing electrical short circuits, replacing starting capacitors, sealing copper refrigerant gas leaks, and correcting thermostat errors to restore efficient cooling in residential split or central systems."
    },
    {
      q: "What Is AC Cleaning?",
      a: "AC cleaning is a comprehensive preventative maintenance procedure that removes dust, mold, and debris from internal components. Using high-pressure water jets and safe chemical solvents, technicians wash the evaporator coils, flush out the condensate drain line, sanitize air filters, and clean the outdoor condenser to maximize airflow and indoor air quality."
    },
    {
      q: "How Often Should AC Be Serviced?",
      a: "In Riyadh's extremely dusty desert climate, residential split and central AC systems must be professionally serviced twice a year—ideally in spring before summer starts and in autumn. Additionally, mesh air filters should be washed by homeowners every 2 weeks to prevent frozen coils, restricted airflow, and high energy consumption."
    },
    {
      q: "Why Is My AC Not Cooling?",
      a: "An AC venting warm air is typically caused by dirty, clogged air filters blocking heat exchange, low refrigerant levels (R410A/R22) due to physical gas leaks, a failed starting capacitor preventing the outdoor compressor from running, or thick layers of desert sand coating the condenser coils, leading to system thermal overload."
    }
  ];
  return (
    <section className="py-20 bg-slate-50 border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">AI Quick Reference</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-primary leading-tight tracking-tight">Riyadh AC Service Answers</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">Direct answers and technical summaries compiled for Google AI Overviews and modern voice searches.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((b, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-md transition-all">
              <h3 className="font-heading font-black text-base text-primary mb-3 flex items-center gap-2 border-b border-gray-50 pb-2">
                <FileQuestion size={16} className="text-secondary shrink-0" /> {b.q}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">{b.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20have%20questions%20about%20AC%20service%20in%20Riyadh."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Consult Our Riyadh HVAC Experts
          </a>
        </div>
      </div>
    </section>
  );
};

// 3. COMMON PROBLEMS WE FIX (DETAILED GRID)
const CommonProblems = () => {
  const problems = [
    {
      title: "AC Not Cooling",
      desc: "Warm air blowing from vents is often caused by a failed capacitor, compressor thermal overload, or blocked condenser coils that trap heat.",
      cause: "Low refrigerant, failed run capacitor, or dust-blanketed outdoor fins.",
      solution: "Replace starting components, wash condenser coils, and restore correct gas pressure."
    },
    {
      title: "Water Leaking Indoors",
      desc: "Water dripping down interior walls happens when the condensate drain line gets blocked by Riyadh's fine sand mixing with moisture to form mud.",
      cause: "Clogged PVC drain pipe, mold buildup, or cracked internal drain pan.",
      solution: "Flush drain line with pressurized nitrogen and sanitizing chemical cleaner."
    },
    {
      title: "AC Making Noise",
      desc: "Loud clicking, squealing, or grinding sounds indicate mechanical friction or starting failures that put the compressor at risk.",
      cause: "Seized fan bearings, degraded rubber mounts, or failing electrical contactor.",
      solution: "Lubricate moving parts, secure loose components, and replace pitted contacts."
    },
    {
      title: "Frozen Evaporator Coil",
      desc: "Ice buildup on the indoor copper pipes restricts heat exchange and completely blocks airflow, causing the system to run constantly.",
      cause: "Extremely dirty air filters or low refrigerant pressure causing sub-zero coil temperatures.",
      solution: "De-ice the system, replace dirty air filters, and check for gas leakages."
    },
    {
      title: "Weak Vents Airflow",
      desc: "Weak air pressure from the blower fan fails to circulate cool air throughout the room, even when set to maximum speed settings.",
      cause: "Dust-caked blower wheel, broken fan belt, or clogged nylon mesh filters.",
      solution: "Perform deep coil chemical clean and wash the internal barrel blower fan."
    },
    {
      title: "Thermostat Problems",
      desc: "The AC refuses to turn on, cycles off too quickly, or fails to reach the set temperature because of calibration errors.",
      cause: "Faulty control relay, loose low-voltage wires, or dead remote batteries.",
      solution: "Re-calibrate system, replace control wire connections, or install smart digital thermostat."
    },
    {
      title: "Gas Leakage",
      desc: "Slow loss of cooling capability over several weeks, accompanied by a soft hissing sound near the outdoor copper fittings.",
      cause: "Vibration cracks in copper flare joints, or acidic corrosion on aluminum evaporator fins.",
      solution: "Detect leak location, weld/repair piping joints, pull vacuum, and recharge R410A."
    },
    {
      title: "Foul Odor / Smelly AC",
      desc: "A musty, damp, or burning smell coming from your vents when the air conditioner runs.",
      cause: "Microbial mold buildup on wet evaporator coils, clogged drain pan, or electrical burn.",
      solution: "Perform deep antibacterial coil cleaning and sanitize the blower wheel."
    }
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">Diagnostic Expertise</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Common AC Problems We Fix</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">Identify the warning signs. Our certified technical crew carries diagnostic tools to solve these cooling faults on the spot.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-gray-100 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-secondary/20 transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4 font-black">
                  ⚠️
                </div>
                <h3 className="font-heading font-black text-lg text-primary mb-2">{p.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">{p.desc}</p>
              </div>
              <div className="border-t border-gray-100 pt-3 mt-2 text-[11px] font-bold">
                <span className="text-primary block"><strong className="text-secondary uppercase tracking-widest text-[9px] block">Root Cause:</strong> {p.cause}</span>
                <span className="text-secondary block mt-1"><strong className="text-primary uppercase tracking-widest text-[9px] block">Solution:</strong> {p.solution}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20need%20to%20diagnose%20an%20AC%20problem%20in%20Riyadh."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Schedule AC Diagnostic Support
          </a>
        </div>
      </div>
    </section>
  );
};

// 3.5. TECHNICAL AC FAULT & RESOLUTION REFERENCE TABLE (GEO & AI OVERVIEW DENSITY)
const ACDiagnosticsTable = () => {
  const tableData = [
    {
      problem: "AC Not Cooling Properly (Venting Warm Air)",
      cause: "Low R410A/R22 refrigerant charge, failed compressor run capacitor, or sand-blocked outdoor condenser fins.",
      solution: "Perform digital pressure testing, weld copper pipeline leak point, replace starting components, and deep-wash condenser."
    },
    {
      problem: "Indoor Unit Water Leakage / Dripping",
      cause: "Riyadh's fine desert sand mixing with condensate water to block the internal PVC drain pipe line.",
      solution: "Perform pressurized nitrogen flush, clear mold blockages, sanitize the internal drain pan, and check drain slope angle."
    },
    {
      problem: "Loud Squealing or Clicking Noise",
      cause: "Dry blower motor bearings, loose blower wheels, or faulty electric contactors inside the controller box.",
      solution: "Replace motor bearings, tighten physical fan mountings, and install brand-new contactor relays."
    },
    {
      problem: "Circuit Breaker Tripping Repeatedly",
      cause: "Clogged mesh air filters restricting air exchange, compressor drawing excess amperage, or internal short-circuits.",
      solution: "Replace mesh filters, diagnostic check of compressor windings resistance, and test breaker amp pull."
    },
    {
      problem: "Foul Odor / Musty Damp Smell",
      cause: "Bacterial and mold spore colonization on wet indoor cooling coils and inside the drain pan tray.",
      solution: "Deep spray coil antibacterial sanitization, wash blower fan barrel, and flush condensate drain line."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">AI Search & GEO Reference</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">AC Fault & Technical Diagnostics Table</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">
            A comprehensive reference list of common residential HVAC malfunctions and professional solutions, optimized for Google AI Overviews and semantic voice queries in KSA.
          </p>
        </div>
        <div className="overflow-x-auto rounded-[32px] border border-gray-100 shadow-xl shadow-primary/5">
          <table className="w-full min-w-[700px] border-collapse bg-white text-left text-sm">
            <thead>
              <tr className="bg-primary text-white font-heading font-black">
                <th className="p-6">Common AC Malfunction / Problem</th>
                <th className="p-6 border-l border-white/10">Likely Root Cause</th>
                <th className="p-6 border-l border-white/10">Professional HVAC Solution</th>
              </tr>
            </thead>
            <tbody className="font-semibold text-gray-600">
              {tableData.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-black text-primary bg-primary/5 border-r border-gray-100">{row.problem}</td>
                  <td className="p-6 border-r border-gray-100 text-xs md:text-sm">{row.cause}</td>
                  <td className="p-6 text-xs md:text-sm text-secondary font-black bg-secondary/5">{row.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// 4. AC COMPONENTS WE REPAIR
const ACComponents = () => {
  const components = [
    { name: "Compressor", desc: "The mechanical heart of your cooling loop. We repair starting issues, install hard-start kits, and execute full compressor swap replacements." },
    { name: "Condenser Coils", desc: "Outdoor aluminum fins responsible for expelling heat. We wash away plaster-like sand layers to prevent high head pressure and thermal shutdown." },
    { name: "Thermostat", desc: "Control unit regulating ambient temperatures. We troubleshoot relays, replace wiring connections, and install programmable control panels." },
    { name: "Evaporator Coil", desc: "Indoor component where heat absorption occurs. We fix minor weld leaks, treat rust, and carry out chemical cleans to eliminate mold." },
    { name: "Refrigerant Lines", desc: "Insulated copper pipes carrying chemical coolant. We inspect flare joints, patch pinhole leaks, and secure lines to prevent vibration damage." },
    { name: "Air Filters", desc: "Nylon mesh filtering sand and pet dander. We clean reusable filters and source manufacturer-approved replacement filters for all models." },
    { name: "Drain Pipes & Pans", desc: "Routes condensation safely outside. We clear slime build-ups, re-angle slanting drain lines, and replace cracked plastic drain pans." },
    { name: "Blower Motor", desc: "The electric motor that drives airflow through your indoor unit. We lubricate motor bearings, replace failed run capacitors, and exchange broken fan blades." }
  ];
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-secondary/15 text-secondary border border-secondary/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">System Engineering</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">AC Components We Repair</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">From mechanical pumps to electronic control boards, we diagnose and fix every physical component of your HVAC loop.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {components.map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4">
                  <Wrench size={18} />
                </div>
                <h3 className="font-heading font-black text-lg text-primary mb-2">{c.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20need%20to%20repair%20an%20AC%20component%20in%20Riyadh."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Request HVAC Component Repair
          </a>
        </div>
      </div>
    </section>
  );
};

// 5. AC BRANDS WE SERVICE (GRID WITH IMAGES & DESCRIPTIONS)
const BrandsGrid = () => {
  const brands = [
    { name: "Daikin", imageUrl: "/uploaded/brand-daikin.png", desc: "High-efficiency Japanese inverter split and VRV systems. We repair sensors, control boards, and re-charge eco-friendly coolant." },
    { name: "Carrier", imageUrl: "/uploaded/brand-carrier.png", desc: "Robust American cooling technology, common in large villas. We service heavy-duty compressors and replace control contactors." },
    { name: "LG", imageUrl: "/uploaded/brand-lg.png", desc: "Dual-inverter splits and package units. We troubleshoot smart diagnostic error codes and replace original motor components." },
    { name: "Samsung", imageUrl: "/uploaded/brand-samsung.png", desc: "WindFree and digital inverter split ACs. We specialize in servicing electronic control boards and blower assemblies." },
    { name: "York", imageUrl: "/uploaded/brand-york.png", desc: "Reliable commercial and residential central package units. We service multi-stage compressors and condenser fan arrays." },
    { name: "Gree", imageUrl: "/uploaded/brand-gree.png", desc: "Extremely popular in Riyadh for durable splits. We provide genuine replacement parts, capacitor repairs, and coil cleaning." },
    { name: "Mitsubishi", imageUrl: "/uploaded/brand-mitsubishi.png", desc: "Premium quiet split systems. We offer precision servicing of electronic expansion valves and high-performance blower fans." },
    { name: "Hitachi", imageUrl: "/uploaded/brand-hitachi.png", desc: "Sturdy tropical split ACs. We wash out condenser sand blocks and resolve thermal overload problems during summer peaks." }
  ];
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">Multi-Brand Competence</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">AC Brands We Service</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">Our technical vans are stocked with genuine spare parts for all major international air conditioning manufacturers.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((b, i) => (
            <div key={i} className="bg-slate-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-xl hover:border-secondary transition-all overflow-hidden flex flex-col h-full">
              <div className="relative h-36 w-full bg-slate-200">
                <Image
                  src={b.imageUrl}
                  alt={`${b.name} Air Conditioner Service Riyadh`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-2xl font-heading font-black text-white tracking-tight">{b.name}</span>
                </div>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1 text-center">
                <div>
                  <p className="text-[10px] text-secondary font-black uppercase tracking-widest mb-2">Certified Specialist</p>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20need%20service%20for%20my%20AC%20brand%20in%20Riyadh."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Book Service for Your Brand
          </a>
        </div>
      </div>
    </section>
  );
};

// 6. SIGNS YOUR AC NEEDS REPAIR (STRUCTURED LISTS)
const SignsYourACNeedsRepair = () => {
  const signs = [
    { title: "Venting Lukewarm / Warm Air", text: "Vents blowing warm air instead of cool room-temperature air is a sign that the compressor fails to start or your chemical coolant has leaked out." },
    { title: "Dripping Water & Internal Leaks", text: "Puddles of water pooling beneath the indoor split unit or water running down your wallpaper indicates a blocked PVC drain pipe that needs immediate flush." },
    { title: "Foul Mildew or Burning Smell", text: "A stale smell indicates microbial mold growth on the wet evaporator fins. A burning plastic smell means an electrical contact is overheating." },
    { title: "Spiking Electricity Bills", text: "A sudden increase in energy usage usually means the condenser fins are covered in dust, forcing the compressor to draw double current to reject heat." },
    { title: "AC Won't Turn On At All", text: "When the unit shows no response to the remote or panel switch, the issue is typically a blown fuse, failed control board, or tripped circuit breaker that cuts all power." },
    { title: "Ice Forming on Copper Pipes", text: "Visible ice or frost forming on the indoor copper lines indicates critically low refrigerant pressure or severely clogged filters causing coil sub-freezing temperatures." },
    { title: "Loud or Unusual Noises", text: "Clicking, squealing, or grinding sounds coming from the indoor or outdoor unit point to mechanical failures such as seized fan bearings or loose compressor mounts." },
    { title: "AC Cycles On & Off Constantly", text: "Short-cycling (the AC turning on and off every few minutes) indicates the unit is unable to maintain pressure and suggests a gas leak, dirty coil, or failing thermostat sensor." }
  ];
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">Pre-Failure Indicators</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Signs Your AC Needs Repair</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">Catch faults early to avoid total compressor burnout. Check your cooling system for these indicators.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {signs.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-3 hover:shadow-md hover:border-secondary/20 transition-all duration-300">
              <span className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 font-black text-base">⚡</span>
              <div>
                <h3 className="font-heading font-black text-base text-primary mb-1 leading-tight">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20my%20AC%20is%20showing%20signs%20of%20failure.%20Need%20inspection."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Book Free Inspection
          </a>
        </div>
      </div>
    </section>
  );
};

// 7. STEP-BY-STEP PROCESS
const StepByStepProcess = () => {
  const steps = [
    { title: "Book via WhatsApp", desc: "Send a message describing your AC issue and your Riyadh district. We confirm your appointment and ETA within minutes." },
    { title: "Technician Dispatched", desc: "A certified technician is dispatched from the nearest standby location with a fully equipped service van." },
    { title: "Comprehensive Inspection", desc: "Our technicians inspect the complete unit, checking compressor amperage, electrical contactors, capacitor microfarads, and coolant pressure levels." },
    { title: "Diagnostic Analysis", desc: "We identify the root cause of the cooling failure—whether it is an electrical short, motor wear, or sand-blocked coils." },
    { title: "Upfront Price Quotation", desc: "Before any work begins, we provide a clear, no-hidden-fee SAR quote explaining the exact parts needed and labor costs." },
    { title: "Precision Repair", desc: "Using original manufacturer parts, we replace failed capacitors, weld copper pipe cracks, or clean evaporator coils on-site." },
    { title: "Pressure Testing & Vacuuming", desc: "We check all joints for gas leaks, evacuate moisture from copper lines using a vacuum pump, and weigh in high-grade R410A coolant." },
    { title: "Performance Calibration", desc: "We run the AC to verify airflow output and temperature delta, clean up the work area, and activate your 90-day warranty." }
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-secondary/15 text-secondary border border-secondary/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">Service Standards</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">How Our Service Works</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">Eight clear steps from first WhatsApp message to guaranteed 90-day warranted repair — all on the same day.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-gray-100 flex flex-col gap-3 hover:bg-white hover:shadow-lg hover:border-secondary/20 transition-all duration-300">
              <span className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-black text-base">{i + 1}</span>
              <h3 className="font-heading font-black text-base text-primary leading-tight">{s.title}</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20want%20to%20start%20the%20AC%20repair%20process."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Start Your AC Service
          </a>
        </div>
      </div>
    </section>
  );
};

// 8. WHY CHOOSE US (RIYADH CLIMATE CONTEXT & LANDMARK MENTIONS)
const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <span className="bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">Climate Adaptation</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Why Choose Our AC Services?</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">Adapting residential and commercial cooling units to perform under Riyadh's harsh desert environment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col gap-6">
            <h3 className="font-heading font-black text-2xl text-primary leading-tight">Why Riyadh Homes Need Regular AC Maintenance</h3>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
              Riyadh's summers are dry and dusty, with temperatures hitting 45°C to 50°C. Frequent sandstorms sweep through residential and commercial districts, depositing fine dust onto outdoor condenser coils.
            </p>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
              This dust acts as a thermal blanket, trapping heat inside your AC system. Over time, it forces the compressor to draw higher electricity current, causing starting capacitors to bulge and blow. Without regular chemical wash and filter sanitization, cooling systems quickly fail during hot peak hours.
            </p>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-medium">
              We serve all residential areas including <strong>North Riyadh</strong> (Al Yasmin, Al Narjis, Hittin, Al Nakheel, Al Malqa), <strong>East Riyadh</strong> (Al Munsiyah, Al Qadisiyah), <strong>Central Riyadh</strong> (Al Olaya, Al Sulaymaniyah, Al Malaz), and surrounding commercial hubs, dispatching local mobile technical teams equipped to deal with high-head pressure issues.
            </p>
            <p className="text-xs md:text-sm text-gray-605 leading-relaxed font-semibold mt-2 border-l-2 border-secondary pl-3">
              <strong>Led by certified HVAC supervisors with over 10+ years of local field experience in Saudi Arabia</strong>, our company operates in strict compliance with SASO and international HVAC safety protocols. We guarantee reliable, expert-supervised AC repair, servicing, and installation across all domains.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-50 flex items-start gap-4">
              <CheckCircle2 className="text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-heading font-black text-base text-primary">GCC-Certified HVAC Technicians</h4>
                <p className="text-xs text-gray-500 mt-1">Our team consists of <strong>KSA-certified HVAC specialists</strong> with formal training in split AC, central AC, VRF, and package unit systems. All technicians are SASO-compliant and background verified for villa and family home access.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-50 flex items-start gap-4">
              <CheckCircle2 className="text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-heading font-black text-base text-primary">10+ Years Desert HVAC Experience</h4>
                <p className="text-xs text-gray-500 mt-1">With over <strong>10 years servicing AC systems under Riyadh's 45°C–50°C summer conditions</strong>, our crew has handled 15,000+ residential and commercial units including Samsung, LG, Daikin, Carrier, and Gree brands.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-50 flex items-start gap-4">
              <CheckCircle2 className="text-secondary shrink-0 mt-1" />
              <div>
                <h4 className="font-heading font-black text-base text-primary">Original Spare Parts & R410A Gas</h4>
                <p className="text-xs text-gray-500 mt-1">We stock <strong>manufacturer-approved run capacitors, copper flare fittings, contactor relays, and genuine R410A/R22 refrigerant</strong>. Every repair uses traceable original parts with a 90-day written service warranty.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20want%20to%20book%20with%20Riyadh's%20trusted%20HVAC%20crew."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Hire Certified HVAC Crew
          </a>
        </div>
      </div>
    </section>
  );
};

// 9. REPAIR VS REPLACEMENT
const RepairVsReplacement = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">Decision Matrix</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">AC Repair vs AC Replacement</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">Compare cost and system life considerations to choose between repairing your existing AC or installing a new unit.</p>
        </div>
        <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[600px] border-collapse bg-white text-left text-xs md:text-sm">
            <thead>
              <tr className="bg-primary text-white font-heading font-black">
                <th className="p-5">Decision Feature</th>
                <th className="p-5 border-l border-white/20">AC Repair Service</th>
                <th className="p-5 border-l border-white/20">AC Replacement Installation</th>
              </tr>
            </thead>
            <tbody className="font-medium text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="p-5 font-black text-primary bg-slate-55">Estimated Cost</td>
                <td className="p-5 border-l border-gray-100">Lower cost (typically fixes specific components)</td>
                <td className="p-5 border-l border-gray-100">Higher upfront cost (investment in new equipment)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-5 font-black text-primary bg-slate-55">Installation Time</td>
                <td className="p-5 border-l border-gray-100">Faster (completed in 1-2 hours)</td>
                <td className="p-5 border-l border-gray-100">Longer (requires full day replacement & test)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-5 font-black text-primary bg-slate-55">Best Applied For</td>
                <td className="p-5 border-l border-gray-100">Minor faults, capacitor failure, leaks, units under 8 years</td>
                <td className="p-5 border-l border-gray-100">Old aging units (8+ years), frequent compressor failures</td>
              </tr>
              <tr>
                <td className="p-5 font-black text-primary bg-slate-55">Energy Efficiency</td>
                <td className="p-5 border-l border-gray-100">Restores original cooling efficiency</td>
                <td className="p-5 border-l border-gray-100">Significantly reduces electricity bill via modern inverter tech</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20need%20advice%20on%20AC%20repair%20vs%20replacement%20in%20Riyadh."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Get Expert Recommendation
          </a>
        </div>
      </div>
    </section>
  );
};

// 10. COST FACTORS
const CostFactors = () => {
  const factors = [
    { title: "Air Conditioner Type", text: "Central package and VRF units involve complex cooling loops and dual fan arrays, resulting in different diagnostic and component costs than split or window units." },
    { title: "Parts & Materials Required", text: "Replacing simple electrical run capacitors or copper fittings is less expensive, whereas buying an original LG or Carrier compressor carries a higher parts cost." },
    { title: "Refrigerant Gas Replenishment", text: "If your AC has lost pressure because of copper cracks, refilling R410A or R22 gas requires welding labor, nitrogen leak testing, vacuum pull, and the gas itself." },
    { title: "Unit Age & Compatibility", text: "Older models running on phased-out R22 gas involve high material costs for sourcing refrigerant compared to modern eco-friendly R410A units." },
    { title: "Emergency After-Hours Service", text: "Emergency calls in the middle of a summer night or peak heatwave hours involve specific technician dispatch and mobilization charges." },
    { title: "Number of AC Units", text: "Servicing multiple split units in one visit is discounted versus individual service calls. We offer villa-wide package pricing for multi-unit households." },
    { title: "Travel Distance & Area", text: "Dispatch fees vary slightly based on how far the service location is from our nearest standby technical hub in North, Central, or East Riyadh." },
    { title: "Warranty Claim or Fresh Repair", text: "Repairs under our 90-day warranty period are covered at no additional parts cost — you only pay for any new components not related to the prior fix." }
  ];
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">Pricing Factors</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">What Affects AC Repair Costs?</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">Clear, upfront estimates. We analyze these major factors to determine the repair quote for your system.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {factors.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-3 hover:shadow-md hover:border-secondary/20 transition-all duration-300">
              <span className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 font-bold">💰</span>
              <div>
                <h3 className="font-heading font-black text-base text-primary mb-2">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20want%20a%20price%20quote%20for%20AC%20repair."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Request Free Cost Quote
          </a>
        </div>
      </div>
    </section>
  );
};

// 11. LOCATION SECTION (LOCATION CARDS & KSA-WIDE COVERAGE)
const LocationCards = () => {
  const locs = [
    { area: "Al Olaya", svc: "AC Repair in Al Olaya", desc: "Serving commercial towers and residential buildings with emergency HVAC repair, capacitor swaps, and chemical cleans." },
    { area: "Al Malaz", svc: "AC Cleaning in Al Malaz", desc: "High-pressure chemical wash of split evaporator units, dirt removal, and condensate drain line flushing." },
    { area: "Al Yasmin", svc: "AC Maintenance in Al Yasmin", desc: "Bi-annual filter check-up, voltage diagnostic, contactor cleaning, and pressure testing for residential villas." },
    { area: "Hittin", svc: "AC Installation in Hittin", desc: "Precision split AC installations, copper piping laydown, insulation wrapping, and mounting bracket setup." }
  ];

  const ksaHubs = [
    { name: "Jeddah Hub", desc: "Specialized HVAC technician crew dealing with coastal marine humidity, salt-spray corrosion treatment, and high-performance compressor replacements." },
    { name: "Dammam & Khobar", desc: "Industrial and residential split/central air conditioning repairs, deep coil wash, and eco-friendly R410A gas leak detection & recharge." },
    { name: "Makkah & Medina", desc: "Hotel-grade heavy duty HVAC package units repair, preventive seasonal servicing, duct sanitation, and smart control system calibration." }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-secondary/15 text-secondary border border-secondary/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">Saudi Arabia (KSA) Service Coverage</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">AC Services in Riyadh & Major KSA Cities</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">
            While our local rapid response teams service all Riyadh districts within 30-60 minutes, we also provide professional consultation, dispatch coordination, and phone support for other KSA provinces.
          </p>
        </div>

        {/* Riyadh Districts */}
        <div className="mb-16">
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6 border-l-4 border-secondary pl-3">Riyadh Rapid-Response District Hubs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locs.map((l, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-gray-100 flex flex-col justify-between hover:shadow-lg hover:bg-white hover:border-secondary/20 transition-all duration-300">
                <div>
                  <span className="text-xs font-black text-secondary uppercase tracking-widest block mb-2">{l.area} District</span>
                  <h3 className="font-heading font-black text-lg text-primary mb-3 leading-tight">{l.svc}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6">{l.desc}</p>
                </div>
                <Link 
                  href={`/locations/${l.area.toLowerCase().replace(" ", "-")}`}
                  className="text-primary hover:text-secondary font-black text-xs uppercase tracking-widest flex items-center gap-2"
                >
                  Explore {l.area} Hub <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* KSA Major Cities */}
        <div>
          <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6 border-l-4 border-primary pl-3">Saudi Arabia (KSA) Support Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ksaHubs.map((hub, i) => (
              <div key={i} className="bg-primary/5 p-8 rounded-3xl border border-primary/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-primary uppercase tracking-widest block mb-2">KSA Province Hub</span>
                  <h4 className="font-heading font-black text-xl text-primary mb-3 leading-tight">{hub.name}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6">{hub.desc}</p>
                </div>
                <a 
                  href="https://wa.me/966510942150?text=Hello,%20I%20need%2520AC%2520or%2520home%2520maintenance%2520support%2520in%2520Saudi%2520Arabia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2"
                >
                  Contact Hub Dispatch <WhatsAppIcon size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/locations"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore All 40+ Riyadh Areas & KSA Hubs
          </Link>
        </div>
      </div>
    </section>
  );
};

// 12. CERTIFIED TECHNICIANS PROFILE (EEAT)
const CertifiedTechnicians = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <span className="bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">EEAT Verification</span>
        <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight mb-6">Our Certified Technician Fleet</h2>
        <div className="bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm text-left grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4 border-b md:border-b-0 md:border-r border-gray-100">
            <span className="text-4xl mb-4">👨‍🔧</span>
            <h3 className="font-heading font-black text-lg text-primary">Certified HVAC Crew</h3>
            <p className="text-xs text-gray-400 mt-2 font-bold uppercase tracking-widest">Training & Expertise</p>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">Certified for split, central, and package systems with regular brand-specific training.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border-b md:border-b-0 md:border-r border-gray-100">
            <span className="text-4xl mb-4">👮‍♂️</span>
            <h3 className="font-heading font-black text-lg text-primary">Background Checked</h3>
            <p className="text-xs text-gray-400 mt-2 font-bold uppercase tracking-widest">Safety & Trust</p>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">Fully vetted team members, drug screened, and background verified for family villa access.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <span className="text-4xl mb-4">🏆</span>
            <h3 className="font-heading font-black text-lg text-primary">10+ Years Experience</h3>
            <p className="text-xs text-gray-400 mt-2 font-bold uppercase tracking-widest">Riyadh GCC Spec</p>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">Averaging 10 years of servicing AC units under extreme desert summer conditions.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20want%20to%20book%20a%20certified%20technician."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Book Vetted Technicians
          </a>
        </div>
      </div>
    </section>
  );
};

// 13. REAL PROJECT GALLERY (EEAT)
const ProjectGallery = () => {
  const projects = [
    {
      title: "Split AC Gas Refill & Flare Weld",
      area: "Al Malqa, Riyadh",
      service: "AC Gas Refill Service",
      solved: "Repaired cracked copper flare joints, evacuated air with vacuum pump down to 500 microns, recharged 1.4kg R410A gas, restored cooling output to 18°C.",
      stat: "Restored 18°C Cooling"
    },
    {
      title: "Clogged Condensate Drain Flush",
      area: "Al Olaya, Riyadh",
      service: "AC Deep Cleaning Service",
      solved: "Hydro-cleaned evaporator coils using catching bag. Flushed main PVC drain line with nitrogen to remove sand-mud gel causing indoor water dripping.",
      stat: "Leak Stopped 100%"
    },
    {
      title: "Compressor Replacement & Run Capacitor",
      area: "Al Malaz, Riyadh",
      service: "AC Repair Service",
      solved: "Replaced burnt compressor in LG outdoor unit with original replacement parts. Installed new 45uF capacitor and verified balanced electrical current pull.",
      stat: "LG Original Spares"
    }
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-secondary/15 text-secondary border border-secondary/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">Field Showcases</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Real Projects & Diagnoses</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">Browse case summaries from real service calls made by our technicians across Riyadh neighborhoods.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-[32px] border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black bg-primary/5 text-primary border border-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">{p.service}</span>
                  <span className="text-[10px] font-black text-secondary uppercase tracking-widest">{p.area}</span>
                </div>
                <h3 className="font-heading font-black text-lg text-primary mb-3 leading-tight">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-medium mb-6"><strong className="text-primary uppercase tracking-widest text-[9px] block mb-1">Diagnosis & Solution:</strong> {p.solved}</p>
              </div>
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between mt-auto">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Project Status</span>
                <span className="text-xs font-black text-[#1DA851] bg-[#25D366]/10 px-3 py-1 rounded-full">{p.stat}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20want%20to%20book%20a%20similar%20service%20in%20my%20district."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Book Similar Service
          </a>
        </div>
      </div>
    </section>
  );
};

// 14. CUSTOMER REVIEWS (EEAT WITH SERVICE USED, AREA, PROBLEM SOLVED)
const CustomerReviews = () => {
  const reviews = [
    {
      name: "Ahmed Al-Sudairy",
      area: "Al Malqa, Riyadh",
      service: "Emergency AC Repair",
      problem: "Split AC blowing warm air during afternoon peak.",
      text: "Outstanding service. The technician arrived in 30 minutes for my AC repair in Malqa. Fixed the gas leak, replaced the capacitor, and now the cooling is better than ever.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      area: "Diplomatic Quarter, Riyadh",
      service: "AC Deep Chemical Cleaning",
      problem: "Musty odor and low airflow output from indoor unit.",
      text: "The best AC cleaning service in Riyadh. They were very clean, used high-pressure water, and my AC unit is silent now. Very professional team.",
      rating: 5
    },
    {
      name: "Khalid Mansour",
      area: "Al Olaya, Riyadh",
      service: "Capacitor & Contactor Replacement",
      problem: "Breaker tripped immediately when AC was turned on.",
      text: "Same-day service as promised. My AC stopped working at 2 PM, and by 4 PM it was fixed. The price was transparent and fair.",
      rating: 5
    }
  ];
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">EEAT Customer Reviews</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Trusted by Riyadh Homeowners</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">Read honest testimonials detailing specific services, districts, and problems solved by our technicians.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={16} fill="#F59E0B" stroke="#F59E0B" />)}
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed italic mb-6">"{r.text}"</p>
              </div>
              <div className="border-t border-gray-50 pt-4 mt-auto">
                <span className="font-black text-primary text-sm block">{r.name}</span>
                <span className="text-[10px] font-black text-secondary uppercase tracking-widest block mt-1">{r.area}</span>
                <span className="text-[10px] text-gray-400 mt-2 block font-medium">
                  <strong className="text-primary uppercase tracking-widest text-[9px] block">Service:</strong> {r.service} <br />
                  <strong className="text-primary uppercase tracking-widest text-[9px] block">Problem:</strong> {r.problem}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20want%20to%20book%20with%20your%205-star%20rated%20team."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Schedule 5-Star Rated Service
          </a>
        </div>
      </div>
    </section>
  );
};

// 15. TOPIC CLUSTER & KNOWLEDGE HUB (TOPICAL AUTHORITY)
const TopicClusterSection = () => {
  const clusters = [
    {
      parent: "AC Repair Services",
      children: ["Compressor Repair", "Capacitor Swaps", "Thermostat Calibration", "Wiring Repair"]
    },
    {
      parent: "AC Cleaning Services",
      children: ["Evaporator Coil Wash", "Condenser Flush", "Drain Line Cleaning", "Mesh Filter Clean"]
    },
    {
      parent: "AC Maintenance",
      children: ["Refrigerant Recharge", "Leak Detection", "Pressure Testing", "System Inspection"]
    }
  ];
  const guides = [
    { slug: "fix-split-ac-blowing-warm-air-riyadh", title: "How to Fix a Split AC Blowing Warm Air in 45°C Riyadh Heat" },
    { slug: "ac-compressor-clicking-noise-troubleshooting", title: "Why Is My AC Compressor Making a Loud Clicking Noise?" },
    { slug: "emergency-ac-repair-riyadh-guide", title: "Emergency AC Repair Riyadh: What to Do When System Fails at 2 PM" },
    { slug: "water-leaking-from-indoor-ac-unit-diagnostic", title: "Why Is Water Leaking from My Indoor AC Unit? (Step-by-Step)" },
    { slug: "split-ac-refrigerant-leak-signs-r410a", title: "How to Tell If Your Split AC Has a Refrigerant Leak (R410A vs R22)" }
  ];
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Topic Cluster Structure (Topical Authority Visualization) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block self-start">Topical Architecture</span>
            <h3 className="font-heading font-black text-2xl text-primary leading-tight">AC Service Topic Clusters</h3>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">
              We approach HVAC solutions through a structured semantic framework, covering every subsystem of home and commercial cooling.
            </p>
            <div className="flex flex-col gap-4 border border-gray-100 p-6 rounded-3xl bg-slate-50">
              {clusters.map((c, i) => (
                <div key={i} className="text-xs font-bold text-gray-600">
                  <span className="text-primary font-black uppercase tracking-wider block border-l-2 border-secondary pl-2 mb-1">{c.parent}</span>
                  <div className="flex flex-wrap gap-2 pl-3 mt-1">
                    {c.children.map((child, idx) => (
                      <span key={idx} className="bg-white px-2 py-1 rounded border border-gray-100 text-[10px]">{child}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Knowledge Hub (Blog Links) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="bg-secondary/15 text-secondary border border-secondary/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block self-start">Knowledge Hub</span>
            <h3 className="font-heading font-black text-2xl text-primary leading-tight">Educational Troubleshooting Guides</h3>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">
              Browse our technical library to understand specific air conditioning faults, diagnostics, and optimization tips.
            </p>
            <ul className="flex flex-col gap-3">
              {guides.map((g, i) => (
                <li key={i} className="bg-slate-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 rounded-2xl p-4 transition-all">
                  <Link href={`/blog/${g.slug}`} className="flex justify-between items-center gap-4 text-xs md:text-sm font-black text-primary hover:text-secondary">
                    <span>{g.title}</span>
                    <ArrowRight size={16} className="text-secondary shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <div className="mt-12 text-center w-full">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20need%20expert%20AC%20services%20in%20Riyadh."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Request Service Now
          </a>
        </div>
      </div>
    </section>
  );
};



// 17. INTERNAL LINKING BLOCK
const InternalLinking = () => {
  const links = [
    { name: "AC Repair Riyadh", href: "/ac-repair" },
    { name: "AC Cleaning Riyadh", href: "/ac-cleaning" },
    { name: "AC Installation Riyadh", href: "/ac-installation" },
    { name: "AC Maintenance Riyadh", href: "/ac-maintenance" },
    { name: "AC Gas Refill", href: "/ac-gas-refill" },
    { name: "AC Duct Cleaning", href: "/ac-duct-cleaning" },
    { name: "AC Coil Cleaning", href: "/ac-coil-cleaning" },
    { name: "AC Filter Cleaning", href: "/ac-filter-cleaning" },
    { name: "Plumbing Services", href: "/plumbing" },
    { name: "Home Maintenance", href: "/home-maintenance" },
  ];
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Popular Riyadh Services</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {links.map((l, i) => (
            <Link key={i} href={l.href} className="bg-slate-50 hover:bg-primary hover:text-white transition-colors text-primary px-5 py-2.5 rounded-full font-bold text-xs border border-gray-100">
              {l.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};


// 12. BEFORE & AFTER GALLERY (AC REPAIR PROJECTS)
const BeforeAfterGallery = () => {
  const projects = [
    {
      title: "Split AC Deep Cleaning & Sanitization",
      desc: "This split AC had restricted airflow and was venting a foul mildew smell due to heavy dust accumulation on the internal coils.",
      beforeImg: "/uploaded/dirty-ac-coils.png",
      afterImg: "/uploaded/ac-cleaning-pressure-wash.png",
      beforeLabel: "Clogged Evaporator Coils",
      afterLabel: "Pressure Washed & Sanitized Coils",
      area: "Al Malqa, Riyadh",
      efficiency: "+35% Airflow Increase"
    },
    {
      title: "New Split AC Mounting & Setup",
      desc: "Complete indoor split unit installation, aligning the metal backplate and mounting the casing level on the wall.",
      beforeImg: "/uploaded/ac-mounting-backplate.png",
      afterImg: "/uploaded/brand-samsung.png",
      beforeLabel: "Precise Plate Mount & Leveling",
      afterLabel: "Mounted Indoor Unit Testing",
      area: "Al Yasmin, Riyadh",
      efficiency: "Perfect Level Alignment"
    },
    {
      title: "Outdoor Unit Compressor Gas Refill",
      desc: "Diagnosed low pressure, welded a cracked copper pipe joint, and recharged original R410A refrigerant gas.",
      beforeImg: "/uploaded/ac-gas-refill-outdoor.png",
      afterImg: "/uploaded/brand-lg.png",
      beforeLabel: "Technician Leak Testing & Gas Fill",
      afterLabel: "Completed Outdoor Unit Calibration",
      area: "Al Olaya, Riyadh",
      efficiency: "Optimal Pressure Restored"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-50 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="bg-secondary/15 text-secondary border border-secondary/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">EEAT Proof of Work</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Recent AC Repair & Cleaning Projects</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">Real photos of our professional HVAC technicians working on-site in residential villas and commercial offices across Riyadh.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="grid grid-cols-2 gap-2 p-4 bg-slate-100">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-inner border border-gray-200">
                  <Image src={p.beforeImg} alt={p.beforeLabel} fill className="object-cover" sizes="(max-width: 768px) 50vw, 15vw" />
                  <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest text-center py-1 rounded-md">{p.beforeLabel}</div>
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-inner border border-gray-200">
                  <Image src={p.afterImg} alt={p.afterLabel} fill className="object-cover" sizes="(max-width: 768px) 50vw, 15vw" />
                  <div className="absolute bottom-2 left-2 right-2 bg-secondary/80 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest text-center py-1 rounded-md">{p.afterLabel}</div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black text-secondary uppercase tracking-widest">{p.area}</span>
                  <h3 className="font-heading font-black text-lg text-primary mt-1 mb-2">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium mb-4">{p.desc}</p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-black uppercase tracking-wider text-primary">
                  <span>Efficiency Gain:</span>
                  <span className="text-secondary">{p.efficiency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20want%20to%20book%20a%20similar%20AC%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Get Similar Results
          </a>
        </div>
      </div>
    </section>
  );
};

// 13. COMPARISON SECTION (WHY CHOOSE US OVER OTHER COMPANIES)
const ComparisonSection = () => {
  const features = [
    { name: "Response Time Guarantee", us: "30-60 Minutes Dispatch", others: "24-48 Hours Wait" },
    { name: "Technician Qualifications", us: "Licensed, Certified & Background Checked", others: "Freelance / Untrained Helpers" },
    { name: "Workmanship Warranty", us: "90-Day Written Service Warranty", others: "No Guarantee After Leaving" },
    { name: "Pricing Transparency", us: "No Hidden Costs - Upfront SAR Quotes", others: "Surprise Fees After Work" },
    { name: "Emergency Availability", us: "24/7 Standby Crew in Major Intersections", others: "Off-duty during night & holidays" },
    { name: "Booking Channels", us: "Instant WhatsApp & Direct Phone Call", others: "Slow Webforms / Email Only" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="bg-primary/5 text-primary border border-primary/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider inline-block mb-3">Direct Comparison</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Why Choose Us Over Other AC Companies?</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-2">See how our professional services compare with general market providers in Riyadh.</p>
        </div>
        <div className="overflow-x-auto rounded-[32px] border border-gray-100 shadow-xl shadow-primary/5">
          <table className="w-full min-w-[700px] border-collapse bg-white text-left text-sm">
            <thead>
              <tr className="bg-primary text-white font-heading font-black">
                <th className="p-6">Service Standard / Feature</th>
                <th className="p-6 border-l border-white/10 text-center bg-secondary">AC Repairing KSA (Us)</th>
                <th className="p-6 border-l border-white/10 text-center">Typical Competitor</th>
              </tr>
            </thead>
            <tbody className="font-semibold text-gray-600">
              {features.map((f, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-slate-50 transition-colors">
                  <td className="p-6 font-black text-primary">{f.name}</td>
                  <td className="p-6 border-l border-gray-100 text-center bg-secondary/5 text-secondary font-black">
                    <span className="inline-flex items-center gap-1.5">
                      ✅ {f.us}
                    </span>
                  </td>
                  <td className="p-6 border-l border-gray-100 text-center text-red-500 font-bold">
                    <span className="inline-flex items-center gap-1.5">
                      ❌ {f.others}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/966510942150?text=Hello,%20I%20want%20to%20book%20with%20your%20licensed%20technicians."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-action text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-secondary/20 hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon size={16} /> Book Premium HVAC Services
          </a>
        </div>
      </div>
    </section>
  );
};

// 14. EMERGENCY AC REPAIR URGENCY SECTION
const EmergencyUrgencySection = () => {
  return (
    <section className="bg-primary text-white py-20 relative overflow-hidden">
      {/* Decorative pulse glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <span className="bg-white/20 text-white border border-white/30 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-block w-fit">
              🚨 24/7 Immediate Dispatch Across Riyadh
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-black tracking-tight leading-tight">
              Emergency AC Repair Riyadh
            </h2>
            <p className="text-base md:text-lg text-white/95 font-bold leading-relaxed">
              Is your AC blowing hot air? Is it leaking water inside your living room, making loud grinding noises, or completely tripped the breaker? 
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {[
                "AC Not Cooling",
                "Water Leakage",
                "AC Making Noise",
                "Compressor Failure",
                "Gas Leakage",
                "Breaker Tripping"
              ].map((prob) => (
                <div key={prob} className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 text-sm font-bold">
                  <span className="text-yellow-400 text-base">⚠️</span> {prob}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 bg-white/10 p-8 rounded-[32px] border border-white/20 backdrop-blur-sm flex flex-col gap-6 text-center">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-white/80">Average Arrival Time</span>
              <div className="text-4xl font-black text-white mt-1">30–60 Mins</div>
              <p className="text-xs text-white/70 font-bold mt-1">Standby technicians in Al Olaya, Malaz & North Riyadh</p>
            </div>
            <a 
              href="tel:+966 51 094 2150"
              className="w-full bg-white hover:bg-gray-150 text-primary py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Dispatch Emergency HVAC Technician
            </a>
            <a 
              href="https://wa.me/966510942150?text=Hello,%20I%20have%20an%20AC%20emergency%20in%20Riyadh.%20Please%2520send%2520a%2520technician."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              <WhatsAppIcon size={18} className="text-white" /> Request Urgent HVAC Help
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// 18. CTA BANNER (WITH URGENCY SLOTS & CONVERSION CTA VARIATION)
const CTABanner = () => (
  <section className="py-24 bg-white flex flex-col items-center relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-secondary p-12 md:p-20 rounded-[48px] text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none -rotate-12 scale-150">
          <Award size={400} />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          <div className="flex flex-col gap-2 items-center">
            <span className="bg-white/20 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest text-white border border-white/20">
              🚨 Emergency response available 24/7
            </span>
            <span className="text-white/80 text-xs font-black uppercase tracking-widest mt-2">
              🔥 Today's Remaining Emergency Slots: <span className="bg-secondary text-white px-2 py-0.5 rounded font-black">4 Slots Left</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black leading-tight tracking-tight">
            Need AC Repair or Deep Cleaning? <br /> Restoring Cooling in 30 Mins.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-4">
            <a href="tel:+966 51 094 2150" className="w-full sm:w-auto bg-white text-secondary px-8 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
              <Phone size={24} fill="currentColor" /> Call Emergency Support
            </a>
            <a href="https://wa.me/966510942150?text=Hello,%20I%20need%20to%20book%20a%20same-day%2520AC%20repair%20service." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-[#1DA851] transition-all shadow-xl flex items-center justify-center gap-3">
              <WhatsAppIcon size={24} className="text-white" /> Book Same-Day Slot
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);


export default function Home() {
  const handleBookNow = (serviceName?: any) => {
    const sName = serviceName && typeof serviceName === 'string' ? serviceName : "Home Maintenance and AC Repair";
    const text = `Hello, I need ${sName} services. Can you help?`;
    window.open(`https://wa.me/966510942150?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen">
      {/* Schema */}
      <Schema type="WebSite" data={generateWebSiteSchema()} />
      <Schema type="LocalBusiness" data={generateLocalBusinessSchema()} />
      <Schema type="BreadcrumbList" data={generateBreadcrumbSchema([{ name: "Home", item: "/" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["WebPage", "ItemPage"],
        "name": "AC Repairing KSA - Professional AC Repair & HVAC Maintenance in Riyadh, Saudi Arabia",
        "url": "https://acrepairingksa.com/",
        "description": "KSA-certified HVAC technicians for split AC, central AC repair, AC cleaning, compressor replacement, refrigerant gas refill (R410A/R22), and emergency AC repair across all Riyadh districts.",
        "speakable": {
          "@type": "SpeakableSpecification",
          "xpath": ["/html/head/title", "/html/head/meta[@name='description']/@content"]
        },
        "about": {
          "@type": "HVACBusiness",
          "name": "AC Repairing KSA",
          "areaServed": ["Riyadh", "Jeddah", "Dammam", "Makkah", "Medina", "Khobar", "Saudi Arabia"]
        }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Organization", "HVACBusiness", "LocalBusiness"],
        "name": "AC Repairing KSA",
        "url": "https://acrepairingksa.com/",
        "telephone": "+966 51 094 2150",
        "email": "info@acrepairingksa.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Riyadh",
          "addressCountry": "SA",
          "addressRegion": "Riyadh Province"
        },
        "areaServed": [
          "Riyadh", "Jeddah", "Dammam", "Makkah", "Medina", "Khobar",
          "Al Olaya", "Al Malaz", "Al Yasmin", "Al Narjis", "Hittin",
          "Al Nakheel", "Al Malqa", "Al Sulaymaniyah", "Al Rawdah", "Al Munsiyah"
        ],
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"], "opens": "08:00", "closes": "22:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "14:00", "closes": "22:00" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "542"
        }
      })}} />

      <Navbar onBookNow={() => handleBookNow("Navbar")} />
      
      <div className="flex flex-col">
        <Hero onBookNow={handleBookNow} />
        <TrustBar />
        <Services onBookNow={handleBookNow} />
        <AIDirectAnswers />
        <CommonProblems />
        <ACDiagnosticsTable />
        <ACComponents />
        <BrandsGrid />
        <BeforeAfterGallery />
        <SignsYourACNeedsRepair />
        <StepByStepProcess />
        <WhyChooseUs />
        <EmergencyUrgencySection />
        <ComparisonSection />
        <RepairVsReplacement />
        <CostFactors />
        <LocationCards />
        <CertifiedTechnicians />
        <ProjectGallery />
        <CustomerReviews />
        <TopicClusterSection />
        <FAQ />
        <InternalLinking />
        <CTABanner />
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
}
