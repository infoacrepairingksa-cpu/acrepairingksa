"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingActions from "@/components/FloatingActions";
import { motion } from "framer-motion";
import { 
  Phone, ShieldCheck, Clock, Zap, CheckCircle2, ArrowRight, Star, MapPin, 
  Wrench, Hammer, Ruler, Settings, LayoutGrid, Building2, Home, Wind, 
  Snowflake, Gauge, Activity, Search, ThumbsUp, Smartphone, AlertTriangle,
  ZapOff, Package, Layers, Maximize, Check, CalendarCheck2, ShieldAlert,
  HardHat, Drill, Compass, Thermometer, Droplets, Trash2, Filter, Users, Briefcase, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ACInstallationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBookNow = () => setIsModalOpen(true);

  const SectionHeading = ({ sub, title, center = true, light = false }: any) => (
    <div className={cn("flex flex-col gap-4 mb-20", center ? "items-center text-center" : "items-start text-left")}>
      <span className={cn("font-black tracking-[0.3em] uppercase text-[10px] px-5 py-2 rounded-full w-fit", light ? "bg-white/10 text-secondary" : "bg-secondary/10 text-secondary")}>{sub}</span>
      <h2 className={cn("text-[32px] md:text-[46px] font-heading font-black leading-tight tracking-tighter max-w-3xl", light ? "text-white" : "text-primary")}>{title}</h2>
    </div>
  );

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Navbar onBookNow={handleBookNow} />

      {/* 1. ENGINEERING HERO (Structural & Bold) */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 bg-[#F8FAFC] overflow-hidden">
        {/* Technical Blueprint Patterns */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(0,115,230,1)_1px,transparent_1px),linear-gradient(rgba(0,115,230,1)_1px,transparent_1px)] [background-size:100px_100px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 flex flex-col gap-10 text-center lg:text-left"
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                 {["Certified Technicians", "Same Day Setup", "Quality Guaranteed"].map(t => (
                   <span key={t} className="bg-white text-primary border-l-4 border-secondary px-6 py-2.5 rounded-r-xl text-[10px] font-black tracking-widest uppercase shadow-sm flex items-center gap-2">{t}</span>
                 ))}
              </div>
              <h1 className="text-[52px] md:text-[72px] lg:text-[86px] font-heading font-black text-primary leading-[0.9] tracking-tighter">
                Professional AC <span className="text-secondary">Installation Services</span> in Riyadh
              </h1>
              <p className="text-xl md:text-2xl text-primary/60 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed italic border-l-4 border-secondary/20 pl-8">
                “Expert installation for split, central & commercial AC systems with safe setup and maximum cooling performance.”
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                <button onClick={handleBookNow} className="w-full sm:w-auto px-12 py-6 bg-secondary text-white rounded-[24px] font-black text-lg tracking-widest transition-all shadow-2xl hover:scale-105 border-b-4 border-blue-700 active:scale-95 flex items-center justify-center gap-4">
                  <Package size={20} /> Book Installation
                </button>
                <button onClick={handleBookNow} className="w-full sm:w-auto px-12 py-6 bg-primary text-white rounded-[24px] font-black text-lg tracking-widest transition-all shadow-xl hover:scale-105 border-b-4 border-slate-800 active:scale-95 flex items-center justify-center gap-4">
                  <Search size={20} /> Free Consultation
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-12 pt-8">
                 <div className="flex flex-col">
                    <span className="text-4xl font-black text-primary leading-none tracking-tighter">10+ Years</span>
                    <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mt-2">Local Expertise</span>
                 </div>
                 <div className="w-px h-12 bg-gray-200" />
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white shadow-lg shadow-secondary/20"><ShieldCheck size={24} /></div>
                    <span className="text-xs font-black text-primary/50 uppercase tracking-widest">Authorized <br /> Service Provider</span>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[72px] overflow-hidden shadow-[0_60px_120px_-20px_rgba(15,23,42,0.2)] border-[14px] border-white group">
                <img src="/optimized/pexels-5691631.webp" alt="AC Installation Riyadh" className="w-full h-[700px] object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-10 left-10 bg-white/10 backdrop-blur-md p-6 rounded-[32px] border border-white/20">
                   <div className="flex flex-col gap-1">
                      <span className="text-white font-black text-3xl leading-none">Level Fit</span>
                      <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">Laser Precision</span>
                   </div>
                </div>
              </div>
              
              {/* Engineering Blueprint Accent */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary rounded-[48px] shadow-2xl flex flex-col items-center justify-center text-white border-8 border-[#F8FAFC]">
                 <Ruler size={48} className="mb-2" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Precision Tools</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION (Solutions Focus) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
               <div className="absolute -inset-4 bg-secondary/10 rounded-[64px] group-hover:inset-0 transition-all duration-500" />
               <img src="/optimized/pexels-5691638.webp" alt="AC Unit Setup" className="relative w-full h-[600px] object-cover rounded-[56px] shadow-2xl" />
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <span className="bg-secondary/10 text-secondary font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2.5 rounded-full w-fit">The Riyadh Standard</span>
                <h2 className="text-[42px] md:text-[56px] font-heading font-black text-primary leading-tight tracking-tighter">Proper Setup For <br /><span className="text-secondary italic">Extreme Heat</span></h2>
                <p className="text-xl text-primary/60 font-medium leading-relaxed italic">
                  Riyadh's heat reaches 50°C+. A poor installation leads to high bills and early breakdowns. We ensure your AC is mounted, leveled, and connected for maximum energy efficiency and cooling performance.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {[
                   { t: "Residential Support", d: "Villas & Luxury Apartments", i: <Home /> },
                   { t: "Commercial Setup", d: "Offices & Retail Solutions", i: <Building2 /> }
                 ].map((x, i) => (
                   <div key={i} className="flex items-center gap-6 p-8 bg-[#F8FAFC] rounded-[32px] border border-gray-100">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">{x.i}</div>
                      <div className="flex flex-col">
                         <span className="font-heading font-black text-primary leading-none">{x.t}</span>
                         <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-2">{x.d}</span>
                      </div>
                   </div>
                 ))}
              </div>
              <button onClick={handleBookNow} className="w-fit px-12 py-6 bg-primary text-white rounded-[24px] font-black uppercase tracking-widest text-sm shadow-xl border-b-4 border-slate-800 hover:bg-secondary transition-all">Schedule Installation</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TYPES OF AC SYSTEMS (Technical Grid) */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center gap-6 mb-24">
             <span className="bg-secondary/10 text-secondary font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2.5 rounded-full">Installation Catalog</span>
             <h2 className="text-[46px] md:text-[64px] font-heading font-black text-primary tracking-tighter leading-tight">Complete System <br /> Integration</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { t: "Split AC Installation", d: "Precise wall-mounting with concealed copper kits.", i: <LayoutGrid /> },
              { t: "Central AC Setup", d: "Heavy-duty lifting & commercial commissioning.", i: <Building2 /> },
              { t: "Window AC Mounting", d: "Perfect framing & sealing for window units.", i: <Home /> },
              { t: "Cassette AC Fix", d: "Structural ceiling-mount solutions for open spaces.", i: <Maximize /> },
              { t: "Ducted AC Systems", d: "Full ductwork planning & airflow balancing.", i: <Wind /> },
              { t: "Commercial HVAC", d: "Large scale rooftop & VRF system installations.", i: <Briefcase /> }
            ].map((s, idx) => (
              <div key={idx} className="group relative p-12 bg-white rounded-[64px] border border-gray-100 flex flex-col gap-10 transition-all duration-500 hover:border-secondary hover:-translate-y-4 shadow-sm hover:shadow-2xl">
                <div className="w-20 h-20 bg-secondary/5 rounded-[32px] flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">{s.i}</div>
                <div className="flex flex-col gap-4">
                   <h3 className="text-2xl font-heading font-black text-primary tracking-tight leading-tight">{s.t}</h3>
                   <p className="text-primary/40 font-medium text-sm leading-relaxed">{s.d}</p>
                </div>
                <button onClick={handleBookNow} className="w-fit text-secondary font-black uppercase tracking-widest text-[10px] flex items-center gap-3 border-b border-secondary/20 pb-1">Install My AC <ArrowRight size={14} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY PROPER INSTALLATION MATTERS (Icon Mastery) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="flex flex-col items-center text-center gap-6 mb-24">
             <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px]">The Efficiency Factor</span>
             <h2 className="text-[46px] md:text-[64px] font-heading font-black text-primary tracking-tighter leading-tight">Why Expert Setup <br /> Matters Most</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { t: "Better Cooling Efficiency", i: <Snowflake />, d: "Maximum chill from day one." },
              { t: "Lower Electricity Bills", i: <Zap />, d: "Zero energy leaks or waste." },
              { t: "Longer AC Lifespan", i: <CalendarCheck2 />, d: "Built to last 10+ years." },
              { t: "Improved Airflow", i: <Wind />, d: "No blockage or weak spots." },
              { t: "Safe Connections", i: <ZapOff />, d: "Professional electrical setup." },
              { t: "Reduced Future Repairs", i: <ShieldAlert />, d: "Avoid early wear and tear." },
              { t: "Quiet Operation", i: <Activity />, d: "Vibration-free mounting." },
              { t: "Maximum Performance", i: <Gauge />, d: "Operating at 100% capacity." }
            ].map((m, idx) => (
              <div key={idx} className="p-10 bg-[#F8FAFC] rounded-[40px] flex flex-col items-center text-center gap-6 group hover:bg-white border border-transparent hover:border-secondary transition-all shadow-sm hover:shadow-xl">
                 <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-inner group-hover:bg-secondary group-hover:text-white transition-all">{m.i}</div>
                 <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-heading font-black text-primary leading-tight">{m.t}</h3>
                    <p className="text-[10px] font-black text-primary/30 uppercase tracking-widest">{m.d}</p>
                 </div>
              </div>
            ))}
          </div>
          <div className="mt-20 flex justify-center"><button onClick={handleBookNow} className="px-12 py-6 bg-secondary text-white rounded-[24px] font-black uppercase tracking-widest shadow-2xl border-b-4 border-blue-700 hover:scale-105 transition-all">Book Expert Installation</button></div>
        </div>
      </section>

      {/* 5. INSTALLATION PROCESS (Blueprint Timeline) */}
      <section className="py-40 bg-primary text-white relative">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(0,115,230,1)_1px,transparent_1px)] [background-size:30px_30px]" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="flex flex-col gap-10">
                <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px]">The Structural Protocol</span>
                <h2 className="text-[46px] md:text-[64px] font-heading font-black text-white leading-[1.1] tracking-tighter">Our 6-Step <br /><span className="text-secondary">Engineering</span> Process</h2>
                <div className="flex flex-col gap-8">
                   {[
                     { t: "Site Inspection", d: "Evaluating structural strength and airflow paths." },
                     { t: "Size Recommendation", d: "Precise BTU calculation for your room size." },
                     { t: "Installation Planning", d: "Designing copper and electrical routing." },
                     { t: "Indoor & Outdoor Setup", d: "Structural mounting with laser leveling." },
                     { t: "Electrical & Gas Connections", d: "Pressure testing and leak checking." },
                     { t: "Final Cooling Check", d: "Guaranteeing 16°C discharge temperature." }
                   ].map((p, idx) => (
                     <div key={idx} className="flex items-center gap-8 group">
                        <span className="text-3xl font-heading font-black text-secondary/40 group-hover:text-secondary transition-colors leading-none">0{idx+1}</span>
                        <div className="flex flex-col">
                           <h3 className="text-xl font-heading font-black text-white tracking-tight">{p.t}</h3>
                           <p className="text-white/40 font-medium text-sm leading-relaxed">{p.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="relative">
                <div className="absolute -inset-10 bg-secondary/10 blur-[140px] pointer-events-none rounded-full" />
                <div className="relative bg-white/5 border border-white/10 p-16 rounded-[80px] backdrop-blur-3xl flex flex-col items-center text-center gap-12">
                   <div className="w-24 h-24 bg-secondary rounded-[32px] flex items-center justify-center text-white shadow-2xl shadow-secondary/30"><HardHat size={48} /></div>
                   <h3 className="text-4xl font-heading font-black leading-tight tracking-tighter italic">Ready For A <br /> Perfect Setup?</h3>
                   <button onClick={handleBookNow} className="px-12 py-7 bg-white text-primary rounded-[28px] font-black uppercase tracking-widest shadow-2xl hover:bg-secondary hover:text-white transition-all border-b-4 border-slate-200">Schedule Expert Visit</button>
                   <div className="flex items-center gap-4 text-white/30 font-bold text-xs uppercase tracking-widest">
                      <ShieldCheck size={20} /> 100% Structural Guarantee
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US (Trust & Quality) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-10">
               <div className="flex flex-col gap-6">
                 <span className="bg-secondary/10 text-secondary font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2.5 rounded-full w-fit">The Elite Choice</span>
                 <h2 className="text-[46px] md:text-[64px] font-heading font-black text-primary tracking-tighter leading-tight">Expert Hands For <br /> Your New AC</h2>
                 <p className="text-lg text-primary/50 font-medium leading-relaxed italic border-l-4 border-gray-100 pl-8">
                   We treat every installation as an engineering project. From the first bolt to the final gas charge, our team ensures absolute precision.
                 </p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { t: "Experienced AC Technicians", i: <Users /> },
                    { t: "Fast Riyadh Coverage", i: <MapPin /> },
                    { t: "Professional Equipment", i: <Compass /> },
                    { t: "Safe Installation Standards", i: <ShieldCheck /> },
                    { t: "Affordable Pricing", i: <ThumbsUp /> },
                    { t: "Clean & Neat Work", i: <Sparkles /> }
                  ].map((w, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-primary/70 font-bold text-base"><CheckCircle2 size={20} className="text-secondary shrink-0" /> {w.t}</div>
                  ))}
               </div>
               <button onClick={handleBookNow} className="w-fit px-12 py-7 bg-primary text-white rounded-[28px] font-black uppercase tracking-widest shadow-2xl border-b-4 border-slate-800 hover:bg-secondary transition-all">Hire Installation Experts</button>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-secondary rounded-[80px] -rotate-3 opacity-5 group-hover:rotate-0 transition-transform duration-700" />
               <img src="/optimized/pexels-5691629.webp" alt="Professional AC Technicians" className="w-full h-[650px] object-cover rounded-[72px] shadow-2xl" />
               <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-[40px] shadow-2xl border border-gray-50 text-center">
                  <span className="block text-4xl font-black text-secondary leading-none">100%</span>
                  <span className="text-[10px] font-black text-primary/30 uppercase tracking-widest mt-2 block">Customer Satisfaction</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. AREAS WE SERVE */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center gap-6 mb-24">
             <span className="bg-secondary/10 text-secondary font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2.5 rounded-full">Regional Hubs</span>
             <h2 className="text-[46px] md:text-[64px] font-heading font-black text-primary tracking-tighter leading-tight">Every Corner Of Riyadh</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {["Al Olaya", "Al Malaz", "Al Yasmin", "Al Narjis", "Al Sahafa", "Al Malqa", "Al Aqiq", "Hittin", "Al Nakheel", "Al Rawdah", "Al Sulaymaniyah", "Al Rabwah", "Al Munsiyah", "Al Qadisiyah", "Al Shifa"].map(area => (
              <div key={area} className="p-12 bg-white rounded-[48px] border border-gray-50 flex flex-col items-center gap-6 group hover:border-secondary transition-all cursor-pointer shadow-sm text-center">
                <MapPin size={32} className="text-secondary group-hover:scale-125 transition-transform duration-500" />
                <span className="text-xs font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">{area}</span>
              </div>
            ))}
          </div>
          <p className="mt-20 text-center text-primary/30 font-black italic tracking-widest uppercase text-[11px]">“We provide professional AC installation services across all major areas of Riyadh.”</p>
          <div className="mt-20 flex justify-center"><button onClick={handleBookNow} className="px-14 py-7 bg-primary text-white rounded-[28px] font-black uppercase tracking-widest shadow-2xl border-b-4 border-slate-800">Book Service in Your Area</button></div>
        </div>
      </section>

      {/* 8. EMERGENCY SECTION (Urgent Priority Setup) */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="relative bg-secondary p-12 md:p-24 rounded-[80px] overflow-hidden flex flex-col lg:flex-row items-center gap-16 shadow-[0_60px_100px_-20px_rgba(0,115,230,0.3)]">
              <div className="absolute top-0 right-0 p-32 opacity-5 rotate-12 pointer-events-none"><Zap size={400} /></div>
              <div className="flex-1 flex flex-col gap-8 text-center lg:text-left relative z-10">
                 <span className="bg-white/20 text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-xl w-fit mx-auto lg:mx-0 italic">Urgent Setup Priority</span>
                 <h2 className="text-[44px] md:text-[68px] font-heading font-black text-white leading-tight tracking-tighter">Emergency <br /><span className="text-primary italic">Same-Day</span> Installation</h2>
                 <p className="text-xl text-white/80 font-medium leading-relaxed max-w-xl">New AC delivered but no installer? We provide emergency setup across Riyadh during peak summer weeks. Technicians on standby 24/7.</p>
              </div>
              <div className="flex-1 w-full max-w-md relative z-10">
                 <div className="bg-white p-12 rounded-[64px] shadow-2xl flex flex-col gap-8 text-center">
                    <span className="text-primary font-black text-xl tracking-tight leading-none uppercase tracking-[0.2em]">Priority Request</span>
                    <a href="tel:+966501234567" className="w-full px-12 py-7 bg-primary text-white rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-5 border-b-4 border-slate-800 shadow-xl hover:bg-secondary transition-all">
                       <Phone size={24} fill="currentColor" /> Call Emergency Team
                    </a>
                    <button onClick={handleBookNow} className="w-full px-12 py-7 bg-white border-2 border-gray-100 text-primary rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-5 shadow-sm hover:border-secondary transition-all">
                       <Zap size={24} /> Request Urgent Fix
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 9. REVIEWS (The Grid of Success) */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Success Stories" title="Riyadh Residents Love Our Setup" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Omar Al-Rashed", text: "They installed 4 split ACs in my new villa. Perfectly aligned, hidden pipes, and worked beautifully. Best team in Riyadh." },
              { name: "Junaid", text: "Fastest response I've seen. Same-day installation during August heat. Very professional and clean team." },
              { name: "Latifa", text: "The technicians were very knowledgeable. They recommended the perfect AC size for my living room. Great service." }
            ].map((r, idx) => (
              <div key={idx} className="p-16 bg-white rounded-[64px] border border-gray-50 flex flex-col gap-12 shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="flex gap-2">{[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#0073E6" stroke="#0073E6" />)}</div>
                <p className="text-xl text-primary/50 font-sans italic leading-relaxed text-left">"{r.text}"</p>
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary font-black text-2xl shadow-inner">{r.name[0]}</div>
                   <div className="flex flex-col">
                      <span className="font-heading font-black text-primary text-xl tracking-tight">{r.name}</span>
                      <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Verified Installation</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading sub="Engineering Guide" title="Installation FAQs" />
          <div className="flex flex-col gap-8">
            {[
              { q: "How long does AC installation take?", a: "A standard split AC installation takes about 2-3 hours including testing." },
              { q: "Do you install central and split AC systems?", a: "Yes, we handle everything from single split units to complex central HVAC systems." },
              { q: "Do you provide same-day installation?", a: "Absolutely. We have emergency crews stationed across Riyadh for same-day setup." },
              { q: "What AC brands do you install?", a: "We install all major brands including Samsung, LG, Gree, Carrier, Zamil, and Daikin." }
            ].map((f, idx) => (
              <div key={idx} className="p-14 bg-[#F8FAFC] rounded-[48px] border border-gray-100 hover:border-secondary transition-all shadow-sm">
                <h3 className="text-2xl font-heading font-black text-primary mb-6 leading-tight">{f.q}</h3>
                <p className="text-primary/50 text-xl font-medium leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA (The High-Impact Close) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="relative bg-primary p-12 md:p-24 rounded-[84px] overflow-hidden text-center flex flex-col items-center gap-14 shadow-[0_80px_160px_-40px_rgba(15,23,42,0.5)]">
              <div className="absolute top-0 right-0 p-32 opacity-10 rotate-12 pointer-events-none scale-150"><Hammer size={500} /></div>
              <div className="absolute bottom-0 left-0 p-32 opacity-5 -rotate-12 pointer-events-none scale-150"><Compass size={500} /></div>
              
              <div className="relative z-10 flex flex-col gap-6">
                 <span className="bg-secondary text-white px-10 py-3 rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-xl w-fit mx-auto italic">Ready To Set Up?</span>
                 <h2 className="text-[44px] md:text-[68px] lg:text-[84px] font-heading font-black text-white leading-[0.9] tracking-tighter">Professional <br /><span className="text-secondary">AC Installation</span></h2>
              </div>
              <p className="text-xl md:text-2xl font-medium text-white/70 max-w-3xl leading-relaxed relative z-10">Book expert AC installation technicians today for safe setup, efficient cooling & long-lasting performance. Technician at your door in 30 mins!</p>
              
              <div className="flex flex-col sm:flex-row gap-8 w-full max-w-3xl relative z-10">
                 <button onClick={handleBookNow} className="flex-1 px-14 py-8 bg-secondary text-white rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-blue-700 shadow-2xl hover:bg-white hover:text-secondary transition-all">
                    <Check size={32} /> Book Now
                 </button>
                 <a href="tel:+966501234567" className="flex-1 px-14 py-8 bg-white text-primary rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-slate-200 shadow-2xl hover:bg-secondary hover:text-white transition-all">
                    <Phone size={32} fill="currentColor" /> Call AC Experts
                 </a>
              </div>
           </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName="AC Installation" />
    </main>
  );
}
