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
  ArrowRightCircle, CheckCircle2, Factory, Home, Droplet, ArrowDown
} from "lucide-react";
import Schema, { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/components/Schema";

export default function ACCleaningPage() {
  const handleBookNow = (service?: any) => {
    const sName = service && typeof service === 'string' ? service : "AC Cleaning";
    const text = `Hello, I need ${sName} services. Can you help?`;
    window.open(`https://wa.me/966510942150?text=${encodeURIComponent(text)}`, '_blank');
  };

  const faqs = [
    { q: "How often should AC be cleaned in Saudi Arabia?", a: "Due to frequent sandstorms and high dust levels in KSA, we highly recommend deep AC cleaning every 3 to 6 months to maintain air quality and prevent compressor failure." },
    { q: "What happens if AC is not cleaned?", a: "An uncleaned AC will suffer from restricted airflow, frozen evaporator coils, massive electricity consumption, foul odors, and eventual compressor breakdown. It also circulates mold and allergens." },
    { q: "How much does AC cleaning cost in Saudi Arabia?", a: "Prices vary based on the type (Split, Central, Window) and the level of cleaning (basic filter wash vs. deep chemical coil cleaning). We offer highly affordable, transparent pricing." },
    { q: "Does AC cleaning improve cooling?", a: "Yes, drastically. Removing thick dust layers from the condenser and evaporator coils allows the refrigerant to absorb and release heat efficiently, restoring factory-level cooling." },
    { q: "Can a dirty AC affect my health?", a: "Absolutely. Dirty air conditioners breed bacteria, fungi, and mold within the dark, damp drain lines and coils, triggering asthma, allergies, and respiratory issues." },
    { q: "How long does AC deep cleaning take?", a: "A professional deep clean for a standard Split AC takes about 45 to 60 minutes. Central and Ducted systems require more time depending on the ductwork." },
    { q: "Do you use chemicals for AC cleaning?", a: "We use safe, eco-friendly, non-corrosive foaming coils cleaners that dissolve stubborn grime without damaging the delicate aluminum fins or copper pipes." },
    { q: "Is water leakage a sign that my AC needs cleaning?", a: "Yes, the most common cause of indoor water dripping is a clogged condensate drain pipe filled with dirt and algae, which requires high-pressure cleaning." },
    { q: "What is included in a deep AC cleaning service?", a: "Our deep cleaning includes washing the air filters, chemically foaming the evaporator and condenser coils, unblocking the drain line, sanitizing the blower fan, and checking refrigerant levels." },
    { q: "Do you clean Central AC ducts?", a: "Yes, we offer specialized HVAC duct cleaning using advanced rotary brushes and high-powered vacuums to remove years of accumulated dust and allergens." },
    { q: "Will AC cleaning lower my electricity bill?", a: "Yes. A clean AC reaches the target temperature faster and cycles off sooner, consuming up to 30% less electricity compared to a severely clogged unit." },
    { q: "Do you service commercial properties?", a: "Yes, we provide bulk AC cleaning and preventive maintenance contracts for offices, hotels, hospitals, restaurants, and warehouses across all major Saudi cities." },
    { q: "Is it messy? Will my walls get dirty?", a: "Not at all. We use specialized waterproof catch-bags and indoor pressure washers designed specifically for ACs, ensuring zero mess or water damage to your walls and furniture." },
    { q: "Can I just clean the filters myself?", a: "While cleaning the removable mesh filters helps, it does not reach the embedded dirt deep inside the coils, blower fan, and drain pan. Professional deep cleaning is essential." },
    { q: "Do you offer AC cleaning in Jeddah and Dammam?", a: "Yes, our certified AC cleaning teams are dispatched across Riyadh, Jeddah, Dammam, Makkah, Madinah, and all major cities in Saudi Arabia." }
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans overflow-x-hidden">
      <Schema 
        type="Service" 
        data={generateServiceSchema(
          "Professional AC Cleaning Services Across Saudi Arabia",
          "Deep AC Cleaning, Coil Washing, Filter Cleaning, and HVAC Sanitization across KSA.",
          "/ac-cleaning"
        )} 
      />
      <Schema type="FAQPage" data={generateFAQSchema(faqs)} />
      <Schema type="BreadcrumbList" data={generateBreadcrumbSchema([ { name: "Home", item: "/" }, { name: "AC Cleaning", item: "/ac-cleaning" } ])} />
      
      <Navbar onBookNow={handleBookNow} />

      {/* 1. FULL WIDTH HERO (Image Left, Content Right) */}
      <section className="relative min-h-[85vh] flex items-center pt-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="relative h-[600px] w-full rounded-r-[60px] overflow-hidden shadow-2xl">
            <Image src="/Ac Services/AC Cleaning.webp" alt="AC Cleaning Saudi Arabia" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-transparent" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-6 lg:pl-8 py-12">
            <div className="inline-flex items-center gap-2 bg-slate-50 text-secondary px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest w-fit border border-secondary/20">
              <Leaf size={16} /> Eco-Friendly Cleaning
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 leading-tight">
              Professional AC Cleaning Services Across Saudi Arabia
            </h1>
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-secondary pl-4">
              Breathe pure, fresh air. Our deep AC sanitization removes mold, toxic dust, and bacteria, restoring your cooling efficiency, lowering electricity bills, and extending your AC&apos;s lifespan.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <button onClick={() => handleBookNow("Book AC Cleaning")} className="px-8 py-4 bg-secondary text-white rounded-xl font-black uppercase tracking-widest shadow-lg hover:bg-secondary transition-all flex items-center gap-2">
                <Sparkles size={20} /> Book AC Cleaning
              </button>
              <button onClick={() => handleBookNow("WhatsApp Consult")} className="px-8 py-4 bg-[#25D366] text-white rounded-xl font-black uppercase tracking-widest shadow-lg hover:bg-[#20b858] transition-all flex items-center gap-2">
                <MessageSquare size={20} /> WhatsApp Now
              </button>
              <a href="tel:+966510942150" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-black uppercase tracking-widest shadow-lg hover:bg-slate-800 transition-all flex items-center gap-2">
                <Phone size={20} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUICK ANSWER BOX (AI OVERVIEW) */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-secondary w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-4 border-white text-white">
            <Search size={32} />
          </div>
          <div className="bg-white/10 backdrop-blur-md p-12 rounded-[40px] border border-white/20 mt-8 shadow-2xl">
            <h2 className="text-3xl font-heading font-black mb-6 text-secondary">What is AC Cleaning?</h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              AC cleaning is a comprehensive maintenance service that involves chemically washing the evaporator and condenser coils, clearing clogged drain lines, sanitizing the blower fan, and replacing air filters. Deep AC cleaning eradicates mold, dust, and bacteria, restoring maximum cooling performance, reducing energy consumption, and vastly improving indoor air quality.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button onClick={() => handleBookNow("Quick Answer Cleaning Booking")} className="px-10 py-4 bg-white text-primary rounded-full font-black uppercase tracking-widest shadow-xl hover:bg-slate-50 transition-all inline-flex items-center gap-2">
            Schedule Deep Clean <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* 3. BENEFITS OF AC CLEANING (Big Icon Cards) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900">Incredible Benefits of AC Cleaning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Improved Cooling", i: <ThermometerSun size={48}/>, d: "Restores factory-level ice-cold airflow instantly.", c: "bg-secondary/10 text-secondary" },
              { t: "Lower Bills", i: <BatteryCharging size={48}/>, d: "Reduces compressor strain and electricity consumption by 30%.", c: "bg-primary/10 text-primary" },
              { t: "Better Air Quality", i: <Wind size={48}/>, d: "Breathe fresh air free from toxic desert dust.", c: "bg-secondary/20 text-secondary" },
              { t: "Remove Dust & Mold", i: <ShieldAlert size={48}/>, d: "Eliminates highly toxic black mold from damp coils.", c: "bg-primary/10 text-primary" },
              { t: "Longer Lifespan", i: <Activity size={48}/>, d: "Prevents fatal compressor burnout and system failures.", c: "bg-secondary/10 text-secondary" },
              { t: "Healthier Environment", i: <HeartPulse size={48}/>, d: "Crucial for families with asthma, allergies, or kids.", c: "bg-primary/10 text-primary" }
            ].map((b, i) => (
              <div key={i} className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm flex flex-col items-center text-center gap-6 hover:-translate-y-2 transition-all">
                <div className={`w-24 h-24 rounded-3xl flex items-center justify-center ${b.c}`}>
                  {b.i}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">{b.t}</h3>
                  <p className="text-slate-600 font-medium">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Claim Benefits")} className="px-10 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all inline-flex items-center gap-3">
              <Sparkles size={24} /> Transform Your AC Today
            </button>
          </div>
        </div>
      </section>

      {/* 4. SIGNS YOUR AC NEEDS CLEANING (Timeline) */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900">7 Signs Your AC Urgently Needs Cleaning</h2>
          </div>
          <div className="relative border-l-4 border-secondary/20 ml-6 md:ml-12 space-y-12 py-4">
            {[
              { s: "Weak Cooling", d: "AC takes hours to cool the room down." },
              { s: "Dust Around Vents", d: "Visible black or gray dust blowing out of the louvers." },
              { s: "Bad Smell", d: "A sour, musty, or vinegar-like odor when turned on." },
              { s: "Water Leakage", d: "Water dripping inside the room from a choked drain pan." },
              { s: "High Electricity Bills", d: "Sudden unexplained spike in your monthly power bill." },
              { s: "Poor Airflow", d: "Barely feeling any breeze even on maximum fan speed." },
              { s: "Allergy Symptoms", d: "Constant sneezing, coughing, or asthma flare-ups." }
            ].map((item, i) => (
              <div key={i} className="relative pl-10 md:pl-16">
                <div className="absolute -left-[22px] top-0 w-10 h-10 bg-secondary rounded-full border-4 border-white flex items-center justify-center text-white font-black shadow-md">
                  {i + 1}
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 hover:border-teal-300 transition-colors">
                  <h3 className="text-xl font-black text-slate-900">{item.s}</h3>
                  <p className="text-slate-600 mt-2">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Fix AC Signs")} className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all inline-flex items-center gap-3">
              <AlertTriangle size={24} /> Fix These Signs Now
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE CLEAN (Visual Cards) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900">What Exactly Do We Clean?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Indoor Unit", i: "/Ac Services/AC Cleaning.webp", b: "Removes visible mold.", p: "Foam wash and brush." },
              { t: "Outdoor Unit", i: "/Ac Services/AC Cleaning.webp", b: "Stops overheating.", p: "High-pressure water jet." },
              { t: "Air Filters", i: "/Ac Services/AC Filter Cleaning.webp", b: "Restores airflow.", p: "Deep sanitization." },
              { t: "Evaporator Coils", i: "/Ac Services/AC Coil Cleaning.webp", b: "Improves cooling.", p: "Chemical descaling." },
              { t: "Condenser Coils", i: "/Ac Services/AC Coil Cleaning.webp", b: "Saves electricity.", p: "Debris and sand removal." },
              { t: "Drain Line", i: "/Ac Services/AC Maintenance.webp", b: "Prevents leaking.", p: "Vacuum and flush." },
              { t: "Blower Fan", i: "/Ac Services/AC Repair.webp", b: "Quieter operation.", p: "Blade-by-blade scrubbing." },
              { t: "Air Vents", i: "/Ac Services/AC Duct Cleaning.webp", b: "Pure air delivery.", p: "Anti-bacterial wipe." }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={item.i} alt={item.t} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-primary mb-3">{item.t}</h3>
                  <p className="text-sm text-slate-600 mb-2"><strong className="text-slate-900">Benefits:</strong> {item.b}</p>
                  <p className="text-sm text-slate-600"><strong className="text-slate-900">Process:</strong> {item.p}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Comprehensive Cleaning")} className="px-10 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all inline-flex items-center gap-3">
              <CheckCircle2 size={24} /> Request Full Cleaning
            </button>
          </div>
        </div>
      </section>

      {/* 6. DEEP AC CLEANING PROCESS (Infographic Timeline) */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-teal-50">Our Deep Cleaning Process</h2>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
            {[
              { s: 1, t: "Inspection" }, { s: 2, t: "Dust Removal" }, { s: 3, t: "Filter Washing" }, 
              { s: 4, t: "Coil Cleaning" }, { s: 5, t: "Drain Flush" }, { s: 6, t: "Sanitization" }, { s: 7, t: "Testing" }
            ].map((step, i) => (
              <div key={i} className="flex-1 min-w-[140px] bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-secondary/30 text-center flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-black text-xl shadow-lg">
                  {step.s}
                </div>
                <span className="font-black tracking-wide text-sm">{step.t}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Book Process")} className="px-10 py-5 bg-white text-primary rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:bg-slate-50 transition-all inline-flex items-center gap-3">
              <ArrowRightCircle size={24} /> Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* 7. BEFORE & AFTER SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900">The Difference is Clear</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
              <div className="absolute top-6 left-6 bg-red-500 text-white px-6 py-2 rounded-full font-black uppercase tracking-widest z-10 shadow-lg">Before Cleaning</div>
              <div className="relative h-80">
                <Image src="/Ac Services/AC Filter Cleaning.webp" alt="Dirty AC" fill className="object-cover grayscale contrast-125" />
                <div className="absolute inset-0 bg-amber-900/40 mix-blend-multiply" />
              </div>
              <div className="p-8 bg-slate-50">
                <ul className="space-y-3 font-medium text-slate-700">
                  <li className="flex items-center gap-3"><AlertTriangle className="text-red-500" size={18}/> Coils choked with black dust</li>
                  <li className="flex items-center gap-3"><AlertTriangle className="text-red-500" size={18}/> Warm, weak, suffocating airflow</li>
                  <li className="flex items-center gap-3"><AlertTriangle className="text-red-500" size={18}/> 40% higher electricity consumption</li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
              <div className="absolute top-6 left-6 bg-secondary text-white px-6 py-2 rounded-full font-black uppercase tracking-widest z-10 shadow-lg">After Cleaning</div>
              <div className="relative h-80">
                <Image src="/Ac Services/Home Maintenance.webp" alt="Clean AC" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/10" />
              </div>
              <div className="p-8 bg-slate-50">
                <ul className="space-y-3 font-medium text-primary">
                  <li className="flex items-center gap-3"><Sparkles className="text-secondary" size={18}/> Shining, bacteria-free coils</li>
                  <li className="flex items-center gap-3"><Wind className="text-secondary" size={18}/> Ice-cold, powerful, pure breeze</li>
                  <li className="flex items-center gap-3"><BatteryCharging className="text-secondary" size={18}/> Peak energy efficiency restored</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("See Results")} className="px-10 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-900 transition-all inline-flex items-center gap-3">
              <Sparkles size={24} /> Get These Results
            </button>
          </div>
        </div>
      </section>

      {/* 8. TYPES OF AC WE CLEAN */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900">Types of AC We Clean</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: "Split AC", i: "/Ac Services/AC Cleaning.webp" },
              { t: "Central AC", i: "/Ac Services/AC Duct Cleaning.webp" },
              { t: "Window AC", i: "/Ac Services/AC Maintenance.webp" },
              { t: "Cassette AC", i: "/Ac Services/AC Cleaning.webp" },
              { t: "Ducted AC", i: "/Ac Services/AC Duct Cleaning.webp" },
              { t: "Inverter AC", i: "/Ac Services/AC Maintenance.webp" },
              { t: "VRF Systems", i: "/Ac Services/AC Coil Cleaning.webp" },
              { t: "VRV Systems", i: "/Ac Services/AC Repair.webp" }
            ].map((type, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 text-center shadow-sm hover:shadow-md transition-all group">
                <div className="relative h-32 w-full overflow-hidden">
                  <Image src={type.i} alt={type.t} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-black text-slate-900 tracking-wide">{type.t}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Book AC Type Cleaning")} className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all inline-flex items-center gap-3">
              <CheckCircle2 size={24} /> Clean My AC System
            </button>
          </div>
        </div>
      </section>

      {/* 9. HEALTH BENEFITS (Green Highlight) */}
      <section className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <HeartPulse size={80} className="mx-auto mb-8 text-white animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-12 tracking-tight">Protect Your Family&apos;s Health</h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-black uppercase tracking-widest">
            {["Remove Allergens", "Reduce Mold", "Cleaner Air", "Reduce Bacteria", "Healthier Environment", "Better Sleep"].map((h, i) => (
              <span key={i} className="px-6 py-3 bg-white/10 border border-white/20 rounded-full">{h}</span>
            ))}
          </div>
          <div className="mt-16">
            <button onClick={() => handleBookNow("Health Focus Cleaning")} className="px-12 py-6 bg-white text-primary rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl hover:bg-slate-50 transition-all inline-flex items-center gap-3">
              <ShieldCheck size={28} /> Ensure Clean Air Today
            </button>
          </div>
        </div>
      </section>

      {/* 10. SERVICE AREAS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900">We Clean ACs Across Saudi Arabia</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Riyadh", "Jeddah", "Dammam", "Al Khobar", "Makkah", "Madinah", 
              "Taif", "Jubail", "Yanbu", "Abha", "Khamis Mushait", "Najran", 
              "Tabuk", "Jazan", "Al Ahsa", "Hail", "Buraidah"
            ].map((city, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-gray-100 flex flex-col items-center gap-2 hover:bg-slate-50 hover:border-teal-200 transition-colors cursor-pointer group">
                <MapPin className="text-secondary group-hover:-translate-y-1 transition-transform" size={24} />
                <span className="text-xs font-black uppercase tracking-widest text-slate-700 group-hover:text-primary">{city}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Regional AC Cleaning")} className="px-10 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-900 transition-all inline-flex items-center gap-3">
              <MapPin size={24} /> Book In Your City
            </button>
          </div>
        </div>
      </section>

      {/* 11. WHY CHOOSE US */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900">Why Choose Our Cleaning Service?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Certified Technicians", i: <ShieldCheck size={32}/> },
              { t: "Eco-Friendly Products", i: <Leaf size={32}/> },
              { t: "Fast Service", i: <Zap size={32}/> },
              { t: "Affordable Prices", i: <Droplet size={32}/> },
              { t: "24/7 Support", i: <Phone size={32}/> },
              { t: "100% Satisfaction", i: <Star size={32}/> }
            ].map((w, i) => (
              <div key={i} className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-secondary bg-slate-50 p-4 rounded-2xl">
                  {w.i}
                </div>
                <h3 className="font-black text-lg text-slate-900">{w.t}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Book Trusted Service")} className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all inline-flex items-center gap-3">
              <ShieldCheck size={24} /> Hire The Best
            </button>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-black text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("FAQ Inquiry")} className="px-10 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-slate-900 transition-all inline-flex items-center gap-3">
              <MessageSquare size={24} /> Ask Another Question
            </button>
          </div>
        </div>
      </section>

      {/* 13. LONG SEO CONTENT */}
      <section className="py-24 bg-slate-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-8 text-center">Exceptional AC Cleaning Services Across Saudi Arabia</h2>
          <div className="text-slate-700 font-medium leading-relaxed space-y-6">
            <p>Living in Saudi Arabia means dealing with extreme summer heat and frequent sandstorms. These environmental factors take a massive toll on your cooling systems. Professional <strong>AC Cleaning Saudi Arabia</strong> services are not an optional luxury; they are an absolute necessity to maintain indoor air quality, ensure energy efficiency, and prolong the life of your equipment. Whether you are searching for top-tier <strong>AC Cleaning KSA</strong> solutions in Riyadh, Jeddah, Dammam, or any other major city, our certified HVAC technicians are equipped to handle the rigorous demands of the desert climate.</p>
            
            <p>Our comprehensive cleaning protocols cover every critical component of your system. <strong>Split AC Cleaning</strong> and <strong>Central AC Cleaning</strong> require distinctly different approaches, yet both suffer from similar issues: choked <strong>Evaporator Coils</strong> and blocked <strong>Condenser Coils</strong>. Over time, these coils accumulate thick layers of dust, pet dander, and biological growth like mold and bacteria. This insulating layer of grime forces the compressor to work overtime, destroying your <strong>Cooling Efficiency</strong> and sending your electricity bills skyrocketing. A thorough <strong>HVAC Cleaning</strong> directly resolves this by chemically washing away the insulation layer, instantly restoring optimal thermal transfer.</p>

            <h3 className="text-2xl font-heading font-black text-slate-900 mt-12 mb-6">The Dangers of Skipping Deep AC Cleaning</h3>
            <p>Ignoring routine maintenance leads to severe consequences. When the <strong>Indoor Unit Cleaning</strong> is neglected, the <strong>Air Filter Cleaning</strong> process is entirely bypassed, leading to restricted airflow. This not only weakens the breeze you feel in the room but can also cause the evaporator coils to freeze over completely. Furthermore, dirt inevitably washes down into the <strong>Drain Line</strong>. When mixed with the natural condensation of the AC, this dirt forms a thick, slimy algae that blocks the pipe, resulting in disastrous indoor water leakage.</p>

            <h3 className="text-2xl font-heading font-black text-slate-900 mt-12 mb-6">Complete Outdoor and Indoor Sanitization</h3>
            <p>While the indoor unit affects your immediate air quality, <strong>Outdoor Unit Cleaning</strong> is just as critical for system survival. The outdoor condenser unit is exposed to intense heat, sand, and pollution. If the outdoor coils are blocked, the heat absorbed from inside your home cannot be dissipated outside. This causes the compressor to overheat and trip the circuit breaker. By investing in regular <strong>Deep AC Cleaning</strong>, you eliminate the risk of these expensive compressor failures.</p>
            
            <p>Our commitment to excellence means we don&#39;t just rinse the filters. We scrub the <strong>Blower Fan</strong> blade by blade to ensure silent operation, sanitize the drip pan to eliminate musty odors, and use eco-friendly foaming chemicals that are safe for your family and pets. From health benefits like reduced allergies and better sleep to financial benefits like massive energy savings, the value of a professional AC cleaning is unmatched. Trust the leading experts across Saudi Arabia to keep your environment cool, clean, and healthy all year round.</p>
          </div>
          <div className="text-center mt-16">
            <button onClick={() => handleBookNow("Final Booking")} className="px-12 py-6 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:bg-secondary transition-all inline-flex items-center gap-3 text-lg">
              <CheckCircle2 size={28} /> Secure Your Booking
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
