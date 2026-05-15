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
  Droplets as WaterDrops, Siren, Shield, Cog, Table, ListChecks, CalendarCheck, Gem
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("General Hub");
  const handleBookNow = (service: string) => {
    setModalService(service);
    setIsModalOpen(true);
  };

  const SectionHeading = ({ sub, title, center = true, light = false }: any) => (
    <div className={cn("flex flex-col gap-4 mb-20", center ? "items-center text-center" : "items-start text-left")}>
      <span className={cn("font-black tracking-[0.4em] uppercase text-[10px] px-6 py-2.5 rounded-full w-fit shadow-sm", light ? "bg-white/10 text-secondary border border-white/20" : "bg-secondary/10 text-secondary")}>{sub}</span>
      <h2 className={cn("text-[32px] md:text-[40px] lg:text-[48px] font-heading font-black leading-[1.2] tracking-tight max-w-4xl", light ? "text-white" : "text-primary")}>{title}</h2>
    </div>
  );

  const allServices = [
    { title: "AC Repair", id: "ac-repair", href: "/ac-repair", img: "/optimized/pexels-5691632.webp", icon: <Settings />, desc: "Fast restoration of cooling for all unit types." },
    { title: "AC Cleaning", id: "ac-cleaning", href: "/ac-cleaning", img: "/optimized/pexels-5445425.webp", icon: <Sparkles />, desc: "Deep-wash sanitization for pure, healthy air." },
    { title: "AC Installation", id: "ac-installation", href: "/ac-installation", img: "/optimized/pexels-2219024.webp", icon: <LayoutGrid />, desc: "Professional setup for new homes and offices." },
    { title: "AC Maintenance", id: "ac-maintenance", href: "/ac-maintenance", img: "/optimized/pexels-5691657.webp", icon: <Clock />, desc: "Scheduled preventive care to stop breakdowns." },
    { title: "AC Gas Refill", id: "ac-gas-refill", href: "/ac-gas-refill", img: "/optimized/pexels-443383.webp", icon: <Snowflake />, desc: "Precision refrigerant charging and leak tests." },
    { title: "AC Duct Cleaning", id: "ac-duct-cleaning", href: "/ac-duct-cleaning", img: "/optimized/pexels-5445424.webp", icon: <Wind />, desc: "Medical-grade air vent & duct purification." },
    { title: "AC Filter Cleaning", id: "ac-filter-cleaning", href: "/ac-filter-cleaning", img: "/optimized/pexels-5445425.webp", icon: <Filter />, desc: "Instant airflow boost with mesh deep-washing." },
    { title: "AC Coil Cleaning", id: "ac-coil-cleaning", href: "/ac-coil-cleaning", img: "/optimized/pexels-5691632.webp", icon: <Cog />, desc: "Thermal restoration for unit lifespan extension." },
    { title: "Plumbing Services", id: "plumbing", href: "/plumbing", img: "/optimized/pexels-2219024.webp", icon: <Wrench />, desc: "Expert leak repair and sonar detection services." },
    { title: "Home Maintenance", id: "home-maintenance", href: "/home-maintenance", img: "/optimized/pexels-5691657.webp", icon: <Shield />, desc: "Total property shield for structural repairs." },
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Navbar onBookNow={() => handleBookNow("General Hub")} />

      {/* 1. PREMIUM HUB HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 bg-white overflow-hidden border-b border-gray-50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/[0.01] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-10">
              <div className="flex items-center gap-4">
                 <div className="h-px w-12 bg-secondary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">The Riyadh Service Hub</span>
              </div>
              <h1 className="text-[52px] md:text-[72px] lg:text-[86px] font-heading font-black text-primary leading-[0.9] tracking-tighter">
                Professional <span className="text-secondary">Home Services</span> in Riyadh
              </h1>
              <p className="text-lg md:text-xl text-primary/40 font-medium max-w-lg leading-relaxed italic border-l-4 border-secondary/20 pl-6">
                Professional AC, plumbing & property maintenance solutions for homes and businesses across Riyadh city.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5 mt-2">
                <button onClick={() => {document.getElementById('catalog')?.scrollIntoView({behavior:'smooth'})}} className="w-full sm:w-auto px-10 py-6 bg-secondary text-white rounded-2xl font-black text-base tracking-widest transition-all shadow-xl hover:bg-primary active:scale-95">Explore Services</button>
                <button onClick={() => handleBookNow("Hub Hero")} className="w-full sm:w-auto px-10 py-6 bg-white text-primary border-2 border-gray-100 rounded-2xl font-black text-base tracking-widest shadow-lg hover:border-secondary hover:text-secondary active:scale-95">Book Technician</button>
              </div>

              <div className="flex items-center gap-10 pt-8 border-t border-gray-100">
                 <div className="flex flex-col gap-1">
                    <span className="text-2xl font-heading font-black text-primary leading-none">5000+</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Happy Clients</span>
                 </div>
                 <div className="w-px h-10 bg-gray-100" />
                 <div className="flex flex-col gap-1">
                    <span className="text-2xl font-heading font-black text-secondary leading-none">Same Day</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Response</span>
                 </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative group">
              <div className="relative z-10 rounded-[64px] overflow-hidden shadow-2xl border-4 border-white h-[650px]">
                <Image 
                  src="/optimized/pexels-5691632.webp" 
                  alt="Home Maintenance Service" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[32px] shadow-xl border border-gray-50 flex items-center gap-4">
                 <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white shadow-lg"><BadgeCheck size={24} /></div>
                 <span className="text-[10px] font-black text-primary uppercase tracking-widest italic">Riyadh #1 Rated</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. IMAGE-DOMINATED SERVICE GRID (Clean & Premium) */}
      <section id="catalog" className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="The Elite Showroom" title="Our Professional Solutions" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allServices.map((s, idx) => (
              <motion.div 
                key={s.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[48px] bg-white shadow-sm hover:shadow-3xl transition-all duration-700 h-[500px]"
              >
                 {/* Image Background */}
                 <div className="absolute inset-0 overflow-hidden">
                    <Image 
                      src={s.img} 
                      alt={s.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                 </div>

                 {/* Icon Badge */}
                 <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-xl group-hover:bg-secondary group-hover:rotate-12 transition-all z-20">
                    {React.isValidElement(s.icon) ? React.cloneElement(s.icon as any, { size: 28 }) : s.icon}
                 </div>

                 {/* Content */}
                 <div className="absolute inset-x-10 bottom-10 z-20 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                       <h3 className="text-[32px] font-heading font-black text-white tracking-tighter leading-none">{s.title}</h3>
                       <p className="text-white/60 text-sm font-medium leading-relaxed max-w-[240px] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">{s.desc}</p>
                    </div>
                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                       <Link href={s.href} className="flex-1 py-4 bg-white text-primary rounded-xl font-black text-[10px] uppercase tracking-widest text-center hover:bg-secondary hover:text-white transition-all shadow-lg">Learn More</Link>
                       <button onClick={() => handleBookNow(s.title)} className="w-14 h-14 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center hover:bg-secondary hover:text-white transition-all group/wa"><WhatsAppIcon size={24} /></button>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CUSTOMERS CHOOSE US */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="flex flex-col gap-10">
                 <SectionHeading sub="Brand Excellence" title="Why We Lead The Riyadh Market" center={false} />
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                    {[
                      { t: "Certified Technicians", i: <ShieldCheck /> },
                      { t: "Fast Riyadh Coverage", i: <MapPin /> },
                      { t: "Commercial Support", i: <Building2 /> },
                      { t: "Modern Equipment", i: <Cog /> },
                      { t: "Emergency Support", i: <Siren /> },
                      { t: "Affordable Pricing", i: <ThumbsUp /> },
                      { t: "Quality Work", i: <BadgeCheck /> },
                      { t: "Satisfaction Focus", i: <Heart /> }
                    ].map((w, idx) => (
                      <div key={idx} className="flex items-center gap-4 group/item">
                         <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-white transition-all shadow-sm">{w.i}</div>
                         <span className="text-lg font-heading font-black text-primary tracking-tight leading-none group-hover/item:text-secondary transition-colors">{w.t}</span>
                      </div>
                    ))}
                 </div>
                 <button onClick={() => handleBookNow("Trust Selection")} className="w-fit px-12 py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-secondary transition-all border-b-4 border-slate-800 active:scale-95 mt-4">Book Professional Service</button>
              </div>
              <div className="relative rounded-[48px] overflow-hidden shadow-2xl h-[600px]">
                 <Image src="/optimized/pexels-5691657.webp" alt="Quality Workmanship" fill className="object-cover" />
              </div>
           </div>
        </div>
      </section>

      {/* 4. INTERACTIVE CATEGORIES */}
      <section className="py-10">
        {[
          { sub: "Cooling & HVAC", title: "Pure Cooling Solutions", d: "Maintain peak cooling and maximum energy savings with our specialized HVAC engineering.", img: "/optimized/pexels-5445425.webp", b: ["AC Repair", "Cleaning", "Install", "Gas Refill"] },
          { sub: "Air Quality", title: "Deep Cleaning Services", d: "Breathe pure, dust-free air with our medical-grade deep cleaning of ducts, filters and coils.", img: "/optimized/pexels-5445424.webp", b: ["Duct Cleaning", "Filter Wash", "Coil Restoring"] },
          { sub: "Property Hub", title: "Complete Maintenance", d: "From expert plumbing repairs to electrical and structural upkeep, we protect your home.", img: "/optimized/pexels-2219024.webp", b: ["Plumbing", "Home Repair", "Electrical"] }
        ].map((cat, idx) => (
          <div key={idx} className={cn("py-32", idx % 2 === 0 ? "bg-[#F8FBFF]" : "bg-white")}>
             <div className="container mx-auto px-4 max-w-7xl">
                <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-24 items-center", idx % 2 !== 0 && "lg:flex-row-reverse")}>
                   <div className="flex flex-col gap-8 text-left">
                      <SectionHeading sub={cat.sub} title={cat.title} center={false} />
                      <p className="text-xl text-primary/50 font-medium leading-relaxed italic border-l-4 border-secondary/20 pl-8">{cat.d}</p>
                      <div className="flex flex-wrap gap-4 mt-4">
                         {cat.b.map(t => (
                            <div key={t} className="px-6 py-3 bg-white rounded-2xl border border-secondary/10 text-primary font-black text-[11px] uppercase tracking-widest shadow-sm hover:border-secondary transition-all cursor-pointer shadow-inner">{t}</div>
                         ))}
                      </div>
                      <button onClick={() => handleBookNow(cat.title)} className="w-fit px-10 py-5 bg-secondary text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] shadow-xl hover:bg-primary transition-all mt-6 italic">Explore {cat.sub}</button>
                   </div>
                   <div className="relative rounded-[56px] overflow-hidden shadow-3xl h-[500px]">
                      <Image src={cat.img} alt={cat.title} fill className="object-cover" />
                   </div>
                </div>
             </div>
          </div>
        ))}
      </section>

      {/* 5. SERVICE COMPARISON */}
      <section className="py-40 bg-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
           <SectionHeading sub="The Smart Choice" title="Service Comparison" />
           <div className="overflow-hidden rounded-[40px] border border-gray-100 shadow-2xl">
              <div className="grid grid-cols-3 bg-primary text-white p-8 font-heading font-black text-sm uppercase tracking-widest">
                 <span>Service</span><span>Best For</span><span>Benefit</span>
              </div>
              {[
                { s: "AC Repair", b: "Broken Cooling", r: "Fast Cooling" },
                { s: "AC Cleaning", b: "Dust & Smells", r: "Pure Air" },
                { s: "Plumbing", b: "Leaks & Drips", r: "Property Safety" },
                { s: "Duct Clean", b: "Allergy Issues", r: "Healthier Air" }
              ].map((row, idx) => (
                <div key={idx} className={cn("grid grid-cols-3 p-8 items-center border-b border-gray-50 last:border-0", idx % 2 === 0 ? "bg-white" : "bg-gray-50/30")}>
                   <span className="font-heading font-black text-primary text-lg">{row.s}</span>
                   <span className="text-primary/50 text-sm italic">{row.b}</span>
                   <span className="text-secondary font-black text-[10px] uppercase tracking-widest">{row.r}</span>
                </div>
              ))}
           </div>
           <div className="mt-16"><button onClick={() => handleBookNow("Comparison Talk")} className="px-12 py-7 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-xl border-b-4 border-slate-800 hover:bg-secondary transition-all">Talk To An Expert</button></div>
        </div>
      </section>

      {/* 6. EMERGENCY SECTION */}
      <section className="py-40 bg-white flex justify-center">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="relative bg-primary rounded-[56px] p-12 md:p-24 overflow-hidden flex flex-col items-center text-center gap-10 shadow-2xl">
              <span className="bg-secondary text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.3em] italic animate-pulse shadow-xl">Urgent Response</span>
              <h2 className="text-[36px] md:text-[64px] font-heading font-black text-white leading-tight tracking-tight uppercase">Emergency <br /><span className="text-secondary italic">Service Hub</span></h2>
              <p className="text-lg md:text-xl font-medium text-white/60 max-w-2xl leading-relaxed italic">Burst pipes, AC failure, or major leaks? Our elite team reaches you in 30-60 minutes across Riyadh.</p>
              <div className="flex flex-col sm:flex-row gap-8 w-full max-w-xl relative z-10 mt-6">
                 <button onClick={() => handleBookNow("Emergency Hub")} className="flex-1 px-12 py-6 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl hover:bg-white hover:text-secondary transition-all active:scale-95 border-b-4 border-blue-700">Request Support</button>
                 <a href="tel:+966501234567" className="flex-1 px-12 py-6 bg-white text-primary rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl hover:bg-secondary hover:text-white transition-all active:scale-95 border-b-4 border-slate-100">Call Now</a>
              </div>
           </div>
        </div>
      </section>

      {/* 7. MAINTENANCE PLANS */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl">
           <SectionHeading sub="Long-term Care" title="Maintenance Membership" />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {[
                { t: "Residential Plan", d: "For Villas & Apartments", i: <Home />, b: ["2 Preventive Checks / Year", "Priority Support", "Reduced Repair Costs"] },
                { t: "Commercial Plan", d: "For Offices & Retail", i: <Building2 />, b: ["Monthly System Audits", "24/7 Dedicated Manager", "Bulk Discounts"] }
              ].map((p, idx) => (
                <div key={idx} className="p-16 bg-white rounded-[64px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col gap-10">
                   <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm"><CalendarCheck size={32} /></div>
                   <div className="flex flex-col gap-2">
                      <h3 className="text-3xl font-heading font-black text-primary tracking-tight">{p.t}</h3>
                      <p className="text-lg text-primary/40 font-medium italic leading-relaxed">{p.d}</p>
                   </div>
                   <ul className="flex flex-col gap-4">
                      {p.b.map(f => (
                         <li key={f} className="flex items-center gap-3 text-primary/70 font-bold text-base"><Check size={20} className="text-secondary shrink-0" /> {f}</li>
                      ))}
                   </ul>
                   <button onClick={() => handleBookNow(p.t)} className="w-full py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-secondary transition-all mt-auto italic">Join Maintenance Plan</button>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 8. AREAS WE SERVE */}
      <section className="py-40 bg-white text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Local Reach" title="Elite Services Across Riyadh" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Al Olaya", "Al Malaz", "Al Yasmin", "Al Narjis", "Al Sahafa", "Al Malqa", "Al Aqiq", "Hittin", "Al Nakheel", "Al Rawdah", "Al Sulaymaniyah", "Al Rabwah", "Al Munsiyah", "Al Qadisiyah", "Al Shifa"].map(area => (
              <div key={area} className="p-8 bg-[#F8FAFC] rounded-[32px] border border-gray-50 flex flex-col items-center gap-4 group hover:border-secondary transition-all cursor-pointer shadow-sm text-center relative overflow-hidden">
                <MapPin size={24} className="text-secondary group-hover:scale-125 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/40 group-hover:text-primary">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. REVIEWS */}
      <section className="py-40 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <SectionHeading sub="The Proof" title="Residents Trust Our Work" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Abdullah", text: "Truly a one-stop shop. They fixed my AC and a plumbing leak in one visit. Fast, polite, and very professional!" },
              { name: "Faisal", text: "Best maintenance company in Riyadh. Their technicians are well-trained and they use high-quality tools. 5-star!" },
              { name: "Reema", text: "Clean and honest workmanship. They arrived on time and fixed our central AC issues. Very happy with the result." }
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

      {/* 10. FAQ SECTION */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <SectionHeading sub="Help Desk" title="Service FAQs" />
          <div className="flex flex-col gap-6 text-left">
            {[
              { q: "Which areas in Riyadh do you cover?", a: "We cover all major neighborhoods including Al Olaya, Al Malaz, Al Yasmin, Al Narjis, Al Sahafa, and more." },
              { q: "Do you provide same-day services?", a: "Yes, for emergency repairs, we aim to reach your location within 60 minutes for same-day service." },
              { q: "Can I book multiple services together?", a: "Absolutely. Many clients book AC cleaning and plumbing audits together for a complete home health check." },
              { q: "Do you provide commercial maintenance?", a: "Yes, we handle offices, malls, and shops with tailored commercial maintenance plans." }
            ].map((f, idx) => (
              <div key={idx} className="p-10 bg-[#F8FAFC] rounded-[32px] border border-gray-100 hover:border-secondary transition-all shadow-sm group">
                <h3 className="text-xl font-heading font-black text-primary mb-4 leading-tight tracking-tight group-hover:text-secondary">{f.q}</h3>
                <p className="text-primary/50 text-lg font-medium leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
      <section className="py-40 bg-white flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-6xl w-full bg-primary p-12 md:p-24 rounded-[72px] text-white text-center flex flex-col items-center gap-10 relative overflow-hidden shadow-2xl border border-white/5">
          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
             <span className="bg-secondary text-white px-8 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-xl italic">The Riyadh Gold Standard</span>
             <h2 className="text-[36px] md:text-[52px] lg:text-[64px] font-heading font-black text-white leading-[1.1] tracking-tight uppercase">Need Reliable <br /><span className="text-secondary">Home Fix?</span></h2>
          </div>
          <p className="text-lg md:text-xl font-medium text-white/60 max-w-2xl leading-relaxed relative z-10 italic border-l-4 border-secondary/40 pl-12">"Book experienced technicians today for professional AC, plumbing & property maintenance solutions across Riyadh."</p>
          <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl relative z-10">
             <button onClick={() => handleBookNow("Final Hub CTA")} className="flex-1 px-12 py-6 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 border-b-4 border-blue-700 shadow-xl hover:bg-white hover:text-secondary transition-all active:scale-95"><ShieldCheck size={24} /> Book Now</button>
             <a href="tel:+966501234567" className="flex-1 px-12 py-6 bg-white text-primary rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 border-b-4 border-slate-100 shadow-xl hover:bg-secondary hover:text-white transition-all active:scale-95"><Phone size={24} fill="currentColor" /> Call Expert</a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName={modalService} />
    </main>
  );
}

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
