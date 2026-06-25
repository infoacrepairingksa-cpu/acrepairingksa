"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, ShieldCheck, ArrowRight, Star, MapPin, Wrench, AlertTriangle, 
  Check, ThumbsUp, Search, Activity, Leaf, 
  Wind, HeartPulse, Sparkles, ShieldAlert,
  CheckCircle2, Factory, Home, Droplets, 
  Settings, TrendingDown, Clock, Plus, Minus,
  CheckSquare, Fan, Stethoscope, Microscope, Bug
} from "lucide-react";
import { cn } from "@/lib/utils";
import Schema, { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/components/Schema";

export default function ACDuctCleaningPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const handleBookNow = (service?: any) => {
    const sName = service && typeof service === 'string' ? service : "AC Duct Cleaning";
    const text = `Hello, I need ${sName} services. Can you help?`;
    window.open(`https://wa.me/966510942150?text=${encodeURIComponent(text)}`, '_blank');
  };

  const faqs = [
    { q: "How often should air ducts be cleaned?", a: "In Saudi Arabia's dusty environment, residential air ducts should be professionally cleaned every 1 to 2 years. Commercial buildings may require bi-annual cleaning." },
    { q: "Does duct cleaning improve air quality?", a: "Yes, significantly. Removing accumulated dust, mold spores, and pet dander from the ductwork stops the HVAC system from recirculating these contaminants into your breathing air." },
    { q: "Can duct cleaning reduce allergies?", a: "Absolutely. Dirty ducts are breeding grounds for allergens and bacteria. Cleaning them eliminates these triggers, providing immense relief to asthma and allergy sufferers." },
    { q: "How long does duct cleaning take?", a: "For a standard villa or large apartment, duct cleaning takes about 3 to 5 hours. Large commercial HVAC duct systems may require multiple days of scheduled work." },
    { q: "Is duct cleaning messy?", a: "Not at all. We use powerful Negative Air Machines with HEPA filtration that trap all dust directly into our sealed vacuums, leaving your home completely clean." },
    { q: "Do you sanitize ducts after cleaning?", a: "Yes, after removing physical debris, we fog the entire duct network with an EPA-approved antimicrobial sanitizing agent to kill mold and odor-causing bacteria." },
    { q: "Can dirty ducts increase electricity bills?", a: "Yes. Thick dust inside the ducts restricts airflow, forcing the AC blower motor to work harder and longer to push air into the rooms, resulting in higher energy consumption." },
    { q: "Do commercial buildings need duct cleaning?", a: "Yes, commercial duct cleaning is critical for employee health, reducing sick days, and complying with indoor air quality (IAQ) and safety regulations." },
    { q: "How do you clean inside the ducts?", a: "We insert rotary brush systems deep into the ductwork to scrub the walls, while simultaneously pulling the dislodged dirt out using high-powered negative pressure vacuums." },
    { q: "Will duct cleaning remove bad smells?", a: "Yes. Musty, stale, or moldy odors are often caused by bacteria growing inside dark, damp ducts. Our deep cleaning and sanitization process completely eliminates these odors." },
    { q: "Do you clean the AC vents and grills too?", a: "Yes, we remove all supply and return grills, wash them thoroughly, dry them, and reinstall them perfectly after the internal duct cleaning is complete." },
    { q: "Can I clean my air ducts myself?", a: "No. Standard home vacuums cannot reach deep into the ductwork or generate the negative pressure required. DIY attempts often push dust further in or damage the flexible ducts." },
    { q: "Do you inspect the ducts before cleaning?", a: "Yes, we use robotic inspection cameras to visually assess the contamination level and locate any blockages before we begin the extraction process." },
    { q: "What is a Negative Air Machine?", a: "It is an industrial-grade vacuum system that places your entire duct network under negative pressure, ensuring zero dust escapes into your living space during the cleaning process." },
    { q: "Does duct cleaning improve cooling?", a: "Yes, by removing airflow restrictions inside the ducts and cleaning the blower motor, the volume of cold air reaching your rooms increases dramatically." }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] font-sans overflow-x-hidden">
      <Schema 
        type="Service" 
        data={generateServiceSchema(
          "Professional AC Duct Cleaning Services in KSA",
          "Improve indoor air quality with expert AC duct cleaning, sanitization, and dust removal services across Saudi Arabia.",
          "/ac-duct-cleaning"
        )} 
      />
      <Schema type="FAQPage" data={generateFAQSchema(faqs)} />
      <Schema type="BreadcrumbList" data={generateBreadcrumbSchema([ { name: "Home", item: "/" }, { name: "AC Duct Cleaning", item: "/ac-duct-cleaning" } ])} />
      
      <Navbar onBookNow={handleBookNow} />

      {/* 1. HERO SECTION (Split Screen Layout) */}
      <section className="relative pt-32 pb-24 border-b border-gray-100 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 rounded-bl-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left: Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-8 pr-0 lg:pr-12">
            <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-5 py-2 rounded-lg text-xs font-black uppercase tracking-[0.15em] w-fit border border-blue-100">
              <Leaf size={16} /> Indoor Air Quality Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary leading-[1.1] tracking-tight">
              Professional AC Duct Cleaning Services Across Saudi Arabia
            </h1>
            <p className="text-lg text-primary/70 font-medium leading-relaxed border-l-2 border-secondary pl-6">
              Remove dust, allergens, mold particles and hidden contaminants from your AC duct system. We use advanced HEPA negative air vacuums to dramatically improve your indoor air quality and HVAC performance.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button onClick={() => handleBookNow("Book Duct Cleaning")} className="px-8 py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all flex items-center gap-3 text-sm">
                <Wind size={20} /> Clean My Ducts
              </button>
              <button onClick={() => handleBookNow("WhatsApp Air Quality Expert")} className="px-8 py-5 bg-white border-2 border-gray-100 text-primary rounded-xl font-black uppercase tracking-widest hover:border-primary transition-all flex items-center gap-3 text-sm shadow-sm">
                <Search size={20} /> Free Inspection
              </button>
            </div>
          </motion.div>

          {/* Right: Image & Floating Cards */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl">
            <Image src="/Ac Services/AC Duct Cleaning.webp" alt="AC Duct Cleaning Saudi Arabia" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            
            {/* Floating Cards */}
            <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center"><Leaf size={20}/></div>
              <div><p className="text-sm font-black text-primary">Cleaner Air</p></div>
            </div>
            <div className="absolute bottom-20 left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><Fan size={20}/></div>
              <div><p className="text-sm font-black text-primary">Better Airflow</p></div>
            </div>
            <div className="absolute bottom-40 right-5 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary/20 text-secondary rounded-full flex items-center justify-center"><ShieldCheck size={20}/></div>
              <div><p className="text-sm font-black text-primary">Reduced Dust</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. AI OVERVIEW SECTION */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-black text-white mb-8 border-b border-white/20 inline-block pb-4">What Is AC Duct Cleaning?</h2>
          <p className="text-xl font-medium leading-relaxed text-white/90 bg-white/5 p-8 rounded-3xl border border-white/10 shadow-inner">
            AC duct cleaning is the comprehensive process of removing dust, debris, allergens, and mold from the hidden ventilation pipes (supply and return ducts) of an HVAC system. Using specialized rotary brushes and high-powered negative air machines with HEPA filtration, professionals extract contaminants and sanitize the ductwork, resulting in pure indoor air quality and restored system efficiency.
          </p>
        </div>
      </section>

      {/* 3. WHAT MAY BE HIDING INSIDE YOUR DUCTS? (Contamination Cards) */}
      <section className="py-24 bg-[#F4F7F9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-secondary font-black text-xs uppercase tracking-widest">Invisible Threats</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mt-4">What's Hiding In Your Ducts?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { t: "Thick Dust", d: "Accumulates daily from the desert environment.", i: <Sparkles size={32}/> },
              { t: "Mold Spores", d: "Grows in damp, dark AC duct environments.", i: <Microscope size={32}/> },
              { t: "Pet Dander", d: "Microscopic skin flakes from dogs and cats.", i: <Droplets size={32}/> },
              { t: "Pollen", d: "Brought in from outside, triggering allergies.", i: <Leaf size={32}/> },
              { t: "Bacteria", d: "Circulates sickness throughout the building.", i: <Bug size={32}/> },
              { t: "Debris", d: "Leftover sawdust and drywall from construction.", i: <Wrench size={32}/> },
              { t: "Bad Odors", d: "Stale, musty smells trapped in the system.", i: <Wind size={32}/> },
              { t: "Insects", d: "Dead bugs and droppings hidden in vents.", i: <AlertTriangle size={32}/> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-lg transition-all group">
                <div className="text-gray-400 group-hover:text-red-500 transition-colors">{item.i || <AlertTriangle size={32}/>}</div>
                <h3 className="font-black text-primary text-sm uppercase tracking-wide">{item.t}</h3>
                <p className="text-xs text-gray-500 font-medium">{item.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Remove Duct Contaminants")} className="px-12 py-5 bg-red-500 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-red-600 transition-all">
              Remove Contaminants Now
            </button>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS OF DUCT CLEANING (Large Cards) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Benefits of Pure Air</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Cleaner Indoor Air", d: "Breathe easier with significantly less dust circulating in your rooms.", i: <Leaf /> },
              { t: "Reduced Allergens", d: "Immediate relief from sneezing, coughing, and sinus congestion.", i: <HeartPulse /> },
              { t: "Improved Efficiency", d: "Clear ducts allow air to flow without resistance, saving compressor wear.", i: <Activity /> },
              { t: "Lower Energy Costs", d: "An efficient blower motor uses less electricity, lowering monthly bills.", i: <TrendingDown /> },
              { t: "Better Airflow", d: "Feel a stronger, colder breeze coming from every single vent.", i: <Fan /> },
              { t: "Odor Removal", d: "Eliminate stale, musty smells completely from your home.", i: <Wind /> },
              { t: "Longer HVAC Life", d: "Less dust means less mechanical breakdown for your AC unit.", i: <ShieldCheck /> },
              { t: "Healthier Environment", d: "Protect your family and employees from airborne illnesses.", i: <ShieldAlert /> }
            ].map((ben, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-[#FDFDFD] border border-gray-100 shadow-sm hover:border-secondary hover:bg-[#F8FAFC] transition-all flex flex-col gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  {ben.i}
                </div>
                <h3 className="font-black text-xl text-primary leading-tight">{ben.t}</h3>
                <p className="text-sm font-medium text-gray-500 leading-relaxed flex-grow">{ben.d}</p>
                <button onClick={() => handleBookNow(`Benefit: ${ben.t}`)} className="text-xs font-black uppercase tracking-widest text-secondary flex items-center gap-2 w-fit hover:gap-4 transition-all">
                  Get This Benefit <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR DUCT CLEANING PROCESS (Circular Flow Layout) */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white">Our 8-Step Extraction Process</h2>
            <p className="text-lg text-white/60 mt-4">Medical-grade cleaning protocols for maximum hygiene.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Duct Inspection", "Camera Assessment", "Dust Extraction", "Negative Air Vacuum",
              "Vent Cleaning", "Rotary Brushing", "EPA Sanitization", "Airflow Testing"
            ].map((step, i) => (
              <div key={i} className="relative bg-white/5 border border-white/10 w-40 h-40 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center text-center p-4 hover:bg-secondary hover:scale-105 transition-all cursor-crosshair">
                <span className="absolute top-4 font-black text-white/20 text-4xl">{i+1}</span>
                <span className="font-black text-sm uppercase tracking-widest z-10">{step}</span>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center">
            <button onClick={() => handleBookNow("Process Deep Clean")} className="px-12 py-5 bg-white text-primary rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-gray-200 transition-all">
              Schedule Deep Cleaning
            </button>
          </div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER DUCT CLEANING (Side-by-side cards) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Visible Transformation</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-gray-50 border border-gray-200 p-10 rounded-[40px] shadow-inner relative">
              <div className="absolute -top-4 left-10 bg-gray-800 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">Before Cleaning</div>
              <ul className="mt-8 flex flex-col gap-6">
                {[
                  "Thick dust coating duct walls", "Airflow restricted by debris", 
                  "Musty smell when AC turns on", "Dirty, black marks around vents", 
                  "High airborne allergen count"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700 font-bold"><Minus size={20} className="text-gray-400"/> {item}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-blue-50 border border-blue-200 p-10 rounded-[40px] shadow-xl relative">
              <div className="absolute -top-4 right-10 bg-secondary text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">After Deep Cleaning</div>
              <ul className="mt-8 flex flex-col gap-6">
                {[
                  "Spotless, sanitized duct walls", "Maximum unimpeded airflow", 
                  "Fresh, odor-free environment", "Sparkling clean supply vents", 
                  "Pure, healthy breathing air"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-primary font-black"><Plus size={24} className="text-secondary"/> {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Transform My Air")} className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all">
              Transform Your Indoor Air
            </button>
          </div>
        </div>
      </section>

      {/* 7. SIGNS YOUR DUCTS NEED CLEANING (Interactive Cards) */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Signs You Need Duct Cleaning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Excess Dust", d: "Furniture gets dusty immediately after cleaning." },
              { t: "Musty Odor", d: "A stale smell hits you when the AC turns on." },
              { t: "Visible Dirt", d: "Black lines or webs forming around AC vents." },
              { t: "Allergy Symptoms", d: "Constant sneezing or coughing while indoors." },
              { t: "Poor Airflow", d: "Some rooms receive very little cold air." },
              { t: "Recent Renovation", d: "Drywall dust gets sucked into the return ducts." },
              { t: "Pet Hair", d: "Heavy pet shedding clogs the system." },
              { t: "High Bills", d: "Blocked airflow reduces system efficiency." }
            ].map((sign, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 rounded-3xl hover:bg-primary hover:text-white transition-colors group cursor-pointer shadow-sm">
                <AlertTriangle size={24} className="text-secondary mb-4 group-hover:text-white" />
                <h3 className="font-black text-lg mb-2">{sign.t}</h3>
                <p className="text-sm text-gray-500 group-hover:text-white/80 font-medium">{sign.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DUCTS WE CLEAN (Grid Cards) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Systems We Service</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Central AC Ducts", img: "/Ac Services/AC Repair.webp" },
              { t: "Commercial HVAC", img: "/Ac Services/AC Duct Cleaning.webp" },
              { t: "Residential Ducts", img: "/Ac Services/AC Maintenance.webp" },
              { t: "Office Ventilation", img: "/Ac Services/AC Cleaning.webp" },
              { t: "Hotel Ducts", img: "/Ac Services/Plumbing.webp" },
              { t: "Restaurant Hoods", img: "/Ac Services/AC Gas Refill.webp" },
              { t: "Hospital IAQ", img: "/Ac Services/Home Maintenance.webp" },
              { t: "Warehouse Air", img: "/hero.webp" }
            ].map((sys, i) => (
              <div key={i} className="relative h-64 rounded-3xl overflow-hidden group">
                <Image src={sys.img} alt={sys.t} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/70 transition-colors" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-black text-xl text-white mb-2">{sys.t}</h3>
                  <button onClick={() => handleBookNow(`Clean ${sys.t}`)} className="text-[10px] uppercase font-black tracking-widest text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    Book Service →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. HEALTH & AIR QUALITY SECTION (Infographic Block) */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <Stethoscope size={64} className="text-secondary mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-8">Why Clean Ducts Matter For Your Health</h2>
          <p className="text-xl text-white/70 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
            The EPA states that indoor air can be 2 to 5 times more polluted than outdoor air. Your AC ducts act as the respiratory system of your home. If they are dirty, your family breathes in contaminants 24/7.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Reduced Allergens", "Cleaner Breathing Air", "Lower Dust Exposure", "Improved Comfort", "Better Air Circulation", "Family Health Benefits"].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-2xl font-bold uppercase tracking-wide text-sm">
                {item}
              </div>
            ))}
          </div>
          <button onClick={() => handleBookNow("Prioritize Health")} className="mt-16 px-12 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-primary transition-all">
            Protect Your Family's Health
          </button>
        </div>
      </section>

      {/* 10. ADVANCED EQUIPMENT WE USE */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Our Advanced Technology</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "HEPA Vacuum Systems", d: "Traps 99.97% of micro-dust particles, ensuring nothing escapes back into your home." },
              { t: "Negative Air Machines", d: "Creates a massive vacuum seal throughout the ductwork to pull out heavy debris." },
              { t: "Rotary Brush Systems", d: "Spinning brushes agitate and scrub the physical walls of the ductwork safely." },
              { t: "Inspection Cameras", d: "Robotic cameras allow us to see deep inside the ducts before and after cleaning." },
              { t: "Compressed Air Tools", d: "High-pressure air whips blast dirt out of tight corners and rigid duct joints." },
              { t: "Sanitization Foggers", d: "Distributes EPA-approved antimicrobial mist to kill bacteria and mold." }
            ].map((eq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-4">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><Wrench size={24}/></div>
                <h3 className="font-black text-xl text-primary">{eq.t}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{eq.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 & 12. RESIDENTIAL & COMMERCIAL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-[#FDFDFD] p-10 rounded-[40px] border-2 border-gray-100 flex flex-col gap-8 shadow-sm">
              <div className="relative h-72 w-full rounded-3xl overflow-hidden">
                <Image src="/hero.webp" alt="Residential Duct Cleaning" fill className="object-cover" />
              </div>
              <h3 className="text-3xl font-heading font-black text-primary">Residential IAQ</h3>
              <ul className="grid grid-cols-2 gap-4 flex-grow">
                {["Homes", "Apartments", "Flats", "Villas", "Townhouses", "Penthouses"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-600"><Check size={16} className="text-secondary"/> {item}</li>
                ))}
              </ul>
              <button onClick={() => handleBookNow("Home Duct Cleaning")} className="w-full py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all">Clean Home Ducts</button>
            </div>
            
            <div className="bg-[#FDFDFD] p-10 rounded-[40px] border-2 border-gray-100 flex flex-col gap-8 shadow-sm">
              <div className="relative h-72 w-full rounded-3xl overflow-hidden">
                <Image src="/Ac Services/AC Duct Cleaning.webp" alt="Commercial Duct Cleaning" fill className="object-cover" />
              </div>
              <h3 className="text-3xl font-heading font-black text-primary">Commercial Ventilation</h3>
              <ul className="grid grid-cols-2 gap-4 flex-grow">
                {["Offices", "Hotels", "Restaurants", "Hospitals", "Schools", "Malls"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-600"><Check size={16} className="text-primary"/> {item}</li>
                ))}
              </ul>
              <button onClick={() => handleBookNow("Commercial Duct Cleaning")} className="w-full py-5 bg-secondary text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-primary transition-all">Clean Business Ducts</button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. SERVICE AREAS */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">KSA Wide Service</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "Riyadh", "Jeddah", "Dammam", "Al Khobar", "Makkah", "Madinah", 
              "Taif", "Jubail", "Yanbu", "Abha", "Najran", "Tabuk", 
              "Jazan", "Al Ahsa", "Hail", "Buraidah"
            ].map((city, i) => (
              <div key={i} className="py-6 bg-white rounded-xl border border-gray-100 flex flex-col items-center text-center gap-2 hover:border-secondary transition-colors cursor-pointer shadow-sm">
                <span className="text-[11px] font-black uppercase tracking-widest text-primary">{city}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Location Based Duct Cleaning")} className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all">
              Book In Your City
            </button>
          </div>
        </div>
      </section>

      {/* 14. WHY CHOOSE US */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">The IAQ Specialists</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: "IAQ Specialists", i: <Leaf size={28}/> },
              { t: "Advanced Tech", i: <Settings size={28}/> },
              { t: "Certified Techs", i: <ShieldCheck size={28}/> },
              { t: "No Hidden Fees", i: <Search size={28}/> },
              { t: "Fast Service", i: <Clock size={28}/> },
              { t: "Home & Business", i: <Factory size={28}/> },
              { t: "Guaranteed Work", i: <ThumbsUp size={28}/> },
              { t: "24/7 Support", i: <Phone size={28}/> }
            ].map((feature, i) => (
              <div key={i} className="bg-[#F8FAFC] p-6 rounded-3xl border border-gray-100 flex flex-col items-center text-center gap-4">
                <div className="text-secondary">{feature.i}</div>
                <h3 className="font-black text-xs text-primary uppercase tracking-wide">{feature.t}</h3>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button onClick={() => handleBookNow("Hire IAQ Experts")} className="px-12 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-primary transition-all">
              Breathe Clean Air Today
            </button>
          </div>
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <section className="py-24 bg-[#F8FAFC]">
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
          <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-8 text-center">Comprehensive Air Duct Cleaning in Saudi Arabia</h2>
          <div className="text-slate-700 font-medium leading-relaxed space-y-6">
            <p>Indoor Air Quality (IAQ) is becoming a paramount concern for residents and business owners alike. When seeking <strong>AC Duct Cleaning Saudi Arabia</strong>, clients are primarily looking for health-driven solutions to combat the Kingdom's naturally dusty environment. Over months of operation, an HVAC system inevitably pulls in fine particulate matter, pollen, and microscopic debris. Without routine <strong>HVAC Duct Cleaning</strong>, these particles settle deep within the hidden aluminum and fiberglass channels, creating a thick layer of contamination that your family or employees breathe daily.</p>
            
            <p>Our <strong>Air Duct Cleaning Services</strong> utilize state-of-the-art Negative Air Machines paired with industrial HEPA filtration. This guarantees that as we agitate the duct walls with rotary brushes, absolutely zero dust escapes into your living space. We specialize in both large-scale <strong>Commercial Duct Cleaning</strong> for hospitals, malls, and offices, as well as meticulous <strong>Residential Duct Cleaning</strong> for luxury villas and apartments. We do not just clean; we extract, sanitize, and verify.</p>

            <h3 className="text-2xl font-heading font-black text-primary mt-12 mb-6">Restoring Airflow and Energy Efficiency</h3>
            <p>A secondary, yet equally critical benefit of <strong>Central AC Duct Cleaning</strong> is the dramatic <strong>HVAC Airflow Improvement</strong>. When duct walls are coated in a centimeter of dust, the friction increases, forcing the blower motor to work significantly harder to push air through the <strong>Vent Cleaning</strong> system. By stripping the ducts back to their original factory state, we reduce the static pressure, meaning your rooms cool faster and your electricity bills drop.</p>
            
            <p>Ultimately, comprehensive <strong>HVAC Maintenance</strong> must include duct hygiene. From standard <strong>Air Vent Cleaning</strong> to deep antimicrobial fogging, our protocols ensure that your cooling system operates efficiently, smells fresh, and most importantly, circulates pure, healthy air throughout your property in KSA.</p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
