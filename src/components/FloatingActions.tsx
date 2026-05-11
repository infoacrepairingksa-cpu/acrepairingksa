"use client";

import React from "react";
import { Phone, MessageSquare, ShieldCheck, Clock } from "lucide-react";

/**
 * High-Conversion Floating Actions
 * Optimized for 60/30/10 Rule and Mobile UX
 */
const FloatingActions = () => {
  return (
    <>
      {/* Desktop Sticky WhatsApp & Call (Bottom Right) */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-[60] flex-col gap-4">
        <a
          href="tel:+966501234567"
          className="flex items-center gap-3 bg-white p-4 pr-6 rounded-full shadow-[0_10px_40px_rgba(31,32,97,0.15)] border border-gray-100 hover:scale-105 hover:border-primary transition-all group"
        >
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
            <Phone size={20} fill="currentColor" />
          </div>
          <div className="flex flex-col">
             <span className="text-[9px] font-black uppercase tracking-widest text-primary/50">Call Now</span>
             <span className="text-sm font-black text-primary group-hover:text-primary tracking-tight">+966 50 123 4567</span>
          </div>
        </a>

        <a
          href="https://wa.me/966501234567"
          className="flex items-center gap-4 bg-[#25D366] text-white p-4 pr-6 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-105 hover:bg-[#1DA851] transition-all group"
        >
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <MessageSquare size={20} fill="currentColor" />
          </div>
          <div className="flex flex-col">
             <span className="text-[9px] font-black uppercase tracking-widest text-white/80">Instant Reply</span>
             <span className="text-sm font-black tracking-tight">WhatsApp Us</span>
          </div>
        </a>
      </div>

      {/* Mobile Sticky Bar (Bottom) - Conversion Focused */}
      <div className="fixed bottom-6 left-6 right-6 z-[60] lg:hidden">
        <div className="bg-primary shadow-[0_20px_60px_rgba(31,32,97,0.4)] p-3 rounded-[28px] border border-white/5 flex items-center gap-3">
          <a
            href="https://wa.me/966501234567"
            className="flex-1 bg-[#25D366] hover:bg-[#1DA851] text-white flex items-center justify-center gap-3 py-5 rounded-[22px] transition-all active:scale-95 shadow-xl shadow-secondary/10"
          >
            <MessageSquare size={22} fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">WhatsApp</span>
          </a>
          <a
            href="tel:+966501234567"
            className="flex-1 bg-white hover:bg-primary hover:text-white text-primary flex items-center justify-center gap-3 py-5 rounded-[22px] transition-all active:scale-95 shadow-xl"
          >
            <Phone size={22} fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Call Now</span>
          </a>
        </div>
        <div className="mt-3 flex flex-col items-center gap-2">
           <div className="bg-white/95 backdrop-blur-md px-5 py-2 rounded-full shadow-2xl border border-gray-100 flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_8px_rgba(37,211,102,0.6)]" />
             <span className="text-[9px] font-black uppercase tracking-widest text-primary">Emergency Teams Stationed in Riyadh</span>
           </div>
           <div className="bg-secondary px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
             <Clock size={12} className="text-white" />
             <span className="text-[9px] font-black uppercase tracking-widest text-white">24/7 Emergency Service</span>
           </div>
        </div>
      </div>
    </>
  );
};

export default FloatingActions;
