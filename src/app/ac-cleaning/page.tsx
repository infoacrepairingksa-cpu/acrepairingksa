"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingActions from "@/components/FloatingActions";
import { motion } from "framer-motion";
import { 
  Phone, ShieldCheck, Clock, Zap, CheckCircle2, ArrowRight, Star, MapPin, 
  Droplets, Sparkles, Wind, Snowflake, Thermometer, Trash2, Filter, 
  Settings, Gauge, LayoutGrid, Users, Briefcase, Building2, Home, Fan,
  BadgeCheck, Hammer, CalendarCheck2, Maximize, Activity, Search, 
  ThumbsUp, MessageSquare, Heart, ZapOff, MousePointer2, ShieldAlert, 
  Wrench, Smartphone, AlertTriangle, Check
} from "lucide-react";
import { cn } from "@/lib/utils";
import Schema, { generateServiceSchema, generateBreadcrumbSchema } from "@/components/Schema";

export default function ACCleaningPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBookNow = () => setIsModalOpen(true);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Schema 
        type="Service" 
        data={generateServiceSchema(
          "Deep AC Cleaning Riyadh",
          "Professional AC cleaning and sanitization services in Riyadh. We use high-pressure water and antibacterial chemical spray to restore ice-cold cooling.",
          "/ac-cleaning"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={generateBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "AC Cleaning", item: "/ac-cleaning" }
        ])} 
      />
      <Navbar onBookNow={handleBookNow} />

      {/* 1. ULTRA-PREMIUM HERO (Asymmetric & Dynamic) */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 bg-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/[0.03] -skew-x-12 translate-x-20 pointer-events-none" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" 
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-8"
            >
              <div className="inline-flex items-center gap-3 bg-secondary/10 text-secondary px-6 py-2.5 rounded-full w-fit">
                <Sparkles size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Riyadh's #1 Hygiene Experts</span>
              </div>
              <h1 className="text-[52px] md:text-[72px] lg:text-[84px] font-heading font-black text-primary leading-[0.95] tracking-tight">
                Deep AC <span className="text-secondary text-stroke">Cleaning</span> & Sanitization in Riyadh
              </h1>
              <p className="text-xl md:text-2xl text-primary/60 font-medium max-w-xl leading-relaxed italic">
                “Professional AC cleaning that removes 99.9% of Riyadh's dust and bacteria. Restore your cooling today.”
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                <button onClick={handleBookNow} className="w-full sm:w-auto px-12 py-6 bg-secondary text-white rounded-[24px] font-black text-lg tracking-widest transition-all shadow-2xl hover:-translate-y-2 border-b-4 border-blue-700 active:scale-95 flex items-center justify-center gap-4">
                  <Zap size={20} /> Book Cleaning
                </button>
                <a href="tel:+966501234567" className="w-full sm:w-auto px-12 py-6 bg-primary text-white rounded-[24px] font-black text-lg tracking-widest transition-all shadow-xl hover:-translate-y-2 border-b-4 border-slate-800 active:scale-95 flex items-center justify-center gap-4">
                  <Phone size={20} /> Call Expert
                </a>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-primary tracking-tighter leading-none">5000+</span>
                  <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mt-1">Deep Washes</span>
                </div>
                <div className="w-px h-10 bg-gray-100" />
                <div className="flex items-center gap-3">
                   <div className="flex gap-1"><Star size={12} fill="#0073E6" className="text-secondary" /> <Star size={12} fill="#0073E6" className="text-secondary" /> <Star size={12} fill="#0073E6" className="text-secondary" /> <Star size={12} fill="#0073E6" className="text-secondary" /> <Star size={12} fill="#0073E6" className="text-secondary" /></div>
                   <span className="text-xs font-bold text-primary/40 tracking-widest">4.9/5 Rating</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[80px] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,115,230,0.2)] border-[16px] border-white group h-[700px]">
                <Image 
                  src="/optimized/pexels-5691632.webp" 
                  alt="AC Cleaning" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/20">
                   <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-1">
                         <span className="text-white font-black text-2xl tracking-tight leading-none">Healthy Air</span>
                         <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Zero Dust Policy</span>
                      </div>
                      <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-xl"><Droplets size={24} /></div>
                   </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border border-gray-50 animate-bounce">
                 <span className="text-secondary font-black text-4xl">100%</span>
                 <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest">Sanitized</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE DUST CRISIS (Narrative Intro) */}
      <section className="py-40 bg-[#FAFAFA] relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0073E6_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col gap-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
               <div className="lg:col-span-8">
                  <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Riyadh Dust Report</span>
                  <h2 className="text-[42px] md:text-[56px] font-heading font-black text-primary leading-tight tracking-tighter">
                    Why Regular Cleaning is a <br /><span className="text-secondary italic">Must in Riyadh</span>
                  </h2>
               </div>
               <div className="lg:col-span-4">
                  <p className="text-lg text-primary/60 font-medium leading-relaxed border-l-4 border-secondary pl-8">
                    Riyadh's desert climate causes rapid sand buildup inside your AC. This doesn't just block air—it creates a breeding ground for bacteria and mold.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { t: "Better Health", d: "Removes allergens & bacteria that cause respiratory issues.", i: <Heart /> },
                 { t: "Colder Air", d: "Clean coils transfer heat 40% more effectively.", i: <Snowflake /> },
                 { t: "Lower Bills", d: "Dirty ACs use 30% more energy to cool your home.", i: <Zap /> }
               ].map((x, i) => (
                 <div key={i} className="flex flex-col gap-6 p-12 bg-white rounded-[48px] shadow-sm hover:shadow-xl transition-all">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">{x.i}</div>
                    <h3 className="text-2xl font-heading font-black text-primary tracking-tight">{x.t}</h3>
                    <p className="text-primary/50 font-medium leading-relaxed">{x.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLEANING SERVICES (Interactive Grid) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center gap-6 mb-24">
             <span className="bg-secondary/10 text-secondary font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2.5 rounded-full">Service Menu</span>
             <h2 className="text-[46px] md:text-[64px] font-heading font-black text-primary tracking-tighter leading-tight">Elite Deep Cleaning <br /> For Every Unit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { t: "Split AC Cleaning", d: "Deep jet washing for wall-mounted units.", i: <LayoutGrid /> },
              { t: "Central AC System", d: "Full commercial & villa central cleaning.", i: <Building2 /> },
              { t: "Duct Sanitization", d: "Killing bacteria inside the airflow vents.", i: <Wind /> },
              { t: "Coil Deep Wash", d: "Power flush for the evaporator coils.", i: <Droplets /> },
              { t: "Filter Treatment", d: "Anti-bacterial wash for all mesh filters.", i: <Filter /> },
              { t: "Outdoor Condenser", d: "Removing sand buildup from external units.", i: <Fan /> },
              { t: "Drain Pipe Flush", d: "Preventing water leakage and blockages.", i: <Activity /> },
              { t: "Full Sanitization", d: "Hospital-grade anti-mold treatment.", i: <ShieldCheck /> }
            ].map((s, idx) => (
              <div key={idx} className="group relative p-12 bg-[#FAFAFA] rounded-[56px] border border-gray-100 flex flex-col gap-10 overflow-hidden transition-all duration-500 hover:bg-primary hover:-translate-y-4">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full group-hover:bg-white/5 transition-colors" />
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm transition-transform group-hover:rotate-12">{s.i}</div>
                <div className="flex flex-col gap-4">
                   <h3 className="text-2xl font-heading font-black text-primary group-hover:text-white tracking-tight leading-tight">{s.t}</h3>
                   <p className="text-primary/40 group-hover:text-white/50 font-medium text-sm leading-relaxed">{s.d}</p>
                </div>
                <button onClick={handleBookNow} className="text-secondary font-black uppercase tracking-widest text-[10px] flex items-center gap-3 group-hover:text-white">Book Cleaning <ArrowRight size={14} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE CLEANING PROCESS (Visual Step-by-Step) */}
      <section className="py-40 bg-primary text-white relative">
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none"><Activity size={400} /></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-12">
               <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px]">The Hygiene Protocol</span>
               <h2 className="text-[46px] md:text-[64px] font-heading font-black text-white leading-[1.1] tracking-tighter">Our 6-Step <br /><span className="text-secondary">Deep Clean</span> Process</h2>
               <div className="flex flex-col gap-6">
                 {[
                   { s: "01", t: "Booking Confirmation", d: "Instant WhatsApp & Call verification." },
                   { s: "02", t: "Technician Arrival", i: "30-Min promise across Riyadh." },
                   { s: "03", t: "Unit Inspection", d: "Checking performance before cleaning." },
                   { s: "04", t: "Pressure Wash", d: "High-pressure jet washing for deep dirt." },
                   { s: "05", t: "Sanitization", d: "Medical-grade anti-bacterial coating." },
                   { s: "06", t: "Performance Test", d: "Ensuring icy-cold air delivery." }
                 ].map((p, idx) => (
                   <div key={idx} className="flex items-start gap-8 group">
                      <span className="text-3xl font-heading font-black text-secondary/30 group-hover:text-secondary transition-colors">{p.s}</span>
                      <div className="flex flex-col gap-1">
                         <h3 className="text-xl font-heading font-black text-white">{p.t}</h3>
                         <p className="text-white/40 font-medium text-sm leading-relaxed">{p.d || p.i}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-10 bg-secondary/20 blur-[120px] pointer-events-none rounded-full" />
               <div className="relative bg-white/5 border border-white/10 p-16 rounded-[64px] backdrop-blur-3xl flex flex-col items-center text-center gap-10">
                  <Sparkles size={80} className="text-secondary animate-pulse" />
                  <h3 className="text-3xl font-heading font-black leading-tight tracking-tight">Ready to Restore <br /> Your Air Quality?</h3>
                  <button onClick={handleBookNow} className="px-12 py-7 bg-secondary text-white rounded-[24px] font-black uppercase tracking-widest shadow-2xl hover:bg-white hover:text-secondary transition-all border-b-4 border-blue-700">Schedule Service Now</button>
                  <p className="text-white/40 font-bold text-xs uppercase tracking-widest">Available 24/7 Across Riyadh</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RESIDENTIAL vs COMMERCIAL (Targeted Selection) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             <div className="relative p-16 bg-[#FAFAFA] rounded-[64px] flex flex-col gap-10 overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700"><Home size={200} /></div>
                <span className="bg-secondary/10 text-secondary px-6 py-2 rounded-full w-fit text-[10px] font-black uppercase tracking-widest">For Homes</span>
                <h3 className="text-[36px] md:text-[48px] font-heading font-black text-primary leading-[1.1] tracking-tighter">Villa & Apartment <br /> Deep Cleaning</h3>
                <p className="text-primary/50 text-lg font-medium leading-relaxed max-w-sm">We cover all Riyadh neighborhoods including Al Malqa, Hittin, and Al Nakheel with 30-min response.</p>
                <button onClick={handleBookNow} className="w-fit flex items-center gap-4 text-primary font-black uppercase tracking-widest text-sm group-hover:text-secondary transition-all">Book Home Cleaning <ArrowRight size={20} /></button>
             </div>

             <div className="relative p-16 bg-primary text-white rounded-[64px] flex flex-col gap-10 overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-700"><Building2 size={200} /></div>
                <span className="bg-white/10 text-secondary px-6 py-2 rounded-full w-fit text-[10px] font-black uppercase tracking-widest">For Business</span>
                <h3 className="text-[36px] md:text-[48px] font-heading font-black text-white leading-[1.1] tracking-tighter">Commercial HVAC <br /> Maintenance</h3>
                <p className="text-white/50 text-lg font-medium leading-relaxed max-w-sm">Specialized cleaning for offices, restaurants, and retail stores across Riyadh's business districts.</p>
                <button onClick={handleBookNow} className="w-fit flex items-center gap-4 text-white font-black uppercase tracking-widest text-sm group-hover:text-secondary transition-all">Get B2B Quote <ArrowRight size={20} /></button>
             </div>
          </div>
        </div>
      </section>

      {/* 6. AREAS WE SERVE (District Map) */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center gap-6 mb-24">
             <span className="bg-secondary/10 text-secondary font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2.5 rounded-full">Local Coverage</span>
             <h2 className="text-[46px] md:text-[64px] font-heading font-black text-primary tracking-tighter leading-tight">Every District In Riyadh</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {["Al Olaya", "Al Malaz", "Al Yasmin", "Al Narjis", "Al Sahafa", "Al Malqa", "Al Aqiq", "Hittin", "Al Nakheel", "Al Rawdah", "Al Sulaymaniyah", "Al Rabwah", "Al Munsiyah", "Al Qadisiyah", "Al Shifa"].map(area => (
              <div key={area} className="p-10 bg-white rounded-[40px] border border-gray-50 flex flex-col items-center gap-5 group hover:border-secondary transition-all cursor-pointer shadow-sm text-center">
                <MapPin size={28} className="text-secondary group-hover:scale-125 transition-transform duration-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS (The Mosaic) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
             <div className="lg:col-span-1 flex flex-col gap-10">
                <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px]">Real Feedback</span>
                <h2 className="text-[42px] font-heading font-black text-primary leading-tight tracking-tighter">What Our <br /> Clients Think</h2>
                <p className="text-lg text-primary/50 font-medium leading-relaxed">Join 5000+ happy residents in Riyadh who breathe fresh air every day.</p>
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-2"><Star fill="#0073E6" className="text-secondary" /> <span className="font-black text-3xl">4.9/5</span></div>
                   <span className="text-xs font-black uppercase tracking-widest text-primary/40">Average Google Rating</span>
                </div>
             </div>
             <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { name: "Yousef", text: "Dust was a big issue for my kids. After their deep cleaning, the air feels completely different. Highly professional." },
                  { name: "Mona Al-Suwaidi", text: "Fastest response I've had in Riyadh. The team arrived on time and cleaned everything perfectly. No mess left." },
                  { name: "Fahad", text: "My electricity bill dropped by 200 SAR after they cleaned my central AC coils. It's an investment!" },
                  { name: "Sara", text: "Excellent sanitization service. They use high-pressure pumps that really get the dirt out. Very polite team." }
                ].map((r, i) => (
                  <div key={i} className="p-12 bg-[#FAFAFA] rounded-[56px] border border-gray-50 flex flex-col gap-10 shadow-sm">
                    <p className="text-lg text-primary/60 font-sans italic leading-relaxed">"{r.text}"</p>
                    <div className="flex items-center gap-5">
                       <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-black">{r.name[0]}</div>
                       <span className="font-heading font-black text-primary">{r.name}</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL HIGH-CONVERSION CTA */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="relative bg-primary p-12 md:p-24 rounded-[80px] overflow-hidden text-center flex flex-col items-center gap-12 shadow-[0_60px_120px_-20px_rgba(15,23,42,0.4)]">
              <div className="absolute top-0 right-0 p-32 opacity-5 rotate-12 pointer-events-none scale-150"><Droplets size={400} /></div>
              <div className="absolute bottom-0 left-0 p-32 opacity-5 -rotate-12 pointer-events-none scale-150"><Wind size={400} /></div>
              
              <div className="relative z-10 flex flex-col gap-6">
                 <span className="bg-secondary text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-xl w-fit mx-auto">Instant Booking</span>
                 <h2 className="text-[44px] md:text-[68px] lg:text-[76px] font-heading font-black text-white leading-[0.95] tracking-tighter">Ready For <br /><span className="text-secondary">Fresh Air?</span></h2>
              </div>
              <p className="text-xl md:text-2xl font-medium text-white/70 max-w-2xl leading-relaxed relative z-10">Don't wait for the next dust storm. Book your professional deep cleaning today and restore your AC's performance.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl relative z-10">
                 <button onClick={handleBookNow} className="flex-1 px-12 py-7 bg-secondary text-white rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-5 border-b-4 border-blue-700 shadow-2xl hover:bg-white hover:text-secondary transition-all">
                    <Zap size={24} /> Book Now
                 </button>
                 <a href="tel:+966501234567" className="flex-1 px-12 py-7 bg-white text-primary rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-5 border-b-4 border-slate-200 shadow-2xl hover:bg-secondary hover:text-white transition-all">
                    <Phone size={24} fill="currentColor" /> Call Expert
                 </a>
              </div>
           </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName="AC Cleaning" />
    </main>
  );
}
