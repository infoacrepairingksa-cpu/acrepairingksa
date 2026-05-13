"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingActions from "@/components/FloatingActions";
import { motion } from "framer-motion";
import { 
  Phone, ShieldCheck, Clock, CheckCircle2, Star, MapPin, 
  ThumbsUp, Users, Building2, Home, Check, BadgeCheck, Sparkles, 
  ShieldPlus, Heart, Microscope, Layers, Maximize, 
  Zap, Wrench, Snowflake, Target, Eye, Gem, Trophy
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBookNow = () => setIsModalOpen(true);

  const SectionHeading = ({ sub, title, center = true, light = false }: any) => (
    <div className={cn("flex flex-col gap-4 mb-16", center ? "items-center text-center" : "items-start text-left")}>
      <span className={cn("font-black tracking-[0.3em] uppercase text-[10px] px-5 py-2 rounded-full w-fit shadow-sm", light ? "bg-white/10 text-secondary border border-white/20" : "bg-secondary/10 text-secondary")}>{sub}</span>
      <h2 className={cn("text-[32px] md:text-[40px] lg:text-[48px] font-heading font-black leading-[1.2] tracking-tight max-w-3xl", light ? "text-white" : "text-primary")}>{title}</h2>
    </div>
  );

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Navbar onBookNow={handleBookNow} />

      {/* 1. ELEGANT STORYTELLING HERO */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 bg-white overflow-hidden border-b border-gray-50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/[0.01] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0073E6_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                 <div className="h-px w-10 bg-secondary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Our Legacy in Riyadh</span>
              </div>
              <h1 className="text-[52px] md:text-[72px] lg:text-[84px] font-heading font-black text-primary leading-[1.1] tracking-tight">
                Quality You <br /><span className="text-secondary italic">Can Trust</span> <br /> In Every Fix.
              </h1>
              <p className="text-lg md:text-xl text-primary/60 font-medium max-w-lg leading-relaxed border-l-4 border-secondary pl-6">
                Riyadh Home Fix is dedicated to providing elite home maintenance solutions with a focus on precision, speed, and absolute reliability.
              </p>
              <div className="flex items-center gap-6 mt-2">
                 <button onClick={handleBookNow} className="px-10 py-6 bg-secondary text-white rounded-2xl font-black text-base tracking-widest transition-all shadow-xl hover:bg-primary active:scale-95">Book Our Experts</button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl border-4 border-white group h-[550px]">
                <Image 
                  src="https://images.pexels.com/photos/5691632/pexels-photo-5691632.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="About Our Company" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[32px] shadow-xl border border-gray-50 flex items-center gap-4">
                 <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white shadow-lg animate-pulse"><Trophy size={24} /></div>
                 <span className="text-[10px] font-black text-primary uppercase tracking-widest">#1 in Riyadh</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (Authority Builder) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { n: "5000+", t: "Happy Clients", s: "Across Riyadh" },
                { n: "10+", t: "Years Experience", s: "In Maintenance" },
                { n: "15+", t: "Local Districts", s: "Full Coverage" },
                { n: "24/7", t: "Emergency Support", s: "Always Ready" }
              ].map((s, idx) => (
                <div key={idx} className="flex flex-col gap-3 group">
                   <span className="text-[44px] md:text-[56px] font-heading font-black text-primary group-hover:text-secondary transition-colors leading-none tracking-tighter">{s.n}</span>
                   <span className="text-sm font-black uppercase tracking-widest text-primary/70">{s.t}</span>
                   <span className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">{s.s}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. MISSION & VISION (Balanced Cards) */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-12 md:p-16 bg-white rounded-[48px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                 <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-10 group-hover:bg-secondary group-hover:text-white transition-all"><Target size={32} /></div>
                 <h3 className="text-[32px] font-heading font-black text-primary mb-6 tracking-tight">Our Mission</h3>
                 <p className="text-lg text-primary/50 font-medium leading-relaxed">To provide the most reliable, professional, and high-quality home maintenance services in Riyadh, ensuring every home we touch remains safe, efficient, and comfortable.</p>
              </div>
              <div className="p-12 md:p-16 bg-white rounded-[48px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                 <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-10 group-hover:bg-secondary group-hover:text-white transition-all"><Eye size={32} /></div>
                 <h3 className="text-[32px] font-heading font-black text-primary mb-6 tracking-tight">Our Vision</h3>
                 <p className="text-lg text-primary/50 font-medium leading-relaxed">To be the #1 choice for property maintenance in Saudi Arabia, known for our technical excellence, integrity, and obsession with customer satisfaction.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. CORE VALUES (Elegant Grid) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <SectionHeading sub="The Brand DNA" title="The Values That Drive Us" />
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { t: "Reliability", i: <ShieldPlus />, d: "We show up on time, every time." },
                { t: "Expertise", i: <Gem />, d: "Highly trained local technicians." },
                { t: "Transparency", i: <CheckCircle2 />, d: "Honest pricing with no hidden costs." },
                { t: "Efficiency", i: <Zap />, d: "Fast repairs without quality loss." }
              ].map((v, idx) => (
                <div key={idx} className="p-10 bg-[#F8FBFF] rounded-[40px] border border-secondary/5 flex flex-col items-center text-center gap-6 group hover:border-secondary transition-all">
                   <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 transition-transform">{v.i}</div>
                   <div className="flex flex-col gap-2">
                      <h4 className="text-xl font-heading font-black text-primary tracking-tight">{v.t}</h4>
                      <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">{v.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. WHY WE ARE DIFFERENT (Spacious Layout) */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl group h-[550px]">
                 <Image 
                   src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                   alt="Professional Technician" 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                 />
                 <div className="absolute inset-0 bg-secondary/10 opacity-40 group-hover:opacity-0 transition-opacity" />
              </div>
              <div className="flex flex-col gap-8 text-left">
                 <SectionHeading sub="The Edge" title="Why Choose Riyadh Home Fix?" center={false} />
                 <p className="text-lg text-primary/50 font-medium leading-relaxed italic border-l-4 border-secondary/20 pl-6">
                    Unlike traditional maintenance companies, we focus on a long-term relationship with your home. We use premium diagnostic tools to find problems before they become disasters.
                 </p>
                 <div className="grid grid-cols-1 gap-6">
                    {[
                      "30-60 Minute Rapid Response", "Advanced Sonar Leak Detection", "Medical-Grade AC Sanitization", "Transparent Upfront Pricing"
                    ].map((w, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-primary font-bold text-lg"><BadgeCheck size={24} className="text-secondary shrink-0" /> {w}</div>
                    ))}
                 </div>
                 <button onClick={handleBookNow} className="w-fit px-12 py-6 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-secondary transition-all active:scale-95 border-b-4 border-slate-800">Experience the Difference</button>
              </div>
           </div>
        </div>
      </section>

      {/* 6. OUR COMMITMENT */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center flex flex-col items-center gap-10">
           <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-2 animate-bounce-slow"><Heart size={40} /></div>
           <h2 className="text-[36px] md:text-[52px] font-heading font-black text-primary leading-tight tracking-tight">Committed To Riyadh's <br /><span className="text-secondary italic">Home Safety</span></h2>
           <p className="text-xl text-primary/50 font-medium leading-relaxed italic max-w-3xl">"We treat every home in Riyadh as if it were our own. Our commitment is to quality, safety, and a maintenance-free life for all our clients."</p>
           <div className="flex items-center gap-4 pt-10">
              <div className="w-16 h-px bg-gray-100" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary/30">The Riyadh Home Fix Team</span>
              <div className="w-16 h-px bg-gray-100" />
           </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-32 bg-white flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-6xl w-full bg-primary p-12 md:p-20 rounded-[64px] text-white text-center flex flex-col items-center gap-10 relative overflow-hidden shadow-2xl border border-white/5">
          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
             <span className="bg-secondary text-white px-8 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-xl italic">The Riyadh Gold Standard</span>
             <h2 className="text-[36px] md:text-[52px] lg:text-[64px] font-heading font-black text-white leading-[1.1] tracking-tight">Need A Trusted <br /><span className="text-secondary">Maintenance Partner?</span></h2>
          </div>
          <p className="text-lg md:text-xl font-medium text-white/60 max-w-2xl leading-relaxed relative z-10">Join 5,000+ happy residents in Riyadh who trust us for their AC, plumbing, and home care needs.</p>
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl relative z-10">
             <button onClick={handleBookNow} className="flex-1 px-12 py-6 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 border-b-4 border-blue-700 shadow-xl hover:bg-white hover:text-secondary transition-all active:scale-95"><ShieldCheck size={24} /> Book Now</button>
             <a href="tel:+966501234567" className="flex-1 px-12 py-6 bg-white text-primary rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-4 border-b-4 border-slate-100 shadow-xl hover:bg-secondary hover:text-white transition-all active:scale-95"><Phone size={24} fill="currentColor" /> Call Expert</a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName="General Maintenance" />
    </main>
  );
}
