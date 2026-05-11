"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingActions from "@/components/FloatingActions";
import { motion } from "framer-motion";
import { 
  Phone, ShieldCheck, Clock, Zap, CheckCircle2, ArrowRight, Star, MapPin, 
  Settings, LayoutGrid, Building2, Home, Wind, Snowflake, Gauge, Activity, 
  Search, ThumbsUp, Smartphone, AlertTriangle, Calendar, ClipboardCheck, 
  ShieldPlus, Heart, MousePointer2, Briefcase, Users, Wrench, Hammer, 
  Droplets, Trash2, Filter, ZapOff, Sparkles, Thermometer, ShieldAlert, BadgeCheck,
  Fan, Check
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ACMaintenancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBookNow = () => setIsModalOpen(true);

  const SectionHeading = ({ sub, title, center = true, light = false }: any) => (
    <div className={cn("flex flex-col gap-4 mb-20", center ? "items-center text-center" : "items-start text-left")}>
      <span className={cn("font-black tracking-[0.3em] uppercase text-[10px] px-5 py-2 rounded-full w-fit", light ? "bg-white/10 text-secondary" : "bg-secondary/10 text-secondary")}>{sub}</span>
      <h2 className={cn("text-[32px] md:text-[46px] font-heading font-black leading-tight tracking-tighter max-w-3xl", light ? "text-white" : "text-primary")}>{title}</h2>
    </div>
  );

  const ButtonGroup = ({ className, customZapText = "Book Maintenance" }: any) => (
    <div className={cn("flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto", className)}>
      <a href="tel:+966501234567" className="w-full sm:flex-1 px-8 md:px-10 py-5 md:py-6 bg-secondary text-white rounded-[20px] font-black text-sm md:text-base tracking-widest transition-all shadow-xl flex items-center justify-center gap-4 hover:-translate-y-1 active:scale-95 border-b-4 border-blue-700">
        <Phone size={20} fill="currentColor" /> Call Now
      </a>
      <button onClick={handleBookNow} className="w-full sm:flex-1 px-8 md:px-10 py-5 md:py-6 bg-primary text-white rounded-[20px] font-black text-sm md:text-base tracking-widest transition-all shadow-xl flex items-center justify-center gap-4 hover:-translate-y-1 active:scale-95 border-b-4 border-slate-800">
        <Zap size={20} /> {customZapText}
      </button>
    </div>
  );

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Navbar onBookNow={handleBookNow} />

      {/* 1. RELIABILITY HERO */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(rgba(0,115,230,1)_2px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7 flex flex-col gap-10 text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                 {["Certified Technicians", "Same Day Service", "Preventive Care", "24/7 Support"].map(t => (
                   <span key={t} className="bg-[#F8FAFC] text-primary border border-gray-100 px-5 py-2.5 rounded-full text-[10px] font-black tracking-widest uppercase flex items-center gap-2 shadow-sm"><ShieldCheck size={14} className="text-secondary" /> {t}</span>
                 ))}
              </div>
              <h1 className="text-[48px] md:text-[68px] lg:text-[80px] font-heading font-black text-primary leading-[1] tracking-tight">
                Elite <span className="text-secondary text-stroke">Maintenance</span> <br /> For Riyadh Homes
              </h1>
              <p className="text-xl md:text-2xl text-primary/70 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed italic">
                “Keep your AC running efficiently with expert maintenance solutions for homes, offices & commercial properties.”
              </p>
              <div className="flex flex-col gap-8 items-center lg:items-start">
                <ButtonGroup customZapText="Book AC Maintenance" />
                <div className="flex items-center gap-6 p-4 bg-secondary/5 rounded-[24px] border border-secondary/10 shadow-inner">
                   <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm"><Calendar size={24} /></div>
                   <div className="flex flex-col text-left">
                      <span className="text-xs font-black uppercase tracking-widest text-primary">Scheduled Tune-Ups</span>
                      <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Guaranteed Performance</span>
                   </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-5 relative">
              <div className="relative rounded-[72px] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,115,230,0.15)] border-[12px] border-white group">
                <img src="https://images.pexels.com/photos/5691629/pexels-photo-5691629.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="AC Maintenance Service" className="w-full h-[650px] object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <SectionHeading sub="Prevention is Key" title="Maintain Your Cooling Before the Breakdowns" center={false} />
              <p className="text-xl text-primary/60 font-medium leading-relaxed mb-10">
                Riyadh's extreme weather puts massive strain on AC systems. Regular maintenance prevents expensive breakdowns, improves cooling efficiency, and lowers your electricity bills by up to 30%.
              </p>
              <button onClick={handleBookNow} className="px-12 py-6 bg-primary text-white rounded-[24px] font-black uppercase tracking-widest text-sm shadow-xl hover:bg-secondary transition-all border-b-4 border-slate-800">Schedule Maintenance</button>
            </div>
            <div className="grid grid-cols-1 gap-6">
               {[
                 { t: "Lower Energy Bills", d: "Clean systems use less power.", i: <Zap /> },
                 { t: "Fewer Repairs", d: "Detect issues before they become crises.", i: <ShieldCheck /> }
               ].map((x, i) => (
                 <div key={i} className="flex items-center gap-8 p-10 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-50">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">{x.i}</div>
                    <div className="flex flex-col"><h3 className="text-2xl font-heading font-black text-primary leading-tight">{x.t}</h3><p className="text-primary/40 font-medium text-sm leading-relaxed">{x.d}</p></div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAINTENANCE ADVANTAGE (RE-DESIGNED: Value Spotlight) */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 flex flex-col gap-12">
               <SectionHeading sub="The Value Spotlight" title="Why Scheduled Care is Your Smartest Investment" center={false} />
               <div className="flex flex-col gap-8">
                 {[
                   { t: "30% Energy Reduction", d: "A clean system transfers heat effectively, reducing load.", i: <Zap /> },
                   { t: "100% Breathable Air", d: "We remove bacteria & mold from your internal units.", i: <Wind /> },
                   { t: "Zero Breakdown Stress", d: "Emergency-proof your home for the Riyadh summer.", i: <ShieldCheck /> },
                   { t: "Extended Lifespan", d: "Prevent parts from wearing out before their time.", i: <Clock /> }
                 ].map((v, idx) => (
                   <div key={idx} className="group flex items-start gap-8 p-8 rounded-[32px] hover:bg-secondary/5 transition-all">
                      <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">{v.i}</div>
                      <div className="flex flex-col">
                         <h4 className="text-xl font-heading font-black text-primary tracking-tight">{v.t}</h4>
                         <p className="text-primary/50 font-medium text-sm leading-relaxed mt-1">{v.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="order-1 lg:order-2 relative group">
               <div className="absolute -inset-10 bg-secondary/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-secondary/10 transition-colors" />
               <div className="relative bg-[#F8FAFC] p-12 rounded-[80px] border border-gray-100">
                  <img src="https://images.pexels.com/photos/5691657/pexels-photo-5691657.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Value Advantage" className="w-full h-[500px] object-cover rounded-[56px] shadow-2xl" />
                  <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[48px] shadow-2xl border border-gray-100 flex flex-col items-center gap-2">
                     <span className="text-secondary font-black text-4xl">40%</span>
                     <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest">More Efficient</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MAINTENANCE PLANS (RE-DESIGNED: Staggered Checklist Cards) */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Tune-Up Protocol" title="Comprehensive Maintenance Checkpoints" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              { 
                t: "Split AC Master Plan", 
                d: "Specialized servicing for home wall-units.", 
                i: <LayoutGrid />,
                features: ["Thermostat calibration", "Drain line clearance", "Filter deep wash", "Fan motor lubrication"]
              },
              { 
                t: "Central HVAC Audit", 
                d: "Commercial-grade tuning for large systems.", 
                i: <Building2 />,
                features: ["Ductwork inspection", "Coil pressure wash", "Gas charge check", "Contactor testing"]
              },
              { 
                t: "Performance Diagnostics", 
                d: "Data-driven audit of your AC health.", 
                i: <Activity />,
                features: ["Current draw testing", "Airflow velocity check", "Vibration analysis", "BTU output verify"]
              },
              { 
                t: "Electrical Safety Check", 
                d: "Preventing fire & short-circuit risks.", 
                i: <ZapOff />,
                features: ["Loose wire tightening", "Capacitor health check", "Breaker inspection", "Earthing verification"]
              }
            ].map((p, idx) => (
              <div key={idx} className="group relative p-12 bg-white rounded-[64px] border border-gray-100 flex flex-col md:flex-row gap-12 transition-all hover:border-secondary hover:shadow-2xl">
                 <div className="flex flex-col gap-8 flex-1">
                    <div className="w-20 h-20 bg-secondary/5 rounded-[32px] flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-inner">{p.i}</div>
                    <div className="flex flex-col gap-4">
                       <h3 className="text-3xl font-heading font-black text-primary tracking-tight leading-tight">{p.t}</h3>
                       <p className="text-primary/50 font-medium text-sm leading-relaxed">{p.d}</p>
                    </div>
                    <button onClick={handleBookNow} className="px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg w-fit group-hover:bg-secondary transition-all">Book This Plan</button>
                 </div>
                 <div className="flex-1 bg-[#F8FAFC] p-8 rounded-[40px] border border-gray-50 flex flex-col gap-5 group-hover:bg-white transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 border-b border-gray-100 pb-3 block">Included Checkpoints</span>
                    {p.features.map((f, i) => (
                       <div key={i} className="flex items-center gap-3 text-primary/70 font-bold text-sm">
                          <div className="w-5 h-5 bg-secondary/10 rounded-full flex items-center justify-center text-secondary"><Check size={12} /></div>
                          {f}
                       </div>
                    ))}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IS YOUR AC CRYING FOR HELP? (RE-DESIGNED: Diagnostic Warning Grid) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center gap-6 mb-24">
             <span className="bg-secondary/10 text-secondary font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2.5 rounded-full">Diagnostic Center</span>
             <h2 className="text-[46px] md:text-[64px] font-heading font-black text-primary tracking-tighter leading-[0.95]">Is Your AC <br /><span className="text-secondary italic">Crying For Help?</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto lg:h-[800px]">
             {/* Large Priority Warning */}
             <div className="md:col-span-8 relative bg-primary rounded-[64px] p-16 flex flex-col justify-end gap-10 overflow-hidden text-white group shadow-2xl transition-all hover:-translate-y-4">
                <div className="absolute top-0 right-0 p-24 opacity-10 group-hover:rotate-12 transition-transform duration-700"><AlertTriangle size={300} /></div>
                <span className="bg-secondary text-white px-6 py-2.5 rounded-full w-fit font-black text-[10px] uppercase tracking-widest shadow-xl animate-pulse">Critical Signal</span>
                <div className="flex flex-col gap-6 relative z-10">
                   <h3 className="text-[42px] md:text-[56px] font-heading font-black leading-tight tracking-tighter">Weak Cooling & <br /> High Utility Bills</h3>
                   <p className="text-white/60 text-lg font-medium max-w-xl">If your AC is blowing lukewarm air or your bills are spiking, your system is working 2X harder due to lack of maintenance. This is the #1 sign of a pending breakdown.</p>
                </div>
                <button onClick={handleBookNow} className="w-fit px-12 py-6 bg-white text-primary rounded-[24px] font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-secondary hover:text-white transition-all">Fix It Before It Fails</button>
             </div>

             {/* Staggered Secondary Signs */}
             <div className="md:col-span-4 grid grid-cols-1 gap-8">
                {[
                  { t: "Unusual Noises", i: <Activity />, d: "Grinding or buzzing sounds." },
                  { t: "Water Leakage", i: <Droplets />, d: "Clogged drain lines & pans." }
                ].map((s, i) => (
                  <div key={i} className="bg-[#F8FAFC] rounded-[56px] p-12 flex flex-col gap-8 border border-gray-100 hover:border-secondary hover:bg-white transition-all shadow-sm hover:shadow-xl">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm transition-transform hover:scale-110">{s.i}</div>
                     <div className="flex flex-col gap-2">
                        <h4 className="text-2xl font-heading font-black text-primary tracking-tight leading-none">{s.t}</h4>
                        <p className="text-primary/40 font-bold text-xs uppercase tracking-widest mt-2">{s.d}</p>
                     </div>
                  </div>
                ))}
             </div>

             {/* Bottom Horizontal Signs */}
             <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { t: "Bad Smell", i: <Wind /> },
                  { t: "Poor Airflow", i: <Fan /> },
                  { t: "Frequent Shutdown", i: <ZapOff /> },
                  { t: "Uneven Chill", i: <Thermometer /> }
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-[48px] p-10 border border-gray-50 shadow-sm flex items-center gap-6 group hover:border-secondary transition-all">
                     <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">{s.i}</div>
                     <span className="font-heading font-black text-primary text-xl tracking-tight leading-none">{s.t}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 6. MAINTENANCE PROCESS (Visual Tune-Up) */}
      <section className="py-40 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
          <SectionHeading sub="Maintenance Protocol" title="Our 6-Step Tune-Up Process" light={true} />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {[
              { t: "Booking", i: <Smartphone /> },
              { t: "Inspection", i: <Search /> },
              { t: "Cleaning", i: <Droplets /> },
              { t: "Testing", i: <Activity /> },
              { t: "Gas Check", i: <Gauge /> },
              { t: "Report", i: <ClipboardCheck /> }
            ].map((s, idx) => (
              <div key={idx} className="flex flex-col items-center gap-8 group">
                <div className="w-24 h-24 bg-white/5 rounded-[40px] border border-white/10 flex items-center justify-center text-secondary backdrop-blur-xl group-hover:-translate-y-4 group-hover:bg-secondary transition-all duration-500 shadow-2xl">{s.i}</div>
                <h3 className="text-[11px] font-heading font-black text-white/50 uppercase tracking-[0.3em]">{s.t}</h3>
              </div>
            ))}
          </div>
          <button onClick={handleBookNow} className="mt-24 px-14 py-7 bg-secondary text-white rounded-[24px] font-black uppercase tracking-widest shadow-2xl border-b-4 border-blue-700 active:scale-95 transition-all">Schedule Service Today</button>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-12 text-left">
               <SectionHeading sub="The Reliability Factor" title="Riyadh's Most Trusted Maintenance Team" center={false} />
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { t: "Experienced AC Technicians", i: <Users /> },
                    { t: "Fast Service Across Riyadh", i: <MapPin /> },
                    { t: "Advanced Diagnostic Tools", i: <Search /> },
                    { t: "Affordable Solutions", i: <ThumbsUp /> },
                    { t: "Commercial Expertise", i: <Building2 /> },
                    { t: "Preventive Plans", i: <Calendar /> },
                    { t: "Quality Standards", i: <ShieldCheck /> },
                    { t: "Satisfaction Guaranteed", i: <Heart /> }
                  ].map((w, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-primary/70 font-bold text-lg"><CheckCircle2 size={24} className="text-secondary shrink-0" /> {w.t}</div>
                  ))}
               </div>
               <button onClick={handleBookNow} className="w-fit px-12 py-7 bg-primary text-white rounded-[28px] font-black uppercase tracking-widest shadow-2xl border-b-4 border-slate-800 hover:bg-secondary transition-all">Hire AC Experts Now</button>
            </div>
            <div className="relative group">
               <div className="absolute inset-0 bg-secondary rounded-[80px] rotate-3 opacity-5 group-hover:rotate-0 transition-transform duration-700" />
               <img src="https://images.pexels.com/photos/5691657/pexels-photo-5691657.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="AC Technicians Riyadh" className="w-full h-[650px] object-cover rounded-[72px] shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. AREAS WE SERVE */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Local Reach" title="Reliable Maintenance Across Riyadh" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {["Al Olaya", "Al Malaz", "Al Yasmin", "Al Narjis", "Al Sahafa", "Al Malqa", "Al Aqiq", "Hittin", "Al Nakheel", "Al Rawdah", "Al Sulaymaniyah", "Al Rabwah", "Al Munsiyah", "Al Qadisiyah", "Al Shifa"].map(area => (
              <div key={area} className="p-12 bg-white rounded-[40px] border border-gray-50 flex flex-col items-center gap-6 group hover:border-secondary transition-all cursor-pointer shadow-sm text-center text-primary/40 group-hover:text-primary">
                <MapPin size={32} className="text-secondary group-hover:scale-125 transition-transform duration-500" />
                <span className="text-xs font-black uppercase tracking-widest">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ANNUAL MAINTENANCE CONTRACT (AMC) */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="relative bg-primary p-12 md:p-24 rounded-[80px] overflow-hidden flex flex-col items-center text-center gap-14 shadow-3xl text-white">
              <div className="absolute top-0 right-0 p-32 opacity-10 rotate-12 pointer-events-none"><ShieldPlus size={400} /></div>
              <div className="relative z-10 flex flex-col items-center gap-8">
                 <span className="bg-secondary text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-xl italic">Premium Membership</span>
                 <h2 className="text-[44px] md:text-[68px] font-heading font-black leading-tight tracking-tighter">Annual <br /><span className="text-secondary">Maintenance</span> Contracts</h2>
                 <p className="text-xl md:text-2xl font-medium text-white/70 max-w-2xl leading-relaxed">Join our AMC plan for priority support, scheduled inspections, and zero breakdown stress throughout the Riyadh summer.</p>
              </div>
              <button onClick={handleBookNow} className="w-full max-w-md px-12 py-7 bg-secondary text-white rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-5 border-b-4 border-blue-700 shadow-2xl relative z-10 hover:bg-white hover:text-secondary transition-all">
                 <ShieldPlus size={24} /> Request AMC Plan
              </button>
           </div>
        </div>
      </section>

      {/* 10. REVIEWS */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Customer Trust" title="What Our Maintained Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Abdullah", text: "I've been using their AMC plan for 3 years. My AC has never broken down even in the peak of July. Best decision!" },
              { name: "Faisal Al-Otaibi", text: "Professional technicians who actually show up on time. They fixed a small gas leak during routine maintenance." },
              { name: "Reema", text: "The air feels much cleaner and the cooling is very stable now. Very polite team and they explain everything." }
            ].map((r, idx) => (
              <div key={idx} className="p-16 bg-white rounded-[64px] border border-gray-50 flex flex-col gap-12 shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="flex gap-2">{[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#0073E6" stroke="#0073E6" />)}</div>
                <p className="text-xl text-primary/50 font-sans italic leading-relaxed text-left">"{r.text}"</p>
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-secondary text-white rounded-3xl flex items-center justify-center font-black text-2xl shadow-lg">{r.name[0]}</div>
                   <div className="flex flex-col">
                      <span className="font-heading font-black text-primary text-xl tracking-tight">{r.name}</span>
                      <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Verified Maintenance</span>
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
          <SectionHeading sub="Reliability Guide" title="Maintenance FAQs" />
          <div className="flex flex-col gap-8 text-left">
            {[
              { q: "How often should AC maintenance be done?", a: "In Riyadh's climate, we recommend a full tune-up every 6 months to prevent summer failures." },
              { q: "What is included in AC maintenance?", a: "We include performance audits, gas pressure checks, electrical testing, and full cleaning." },
              { q: "Do you provide preventive maintenance?", a: "Yes, our entire focus is on preventing issues before they require expensive repairs." },
              { q: "How long does AC maintenance take?", a: "A comprehensive tune-up for a split unit takes about 1-1.5 hours." }
            ].map((f, idx) => (
              <div key={idx} className="p-14 bg-[#F8FAFC] rounded-[48px] border border-gray-100 hover:border-secondary transition-all shadow-sm">
                <h4 className="text-2xl font-heading font-black text-primary mb-6 leading-tight">{f.q}</h4>
                <p className="text-primary/50 text-xl font-medium leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-40 bg-white flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-6xl w-full bg-primary p-12 md:p-24 rounded-[84px] text-white text-center flex flex-col items-center gap-14 relative overflow-hidden shadow-3xl">
          <div className="absolute top-[-10%] right-[-5%] p-24 opacity-10 rotate-12 pointer-events-none scale-150"><Clock size={500} /></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
             <span className="bg-secondary text-white px-10 py-3 rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-xl italic">Stability Protocol</span>
             <h2 className="text-[44px] md:text-[68px] lg:text-[84px] font-heading font-black text-white leading-[0.9] tracking-tighter">Ready For <br /><span className="text-secondary">Total Comfort?</span></h2>
          </div>
          <p className="text-xl md:text-2xl font-medium text-white/70 max-w-3xl leading-relaxed relative z-10">Book professional AC maintenance services today to improve cooling performance, reduce breakdowns & extend AC lifespan.</p>
          <div className="flex flex-col sm:flex-row gap-8 w-full max-w-3xl relative z-10">
             <button onClick={handleBookNow} className="flex-1 px-14 py-8 bg-secondary text-white rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-blue-700 shadow-2xl hover:bg-white hover:text-secondary transition-all"><ShieldPlus size={32} /> Book Now</button>
             <a href="tel:+966501234567" className="flex-1 px-14 py-8 bg-white text-primary rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-slate-200 shadow-2xl hover:bg-secondary hover:text-white transition-all"><Phone size={32} fill="currentColor" /> Call AC Experts</a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName="AC Maintenance" />
    </main>
  );
}
