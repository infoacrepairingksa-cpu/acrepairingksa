"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingActions from "@/components/FloatingActions";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, ShieldCheck, Clock, Zap, CheckCircle2, ArrowRight, Star, ChevronDown, MapPin, 
  ShieldAlert, Wrench, Smartphone, Airplay, Wind, Heart, Activity, Search, Check, 
  MessageSquare, ThumbsUp, AlertTriangle, Snowflake, Thermometer, Droplets, Trash2, 
  Filter, Settings, Gauge, LayoutGrid, Users, Briefcase, Building2, Home, Fan,
  BadgeCheck, Sparkles, Hammer, CalendarCheck2, Maximize
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ACRepairPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBookNow = () => setIsModalOpen(true);

  /**
   * 🏆 THEME-STRICT UI COMPONENTS
   */
  const ButtonGroup = ({ className, customZapText = "Book Repair Now" }: any) => (
    <div className={cn("flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto", className)}>
      <a href="tel:+966501234567" className="w-full sm:flex-1 px-8 md:px-10 py-5 md:py-6 bg-secondary text-white rounded-[20px] font-black text-sm md:text-base tracking-widest transition-all shadow-xl flex items-center justify-center gap-4 hover:-translate-y-1 active:scale-95 border-b-4 border-blue-700">
        <Phone size={20} fill="currentColor" /> Call Now
      </a>
      <button onClick={handleBookNow} className="w-full sm:flex-1 px-8 md:px-10 py-5 md:py-6 bg-primary text-white rounded-[20px] font-black text-sm md:text-base tracking-widest transition-all shadow-xl flex items-center justify-center gap-4 hover:-translate-y-1 active:scale-95 border-b-4 border-slate-800">
        <Zap size={20} /> {customZapText}
      </button>
    </div>
  );

  const SectionHeading = ({ sub, title, center = true, light = false }: any) => (
    <div className={cn("flex flex-col gap-4 mb-20", center ? "items-center text-center" : "items-start text-left")}>
      <span className={cn("font-black tracking-[0.3em] uppercase text-[10px] px-5 py-2 rounded-full w-fit", light ? "bg-white/10 text-secondary" : "bg-secondary/10 text-secondary")}>{sub}</span>
      <h2 className={cn("text-[32px] md:text-[46px] font-heading font-black leading-tight tracking-tighter max-w-3xl", light ? "text-white" : "text-primary")}>{title}</h2>
    </div>
  );

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Navbar onBookNow={handleBookNow} />

      {/* 1. HERO SECTION (Premium Theme Mastery) */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-24 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute top-[-15%] right-[-10%] w-[900px] h-[900px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7 flex flex-col gap-10 text-center lg:text-left">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                 {["Same Day Service", "Expert Technicians", "24/7 Support"].map(t => (
                   <span key={t} className="bg-white text-primary border border-gray-100 px-5 py-2.5 rounded-full text-[10px] font-black tracking-widest uppercase flex items-center gap-2 shadow-sm"><CheckCircle2 size={14} className="text-secondary" /> {t}</span>
                 ))}
              </div>
              <h1 className="text-[44px] md:text-[64px] lg:text-[76px] font-heading font-black text-primary leading-[1] tracking-tight">
                Professional <span className="text-secondary">AC Repair</span> <br /> Available in Riyadh
              </h1>
              <p className="text-xl md:text-2xl text-primary/70 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed italic">
                “Professional AC technicians for split, central, window & duct AC systems across Riyadh.”
              </p>
              <div className="flex flex-col gap-8 items-center lg:items-start">
                <ButtonGroup customZapText="Book AC Repair" />
                <div className="flex items-center gap-6 px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
                   <div className="flex -space-x-3">
                     {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-secondary/10 overflow-hidden"><img src={`https://i.pravatar.cc/100?u=${i+40}`} alt="User" className="w-full h-full object-cover" /></div>)}
                   </div>
                   <div className="flex flex-col">
                      <span className="text-xs font-black uppercase tracking-widest text-primary">Trusted by 5000+ residents</span>
                      <div className="flex gap-1"><Star size={10} fill="#0073E6" className="text-secondary" /> <Star size={10} fill="#0073E6" className="text-secondary" /> <Star size={10} fill="#0073E6" className="text-secondary" /> <Star size={10} fill="#0073E6" className="text-secondary" /> <Star size={10} fill="#0073E6" className="text-secondary" /></div>
                   </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-5 relative">
              <div className="relative rounded-[64px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white group">
                <img src="https://images.pexels.com/photos/5691657/pexels-photo-5691657.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="AC Technician Riyadh" className="w-full h-[650px] object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-[32px] shadow-2xl border border-gray-50 flex flex-col gap-2 items-center">
                 <span className="text-3xl font-black text-secondary">30-Min</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">Guaranteed Arrival</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION (Trust Mastery) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative flex flex-col gap-8">
              <SectionHeading sub="Elite Maintenance" title="Fast Repair Solutions for Riyadh's Summer Heat" center={false} />
              <p className="text-xl text-primary/60 font-medium leading-relaxed">
                Riyadh's intense heat doesn't wait, and neither do we. Our experienced technicians provide fast, professional AC repair for both residential and commercial cooling systems. We specialize in split, central, and duct systems, ensuring your comfort is restored within minutes of arrival.
              </p>
              <button onClick={handleBookNow} className="w-fit px-10 py-5 bg-primary text-white rounded-[20px] font-black uppercase tracking-widest text-sm shadow-xl hover:bg-secondary transition-all">Get Instant Booking</button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { t: "Residential Repair", i: <Home />, d: "Villa & Apartment support" },
                { t: "Commercial Support", i: <Building2 />, d: "Offices & Large sites" }
              ].map((x, i) => (
                <div key={i} className="p-10 bg-[#FAFAFA] rounded-[40px] border border-gray-100 flex flex-col gap-6 shadow-sm">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">{x.i}</div>
                  <h3 className="text-xl font-heading font-black text-primary leading-tight">{x.t}</h3>
                  <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. AC PROBLEMS WE FIX */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Diagnostic Experts" title="AC Problems We Fix Today" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { t: "AC Not Cooling", i: <Snowflake /> },
              { t: "Water Leakage", i: <Droplets /> },
              { t: "Strange Noises", i: <Activity /> },
              { t: "Bad Smell", i: <Wind /> },
              { t: "Not Turning On", i: <Zap /> },
              { t: "Weak Airflow", i: <Fan /> },
              { t: "Gas Leakage", i: <AlertTriangle /> },
              { t: "Frozen Coils", i: <Thermometer /> },
              { t: "Thermostat Issues", i: <Settings /> },
              { t: "Compressor Problems", i: <Gauge /> }
            ].map((p, idx) => (
              <motion.div whileHover={{ y: -12 }} key={idx} className="p-10 bg-white rounded-[32px] border border-gray-50 flex flex-col items-center text-center gap-8 shadow-sm hover:shadow-2xl hover:border-secondary transition-all group">
                <div className="w-20 h-20 bg-secondary/5 text-secondary rounded-[24px] flex items-center justify-center transition-all group-hover:bg-secondary group-hover:text-white shadow-inner">{p.i}</div>
                <h3 className="text-lg font-heading font-black text-primary tracking-tight leading-tight">{p.t}</h3>
              </motion.div>
            ))}
          </div>
          <div className="mt-20 flex justify-center">
            <button onClick={handleBookNow} className="px-14 py-7 bg-primary text-white rounded-[24px] font-black uppercase tracking-widest shadow-2xl hover:bg-secondary transition-all active:scale-95 border-b-4 border-slate-800">Fix My AC Today</button>
          </div>
        </div>
      </section>

      {/* 4. TYPES OF SYSTEMS */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Technical Mastery" title="Types of AC Systems We Handle" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: "Split AC Repair", d: "Wall-mounted precision repair for all major global brands.", i: <LayoutGrid /> },
              { t: "Central AC Repair", d: "Large scale cooling solutions for commercial & villa units.", i: <Building2 /> },
              { t: "Window AC Repair", d: "Mechanical restoration for traditional window-mounted units.", i: <Home /> },
              { t: "Cassette AC Repair", d: "Specialized servicing for ceiling cassette systems.", i: <Maximize /> },
              { t: "Ducted AC Systems", d: "Duct checking, sealing and performance restoration.", i: <Wind /> },
              { t: "Commercial HVAC", d: "High-capacity systems for industrial and business sites.", i: <Briefcase /> }
            ].map((s, idx) => (
              <div key={idx} className="p-12 bg-[#FAFAFA] rounded-[48px] border border-gray-100 flex flex-col gap-8 group hover:bg-primary transition-all duration-500 shadow-sm">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-secondary shadow-sm transition-transform group-hover:scale-110">{s.i}</div>
                <div className="flex flex-col gap-4">
                   <h3 className="text-2xl font-heading font-black text-primary group-hover:text-white tracking-tight">{s.t}</h3>
                   <p className="text-primary/50 group-hover:text-white/60 font-medium leading-relaxed">{s.d}</p>
                </div>
                <button onClick={handleBookNow} className="w-fit text-secondary font-black uppercase tracking-widest text-[10px] flex items-center gap-3 group-hover:text-white">Schedule AC Inspection <ArrowRight size={16} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (Theme Sync Stats) */}
      <section className="py-40 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,115,230,0.1),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-12">
              <SectionHeading sub="The Trust Factor" title="Why We are Riyadh's #1 Maintenance Choice" center={false} light={true} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { t: "Certified AC Technicians", i: <BadgeCheck /> },
                  { t: "Fast Response Across Riyadh", i: <Clock /> },
                  { t: "Genuine Spare Parts", i: <Settings /> },
                  { t: "Transparent Pricing", i: <ThumbsUp /> },
                  { t: "Advanced Diagnostics", i: <Search /> },
                  { t: "24/7 Emergency Support", i: <Smartphone /> }
                ].map((p, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-white/80 font-bold text-lg"><CheckCircle2 size={24} className="text-secondary shrink-0" /> {p.t}</div>
                ))}
              </div>
              <button onClick={handleBookNow} className="w-fit px-12 py-7 bg-secondary text-white rounded-[24px] font-black uppercase tracking-widest shadow-2xl hover:scale-105 transition-all border-b-4 border-blue-700">Hire AC Experts</button>
            </div>
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-secondary/10 blur-[100px] pointer-events-none rounded-full" />
              {[{ v: "5000+", l: "Happy Homes" }, { v: "4.9", l: "Google Rating" }, { v: "30", l: "Min Response" }, { v: "100%", l: "Guarantee" }].map((s, idx) => (
                <div key={idx} className="p-12 bg-white/5 border border-white/10 rounded-[48px] text-center backdrop-blur-3xl shadow-2xl">
                  <span className="text-[48px] md:text-[56px] font-heading font-black text-secondary block leading-none mb-4">{s.v}</span>
                  <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/40">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. AREAS WE SERVE (SEO Excellence) */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Local Coverage" title="Expert AC Repair in Your Area" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {["Al Olaya", "Al Malaz", "Al Yasmin", "Al Narjis", "Al Sahafa", "Al Malqa", "Al Aqiq", "Hittin", "Al Nakheel", "Al Rawdah", "Al Sulaymaniyah", "Al Rabwah", "Al Munsiyah", "Al Qadisiyah", "Al Shifa"].map(area => (
              <div key={area} className="p-10 bg-[#FAFAFA] rounded-[32px] border border-gray-100 flex flex-col items-center gap-5 group hover:border-secondary transition-all cursor-pointer shadow-sm text-center">
                <MapPin size={28} className="text-secondary group-hover:scale-125 transition-transform duration-500" />
                <span className="text-xs font-black uppercase tracking-widest text-primary/40 group-hover:text-primary transition-colors">{area}</span>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-primary/30 font-black italic tracking-widest uppercase text-[10px]">“We provide fast AC repair services across all major Riyadh neighborhoods.”</p>
          <div className="mt-16 flex justify-center"><button onClick={handleBookNow} className="px-12 py-6 bg-primary text-white rounded-[24px] font-black uppercase tracking-widest shadow-xl border-b-4 border-slate-800">Book Service in Your Area</button></div>
        </div>
      </section>

      {/* 7. OTHER SERVICES (Thematic Grid) */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Complete Solutions" title="Our Professional Maintenance Services" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "AC Cleaning", d: "Full chemical cleaning & power wash.", i: <Sparkles /> },
              { t: "AC Installation", d: "Standard mounting & copper piping.", i: <Hammer /> },
              { t: "AC Maintenance", d: "Periodic filter and vital checks.", i: <CalendarCheck2 /> },
              { t: "AC Gas Refill", d: "High-purity R410A gas top-up.", i: <Zap /> },
              { t: "Duct Cleaning", d: "Removing allergens from vents.", i: <Wind /> },
              { t: "Home Maintenance", d: "Complete villa repair solutions.", i: <Settings /> }
            ].map((s, idx) => (
              <div key={idx} className="p-12 bg-white rounded-[48px] border border-gray-100 flex flex-col gap-6 group hover:border-secondary transition-all shadow-sm">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all shadow-inner">{s.i}</div>
                <h3 className="text-2xl font-heading font-black text-primary tracking-tight">{s.t}</h3>
                <p className="text-primary/50 font-medium text-sm leading-relaxed">{s.d}</p>
                <button className="w-fit text-[10px] font-black uppercase tracking-widest text-secondary group-hover:text-primary transition-all flex items-center gap-2">Learn More <ArrowRight size={14} /></button>
              </div>
            ))}
          </div>
          <div className="mt-20 flex justify-center"><button className="px-12 py-6 border-2 border-primary text-primary rounded-[24px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Explore All Services</button></div>
        </div>
      </section>

      {/* 8. EMERGENCY SECTION (Navy Theme Overhaul) */}
      <section className="py-40 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,115,230,0.1)_0%,transparent_100%)]" />
        <div className="absolute bottom-[-10%] right-[-5%] p-24 opacity-5 rotate-12 pointer-events-none"><ShieldAlert size={400} /></div>
        <div className="container mx-auto px-4 max-w-5xl text-center flex flex-col items-center gap-12 relative z-10">
          <span className="bg-secondary text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-xl">Urgent Support</span>
          <h2 className="text-[44px] md:text-[68px] font-heading font-black leading-tight tracking-tighter text-white">Emergency <br /><span className="text-secondary">AC Repair 24/7</span></h2>
          <p className="text-xl md:text-2xl font-medium opacity-80 max-w-3xl leading-relaxed">Summer breakdowns don't wait. Our emergency response team is stationed across Riyadh to fix your AC instantly, even on weekends and holidays.</p>
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
            <a href="tel:+966501234567" className="flex-1 px-12 py-7 bg-white text-primary rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-5 shadow-2xl hover:bg-secondary hover:text-white transition-all border-b-4 border-slate-200">
               <Phone size={24} fill="currentColor" /> Call Emergency Team
            </a>
            <button onClick={handleBookNow} className="flex-1 px-12 py-7 bg-secondary text-white rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-5 shadow-2xl hover:bg-white hover:text-secondary transition-all border-b-4 border-blue-700">
               <Zap size={24} /> Request Urgent Fix
            </button>
          </div>
        </div>
      </section>

      {/* 9. REPAIR PROCESS */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <SectionHeading sub="Our Workflow" title="How We Restore Your Cooling" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {[
              { t: "Book Service", i: <Smartphone /> },
              { t: "Technician Visit", i: <MapPin /> },
              { t: "AC Inspection", i: <Search /> },
              { t: "Diagnosis", i: <Activity /> },
              { t: "Repair & Fix", i: <Wrench /> },
              { t: "Quality Check", i: <CheckCircle2 /> }
            ].map((s, idx) => (
              <div key={idx} className="flex flex-col items-center gap-8 group">
                <div className="w-24 h-24 bg-[#FAFAFA] rounded-[32px] flex items-center justify-center text-primary border border-gray-100 group-hover:-translate-y-3 group-hover:shadow-2xl transition-all duration-500 group-hover:border-secondary shadow-sm">
                   {s.i}
                </div>
                <h3 className="text-[11px] font-heading font-black text-primary/50 uppercase tracking-[0.2em]">{s.t}</h3>
              </div>
            ))}
          </div>
          <div className="mt-24 flex justify-center"><button onClick={handleBookNow} className="px-14 py-7 bg-primary text-white rounded-[24px] font-black uppercase tracking-widest shadow-2xl border-b-4 border-slate-800 active:scale-95 transition-all">Book Your Appointment</button></div>
        </div>
      </section>

      {/* 10. REVIEWS (Authentic Layout) */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Customer Love" title="What Riyadh Neighbors Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Khalid", text: "Fastest response I've seen in Riyadh. Fixed my split AC in 30 minutes. Professional technician and very clean work!" },
              { name: "Sara Al-Fahad", text: "Highly professional service. They explained the issue clearly and fixed it immediately. Fair price for Riyadh." },
              { name: "Ahmed Zaid", text: "Best maintenance company in Riyadh. Punctual, expert technicians, and original parts. Highly recommended." }
            ].map((r, idx) => (
              <div key={idx} className="p-16 bg-white rounded-[56px] border border-gray-50 flex flex-col gap-10 shadow-sm hover:shadow-2xl transition-all">
                <div className="flex gap-1.5">{[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#0073E6" stroke="#0073E6" />)}</div>
                <p className="text-xl text-primary/50 font-sans italic leading-relaxed text-left">"{r.text}"</p>
                <div className="flex items-center gap-5">
                   <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">{r.name[0]}</div>
                   <div className="flex flex-col">
                      <span className="font-heading font-black text-primary text-lg">{r.name}</span>
                      <span className="text-[10px] font-black text-secondary uppercase tracking-widest">Verified Customer</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-24 flex justify-center"><button className="px-12 py-6 bg-white border border-gray-200 text-primary rounded-[24px] font-black uppercase tracking-widest hover:border-secondary transition-all shadow-sm">Contact Our Team</button></div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading sub="FAQ Guide" title="Common AC Repair Questions" />
          <div className="flex flex-col gap-6">
            {[
              { q: "How much does AC repair cost in Riyadh?", a: "Costs depend on the complexity. We provide a fair diagnostic check and quote before starting any work." },
              { q: "Do you provide emergency AC repair?", a: "Yes, we are available 24/7 for emergency breakdowns across all Riyadh neighborhoods." },
              { q: "Which AC brands do you repair?", a: "We fix all major brands including LG, Samsung, Gree, Carrier, Zamil, and York." },
              { q: "How long does AC repair take?", a: "Most repairs take 1-2 hours after the initial diagnostic inspection." }
            ].map((f, idx) => (
              <div key={idx} className="p-12 bg-[#FAFAFA] rounded-[40px] border border-gray-50 hover:border-secondary transition-all shadow-sm">
                <h4 className="text-2xl font-heading font-black text-primary mb-5 leading-tight">{f.q}</h4>
                <p className="text-primary/50 text-xl font-medium leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-40 bg-white flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-6xl w-full bg-primary p-12 md:p-24 rounded-[72px] text-white text-center flex flex-col items-center gap-14 relative overflow-hidden shadow-[0_60px_120px_-20px_rgba(15,23,42,0.4)]">
          <div className="absolute top-[-10%] right-[-5%] p-24 opacity-5 rotate-12 pointer-events-none scale-150"><Snowflake size={500} /></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
             <span className="bg-secondary text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">Riyadh's Choice</span>
             <h2 className="text-[44px] md:text-[68px] font-heading font-black leading-tight tracking-tighter">Need Fast <span className="text-secondary">AC Repair Today?</span></h2>
          </div>
          <p className="text-xl md:text-2xl font-medium opacity-80 max-w-3xl leading-relaxed relative z-10">Book professional AC repair technicians today for quick, affordable & reliable cooling solutions. Technician at your door in 30 mins!</p>
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-3xl relative z-10">
             <a href="tel:+966501234567" className="flex-1 px-12 py-7 bg-secondary text-white rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-5 border-b-4 border-blue-700 shadow-2xl hover:bg-white hover:text-secondary transition-all">
                <Phone size={24} fill="currentColor" /> Call Now
             </a>
             <button onClick={handleBookNow} className="flex-1 px-12 py-7 bg-white text-primary rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-5 border-b-4 border-slate-200 shadow-2xl hover:bg-secondary hover:text-white transition-all">
                <Zap size={24} /> Book AC Repair
             </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName="AC Repair" />
    </main>
  );
}
