"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, ShieldCheck, Clock, Zap, CheckCircle2, ArrowRight, Star, ChevronDown, MapPin, 
  ShieldAlert, Wrench, Smartphone, Airplay, Wind, Heart, Activity, Search, Check, 
  MessageSquare, ThumbsUp, AlertTriangle, Snowflake, Thermometer, Droplets, Trash2, 
  Filter, Settings, Gauge, LayoutGrid, Users, Briefcase, Building2, Home, Fan,
  BadgeCheck, Sparkles, Hammer, CalendarCheck2, Maximize
} from "lucide-react";
import { cn } from "@/lib/utils";
import Schema, { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/components/Schema";
import { locations } from "@/data/locations";

export default function ACRepairPage() {
  const handleBookNow = (service?: any) => {
    const sName = service && typeof service === 'string' ? service : "AC Repair";
    const text = `Hello, I need ${sName} services. Can you help?`;
    window.open(`https://wa.me/966510942150?text=${encodeURIComponent(text)}`, '_blank');
  };

  const faqs = [
    { q: "How much does AC repair cost in Saudi Arabia?", a: "The cost of AC repair in Saudi Arabia depends on the exact issue, the type of unit, and required replacement parts like compressors or refrigerant gas. We offer transparent, upfront estimates before any work begins." },
    { q: "Why is my AC not cooling?", a: "An AC not cooling is typically caused by low refrigerant levels due to a gas leak, a failed compressor, dirty condenser coils, or a broken thermostat. Immediate professional diagnosis is required." },
    { q: "How long does AC repair take?", a: "Most standard repairs, such as replacing a capacitor, contactor, or clearing a clogged drain line, take between 1 to 2 hours. Complex issues like a compressor replacement take slightly longer." },
    { q: "Do you offer emergency AC repair?", a: "Yes, we provide 24/7 emergency AC repair services across major cities in Saudi Arabia including Riyadh, Jeddah, and Dammam. Our certified HVAC technicians respond rapidly to urgent cooling failures." },
    { q: "Which AC brands do you repair?", a: "We repair all leading AC brands operating in the KSA market including Daikin, Carrier, LG, Samsung, York, Gree, Midea, Panasonic, Hitachi, and TCL, using genuine OEM parts." },
    { q: "What causes AC gas leakage?", a: "AC gas leakage is usually caused by corrosion, physical damage to copper refrigerant lines, or loose connections. We use electronic leak detectors to pinpoint and weld the leak before refilling R410A or R22 gas." },
    { q: "Why is my AC dripping water inside?", a: "Indoor water leakage is most commonly caused by a clogged condensate drain pipe or a frozen evaporator coil that is melting. We clear the blockage and fix the underlying airflow or gas issue." },
    { q: "How often should I service my AC?", a: "Due to the harsh, dusty climate of Saudi Arabia, we highly recommend comprehensive AC maintenance at least twice a year—ideally right before the intense summer peak and again in the autumn." },
    { q: "Do you repair inverter ACs?", a: "Yes, our technicians are specially trained to diagnose and repair advanced inverter AC systems and VRF/VRV systems, which involve fixing complex PCB board faults and variable speed compressors." },
    { q: "What are the signs of a failing compressor?", a: "Signs of a failing compressor include the AC blowing warm air, the outdoor unit making loud grinding or clicking noises, the system repeatedly tripping the circuit breaker, and excessive vibration." },
    { q: "Is it better to repair or replace my old AC?", a: "If your AC is over 10-15 years old, uses phased-out R22 gas, and requires a major repair like a compressor replacement, investing in a new, energy-efficient model is often more cost-effective." },
    { q: "Why does my AC smell bad?", a: "A foul, musty, or sour odor coming from your AC vents is a strong indicator of mold, mildew, or bacterial growth on the evaporator coils or inside the drain pan. Deep chemical cleaning resolves this immediately." },
    { q: "Can you fix a noisy AC?", a: "Yes, noisy ACs caused by loose fan blades, failing blower motor bearings, or loose mounting brackets can be quickly fixed by tightening components, lubricating bearings, or replacing worn-out fan motors." },
    { q: "Do you provide commercial AC repair?", a: "Absolutely. We service commercial HVAC systems, central package units, and VRF/VRV systems for offices, restaurants, hotels, hospitals, malls, and warehouses across Saudi Arabia." },
    { q: "Are your technicians certified?", a: "Yes, all our HVAC technicians are fully certified, licensed, and undergo regular training to stay updated with the latest cooling technologies, safety protocols, and EEAT standards." }
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Schema 
        type="Service" 
        data={generateServiceSchema(
          "AC Repair Services Across Saudi Arabia",
          "Professional AC Repair, Emergency HVAC Services, AC Maintenance and Cooling Solutions Across Saudi Arabia.",
          "/ac-repair"
        )} 
      />
      <Schema type="FAQPage" data={generateFAQSchema(faqs)} />
      <Schema type="BreadcrumbList" data={generateBreadcrumbSchema([ { name: "Home", item: "/" }, { name: "AC Repair", item: "/ac-repair" } ])} />
      
      <Navbar onBookNow={handleBookNow} />

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 rounded-bl-full pointer-events-none blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-8">
              <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest w-fit">
                <ShieldCheck size={16} /> Certified HVAC Experts
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary leading-tight tracking-tight">
                AC Repair Services Across Saudi Arabia (KSA)
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                Professional AC Repair, Emergency HVAC Services, AC Maintenance and Cooling Solutions Across Saudi Arabia.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <button onClick={() => handleBookNow("WhatsApp Consult")} className="px-8 py-4 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-[#25D366] border border-transparent hover:border-[#25D366] transition-all flex items-center gap-3">
                  <MessageSquare size={20} /> WhatsApp Now
                </button>
                <a href="tel:+966510942150" className="px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-primary border border-transparent hover:border-primary transition-all flex items-center gap-3">
                  <Phone size={20} /> Call Now
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <Image src="/hero.webp" alt="AC Repair Services Saudi Arabia" fill className="object-cover" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: QUICK ANSWER (AI OVERVIEW) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-primary/5 p-10 rounded-[40px] border border-primary/10">
            <h2 className="text-2xl md:text-4xl font-heading font-black text-primary mb-6">What is AC Repair?</h2>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              AC repair is the process of diagnosing and fixing air conditioning problems such as poor cooling, refrigerant leaks, compressor failure, thermostat issues, electrical faults, and airflow problems. Professional AC repair services help restore cooling efficiency, improve indoor comfort, and extend the lifespan of HVAC systems.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: STATISTICS */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { num: "10,000+", lbl: "Repairs Completed" },
              { num: "5000+", lbl: "Happy Customers" },
              { num: "18+", lbl: "Cities Covered" },
              { num: "24/7", lbl: "Emergency Support" },
              { num: "98%", lbl: "Customer Satisfaction" }
            ].map((st, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-4xl md:text-5xl font-heading font-black text-secondary">{st.num}</span>
                <span className="text-xs font-black uppercase tracking-widest text-white/80">{st.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMON AC PROBLEMS WE FIX */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Common AC Problems We Fix</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "AC Not Cooling", img: "/Ac Services/AC Repair.webp", prob: "Air Conditioner blowing warm air.", sym: "High indoor temp, compressor running non-stop.", cau: "Low refrigerant gas, dirty condenser coils.", rep: "Leak repair, gas recharge, coil cleaning." },
              { t: "Water Leakage", img: "/Ac Services/AC Maintenance.webp", prob: "Water dripping from indoor unit.", sym: "Wet walls, water pooling under AC.", cau: "Clogged condensate drain line, frozen coils.", rep: "High-pressure drain unblocking, ice thawing." },
              { t: "Gas Leakage", img: "/Ac Services/AC Gas Refill.webp", prob: "Loss of refrigerant pressure.", sym: "Hissing sounds, ice on coils, warm air.", cau: "Cracked copper pipes or loose flare joints.", rep: "Weld copper pipes, pull vacuum, refill gas." },
              { t: "Compressor Failure", img: "/AC Companies/YORK AC.webp", prob: "Outdoor unit dead or tripping breaker.", sym: "AC trips breaker, loud grinding noise.", cau: "Overheating, bad capacitor, old age.", rep: "Replace run capacitor or entire compressor." },
              { t: "Thermostat Issues", img: "/Ac Services/Fast & Reliable AC Repair.webp", prob: "AC won't turn on or off correctly.", sym: "Incorrect room reading, blank digital screen.", cau: "Dead batteries, faulty wiring, sensor failure.", rep: "Recalibrate sensors or replace thermostat." },
              { t: "Electrical Faults", img: "/AC Companies/Gree AC.webp", prob: "System losing power completely.", sym: "Burning smell, frequent main breaker trips.", cau: "Burnt contactor, damaged wiring, power surge.", rep: "Replace damaged electrical components safely." },
              { t: "Weak Airflow", img: "/hero.webp", prob: "Barely any air coming out of vents.", sym: "Room takes hours to cool, weak breeze.", cau: "Clogged air filter, failing blower motor.", rep: "Deep clean filters, replace blower fan." },
              { t: "Frozen Coils", img: "/AC Companies/Mitsubishi AC.webp", prob: "Ice building up inside the unit.", sym: "Low airflow, water dripping indoors.", cau: "Low refrigerant gas, severely restricted airflow.", rep: "Thaw ice, fix gas leak, clean system." },
              { t: "Bad Smell", img: "/AC Companies/Hitachi AC.png", prob: "Foul or sour odor from AC vents.", sym: "Musty, sour smell when AC runs.", cau: "Mold and bacteria on evaporator coil.", rep: "Deep chemical wash and sanitization." }
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-2xl transition-all">
                <div className="relative h-56 w-full">
                  <Image src={p.img} alt={p.t} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-heading font-black text-white">{p.t}</h3>
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <p className="text-sm text-gray-600"><strong className="text-primary font-black">Problem:</strong> {p.prob}</p>
                  <p className="text-sm text-gray-600"><strong className="text-primary font-black">Symptoms:</strong> {p.sym}</p>
                  <p className="text-sm text-gray-600"><strong className="text-primary font-black">Causes:</strong> {p.cau}</p>
                  <p className="text-sm text-gray-600"><strong className="text-secondary font-black">Repair Solution:</strong> {p.rep}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("AC Problem Repair")} className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-secondary border border-transparent hover:border-secondary transition-all">
              <Wrench size={20} /> Fix My AC Problem
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: TYPES OF AC WE REPAIR */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Types of AC We Repair</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Split AC Repair", i: "/Ac Services/AC Installation.webp", d: "Wall-mounted units for homes.", f: "Fast repair, gas refill.", b: "Quiet operation.", c: "Book Split AC Repair" },
              { t: "Central AC Repair", i: "/Ac Services/AC Duct Cleaning.webp", d: "Whole-house ducted systems.", f: "Duct cleaning, compressor fix.", b: "Even cooling.", c: "Book Central AC Repair" },
              { t: "Window AC Repair", i: "/Ac Services/AC Maintenance.webp", d: "Compact single-room units.", f: "Motor replacement, deep clean.", b: "Cost-effective.", c: "Book Window AC Repair" },
              { t: "Cassette AC Repair", i: "/Ac Services/AC Gas Refill.webp", d: "Ceiling mounted units.", f: "Drain unblocking, PCB repair.", b: "Space-saving.", c: "Book Cassette AC Repair" },
              { t: "Ducted AC Repair", i: "/Ac Services/AC Cleaning.webp", d: "Hidden ceiling cooling.", f: "Airflow balancing.", b: "Aesthetic design.", c: "Book Ducted AC Repair" },
              { t: "Inverter AC Repair", i: "/hero.webp", d: "Energy-saving variable compressors.", f: "Inverter board repair.", b: "Lower electricity bills.", c: "Book Inverter AC Repair" },
              { t: "VRF Systems", i: "/Ac Services/AC Coil Cleaning.webp", d: "Variable Refrigerant Flow.", f: "Multi-zone control repair.", b: "High commercial efficiency.", c: "Book VRF Repair" },
              { t: "VRV Systems", i: "/Ac Services/Fast & Reliable AC Repair.webp", d: "Variable Refrigerant Volume.", f: "Advanced diagnostics.", b: "Ultimate climate control.", c: "Book VRV Repair" }
            ].map((type, i) => (
              <div key={i} className="bg-slate-50 rounded-[32px] border border-gray-100 overflow-hidden group hover:border-secondary transition-all">
                <div className="relative h-48">
                  <Image src={type.i} alt={type.t} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-xl font-heading font-black text-primary">{type.t}</h3>
                  <p className="text-sm text-gray-600">{type.d}</p>
                  <p className="text-xs text-gray-500"><strong>Features:</strong> {type.f}</p>
                  <p className="text-xs text-gray-500"><strong>Benefits:</strong> {type.b}</p>
                  <button onClick={() => handleBookNow(type.t)} className="w-full mt-4 py-3 bg-white text-secondary font-black uppercase tracking-widest text-[10px] rounded-xl border border-gray-200 group-hover:bg-secondary group-hover:text-white transition-colors">
                    {type.c}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Book AC Type Repair")} className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all border border-transparent">
              <Settings size={20} /> Book Service Now
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: AC BRANDS WE REPAIR */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">AC Brands We Repair</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { b: "Daikin", img: "/AC Companies/Daikin AC.jpg", o: "Premium VRV leader.", p: "PCB errors.", r: "Inverter board fixes." },
              { b: "Carrier", img: "/AC Companies/Carrier ac.png", o: "Heavy-duty HVAC.", p: "Capacitor failure.", r: "Compressor overhauls." },
              { b: "LG", img: "/AC Companies/LG AC.webp", o: "Smart dual inverter.", p: "Gas leakage.", r: "Refrigerant recharge." },
              { b: "Samsung", img: "/AC Companies/Samsung AC.jpg", o: "Wind-free tech.", p: "Water dripping.", r: "Drain line unblocking." },
              { b: "York", img: "/AC Companies/YORK AC.webp", o: "Reliable central units.", p: "Thermostat issues.", r: "Sensor calibration." },
              { b: "Gree", img: "/AC Companies/Gree AC.webp", o: "Affordable cooling.", p: "Frozen coils.", r: "Airflow restoration." },
              { b: "Midea", img: "/hero.webp", o: "Popular residential.", p: "Overheating.", r: "Motor replacement." },
              { b: "Panasonic", img: "/AC Companies/Mitsubishi AC.webp", o: "Nanoe-G purification.", p: "Filter blockage.", r: "Deep chemical wash." },
              { b: "Hitachi", img: "/AC Companies/Hitachi AC.png", o: "Durable components.", p: "Noisy operation.", r: "Bearing replacement." },
              { b: "TCL", img: "/Ac Services/AC Repair.webp", o: "Budget friendly.", p: "Electrical faults.", r: "Contactor swap." }
            ].map((brand, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 text-center flex flex-col items-center gap-4 hover:shadow-lg transition-all">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm">
                  <Image src={brand.img} alt={brand.b} fill className="object-cover" />
                </div>
                <h3 className="text-lg font-heading font-black text-primary">{brand.b}</h3>
                <p className="text-[11px] text-gray-500"><strong>Overview:</strong> {brand.o}</p>
                <p className="text-[11px] text-gray-500"><strong>Problems:</strong> {brand.p}</p>
                <p className="text-[11px] text-gray-500"><strong>Expertise:</strong> {brand.r}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Book Brand Repair")} className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-secondary border border-transparent hover:border-secondary transition-all">
              <Wrench size={20} /> Repair My AC Brand
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7 & 8: RESIDENTIAL & COMMERCIAL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-50 rounded-[40px] border border-gray-100 overflow-hidden flex flex-col">
              <div className="relative h-72 w-full">
                <Image src="/Ac Services/Home Maintenance.webp" alt="Residential AC Repair Saudi Arabia" fill className="object-cover" />
                <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-xl"><Home size={32}/></div>
              </div>
              <div className="p-12">
                <h2 className="text-3xl font-heading font-black text-primary mb-6">Residential AC Repair</h2>
                <div className="flex flex-wrap gap-3">
                  {["Villa AC Repair", "Apartment AC Repair", "Flat AC Repair", "Home AC Repair"].map((tag, i) => (
                    <span key={i} className="px-5 py-2 bg-white rounded-full text-sm font-black text-primary border border-gray-200"><Check size={14} className="inline mr-2 text-secondary"/> {tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-primary rounded-[40px] shadow-2xl overflow-hidden flex flex-col text-white">
              <div className="relative h-72 w-full">
                <Image src="/Ac Services/Plumbing.webp" alt="Commercial AC Repair Saudi Arabia" fill className="object-cover opacity-80" />
                <div className="absolute top-6 left-6 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-xl"><Building2 size={32}/></div>
              </div>
              <div className="p-12">
                <h2 className="text-3xl font-heading font-black mb-6">Commercial AC Repair</h2>
                <div className="flex flex-wrap gap-3">
                  {["Office", "Restaurant", "Hotel", "Hospital", "School", "Warehouse", "Mall"].map((tag, i) => (
                    <span key={i} className="px-5 py-2 bg-white/10 rounded-full text-sm font-black border border-white/20"><Check size={14} className="inline mr-2 text-secondary"/> {tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: EMERGENCY AC REPAIR */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none rotate-12 scale-150"><AlertTriangle size={400} /></div>
        <div className="container mx-auto px-4 max-w-5xl text-center flex flex-col items-center gap-8 relative z-10">
          <AlertTriangle size={80} className="text-secondary animate-pulse mb-4" />
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tight">Emergency AC Repair</h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg md:text-2xl font-black uppercase tracking-widest text-white/90 max-w-3xl leading-relaxed mt-4">
            <span className="bg-white/10 px-6 py-3 rounded-full">24/7 Emergency AC Repair Across Saudi Arabia</span>
            <span className="bg-white/10 px-6 py-3 rounded-full">Same Day Service</span>
            <span className="bg-white/10 px-6 py-3 rounded-full">Fast Response</span>
            <span className="bg-white/10 px-6 py-3 rounded-full">Certified HVAC Technicians</span>
          </div>
          <button onClick={() => handleBookNow("Emergency AC Repair")} className="mt-8 px-12 py-6 bg-secondary text-white rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl hover:bg-white hover:text-primary transition-all flex items-center gap-4">
            <Zap size={24} /> Dispatch Emergency Technician
          </button>
        </div>
      </section>

      {/* SECTION 10: OUR AC REPAIR PROCESS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Our AC Repair Process</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-12 right-12 h-1 bg-gray-200 -z-10" />
            {[
              { s: "Step 1", t: "Inspection", i: <Search size={28} /> },
              { s: "Step 2", t: "Diagnosis", i: <Activity size={28} /> },
              { s: "Step 3", t: "Estimate", i: <MessageSquare size={28} /> },
              { s: "Step 4", t: "Repair", i: <Wrench size={28} /> },
              { s: "Step 5", t: "Testing", i: <Gauge size={28} /> },
              { s: "Step 6", t: "Customer Approval", i: <ThumbsUp size={28} /> }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 group">
                <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  {step.i}
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-secondary block mb-2">{step.s}</span>
                  <h3 className="text-lg font-heading font-black text-primary">{step.t}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Repair Process Inquiry")} className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-secondary border border-transparent hover:border-secondary transition-all">
              <MessageSquare size={20} /> Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 11: SERVICE AREAS ACROSS SAUDI ARABIA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Service Areas Across Saudi Arabia</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Riyadh", "Jeddah", "Dammam", "Al Khobar", "Makkah", "Madinah", 
              "Taif", "Jubail", "Yanbu", "Abha", "Khamis Mushait", "Najran", 
              "Tabuk", "Hail", "Al Ahsa", "Buraidah", "Jazan"
            ].map((city, i) => (
              <Link href={`/locations/${city.toLowerCase().replace(' ', '-')}`} key={i} className="p-6 bg-slate-50 rounded-2xl border border-gray-100 flex flex-col items-center gap-4 hover:border-secondary hover:shadow-lg transition-all text-center group">
                <MapPin className="text-secondary group-hover:scale-125 transition-transform duration-300" size={28} />
                <span className="text-sm font-black uppercase tracking-widest text-primary">{city}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Book Regional Service")} className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all border border-transparent">
              <MapPin size={20} /> Find Technician Near You
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 12: WHY CHOOSE US */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Why Choose Us</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Licensed Technicians", "24/7 Support", "Warranty", "Genuine Parts", 
              "Affordable Prices", "Fast Response", "Same Day Service", "Transparent Pricing"
            ].map((reason, i) => (
              <div key={i} className="px-8 py-4 bg-white rounded-full shadow-sm border border-gray-100 text-sm font-black uppercase tracking-widest text-primary flex items-center gap-3">
                <ShieldCheck size={20} className="text-secondary" /> {reason}
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Schedule Repair Service")} className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-secondary border border-transparent hover:border-secondary transition-all">
              <CheckCircle2 size={20} /> Schedule Your Repair
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 13: CUSTOMER REVIEWS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Customer Reviews</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: "Mohammed Al-Qahtani", loc: "Riyadh", r: "Excellent emergency service! My Central AC broke down at 2 AM and they fixed the compressor same-day. Highly professional." },
              { n: "Sarah V.", loc: "Jeddah", r: "Highly recommend for Split AC repair. Honest pricing, genuine Daikin parts used, and the technician was very clean and efficient." },
              { n: "Fahad M.", loc: "Dammam", r: "They fixed a major gas leak in my Villa. Fast response, professional testing, and my cooling system is ice cold now. Top tier HVAC repair!" }
            ].map((rev, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-[32px] border border-gray-100 flex flex-col gap-6 shadow-sm">
                <div className="flex gap-1 text-yellow-400">
                  <Star fill="currentColor" size={20} /> <Star fill="currentColor" size={20} /> <Star fill="currentColor" size={20} /> <Star fill="currentColor" size={20} /> <Star fill="currentColor" size={20} />
                </div>
                <p className="text-base text-gray-600 font-medium italic leading-relaxed">"{rev.r}"</p>
                <div>
                  <p className="text-sm font-black text-primary uppercase tracking-widest">{rev.n}</p>
                  <p className="text-xs font-black text-secondary uppercase tracking-widest mt-1">{rev.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: FAQ (AI OVERVIEW OPTIMIZED) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-heading font-black text-primary mb-3">{faq.q}</h3>
                <p className="text-base text-gray-600 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15: LONG SEO CONTENT (1000+ Words Structure with Semantic NLP) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-primary mb-8 text-center">Comprehensive AC Repair Services Across Saudi Arabia</h2>
          <div className="text-base text-gray-600 font-medium leading-relaxed space-y-6">
            <p>When the harsh summer heat hits Saudi Arabia, having a fully functional cooling system is not just a luxury—it is an absolute necessity. Professional <strong>AC Repair Saudi Arabia</strong> services are critical for maintaining indoor comfort, healthy air quality, and high energy efficiency across residential and commercial properties. Whether you reside in a sprawling villa in Riyadh, manage a high-rise corporate office in Jeddah, or operate a heavy-duty warehouse in Dammam, unexpected HVAC breakdowns require immediate and expert attention from certified professionals.</p>
            
            <p>Our comprehensive <strong>HVAC Repair</strong> services cover every aspect of air conditioning diagnostics and restoration. From traditional window units to complex VRF systems, our certified technicians are equipped to handle all <strong>Cooling System Repair</strong> needs. We understand that an <strong>Air Conditioner Repair</strong> involves more than just changing an air filter; it requires deep technical knowledge of thermodynamics, complex electrical systems, and modern inverter technologies. We expertly service all major components including the compressor, evaporator coil, condenser coil, and thermostat.</p>

            <h3 className="text-2xl font-heading font-black text-primary mt-12 mb-6">Emergency AC Repair: Rapid Response When You Need It Most</h3>
            <p>An AC failure in the middle of the night or during a sweltering 50°C summer day constitutes a true emergency. That is precisely why our <strong>Emergency AC Repair</strong> teams are stationed strategically across the Kingdom. We offer 24/7 rapid dispatch to ensure your downtime is minimized. An expert <strong>AC Technician</strong> arrives fully equipped with advanced diagnostic tools, electronic leak detectors, and a comprehensive inventory of genuine OEM replacement parts to resolve the issue on the very first visit.</p>

            <h3 className="text-2xl font-heading font-black text-primary mt-12 mb-6">Split AC Repair & Central AC Repair Excellence</h3>
            <p>In Saudi Arabia, Split ACs and Central AC systems form the backbone of indoor cooling. <strong>Split AC Repair</strong> often involves addressing issues such as indoor unit water leakage (commonly caused by clogged condensate drains), foul odors resulting from bacterial growth on evaporator coils, or outdoor unit compressor failures. On the other hand, <strong>Central AC Repair</strong> demands a macro-level approach, including extensive ductwork inspection, airflow balancing, and heavy-duty condenser coil cleaning. Regardless of the system architecture, our advanced <strong>AC Troubleshooting</strong> protocols are designed to identify the exact point of failure rapidly, preventing further system damage.</p>

            <h3 className="text-2xl font-heading font-black text-primary mt-12 mb-6">Mastering HVAC Troubleshooting & Diagnostics</h3>
            <p>One of the most critical aspects of professional <strong>HVAC Services</strong> is accurate diagnostics. When an AC is not cooling properly, the issue could range from a simple dirty air filter restricting airflow to a severe refrigerant gas leak that requires micro-welding copper pipes. Our technicians utilize manifold gauges, thermal imaging cameras, and digital multimeters to trace electrical faults and pressure imbalances within the cooling system. This precise approach guarantees that we fix the root cause, rather than just treating the symptoms.</p>

            <h3 className="text-2xl font-heading font-black text-primary mt-12 mb-6">The Importance of Professional HVAC Services & Maintenance</h3>
            <p>Attempting DIY fixes on modern air conditioning systems often leads to further damage and voided manufacturer warranties. Professional HVAC Services ensure that intricate tasks, such as R410A refrigerant gas refilling, PCB board micro-soldering, and thermostat sensor recalibration, are executed flawlessly. Our commitment to excellence means we not only fix the immediate problem but also optimize the entire system for peak energy efficiency. Routine maintenance and timely repairs prevent minor issues—like a failing run capacitor or a small gas leak—from escalating into catastrophic compressor failures that demand expensive replacements.</p>

            <p>By choosing our expert team for your AC repair needs across Saudi Arabia, you are investing in longevity, reliability, and unparalleled indoor comfort. From the indoor unit to the outdoor unit, from proper ventilation to optimal energy efficiency, we provide a holistic solution. Contact us today to experience the highest standard of HVAC technical support in the Kingdom.</p>
          </div>
          <div className="text-center mt-12">
            <button onClick={() => handleBookNow("Comprehensive Repair Request")} className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all border border-transparent text-lg">
              <Phone size={24} /> Contact Us Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
