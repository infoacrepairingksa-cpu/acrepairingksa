"use client";

import React, { useState } from "react";
import Head from "next/head";
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
      title: "Genuine Spare Parts",
      description: "Zero compromise on quality. We only use original manufacturer-approved parts for all technical repairs and replacements.",
      icon: <Settings size={28} />
    },
    {
      title: "Certified Technicians with 10+ Years Experience",
      description: "Technicians stationed in Malqa, Sahafa, Batha, and beyond for a guaranteed 30-minute arrival time at your location.",
      icon: <MapPin size={28} />
    }
  ];

  return (
    <section id="why-us" className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <span className="bg-secondary/10 text-secondary font-black tracking-[0.3em] uppercase text-[10px] px-4 py-2 rounded-full w-fit">Direct Advantage</span>
              <h2 className="text-[36px] font-heading font-black text-primary leading-tight tracking-tighter">
                Why Riyadh Home Fix is the <span className="text-secondary">#1 Choice</span> for Maintenance?
              </h2>
              <p className="text-lg text-primary font-medium leading-relaxed max-w-xl opacity-90">
                We combine technical precision with Riyadh's fastest response time. 
                Our team is certified, background-checked, and ready 24/7.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
              {points.map((point, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={point.title} 
                  className="bg-white p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col gap-6 group hover:border-secondary/30 transition-all"
                >
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-xl text-primary mb-3 tracking-tight">{point.title}</h3>
                    <p className="text-primary/70 text-sm leading-relaxed font-medium">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Proof Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="bg-white rounded-[48px] p-12 md:p-16 text-primary relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none rotate-12">
                <ShieldCheck size={300} />
              </div>
              <div className="relative z-10 flex flex-col gap-12">
                <div className="flex flex-col gap-6">
                  <h3 className="text-3xl md:text-4xl font-heading font-black leading-tight">Trusted by Riyadh Homes</h3>
                  
                  {/* High Trust Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 flex flex-col gap-2">
                       <span className="text-3xl font-black text-secondary leading-none">5000+</span>
                       <span className="text-xs uppercase font-bold tracking-wider text-primary/70">Jobs Completed</span>
                    </div>
                    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 flex flex-col gap-2">
                       <span className="text-3xl font-black text-secondary leading-none">10+</span>
                       <span className="text-xs uppercase font-bold tracking-wider text-primary/70">Years Exp.</span>
                    </div>
                    
                    {/* Real Job Proof Image */}
                    <div className="col-span-2 relative h-48 rounded-2xl overflow-hidden group shadow-lg">
                      <img 
                        src="/riyadh_ac_cleaning_proof_1778083746729.png" 
                        alt="Real AC Service Proof Riyadh" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <span className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-secondary" /> Real job proof - AC Cleaning in Malqa
                        </span>
                      </div>
                    </div>

                    <div className="col-span-2 bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-2xl border border-blue-100 flex items-center justify-between">
                       <div className="flex flex-col gap-1">
                          <span className="text-sm uppercase font-black tracking-widest text-primary/80">Google Rating</span>
                          <span className="text-3xl font-black text-primary leading-none flex items-center gap-2">
                            4.9 <Star size={24} className="text-amber-500 fill-amber-500" />
                          </span>
                       </div>
                       <div className="flex -space-x-4">
                         {[
                           "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
                           "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
                           "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150",
                           "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150"
                         ].map((img, i) => (
                           <img key={i} src={img} alt="Customer" className="w-14 h-14 rounded-full border-4 border-white object-cover" />
                         ))}
                       </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => onBookNow("Why Us - Bottom Button")}
                  className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-4 shadow-xl shadow-[#25D366]/20"
                >
                  <WhatsAppIcon size={18} className="text-white" /> Chat on WhatsApp Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Process Section (How It Works) ---
const ProcessSteps = ({ onBookNow }: { onBookNow: (s: string) => void }) => {
  const steps = [
    {
      number: "01",
      title: "Smart Booking",
      desc: "Booking takes 30 seconds. Instant WhatsApp confirmed booking in seconds. No long forms.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      number: "02",
      title: "Expert Arrival",
      desc: "Technician arrives in 60 minutes. Our verified technician arrives at your door within 30-60 mins.",
      icon: <MapPin className="w-8 h-8" />,
      color: "bg-orange-500"
    },
    {
      number: "03",
      title: "Quality Repair",
      desc: "Professional tools and original parts used for guaranteed finish.",
      icon: <Wrench className="w-8 h-8" />,
      color: "bg-primary"
    },
    {
      number: "04",
      title: "Pristine Finish",
      desc: "Full testing and cleanup to ensure your home is left sparkling.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-secondary"
    }
  ];

  return (
    <section id="process" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 flex flex-col items-center gap-4"
        >
          <span className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-black uppercase tracking-[0.2em]">Efficiency Protocol</span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight tracking-tighter">
            How Our Service <span className="text-secondary">Works in Riyadh</span>
          </h2>
          <p className="text-lg text-primary/60 font-medium max-w-2xl mx-auto leading-relaxed">
            We've refined the maintenance experience into a seamless, high-speed 
            process designed for your convenience and absolute peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 relative">
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-primary/10 to-transparent z-0" />
          
          {steps.map((step, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
              key={idx} 
              className="flex flex-col items-center text-center group relative z-10"
            >
              {/* Icon Container */}
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center text-primary shadow-[0_20px_40px_-10px_rgba(31,32,97,0.08)] group-hover:shadow-[0_30px_60px_-15px_rgba(31,32,97,0.15)] group-hover:-translate-y-2 transition-all duration-500 border border-gray-100 group-hover:border-secondary overflow-hidden">
                  <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity", step.color)} />
                  <div className="relative z-10 group-hover:text-secondary group-hover:scale-110 transition-all duration-500">
                    {step.icon}
                  </div>
                </div>
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-white rounded-2xl flex items-center justify-center font-black text-sm shadow-xl border-4 border-white group-hover:bg-secondary transition-colors">
                  {step.number}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-3 px-4">
                <h3 className="text-xl font-heading font-black text-primary tracking-tight group-hover:text-secondary transition-colors leading-none">
                  {step.title}
                </h3>
                <p className="text-primary/60 text-sm font-bold leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </div>

              {/* Mobile Arrow (between steps) */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden my-8 text-primary/10">
                  <ChevronRight size={32} className="rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-primary/10 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-primary tracking-tight">
              <span className="text-secondary tracking-tighter capitalize leading-none">High-Speed Fleet</span> Online in your area
            </p>
          </div>

          <a 
            href="tel:+966501234567"
            className="group bg-secondary hover:bg-secondary/90 text-white px-14 py-7 rounded-[32px] font-black text-base uppercase tracking-[0.2em] transition-all hover:shadow-[0_40px_80px_-20px_rgba(249,115,22,0.4)] active:scale-95 flex items-center gap-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20" />
              <Phone size={24} fill="currentColor" className="text-white relative z-10 group-hover:rotate-12 transition-transform" />
            </div>
            Call Now To Book
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// --- Social Proof Section ---
const Testimonials = () => {
  const sliderRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
        // If we've reached the end of the scrollable area, snap back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
      }
    }, 3500); // Auto-scroll every 3.5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const reviews = [
    {
      name: "AM Mohsin",
      area: "Al Olaya, Riyadh",
      date: "11 months ago",
      comment: "The team arrived before the given time, find the fault very fast and resolve the issue only in 20 minutes",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&fit=crop"
    },
    {
      name: "Ansar Khan",
      area: "Al Malqa, Riyadh",
      date: "11 months ago",
      comment: "Great experience with working these guys👍👍",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&fit=crop"
    },
    {
      name: "Umar Hayat",
      area: "Al Yasmin, Riyadh",
      date: "1 year ago",
      comment: "It's very good company very good service. Like Management",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&fit=crop"
    },
    {
      name: "Faisal Al-Rashed",
      area: "Al Sahafa, Riyadh",
      date: "2 months ago",
      comment: "Best AC maintenance service in Riyadh. They perfectly cleaned the ducts and refilled the gas. Highly recommended.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&fit=crop"
    },
    {
      name: "Awais Riaz",
      area: "Al Narjis, Riyadh",
      date: "3 months ago",
      comment: "Responsive and excellent AC repair services. Professional guys. They arrived within 30 mins just like they promised.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&fit=crop"
    },
    {
      name: "Mohammed Zaid",
      area: "Al Malaz, Riyadh",
      date: "5 months ago",
      comment: "Outstanding emergency support. The technician fixed my split AC compressor in the middle of summer. Very professional.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&fit=crop"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center justify-center mb-16 gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-center text-gray-900 font-sans tracking-tight">
            What Our Customers Says About Us?
          </h2>
          <p className="text-gray-500 text-center max-w-2xl font-sans text-[15px] leading-relaxed">
            We take absolute pride in our service quality. Read authentic experiences from our satisfied clients across Riyadh who trust us for their AC repair, deep cleaning, and emergency maintenance needs. We let our results speak for themselves.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
          {/* Left Stats Widget */}
          <div className="flex flex-col items-center justify-center shrink-0 lg:w-48">
            <span className="text-2xl font-bold text-gray-900 tracking-tight font-sans">GOOD</span>
            <div className="flex gap-0.5 text-[#FBBC05] my-2">
              <Star fill="currentColor" size={26} className="text-[#FBBC05] border-none" />
              <Star fill="currentColor" size={26} className="text-[#FBBC05]" />
              <Star fill="currentColor" size={26} className="text-[#FBBC05]" />
              <Star fill="currentColor" size={26} className="text-[#FBBC05]" />
              <div className="relative">
                <Star fill="#E5E7EB" size={26} className="text-[#E5E7EB]" />
                <div className="absolute inset-0 overflow-hidden w-1/2">
                   <Star fill="currentColor" size={26} className="text-[#FBBC05]" />
                </div>
              </div>
            </div>
            <span className="text-sm text-gray-800 tracking-normal whitespace-nowrap mb-2 font-sans font-medium">Based on <strong>19 reviews</strong></span>
            
            {/* Google Logo text style */}
            <div className="font-sans font-medium text-[32px] tracking-tighter flex items-center">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
          </div>

          {/* Slider Container */}
          <div className="flex-1 relative w-full group px-2 md:px-0">
            <button 
              onClick={scrollLeft}
              className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-primary transition-all z-20 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={22} className="mr-0.5" />
            </button>

            <div ref={sliderRef} className="overflow-x-auto pb-6 snap-x snap-mandatory flex gap-6 w-full relative items-stretch [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {reviews.map((review, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={idx} 
                  className="min-w-[280px] md:min-w-[340px] shrink-0 bg-[#F4F4F5] p-6 rounded-[20px] snap-start relative flex flex-col gap-4"
                >
                  {/* Header Row */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-200" />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900 text-[15px] font-sans leading-tight">{review.name}</span>
                        <div className="flex items-center gap-1 bg-green-100 px-2 py-0.5 rounded-full">
                          <BadgeCheck size={12} className="text-green-600" />
                          <span className="text-[10px] font-bold text-green-700 uppercase tracking-tighter">Verified</span>
                        </div>
                      </div>
                      <span className="text-gray-500 text-[11px] font-sans font-bold uppercase tracking-wider">{review.area}</span>
                      <span className="text-gray-400 text-[11px] font-sans">{review.date}</span>
                    </div>
                  </div>
                  {/* Google G icon */}
                  <div className="w-6 h-6 bg-transparent flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>

                {/* Rating Row */}
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="flex gap-1 text-[#FBBC05]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-[#3F3F46] font-sans text-[14px] leading-relaxed">
                  {review.comment}
                </p>
              </motion.div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-center text-gray-600 hover:text-primary transition-all z-20 active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight size={22} className="ml-0.5" />
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General Maintenance");

  const handleBookNow = (service: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Riyadh Home Fix",
            "image": "https://riyadhhomefix.com/og-image.jpg",
            "description": "Premium AC Repair and Home Maintenance in Riyadh. 30-min response time. Certified technicians.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Riyadh",
              "addressCountry": "SA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 24.7136,
              "longitude": 46.6753
            },
            "url": "https://riyadhhomefix.com",
            "telephone": "+966501234567"
          })
        }}
      />

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
