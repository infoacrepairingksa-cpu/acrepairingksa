"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Users, 
  Star,
  CheckCircle2,
  CalendarCheck2,
  Award,
  Phone,
  Settings,
  ThumbsUp,
  BadgeCheck,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  Wrench,
  Sparkles,
  Zap
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BookingModal from "@/components/BookingModal";
import { motion } from "framer-motion";
import Schema, { 
  generateWebSiteSchema, 
  generateBreadcrumbSchema, 
  generateOrganizationSchema, 
  generateLocalBusinessSchema 
} from "@/components/Schema";
import { ArrowRight } from "lucide-react";


// --- Why Choose Us (Direct & Powerful) ---
const WhyChooseUs = ({ onBookNow }: { onBookNow: (s: string) => void }) => {
  const points = [
    {
      title: "Same Day AC Repair",
      description: "We understand Riyadh's heat. That's why we provide same-day urgent AC repair for all split and central units across the city.",
      icon: <Clock size={28} />
    },
    {
      title: "Guaranteed Work with Warranty",
      description: "Complete protection for your property. Every technical job comes with a comprehensive service warranty for your peace of mind.",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "Riyadh's #1 Certified Fleet",
      description: "Our licensed technicians are stationed strategically in Malqa, Olaya, and Rawdah to reach you within 30-60 minutes.",
      icon: <MapPin size={28} />
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. Upfront quotes after diagnostic inspection. Fair and competitive rates for all Riyadh residents.",
      icon: <Zap size={28} />
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs">Why Choose Us</span>
              <h2 className="text-[36px] font-heading font-black text-primary leading-tight tracking-tighter">
                Riyadh's Most Trusted <br /> <span className="text-secondary">Maintenance Experts</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                We combine technical excellence with Riyadh local expertise to provide cooling and maintenance solutions that actually last.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {points.map((p, i) => (
                <div key={i} className="flex flex-col gap-4 p-8 rounded-[32px] bg-slate-50 hover:bg-white border border-transparent hover:border-primary/5 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    {p.icon}
                  </div>
                  <h3 className="text-xl font-heading font-black text-primary tracking-tight">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl">
               <img 
                 src="https://images.pexels.com/photos/5691631/pexels-photo-5691631.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                 alt="Certified AC Technician Riyadh" 
                 className="w-full h-[600px] object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-12">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                     <p className="text-white font-heading font-black text-3xl mb-2">15,000+</p>
                     <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Homes Serviced in Riyadh</p>
                  </div>
               </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials (Authentic Feedback) ---
const Testimonials = () => {
  const reviews = [
    {
      name: "Ahmed Al-Sudairy",
      location: "Al Malqa, Riyadh",
      text: "Outstanding service. The technician arrived in 30 minutes for my AC repair in Malqa. Fixed the gas leak and now the cooling is better than ever. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Williams",
      location: "Diplomatic Quarter, Riyadh",
      text: "The best AC cleaning service in Riyadh. They were very clean, used high-pressure water, and my AC unit is silent now. Very professional team.",
      rating: 5
    },
    {
      name: "Khalid Mansour",
      location: "Al Olaya, Riyadh",
      text: "Same-day service as promised. My AC stopped working at 2 PM, and by 4 PM it was fixed. The price was transparent and fair.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center flex flex-col items-center gap-6 mb-20">
          <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-2">
            <Star size={32} fill="currentColor" />
          </div>
          <h2 className="text-[36px] font-heading font-black text-primary leading-tight tracking-tighter">
            What Riyadh Residents <br /> <span className="text-secondary">Are Saying</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-50 flex flex-col gap-6 group">
              <div className="flex gap-1">
                {[...Array(r.rating)].map((_, i) => <Star key={i} size={18} fill="#0073E6" stroke="#0073E6" />)}
              </div>
              <p className="text-gray-600 font-medium leading-relaxed italic">"{r.text}"</p>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold">
                  {r.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-primary tracking-tight">{r.name}</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{r.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Process Steps ---
const ProcessSteps = ({ onBookNow }: { onBookNow: (s: string) => void }) => {
  const steps = [
    {
      title: "Fast Booking",
      desc: "Call or WhatsApp us. We respond in seconds and book your slot immediately.",
      icon: <MessageSquare size={24} />,
      color: "bg-primary"
    },
    {
      title: "Diagnostic Arrival",
      desc: "Technician arrives in 30-60 mins for a full inspection and upfront quote.",
      icon: <Clock size={24} />,
      color: "bg-secondary"
    },
    {
      title: "Expert Repair",
      desc: "Most repairs are completed on the spot using original genuine spare parts.",
      icon: <Wrench size={24} />,
      color: "bg-primary"
    },
    {
      title: "Service Warranty",
      desc: "Enjoy ice-cold cooling with a full service guarantee for your peace of mind.",
      icon: <BadgeCheck size={24} />,
      color: "bg-secondary"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="flex flex-col gap-4">
              <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs">Our Process</span>
              <h2 className="text-[36px] font-heading font-black text-primary leading-tight tracking-tighter">
                How We Get Your <br /> <span className="text-secondary">AC Fixed Today</span>
              </h2>
            </div>
            <button 
               onClick={() => onBookNow("Process - Immediate Help")}
               className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-secondary transition-all shadow-xl shadow-primary/20 active:scale-95 flex items-center gap-3"
            >
              Book technician now <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s, idx) => (
              <div key={idx} className="relative group">
                <div className="flex flex-col gap-6 p-10 rounded-[48px] bg-slate-50 border border-transparent hover:border-primary/5 hover:bg-white hover:shadow-2xl transition-all duration-500 h-full">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3", s.color)}>
                    {s.icon}
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-black text-secondary/40 uppercase tracking-[0.3em]">Step 0{idx + 1}</span>
                    <h3 className="text-2xl font-heading font-black text-primary tracking-tighter leading-tight">{s.title}</h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-gray-200 z-10">
                    <ChevronRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};




export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBookNow = (serviceName: string = "") => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Schema type="WebSite" data={generateWebSiteSchema()} />
      <Schema type="LocalBusiness" data={generateLocalBusinessSchema()} />
      <Schema type="BreadcrumbList" data={generateBreadcrumbSchema([{ name: "Home", item: "/" }])} />
      
      <Navbar onBookNow={() => handleBookNow("Navbar - General")} />
      
      <div className="flex flex-col">
        <Hero onBookNow={handleBookNow} />
        <div className="bg-[#F8FAFC]">
          <Services onBookNow={handleBookNow} />
        </div>
        <WhyChooseUs onBookNow={handleBookNow} />
        <div className="bg-[#F8FAFC]">
          <ProcessSteps onBookNow={handleBookNow} />
        </div>
        <Testimonials />
        <div className="bg-[#F8FAFC]">
          <FAQ />
        </div>
      </div>

      {/* Primary Final CTA Section */}
      <section className="py-32 bg-white flex flex-col items-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="max-w-6xl w-full bg-secondary p-12 md:p-24 rounded-[64px] text-white relative overflow-hidden shadow-[0_60px_120px_-20px_rgba(34,197,94,0.4)] transition-all hover:scale-[1.005]">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none -rotate-12 scale-150">
              <Award size={400} />
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center gap-12">
              <div className="flex flex-col items-center gap-4">
                <span className="bg-white/20 px-8 py-3 rounded-full font-black text-base uppercase tracking-widest text-white border border-white/20 transition-all hover:bg-white/30">Available in Your District Today</span>
                <h2 className="text-[36px] font-heading font-black leading-tight tracking-tighter">
                  Need AC Repair? <br /> <span className="text-primary font-black uppercase tracking-tighter">Technician in 30 Mins.</span>
                </h2>
              </div>
              
              <p className="text-lg md:text-2xl font-medium opacity-90 max-w-3xl leading-relaxed">
                Riyadh's #1 Maintenance Fleet is online. Same-day emergency AC fix, 
                deep cleaning, and plumbing available 24/7 across Riyadh.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-4xl">
                <a 
                  href="tel:+966501234567" 
                  className="w-full sm:flex-1 bg-white text-secondary px-10 py-7 rounded-3xl font-black text-xl uppercase tracking-widest shadow-2xl hover:bg-primary hover:text-white transition-all active:scale-95 flex items-center justify-center gap-5 group"
                >
                  <Phone size={28} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                  Call: +966 50
                </a>
                <a 
                  href="https://wa.me/966501234567" 
                   className="w-full sm:flex-1 bg-primary text-white px-10 py-7 rounded-3xl font-black text-xl uppercase tracking-widest shadow-2xl hover:bg-white hover:text-primary transition-all active:scale-95 flex items-center justify-center gap-5 group"
                >
                  <CalendarCheck2 size={28} className="group-hover:scale-110 transition-transform" />
                  WhatsApp Fix
                </a>
              </div>

              <div className="flex flex-col items-center gap-3 mt-4">
                <div className="flex items-center gap-3 opacity-80">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-sm font-bold uppercase tracking-wider">Limited slots available today</span>
                </div>
                <div className="flex items-center gap-3 opacity-80">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-sm font-bold uppercase tracking-wider">Book now before 9PM for same-day service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName={selectedService}
      />

      <Footer />
      <FloatingActions />
    </main>
  );
}
