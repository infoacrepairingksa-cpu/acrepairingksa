"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingActions from "@/components/FloatingActions";
import { motion } from "framer-motion";
import { 
  Phone, ShieldCheck, Clock, Zap, CheckCircle2, ArrowRight, Star, MapPin, 
  Droplets, Wind, Snowflake, Thermometer, Gauge, Activity, Search, ThumbsUp, 
  Smartphone, AlertTriangle, ZapOff, MousePointer2, Briefcase, Users, 
  LayoutGrid, Building2, Home, Check, BadgeCheck, Sparkles, Filter, Trash2,
  Layers, Maximize, CalendarCheck2, ShieldAlert, Hammer, Wrench, Package,
  TrendingDown, IceCream, Zap as ZapIcon, ShieldPlus
} from "lucide-react";
import { cn } from "@/lib/utils";
import Schema, { generateServiceSchema, generateBreadcrumbSchema } from "@/components/Schema";

export default function ACGasRefillPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBookNow = () => setIsModalOpen(true);

  const SectionHeading = ({ sub, title, center = true, light = false }: any) => (
    <div className={cn("flex flex-col gap-4 mb-20", center ? "items-center text-center" : "items-start text-left")}>
      <span className={cn("font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2.5 rounded-full w-fit", light ? "bg-white/10 text-secondary" : "bg-secondary/10 text-secondary")}>{sub}</span>
      <h2 className={cn("text-[36px] md:text-[56px] lg:text-[64px] font-heading font-black leading-[1.1] tracking-tighter max-w-4xl", light ? "text-white" : "text-primary")}>{title}</h2>
    </div>
  );

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Schema 
        type="Service" 
        data={generateServiceSchema(
          "AC Gas Refill Riyadh",
          "Expert AC gas refill and refrigerant recharge services in Riyadh. We provide R410A and R22 gas refill with professional leak inspection.",
          "/ac-gas-refill"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={generateBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "AC Gas Refill", item: "/ac-gas-refill" }
        ])} 
      />
      <Navbar onBookNow={handleBookNow} />

      {/* 1. ASYMMETRIC ELITE HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 bg-white overflow-hidden">
        {/* Icy Flow Pattern */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary/[0.02] -skew-x-12 translate-x-32 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0073E6_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-10">
              <div className="flex items-center gap-4">
                 <div className="h-px w-12 bg-secondary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Sub-Zero Restoration</span>
              </div>
              <h1 className="text-[56px] md:text-[76px] lg:text-[92px] font-heading font-black text-primary leading-[0.9] tracking-tighter">
                Expert AC <span className="text-secondary italic text-stroke">Gas Refill</span> & Leak Repair in Riyadh
              </h1>
              <p className="text-xl md:text-2xl text-primary/60 font-medium max-w-xl leading-relaxed italic border-l-4 border-secondary/20 pl-8">
                “Professional AC gas refill for Riyadh's extreme summers. Instant frost restoration in 30 minutes.”
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                <button onClick={handleBookNow} className="w-full sm:w-auto px-12 py-7 bg-secondary text-white rounded-[24px] font-black text-lg tracking-widest transition-all shadow-2xl hover:-translate-y-2 border-b-4 border-blue-700 active:scale-95 flex items-center justify-center gap-5">
                  <Gauge size={24} /> Book Gas Refill
                </button>
                <a href="tel:+966501234567" className="w-full sm:w-auto px-12 py-7 bg-primary text-white rounded-[24px] font-black text-lg tracking-widest transition-all shadow-xl hover:-translate-y-2 border-b-4 border-slate-800 active:scale-95 flex items-center justify-center gap-5">
                  <Phone size={24} /> Call Expert
                </a>
              </div>

              <div className="flex items-center gap-12 pt-8 border-t border-gray-100">
                 <div className="flex flex-col">
                    <span className="text-3xl font-black text-primary leading-none tracking-tighter">100% PSI</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">Accuracy</span>
                 </div>
                 <div className="w-px h-10 bg-gray-100" />
                 <div className="flex items-center gap-4">
                    <div className="flex gap-1"><Star size={14} fill="#0073E6" className="text-secondary" /> <Star size={14} fill="#0073E6" className="text-secondary" /> <Star size={14} fill="#0073E6" className="text-secondary" /> <Star size={14} fill="#0073E6" className="text-secondary" /> <Star size={14} fill="#0073E6" className="text-secondary" /></div>
                    <span className="text-xs font-bold text-primary/40 tracking-widest uppercase">Elite Rating</span>
                 </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className="relative group">
              <div className="relative z-10 rounded-[80px] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,115,230,0.3)] border-[16px] border-white transition-transform duration-1000 group-hover:scale-105">
                <img src="/optimized/pexels-5691657.webp" alt="AC Gas Refill Service" className="w-full h-[700px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/20">
                   <div className="flex items-center justify-between text-white">
                      <div className="flex flex-col gap-1">
                         <span className="font-black text-3xl tracking-tight leading-none">Instant Chill</span>
                         <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">Restoring Flow</span>
                      </div>
                      <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-xl"><Snowflake size={32} /></div>
                   </div>
                </div>
              </div>
              
              {/* Floating Gauge Ornament */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border border-gray-50 animate-bounce-slow">
                 <Gauge size={56} className="text-secondary" />
                 <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mt-3">Refill Hub</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. COOLING DIAGNOSTIC (Intro Strip) */}
      <section className="py-40 bg-[#FAFAFA] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col gap-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
               <div className="lg:col-span-8">
                  <span className="text-secondary font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">The Gas Efficiency Report</span>
                  <h2 className="text-[42px] md:text-[62px] font-heading font-black text-primary leading-tight tracking-tighter">
                    Don't Settle For <br /><span className="text-secondary italic">Weak Airflow</span>
                  </h2>
               </div>
               <div className="lg:col-span-4">
                  <p className="text-lg text-primary/50 font-medium leading-relaxed border-l-4 border-secondary pl-8">
                    In Riyadh, a 15% drop in refrigerant levels doubles your energy bill and stops the cooling. We restore the "Sub-Zero" performance of your AC instantly.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {[
                 { t: "Residential Refill", d: "Deep gas charging for villas & apartments.", i: <Home /> },
                 { t: "Commercial Power", d: "Large scale HVAC charging for offices.", i: <Building2 /> },
                 { t: "Ultrasonic Leak Check", d: "Detecting leaks before we refill.", i: <Search /> }
               ].map((x, i) => (
                 <div key={i} className="flex flex-col gap-8 p-12 bg-white rounded-[56px] shadow-sm hover:shadow-2xl transition-all border border-gray-50">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">{x.i}</div>
                    <h3 className="text-2xl font-heading font-black text-primary tracking-tight leading-tight">{x.t}</h3>
                    <p className="text-primary/40 font-medium text-sm leading-relaxed">{x.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNS YOUR AC NEEDS GAS (RE-DESIGNED: Heat-Map Grid) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Diagnostic Strip" title="Signs Your Cooling Power Is Dying" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
             <div className="md:col-span-8 bg-primary rounded-[64px] p-16 flex flex-col justify-end gap-10 relative overflow-hidden text-white group hover:-translate-y-4 transition-all duration-700 shadow-3xl">
                <div className="absolute top-0 right-0 p-32 opacity-10 group-hover:rotate-12 transition-transform duration-700 pointer-events-none"><TrendingDown size={300} /></div>
                <span className="bg-secondary text-white px-8 py-3 rounded-full w-fit font-black text-xs uppercase tracking-widest shadow-xl italic animate-pulse">Priority Warning</span>
                <div className="relative z-10 flex flex-col gap-6">
                   <h3 className="text-[44px] md:text-[62px] font-heading font-black leading-[0.95] tracking-tighter max-w-2xl">Lukewarm Air & <br /> Spike in Utility Bills</h3>
                   <p className="text-white/50 text-xl font-medium max-w-xl">If your AC is blowing warm air or your energy bills are rising, your unit is struggling due to low refrigerant. This causes the compressor to overheat.</p>
                </div>
                <button onClick={handleBookNow} className="w-fit px-12 py-7 bg-white text-primary rounded-[28px] font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-secondary hover:text-white transition-all">Fix It Before It Fails</button>
             </div>
             <div className="md:col-span-4 grid grid-cols-1 gap-8">
                {[
                  { t: "Hissing Sounds", d: "Active gas leak indicator.", i: <Activity /> },
                  { t: "Frozen Coils", d: "Refrigerant line icing up.", i: <Snowflake /> }
                ].map((s, i) => (
                  <div key={i} className="bg-[#F8FAFC] rounded-[56px] p-12 flex flex-col gap-10 border border-gray-100 hover:border-secondary transition-all shadow-sm group">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm transition-transform group-hover:scale-110">{s.i}</div>
                     <div className="flex flex-col">
                        <h3 className="text-2xl font-heading font-black text-primary leading-tight tracking-tight">{s.t}</h3>
                        <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em] mt-3">{s.d}</span>
                     </div>
                  </div>
                ))}
             </div>
             <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { t: "Weak Airflow", i: <Wind /> },
                  { t: "Bad Smell", i: <Wind /> },
                  { t: "Frequent Trip", i: <ZapOff /> },
                  { t: "Slow Cooling", i: <Clock /> }
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

      {/* 4. GAS REFILL SERVICES (RE-DESIGNED: Performance Strips) */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Catalog of Services" title="Total Refrigerant Restoration" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              { t: "Split AC Gas Top-Up", d: "Exact PSI charging for home split units.", i: <LayoutGrid /> },
              { t: "Central Refrigerant Refill", d: "Industrial charging for larger HVAC units.", i: <Building2 /> },
              { t: "Full System Vacuum & Fill", d: "Removing air and moisture before refill.", i: <Droplets /> },
              { t: "Electronic Leak Detection", d: "Precise sensor-based gas leak identification.", i: <Search /> }
            ].map((s, idx) => (
              <div key={idx} className="group flex flex-col md:flex-row items-center gap-10 p-12 bg-white rounded-[64px] border border-gray-100 hover:border-secondary hover:shadow-2xl transition-all">
                <div className="w-24 h-24 bg-secondary/5 rounded-[32px] flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-inner shrink-0">{s.i}</div>
                <div className="flex flex-col gap-4 flex-1">
                   <h3 className="text-3xl font-heading font-black text-primary tracking-tight leading-tight">{s.t}</h3>
                   <p className="text-primary/40 font-medium text-sm leading-relaxed">{s.d}</p>
                   <button onClick={handleBookNow} className="w-fit text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-3 mt-2 border-b border-secondary/20 pb-1">Book Refill <ArrowRight size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE RECHARGE METER (RE-DESIGNED: Vertical Timeline) */}
      <section className="py-40 bg-primary text-white relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,115,230,1)_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="flex flex-col gap-14">
                <div className="flex flex-col gap-6">
                   <span className="text-secondary font-black tracking-[0.5em] uppercase text-[10px]">Charging Protocol</span>
                   <h2 className="text-[46px] md:text-[68px] font-heading font-black text-white leading-[1] tracking-tighter italic">Our <span className="text-secondary text-stroke">Frost-Refill</span> Process</h2>
                </div>
                <div className="flex flex-col gap-10 relative">
                   {/* Vertical Line */}
                   <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />
                   {[
                     { t: "Booking Confirmation", d: "Verified in 5 mins." },
                     { t: "Technical Inspection", d: "Evaluating current gas levels." },
                     { t: "Ultrasonic Leak Check", d: "Ensuring zero leakage." },
                     { t: "Full System Vacuum", d: "Removing moisture." },
                     { t: "Precision Gas Refill", d: "Charging to factory PSI." },
                     { t: "Cooling Verify", d: "Measuring 16°C discharge air." }
                   ].map((p, i) => (
                     <div key={i} className="flex items-center gap-10 group relative z-10">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-secondary backdrop-blur-xl group-hover:bg-secondary group-hover:text-white transition-all shadow-xl">
                           <span className="font-heading font-black text-xs leading-none">{i+1}</span>
                        </div>
                        <div className="flex flex-col">
                           <h3 className="text-2xl font-heading font-black text-white tracking-tight">{p.t}</h3>
                           <p className="text-white/30 text-sm font-medium">{p.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="relative">
                <div className="absolute -inset-10 bg-secondary/10 blur-[140px] pointer-events-none rounded-full" />
                <div className="relative bg-white/5 border border-white/10 p-16 md:p-24 rounded-[80px] backdrop-blur-3xl flex flex-col items-center text-center gap-12 shadow-3xl">
                   <Gauge size={100} className="text-secondary animate-pulse" />
                   <h3 className="text-[44px] md:text-[62px] font-heading font-black leading-[0.95] tracking-tighter">Ready For <br /> Total Frost?</h3>
                   <button onClick={handleBookNow} className="px-14 py-8 bg-secondary text-white rounded-[32px] font-black uppercase tracking-widest shadow-2xl hover:bg-white hover:text-secondary transition-all border-b-4 border-blue-700">Schedule Service Today</button>
                   <p className="text-white/20 font-bold text-xs uppercase tracking-[0.3em]">Restoring Icy Power Now</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-12">
               <SectionHeading sub="Elite Choice" title="Riyadh's Trusted Refill Fleet" center={false} />
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { t: "Experienced AC Techs", i: <Users /> },
                    { t: "Fast Riyadh Coverage", i: <MapPin /> },
                    { t: "Accurate Gauge Testing", i: <Gauge /> },
                    { t: "Leak Detection Tools", i: <Search /> },
                    { t: "Commercial Expertise", i: <Building2 /> },
                    { t: "Affordable Pricing", i: <ThumbsUp /> },
                    { t: "Quality Guaranteed", i: <ShieldCheck /> },
                    { t: "Fast Cooling Restoration", i: <Snowflake /> }
                  ].map((w, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-primary/70 font-bold text-lg"><CheckCircle2 size={24} className="text-secondary shrink-0" /> {w.t}</div>
                  ))}
               </div>
               <button onClick={handleBookNow} className="w-fit px-12 py-7 bg-primary text-white rounded-[28px] font-black uppercase tracking-widest shadow-2xl border-b-4 border-slate-800 hover:bg-secondary transition-all">Hire AC Experts Now</button>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-secondary rounded-[80px] -rotate-3 opacity-5 group-hover:rotate-0 transition-transform duration-700" />
               <img src="/optimized/pexels-5691632.webp" alt="Refill Team" className="w-full h-[650px] object-cover rounded-[72px] shadow-2xl transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. AREAS WE SERVE */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="Local Reach" title="Refill Services Across Riyadh" />
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

      {/* 8. EMERGENCY SECTION */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="relative bg-secondary p-12 md:p-24 rounded-[80px] overflow-hidden flex flex-col lg:flex-row items-center gap-16 shadow-3xl text-white">
              <div className="absolute top-0 right-0 p-32 opacity-10 rotate-12 pointer-events-none"><ZapIcon size={400} /></div>
              <div className="flex-1 flex flex-col gap-8 text-center lg:text-left relative z-10">
                 <span className="bg-white/20 text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.4em] shadow-xl w-fit mx-auto lg:mx-0">Summer Cooling Rescue</span>
                 <h2 className="text-[44px] md:text-[68px] font-heading font-black leading-tight tracking-tighter italic">Emergency <br /><span className="text-primary text-stroke">Same-Day</span> Refill</h2>
                 <p className="text-xl text-white/80 font-medium leading-relaxed max-w-xl italic">AC blowing hot air? We provide emergency cooling restoration during peak summer weeks across Riyadh City.</p>
              </div>
              <div className="flex-1 w-full max-w-md relative z-10">
                 <div className="bg-white p-12 rounded-[64px] shadow-2xl flex flex-col gap-8 text-center">
                    <span className="text-primary font-black text-xl tracking-[0.2em] uppercase">Restoration Hub</span>
                    <a href="tel:+966501234567" className="w-full px-12 py-7 bg-primary text-white rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-5 border-b-4 border-slate-800 shadow-xl hover:bg-secondary transition-all">
                       <Phone size={24} fill="currentColor" /> Call Emergency Team
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 9. REVIEWS */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="Customer Trust" title="Riyadh Residents Breathe Chill Air" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Khalid Al-Dosari", text: "My central AC was blowing lukewarm air. They refilled the gas and now it's freezing in 10 minutes. Very honest team." },
              { name: "Ahmed", text: "Fast response. They checked the leak with a sensor, fixed it, and then filled the gas. Very professional approach." },
              { name: "Sami", text: "Excellent same-day gas refill service. The price was very fair and the technician was very clean. Highly recommended." }
            ].map((r, idx) => (
              <div key={idx} className="p-16 bg-white rounded-[64px] border border-gray-50 flex flex-col gap-12 shadow-sm hover:shadow-2xl transition-all duration-700 text-left">
                <div className="flex gap-2">{[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#0073E6" stroke="#0073E6" />)}</div>
                <p className="text-xl text-primary/50 font-sans italic leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-secondary text-white rounded-3xl flex items-center justify-center font-black text-2xl shadow-lg">{r.name[0]}</div>
                   <div className="flex flex-col">
                      <span className="font-heading font-black text-primary text-xl tracking-tight">{r.name}</span>
                      <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Verified Cooling Fix</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SectionHeading sub="Refill Guide" title="Gas Refill FAQs" />
          <div className="flex flex-col gap-8 text-left">
            {[
              { q: "How do I know if my AC needs gas refill?", a: " Lukewarm air, hissing sounds, or ice formation on coils are the biggest warning signs." },
              { q: "How long does AC gas refill take?", a: "A standard refill with leak detection takes about 45-60 minutes." },
              { q: "Do you check for gas leakage?", a: "Yes, we always check for leaks before refilling to ensure you don't waste gas." },
              { q: "Do you refill gas for central AC systems?", a: "Absolutely. we handle all types of residential and commercial HVAC systems." }
            ].map((f, idx) => (
              <div key={idx} className="p-14 bg-[#F8FAFC] rounded-[48px] border border-gray-100 hover:border-secondary transition-all shadow-sm">
                <h3 className="text-2xl font-heading font-black text-primary mb-6 leading-tight">{f.q}</h3>
                <p className="text-primary/50 text-xl font-medium leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-40 bg-white flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-6xl w-full bg-primary p-12 md:p-24 rounded-[84px] text-white text-center flex flex-col items-center gap-14 relative overflow-hidden shadow-3xl">
          <div className="absolute top-[-10%] right-[-5%] p-24 opacity-10 rotate-12 pointer-events-none scale-150"><IceCream size={500} /></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
             <span className="bg-secondary text-white px-10 py-3 rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-xl italic">Frost Restoration</span>
             <h2 className="text-[44px] md:text-[68px] lg:text-[84px] font-heading font-black text-white leading-[0.9] tracking-tighter">Need Fast <br /><span className="text-secondary">Gas Refill?</span></h2>
          </div>
          <p className="text-xl md:text-2xl font-medium text-white/70 max-w-3xl leading-relaxed relative z-10">Book professional AC gas refill services today for better cooling, improved efficiency & reliable AC performance. 30-min response!</p>
          <div className="flex flex-col sm:flex-row gap-8 w-full max-w-3xl relative z-10">
             <button onClick={handleBookNow} className="flex-1 px-14 py-8 bg-secondary text-white rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-blue-700 shadow-2xl hover:bg-white hover:text-secondary transition-all"><Snowflake size={32} /> Book Refill</button>
             <a href="tel:+966501234567" className="flex-1 px-14 py-8 bg-white text-primary rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-slate-200 shadow-2xl hover:bg-secondary hover:text-white transition-all"><Phone size={32} fill="currentColor" /> Call Experts</a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName="AC Gas Refill" />
    </main>
  );
}
