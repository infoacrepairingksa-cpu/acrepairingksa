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
  price: string;
  process: string;
  onBookNow: (service: string) => void;
}

const ServiceCard = ({ id, title, description, icon, isPrimary, onBookNow, benefits, badge, ctaText, imageUrl, price, process }: ServiceProps & { badge?: string, ctaText: string }) => {
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
      
      <Link 
        href={id === "ac-repair" ? "/ac-repair" : id === "ac-cleaning" ? "/ac-cleaning" : id === "ac-installation" ? "/ac-installation" : id === "ac-maintenance" ? "/ac-maintenance" : id === "ac-gas-refill" ? "/ac-gas-refill" : id === "ac-duct-cleaning" ? "/ac-duct-cleaning" : id === "ac-filter-cleaning" ? "/ac-filter-cleaning" : id === "ac-coil-cleaning" ? "/ac-coil-cleaning" : id === "plumbing" ? "/plumbing" : id === "home-maintenance" ? "/home-maintenance" : "#"} 
        className="p-6 flex flex-col flex-1 hover:bg-slate-50/30 transition-colors"
      >
        <p className="text-primary/70 text-sm font-medium mb-4 leading-relaxed">{description}</p>
        
        {/* Process Preview */}
        <div className="mb-4 p-3 bg-primary/5 rounded-xl border border-primary/5">
          <span className="text-[9px] font-black uppercase tracking-widest text-primary/60 block mb-1">Process Preview</span>
          <span className="text-xs font-bold text-primary leading-tight block">{process}</span>
        </div>

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
          <a 
            href={`https://wa.me/966510942150?text=${encodeURIComponent(`Hello, I need ${title} service. Can you help?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-[#25D366]/10"
          >
            <WhatsAppIcon size={16} className="text-white" /> {ctaText}
          </a>
        </div>
      </Link>
    </motion.div>
  );
};

const Services = ({ onBookNow }: { onBookNow: (service: string) => void }) => {
  const allServices = [
    {
      id: "ac-repair",
      title: "AC Repair",
      description: "Fast fixes for sudden AC breakdowns. We diagnose compressor failures, electrical shorts, and sudden stops to restore cooling immediately. Professional AC repair services in Riyadh, Jeddah, Dammam and across Saudi Arabia.",
      icon: <Snowflake />,
      isPrimary: true,
      badge: "⭐ Popular Service",
      imageUrl: "/Ac Services/AC Repair.webp",
      price: "SAR 99",
      process: "Inspect → Diagnose → Component Fix & Calibrate",
      ctaText: "Book AC Service Today",
      benefits: ["Restores Cooling", "30-Min Arrival", "90-Day Warranty"]
    },
    {
      id: "ac-cleaning",
      title: "AC Cleaning",
      description: "Improve indoor air quality and eliminate mold. We deep wash evaporator coils and flush drain lines to remove dust, allergens, and odors. Professional AC cleaning services in Riyadh, Jeddah, Dammam and across Saudi Arabia.",
      icon: <Droplets />,
      badge: "⭐ Popular Service",
      imageUrl: "/Ac Services/AC Cleaning.webp",
      price: "SAR 149",
      process: "Disassemble → High Pressure Flush → Sanitization",
      ctaText: "Request Same-Day Service",
      benefits: ["Bacteria Free", "Odor Control", "Power Flush"]
    },
    {
      id: "ac-installation",
      title: "AC Installation",
      description: "Perfect setup for long-term reliability. We ensure precise bracket mounting, electrical load balancing, and copper pipe alignment. Professional AC installation services in Riyadh, Jeddah, Dammam and across Saudi Arabia.",
      icon: <Wind />,
      badge: "⭐ Popular Service",
      imageUrl: "/Ac Services/AC Installation.webp",
      price: "SAR 249",
      process: "Mount Plate → Pipe Alignment → Electrical & Test Run",
      ctaText: "Contact Our Technicians",
      benefits: ["Copper Kit", "Drainage Info", "Level Fit"]
    },
    {
      id: "ac-maintenance",
      title: "AC Maintenance",
      description: "Prevent sudden summer breakdowns. We conduct thorough seasonal inspections, lubricate motors, and test components for peak efficiency. Professional AC maintenance services in Riyadh, Jeddah, Dammam and across Saudi Arabia.",
      icon: <Settings />,
      imageUrl: "/Ac Services/AC Maintenance.webp",
      price: "SAR 199",
      process: "Electrical Audit → Coil Health → Calibrate Controls",
      ctaText: "Book AC Service Today",
      benefits: ["Energy Save", "Free Health Check", "Lube Parts"]
    },
    {
      id: "ac-gas-refill",
      title: "AC Gas Refill",
      description: "Boost your cooling efficiency. We leak-test copper joints and recharge optimal R410A/R22 gas levels for maximum thermal performance. Professional AC gas refill services in Riyadh, Jeddah, Dammam and across Saudi Arabia.",
      icon: <Zap />,
      imageUrl: "/Ac Services/AC Gas Refill.webp",
      price: "SAR 199",
      process: "Pressure Leak Test → Vacuum Pull → Gas Charging",
      ctaText: "Get Expert Help Now",
      benefits: ["Pure R410A Gas", "Leak Testing", "Max Chill"]
    },
    {
      id: "ac-duct-cleaning",
      title: "AC Duct Cleaning",
      description: "Improve indoor air quality by removing dust, debris, and allergens from your central AC ducts. Professional AC duct cleaning services in Riyadh, Jeddah, Dammam and across Saudi Arabia.",
      icon: <Wind />,
      imageUrl: "/Ac Services/AC Cleaning.webp",
      price: "SAR 399",
      process: "Vent Inspection → Deep Extraction → Sanitization",
      ctaText: "Book Duct Cleaning",
      benefits: ["Clean Air", "Better Airflow", "Allergy Relief"]
    },
    {
      id: "plumbing",
      title: "Plumbing",
      description: "Leak & pipe specialists ready 24/7. We fix broken pipes, blocked drains, and water heaters instantly across Saudi Arabia.",
      icon: <Droplets />,
      imageUrl: "/Ac Services/Plumbing.webp",
      price: "SAR 99",
      process: "Leak Detection → Pipe Repair → Component Swap",
      ctaText: "WhatsApp Plumber",
      benefits: ["Leak Stop", "Bathroom Fix", "Heater Tech"]
    },
    {
      id: "home-maintenance",
      title: "Home Maintenance",
      description: "Complete repair & villa support. We provide electrical, painting, and general maintenance for residential properties.",
      icon: <Settings />,
      imageUrl: "/Ac Services/Home Maintenance.webp",
      price: "SAR 149",
      process: "Full Inspection → Problem Diagnostics → Quick Repairs",
      ctaText: "WhatsApp Team",
      benefits: ["All Repairs", "Certified Team", "One Call"]
    }
  ];



  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-32">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 gap-6">

            <h2 className="text-[36px] font-heading font-black text-primary leading-tight tracking-tighter">
              Our Professional AC & Home Services in Saudi Arabia
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allServices.map((service) => (
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
                Complete AC, Plumbing & <br /> <span className="text-secondary">Home Maintenance</span> Solutions in Saudi Arabia
              </h2>
              
              <div className="flex flex-col gap-6">
                <p className="text-lg text-primary/70 font-medium leading-relaxed">
                  Beyond individual services, we deliver complete home solutions across the Kingdom—combining 
                  expert AC services, professional plumbing, and reliable home maintenance under one roof.
                </p>
                
                <p className="text-lg text-primary/70 font-medium leading-relaxed">
                  Whether it’s urgent AC repair, routine maintenance, plumbing fixes, or full home support, 
                  our team ensures everything is handled efficiently without the need to contact multiple service providers.
                </p>
                
                <p className="text-lg text-primary font-bold leading-relaxed">
                   We focus on convenience, speed, and quality—making us the go-to choice for homeowners 
                   and businesses looking for hassle-free maintenance services in KSA.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
                <a 
                  href="tel:+966 51 094 2150" 
                  className="w-full sm:w-auto bg-secondary text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20 flex items-center justify-center gap-4 group"
                >
                  <Phone size={20} fill="currentColor" className="group-hover:rotate-12 transition-transform" /> 
                  Call Now
                </a>
              </div>
            </div>

            {/* Right WhatsApp CTA Column */}
            <div className="w-full lg:w-[450px] bg-white border border-gray-100 p-8 md:p-10 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(31,32,97,0.1)] flex flex-col items-center justify-center gap-8 text-center">
              <div className="w-20 h-20 bg-[#25D366]/10 rounded-3xl flex items-center justify-center">
                <WhatsAppIcon size={40} className="text-[#25D366]" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-primary leading-tight font-heading mb-3">Book in 30 Seconds on WhatsApp</h3>
                <p className="text-sm font-bold text-primary/60">👉 Technician contacts you within 5 minutes</p>
              </div>
              <div className="w-full flex flex-col gap-4">
                {["AC Repair", "AC Cleaning", "AC Gas Refill", "AC Maintenance", "Plumbing"].map((svc) => (
                  <a
                    key={svc}
                    href={`https://wa.me/966510942150?text=${encodeURIComponent(`Hello, I need ${svc} service. Can you help?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-[#25D366]/10"
                  >
                    <WhatsAppIcon size={16} className="text-white" /> Book {svc}
                  </a>
                ))}
              </div>
            </div>
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
          <a href="https://wa.me/966510942150?text=Hello,%20I%20need%20home%20maintenance%20and%20AC%20repair%20services.%20Can%20you%20help?" className="w-full md:w-auto px-12 py-5 bg-[#25D366] text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-[#1DA851] transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-4">
             <WhatsAppIcon size={18} className="text-white" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
