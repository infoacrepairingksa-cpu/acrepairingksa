"use client";

import React from "react";
import Image from "next/image";
import { Phone, ArrowRight, Star, Clock, ShieldCheck, CheckCircle2, Zap, MessageSquare, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Hero = ({ onBookNow }: { onBookNow: (service: string) => void }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#FAFAFA]">
      {/* Background decoration - ContentStudio SaaS aesthetic */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] mix-blend-multiply opacity-70 pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] mix-blend-multiply opacity-50 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-pink-500/5 rounded-full blur-[120px] mix-blend-multiply opacity-60 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Pain Point + Solution */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center flex-wrap gap-2 md:gap-3">
                <span className="flex items-center gap-1.5 bg-[#25D366]/10 text-[#1DA851] border border-[#25D366]/20 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider">
                  <Clock size={14} /> 30-Min Response
                </span>
                <span className="flex items-center gap-1.5 bg-secondary/10 text-secondary border border-secondary/20 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider">
                  <ShieldCheck size={14} /> Licensed Technicians
                </span>
                <span className="flex items-center gap-1.5 bg-primary/5 text-primary border border-primary/10 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider">
                  <Zap size={14} /> Same-Day Service
                </span>
              </div>
              <h1 className="text-[40px] md:text-[52px] lg:text-[60px] font-heading font-black text-primary leading-[1.05] tracking-tight mt-2">
                AC Repair, AC Cleaning & <span className="text-secondary">Home Maintenance</span> Services in Riyadh
              </h1>
              {/* AI Summary Block */}
              <p className="text-base md:text-lg text-primary/80 font-medium leading-relaxed max-w-xl">
                <strong>Professional AC repair, AC cleaning, AC installation, AC maintenance and AC gas refill services across Riyadh.</strong> Available for residential and commercial air conditioning systems with same-day support. We also provide complete home maintenance and plumbing solutions.
              </p>
              {/* GEO Signal */}
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2 flex items-center gap-2">
                <MapPin size={16} className="text-secondary" /> Riyadh, Saudi Arabia — Serving Al Olaya, Al Malqa & All Main Service Areas
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-4"
            >
              <a 
                href="tel:+966590132864"
                className="w-full sm:w-auto px-8 md:px-10 py-5 md:py-6 bg-primary hover:bg-secondary text-white rounded-[20px] font-black text-sm md:text-base tracking-widest transition-all shadow-[0_20px_40px_-10px_rgba(31,32,97,0.4)] flex items-center justify-center gap-4 hover:-translate-y-1 active:scale-95"
              >
                <Phone size={20} fill="currentColor" /> Call Now
              </a>
              <a 
                href="https://wa.me/966590132864?text=Hello,%20I%20need%20AC%20services.%20Can%20you%20help?"
                className="w-full sm:w-auto px-8 md:px-10 py-5 md:py-6 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-[20px] font-black text-sm md:text-base tracking-widest transition-all shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] flex items-center justify-center gap-4 hover:-translate-y-1 active:scale-95"
              >
                <MessageSquare size={20} fill="currentColor" /> WhatsApp Now
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-[48px] blur-3xl -z-10 translate-x-10 translate-y-10" />
            <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
              <Image 
                src="/Ac Services/Fast & Reliable AC Repair.webp" 
                alt="Fast & Reliable AC Repair Technician in Riyadh" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};



export default Hero;
