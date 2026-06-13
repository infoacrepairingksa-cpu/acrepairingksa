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
                  <Star size={14} /> Rated #1 in KSA
                </span>
                <span className="flex items-center gap-1.5 bg-secondary/10 text-secondary border border-secondary/20 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider">
                  <CheckCircle2 size={14} /> Genuine OEM Parts
                </span>
                <span className="flex items-center gap-1.5 bg-primary/5 text-primary border border-primary/10 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider">
                  <Zap size={14} /> No Hidden Fees
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="flex items-center text-amber-500 gap-0.5">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </span>
                <span className="text-sm font-bold text-primary">Google Rating <span className="text-secondary">4.9/5</span> (542 Verified Reviews)</span>
              </div>
              <h1 className="text-[40px] md:text-[52px] lg:text-[60px] font-heading font-black text-primary leading-[1.05] tracking-tight mt-2">
                AC Repair, AC Cleaning & Home Maintenance Services Across <span className="text-secondary">Saudi Arabia (KSA)</span>
              </h1>
              <p className="text-base md:text-lg text-primary/80 font-medium leading-relaxed max-w-xl">
                Don't let a broken AC ruin your day. We provide <strong>fast, reliable, and guaranteed AC repair, cleaning, and maintenance</strong> for homes and businesses across the entire KSA. Whether it's a sudden breakdown, poor cooling, or regular maintenance, our certified technicians are ready to restore your comfort.
              </p>
              {/* GEO Signal */}
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2 flex flex-wrap items-center gap-2">
                <MapPin size={16} className="text-secondary shrink-0" /> Serving Riyadh, Jeddah, Dammam, Al Khobar, Makkah, Madinah, Taif, Jubail & Major Cities Across Saudi Arabia
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-4"
            >
              <a 
                href="tel:+966 51 094 2150"
                className="w-full sm:w-auto px-8 md:px-10 py-5 md:py-6 bg-primary hover:bg-secondary text-white rounded-[20px] font-black text-sm md:text-base tracking-widest transition-all shadow-[0_20px_40px_-10px_rgba(31,32,97,0.4)] flex items-center justify-center gap-4 hover:-translate-y-1 active:scale-95"
              >
                <Phone size={20} fill="currentColor" /> Call Now
              </a>
              <a 
                href="https://wa.me/966510942150?text=Hello,%20I%20need%20AC%20services.%20Can%20you%20help?"
                className="w-full sm:w-auto px-8 md:px-10 py-5 md:py-6 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-[20px] font-black text-sm md:text-base tracking-widest transition-all shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] flex items-center justify-center gap-4 hover:-translate-y-1 active:scale-95"
              >
                <MessageSquare size={20} fill="currentColor" /> WhatsApp Now
              </a>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-8 mt-4"
            >
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-3">
                  <Star size={20} fill="currentColor" />
                </div>
                <div className="text-2xl font-black text-primary">15,000+</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">Successful AC Services</div>
                <div className="text-[10px] text-gray-400 mt-2">Homes & offices cooled</div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-3">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-2xl font-black text-primary">90-Day</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">Service Warranty</div>
                <div className="text-[10px] text-gray-400 mt-2">Guaranteed peace of mind</div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-3">
                  <Clock size={20} />
                </div>
                <div className="text-2xl font-black text-primary">30 Min</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">Avg. Response Time</div>
                <div className="text-[10px] text-gray-400 mt-2">Fastest emergency dispatch</div>
              </div>
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
                src="/uploaded/ac-gas-refill-outdoor.png" 
                alt="Licensed AC Technician performing gas refill on outdoor unit in Saudi Arabia" 
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            {/* Small before/after thumbnail below */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="relative h-24 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <Image src="/uploaded/dirty-ac-coils.png" alt="Dirty AC coils before cleaning" fill className="object-cover" sizes="200px" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[8px] font-black uppercase tracking-widest text-center py-1">Before Cleaning</div>
              </div>
              <div className="relative h-24 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <Image src="/uploaded/ac-cleaning-pressure-wash.png" alt="AC pressure washing after cleaning" fill className="object-cover" sizes="200px" />
                <div className="absolute bottom-0 left-0 right-0 bg-secondary/80 text-white text-[8px] font-black uppercase tracking-widest text-center py-1">After Cleaning</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};



export default Hero;
