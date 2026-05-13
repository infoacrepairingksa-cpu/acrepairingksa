"use client";

import React from "react";
import Image from "next/image";
import { 
  Snowflake, 
  Wrench, 
  Droplets, 
  Hammer, 
  Zap, 
  Wind,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Settings,
  MapPin
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isPrimary?: boolean;
  benefits?: string[];
  imageUrl: string;
  onBookNow: (service: string) => void;
}

const ServiceCard = ({ id, title, description, icon, isPrimary, onBookNow, benefits, badge, ctaText, imageUrl }: ServiceProps & { badge?: string, ctaText: string }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative group bg-white border border-gray-100 rounded-[32px] overflow-hidden transition-all duration-300 hover:shadow-[0_50px_100px_-20px_rgba(31,32,97,0.18)] hover:border-secondary flex flex-col justify-between h-full shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]"
    >
      {badge && (
        <div className="absolute top-6 right-6 bg-secondary text-white text-sm font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 shadow-lg shadow-secondary/20">
          {badge}
        </div>
      )}
      
      <Link href={id === "ac-repair" ? "/ac-repair" : id === "ac-cleaning" ? "/ac-cleaning" : id === "ac-installation" ? "/ac-installation" : id === "ac-maintenance" ? "/ac-maintenance" : id === "ac-gas-refill" ? "/ac-gas-refill" : id === "ac-duct-cleaning" ? "/ac-duct-cleaning" : id === "ac-filter-cleaning" ? "/ac-filter-cleaning" : id === "ac-coil-cleaning" ? "/ac-coil-cleaning" : id === "plumbing" ? "/plumbing" : id === "home-maintenance" ? "/home-maintenance" : "#"} className="block h-48 w-full overflow-hidden relative">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-700" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="absolute bottom-4 left-6 text-white flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, { size: 20 }) : icon}
          </div>
          <h3 className="text-xl font-heading font-black leading-tight tracking-tight">{title}</h3>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-1">
        <p className="text-primary/70 text-sm font-medium mb-4 leading-relaxed">{description}</p>
        
        {/* Trust Badges pricing/urgency */}
        <div className="flex flex-col gap-2 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
          <div className="flex items-center gap-2 text-xs font-bold text-primary">
            <span className="text-amber-500 text-sm">⭐</span> {isPrimary ? "Most Booked Service" : "Highly Rated"}
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-primary">
            <span className="text-green-500 text-sm">✅</span> Same Day Available
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-primary">
            <span className="text-blue-500 text-sm">⚡</span> 24/7 Emergency Service
          </div>
        </div>
        
        {/* Skimmable Benefits - Less text heavy */}
        <div className="flex flex-col gap-3 mb-8">
          {benefits?.slice(0, 3).map((benefit, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 size={16} className="text-secondary shrink-0" />
              <span className="text-sm font-bold tracking-wider text-primary leading-none opacity-90">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 mt-auto">
          <button 
            onClick={() => onBookNow(title)}
            className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-[#25D366]/10"
          >
            <WhatsAppIcon size={16} className="text-white" /> {ctaText}
          </button>
          <Link 
            href={id === "ac-repair" ? "/ac-repair" : id === "ac-cleaning" ? "/ac-cleaning" : id === "ac-installation" ? "/ac-installation" : id === "ac-maintenance" ? "/ac-maintenance" : id === "ac-gas-refill" ? "/ac-gas-refill" : id === "ac-duct-cleaning" ? "/ac-duct-cleaning" : id === "ac-filter-cleaning" ? "/ac-filter-cleaning" : id === "ac-coil-cleaning" ? "/ac-coil-cleaning" : id === "plumbing" ? "/plumbing" : id === "home-maintenance" ? "/home-maintenance" : "#"}
            className="w-full bg-white border border-gray-200 hover:border-secondary hover:text-secondary text-primary/70 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            View Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Services = ({ onBookNow }: { onBookNow: (service: string) => void }) => {
  const acServices = [
    {
      id: "ac-repair",
      title: "AC Repair",
      description: "Fast fix for cooling issues.",
      icon: <Snowflake />,
      isPrimary: true,
      badge: "⭐ Popular Service",
      imageUrl: "/Ac Services/AC Repair.png",
      ctaText: "Chat for Repair",
      benefits: ["Restores Cooling", "30-Min Arrival", "90-Day Warranty"]
    },
    {
      id: "ac-cleaning",
      title: "AC Cleaning",
      description: "Deep chemical sanitization.",
      icon: <Droplets />,
      badge: "⭐ Popular Service",
      imageUrl: "/Ac Services/AC Cleaning.png",
      ctaText: "Chat for Cleaning",
      benefits: ["Bacteria Free", "Odor Control", "Power Flush"]
    },
    {
      id: "ac-gas-refill",
      title: "AC Gas Refill",
      description: "Original refrigerant top-up.",
      icon: <Zap />,
      imageUrl: "/Ac Services/AC Gas Refill.png",
      ctaText: "Check Gas Pricing",
      benefits: ["Pure R410A Gas", "Leak Testing", "Max Chill"]
    },
    {
      id: "ac-installation",
      title: "AC Installation",
      description: "Split & duct mounting.",
      icon: <Wind />,
      badge: "⭐ Popular Service",
      imageUrl: "/Ac Services/AC Installation.png",
      ctaText: "Chat for Install",
      benefits: ["Copper Kit", "Drainage Info", "Level Fit"]
    },
    {
      id: "ac-maintenance",
      title: "AC Maintenance",
      description: "Filter & vital checks.",
      icon: <Settings />,
      imageUrl: "/Ac Services/AC Maintenance.png",
      ctaText: "Plan Maintenance",
      benefits: ["Energy Save", "Free Health Check", "Lube Parts"]
    },
    {
      id: "ac-filter-cleaning",
      title: "AC Filter Cleaning",
      description: "Pure air flow restoration.",
      icon: <Wind />,
      imageUrl: "/Ac Services/AC Filter Cleaning.png",
      ctaText: "Clean Filters",
      benefits: ["Dust Removal", "Clean Air", "Better Flow"]
    },
    {
      id: "ac-duct-cleaning",
      title: "AC Duct Cleaning",
      description: "Deep ventilation scrubbing.",
      icon: <Wind />,
      imageUrl: "/Ac Services/AC Duct Cleaning.png",
      ctaText: "WhatsApp for Ducts",
      benefits: ["Mold Control", "Odor Removal", "Safe Living"]
    },
    {
      id: "ac-coil-cleaning",
      title: "AC Coil Cleaning",
      description: "Max thermal efficiency fix.",
      icon: <Snowflake />,
      imageUrl: "/Ac Services/AC Coil Cleaning.png",
      ctaText: "Check Coils",
      benefits: ["Scale Removal", "Faster Cooling", "Low Bills"]
    }
  ];

  const additionalServices = [
    {
      id: "plumbing-fix",
      title: "Plumbing",
      description: "Leak & pipe specialists ready 24/7.",
      icon: <Droplets />,
      imageUrl: "/Ac Services/Plumbing.png",
      ctaText: "WhatsApp Plumber",
      benefits: ["Leak Stop", "Bathroom Fix", "Heater Tech"]
    },
    {
      id: "home-maintenance",
      title: "Home Maintenance",
      description: "Complete repair & villa support.",
      icon: <Settings />,
      imageUrl: "/Ac Services/Home Maintenance.png",
      ctaText: "WhatsApp Team",
      benefits: ["All Repairs", "Certified Team", "One Call"]
    }
  ];



  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* AC Services Section */}
        <div className="mb-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 gap-6">
            <span className="bg-secondary/10 text-secondary font-bold tracking-widest uppercase text-sm px-6 py-2 rounded-full inline-block">AC & Home Precision</span>
            <h2 className="text-[36px] font-heading font-black text-primary leading-tight tracking-tighter">
              Our Comprehensive <span className="text-secondary">Services</span> in Riyadh
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {acServices.map((service) => (
              <ServiceCard key={service.id} {...service} onBookNow={onBookNow} />
            ))}
          </div>
        </div>

        {/* Additional Home Services Section - Enhanced Design for 2 Cards */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto mb-16 text-center flex flex-col items-center gap-4">
            <span className="bg-primary/5 text-primary/80 font-bold tracking-widest uppercase text-sm px-6 py-2 rounded-full inline-block">Popular Add-ons</span>
            <h2 className="text-3xl font-heading font-black text-primary leading-tight tracking-tighter">
              Specialized <span className="text-secondary">Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {additionalServices.map((service) => (
              <ServiceCard key={service.id} {...service} onBookNow={onBookNow} />
            ))}
          </div>
        </div>
        {/* Unified Solutions Overview Section */}
        <div className="mb-32 py-24 px-8 md:px-16 bg-white border border-gray-100 rounded-[64px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-full h-full bg-primary/[0.01] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
            {/* Left Content Column */}
            <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
              <h2 className="text-[32px] md:text-[42px] font-heading font-black text-primary leading-[1.1] tracking-tighter">
                Complete AC, Plumbing & <br /> <span className="text-secondary">Home Maintenance</span> Solutions in Riyadh
              </h2>
              
              <div className="flex flex-col gap-6">
                <p className="text-lg text-primary/70 font-medium leading-relaxed">
                  Beyond individual services, we deliver complete home solutions across Riyadh—combining 
                  expert AC services, professional plumbing, and reliable home maintenance under one roof.
                </p>
                
                <p className="text-lg text-primary/70 font-medium leading-relaxed">
                  Whether it’s urgent AC repair, routine maintenance, plumbing fixes, or full home support, 
                  our team ensures everything is handled efficiently without the need to contact multiple service providers.
                </p>
                
                <p className="text-lg text-primary font-bold leading-relaxed">
                   We focus on convenience, speed, and quality—making us the go-to choice for homeowners 
                   and businesses looking for hassle-free maintenance services in Riyadh.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                <a 
                  href="tel:+966501234567" 
                  className="w-full sm:w-auto bg-secondary text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20 flex items-center justify-center gap-4 group"
                >
                  <Phone size={20} fill="currentColor" className="group-hover:rotate-12 transition-transform" /> 
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="w-full lg:w-[450px] bg-white border border-gray-100 p-8 md:p-10 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(31,32,97,0.1)]">
              <div className="mb-8 text-center">
                 <h3 className="text-2xl font-black text-primary leading-tight font-heading">Book AC Service in 30 Seconds</h3>
                 <p className="text-sm font-bold text-[#25D366] mt-2 flex items-center justify-center gap-2">👉 Our technician will contact you within 5 minutes</p>
              </div>
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); onBookNow("Contact Form Submit"); }}>
                <div className="flex flex-col gap-2">
                  <input 
                    type="text" 
                    placeholder="Full name" 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all text-primary font-medium"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all text-primary font-medium"
                  />
                </div>
                <div className="flex flex-col gap-2">
                   <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all text-primary font-medium appearance-none">
                     <option>Choose Service</option>
                     <option>AC Repair</option>
                     <option>AC Cleaning</option>
                     <option>AC Gas Refill</option>
                     <option>AC Installation</option>
                     <option>AC Maintenance</option>
                     <option>Plumbing</option>
                     <option>Home Maintenance</option>
                   </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-5 rounded-xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg group mt-2"
                >
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  Call Me Back Fast
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Service Areas Section */}
        <div id="locations" className="pt-32 border-t border-gray-100 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-secondary/20" />
          
          <div className="max-w-4xl mx-auto mb-20 text-center flex flex-col items-center gap-6">
            <span className="bg-primary/5 text-primary/80 font-bold tracking-widest uppercase text-sm px-6 py-2 rounded-full inline-block">Riyadh Wide Coverage</span>
            <h2 className="text-[36px] font-heading font-black text-primary leading-tight tracking-tighter">
              AC Repair Services in <span className="text-secondary text-[36px]">Riyadh City</span>
            </h2>
            <p className="text-lg text-primary font-bold leading-relaxed max-w-2xl">
              We serve all major areas of Riyadh with fast response
            </p>
            <p className="text-lg text-primary/70 font-medium leading-relaxed max-w-2xl">
              We provide fast, reliable, and professional AC repair, cleaning, and maintenance services 
              all over Riyadh with guaranteed same-day availability for your emergency needs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto mb-16 px-4">
            {[
              { name: "Al Olaya", path: "/locations/al-olaya" },
              { name: "Al Malaz", path: "/locations/al-malaz" },
              { name: "Al Yasmin", path: "/locations/al-yasmin" },
              { name: "Al Narjis", path: "/locations/al-narjis" },
              { name: "Al Sahafa", path: "/locations/al-sahafa" },
              { name: "Al Malqa", path: "/locations/al-malqa" },
              { name: "Al Aqiq", path: "/locations/al-aqiq" },
              { name: "Hittin", path: "/locations/hittin" },
              { name: "Al Nakheel", path: "/locations/al-nakheel" },
              { name: "Al Rawdah", path: "/locations/al-rawdah" },
              { name: "Al Sulaymaniyah", path: "/locations/al-sulaymaniyah" },
              { name: "Al Rabwah", path: "/locations/al-rabwah" },
              { name: "Al Munsiyah", path: "/locations/al-munsiyah" },
              { name: "Al Qadisiyah", path: "/locations/al-qadisiyah" },
              { name: "Al Shifa", path: "/locations/al-shifa" }
            ].map((area) => (
              <Link 
                href={area.path} 
                key={area.name} 
                className="group p-5 bg-white border border-gray-100 rounded-2xl flex items-center gap-4 transition-all hover:border-secondary hover:shadow-xl hover:shadow-primary/5 cursor-pointer active:scale-95 text-left"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm">
                   <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] font-black uppercase tracking-wider text-primary leading-tight group-hover:text-secondary">{area.name}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center gap-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary/60 italic">And all nearby areas in Riyadh.</p>
            <button 
              onClick={() => onBookNow("Service Area CTA")}
              className="px-12 py-5 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-2xl shadow-[#25D366]/30 flex items-center gap-4 group"
            >
              <WhatsAppIcon size={20} className="group-hover:scale-110 transition-transform text-white" /> WhatsApp Us For Your Area
            </button>
          </div>
        </div>

        {/* Bottom Contact Strip */}
        <div className="mt-24 p-8 border border-dashed border-primary/20 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 bg-primary/5">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-xl">
              <Phone size={28} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold uppercase tracking-wider text-primary/70">Immediate Assistance</span>
              <span className="text-2xl font-bold text-primary tracking-tight leading-none">Need an emergency fix today?</span>
            </div>
          </div>
          <a href="https://wa.me/966501234567" className="w-full md:w-auto px-12 py-5 bg-[#25D366] text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-[#1DA851] transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-4">
             <WhatsAppIcon size={18} className="text-white" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
