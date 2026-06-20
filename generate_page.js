const fs = require('fs');
const content = "use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { motion } from "framer-motion";
import { Phone, ShieldCheck, Zap, ArrowRight, Star, MapPin, Wrench, AlertTriangle, Check, MessageSquare, ThumbsUp, Search, Activity, Gauge } from "lucide-react";
import Schema, { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/components/Schema";

export default function ACRepairPage() {
  const handleBookNow = (s) => window.open(\https://wa.me/966510942150?text=Hello, I need \ services. Can you help?\, '_blank');
  const faqs = [
    { q: "How much does AC repair cost in Saudi Arabia?", a: "The cost depends on the exact issue, unit type, and replacement parts needed. We offer transparent estimates." },
    { q: "Why is my AC not cooling?", a: "Typically caused by low refrigerant levels, dirty coils, or a broken thermostat. Professional diagnosis is required." },
    { q: "How long does AC repair take?", a: "Standard repairs take 1-2 hours. Complex issues like compressor replacement can take longer." },
    { q: "Do you offer emergency AC repair?", a: "Yes, 24/7 emergency AC repair across major Saudi cities." },
    { q: "Which AC brands do you repair?", a: "Daikin, Carrier, LG, Samsung, York, Gree, Midea, Panasonic, Hitachi, and TCL." },
    { q: "What causes AC gas leakage?", a: "Corrosion or physical damage to copper lines. We weld leaks before refilling gas." },
    { q: "Why is my AC dripping water inside?", a: "Usually a clogged condensate drain pipe or frozen evaporator coil." },
    { q: "How often should I service my AC?", a: "At least twice a year in Saudi Arabia's dusty climate." },
    { q: "Do you repair inverter ACs?", a: "Yes, we diagnose and repair advanced inverter and VRF systems." },
    { q: "What are signs of a failing compressor?", a: "Blowing warm air, loud noises, or tripping breakers." }
  ];

  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar onBookNow={handleBookNow} />

      {/* 1. HERO */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-24 bg-slate-50">
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-8">
            <h1 className="text-4xl lg:text-6xl font-black text-primary leading-tight">AC Repair Services Across Saudi Arabia (KSA)</h1>
            <h2 className="text-xl text-gray-600 font-medium">Professional AC Repair, Emergency HVAC Services, AC Maintenance and Cooling Solutions Across Saudi Arabia.</h2>
            <div className="flex gap-4 mt-4">
              <button onClick={() => handleBookNow("AC Repair")} className="px-6 py-3 bg-secondary text-white rounded-xl font-black uppercase tracking-widest flex items-center gap-2"><Wrench size={18}/> Book Service</button>
              <button onClick={() => handleBookNow("WhatsApp Consult")} className="px-6 py-3 bg-[#25D366] text-white rounded-xl font-black uppercase tracking-widest flex items-center gap-2"><MessageSquare size={18}/> WhatsApp Now</button>
              <a href="tel:+966510942150" className="px-6 py-3 bg-primary text-white rounded-xl font-black uppercase tracking-widest flex items-center gap-2"><Phone size={18}/> Call Now</a>
            </div>
          </motion.div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/optimized/pexels-5691657.webp" alt="AC Repair Hero" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 2. QUICK ANSWER */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 max-w-4xl bg-primary/5 p-8 rounded-3xl">
          <h2 className="text-3xl font-black text-primary mb-4">What is AC Repair?</h2>
          <p className="text-lg text-gray-700">AC repair is the process of diagnosing and fixing air conditioning problems such as poor cooling, refrigerant leaks, compressor failure, thermostat issues, electrical faults, and airflow problems. Professional AC repair services help restore cooling efficiency, improve indoor comfort, and extend the lifespan of HVAC systems.</p>
        </div>
      </section>

      {/* 3. STATS */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {[{n:"10,000+",l:"Repairs Completed"}, {n:"5000+",l:"Happy Customers"}, {n:"18+",l:"Cities Covered"}, {n:"24/7",l:"Emergency Support"}, {n:"98%",l:"Customer Satisfaction"}].map((s,i)=><div key={i}><div className="text-3xl font-black text-secondary">{s.n}</div><div className="text-xs uppercase">{s.l}</div></div>)}
        </div>
      </section>

      {/* 4. COMMON PROBLEMS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-black text-center text-primary mb-12">Common AC Problems We Fix</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {t:"AC Not Cooling", i:"/optimized/pexels-5691629.webp", s:"Warm air", c:"Low gas", r:"Recharge gas"},
              {t:"Water Leakage", i:"/optimized/pexels-5691632.webp", s:"Dripping inside", c:"Clogged drain", r:"Unblock drain"},
              {t:"Gas Leakage", i:"/optimized/pexels-5691631.webp", s:"Hissing sounds", c:"Cracked pipes", r:"Weld & refill"},
              {t:"Compressor Failure", i:"/optimized/pexels-4421110.webp", s:"Dead outdoor unit", c:"Bad capacitor", r:"Replace parts"},
              {t:"Thermostat Issues", i:"/optimized/pexels-5691624.webp", s:"Blank screen", c:"Wiring fault", r:"Recalibrate"},
              {t:"Electrical Faults", i:"/optimized/pexels-5691638.webp", s:"Tripping breaker", c:"Burnt contactor", r:"Replace wiring"},
              {t:"Weak Airflow", i:"/optimized/pexels-5445425.webp", s:"Low air output", c:"Dirty filters", r:"Clean system"},
              {t:"Frozen Coils", i:"/optimized/pexels-5691630.webp", s:"Ice on unit", c:"Restricted flow", r:"Thaw & clean"},
              {t:"Bad Smell", i:"/optimized/pexels-443383.webp", s:"Musty odor", c:"Mold growth", r:"Chemical wash"},
              {t:"Noisy AC", i:"/optimized/pexels-1065084.webp", s:"Rattling sounds", c:"Loose fan", r:"Tighten mounts"}
            ].map((p,i)=>(
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="relative h-40"><Image src={p.i} alt={p.t} fill className="object-cover"/></div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-primary">{p.t}</h3>
                  <p className="text-sm text-gray-600 mt-2"><strong>Symptoms:</strong> {p.s}<br/><strong>Causes:</strong> {p.c}<br/><strong>Repair Solution:</strong> {p.r}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TYPES OF AC */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl font-black text-primary mb-12">Types of AC We Repair</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {t:"Split AC Repair", i:"/optimized/pexels-5691632.webp", d:"Wall-mounted units"},
              {t:"Central AC Repair", i:"/optimized/pexels-5691657.webp", d:"Ducted systems"},
              {t:"Window AC Repair", i:"/optimized/pexels-5691629.webp", d:"Compact units"},
              {t:"Cassette AC Repair", i:"/optimized/pexels-5691631.webp", d:"Ceiling mounted"},
              {t:"Ducted AC Repair", i:"/optimized/pexels-4421110.webp", d:"Hidden cooling"},
              {t:"Inverter AC Repair", i:"/optimized/pexels-5691638.webp", d:"Energy-saving"},
              {t:"VRF Systems", i:"/optimized/pexels-5445425.webp", d:"Multi-zone"},
              {t:"VRV Systems", i:"/optimized/pexels-5691630.webp", d:"Climate control"}
            ].map((t,i)=>(
              <div key={i} className="bg-slate-50 p-4 rounded-2xl shadow-sm hover:bg-secondary hover:text-white transition group">
                <div className="relative h-24 mb-4 rounded-xl overflow-hidden"><Image src={t.i} alt={t.t} fill className="object-cover"/></div>
                <h3 className="font-black">{t.t}</h3>
                <p className="text-xs mt-1">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BRANDS */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-black text-primary mb-12">AC Brands We Repair</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Daikin","Carrier","LG","Samsung","York","Gree","Midea","Panasonic","Hitachi","TCL"].map((b,i)=>(
              <span key={i} className="px-6 py-3 bg-white font-black text-primary rounded-full shadow-sm">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 7 & 8. RESIDENTIAL / COMMERCIAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-8 rounded-3xl"><h2 className="text-3xl font-black mb-4">Residential AC Repair</h2><p>Villa, Apartment, Flat, Home AC Repair.</p><div className="relative h-48 mt-4"><Image src="/optimized/pexels-5691632.webp" fill className="object-cover rounded-2xl" alt="Res"/></div></div>
          <div className="bg-slate-50 p-8 rounded-3xl"><h2 className="text-3xl font-black mb-4">Commercial AC Repair</h2><p>Office, Restaurant, Hotel, Hospital, School, Warehouse, Mall.</p><div className="relative h-48 mt-4"><Image src="/optimized/pexels-5691657.webp" fill className="object-cover rounded-2xl" alt="Com"/></div></div>
        </div>
      </section>

      {/* 9. EMERGENCY */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <AlertTriangle size={64} className="text-secondary mx-auto mb-4"/>
          <h2 className="text-5xl font-black mb-4">Emergency AC Repair</h2>
          <p className="text-xl">24/7 Emergency AC Repair Across Saudi Arabia. Same Day Service. Fast Response. Certified HVAC Technicians.</p>
        </div>
      </section>

      {/* 10. PROCESS */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="container mx-auto"><h2 className="text-4xl font-black mb-12">Our AC Repair Process</h2><div className="flex flex-wrap justify-center gap-8">
          {[{s:1,t:"Inspection"},{s:2,t:"Diagnosis"},{s:3,t:"Estimate"},{s:4,t:"Repair"},{s:5,t:"Testing"},{s:6,t:"Approval"}].map((s)=><div key={s.s}><div className="w-16 h-16 bg-white rounded-full flex items-center justify-center font-black text-xl shadow mb-2">{s.s}</div><p className="font-black">{s.t}</p></div>)}
        </div></div>
      </section>

      {/* 11. SERVICE AREAS */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto"><h2 className="text-4xl font-black mb-12">Service Areas Across Saudi Arabia</h2><div className="flex flex-wrap justify-center gap-4">
          {["Riyadh","Jeddah","Dammam","Al Khobar","Makkah","Madinah","Taif","Jubail","Yanbu","Abha","Khamis Mushait","Najran","Tabuk","Hail","Al Ahsa","Buraidah","Jazan"].map((c,i)=><span key={i} className="px-6 py-3 bg-slate-50 rounded-xl font-black"><MapPin className="inline mr-2" size={16}/>{c}</span>)}
        </div></div>
      </section>

      {/* 12. WHY CHOOSE US */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="container mx-auto"><h2 className="text-4xl font-black mb-12">Why Choose Us</h2><div className="flex flex-wrap justify-center gap-4">
          {["Licensed Technicians","24/7 Support","Warranty","Genuine Parts","Affordable Prices","Fast Response","Same Day Service","Transparent Pricing"].map((w,i)=><span key={i} className="px-6 py-2 bg-white rounded-full shadow-sm font-black text-secondary"><Check className="inline mr-2" size={14}/>{w}</span>)}
        </div></div>
      </section>

      {/* 13. REVIEWS */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto max-w-5xl"><h2 className="text-4xl font-black mb-12">Customer Reviews</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((r)=><div key={r} className="p-6 bg-slate-50 rounded-2xl"><div className="flex justify-center text-yellow-400 mb-2"><Star/><Star/><Star/><Star/><Star/></div><p className="italic">"Excellent 24/7 emergency service. Fixed my AC the same day!"</p><p className="font-black mt-4">Happy Customer</p></div>)}
        </div></div>
      </section>

      {/* 14. FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-4xl"><h2 className="text-4xl font-black text-center mb-12">Frequently Asked Questions</h2><div className="space-y-4">
          {faqs.map((f,i)=><div key={i} className="bg-white p-6 rounded-xl shadow-sm"><h3 className="font-black text-lg mb-2">{f.q}</h3><p className="text-gray-600">{f.a}</p></div>)}
        </div></div>
      </section>

      {/* 15. LONG SEO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-black mb-6">Comprehensive AC Repair Services Across Saudi Arabia</h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>Our expert <strong>AC Repair Saudi Arabia</strong> services cover everything from <strong>Emergency AC Repair</strong> to routine <strong>HVAC Repair</strong> for residential and commercial properties. Whether you need <strong>Split AC Repair</strong>, <strong>Central AC Repair</strong>, or <strong>Air Conditioner Repair</strong> for window and cassette units, our highly trained <strong>AC Technician</strong> teams are available 24/7. We specialize in comprehensive <strong>Cooling System Repair</strong> and precise <strong>AC Troubleshooting</strong> to restore your comfort swiftly.</p>
            <p>We pride ourselves on offering the best <strong>HVAC Services</strong> in the region. By maintaining a large stock of genuine parts, our technicians can quickly perform a wide array of services including compressor replacement, refrigerant gas refill, evaporator coil cleaning, and thermostat calibration. From villas to large corporate warehouses, our robust infrastructure allows us to dispatch experts across major cities including Riyadh, Jeddah, Dammam, and Makkah.</p>
            <p>Don't let a faulty air conditioning unit disrupt your daily life or business operations. Regular maintenance combined with rapid emergency responses ensures your system operates at peak efficiency, lowering electricity bills and extending the life of your equipment. Trust the experts for all your HVAC needs in Saudi Arabia.</p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
;
fs.writeFileSync('src/app/ac-repair/page.tsx', content);
