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
  ClipboardList, CheckSquare, Zap as ZapIcon, CalendarCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import Schema, { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/components/Schema";

export default function ACMaintenancePage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const handleBookNow = (service?: any) => {
    const sName = service && typeof service === 'string' ? service : "AC Maintenance";
    const text = `Hello, I need ${sName} services. Can you help?`;
    window.open(`https://wa.me/966510942150?text=${encodeURIComponent(text)}`, '_blank');
  };

  const faqs = [
    { q: "How often should AC be maintained?", a: "In Saudi Arabia's dusty climate, residential ACs should be maintained every 4 to 6 months. Commercial systems require quarterly or monthly maintenance." },
    { q: "What is included in AC maintenance?", a: "Our comprehensive service includes filter and coil cleaning, electrical terminal tightening, refrigerant pressure checks, drain line flushing, and thermostat calibration." },
    { q: "How much does AC maintenance cost in Saudi Arabia?", a: "Standard preventive maintenance starts at a very affordable rate. For maximum value, our Annual Maintenance Contracts (AMC) offer bundled visits at heavily discounted prices." },
    { q: "Do you provide annual maintenance contracts (AMC)?", a: "Yes, we offer Basic, Standard, and Premium AMC plans for villas, apartments, and commercial buildings. AMCs include priority service and discounted spare parts." },
    { q: "Can maintenance reduce electricity bills?", a: "Absolutely. A well-maintained AC with clean coils and optimal refrigerant levels uses up to 30% less electricity to reach the desired room temperature." },
    { q: "How long does maintenance take?", a: "A standard split AC preventive maintenance visit takes about 45 to 60 minutes per unit. Central systems may take several hours depending on the ductwork." },
    { q: "Do you service inverter ACs?", a: "Yes, our technicians are certified to maintain advanced Inverter ACs, ensuring their complex circuit boards and variable-speed compressors operate flawlessly." },
    { q: "Can maintenance prevent AC breakdowns?", a: "Yes, preventive maintenance catches minor issues—like a weak capacitor or a slow gas leak—before they escalate into catastrophic and expensive compressor failures." },
    { q: "Why is my AC leaking water?", a: "Water leakage is usually caused by a blocked drain pipe filled with dirt and algae. Routine maintenance includes pressure-flushing this line to prevent overflows." },
    { q: "Does maintenance improve air quality?", a: "Yes, by deep cleaning the filters, coils, and drain pan, we eliminate mold, bacteria, and dust, circulating pure and healthy air into your home." },
    { q: "Do you offer emergency support for AMC clients?", a: "Yes! Clients on our Premium AMC plan receive 24/7 emergency support with a guaranteed response time." },
    { q: "What brands do you maintain?", a: "We maintain all major HVAC brands, including O General, Daikin, LG, Samsung, Carrier, York, Gree, and Mitsubishi." },
    { q: "Is gas refilling included in maintenance?", a: "Routine maintenance includes checking the gas pressure. If a top-up or full recharge is required due to a leak, it is quoted separately." },
    { q: "How do I know if my AC needs maintenance?", a: "Look for warning signs like weak airflow, higher electricity bills, strange noises, foul odors, or the AC taking too long to cool the room." },
    { q: "Do you service commercial properties like restaurants and offices?", a: "Yes, we specialize in large-scale commercial HVAC maintenance, including Package units, Cassettes, and VRF systems." }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans overflow-x-hidden">
      <Schema 
        type="Service" 
        data={generateServiceSchema(
          "Preventive AC Maintenance Services Across Saudi Arabia",
          "Expert AC maintenance, AMC contracts, and preventive care for split and central ACs across KSA.",
          "/ac-maintenance"
        )} 
      />
      <Schema type="FAQPage" data={generateFAQSchema(faqs)} />
      <Schema type="BreadcrumbList" data={generateBreadcrumbSchema([ { name: "Home", item: "/" }, { name: "AC Maintenance", item: "/ac-maintenance" } ])} />
      
      <Navbar onBookNow={handleBookNow} />

      {/* 1. HERO SECTION (Unique Layout: Left Text, Right Image + Floating Cards) */}
      <section className="relative pt-32 pb-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" />
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-3 bg-secondary/10 text-secondary px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] w-fit border border-secondary/20 shadow-sm">
              <ShieldCheck size={18} /> Preventive AC Care Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-heading font-black text-primary leading-[1.05] tracking-tight">
              AC Maintenance Services Across Saudi Arabia
            </h1>
            <p className="text-lg md:text-xl text-primary/60 font-medium leading-relaxed max-w-lg border-l-4 border-secondary/30 pl-6">
              Keep your air conditioning system running efficiently with professional AC maintenance. We inspect, clean and optimize all components to improve cooling and prevent costly breakdowns.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => handleBookNow("Schedule Maintenance")} className="px-10 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all flex items-center gap-3 text-sm active:scale-95">
                <CalendarCheck size={20} /> Schedule Maintenance
              </button>
              <button onClick={() => handleBookNow("WhatsApp Support")} className="px-10 py-5 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-[#20b858] transition-all flex items-center gap-3 text-sm active:scale-95">
                <MessageSquare size={20} /> WhatsApp Now
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="relative h-[600px] w-full rounded-[48px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border-8 border-white">
              <Image src="/Ac Services/AC Maintenance.webp" alt="AC Maintenance KSA" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
            </div>
            {/* Floating Cards */}
            <div className="absolute top-12 -left-10 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center"><BatteryCharging size={24}/></div>
              <div className="flex flex-col"><span className="font-black text-primary text-lg">Energy Savings</span><span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Guaranteed</span></div>
            </div>
            <div className="absolute bottom-24 -right-6 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{animationDuration: '4s'}}>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"><ShieldCheck size={24}/></div>
              <div className="flex flex-col"><span className="font-black text-primary text-lg">Longer AC Life</span><span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Protected</span></div>
            </div>
            <div className="absolute -bottom-8 left-12 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 animate-bounce" style={{animationDuration: '3.5s'}}>
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center"><TrendingDown size={24}/></div>
              <div className="flex flex-col"><span className="font-black text-primary text-lg">Lower Repair Costs</span><span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Save Money</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. AI OVERVIEW SECTION */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <div className="w-20 h-20 mx-auto bg-secondary text-white rounded-[24px] rotate-12 flex items-center justify-center shadow-2xl mb-8">
            <Search size={32} className="-rotate-12" />
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-black text-white/90 mb-6">What is AC Maintenance?</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl shadow-inner">
            <p className="text-lg md:text-xl font-medium leading-relaxed text-white">
              AC maintenance is a preventive service designed to optimize performance and prevent sudden breakdowns. It involves cleaning air filters, washing evaporator coils, flushing drain lines, inspecting electrical components, and checking refrigerant pressure. Regular maintenance ensures maximum cooling efficiency, significantly lowers electricity bills, and extends the lifespan of the HVAC system.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY REGULAR AC MAINTENANCE IS IMPORTANT (6 Icon Cards) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-secondary font-black tracking-widest text-sm uppercase">The Benefits</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mt-4">Why Maintenance is Crucial</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Prevent Sudden Breakdowns", i: <ShieldAlert size={32}/>, d: "Identify and fix weak components before they cause total system failure during peak summer." },
              { t: "Lower Electricity Bills", i: <TrendingDown size={32}/>, d: "Clean coils and optimized airflow reduce the compressor's workload, slashing energy consumption." },
              { t: "Improve Cooling Efficiency", i: <ThermometerSun size={32}/>, d: "Restore factory-level cooling power, allowing your room to chill faster and stay cold longer." },
              { t: "Increase AC Lifespan", i: <Activity size={32}/>, d: "Routine care prevents fatal wear and tear on the expensive compressor, adding years to your AC's life." },
              { t: "Improve Indoor Air Quality", i: <Wind size={32}/>, d: "Remove asthma-triggering dust, mold, and bacteria from filters and coils for pure, healthy breathing." },
              { t: "Reduce Expensive Repairs", i: <Wrench size={32}/>, d: "Catching a small leak early prevents the need for an expensive, full-scale compressor replacement." }
            ].map((card, i) => (
              <div key={i} className="group p-8 bg-[#F8FAFC] rounded-[32px] border border-gray-100 hover:border-secondary hover:shadow-xl transition-all duration-300 flex flex-col gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors">
                  {card.i}
                </div>
                <h3 className="text-xl font-black text-primary leading-tight">{card.t}</h3>
                <p className="text-primary/60 font-medium leading-relaxed flex-grow">{card.d}</p>
                <button onClick={() => handleBookNow(card.t)} className="text-sm font-black uppercase tracking-widest text-secondary flex items-center gap-2 group-hover:gap-4 transition-all">
                  Secure Benefit <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Book Preventive Maintenance")} className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all">
              Book Maintenance Today
            </button>
          </div>
        </div>
      </section>

      {/* 4. OUR MAINTENANCE CHECKLIST */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white">Our 10-Point Checklist</h2>
            <p className="text-lg text-white/60 mt-4 max-w-2xl mx-auto">We leave no stone unturned. Every component is rigorously tested.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {[
              { t: "Filter Cleaning", b: "Improves Airflow", n: "Removes blockages" },
              { t: "Coil Cleaning", b: "Max Cooling", n: "Chemical foam wash" },
              { t: "Thermostat Check", b: "Accurate Temp", n: "Calibration testing" },
              { t: "Electrical Wiring", b: "Fire Prevention", n: "Tighten terminals" },
              { t: "Gas Pressure", b: "Stops Freezing", n: "Gauge verification" },
              { t: "Drain Line", b: "Stops Leaks", n: "Pressure flushing" },
              { t: "Compressor", b: "Heart of AC", n: "Amp draw test" },
              { t: "Fan Motor", b: "Quiet Operation", n: "Bearing check" },
              { t: "Airflow Test", b: "Room Coverage", n: "Anemometer check" },
              { t: "Condenser", b: "Heat Rejection", n: "Sand removal" }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-3xl flex flex-col items-start gap-4 hover:bg-secondary transition-colors group">
                <CheckSquare size={28} className="text-secondary group-hover:text-white" />
                <div>
                  <h3 className="font-black text-lg mb-1 leading-tight">{item.t}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-secondary group-hover:text-white/80 mb-2">{item.b}</p>
                  <p className="text-xs text-white/60 group-hover:text-white/90">{item.n}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center relative z-10">
            <button onClick={() => handleBookNow("Full Checklist Service")} className="px-12 py-5 bg-white text-primary rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-200 transition-all">
              Schedule Complete Service
            </button>
          </div>
        </div>
      </section>

      {/* 5. ANNUAL MAINTENANCE CONTRACT (AMC) PRICING */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-secondary font-black tracking-widest text-sm uppercase">Peace of Mind</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mt-4">Annual Maintenance Contracts</h2>
            <p className="text-lg text-primary/60 mt-4 max-w-2xl mx-auto">Save money and guarantee priority support all year round with our AMC plans.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "Basic Plan", d: "Ideal for small apartments.", f: "2 Visits / Year", c: "Basic Wash", p: "Visual Check", e: "Standard", pr: "No", st: "" },
              { t: "Standard Plan", d: "Perfect for family villas.", f: "3 Visits / Year", c: "Deep Chemical Clean", p: "Full Diagnostic", e: "24-Hour Response", pr: "Yes", st: "border-secondary scale-105 shadow-2xl relative z-10 bg-white", pop: true },
              { t: "Premium Plan", d: "For large homes & commercial.", f: "4 Visits / Year", c: "Medical Grade Wash", p: "Free Minor Parts", e: "2-Hour Response", pr: "VIP", st: "bg-primary text-white border-primary" }
            ].map((plan, i) => (
              <div key={i} className={cn("p-10 rounded-[40px] border border-gray-200 flex flex-col gap-8 transition-transform hover:-translate-y-2 bg-white", plan.st)}>
                {plan.pop && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Most Popular</div>}
                <div>
                  <h3 className={cn("text-3xl font-heading font-black", plan.t === "Premium Plan" ? "text-white" : "text-primary")}>{plan.t}</h3>
                  <p className={cn("text-sm mt-2 font-medium", plan.t === "Premium Plan" ? "text-white/60" : "text-gray-500")}>{plan.d}</p>
                </div>
                <div className="flex flex-col gap-4 flex-grow">
                  <div className="flex justify-between items-center border-b border-gray-100/20 pb-3">
                    <span className="text-sm font-bold opacity-70">Frequency</span>
                    <span className="text-sm font-black">{plan.f}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100/20 pb-3">
                    <span className="text-sm font-bold opacity-70">Cleaning</span>
                    <span className="text-sm font-black">{plan.c}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100/20 pb-3">
                    <span className="text-sm font-bold opacity-70">Parts Check</span>
                    <span className="text-sm font-black">{plan.p}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100/20 pb-3">
                    <span className="text-sm font-bold opacity-70">Emergency</span>
                    <span className="text-sm font-black">{plan.e}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100/20 pb-3">
                    <span className="text-sm font-bold opacity-70">Priority Service</span>
                    <span className="text-sm font-black">{plan.pr}</span>
                  </div>
                </div>
                <button onClick={() => handleBookNow(`${plan.t} AMC`)} className={cn("w-full py-5 rounded-xl font-black uppercase tracking-widest text-xs transition-all", plan.t === "Standard Plan" ? "bg-secondary text-white shadow-xl hover:bg-primary" : plan.t === "Premium Plan" ? "bg-white text-primary hover:bg-secondary hover:text-white" : "bg-primary/5 text-primary hover:bg-primary hover:text-white")}>
                  Choose Your Plan
                </button>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Custom AMC Request")} className="px-12 py-5 bg-white border border-gray-200 text-primary rounded-2xl font-black uppercase tracking-widest shadow-sm hover:border-secondary hover:text-secondary transition-all">
              Request AMC Details
            </button>
          </div>
        </div>
      </section>

      {/* 6. WE MAINTAIN ALL TYPES OF AC */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Systems We Maintain</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: "Split AC", img: "/Ac Services/AC Repair.webp", b: "Quiet & Efficient" },
              { t: "Central AC", img: "/Ac Services/AC Duct Cleaning.webp", b: "Whole House Comfort" },
              { t: "Inverter AC", img: "/Ac Services/AC Maintenance.webp", b: "Energy Saving" },
              { t: "Window AC", img: "/Ac Services/AC Cleaning.webp", b: "Compact Cooling" },
              { t: "Cassette AC", img: "/Ac Services/Plumbing.webp", b: "Commercial Grade" },
              { t: "Ducted AC", img: "/Ac Services/AC Gas Refill.webp", b: "Concealed Setup" },
              { t: "Commercial", img: "/Ac Services/Home Maintenance.webp", b: "Heavy Duty" },
              { t: "Residential", img: "/hero.webp", b: "Family Safe" }
            ].map((ac, i) => (
              <div key={i} className="group rounded-[32px] overflow-hidden border border-gray-100 shadow-sm relative h-64 flex flex-col justify-end">
                <Image src={ac.img} alt={ac.t} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80" />
                <div className="relative z-10 p-6 text-white">
                  <h3 className="font-heading font-black text-xl mb-1">{ac.t}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">{ac.b}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Book AC Type Maintenance")} className="px-12 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-primary transition-all">
              Book Specific Maintenance
            </button>
          </div>
        </div>
      </section>

      {/* 7. COMMON SIGNS YOUR AC NEEDS MAINTENANCE */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white">Signs You Need Maintenance</h2>
            <p className="text-lg text-white/60 mt-4">Don't ignore these warning signals. Call us before it breaks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { s: "Weak Cooling", d: "Airflow feels warm or very weak." },
              { s: "High Bills", d: "Sudden spike in electricity cost." },
              { s: "Water Leakage", d: "Dripping from the indoor unit." },
              { s: "Bad Smell", d: "Musty or vinegar-like odors." },
              { s: "Noisy Operation", d: "Grinding, squealing, or rattling." },
              { s: "Frequent Shutdowns", d: "AC turns off by itself randomly." },
              { s: "Frozen Coils", d: "Ice buildup on indoor filters." },
              { s: "Poor Airflow", d: "Barely feeling any breeze." }
            ].map((sign, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-[24px] hover:bg-secondary/20 transition-all cursor-crosshair">
                <AlertTriangle size={24} className="text-secondary mb-4" />
                <h3 className="font-black text-lg mb-2">{sign.s}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{sign.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Diagnostic Inspection")} className="px-12 py-5 bg-white text-primary rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-200 transition-all">
              Get Free Inspection
            </button>
          </div>
        </div>
      </section>

      {/* 8. OUR MAINTENANCE PROCESS (Horizontal Timeline) */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">The Maintenance Process</h2>
          </div>
          <div className="flex overflow-x-auto pb-12 snap-x hide-scrollbar px-4">
            <div className="flex gap-8 items-stretch relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />
              {[
                "Full AC Inspection", "Filter Cleaning", "Coil Cleaning", "Electrical Inspection",
                "Gas Pressure Check", "Drain Line Cleaning", "Performance Testing", "Final Report"
              ].map((step, i) => (
                <div key={i} className="snap-center shrink-0 w-[200px] bg-white border border-gray-100 rounded-3xl p-6 relative z-10 shadow-sm flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-black text-lg shadow-lg border-4 border-white ring-2 ring-primary/20">
                    {i+1}
                  </div>
                  <h3 className="font-bold text-sm text-primary">{step}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <button onClick={() => handleBookNow("Process Start")} className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all">
              Start The Process
            </button>
          </div>
        </div>
      </section>

      {/* 9. ENERGY SAVING SECTION */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-primary p-12 md:p-16 rounded-[48px] shadow-2xl text-center relative overflow-hidden">
            <ZapIcon size={200} className="absolute -bottom-20 -right-10 text-white/5 rotate-12 pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-8">How Maintenance Saves Electricity</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Cleaner Coils", "Efficient Compressor", "Better Airflow", "Lower Energy Consumption", "Reduced Compressor Load", "Thermostat Optimization"].map((save, i) => (
                <div key={i} className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-2xl text-white font-bold text-sm tracking-wide">
                  {save}
                </div>
              ))}
            </div>
            <button onClick={() => handleBookNow("Energy Savings Action")} className="mt-12 px-12 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-primary transition-all">
              Start Saving Electricity
            </button>
          </div>
        </div>
      </section>

      {/* 10 & 11. RESIDENTIAL & COMMERCIAL */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Residential */}
            <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm flex flex-col gap-8">
              <div className="relative h-64 w-full rounded-3xl overflow-hidden">
                <Image src="/Ac Services/AC Repair.webp" alt="Residential Maintenance" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-white text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><Home size={14}/> Residential</div>
              </div>
              <h3 className="text-3xl font-heading font-black text-primary">Home AC Maintenance</h3>
              <ul className="grid grid-cols-2 gap-4 flex-grow">
                {["Villa Maintenance", "Apartment Care", "Flat AC Tuning", "Home HVAC Check"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-600"><Check size={16} className="text-secondary"/> {item}</li>
                ))}
              </ul>
              <button onClick={() => handleBookNow("Home Maintenance")} className="w-full py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all">Book For Home</button>
            </div>
            
            {/* Commercial */}
            <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm flex flex-col gap-8">
              <div className="relative h-64 w-full rounded-3xl overflow-hidden">
                <Image src="/Ac Services/AC Duct Cleaning.webp" alt="Commercial Maintenance" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2"><Factory size={14}/> Commercial</div>
              </div>
              <h3 className="text-3xl font-heading font-black text-primary">Corporate AC Maintenance</h3>
              <ul className="grid grid-cols-2 gap-4 flex-grow">
                {["Offices", "Restaurants", "Hotels", "Hospitals", "Schools", "Shopping Malls", "Warehouses", "Data Centers"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-600"><Check size={16} className="text-primary"/> {item}</li>
                ))}
              </ul>
              <button onClick={() => handleBookNow("Commercial Maintenance")} className="w-full py-5 bg-secondary text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-primary transition-all">Book For Business</button>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SERVICE AREAS */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Coverage Across Saudi Arabia</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "Riyadh", "Jeddah", "Dammam", "Al Khobar", "Makkah", "Madinah", 
              "Taif", "Jubail", "Yanbu", "Abha", "Najran", "Tabuk", 
              "Jazan", "Al Ahsa", "Hail", "Buraidah"
            ].map((city, i) => (
              <div key={i} className="py-8 px-2 bg-[#F8FAFC] rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-3 hover:bg-secondary hover:text-white hover:border-secondary transition-colors group cursor-pointer">
                <MapPin size={24} className="text-primary group-hover:text-white" />
                <span className="text-[10px] font-black uppercase tracking-widest">{city}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Regional Book")} className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all">
              Book In Your City
            </button>
          </div>
        </div>
      </section>

      {/* 13. WHY CHOOSE US */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">The Trusted Choice</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: "Certified HVAC Techs", i: <ShieldCheck size={28}/> },
              { t: "Maintenance Experts", i: <Wrench size={28}/> },
              { t: "Affordable AMC", i: <ClipboardList size={28}/> },
              { t: "Diagnostic Tools", i: <Search size={28}/> },
              { t: "Fast Service", i: <Clock size={28}/> },
              { t: "Transparent Pricing", i: <CheckCircle2 size={28}/> },
              { t: "Emergency Support", i: <Phone size={28}/> },
              { t: "High Satisfaction", i: <Star size={28}/> }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 flex flex-col items-center text-center gap-4 shadow-sm">
                <div className="text-secondary bg-secondary/10 p-4 rounded-full">{feature.i}</div>
                <h3 className="font-black text-sm text-primary uppercase tracking-wide">{feature.t}</h3>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Trusted Experts")} className="px-12 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-primary transition-all">
              Hire The Experts
            </button>
          </div>
        </div>
      </section>

      {/* 14. CUSTOMER RESULTS (Before / After) */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white">The Results of Maintenance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 flex flex-col gap-6">
              <div className="inline-block bg-red-500/20 text-red-300 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-widest w-fit border border-red-500/30">Before Maintenance</div>
              <ul className="flex flex-col gap-4 text-lg font-medium text-white/70">
                <li className="flex items-center gap-3"><Minus size={20} className="text-red-400"/> Poor, Weak Cooling</li>
                <li className="flex items-center gap-3"><Minus size={20} className="text-red-400"/> High Electricity Bills</li>
                <li className="flex items-center gap-3"><Minus size={20} className="text-red-400"/> Dusty & Moldy Coils</li>
                <li className="flex items-center gap-3"><Minus size={20} className="text-red-400"/> Frequent Breakdowns</li>
              </ul>
            </div>
            <div className="bg-secondary/10 border border-secondary/30 rounded-[40px] p-10 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-20"><Sparkles size={150}/></div>
              <div className="inline-block bg-secondary text-white font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-widest w-fit shadow-lg">After Maintenance</div>
              <ul className="flex flex-col gap-4 text-lg font-bold text-white z-10 relative">
                <li className="flex items-center gap-3"><Plus size={24} className="text-secondary"/> Strong, Ice-Cold Cooling</li>
                <li className="flex items-center gap-3"><Plus size={24} className="text-secondary"/> Lower Power Bills</li>
                <li className="flex items-center gap-3"><Plus size={24} className="text-secondary"/> Clean & Healthy Airflow</li>
                <li className="flex items-center gap-3"><Plus size={24} className="text-secondary"/> Smooth, Silent Performance</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Get Results")} className="px-12 py-5 bg-white text-primary rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary hover:text-white transition-all">
              Transform Your AC
            </button>
          </div>
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden transition-all bg-[#F8FAFC]">
                <button 
                  onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-black text-primary text-lg">{faq.q}</span>
                  <span className="text-secondary text-2xl font-light">{activeFAQ === i ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {activeFAQ === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-slate-600 font-medium leading-relaxed"
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
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-8 text-center">Mastering AC Maintenance in Saudi Arabia</h2>
          <div className="text-slate-700 font-medium leading-relaxed space-y-6">
            <p>In a region where temperatures soar to extreme levels, a fully functioning cooling system is not just a luxury—it is essential for survival and comfort. Proper <strong>AC Maintenance Saudi Arabia</strong> services are critical to ensuring that your systems do not fail when you need them the most. A proactive approach to <strong>AC Maintenance KSA</strong> guarantees that small, easily fixable issues do not snowball into catastrophic, wallet-draining disasters. Our certified technical crews provide comprehensive <strong>Preventive AC Maintenance</strong> designed to extend the lifespan of your unit while maximizing its immediate cooling output.</p>
            
            <p>We handle all system architectures. Whether you require standard <strong>Split AC Maintenance</strong> for your bedroom or complex <strong>Central AC Maintenance</strong> for a sprawling villa, the underlying principles remain the same. Over time, desert dust clogs the internal mechanisms. The <strong>Evaporator Coil</strong> gets blanketed in dirt, preventing it from absorbing heat, while the <strong>Condenser Coil</strong> gets choked with sand, preventing it from releasing heat. By engaging in professional <strong>Air Conditioner Maintenance</strong>, these vital components are chemically washed, instantly restoring the unit's thermal exchange capabilities.</p>

            <h3 className="text-2xl font-heading font-black text-primary mt-12 mb-6">Securing Your Investment with an AMC</h3>
            <p>The smartest financial decision a property owner can make is investing in an <strong>Annual Maintenance Contract</strong>. These contracts offer scheduled visits throughout the year, ensuring that your system is prepped for summer and winterized properly. For massive corporate entities, <strong>Commercial AC Maintenance</strong> is critical to maintaining a productive work environment and preventing inventory damage in warehouses. For homeowners, <strong>Residential AC Maintenance</strong> ensures that families breathe pure, allergen-free air.</p>
            
            <p>Furthermore, maintaining an <strong>Energy Efficient AC</strong> requires precise calibration. A qualified <strong>HVAC Technician</strong> will test the <strong>Compressor</strong>'s amp draw, verify the <strong>Thermostat</strong> connections, inspect the <strong>Capacitor</strong>, and ensure the <strong>Refrigerant</strong> levels are perfectly balanced. Even a slightly undercharged AC can double its energy consumption. By choosing our dedicated <strong>HVAC Maintenance</strong> programs, you are choosing lower electricity bills, uninterrupted comfort, and absolute peace of mind.</p>
          </div>
          {/* Note: User specifically said "CTA add krna har section bad faqs bad nai", so NO CTA here since it's after FAQs. Wait, Long form is after FAQs. No CTA here. */}
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
