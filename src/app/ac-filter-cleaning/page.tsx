"use client";

import React, { useState } from "react";
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
  Zap as ZapIcon, CheckCircle, RefreshCcw, Droplet, LayoutGrid
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ACFilterCleaningPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBookNow = () => setIsModalOpen(true);

  const SectionHeading = ({ sub, title, center = true, light = false }: any) => (
    <div className={cn("flex flex-col gap-4 mb-20", center ? "items-center text-center" : "items-start text-left")}>
      <span className={cn("font-black tracking-[0.5em] uppercase text-[10px] px-6 py-2.5 rounded-full w-fit shadow-sm border border-secondary/10", light ? "bg-white/10 text-secondary border-white/20" : "bg-secondary/10 text-secondary")}>{sub}</span>
      <h2 className={cn("text-[42px] md:text-[64px] lg:text-[76px] font-heading font-black leading-[0.95] tracking-tighter max-w-4xl", light ? "text-white" : "text-primary")}>{title}</h2>
    </div>
  );

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Navbar onBookNow={handleBookNow} />

      {/* 1. ASYMMETRIC MESH HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 bg-white overflow-hidden">
        {/* Dynamic Mesh Background */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary/[0.02] skew-x-12 translate-x-32 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,115,230,1)_1px,transparent:1px),linear-gradient(90deg,rgba(0,115,230,1)_1px,transparent:1px)] [background-size:32px:32px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-12">
              <div className="flex items-center gap-4">
                 <div className="h-px w-16 bg-secondary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">The Purity Standard</span>
              </div>
              <h1 className="text-[62px] md:text-[88px] lg:text-[104px] font-heading font-black text-primary leading-[0.85] tracking-tighter">
                AC <span className="text-secondary italic text-stroke">Filter Cleaning</span> & Air Health in Riyadh
              </h1>
              <p className="text-xl md:text-2xl text-primary/60 font-medium max-w-xl leading-relaxed italic border-l-4 border-secondary/20 pl-8">
                “Total filter deep-wash and sanitization. Restore 100% of your AC's airflow and stop breathing Riyadh's dust today.”
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                <button onClick={handleBookNow} className="w-full sm:w-auto px-12 py-7 bg-secondary text-white rounded-[24px] font-black text-lg tracking-widest transition-all shadow-2xl hover:-translate-y-2 border-b-4 border-blue-700 active:scale-95 flex items-center justify-center gap-5">
                  <Filter size={24} /> Book Filter Cleaning
                </button>
                <a href="tel:+966501234567" className="w-full sm:w-auto px-12 py-7 bg-primary text-white rounded-[24px] font-black text-lg tracking-widest transition-all shadow-xl hover:-translate-y-2 border-b-4 border-slate-800 active:scale-95 flex items-center justify-center gap-5">
                  <Phone size={24} /> Call Experts
                </a>
              </div>

              <div className="flex items-center gap-12 pt-8 border-t border-gray-100">
                 <div className="flex flex-col">
                    <span className="text-3xl font-black text-primary leading-none tracking-tighter">100%</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">Airflow Restored</span>
                 </div>
                 <div className="w-px h-12 bg-gray-100" />
                 <div className="flex flex-col">
                    <span className="text-3xl font-black text-secondary leading-none tracking-tighter">Same Day</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">Response</span>
                 </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className="relative group">
              <div className="relative z-10 rounded-[80px] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,115,230,0.3)] border-[16px] border-white transition-transform duration-1000 group-hover:scale-105">
                <img src="/optimized/pexels-5691657.webp" alt="AC Filter Cleaning" className="w-full h-[750px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-md p-10 rounded-[48px] border border-white/20 text-center">
                   <div className="flex flex-col gap-2">
                      <span className="text-white font-black text-4xl tracking-tight leading-none italic">Icy Fresh Blast</span>
                      <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.4em]">Restored In Minutes</span>
                   </div>
                </div>
              </div>
              
              {/* Floating Mesh Badge */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border border-gray-50 animate-bounce-slow">
                 <Filter size={64} className="text-secondary" />
                 <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mt-4">Pure Mesh</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE DUSTY TRUTH (Intro Section) */}
      <section className="py-40 bg-[#FAFAFA] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-12">
               <SectionHeading sub="The Silent Cooling Killer" title="Your Filters Are Choking Your AC" center={false} />
               <p className="text-xl text-primary/60 font-medium leading-relaxed italic border-l-4 border-secondary/20 pl-8">
                  In Riyadh's dusty summer, AC filters can get 100% blocked in just 4 weeks. This forces your compressor to work overtime, leading to high bills and poor cooling. We deep-wash every micron of dust away.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { t: "Residential Care", d: "Villas & Apartments", i: <Home /> },
                    { t: "Commercial Power", d: "Offices & Restaurants", i: <Building2 /> }
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-6 p-8 bg-white rounded-[40px] shadow-sm border border-gray-50 group hover:border-secondary transition-all">
                       <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">{x.i}</div>
                       <div className="flex flex-col"><span className="font-heading font-black text-primary text-xl tracking-tight leading-none">{x.t}</span><span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-2">{x.d}</span></div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-secondary rounded-[72px] rotate-3 opacity-5 pointer-events-none group-hover:rotate-0 transition-transform" />
               <img src="/optimized/pexels-5691632.webp" alt="Filter Deep Wash" className="w-full h-[600px] object-cover rounded-[64px] shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02]" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY FILTER CLEANING MATTERS (The Purity Grid) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="The Efficiency Logic" title="Deep Benefits Of Clean Filters" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { t: "Better Cooling", i: <Snowflake />, d: "Instant temperature drop." },
              { t: "Pure Indoor Air", i: <Wind />, d: "Removing invisible dust." },
              { t: "Lower Energy Bills", i: <Zap />, d: "Save 30% on electricity." },
              { t: "Reduced Allergens", i: <Heart />, d: "Breathe easier instantly." },
              { t: "Unrestricted Flow", i: <Activity />, d: "Maximum fan pressure." },
              { t: "Longer AC Life", i: <Clock />, d: "No compressor load." },
              { t: "Zero Breakdowns", i: <ShieldPlus />, d: "Prevent sudden failures." },
              { t: "Cleaner Home", i: <Sparkles />, d: "No dust around vents." }
            ].map((v, idx) => (
              <div key={idx} className="group p-12 bg-[#F8FBFF] rounded-[56px] border border-secondary/5 flex flex-col items-center text-center gap-8 hover:bg-secondary transition-all shadow-sm">
                <div className="w-22 h-22 bg-white rounded-[32px] flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 transition-transform group-hover:rotate-12">{v.i}</div>
                <div className="flex flex-col gap-3">
                   <h3 className="text-xl font-heading font-black text-primary group-hover:text-white tracking-tight leading-tight">{v.t}</h3>
                   <p className="text-[10px] font-black text-primary/30 group-hover:text-white/40 uppercase tracking-widest leading-relaxed">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 flex justify-center"><button onClick={handleBookNow} className="px-14 py-7 bg-primary text-white rounded-[28px] font-black uppercase tracking-widest shadow-2xl border-b-4 border-slate-800 active:scale-95 transition-all">Clean My AC Filters Now</button></div>
        </div>
      </section>

      {/* 4. OUR FILTER SERVICES (Horizontal Performance Strips) */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Mesh Specialization" title="Total Filter Care Catalog" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              { t: "Split AC Filter Wash", d: "Standard deep-washing for home units.", i: <LayoutGrid /> },
              { t: "Central HVAC Mesh", d: "Commercial-grade filter sanitization.", i: <Building2 /> },
              { t: "High Pressure Deep Clean", d: "Removing stubborn sand cakes.", i: <Droplets /> },
              { t: "Medical Sanitization", d: "Killing bacteria & germs in mesh.", i: <ShieldPlus /> }
            ].map((s, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row items-center gap-10 p-12 bg-white rounded-[64px] border border-gray-100 hover:border-secondary hover:shadow-2xl transition-all">
                <div className="w-24 h-24 bg-secondary/5 rounded-[36px] flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-inner shrink-0">{s.i}</div>
                <div className="flex flex-col gap-4 flex-1">
                   <h3 className="text-3xl font-heading font-black text-primary tracking-tight leading-tight">{s.t}</h3>
                   <p className="text-primary/40 font-medium text-sm leading-relaxed">{s.d}</p>
                   <button onClick={handleBookNow} className="w-fit text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-3 mt-2 border-b border-secondary/20 pb-1 group-hover:text-primary transition-colors">Book Expert Cleaning <ArrowRight size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SIGNS YOUR AC FILTER NEEDS CLEANING (Diagnostic Warning Grid) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center gap-6 mb-24">
             <span className="text-secondary font-black tracking-[0.5em] uppercase text-[10px]">Technical Scan</span>
             <h2 className="text-[46px] md:text-[64px] font-heading font-black text-primary tracking-tighter leading-tight italic text-stroke-thin">Is Your Air <br /><span className="text-secondary italic">Polluted?</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
             {/* Massive Emergency Card */}
             <div className="md:col-span-8 bg-primary rounded-[64px] p-16 flex flex-col justify-end gap-10 relative overflow-hidden text-white group hover:-translate-y-4 transition-all duration-700 shadow-3xl">
                <div className="absolute top-0 right-0 p-32 opacity-10 group-hover:rotate-12 transition-transform duration-700 pointer-events-none"><Filter size={300} /></div>
                <span className="bg-secondary text-white px-8 py-3 rounded-full w-fit font-black text-[10px] uppercase tracking-widest shadow-xl italic animate-pulse">Efficiency Crisis</span>
                <div className="relative z-10 flex flex-col gap-6">
                   <h3 className="text-[48px] md:text-[68px] font-heading font-black leading-[0.9] tracking-tighter max-w-2xl">Weak Airflow & <br /> Spike In Energy Bills</h3>
                   <p className="text-white/50 text-xl font-medium max-w-xl leading-relaxed">If you don't feel the freeze even at max fan speed, your filters are likely blocked by a solid wall of Riyadh dust. This is the #1 cause of AC failures.</p>
                </div>
                <button onClick={handleBookNow} className="w-fit px-12 py-7 bg-white text-primary rounded-[32px] font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-secondary hover:text-white transition-all">Fix It Before It Fails</button>
             </div>
             
             {/* Staggered Secondary Signs */}
             <div className="md:col-span-4 grid grid-cols-1 gap-8">
                {[
                  { t: "Bad Filter Smell", d: "Bacteria trapped in mesh.", i: <Droplets /> },
                  { t: "Ice On Unit", d: "Restricted gas flow lines.", i: <Snowflake /> }
                ].map((s, i) => (
                  <div key={i} className="bg-[#F8FAFC] rounded-[56px] p-12 flex flex-col gap-10 border border-gray-100 hover:border-secondary transition-all shadow-sm group">
                     <div className="w-18 h-18 bg-white rounded-[28px] flex items-center justify-center text-secondary shadow-sm transition-transform group-hover:scale-110">{s.i}</div>
                     <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-heading font-black text-primary leading-tight tracking-tight">{s.t}</h3>
                        <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mt-3">{s.d}</span>
                     </div>
                  </div>
                ))}
             </div>

             {/* Row of Horizontal Signs */}
             <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { t: "Visible Dust", i: <Trash2 /> },
                  { t: "Dirty Vents", i: <Boxes /> },
                  { t: "Continuous Run", i: <Clock /> },
                  { t: "Sneezing/Allergy", i: <Heart /> }
                ].map((s, i) => (
                  <div key={i} className="p-10 bg-white rounded-[44px] border border-gray-100 shadow-sm flex items-center gap-6 group hover:border-secondary transition-all">
                     <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">{s.i}</div>
                     <span className="text-xl font-heading font-black text-primary tracking-tight leading-none">{s.t}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 6. FILTER WASH PROCESS (Step-by-Step Tunnel) */}
      <section className="py-40 bg-primary text-white relative">
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none -rotate-12"><Waves size={400} /></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-14">
               <span className="text-secondary font-black tracking-[0.6em] uppercase text-[10px]">Restoration Hub</span>
               <h2 className="text-[46px] md:text-[68px] font-heading font-black text-white leading-[1] tracking-tighter italic">The <span className="text-secondary text-stroke">6-Step</span> Filter Wash</h2>
               <div className="flex flex-col gap-10 relative">
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />
                  {[
                    { t: "Booking Confirmation", d: "Verified in 5 mins." },
                    { t: "Filter Inspection", d: "Evaluating mesh density." },
                    { t: "Unit Deep Scour", d: "Wiping internal housing." },
                    { t: "Pressure Wash", d: "Removing stubborn sand cakes." },
                    { t: "Medical Sanitization", d: "Total germ elimination." },
                    { t: "Performance Verify", d: "Measuring 16°C discharge air." }
                  ].map((p, idx) => (
                    <div key={idx} className="flex items-center gap-10 group relative z-10">
                       <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-secondary backdrop-blur-xl group-hover:bg-secondary group-hover:text-white transition-all shadow-xl">
                          <span className="font-heading font-black text-xs leading-none">{idx+1}</span>
                       </div>
                       <div className="flex flex-col">
                          <h3 className="text-2xl font-heading font-black text-white tracking-tight">{p.t}</h3>
                          <p className="text-white/30 font-medium text-sm leading-relaxed">{p.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-10 bg-secondary/10 blur-[140px] pointer-events-none rounded-full" />
               <div className="relative bg-white/5 border border-white/10 p-16 md:p-24 rounded-[80px] backdrop-blur-3xl flex flex-col items-center text-center gap-12 shadow-3xl">
                  <RefreshCcw size={100} className="text-secondary animate-spin-slow" />
                  <h3 className="text-[44px] md:text-[62px] font-heading font-black leading-[0.95] tracking-tighter text-white italic">Restore The <br /> Icy Blast</h3>
                  <button onClick={handleBookNow} className="px-14 py-8 bg-white text-primary rounded-[32px] font-black uppercase tracking-widest shadow-2xl hover:bg-secondary hover:text-white transition-all border-b-4 border-slate-200">Schedule Service Today</button>
                  <p className="text-white/20 font-bold text-xs uppercase tracking-[0.4em]">Guaranteed Pure Flow</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US (Duct Mastery) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-10">
               <SectionHeading sub="Elite Choice" title="Riyadh's Choice For Pure Airflow" center={false} />
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { t: "Experienced AC Techs", i: <Users /> },
                    { t: "Advanced Wash Equipment", i: <Layers /> },
                    { t: "Eco-Friendly Sanitizers", i: <Sparkles /> },
                    { t: "Fast Riyadh Coverage", i: <MapPin /> },
                    { t: "Commercial Expertise", i: <Building2 /> },
                    { t: "Affordable Pricing", i: <ThumbsUp /> },
                    { t: "Quality Guaranteed", i: <ShieldCheck /> },
                    { t: "Air Quality Specialists", i: <Heart /> }
                  ].map((w, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-primary/70 font-bold text-lg"><CheckCircle2 size={24} className="text-secondary shrink-0" /> {w.t}</div>
                  ))}
               </div>
               <button onClick={handleBookNow} className="w-fit px-12 py-7 bg-primary text-white rounded-[28px] font-black uppercase tracking-widest shadow-2xl border-b-4 border-slate-800 hover:bg-secondary transition-all">Hire Filter Experts Now</button>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-secondary rounded-[80px] -rotate-3 opacity-5 group-hover:rotate-0 transition-transform duration-700" />
               <img src="/optimized/pexels-5691657.webp" alt="Filter Process" className="w-full h-[650px] object-cover rounded-[72px] shadow-2xl transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. AREAS WE SERVE */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="Local Reach" title="Filter Services Across Riyadh" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {["Al Olaya", "Al Malaz", "Al Yasmin", "Al Narjis", "Al Sahafa", "Al Malqa", "Al Aqiq", "Hittin", "Al Nakheel", "Al Rawdah", "Al Sulaymaniyah", "Al Rabwah", "Al Munsiyah", "Al Qadisiyah", "Al Shifa"].map(area => (
              <div key={area} className="p-12 bg-white rounded-[48px] border border-gray-50 flex flex-col items-center gap-6 group hover:border-secondary transition-all cursor-pointer shadow-sm text-center">
                <MapPin size={32} className="text-secondary group-hover:scale-125 transition-transform duration-500" />
                <span className="text-xs font-black uppercase tracking-widest text-primary/40 group-hover:text-primary">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. IAQ BENEFITS (Wellness Section) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="relative bg-[#F8FBFF] p-12 md:p-24 rounded-[80px] overflow-hidden flex flex-col lg:flex-row items-center gap-24 border border-secondary/5 shadow-inner">
              <div className="flex-1 flex flex-col gap-10">
                 <span className="text-secondary font-black tracking-[0.6em] uppercase text-[10px]">The Wellness Audit</span>
                 <h2 className="text-[44px] md:text-[68px] font-heading font-black text-primary leading-tight tracking-tighter">Breathe <br /><span className="text-secondary italic text-stroke">Surgically Pure</span> Air</h2>
                 <p className="text-xl text-primary/50 font-medium leading-relaxed italic border-l-4 border-secondary/20 pl-8">Clean filters mean cleaner breathing. Protect your family from Riyadh's allergens and desert sand with our medical-grade filter sanitization.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {["Reduced Allergens", "Pure Breathing", "Better Sleep", "Odor Free", "Healthy Kids", "Dust Free Home"].map(h => (
                       <div key={h} className="flex items-center gap-3 text-primary font-bold text-lg text-left"><Heart size={20} className="text-secondary" /> {h}</div>
                    ))}
                 </div>
                 <button onClick={handleBookNow} className="w-fit px-12 py-6 bg-primary text-white rounded-[24px] font-black uppercase tracking-widest text-sm shadow-xl hover:bg-secondary transition-all">Improve Air Quality</button>
              </div>
              <div className="flex-1 relative group">
                 <div className="absolute inset-0 bg-secondary rounded-[64px] rotate-3 opacity-5 group-hover:rotate-0 transition-transform duration-700" />
                 <img src="/optimized/pexels-5691657.webp" alt="Pure Air Environment" className="w-full h-[500px] object-cover rounded-[56px] shadow-2xl" />
              </div>
           </div>
        </div>
      </section>

      {/* 10. REVIEWS */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="Customer Trust" title="Riyadh Residents Love The Chill" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Abdullah", text: "I couldn't believe how much dirt was in my filters. The AC cooling improved instantly after they washed them. Fast and cheap!" },
              { name: "Faisal", text: "Professional team. They arrived in 40 minutes, cleaned all my split AC filters, and the bad smell is gone. Highly recommended." },
              { name: "Reema", text: "Very polite technicians. They cleaned the filters and checked the airflow. My home feels much fresher now." }
            ].map((r, idx) => (
              <div key={idx} className="p-16 bg-white rounded-[64px] border border-gray-50 flex flex-col gap-12 shadow-sm hover:shadow-2xl transition-all duration-700 text-left">
                <div className="flex gap-2">{[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#0073E6" stroke="#0073E6" />)}</div>
                <p className="text-xl text-primary/50 font-sans italic leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-secondary text-white rounded-3xl flex items-center justify-center font-black text-2xl shadow-lg">{r.name[0]}</div>
                   <div className="flex flex-col">
                      <span className="font-heading font-black text-primary text-xl tracking-tight">{r.name}</span>
                      <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Verified Clean Flow</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SectionHeading sub="Filter Guide" title="Filter Cleaning FAQs" />
          <div className="flex flex-col gap-8 text-left">
            {[
              { q: "How often should AC filters be cleaned?", a: "In Riyadh, we recommend cleaning filters every 2-4 weeks during peak summer to maintain cooling." },
              { q: "What are the benefits of filter cleaning?", a: "Instant airflow improvement, lower electricity bills, and much cleaner indoor air." },
              { q: "Do you clean central AC filters?", a: "Yes, we handle filters for all types of split, window, and central HVAC systems." },
              { q: "How long does filter cleaning take?", a: "A standard filter wash and re-installation takes about 20-30 minutes per unit." }
            ].map((f, idx) => (
              <div key={idx} className="p-14 bg-[#F8FAFC] rounded-[48px] border border-gray-100 hover:border-secondary transition-all shadow-sm">
                <h3 className="text-2xl font-heading font-black text-primary mb-6 leading-tight">{f.q}</h3>
                <p className="text-primary/50 text-xl font-medium leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-40 bg-white flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-6xl w-full bg-primary p-12 md:p-24 rounded-[84px] text-white text-center flex flex-col items-center gap-14 relative overflow-hidden shadow-3xl">
          <div className="absolute top-[-10%] right-[-5%] p-24 opacity-10 rotate-12 pointer-events-none scale-150"><Filter size={500} /></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
             <span className="bg-secondary text-white px-10 py-3 rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-xl italic text-stroke-thin">Instant Airflow Boost</span>
             <h2 className="text-[44px] md:text-[68px] lg:text-[84px] font-heading font-black text-white leading-[0.9] tracking-tighter">Need Clean <br /><span className="text-secondary">AC Filters?</span></h2>
          </div>
          <p className="text-xl md:text-2xl font-medium text-white/70 max-w-3xl leading-relaxed relative z-10">Book expert AC filter cleaning services today for cleaner air, improved airflow & 100% cooling performance for your Riyadh home.</p>
          <div className="flex flex-col sm:flex-row gap-8 w-full max-w-3xl relative z-10">
             <button onClick={handleBookNow} className="flex-1 px-14 py-8 bg-secondary text-white rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-blue-700 shadow-2xl hover:bg-white hover:text-secondary transition-all"><Filter size={32} /> Book Cleaning</button>
             <a href="tel:+966501234567" className="flex-1 px-14 py-8 bg-white text-primary rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-slate-200 shadow-2xl hover:bg-secondary hover:text-white transition-all"><Phone size={32} fill="currentColor" /> Call AC Experts</a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName="AC Filter Cleaning" />
    </main>
  );
}
