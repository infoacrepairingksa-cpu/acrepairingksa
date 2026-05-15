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
  Wrench, Bath, Pipette as Pipe, Utensils, Construction, Settings,
  Droplets as WaterDrops, Siren, Shield, HardHat, Hammer, Ruler
} from "lucide-react";
import { cn } from "@/lib/utils";
import Schema, { generateServiceSchema, generateBreadcrumbSchema } from "@/components/Schema";

export default function HomeMaintenancePage() {
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
      <Schema 
        type="Service" 
        data={generateServiceSchema(
          "Complete Home Maintenance Riyadh",
          "One-stop home maintenance and repair services in Riyadh. We provide expert fixes for AC, plumbing, electrical, and general property maintenance for villas and apartments.",
          "/home-maintenance"
        )} 
      />
      <Schema 
        type="BreadcrumbList" 
        data={generateBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Home Maintenance", item: "/home-maintenance" }
        ])} 
      />
      <Navbar onBookNow={handleBookNow} />

      {/* 1. CLEAN & PROTECTIVE HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-white overflow-hidden">
        {/* Structural Background Lines */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,115,230,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,115,230,1)_1px,transparent_1px)] [background-size:60px_60px]" />
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-secondary/[0.02] -skew-x-12 translate-x-20 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                 <div className="h-px w-10 bg-secondary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Complete Property Care</span>
              </div>
              <h1 className="text-[52px] md:text-[72px] lg:text-[86px] font-heading font-black text-primary leading-[0.9] tracking-tighter">
                Complete <span className="text-secondary">Home Maintenance</span> Services in Riyadh
              </h1>
              <p className="text-lg md:text-xl text-primary/60 font-medium max-w-lg leading-relaxed">
                Reliable home repair and maintenance solutions for apartments, villas, and commercial properties across Riyadh.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5 mt-2">
                <button onClick={handleBookNow} className="w-full sm:w-auto px-10 py-6 bg-secondary text-white rounded-2xl font-black text-base tracking-widest transition-all shadow-xl hover:bg-primary active:scale-95 flex items-center justify-center gap-4">
                  <Shield size={20} /> Book Maintenance
                </button>
                <a href="tel:+966501234567" className="w-full sm:w-auto px-10 py-6 bg-white text-primary border-2 border-gray-100 rounded-2xl font-black text-base tracking-widest transition-all shadow-lg hover:border-secondary hover:text-secondary active:scale-95 flex items-center justify-center gap-4">
                  <Search size={20} /> Free Inspection
                </a>
              </div>

              <div className="flex items-center gap-10 pt-8 border-t border-gray-100">
                 <div className="flex flex-col gap-1">
                    <span className="text-2xl font-heading font-black text-primary leading-none">24/7</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Support</span>
                 </div>
                 <div className="w-px h-10 bg-gray-100" />
                 <div className="flex flex-col gap-1">
                    <span className="text-2xl font-heading font-black text-secondary leading-none">Same Day</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Technician</span>
                 </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl border-4 border-white group">
                <img src="/optimized/pexels-5691632.webp" alt="Home Maintenance Service" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60" />
              </div>
              {/* Floating Maintenance Badge */}
              <div className="absolute -top-6 -right-6 bg-white p-8 rounded-[32px] shadow-xl border border-gray-50 flex items-center gap-4 animate-bounce-slow">
                 <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white shadow-lg"><Hammer size={24} /></div>
                 <span className="text-[10px] font-black text-primary uppercase tracking-widest">Expert Fix</span>
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
               <SectionHeading sub="The Value Shield" title="Maintaining Homes To Perfection" center={false} />
               <p className="text-lg text-primary/50 font-medium leading-relaxed italic border-l-4 border-secondary pl-6">
                  Regular maintenance is the only way to prevent costly property damage. From AC cooling to plumbing and electrical safety, we ensure your home remains a safe, comfortable sanctuary.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                  {[
                    { t: "Residential Care", d: "Villas & Apartments", i: <Home /> },
                    { t: "Commercial Support", d: "Offices & Retail", i: <Building2 /> }
                  ].map((x, i) => (
                    <div key={i} className="flex items-center gap-5 p-6 bg-white rounded-3xl shadow-sm border border-gray-50 group hover:border-secondary transition-all">
                       <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">{x.i}</div>
                       <div className="flex flex-col"><span className="font-heading font-black text-primary text-lg leading-none">{x.t}</span><span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">{x.d}</span></div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative rounded-[40px] overflow-hidden shadow-xl">
               <img src="/optimized/pexels-5445425.webp" alt="Maintenance Experts" className="w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR MAINTENANCE SERVICES (Structural Grid) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="The Core Catalog" title="All-In-One Maintenance Mastery" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { t: "AC Repair & Care", i: <Snowflake />, d: "Full cooling unit service." },
              { t: "Plumbing Services", i: <Droplet />, d: "Leak fixes & pipe install." },
              { t: "Electrical Repairs", i: <Zap />, d: "Safe wiring & panel fixes." },
              { t: "Water Leak Repair", i: <Droplets />, d: "Preventing structural damage." },
              { t: "AC Deep Cleaning", i: <Sparkles />, d: "Coil, duct & filter wash." },
              { t: "Pipe Installation", i: <Settings />, d: "New system construction." },
              { t: "Bath & Kitchen", i: <Bath />, d: "Full fixture maintenance." },
              { t: "General Property", i: <LayoutGrid />, d: "End-to-end home upkeep." }
            ].map((s, idx) => (
              <div key={idx} className="p-8 bg-[#F8FAFC] rounded-[32px] border border-gray-100 flex flex-col gap-6 group hover:bg-secondary transition-all shadow-sm">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 transition-transform mb-2">{s.i}</div>
                <div className="flex flex-col gap-2">
                   <h3 className="text-xl font-heading font-black text-primary group-hover:text-white tracking-tight">{s.t}</h3>
                   <p className="text-[10px] font-black text-primary/30 group-hover:text-white/40 uppercase tracking-widest">{s.d}</p>
                </div>
                <button onClick={handleBookNow} className="text-[10px] font-black uppercase tracking-widest text-secondary/60 group-hover:text-white flex items-center gap-2 mt-2 border-b border-transparent group-hover:border-white/20 pb-1 w-fit">Book Service <ArrowRight size={12} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY REGULAR MAINTENANCE MATTERS (Diagnostic Strips) */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="The Efficiency Logic" title="Why Scheduled Care Matters" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { t: "Prevents Repairs", i: <ShieldCheck /> },
              { t: "Property Value", i: <Building2 /> },
              { t: "Home Safety", i: <AlertTriangle /> },
              { t: "Lower Costs", i: <Zap /> },
              { t: "More Comfort", i: <Heart /> },
              { t: "Energy Efficiency", i: <Activity /> },
              { t: "Fast Detection", i: <Search /> },
              { t: "Property Shield", i: <ShieldPlus /> }
            ].map((v, idx) => (
              <div key={idx} className="p-8 bg-white rounded-[24px] border border-gray-100 flex items-center gap-6 group hover:border-secondary transition-all shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">{v.i}</div>
                <span className="text-lg font-heading font-black text-primary tracking-tight leading-none group-hover:text-white transition-colors">{v.t}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 flex justify-center"><button onClick={handleBookNow} className="px-12 py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-secondary transition-all">Maintain My Property</button></div>
        </div>
      </section>

      {/* 5. EMERGENCY MAINTENANCE (Urgency Strip) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="relative bg-primary rounded-[48px] p-12 md:p-20 overflow-hidden flex flex-col items-center text-center gap-8 shadow-2xl border border-white/5">
              <span className="bg-secondary text-white px-7 py-2.5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] italic shadow-xl">Critical Care</span>
              <h2 className="text-[36px] md:text-[52px] font-heading font-black text-white leading-tight tracking-tight max-w-3xl">24/7 Emergency <br /><span className="text-secondary">Home Repair Support</span></h2>
              <p className="text-lg md:text-xl font-medium text-white/60 max-w-2xl leading-relaxed">Electrical failure, burst pipes, or AC breakdown? Our emergency response team is ready across Riyadh 24/7.</p>
              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl relative z-10 mt-4">
                 <button onClick={handleBookNow} className="flex-1 px-10 py-6 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl hover:bg-white hover:text-secondary transition-all border-b-4 border-blue-700">Request Emergency Service</button>
                 <a href="tel:+966501234567" className="flex-1 px-10 py-6 bg-white text-primary rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl hover:bg-secondary hover:text-white transition-all border-b-4 border-slate-100">Call Now</a>
              </div>
           </div>
        </div>
      </section>

      {/* 6. OUR MAINTENANCE PROCESS (Clean Timeline) */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="The Protocol" title="Precision Maintenance Workflow" />
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
             {[
               { t: "Booking", d: "Fast confirmation." },
               { t: "Inspection", d: "Full property scan." },
               { t: "Diagnosis", d: "Detecting hidden issues." },
               { t: "Expert Work", d: "Professional repairs." },
               { t: "Safety Test", d: "Checking all systems." },
               { t: "Final Audit", d: "Quality sign-off." }
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
          <div className="mt-16"><button onClick={handleBookNow} className="px-14 py-8 bg-primary text-white rounded-[32px] font-black uppercase tracking-widest shadow-2xl hover:bg-secondary active:scale-95 transition-all">Schedule Service Today</button></div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
               <SectionHeading sub="Elite Choice" title="Riyadh's Choice For Complete Care" center={false} />
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                  {[
                    "Experienced Maintenance Team", "Fast Riyadh Coverage", "Advanced Tools & Tech", "Affordable Price Plans", 
                    "Commercial Expertise", "Quality Workmanship", "Emergency Support", "Satisfaction Guaranteed"
                  ].map((w, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-primary/70 font-bold text-base"><CheckCircle2 size={20} className="text-secondary shrink-0" /> {w}</div>
                  ))}
               </div>
               <button onClick={handleBookNow} className="w-fit px-12 py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-secondary transition-all">Hire Maintenance Experts</button>
            </div>
            <div className="relative rounded-[40px] overflow-hidden shadow-xl group">
               <img src="/optimized/pexels-2219024.webp" alt="Maintenance Team" className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. AREAS WE SERVE */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="Local Reach" title="Maintenance Services Across Riyadh" />
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

      {/* 9. PREVENTIVE MAINTENANCE (Clean Educational Card) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="relative bg-[#F8FBFF] p-12 md:p-20 rounded-[56px] flex flex-col lg:flex-row items-center gap-16 border border-secondary/5 shadow-inner">
              <div className="flex-1 flex flex-col gap-8 text-left">
                 <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px]">The Property Audit</span>
                 <h2 className="text-[32px] md:text-[48px] font-heading font-black text-primary leading-tight tracking-tight">The Power Of <br /><span className="text-secondary italic">Preventive</span> Care</h2>
                 <p className="text-lg text-primary/50 font-medium leading-relaxed italic border-l-4 border-secondary/20 pl-6">Don't wait for things to break. Regular inspections detect hidden issues in AC, plumbing, and electrical systems before they become expensive disasters.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Routine Inspections", "Early Detection", "Reduced Repair Costs", "Better Efficiency", "Property Lifespan", "Safer Home"].map(h => (
                       <div key={h} className="flex items-center gap-2 text-primary font-bold text-base"><Check size={18} className="text-secondary" /> {h}</div>
                    ))}
                 </div>
                 <button onClick={handleBookNow} className="w-fit px-10 py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-[11px] shadow-lg hover:bg-secondary transition-all">Protect Your Property</button>
              </div>
              <div className="flex-1 rounded-[40px] overflow-hidden shadow-xl">
                 <img src="/optimized/pexels-5691657.webp" alt="Home Inspection" className="w-full h-[450px] object-cover" />
              </div>
           </div>
        </div>
      </section>

      {/* 10. REVIEWS */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="Customer Trust" title="Residents Trust Our Care" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Abdullah", text: "They handle all my villa maintenance. From AC to plumbing, they are fast, professional, and very clean. Highly recommended!" },
              { name: "Faisal", text: "Excellent maintenance company. Their technicians are well-trained and solved a complicated electrical issue very quickly." },
              { name: "Reema", text: "Friendly service and fair pricing. I use them for my apartment maintenance and they are always on time. 5-star care!" }
            ].map((r, idx) => (
              <div key={idx} className="p-12 bg-white rounded-[40px] border border-gray-50 flex flex-col gap-10 shadow-sm hover:shadow-xl transition-all text-left">
                <div className="flex gap-1">{[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#0073E6" stroke="#0073E6" />)}</div>
                <p className="text-lg text-primary/50 font-sans italic leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-5">
                   <div className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">{r.name[0]}</div>
                   <div className="flex flex-col">
                      <span className="font-heading font-black text-primary text-lg tracking-tight">{r.name}</span>
                      <span className="text-[10px] font-black text-secondary uppercase tracking-widest">Verified Resident</span>
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
          <SectionHeading sub="The Help Desk" title="Maintenance FAQs" />
          <div className="flex flex-col gap-6 text-left">
            {[
              { q: "Do you provide emergency home maintenance?", a: "Yes, we provide 24/7 emergency support for electrical, plumbing, and AC failures across Riyadh." },
              { q: "What home maintenance services do you offer?", a: "We provide complete AC care, plumbing repairs, electrical work, leak detection, and general property upkeep." },
              { q: "Do you provide apartment & villa maintenance?", a: "Absolutely. We provide tailored maintenance solutions for both residential homes and commercial offices." },
              { q: "How quickly can technicians arrive?", a: "For emergencies, we aim to be at your doorstep within 30 to 60 minutes anywhere in Riyadh." }
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
        <div className="container mx-auto px-4 max-w-6xl w-full bg-primary p-12 md:p-20 rounded-[64px] text-white text-center flex flex-col items-center gap-10 relative overflow-hidden shadow-2xl border border-white/5">
          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
             <span className="bg-secondary text-white px-8 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-xl italic">Premium Home Guard</span>
             <h2 className="text-[36px] md:text-[52px] lg:text-[64px] font-heading font-black text-white leading-[1.1] tracking-tight">Need Reliable <br /><span className="text-secondary">Home Maintenance?</span></h2>
          </div>
          <p className="text-lg md:text-xl font-medium text-white/60 max-w-2xl leading-relaxed relative z-10">Book experienced home maintenance experts today for professional repair, inspection & property maintenance solutions.</p>
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl relative z-10">
             <button onClick={handleBookNow} className="flex-1 px-12 py-6 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 border-b-4 border-blue-700 shadow-xl hover:bg-white hover:text-secondary transition-all"><Shield size={24} /> Book Service</button>
             <a href="tel:+966501234567" className="flex-1 px-12 py-6 bg-white text-primary rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 border-b-4 border-slate-100 shadow-xl hover:bg-secondary hover:text-white transition-all"><Phone size={24} fill="currentColor" /> Call Expert Now</a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName="Home Maintenance" />
    </main>
  );
}
