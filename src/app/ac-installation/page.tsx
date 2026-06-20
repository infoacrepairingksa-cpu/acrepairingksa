"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { motion } from "framer-motion";
import { 
  Phone, ShieldCheck, Zap, ArrowRight, Star, MapPin, Wrench, AlertTriangle, 
  Check, MessageSquare, ThumbsUp, Search, Activity, Gauge, Droplets, Leaf, 
  Wind, HeartPulse, BatteryCharging, Sparkles, ThermometerSun, ShieldAlert,
  ArrowRightCircle, CheckCircle2, Factory, Home, Droplet, ArrowDown,
  Settings, PenTool, Lightbulb, TrendingDown, Clock, Shield
} from "lucide-react";
import Schema, { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/components/Schema";

export default function ACInstallationPage() {
  const handleBookNow = (service?: any) => {
    const sName = service && typeof service === 'string' ? service : "AC Installation";
    const text = `Hello, I need ${sName} services. Can you help?`;
    window.open(`https://wa.me/966510942150?text=${encodeURIComponent(text)}`, '_blank');
  };

  const faqs = [
    { q: "How much does AC installation cost in Saudi Arabia?", a: "The cost varies depending on the type of unit (Split, Central, Window, Cassette) and the complexity of the piping and electrical work. We provide highly competitive, transparent quotes before any work begins." },
    { q: "How long does installation take?", a: "A standard Split AC installation takes about 2 to 3 hours. Central and Ducted AC systems for villas or commercial spaces require a multi-day timeline for ductwork and commissioning." },
    { q: "Which AC is best for homes?", a: "For most Saudi apartments and villas, Inverter Split ACs are highly recommended due to their whisper-quiet operation and immense electricity savings. Central AC is ideal for large, newly built villas." },
    { q: "How many BTUs do I need?", a: "It depends on room size, ceiling height, and sun exposure. Roughly, a 4x4 meter room needs 12,000 to 18,000 BTUs (1 to 1.5 Tons). We perform precise Cooling Load Calculations before recommending a size." },
    { q: "Should I choose an inverter AC?", a: "Absolutely. Inverter ACs adjust their compressor speed based on the room temperature, consuming up to 40% less electricity compared to traditional non-inverter models." },
    { q: "Can you install central AC in an existing home?", a: "Yes, but it requires significant modification for ductwork and dropped ceilings. If you want central cooling without massive renovations, VRF/VRV systems are an excellent alternative." },
    { q: "Do you provide a warranty?", a: "Yes! We offer a solid warranty on our installation workmanship (piping, drainage, wiring). This is in addition to the manufacturer's warranty on the AC compressor and parts." },
    { q: "What is SEER rating?", a: "SEER stands for Seasonal Energy Efficiency Ratio. A higher SEER rating means the air conditioner is more energy-efficient and will cost less to run during the long Saudi summers." },
    { q: "Do you install smart thermostats?", a: "Yes, we integrate modern smart thermostats (like Nest, Ecobee) that allow you to control your AC via smartphone, leading to enhanced comfort and optimized energy consumption." },
    { q: "Why is proper drainage important?", a: "Improper drainage slopes cause water to flow backward and leak inside your home. We use laser leveling to ensure a perfect gradient for seamless condensation removal." },
    { q: "What brands do you install?", a: "We install all major brands available in KSA, including Daikin, Carrier, LG, Samsung, York, Gree, Midea, and Mitsubishi." },
    { q: "Is copper pipe insulation necessary?", a: "Yes, high-grade insulation prevents condensation buildup and ensures the refrigerant stays cold as it travels from the outdoor compressor to the indoor unit, maximizing cooling." },
    { q: "Can you replace my old Window AC with a Split AC?", a: "Yes, we specialize in retrofitting. We safely remove the old window unit, seal the wall opening, and install a modern, energy-efficient Split AC." },
    { q: "Do you install ACs for commercial offices?", a: "Yes, we handle large-scale commercial installations including VRF systems, Cassette units, and Package units for offices, malls, hospitals, and restaurants across KSA." },
    { q: "Why should I hire a certified HVAC technician?", a: "Improper installation voids your manufacturer warranty, leaks refrigerant gas, and causes electrical fires. Certified technicians ensure safe, efficient, and warranty-compliant installations." }
  ];

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Schema 
        type="Service" 
        data={generateServiceSchema(
          "Professional AC Installation Services Across Saudi Arabia",
          "Expert Split, Central, and Commercial AC Installation across KSA with guaranteed energy efficiency.",
          "/ac-installation"
        )} 
      />
      <Schema type="FAQPage" data={generateFAQSchema(faqs)} />
      <Schema type="BreadcrumbList" data={generateBreadcrumbSchema([ { name: "Home", item: "/" }, { name: "AC Installation", item: "/ac-installation" } ])} />
      
      <Navbar onBookNow={handleBookNow} />

      {/* 1. HERO SECTION (Unique Floating Stats) */}
      <section className="relative pt-32 pb-20 bg-slate-50 border-b border-gray-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-lg text-sm font-black uppercase tracking-widest w-fit border border-secondary/20">
              <ShieldCheck size={18} /> Certified HVAC Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-primary leading-[1.1]">
              Professional <span className="text-secondary">AC Installation</span> Across Saudi Arabia
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              Get expert AC installation services for homes, villas, apartments, offices and commercial spaces. Flawless execution, peak energy efficiency, and total warranty protection.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="tel:+966510942150" className="px-8 py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all flex items-center gap-3 text-lg">
                <Phone size={24} /> Call Now
              </a>
              <button onClick={() => handleBookNow("WhatsApp Consult")} className="px-8 py-5 bg-[#25D366] text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-[#20b858] transition-all flex items-center gap-3 text-lg">
                <MessageSquare size={24} /> WhatsApp Now
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-6 relative h-[500px] lg:h-[650px] w-full rounded-[40px] shadow-2xl border-4 border-white">
            <Image src="/Ac Services/AC Installation.webp" alt="AC Installation KSA" fill className="object-cover rounded-[36px]" priority />
            {/* Floating Stats */}
            <div className="absolute -left-8 top-16 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4">
              <div className="bg-secondary/10 p-3 rounded-full text-secondary"><CheckCircle2 size={32}/></div>
              <div>
                <p className="text-2xl font-black text-primary">100%</p>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Flawless Setup</p>
              </div>
            </div>
            <div className="absolute -right-8 bottom-16 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary"><TrendingDown size={32}/></div>
              <div>
                <p className="text-2xl font-black text-primary">Max</p>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Energy Savings</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. AI OVERVIEW SECTION */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-secondary w-20 h-20 rounded-2xl rotate-45 flex items-center justify-center shadow-xl border-4 border-white text-white">
            <Search size={32} className="-rotate-45" />
          </div>
          <div className="bg-white/5 p-12 rounded-3xl border border-white/10 mt-8 shadow-inner">
            <h2 className="text-3xl font-heading font-black mb-6 text-white">What is AC Installation?</h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-300">
              AC installation is the highly technical process of mounting the indoor and outdoor units, routing insulated copper piping, ensuring perfectly sloped drainage, and establishing safe electrical connections. Proper installation is critical to maximize cooling performance, prevent dangerous refrigerant leaks, ensure energy efficiency, and protect the manufacturer's warranty.
            </p>
          </div>
          <div className="text-center mt-12">
            <button onClick={() => handleBookNow("Overview Inquiry")} className="px-10 py-5 bg-secondary text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-secondary transition-all inline-flex items-center gap-3">
              <Lightbulb size={24} /> Get Expert Advice
            </button>
          </div>
        </div>
      </section>

      {/* 3. WHICH AC IS RIGHT FOR YOU? */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-4">Which AC is Right For You?</h2>
            <p className="text-lg text-slate-600 font-medium">Compare different AC types to find the perfect cooling solution for your space.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Split AC", img: "/Ac Services/AC Installation.webp", for: "Bedrooms, Living Rooms", area: "Small to Medium", eff: "High (Inverter)", time: "2-3 Hours" },
              { t: "Central AC", img: "/Ac Services/AC Duct Cleaning.webp", for: "Large Villas, Offices", area: "Entire Building", eff: "Very High", time: "3-7 Days" },
              { t: "Window AC", img: "/Ac Services/AC Repair.webp", for: "Small Rooms, Rentals", area: "Small", eff: "Moderate", time: "1 Hour" },
              { t: "Cassette AC", img: "/Ac Services/AC Maintenance.webp", for: "Retail Shops, Cafes", area: "Medium to Large", eff: "High", time: "4-6 Hours" },
              { t: "Ducted AC", img: "/Ac Services/AC Cleaning.webp", for: "Aesthetic Homes", area: "Large", eff: "High", time: "2-4 Days" },
              { t: "Inverter AC", img: "/hero.webp", for: "High-Usage Areas", area: "Any Size", eff: "Maximum Energy Savings", time: "2-3 Hours" }
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 flex flex-col group hover:border-secondary transition-all">
                <div className="relative h-48 w-full">
                  <Image src={card.img} alt={card.t} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">{card.t}</div>
                </div>
                <div className="p-8 flex flex-col gap-4 flex-grow">
                  <p className="text-sm text-slate-600 flex justify-between"><strong className="text-primary">Best For:</strong> {card.for}</p>
                  <p className="text-sm text-slate-600 flex justify-between"><strong className="text-primary">Cooling Area:</strong> {card.area}</p>
                  <p className="text-sm text-slate-600 flex justify-between"><strong className="text-primary">Energy Efficiency:</strong> {card.eff}</p>
                  <p className="text-sm text-slate-600 flex justify-between"><strong className="text-primary">Install Time:</strong> {card.time}</p>
                  <button onClick={() => handleBookNow(`${card.t} Installation`)} className="w-full mt-auto py-4 bg-slate-50 text-secondary font-black uppercase tracking-widest text-sm rounded-xl border border-gray-200 group-hover:bg-secondary group-hover:text-white transition-colors">
                    Select {card.t}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Help Me Choose AC")} className="px-10 py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all inline-flex items-center gap-3">
              <Search size={24} /> Help Me Choose
            </button>
          </div>
        </div>
      </section>

      {/* 4. OUR INSTALLATION SERVICES */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Comprehensive Installation Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Split AC Installation", img: "/Ac Services/AC Installation.webp", o: "Wall-mounted cooling solutions.", b: "Fast, unobtrusive, quiet." },
              { t: "Central AC Installation", img: "/Ac Services/AC Duct Cleaning.webp", o: "Ducted whole-house cooling.", b: "Uniform temperature control." },
              { t: "Window AC Installation", img: "/Ac Services/AC Repair.webp", o: "Classic single-room unit.", b: "Cost-effective setup." },
              { t: "Cassette AC Installation", img: "/Ac Services/AC Cleaning.webp", o: "Ceiling-mounted 4-way flow.", b: "Saves wall space." },
              { t: "Ducted AC Installation", img: "/Ac Services/AC Maintenance.webp", o: "Concealed aesthetic cooling.", b: "Invisible, elegant comfort." },
              { t: "Inverter AC Installation", img: "/hero.webp", o: "Variable speed compressors.", b: "Slashes electricity bills." },
              { t: "Commercial Installation", img: "/Ac Services/Plumbing.webp", o: "Heavy-duty HVAC systems.", b: "Built for massive spaces." },
              { t: "Residential Installation", img: "/Ac Services/Home Maintenance.webp", o: "Villa and apartment focus.", b: "Safe for families." }
            ].map((service, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-gray-100 hover:shadow-xl transition-all flex flex-col group">
                <div className="relative h-32 w-full rounded-2xl overflow-hidden mb-6">
                  <Image src={service.img} alt={service.t} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-heading font-black text-primary mb-2">{service.t}</h3>
                <p className="text-sm text-slate-600 mb-2">{service.o}</p>
                <p className="text-xs text-secondary font-bold uppercase tracking-wider mb-6">{service.b}</p>
                <button onClick={() => handleBookNow(service.t)} className="mt-auto flex items-center text-primary font-black group-hover:text-secondary transition-colors uppercase text-sm tracking-wider">
                  Book Service <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("General Installation Request")} className="px-10 py-5 bg-secondary text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-primary transition-all inline-flex items-center gap-3">
              <Wrench size={24} /> Request Installation
            </button>
          </div>
        </div>
      </section>

      {/* 5. AC INSTALLATION PROCESS (Horizontal Timeline) */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white">Our 8-Step Installation Process</h2>
          </div>
          <div className="flex overflow-x-auto pb-8 snap-x hide-scrollbar">
            <div className="flex gap-6 px-4">
              {[
                { s: "Step 1", t: "Site Inspection" }, { s: "Step 2", t: "Cooling Load Calculation" },
                { s: "Step 3", t: "AC Selection" }, { s: "Step 4", t: "Indoor Unit Installation" },
                { s: "Step 5", t: "Outdoor Unit Setup" }, { s: "Step 6", t: "Copper Pipe Routing" },
                { s: "Step 7", t: "Electrical Connections" }, { s: "Step 8", t: "Testing & Commissioning" }
              ].map((step, i) => (
                <div key={i} className="snap-center shrink-0 w-[250px] bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 relative">
                  <div className="absolute -top-6 -right-6 text-9xl font-black text-white/5 pointer-events-none">{i+1}</div>
                  <span className="text-secondary font-black uppercase tracking-widest text-xs mb-4 block">{step.s}</span>
                  <h3 className="text-xl font-heading font-bold">{step.t}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <button onClick={() => handleBookNow("Process Inquiry")} className="px-10 py-5 bg-white text-primary rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-200 transition-all inline-flex items-center gap-3">
              <CheckCircle2 size={24} /> Start Process
            </button>
          </div>
        </div>
      </section>

      {/* 6. WHY PROFESSIONAL INSTALLATION MATTERS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Why Professional Installation Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Correct Cooling Capacity", i: <ThermometerSun size={32}/> },
              { t: "Lower Electricity Bills", i: <BatteryCharging size={32}/> },
              { t: "Longer AC Life", i: <Activity size={32}/> },
              { t: "Peak Cooling Performance", i: <Wind size={32}/> },
              { t: "Safe Electrical Connections", i: <Zap size={32}/> },
              { t: "Warranty Protection", i: <Shield size={32}/> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-secondary/20 shadow-md hover:-translate-y-2 transition-all">
                <div className="bg-primary/10 text-primary p-4 rounded-full">
                  {item.i}
                </div>
                <h3 className="text-lg font-black text-slate-900 leading-tight">{item.t}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Professional Service")} className="px-10 py-5 bg-secondary text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-primary transition-all inline-flex items-center gap-3">
              <ShieldCheck size={24} /> Hire Professionals
            </button>
          </div>
        </div>
      </section>

      {/* 7. ENERGY EFFICIENT AC INSTALLATION */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-12 md:p-16 rounded-[40px] border border-green-200 shadow-lg text-center relative overflow-hidden">
            <Leaf size={150} className="absolute -bottom-10 -right-10 text-green-500/10 rotate-45 pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-heading font-black text-green-900 mb-8">Energy Efficient AC Installation</h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-black uppercase tracking-widest text-green-800">
              <span className="bg-white/60 px-6 py-3 rounded-full shadow-sm">Inverter Technology</span>
              <span className="bg-white/60 px-6 py-3 rounded-full shadow-sm">Energy Saving</span>
              <span className="bg-white/60 px-6 py-3 rounded-full shadow-sm">SEER Rating</span>
              <span className="bg-white/60 px-6 py-3 rounded-full shadow-sm">Smart Thermostats</span>
              <span className="bg-white/60 px-6 py-3 rounded-full shadow-sm">Eco Friendly Cooling</span>
              <span className="bg-white/60 px-6 py-3 rounded-full shadow-sm">Electricity Savings</span>
            </div>
            <button onClick={() => handleBookNow("Energy Efficient Setup")} className="mt-12 px-10 py-5 bg-green-600 text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-green-700 transition-all inline-flex items-center gap-3">
              <BatteryCharging size={24} /> Save Electricity
            </button>
          </div>
        </div>
      </section>

      {/* 8 & 9. RESIDENTIAL & COMMERCIAL INSTALLATION */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Residential */}
            <div className="bg-white rounded-[40px] overflow-hidden border border-gray-200 shadow-xl flex flex-col">
              <div className="relative h-80 w-full">
                <Image src="/Ac Services/Home Maintenance.webp" alt="Residential AC Installation" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20" />
                <div className="absolute bottom-6 left-6 bg-white text-primary px-6 py-2 rounded-full font-black uppercase tracking-widest shadow-lg flex items-center gap-2"><Home size={18}/> Residential</div>
              </div>
              <div className="p-10 flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4 text-sm font-black text-slate-700 uppercase tracking-wider mb-8">
                  <div className="flex items-center gap-2"><Check className="text-secondary"/> Villa</div>
                  <div className="flex items-center gap-2"><Check className="text-secondary"/> Apartment</div>
                  <div className="flex items-center gap-2"><Check className="text-secondary"/> Flat</div>
                  <div className="flex items-center gap-2"><Check className="text-secondary"/> Home</div>
                </div>
                <button onClick={() => handleBookNow("Residential Installation")} className="w-full py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest shadow-lg hover:bg-slate-800 transition-all">
                  Book Home Install
                </button>
              </div>
            </div>
            {/* Commercial */}
            <div className="bg-white rounded-[40px] overflow-hidden border border-gray-200 shadow-xl flex flex-col">
              <div className="relative h-80 w-full">
                <Image src="/Ac Services/Plumbing.webp" alt="Commercial AC Installation" fill className="object-cover" />
                <div className="absolute inset-0 bg-secondary/20" />
                <div className="absolute bottom-6 left-6 bg-white text-secondary px-6 py-2 rounded-full font-black uppercase tracking-widest shadow-lg flex items-center gap-2"><Factory size={18}/> Commercial</div>
              </div>
              <div className="p-10 flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-black text-slate-700 uppercase tracking-wider mb-8">
                  <div className="flex items-center gap-2"><Check className="text-primary"/> Office</div>
                  <div className="flex items-center gap-2"><Check className="text-primary"/> Restaurant</div>
                  <div className="flex items-center gap-2"><Check className="text-primary"/> Hospital</div>
                  <div className="flex items-center gap-2"><Check className="text-primary"/> School</div>
                  <div className="flex items-center gap-2"><Check className="text-primary"/> Hotel</div>
                  <div className="flex items-center gap-2"><Check className="text-primary"/> Warehouse</div>
                  <div className="flex items-center gap-2"><Check className="text-primary"/> Mall</div>
                </div>
                <button onClick={() => handleBookNow("Commercial Installation")} className="w-full py-5 bg-secondary text-white rounded-xl font-black uppercase tracking-widest shadow-lg hover:bg-[#d97706] transition-all">
                  Book Commercial Install
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SERVICE AREAS */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Service Areas Across KSA</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "Riyadh", "Jeddah", "Dammam", "Al Khobar", "Makkah", "Madinah", 
              "Taif", "Jubail", "Yanbu", "Abha", "Najran", "Tabuk", 
              "Jazan", "Al Ahsa", "Hail", "Buraidah"
            ].map((city, i) => (
              <div key={i} className="px-4 py-6 bg-slate-50 border border-gray-100 rounded-2xl text-center hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-pointer group">
                <MapPin className="mx-auto mb-2 text-secondary group-hover:text-white transition-colors" size={24} />
                <span className="text-xs font-black uppercase tracking-widest">{city}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Regional Installation")} className="px-10 py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all inline-flex items-center gap-3">
              <MapPin size={24} /> Locate Your City
            </button>
          </div>
        </div>
      </section>

      {/* 11. COMMON INSTALLATION MISTAKES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Avoid These Common Mistakes</h2>
            <p className="text-lg text-slate-600 mt-4">Why DIY or cheap installations end up costing you thousands in repairs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Wrong AC Size", d: "Installing an AC too small wastes energy; too big causes high humidity." },
              { t: "Improper Drainage", d: "Incorrect slope leading to massive indoor water leakage and mold." },
              { t: "Poor Pipe Insulation", d: "Causes condensation drips and loss of refrigerant cooling power." },
              { t: "Bad Unit Placement", d: "Blocking airflow or placing outdoor units in direct scorching sun." },
              { t: "Incorrect Wiring", d: "Using under-rated cables leading to circuit trips or electrical fires." },
              { t: "Poor Airflow Planning", d: "Putting units in corners where cool air cannot circulate the room." },
              { t: "Weak Mounting", d: "Failing to secure the heavy outdoor compressor properly, causing dangerous falls." }
            ].map((mistake, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
                <AlertTriangle size={24} className="text-red-500 mb-4" />
                <h3 className="font-black text-slate-900 mb-2">{mistake.t}</h3>
                <p className="text-sm text-slate-600">{mistake.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Error Free Setup")} className="px-10 py-5 bg-red-600 text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-red-700 transition-all inline-flex items-center gap-3">
              <ShieldAlert size={24} /> Get Error-Free Setup
            </button>
          </div>
        </div>
      </section>

      {/* 12. WHY CHOOSE US */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white">Why We Are The Best Choice</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { t: "Certified HVAC Technicians", i: <ShieldCheck size={20}/> },
              { t: "Latest Equipment", i: <PenTool size={20}/> },
              { t: "Fast Installation", i: <Zap size={20}/> },
              { t: "Affordable Pricing", i: <Droplet size={20}/> },
              { t: "Warranty", i: <Shield size={20}/> },
              { t: "24/7 Support", i: <Phone size={20}/> },
              { t: "Transparent Pricing", i: <Search size={20}/> }
            ].map((reason, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/20 px-8 py-4 rounded-full flex items-center gap-3 font-black tracking-widest uppercase text-sm">
                <span className="text-secondary">{reason.i}</span> {reason.t}
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Hire The Best")} className="px-10 py-5 bg-secondary text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-secondary transition-all inline-flex items-center gap-3">
              <ThumbsUp size={24} /> Choose Quality
            </button>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-slate-50 border border-gray-200 rounded-2xl">
                <h3 className="font-black text-lg text-primary mb-2">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("FAQ Contact")} className="px-10 py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-800 transition-all inline-flex items-center gap-3">
              <MessageSquare size={24} /> Still Have Questions?
            </button>
          </div>
        </div>
      </section>

      {/* 14. LONG FORM CONTENT */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-8 text-center">Comprehensive AC Installation Services Across Saudi Arabia</h2>
          <div className="text-slate-700 font-medium leading-relaxed space-y-6">
            <p>In the extreme climate of the Middle East, having a reliable cooling system is essential. Finding a trustworthy partner for <strong>AC Installation Saudi Arabia</strong> can save you thousands of riyals in the long run. Whether you need a simple wall-mounted unit for a bedroom or a complex climate control system for an entire building, professional <strong>AC Installation KSA</strong> guarantees that your investment operates at absolute peak efficiency. We proudly provide state-of-the-art <strong>Air Conditioner Installation</strong> services for homes, villas, and massive corporate headquarters alike.</p>
            
            <p>Choosing between different types of systems can be overwhelming. A standard <strong>Split AC Installation</strong> is the most popular choice for modern apartments and villas, offering localized temperature control and whisper-quiet operation. For larger, open-plan spaces or newly constructed villas, a <strong>Central AC Installation</strong> provides seamless, invisible cooling through concealed ductwork. Regardless of your choice, integrating an <strong>Inverter AC Installation</strong> is crucial for combating high electricity bills. Inverter technology dynamically adjusts compressor speeds, resulting in profound energy savings and consistent room temperatures.</p>

            <h3 className="text-2xl font-heading font-black text-primary mt-12 mb-6">Expertise in Commercial and Residential Setup</h3>
            <p>Our scope of work spans across two major sectors. Our <strong>Commercial AC Installation</strong> division is equipped to handle heavy-duty VRF, VRV, and Cassette systems required by restaurants, hospitals, malls, and large offices. These installations require meticulous planning, precise cooling load calculations, and robust electrical panel upgrades. On the flip side, our <strong>Residential AC Installation</strong> team focuses on aesthetics, minimal disruption, and family-safe execution, ensuring that your home remains a pristine sanctuary during and after the setup process.</p>

            <h3 className="text-2xl font-heading font-black text-primary mt-12 mb-6">The True Value of a Certified HVAC Technician</h3>
            <p>A high-quality air conditioner is only as good as the person installing it. A poorly executed <strong>Cooling System Installation</strong> can lead to disastrous consequences: improper drainage slopes cause indoor flooding, poor copper pipe flaring leaks expensive refrigerant gas, and underrated electrical wiring risks severe fire hazards. This is why hiring a certified <strong>HVAC Technician</strong> is non-negotiable. Our experts ensure absolute compliance with manufacturer specifications, validating your warranty and setting the foundation for years of flawless, <strong>Energy Efficient AC</strong> performance.</p>
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Final Booking Action")} className="px-12 py-6 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:bg-primary transition-all inline-flex items-center gap-3 text-lg">
              <CheckCircle2 size={28} /> Book Your Installation
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
