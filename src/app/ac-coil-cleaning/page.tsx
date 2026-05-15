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
  Zap as ZapIcon, CheckCircle, RefreshCcw, Droplet, LayoutGrid,
  Cpu, ThermometerSnowflake, Cog
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ACCoilCleaningPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBookNow = () => setIsModalOpen(true);

  const SectionHeading = ({ sub, title, center = true, light = false }: any) => (
    <div className={cn("flex flex-col gap-6 mb-24", center ? "items-center text-center" : "items-start text-left")}>
      <span className={cn("font-black tracking-[0.4em] uppercase text-[11px] px-7 py-3 rounded-full w-fit shadow-sm", light ? "bg-white/10 text-secondary border border-white/20" : "bg-secondary/10 text-secondary")}>{sub}</span>
      <h2 className={cn("text-[42px] md:text-[60px] lg:text-[72px] font-heading font-black leading-[1.1] tracking-tighter max-w-4xl", light ? "text-white" : "text-primary")}>{title}</h2>
    </div>
  );

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Navbar onBookNow={handleBookNow} />

      {/* 1. CLEAN & PREMIUM HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 bg-white overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/[0.03] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/[0.01] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col gap-10">
              <div className="flex items-center gap-3">
                 <div className="h-px w-12 bg-secondary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">The Heart of Cooling</span>
              </div>
              <h1 className="text-[60px] md:text-[84px] lg:text-[96px] font-heading font-black text-primary leading-[1] tracking-tighter">
                Expert AC <span className="text-secondary italic">Coil Cleaning</span> & Combing in Riyadh
              </h1>
              <p className="text-xl md:text-2xl text-primary/60 font-medium max-w-xl leading-relaxed">
                Restore 100% cooling capacity and slash your energy bills with professional evaporator & condenser coil deep-cleaning in Riyadh.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                <button onClick={handleBookNow} className="w-full sm:w-auto px-12 py-7 bg-secondary text-white rounded-[24px] font-black text-lg tracking-widest transition-all shadow-2xl hover:bg-primary active:scale-95 flex items-center justify-center gap-5">
                  <Cog size={24} /> Book Coil Cleaning
                </button>
                <a href="tel:+966501234567" className="w-full sm:w-auto px-12 py-7 bg-white text-primary border-2 border-gray-100 rounded-[24px] font-black text-lg tracking-widest transition-all shadow-xl hover:border-secondary hover:text-secondary active:scale-95 flex items-center justify-center gap-5">
                  <Phone size={24} /> Call Expert
                </a>
              </div>

              <div className="flex items-center gap-12 pt-10 border-t border-gray-100">
                 <div className="flex flex-col gap-1">
                    <span className="text-3xl font-heading font-black text-primary leading-none">100%</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Efficiency</span>
                 </div>
                 <div className="w-px h-12 bg-gray-100" />
                 <div className="flex flex-col gap-1">
                    <span className="text-3xl font-heading font-black text-secondary leading-none">Same Day</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Service</span>
                 </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
              <div className="relative z-10 rounded-[64px] overflow-hidden shadow-3xl border-8 border-white group">
                <img src="/optimized/pexels-5691657.webp" alt="AC Coil Cleaning" className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Floating Trust Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-10 rounded-[40px] shadow-2xl border border-gray-50 flex flex-col items-center gap-4 animate-bounce-slow">
                 <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-lg"><Snowflake size={32} /></div>
                 <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Pure Cooling</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SPACIOUS INTRO SECTION */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-10">
               <SectionHeading sub="The Silent Threat" title="Dirty Coils Kill AC Performance" center={false} />
               <p className="text-xl text-primary/50 font-medium leading-relaxed italic border-l-4 border-secondary pl-8">
                  Riyadh's fine sand acts as an insulating blanket on your AC coils, trapping heat and forcing your system to run continuously. Our specialized foam-wash restored metal-to-air contact for maximum chill.
               </p>
               <button onClick={handleBookNow} className="w-fit px-12 py-6 bg-primary text-white rounded-[20px] font-black uppercase tracking-widest text-sm shadow-xl hover:bg-secondary transition-all">Schedule Cleaning</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { t: "Indoor Coils", d: "Evaporator units", i: <Snowflake /> },
                 { t: "Outdoor Coils", d: "Condenser units", i: <ThermometerSnowflake /> }
               ].map((item, idx) => (
                 <div key={idx} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-50 hover:border-secondary transition-all group flex flex-col gap-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-inner">{item.i}</div>
                    <div className="flex flex-col gap-2">
                       <h3 className="text-2xl font-heading font-black text-primary tracking-tight leading-none">{item.t}</h3>
                       <p className="text-xs font-bold text-primary/30 uppercase tracking-widest">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY COIL CLEANING MATTERS (Clean Grid) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="The Benefits" title="Why Pure Coils Matter" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { t: "Icy Cooling", i: <Snowflake />, d: "Restore factory performance." },
              { t: "Energy Savings", i: <Zap />, d: "Save up to 35% on bills." },
              { t: "Faster Chilling", i: <Activity />, d: "Room cools in half the time." },
              { t: "Better Airflow", i: <Wind />, d: "Unrestricted fan blast." },
              { t: "Protect Compressor", i: <ShieldCheck />, d: "Prevent system overheat." },
              { t: "Longer Lifespan", i: <Clock />, d: "Reduce unit wear & tear." },
              { t: "Healthier Air", i: <Sparkles />, d: "Remove mold & bacteria." },
              { t: "Fewer Repairs", i: <Cog size={24} />, d: "Stop sudden breakdowns." }
            ].map((v, idx) => (
              <div key={idx} className="p-10 bg-[#F8FAFC] rounded-[48px] border border-gray-100 flex flex-col items-center text-center gap-6 group hover:bg-secondary hover:-translate-y-4 transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 transition-transform">{v.i}</div>
                <div className="flex flex-col gap-2">
                   <h3 className="text-xl font-heading font-black text-primary group-hover:text-white tracking-tight">{v.t}</h3>
                   <p className="text-[10px] font-black text-primary/30 group-hover:text-white/40 uppercase tracking-widest leading-relaxed">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 flex justify-center"><button onClick={handleBookNow} className="px-14 py-7 bg-primary text-white rounded-[24px] font-black uppercase tracking-widest shadow-2xl hover:bg-secondary active:scale-95 transition-all">Clean My AC Coils Now</button></div>
        </div>
      </section>

      {/* 4. OUR COIL SERVICES (Clean Horizontal Catalog) */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Our Solutions" title="Complete Coil Restoration" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { t: "Evaporator Cleaning", d: "Deep wash for indoor units.", i: <Snowflake /> },
              { t: "Condenser Cleaning", d: "Power wash for outdoor units.", i: <ThermometerSnowflake /> },
              { t: "Split AC Service", d: "Standard home unit deep-wash.", i: <LayoutGrid /> },
              { t: "Central HVAC Care", d: "Large industrial coil solutions.", i: <Building2 /> },
              { t: "Outdoor Sanitizing", d: "Removing dust from exterior vents.", i: <Wind /> },
              { t: "Deep Coil Descaling", d: "Removing calcium buildup.", i: <Droplets /> }
            ].map((s, idx) => (
              <div key={idx} className="p-12 bg-white rounded-[48px] border border-gray-100 group hover:border-secondary transition-all shadow-sm">
                <div className="w-16 h-16 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-inner mb-10">{s.i}</div>
                <div className="flex flex-col gap-4">
                   <h3 className="text-2xl font-heading font-black text-primary tracking-tight leading-tight">{s.t}</h3>
                   <p className="text-primary/40 font-medium text-sm leading-relaxed">{s.d}</p>
                   <button onClick={handleBookNow} className="mt-8 text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-3 border-b border-secondary/20 pb-1 group-hover:text-primary transition-colors">Book Service <ArrowRight size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SIGNS YOUR COILS NEED CLEANING (Diagnostic Warning Strip) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="The Warning Signs" title="Is Your AC Overheating?" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
             <div className="md:col-span-7 bg-primary rounded-[56px] p-16 flex flex-col justify-end gap-10 relative overflow-hidden text-white group hover:-translate-y-4 transition-all duration-700 shadow-3xl">
                <div className="absolute top-0 right-0 p-24 opacity-5 group-hover:rotate-12 transition-transform duration-700 pointer-events-none"><Cog size={250} /></div>
                <span className="bg-secondary text-white px-8 py-3 rounded-full w-fit font-black text-[10px] uppercase tracking-widest shadow-xl italic animate-pulse">Critical Signal</span>
                <div className="relative z-10 flex flex-col gap-6">
                   <h3 className="text-[44px] md:text-[62px] font-heading font-black leading-[1] tracking-tighter max-w-2xl text-white">Frozen Coils & <br /> Warm Airflow</h3>
                   <p className="text-white/50 text-xl font-medium max-w-xl">If you see ice on your unit or feel warm air, your coils are likely buried in dust. This can lead to total compressor failure.</p>
                </div>
                <button onClick={handleBookNow} className="w-fit px-12 py-7 bg-white text-primary rounded-[24px] font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-secondary hover:text-white transition-all">Request Inspection</button>
             </div>
             <div className="md:col-span-5 grid grid-cols-1 gap-8">
                {[
                  { t: "Slow Room Cooling", d: "Never reaches 18°C.", i: <Clock /> },
                  { t: "High Power Bills", d: "System runs 24/7.", i: <Zap /> }
                ].map((s, i) => (
                  <div key={i} className="bg-[#F8FAFC] rounded-[48px] p-10 flex items-center gap-8 border border-gray-100 hover:border-secondary transition-all shadow-sm group">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm transition-transform group-hover:scale-110">{s.i}</div>
                     <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-heading font-black text-primary leading-tight tracking-tight">{s.t}</h3>
                        <span className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em]">{s.d}</span>
                     </div>
                  </div>
                ))}
                <div className="p-10 bg-secondary rounded-[48px] text-white flex flex-col gap-4">
                   <h3 className="text-2xl font-heading font-black leading-tight tracking-tight">Weak Airflow?</h3>
                   <p className="text-white/70 font-medium text-sm">Dirty coils are often the hidden reason for weak fan pressure.</p>
                   <button onClick={handleBookNow} className="w-fit text-[10px] font-black uppercase tracking-widest border-b border-white/40 pb-1">Check My Coils</button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. COIL CLEANING PROCESS (Minimal Vertical Steps) */}
      <section className="py-40 bg-primary text-white relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center text-left">
            <div className="flex flex-col gap-14">
               <span className="text-secondary font-black tracking-[0.6em] uppercase text-[10px]">Restoration Hub</span>
               <h2 className="text-[46px] md:text-[68px] font-heading font-black text-white leading-[1] tracking-tighter italic">Our <span className="text-secondary text-stroke">6-Step</span> Wash</h2>
               <div className="flex flex-col gap-10">
                  {[
                    { t: "Service Booking", d: "Fast confirmation in 5 minutes." },
                    { t: "System Audit", d: "Thermal imaging of coil blockage." },
                    { t: "Coil Access", d: "Professional unit disassembly." },
                    { t: "Chemical Wash", d: "Eco-friendly coil foaming." },
                    { t: "Antibacterial Scour", d: "Total mold elimination." },
                    { t: "Final Temp Test", d: "Verifying icy discharge air." }
                  ].map((p, idx) => (
                    <div key={idx} className="flex items-center gap-10 group">
                       <span className="text-3xl font-heading font-black text-secondary/30 group-hover:text-secondary transition-colors leading-none">0{idx+1}</span>
                       <div className="flex flex-col">
                          <h3 className="text-2xl font-heading font-black text-white tracking-tight leading-tight">{p.t}</h3>
                          <p className="text-white/40 font-medium text-sm">{p.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-10 bg-secondary/10 blur-[140px] pointer-events-none rounded-full" />
               <div className="relative bg-white/5 border border-white/10 p-16 md:p-24 rounded-[64px] backdrop-blur-3xl flex flex-col items-center text-center gap-12 shadow-3xl">
                  <Snowflake size={100} className="text-secondary animate-pulse" />
                  <h3 className="text-[44px] md:text-[62px] font-heading font-black leading-tight tracking-tighter italic text-white">Restore The <br /> Icy Blast</h3>
                  <button onClick={handleBookNow} className="px-14 py-8 bg-white text-primary rounded-[24px] font-black uppercase tracking-widest shadow-2xl hover:bg-secondary hover:text-white transition-all border-b-4 border-slate-200">Schedule Service Today</button>
                  <p className="text-white/20 font-bold text-xs uppercase tracking-[0.3em]">Guaranteed Pure Flow</p>
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
               <SectionHeading sub="The Choice" title="Riyadh's Thermal Experts" center={false} />
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { t: "Experienced HVAC Techs", i: <Users /> },
                    { t: "Advanced Wash Tools", i: <Layers /> },
                    { t: "Eco-Friendly Foams", i: <Sparkles /> },
                    { t: "Fast Riyadh Coverage", i: <MapPin /> },
                    { t: "Commercial Expertise", i: <Building2 /> },
                    { t: "Affordable Pricing", i: <ThumbsUp /> },
                    { t: "Quality Guaranteed", i: <ShieldCheck /> },
                    { t: "Thermal Specialists", i: <Snowflake /> }
                  ].map((w, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-primary/70 font-bold text-lg text-left"><CheckCircle2 size={24} className="text-secondary shrink-0" /> {w.t}</div>
                  ))}
               </div>
               <button onClick={handleBookNow} className="w-fit px-12 py-7 bg-primary text-white rounded-[24px] font-black uppercase tracking-widest shadow-2xl hover:bg-secondary transition-all">Hire Coil Experts Now</button>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-secondary rounded-[64px] rotate-3 opacity-5 group-hover:rotate-0 transition-transform duration-700" />
               <img src="/optimized/pexels-5691657.webp" alt="Coil Cleaning Process" className="w-full h-[600px] object-cover rounded-[56px] shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. AREAS WE SERVE */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="Local Reach" title="Coil Services Across Riyadh" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {["Al Olaya", "Al Malaz", "Al Yasmin", "Al Narjis", "Al Sahafa", "Al Malqa", "Al Aqiq", "Hittin", "Al Nakheel", "Al Rawdah", "Al Sulaymaniyah", "Al Rabwah", "Al Munsiyah", "Al Qadisiyah", "Al Shifa"].map(area => (
              <div key={area} className="p-10 bg-white rounded-[32px] border border-gray-50 flex flex-col items-center gap-6 group hover:border-secondary transition-all cursor-pointer shadow-sm">
                <MapPin size={28} className="text-secondary group-hover:scale-125 transition-transform" />
                <span className="text-[11px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ENERGY EFFICIENCY (Clean Wellness Card) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="relative bg-primary p-12 md:p-24 rounded-[64px] overflow-hidden flex flex-col lg:flex-row items-center gap-24 text-white shadow-3xl">
              <div className="flex-1 flex flex-col gap-10 text-left">
                 <span className="bg-white/10 text-secondary px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest italic w-fit">The Efficiency Audit</span>
                 <h2 className="text-[44px] md:text-[64px] font-heading font-black text-white leading-tight tracking-tighter">Slash Your Electricity <br /><span className="text-secondary">Bills By 35%</span></h2>
                 <p className="text-xl text-white/50 font-medium leading-relaxed italic border-l-4 border-secondary/20 pl-8">Clean coils reach the target temperature 40% faster. This reduces compressor run-time and slashes your monthly electricity costs significantly.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {["Lower Power Usage", "Faster Room Cooling", "Better Circulation", "Reduced Workload", "Improved Performance", "Cost Savings"].map(h => (
                       <div key={h} className="flex items-center gap-3 text-white font-bold text-lg"><Zap size={20} className="text-secondary" /> {h}</div>
                    ))}
                 </div>
                 <button onClick={handleBookNow} className="w-fit px-12 py-6 bg-secondary text-white rounded-[20px] font-black uppercase tracking-widest text-sm shadow-xl hover:bg-white hover:text-primary transition-all">Improve AC Efficiency</button>
              </div>
              <div className="flex-1 relative group">
                 <div className="absolute inset-0 bg-white/5 rounded-[48px] rotate-3 opacity-10 group-hover:rotate-0 transition-transform" />
                 <img src="/optimized/pexels-5691657.webp" alt="Energy Saving AC" className="w-full h-[500px] object-cover rounded-[48px] shadow-2xl" />
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
              { name: "Abdullah", text: "My AC was barely cooling even at 16 degrees. After they cleaned the coils, it feels like a new machine. Very impressed!" },
              { name: "Faisal", text: "Professional service. They showed me the dirt on the condenser coils and cleaned them thoroughly. Cooling is much better now." },
              { name: "Reema", text: "Excellent work on my central AC coils. The room chills down much faster and my electricity bill is lower. Highly recommend!" }
            ].map((r, idx) => (
              <div key={idx} className="p-16 bg-white rounded-[48px] border border-gray-50 flex flex-col gap-12 shadow-sm hover:shadow-2xl transition-all duration-700 text-left">
                <div className="flex gap-2">{[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#0073E6" stroke="#0073E6" />)}</div>
                <p className="text-xl text-primary/50 font-sans italic leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg">{r.name[0]}</div>
                   <div className="flex flex-col">
                      <span className="font-heading font-black text-primary text-xl tracking-tight">{r.name}</span>
                      <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Verified Thermal Result</span>
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
          <SectionHeading sub="Thermal Guide" title="Coil Cleaning FAQs" />
          <div className="flex flex-col gap-8 text-left">
            {[
              { q: "How often should AC coils be cleaned?", a: "We recommend cleaning evaporator and condenser coils at least once a year in Riyadh, or twice if you live near dusty areas." },
              { q: "What are the benefits of coil cleaning?", a: "Improved cooling, better energy efficiency, lower bills, and a longer lifespan for your AC compressor." },
              { q: "Do you clean evaporator & condenser coils?", a: "Yes, we provide deep-cleaning for both the indoor (evaporator) and outdoor (condenser) coils." },
              { q: "Is coil cleaning necessary in Riyadh?", a: "Absolutely. Riyadh's fine sand acts as an insulator on coils, causing systems to overheat and fail prematurely." }
            ].map((f, idx) => (
              <div key={idx} className="p-14 bg-[#F8FAFC] rounded-[40px] border border-gray-100 hover:border-secondary transition-all shadow-sm">
                <h3 className="text-2xl font-heading font-black text-primary mb-6 leading-tight tracking-tight">{f.q}</h3>
                <p className="text-primary/50 text-xl font-medium leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-40 bg-white flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-6xl w-full bg-primary p-12 md:p-24 rounded-[84px] text-white text-center flex flex-col items-center gap-14 relative overflow-hidden shadow-3xl">
          <div className="absolute top-[-10%] right-[-5%] p-24 opacity-10 rotate-12 pointer-events-none scale-150"><Cog size={500} /></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
             <span className="bg-secondary text-white px-10 py-3 rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-xl italic">Thermal Efficiency Boost</span>
             <h2 className="text-[44px] md:text-[68px] lg:text-[84px] font-heading font-black text-white leading-[0.9] tracking-tighter">Need Pure Air <br /><span className="text-secondary">Coil Cleaning?</span></h2>
          </div>
          <p className="text-xl md:text-2xl font-medium text-white/70 max-w-3xl leading-relaxed relative z-10">Book expert AC coil cleaning services today for improved cooling, better airflow & maximum AC efficiency for your Riyadh home.</p>
          <div className="flex flex-col sm:flex-row gap-8 w-full max-w-3xl relative z-10">
             <button onClick={handleBookNow} className="flex-1 px-14 py-8 bg-secondary text-white rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-blue-700 shadow-2xl hover:bg-white hover:text-secondary transition-all"><Cog size={32} /> Book Cleaning</button>
             <a href="tel:+966501234567" className="flex-1 px-14 py-8 bg-white text-primary rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-slate-200 shadow-2xl hover:bg-secondary hover:text-white transition-all"><Phone size={32} fill="currentColor" /> Call AC Experts</a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName="AC Coil Cleaning" />
    </main>
  );
}
