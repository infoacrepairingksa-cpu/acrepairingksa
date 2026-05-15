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
  Wind, Snowflake, Gauge, Activity, Search, ThumbsUp, Smartphone, 
  AlertTriangle, Users, Building2, Home, Check, BadgeCheck, Sparkles, 
  Filter, Trash2, ShieldPlus, Droplets, Heart, Microscope, Waves, 
  Layers, Maximize, Thermometer, ShieldAlert, Scan, Boxes,
  Zap as ZapIcon, CheckCircle, RefreshCcw, Droplet, LayoutGrid,
  Wrench, Bath, Pipette as Pipe, Utensils, Construction, Settings,
  Droplets as WaterDrops, Siren
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function PlumbingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBookNow = () => setIsModalOpen(true);

  const SectionHeading = ({ sub, title, center = true, light = false }: any) => (
    <div className={cn("flex flex-col gap-4 mb-16", center ? "items-center text-center" : "items-start text-left")}>
      <span className={cn("font-black tracking-[0.3em] uppercase text-[10px] px-5 py-2 rounded-full w-fit", light ? "bg-white/10 text-secondary border border-white/20" : "bg-secondary/10 text-secondary")}>{sub}</span>
      <h2 className={cn("text-[32px] md:text-[40px] lg:text-[48px] font-heading font-black leading-[1.2] tracking-tight max-w-3xl", light ? "text-white" : "text-primary")}>{title}</h2>
    </div>
  );

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Navbar onBookNow={handleBookNow} />

      {/* 1. CLEAN & BALANCED HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/[0.02] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                 <div className="h-px w-10 bg-secondary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Riyadh's Trusted Flow</span>
              </div>
              <h1 className="text-[52px] md:text-[72px] lg:text-[86px] font-heading font-black text-primary leading-[0.9] tracking-tighter">
                24/7 Emergency <span className="text-secondary">Plumbing Services</span> in Riyadh
              </h1>
              <p className="text-lg md:text-xl text-primary/60 font-medium max-w-lg leading-relaxed">
                Expert plumbers for leak repairs, pipe installation, and complete water system maintenance in Riyadh.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5 mt-2">
                <button onClick={handleBookNow} className="w-full sm:w-auto px-10 py-6 bg-secondary text-white rounded-2xl font-black text-base tracking-widest transition-all shadow-xl hover:bg-primary active:scale-95 flex items-center justify-center gap-4">
                  <Wrench size={20} /> Book Plumbing
                </button>
                <a href="tel:+966501234567" className="w-full sm:w-auto px-10 py-6 bg-white text-primary border-2 border-gray-100 rounded-2xl font-black text-base tracking-widest transition-all shadow-lg hover:border-secondary hover:text-secondary active:scale-95 flex items-center justify-center gap-4">
                  <Siren size={20} /> Emergency Call
                </a>
              </div>

              <div className="flex items-center gap-10 pt-8 border-t border-gray-100">
                 <div className="flex flex-col gap-1">
                    <span className="text-2xl font-heading font-black text-primary leading-none">100%</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Quality Fix</span>
                 </div>
                 <div className="w-px h-10 bg-gray-100" />
                 <div className="flex flex-col gap-1">
                    <span className="text-2xl font-heading font-black text-secondary leading-none">60 Min</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Response</span>
                 </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl border-4 border-white group h-[600px]">
                <Image 
                  src="/optimized/pexels-2219024.webp" 
                  alt="Plumbing Service" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-[32px] shadow-xl border border-gray-50 flex items-center gap-4">
                 <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white shadow-lg"><Check size={24} /></div>
                 <span className="text-[10px] font-black text-primary uppercase tracking-widest">Certified Team</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SPACIOUS INTRO SECTION */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
               <SectionHeading sub="Prevention & Care" title="Expert Plumbing For Riyadh Homes" center={false} />
               <p className="text-lg text-primary/50 font-medium leading-relaxed italic border-l-4 border-secondary pl-6">
                  Water leaks can destroy your building's structure in days. Our professional plumbers provide fast, reliable repair and installation services to keep your home safe and dry.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  {[
                    { t: "Residential", d: "Homes & Villas", i: <Home /> },
                    { t: "Commercial", d: "Offices & Malls", i: <Building2 /> }
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-5 p-6 bg-white rounded-3xl shadow-sm border border-gray-50 group hover:border-secondary transition-all">
                       <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">{x.i}</div>
                       <div className="flex flex-col"><span className="font-heading font-black text-primary text-lg leading-none">{x.t}</span><span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">{x.d}</span></div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative rounded-[40px] overflow-hidden shadow-xl h-[500px]">
               <Image 
                 src="/optimized/pexels-5445425.webp" 
                 alt="Professional Plumber" 
                 fill 
                 className="object-cover" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PLUMBING SERVICES (Clean Grid) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Our Expertise" title="Complete Plumbing Solutions" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { t: "Water Leak Repair", i: <Droplet /> },
              { t: "Drain Cleaning", i: <Waves /> },
              { t: "Pipe Replacement", i: <Settings /> },
              { t: "Bathroom Fixes", i: <Bath /> },
              { t: "Kitchen Plumbing", i: <Utensils /> },
              { t: "Water Tank Setup", i: <Droplets /> },
              { t: "Faucet & Sink", i: <Settings /> },
              { t: "Toilet Repair", i: <Bath /> }
            ].map((s, idx) => (
              <div key={idx} className="p-8 bg-[#F8FAFC] rounded-[32px] border border-gray-100 flex flex-col gap-6 group hover:bg-secondary transition-all shadow-sm">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 transition-transform mb-2">{s.i}</div>
                <div className="flex flex-col gap-2">
                   <h3 className="text-xl font-heading font-black text-primary group-hover:text-white tracking-tight">{s.t}</h3>
                   <button onClick={handleBookNow} className="text-[10px] font-black uppercase tracking-widest text-secondary/60 group-hover:text-white flex items-center gap-2 mt-2">Book Now <ArrowRight size={12} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMON PROBLEMS (Diagnostic Strips) */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Warning Signs" title="Plumbing Problems We Fix" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { t: "Leaking Pipes", i: <Droplet /> },
              { t: "Blocked Drains", i: <Trash2 /> },
              { t: "Low Pressure", i: <Activity /> },
              { t: "Overflowing Toilet", i: <AlertTriangle /> },
              { t: "Broken Faucets", i: <Settings /> },
              { t: "Water Heater", i: <Snowflake /> },
              { t: "Sink Blockage", i: <Utensils /> },
              { t: "Bathroom Leak", i: <Bath /> }
            ].map((v, idx) => (
              <div key={idx} className="p-8 bg-white rounded-[24px] border border-gray-100 flex items-center gap-6 group hover:border-secondary transition-all shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">{v.i}</div>
                <span className="text-lg font-heading font-black text-primary tracking-tight">{v.t}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center"><button onClick={handleBookNow} className="px-12 py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all">Fix My Plumbing Issue</button></div>
        </div>
      </section>

      {/* 5. EMERGENCY PLUMBING (Urgency Strip) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="relative bg-primary rounded-[48px] p-12 md:p-20 overflow-hidden flex flex-col items-center text-center gap-8 shadow-2xl">
              <span className="bg-secondary text-white px-7 py-2.5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] italic shadow-xl">Critical Response</span>
              <h2 className="text-[36px] md:text-[52px] font-heading font-black text-white leading-tight tracking-tight">24/7 Emergency <br /><span className="text-secondary">Plumbing Support</span></h2>
              <p className="text-lg md:text-xl font-medium text-white/60 max-w-2xl leading-relaxed">Burst pipes or total blockages? Our emergency plumbers are ready 24/7 to reach your Riyadh home in minutes.</p>
              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl relative z-10 mt-4">
                 <button onClick={handleBookNow} className="flex-1 px-10 py-6 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl hover:bg-white hover:text-secondary transition-all border-b-4 border-blue-700">Book Emergency Plumber</button>
                 <a href="tel:+966501234567" className="flex-1 px-10 py-6 bg-white text-primary rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl hover:bg-secondary hover:text-white transition-all border-b-4 border-slate-100">Call Plumber Now</a>
              </div>
           </div>
        </div>
      </section>

      {/* 6. OUR PROCESS (Clean Timeline) */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="The Protocol" title="Our Professional Workflow" />
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
             {[
               { t: "Booking", d: "Fast confirmation." },
               { t: "Inspection", d: "Full diagnostic." },
               { t: "Diagnosis", d: "Locating drips." },
               { t: "Repair", d: "Professional fixing." },
               { t: "Testing", d: "Checking flow." },
               { t: "Audit", d: "Final safety." }
             ].map((p, idx) => (
               <div key={idx} className="relative z-10 flex flex-col gap-4 bg-white p-8 rounded-[32px] border border-gray-100 hover:border-secondary transition-all shadow-sm text-center h-full">
                  <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-heading font-black text-lg shadow-lg mx-auto leading-none">{idx+1}</div>
                  <div className="flex flex-col gap-1">
                     <h3 className="text-lg font-heading font-black text-primary tracking-tight leading-tight">{p.t}</h3>
                     <p className="text-[9px] font-bold text-primary/30 uppercase tracking-widest">{p.d}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
               <SectionHeading sub="Elite Choice" title="Riyadh's Specialists For Water Systems" center={false} />
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                  {[
                    "Experienced Plumbers", "Fast Riyadh Coverage", "Advanced Tools", "Affordable Pricing", 
                    "Commercial Expertise", "Quality Workmanship", "Emergency Support", "Satisfaction Guaranteed"
                  ].map((w, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-primary/70 font-bold text-base"><CheckCircle2 size={20} className="text-secondary shrink-0" /> {w}</div>
                  ))}
               </div>
               <button onClick={handleBookNow} className="w-fit px-12 py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-secondary transition-all">Hire Plumbing Experts</button>
            </div>
            <div className="relative rounded-[40px] overflow-hidden shadow-xl h-[550px]">
               <Image 
                 src="/optimized/pexels-2219024.webp" 
                 alt="Plumbing Team" 
                 fill 
                 className="object-cover" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* 8. AREAS WE SERVE */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="Local Reach" title="Plumbing Services Across Riyadh" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Al Olaya", "Al Malaz", "Al Yasmin", "Al Narjis", "Al Sahafa", "Al Malqa", "Al Aqiq", "Hittin", "Al Nakheel", "Al Rawdah", "Al Sulaymaniyah", "Al Rabwah", "Al Munsiyah", "Al Qadisiyah", "Al Shifa"].map(area => (
              <div key={area} className="p-8 bg-white rounded-[24px] border border-gray-50 flex flex-col items-center gap-4 group hover:border-secondary transition-all cursor-pointer shadow-sm text-center">
                <MapPin size={24} className="text-secondary group-hover:scale-125 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LEAK DETECTION (Clean Educational Card) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="relative bg-[#F8FBFF] p-12 md:p-20 rounded-[56px] flex flex-col lg:flex-row items-center gap-16 border border-secondary/5 shadow-inner">
              <div className="flex-1 flex flex-col gap-8 text-left">
                 <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px]">The Diagnostic Audit</span>
                 <h2 className="text-[32px] md:text-[48px] font-heading font-black text-primary leading-tight tracking-tight">Stop Hidden <br /><span className="text-secondary italic">Water Leaks</span> Now</h2>
                 <p className="text-lg text-primary/50 font-medium leading-relaxed italic border-l-4 border-secondary/20 pl-6">Hidden leaks waste thousands of liters and destroy structure. We use sonar detection to locate leaks behind walls without damaging your home.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Sonar Detection", "Zero Wall Damage", "Reduce Water Waste", "Protect Structures", "Fast Repair Solutions", "Property Shield"].map(h => (
                       <div key={h} className="flex items-center gap-2 text-primary font-bold text-base"><Droplet size={18} className="text-secondary" /> {h}</div>
                    ))}
                 </div>
                 <button onClick={handleBookNow} className="w-fit px-10 py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg hover:bg-secondary transition-all">Detect Water Leaks Today</button>
              </div>
              <div className="flex-1 rounded-[40px] overflow-hidden shadow-xl h-[450px] relative">
                 <Image 
                   src="/optimized/pexels-5445425.webp" 
                   alt="Leak Detection" 
                   fill 
                   className="object-cover" 
                 />
              </div>
           </div>
        </div>
      </section>

      {/* 10. REVIEWS */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="Customer Trust" title="Residents Trust Our Work" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Abdullah", text: "I had a burst pipe emergency at night. Their plumber arrived in 30 minutes and fixed it perfectly. Highly professional!" },
              { name: "Faisal", text: "Best plumbing service in Riyadh. They fixed a hidden leak that other companies couldn't find. Very honest and affordable." },
              { name: "Reema", text: "They renovated my entire bathroom plumbing. The workmanship is excellent and they left everything very clean. 5-star!" }
            ].map((r, idx) => (
              <div key={idx} className="p-12 bg-white rounded-[40px] border border-gray-50 flex flex-col gap-10 shadow-sm hover:shadow-xl transition-all text-left">
                <div className="flex gap-1">{[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#0073E6" stroke="#0073E6" />)}</div>
                <p className="text-lg text-primary/50 font-sans italic leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-5">
                   <div className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">{r.name[0]}</div>
                   <div className="flex flex-col">
                      <span className="font-heading font-black text-primary text-lg tracking-tight">{r.name}</span>
                      <span className="text-[10px] font-black text-secondary uppercase tracking-widest">Verified Work</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SectionHeading sub="Common Questions" title="Plumbing FAQs" />
          <div className="flex flex-col gap-6 text-left">
            {[
              { q: "Do you provide emergency plumbing services?", a: "Yes, we provide 24/7 emergency support for burst pipes, blockages, and major leaks in Riyadh." },
              { q: "How quickly can a plumber arrive?", a: "We aim to reach any location in Riyadh within 30 to 60 minutes for emergency calls." },
              { q: "Do you repair hidden water leaks?", a: "Yes, we use advanced diagnostic tools to find and fix hidden leaks without damaging walls." },
              { q: "Do you provide commercial plumbing services?", a: "Absolutely. We handle plumbing maintenance for offices, restaurants, and malls across Riyadh." }
            ].map((f, idx) => (
              <div key={idx} className="p-10 bg-[#F8FAFC] rounded-[32px] border border-gray-100 hover:border-secondary transition-all shadow-sm cursor-pointer group">
                <h3 className="text-xl font-heading font-black text-primary mb-4 leading-tight tracking-tight group-hover:text-secondary">{f.q}</h3>
                <p className="text-primary/50 text-lg font-medium leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-32 bg-white flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-6xl w-full bg-primary p-12 md:p-20 rounded-[64px] text-white text-center flex flex-col items-center gap-10 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
             <span className="bg-secondary text-white px-8 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-xl italic">Total Water Control</span>
             <h2 className="text-[36px] md:text-[52px] lg:text-[64px] font-heading font-black text-white leading-[1.1] tracking-tight">Need Professional <br /><span className="text-secondary">Plumbing Fix?</span></h2>
          </div>
          <p className="text-lg md:text-xl font-medium text-white/60 max-w-2xl leading-relaxed relative z-10">Book experienced plumbers today for fast, reliable & affordable plumbing solutions for your home or business.</p>
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl relative z-10">
             <button onClick={handleBookNow} className="flex-1 px-12 py-6 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 border-b-4 border-blue-700 shadow-xl hover:bg-white hover:text-secondary transition-all"><Wrench size={24} /> Book Service</button>
             <a href="tel:+966501234567" className="flex-1 px-12 py-6 bg-white text-primary rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 border-b-4 border-slate-100 shadow-xl hover:bg-secondary hover:text-white transition-all"><Phone size={24} fill="currentColor" /> Call Plumber</a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName="Plumbing" />
    </main>
  );
}
