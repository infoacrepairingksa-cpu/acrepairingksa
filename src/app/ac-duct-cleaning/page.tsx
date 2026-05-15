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
  Layers, Maximize, Thermometer, ShieldAlert, Scan, Boxes
} from "lucide-react";
import { cn } from "@/lib/utils";
import Schema, { generateServiceSchema, generateBreadcrumbSchema } from "@/components/Schema";

export default function ACDuctCleaningPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBookNow = () => setIsModalOpen(true);

  const SectionHeading = ({ sub, title, center = true, light = false }: any) => (
    <div className={cn("flex flex-col gap-4 mb-20", center ? "items-center text-center" : "items-start text-left")}>
      <span className={cn("font-black tracking-[0.5em] uppercase text-[10px] px-6 py-2.5 rounded-full w-fit shadow-sm border border-secondary/10", light ? "bg-white/10 text-secondary border-white/20" : "bg-secondary/10 text-secondary")}>{sub}</span>
      <h2 className={cn("text-[38px] md:text-[64px] lg:text-[72px] font-heading font-black leading-[1] tracking-tighter max-w-4xl", light ? "text-white" : "text-primary")}>{title}</h2>
    </div>
  );

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Schema 
        type="Service" 
        data={generateServiceSchema(
          "AC Duct Cleaning Riyadh",
          "Professional AC duct cleaning and sanitization services in Riyadh. We provide medical-grade dust extraction and air duct sanitization for healthy indoor air.",
          "/ac-duct-cleaning"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={generateBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "AC Duct Cleaning", item: "/ac-duct-cleaning" }
        ])} 
      />
      <Navbar onBookNow={handleBookNow} />

      {/* 1. ASYMMETRIC BREATHE HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 bg-white overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary/[0.02] skew-x-12 translate-x-32 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0073E6_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-10">
              <div className="flex items-center gap-4">
                 <div className="h-px w-16 bg-secondary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">Advanced Sanitization</span>
              </div>
              <h1 className="text-[58px] md:text-[82px] lg:text-[96px] font-heading font-black text-primary leading-[0.9] tracking-tighter">
                Professional AC <span className="text-secondary italic text-stroke">Duct Cleaning</span> in Riyadh
              </h1>
              <p className="text-xl md:text-2xl text-primary/60 font-medium max-w-xl leading-relaxed italic border-l-4 border-secondary/20 pl-8">
                “Total dust extraction and medical-grade sanitization. Because what's inside your ducts matters more than you think.”
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                <button onClick={handleBookNow} className="w-full sm:w-auto px-12 py-7 bg-secondary text-white rounded-[24px] font-black text-lg tracking-widest transition-all shadow-2xl hover:-translate-y-2 border-b-4 border-blue-700 active:scale-95 flex items-center justify-center gap-5">
                  <Wind size={24} /> Book Duct Cleaning
                </button>
                <a href="tel:+966501234567" className="w-full sm:w-auto px-12 py-7 bg-primary text-white rounded-[24px] font-black text-lg tracking-widest transition-all shadow-xl hover:-translate-y-2 border-b-4 border-slate-800 active:scale-95 flex items-center justify-center gap-5">
                  <Phone size={24} /> Call Expert
                </a>
              </div>

              <div className="flex items-center gap-12 pt-8 border-t border-gray-100">
                 <div className="flex flex-col">
                    <span className="text-3xl font-black text-primary leading-none tracking-tighter">99.9%</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">Dust Removed</span>
                 </div>
                 <div className="w-px h-12 bg-gray-100" />
                 <div className="flex flex-col">
                    <span className="text-3xl font-black text-secondary leading-none tracking-tighter">24/7</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">Response</span>
                 </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className="relative group">
              <div className="relative z-10 rounded-[80px] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,115,230,0.3)] border-[16px] border-white transition-transform duration-1000 group-hover:scale-105">
                <img src="/optimized/pexels-5691657.webp" alt="AC Duct Cleaning" className="w-full h-[750px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-80" />
              </div>
              
              {/* Floating Air Quality Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[48px] shadow-2xl border border-gray-100 flex flex-col items-center gap-4 animate-bounce-slow">
                 <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center text-white shadow-xl"><ShieldPlus size={40} /></div>
                 <div className="flex flex-col text-center">
                    <span className="text-primary font-black text-2xl tracking-tighter leading-none">Medical</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">Grade Purity</span>
                 </div>
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
               <SectionHeading sub="The Hidden Reality" title="Riyadh's Dust Is Inside Your Airflow" center={false} />
               <p className="text-xl text-primary/60 font-medium leading-relaxed italic border-l-4 border-secondary/20 pl-8">
                  Your AC ducts are the "lungs" of your home. In Riyadh's extreme environment, they quickly fill with sand, allergens, and bacteria. We don't just clean—we sanitize to medical standards.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { t: "Residential Care", d: "Villas & Apartments", i: <Home /> },
                    { t: "Commercial Reach", d: "Offices & Malls", i: <Building2 /> }
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-6 p-8 bg-white rounded-[40px] shadow-sm border border-gray-50">
                       <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">{x.i}</div>
                       <div className="flex flex-col"><span className="font-heading font-black text-primary text-xl tracking-tight leading-none">{x.t}</span><span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-2">{x.d}</span></div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-10 bg-secondary rounded-[72px] rotate-3 opacity-5 pointer-events-none" />
               <img src="/optimized/pexels-5691632.webp" alt="Duct Inspection" className="w-full h-[600px] object-cover rounded-[64px] shadow-2xl transition-transform duration-700 hover:scale-[1.02]" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY DUCT CLEANING IS IMPORTANT (The Purity Grid) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="The Purity Factor" title="Deep Benefits Of Total Sanitization" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { t: "Cleaner Indoor Air", i: <Wind />, d: "Medical grade air quality." },
              { t: "Better Airflow", i: <Activity />, d: "100% cooling reach." },
              { t: "Reduced Allergens", i: <Heart />, d: "Breathe easier instantly." },
              { t: "Improved Cooling", i: <Snowflake />, d: "Faster room chilling." },
              { t: "Lower Energy Bills", i: <Zap />, d: "Save 25% on electricity." },
              { t: "Removes Odors", i: <Droplets />, d: "Fresh smelling home." },
              { t: "Healthy Home", i: <ShieldPlus />, d: "Protection for kids." },
              { t: "Extends Lifespan", i: <Clock />, d: "Reduce compressor load." }
            ].map((v, idx) => (
              <div key={idx} className="group p-12 bg-[#F8FBFF] rounded-[56px] border border-secondary/5 flex flex-col items-center text-center gap-8 hover:bg-secondary transition-all shadow-sm">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 transition-transform group-hover:rotate-12">{v.i}</div>
                <div className="flex flex-col gap-3">
                   <h3 className="text-xl font-heading font-black text-primary group-hover:text-white tracking-tight leading-tight">{v.t}</h3>
                   <p className="text-[10px] font-black text-primary/30 group-hover:text-white/40 uppercase tracking-widest">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 flex justify-center"><button onClick={handleBookNow} className="px-14 py-7 bg-primary text-white rounded-[28px] font-black uppercase tracking-widest shadow-2xl border-b-4 border-slate-800 active:scale-95 transition-all">Clean My Air Ducts Now</button></div>
        </div>
      </section>

      {/* 4. OUR DUCT CLEANING SERVICES (Service Mastery) */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="Duct Specialization" title="Total Airflow Solutions" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { t: "Central AC Duct Cleaning", d: "Industrial deep extraction.", i: <Building2 /> },
              { t: "Air Vent Sanitization", d: "Antibacterial vent scrubbing.", i: <Sparkles /> },
              { t: "HVAC Duct Sanitization", d: "Full system fogging.", i: <ShieldPlus /> },
              { t: "Commercial Duct Care", d: "Office & retail solutions.", i: <Building2 /> },
              { t: "Residential Duct Fix", d: "Villa & apartment service.", i: <Home /> },
              { t: "Dust Extraction", d: "HEPA-filter sand removal.", i: <Trash2 /> },
              { t: "Bacteria Removal", d: "Eliminating invisible risks.", i: <Microscope /> },
              { t: "Flow Performance", d: "Optimizing airflow velocity.", i: <Waves /> }
            ].map((s, idx) => (
              <div key={idx} className="p-12 bg-white rounded-[64px] border border-gray-100 group hover:border-secondary hover:-translate-y-4 transition-all shadow-sm text-left">
                <div className="w-16 h-16 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-inner mb-10">{s.i}</div>
                <div className="flex flex-col gap-4">
                   <h3 className="text-2xl font-heading font-black text-primary tracking-tight leading-tight">{s.t}</h3>
                   <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">{s.d}</p>
                </div>
                <button onClick={handleBookNow} className="mt-8 text-[10px] font-black uppercase tracking-widest text-secondary group-hover:text-primary transition-colors flex items-center gap-2">Book Service <ArrowRight size={14} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SIGNS YOUR DUCTS NEED CLEANING (Diagnostic Warning Grid) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="The Warning Signs" title="Is Your AC Polluting Your Home?" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
             {/* Massive Warning Card */}
             <div className="md:col-span-8 bg-primary rounded-[64px] p-16 flex flex-col justify-end gap-10 relative overflow-hidden text-white group hover:-translate-y-4 transition-all duration-700 shadow-3xl">
                <div className="absolute top-0 right-0 p-32 opacity-10 group-hover:rotate-12 transition-transform duration-700 pointer-events-none"><Trash2 size={300} /></div>
                <span className="bg-secondary text-white px-8 py-3 rounded-full w-fit font-black text-[10px] uppercase tracking-widest shadow-xl italic animate-pulse">Critical Signal</span>
                <div className="relative z-10 flex flex-col gap-6">
                   <h3 className="text-[44px] md:text-[62px] font-heading font-black leading-[0.95] tracking-tighter max-w-2xl">Frequent Dusting & <br /> Respiratory Issues</h3>
                   <p className="text-white/50 text-xl font-medium max-w-xl">If you see dust on furniture minutes after cleaning, or if your family has frequent allergies/sneezing, your ducts are likely full of allergens and desert sand.</p>
                </div>
                <button onClick={handleBookNow} className="w-fit px-12 py-7 bg-white text-primary rounded-[28px] font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-secondary hover:text-white transition-all">Request Inspection</button>
             </div>
             
             {/* Staggered Secondary Signs */}
             <div className="md:col-span-4 grid grid-cols-1 gap-8">
                {[
                  { t: "Bad Vent Odors", d: "Bacteria in ducts.", i: <Droplets /> },
                  { t: "Blocked Cooling", d: "Poor airflow reach.", i: <Snowflake /> }
                ].map((s, i) => (
                  <div key={i} className="bg-[#F8FAFC] rounded-[56px] p-12 flex flex-col gap-10 border border-gray-100 hover:border-secondary transition-all shadow-sm group">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm transition-transform group-hover:scale-110">{s.i}</div>
                     <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-heading font-black text-primary leading-tight tracking-tight">{s.t}</h3>
                        <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mt-2">{s.d}</span>
                     </div>
                  </div>
                ))}
             </div>

             {/* Row of Horizontal Signs */}
             <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { t: "Weak Airflow", i: <Wind /> },
                  { t: "Dirty Vents", i: <Boxes /> },
                  { t: "High Energy Bills", i: <Zap /> },
                  { t: "Poor Air Quality", i: <Search /> }
                ].map((s, i) => (
                  <div key={i} className="p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm flex items-center gap-6 group hover:border-secondary transition-all">
                     <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">{s.i}</div>
                     <span className="text-xl font-heading font-black text-primary tracking-tight leading-none">{s.t}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 6. DUCT CLEANING PROCESS (Step-by-Step Tunnel) */}
      <section className="py-40 bg-primary text-white relative">
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none -rotate-12"><Waves size={400} /></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-14 text-left">
               <span className="text-secondary font-black tracking-[0.5em] uppercase text-[10px]">Sanitization Protocol</span>
               <h2 className="text-[46px] md:text-[68px] font-heading font-black text-white leading-[1.1] tracking-tighter italic">Our <span className="text-secondary text-stroke">Deep Duct</span> Process</h2>
               <div className="flex flex-col gap-10">
                  {[
                    { t: "Service Booking", d: "Fast confirmation in 5 minutes." },
                    { t: "Visual Inspection", d: "Evaluating dust & mold levels." },
                    { t: "Extraction Process", d: "Removing sand & heavy debris." },
                    { t: "Deep Duct Scour", d: "Scrubbing internal duct walls." },
                    { t: "Medical Sanitization", d: "Eliminating bacteria & germs." },
                    { t: "Final Airflow Audit", d: "Verifying unrestricted cooling." }
                  ].map((p, idx) => (
                    <div key={idx} className="flex items-center gap-10 group relative">
                       <span className="text-3xl font-heading font-black text-secondary/30 group-hover:text-secondary transition-colors leading-none">0{idx+1}</span>
                       <div className="flex flex-col">
                          <h3 className="text-2xl font-heading font-black text-white tracking-tight">{p.t}</h3>
                          <p className="text-white/40 font-medium text-sm">{p.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-10 bg-secondary/10 blur-[140px] pointer-events-none rounded-full" />
               <div className="relative bg-white/5 border border-white/10 p-16 md:p-24 rounded-[80px] backdrop-blur-3xl flex flex-col items-center text-center gap-12 shadow-3xl">
                  <Wind size={100} className="text-secondary animate-pulse" />
                  <h3 className="text-[44px] md:text-[62px] font-heading font-black leading-tight tracking-tighter italic">Breathe <br /> Total Purity</h3>
                  <button onClick={handleBookNow} className="px-14 py-8 bg-white text-primary rounded-[32px] font-black uppercase tracking-widest shadow-2xl hover:bg-secondary hover:text-white transition-all border-b-4 border-slate-200">Schedule Service Today</button>
                  <p className="text-white/30 font-bold text-xs uppercase tracking-[0.3em]">Guaranteed Pure Air Flow</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-10">
               <SectionHeading sub="The Purity Choice" title="Riyadh's Advanced Duct Fleet" center={false} />
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { t: "Experienced HVAC Techs", i: <Users /> },
                    { t: "HEPA-Grade Extraction", i: <Layers /> },
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
               <button onClick={handleBookNow} className="w-fit px-12 py-7 bg-primary text-white rounded-[28px] font-black uppercase tracking-widest shadow-2xl border-b-4 border-slate-800 hover:bg-secondary transition-all">Hire Duct Experts Now</button>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-secondary rounded-[80px] -rotate-3 opacity-5 group-hover:rotate-0 transition-transform duration-700" />
               <img src="/optimized/pexels-5691657.webp" alt="Duct Team" className="w-full h-[650px] object-cover rounded-[72px] shadow-2xl transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. AREAS WE SERVE */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="Local Reach" title="Duct Services Across Riyadh" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {["Al Olaya", "Al Malaz", "Al Yasmin", "Al Narjis", "Al Sahafa", "Al Malqa", "Al Aqiq", "Hittin", "Al Nakheel", "Al Rawdah", "Al Sulaymaniyah", "Al Rabwah", "Al Munsiyah", "Al Qadisiyah", "Al Shifa"].map(area => (
              <div key={area} className="p-12 bg-white rounded-[48px] border border-gray-50 flex flex-col items-center gap-6 group hover:border-secondary transition-all cursor-pointer shadow-sm">
                <MapPin size={32} className="text-secondary group-hover:scale-125 transition-transform duration-500" />
                <span className="text-xs font-black uppercase tracking-widest text-primary/40 group-hover:text-primary">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INDOOR AIR QUALITY (Wellness Section) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="relative bg-[#F8FBFF] p-12 md:p-24 rounded-[80px] overflow-hidden flex flex-col lg:flex-row items-center gap-24 border border-secondary/5 shadow-inner">
              <div className="flex-1 flex flex-col gap-10">
                 <span className="text-secondary font-black tracking-[0.5em] uppercase text-[10px]">The Wellness Audit</span>
                 <h2 className="text-[44px] md:text-[68px] font-heading font-black text-primary leading-tight tracking-tighter">Improve Your <br /><span className="text-secondary italic text-stroke">Indoor Air</span> Quality</h2>
                 <p className="text-xl text-primary/50 font-medium leading-relaxed italic border-l-4 border-secondary/20 pl-8">Clean ducts mean cleaner breathing. Reduce allergens, dust mites, and bacteria for a healthier living environment for your children and family.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {["Reduced Allergens", "Pure Breathing", "Better Sleep", "Odor Free", "Healthy Kids", "Dust Free Home"].map(h => (
                       <div key={h} className="flex items-center gap-3 text-primary font-bold text-lg"><Heart size={20} className="text-secondary" /> {h}</div>
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
          <SectionHeading sub="Customer Trust" title="Riyadh Residents Breathe Better" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Abdullah", text: "I used to sneeze every time the AC was on. After they cleaned the ducts, my house feels so much fresher. Incredible results!" },
              { name: "Faisal", text: "They found a lot of sand and debris in my central AC ducts. The airflow is 100% better now. Very professional team." },
              { name: "Reema", text: "Excellent duct cleaning and sanitization. The bad smell from my vents is gone. Highly recommend their service!" }
            ].map((r, idx) => (
              <div key={idx} className="p-16 bg-white rounded-[64px] border border-gray-50 flex flex-col gap-12 shadow-sm hover:shadow-2xl transition-all duration-700 text-left">
                <div className="flex gap-2">{[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#0073E6" stroke="#0073E6" />)}</div>
                <p className="text-xl text-primary/50 font-sans italic leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-secondary text-white rounded-3xl flex items-center justify-center font-black text-2xl shadow-lg">{r.name[0]}</div>
                   <div className="flex flex-col">
                      <span className="font-heading font-black text-primary text-xl tracking-tight">{r.name}</span>
                      <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Verified Pure Air</span>
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
          <SectionHeading sub="Purity Guide" title="Duct Cleaning FAQs" />
          <div className="flex flex-col gap-8 text-left">
            {[
              { q: "How often should AC ducts be cleaned?", a: "In Riyadh's dusty environment, we recommend deep duct cleaning every 1-2 years." },
              { q: "What are the benefits of duct cleaning?", a: "Cleaner indoor air, better airflow, reduced allergens, and higher energy efficiency." },
              { q: "Do you clean central AC ducts?", a: "Yes, we handle all types of central HVAC and split AC duct systems." },
              { q: "Do you provide duct sanitization?", a: "Yes, we use medical-grade fogging to kill bacteria and mold inside your ducts." }
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
          <div className="absolute top-[-10%] right-[-5%] p-24 opacity-10 rotate-12 pointer-events-none scale-150"><Wind size={500} /></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
             <span className="bg-secondary text-white px-10 py-3 rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-xl italic">Total Sanitization</span>
             <h2 className="text-[44px] md:text-[68px] lg:text-[84px] font-heading font-black text-white leading-[0.9] tracking-tighter">Need Pure Air <br /><span className="text-secondary">Duct Cleaning?</span></h2>
          </div>
          <p className="text-xl md:text-2xl font-medium text-white/70 max-w-3xl leading-relaxed relative z-10">Book expert AC duct cleaning services today for cleaner indoor air, better airflow & healthier living spaces for your family.</p>
          <div className="flex flex-col sm:flex-row gap-8 w-full max-w-3xl relative z-10">
             <button onClick={handleBookNow} className="flex-1 px-14 py-8 bg-secondary text-white rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-blue-700 shadow-2xl hover:bg-white hover:text-secondary transition-all"><Sparkles size={32} /> Book Cleaning</button>
             <a href="tel:+966501234567" className="flex-1 px-14 py-8 bg-white text-primary rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-slate-200 shadow-2xl hover:bg-secondary hover:text-white transition-all"><Phone size={32} fill="currentColor" /> Call HVAC Experts</a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName="AC Duct Cleaning" />
    </main>
  );
}
