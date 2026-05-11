"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingActions from "@/components/FloatingActions";
import { motion } from "framer-motion";
import { 
  MapPin, Phone, ShieldCheck, Clock, Zap, CheckCircle2, ArrowRight, Star, 
  Building2, Home, BadgeCheck, Sparkles, ShieldPlus, Compass, Globe, Navigation
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LocationsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("General Location Hub");
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

  const districts = [
    { name: "Al Olaya", href: "/locations/al-olaya", zone: "Central Riyadh" },
    { name: "Al Malaz", href: "/locations/al-malaz", zone: "Central Riyadh" },
    { name: "Al Yasmin", href: "/locations/al-yasmin", zone: "North Riyadh" },
    { name: "Al Narjis", href: "/locations/al-narjis", zone: "North Riyadh" },
    { name: "Al Sahafa", href: "/locations/al-sahafa", zone: "North Riyadh" },
    { name: "Al Malqa", href: "/locations/al-malqa", zone: "North Riyadh" },
    { name: "Al Aqiq", href: "/locations/al-aqiq", zone: "North Riyadh" },
    { name: "Hittin", href: "/locations/hittin", zone: "North Riyadh" },
    { name: "Al Nakheel", href: "/locations/al-nakheel", zone: "North Riyadh" },
    { name: "Al Rawdah", href: "/locations/al-rawdah", zone: "East Riyadh" },
    { name: "Al Sulaymaniyah", href: "/locations/al-sulaymaniyah", zone: "Central Riyadh" },
    { name: "Al Rabwah", href: "/locations/al-rabwah", zone: "East Riyadh" },
    { name: "Al Munsiyah", href: "/locations/al-munsiyah", zone: "East Riyadh" },
    { name: "Al Qadisiyah", href: "/locations/al-qadisiyah", zone: "East Riyadh" },
    { name: "Al Shifa", href: "/locations/al-shifa", zone: "South Riyadh" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Navbar onBookNow={() => handleBookNow("General Location Hub")} />

      {/* 1. ELITE LOCATION HERO */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-24 bg-white overflow-hidden border-b border-gray-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/[0.01] -skew-x-12 translate-x-32 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col gap-10">
              <div className="flex items-center gap-4">
                 <div className="h-px w-16 bg-secondary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.6em] text-secondary italic">Our Riyadh Network</span>
              </div>
              <h1 className="text-[52px] md:text-[72px] lg:text-[84px] font-heading font-black text-primary leading-[1.1] tracking-tight">
                Trusted In <br /><span className="text-secondary">Every District</span> <br /> Of Riyadh.
              </h1>
              <p className="text-xl md:text-2xl text-primary/40 font-medium max-w-xl leading-relaxed italic border-l-4 border-secondary/20 pl-8">
                Providing rapid response AC repair, plumbing & home maintenance across all 15 major Riyadh neighborhoods.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-2">
                <button onClick={() => {document.getElementById('districts')?.scrollIntoView({behavior:'smooth'})}} className="w-full sm:w-auto px-12 py-7 bg-secondary text-white rounded-2xl font-black text-base tracking-widest transition-all shadow-xl hover:bg-primary active:scale-95 border-b-4 border-blue-700">Find My District</button>
                <a href="tel:+966501234567" className="w-full sm:w-auto px-12 py-7 bg-white text-primary border-2 border-gray-100 rounded-2xl font-black text-base tracking-widest shadow-lg hover:border-secondary hover:text-secondary active:scale-95 flex items-center justify-center gap-4 uppercase"><Phone size={20} fill="currentColor" /> Call Expert Now</a>
              </div>

              <div className="flex items-center gap-10 pt-8 border-t border-gray-100">
                 <div className="flex flex-col gap-1">
                    <span className="text-2xl font-heading font-black text-primary leading-none tracking-tighter">30-60 MIN</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Rapid Response</span>
                 </div>
                 <div className="w-px h-10 bg-gray-100" />
                 <div className="flex flex-col gap-1">
                    <span className="text-2xl font-heading font-black text-secondary leading-none">100% RIYADH</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Local Fleet</span>
                 </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative group">
              <div className="relative z-10 rounded-[64px] overflow-hidden shadow-3xl border-4 border-white">
                <img src="https://images.pexels.com/photos/5691632/pexels-photo-5691632.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Riyadh Map Coverage" className="w-full h-[650px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60" />
              </div>
              {/* Floating Map Badge */}
              <div className="absolute -top-10 -left-10 bg-white p-10 rounded-[48px] shadow-3xl border border-gray-50 flex flex-col items-center gap-4 z-20 animate-bounce-slow">
                 <div className="w-20 h-20 bg-secondary rounded-[32px] flex items-center justify-center text-white shadow-xl rotate-12"><Navigation size={40} /></div>
                 <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Full Coverage</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE CLEAN DISTRICT GRID */}
      <section id="districts" className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading sub="Location Catalog" title="Our Service Districts" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {districts.map((d, idx) => (
              <motion.div 
                key={d.name} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group p-10 bg-white rounded-[40px] border border-gray-100 flex flex-col gap-8 hover:border-secondary hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                   <MapPin size={32} />
                </div>
                <div className="flex flex-col gap-2">
                   <h3 className="text-2xl font-heading font-black text-primary tracking-tight leading-tight">{d.name}</h3>
                   <span className="text-[10px] font-black uppercase tracking-widest text-primary/30 italic">{d.zone}</span>
                </div>
                <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-gray-50 group-hover:border-secondary/10 transition-colors">
                   <Link href={d.href} className="w-full py-5 bg-primary text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] text-center hover:bg-secondary transition-all shadow-sm">View District Page</Link>
                   <button onClick={() => handleBookNow(`Book in ${d.name}`)} className="w-full py-5 border-2 border-gray-50 text-primary/60 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] text-center hover:border-secondary hover:text-secondary transition-all">Book In {d.name}</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RIYADH AUTHORITY SECTION */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="relative rounded-[64px] overflow-hidden shadow-3xl group">
                 <img src="https://images.pexels.com/photos/5691657/pexels-photo-5691657.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Maintenance Team in Riyadh" className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000" />
                 <div className="absolute inset-0 bg-secondary/10 opacity-40 group-hover:opacity-0 transition-opacity" />
              </div>
              <div className="flex flex-col gap-10">
                 <SectionHeading sub="Local Authority" title="Fastest Response In Riyadh" center={false} />
                 <p className="text-xl text-primary/40 font-medium leading-relaxed italic border-l-4 border-secondary/20 pl-8">
                    "We have strategically placed our technician hubs across Riyadh city to ensure we reach you within 30-60 minutes, no matter where you are located."
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { t: "North Riyadh", d: "Al Yasmin to Al Malqa" },
                      { t: "Central Riyadh", d: "Al Olaya to Al Malaz" },
                      { t: "East Riyadh", d: "Al Rawdah to Al Munsiyah" },
                      { t: "South Riyadh", d: "Al Shifa & Surroundings" }
                    ].map((z, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                         <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-secondary" />
                            <h4 className="text-xl font-heading font-black text-primary tracking-tight">{z.t}</h4>
                         </div>
                         <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] ml-6">{z.d}</p>
                      </div>
                    ))}
                 </div>
                 <button onClick={() => handleBookNow("Location Hub")} className="w-fit px-12 py-7 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-secondary transition-all border-b-4 border-slate-800 active:scale-95 mt-4">Schedule Local Technician</button>
              </div>
           </div>
        </div>
      </section>

      {/* 4. WHY CUSTOMERS TRUST OUR NETWORK */}
      <section className="py-40 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-7xl">
           <SectionHeading sub="The Network Advantage" title="Riyadh's Most Reliable Fleet" />
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { t: "30-60 Min Response", d: "Across All Districts", i: <Clock /> },
                { t: "Local Expertise", i: <MapPin />, d: "Riyadh-Based Techs" },
                { t: "24/7 Availability", i: <Zap />, d: "Emergency Support" },
                { t: "Full Warranty", i: <BadgeCheck />, d: "90-Day Protection" }
              ].map((item, idx) => (
                <div key={idx} className="p-10 bg-white rounded-[40px] border border-gray-100 flex flex-col items-center text-center gap-6 group hover:border-secondary transition-all shadow-sm">
                   <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm group-hover:rotate-12">{item.i}</div>
                   <div className="flex flex-col gap-2">
                      <h4 className="text-xl font-heading font-black text-primary tracking-tight leading-tight">{item.t}</h4>
                      <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">{item.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="py-40 bg-white flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-6xl w-full bg-primary p-12 md:p-24 rounded-[84px] text-white text-center flex flex-col items-center gap-14 relative overflow-hidden shadow-3xl border border-white/5">
          <div className="absolute top-0 right-0 p-32 opacity-10 rotate-12 pointer-events-none scale-150"><ShieldPlus size={500} /></div>
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
             <span className="bg-secondary text-white px-10 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.4em] shadow-xl italic">Riyadh's #1 Maintenance Fleet</span>
             <h2 className="text-[44px] md:text-[68px] lg:text-[84px] font-heading font-black text-white leading-[0.9] tracking-tighter uppercase">Service At Your <br /><span className="text-secondary">Doorstep?</span></h2>
          </div>
          <p className="text-xl md:text-2xl font-medium text-white/70 max-w-3xl leading-relaxed relative z-10 italic border-l-4 border-secondary/40 pl-12">"Book experienced home maintenance experts today. We reach all major Riyadh districts in 30-60 minutes."</p>
          <div className="flex flex-col sm:flex-row gap-8 w-full max-w-3xl relative z-10">
             <button onClick={() => handleBookNow("Location Hub Final")} className="flex-1 px-14 py-8 bg-secondary text-white rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-blue-700 shadow-2xl hover:bg-white hover:text-secondary transition-all active:scale-95"><ShieldCheck size={32} /> Book Service</button>
             <a href="tel:+966501234567" className="flex-1 px-14 py-8 bg-white text-primary rounded-[32px] font-black uppercase tracking-widest flex items-center justify-center gap-6 border-b-4 border-slate-100 shadow-2xl hover:bg-secondary hover:text-white transition-all active:scale-95"><Phone size={32} fill="currentColor" /> Call Expert Now</a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName={modalService} />
    </main>
  );
}
