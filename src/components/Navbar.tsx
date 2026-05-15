"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ShieldCheck, ChevronDown, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const Navbar = ({ onBookNow }: { onBookNow?: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const locations = [
    { name: "Al Olaya", href: "/locations/al-olaya" },
    { name: "Al Malaz", href: "/locations/al-malaz" },
    { name: "Al Yasmin", href: "/locations/al-yasmin" },
    { name: "Al Narjis", href: "/locations/al-narjis" },
    { name: "Al Sahafa", href: "/locations/al-sahafa" },
    { name: "Al Malqa", href: "/locations/al-malqa" },
    { name: "Al Aqiq", href: "/locations/al-aqiq" },
    { name: "Hittin", href: "/locations/hittin" },
    { name: "Al Nakheel", href: "/locations/al-nakheel" },
    { name: "Al Rawdah", href: "/locations/al-rawdah" },
    { name: "Al Sulaymaniyah", href: "/locations/al-sulaymaniyah" },
    { name: "Al Rabwah", href: "/locations/al-rabwah" },
    { name: "Al Munsiyah", href: "/locations/al-munsiyah" },
    { name: "Al Qadisiyah", href: "/locations/al-qadisiyah" },
    { name: "Al Shifa", href: "/locations/al-shifa" },
  ];

  const [locationsOpen, setLocationsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "AC Repair", href: "/ac-repair" },
    { name: "AC Cleaning", href: "/ac-cleaning" },
    { name: "AC Installation", href: "/ac-installation" },
    { name: "AC Maintenance", href: "/ac-maintenance" },
    { name: "AC Gas Refill", href: "/ac-gas-refill" },
    { name: "AC Duct Cleaning", href: "/ac-duct-cleaning" },
    { name: "AC Filter Cleaning", href: "/ac-filter-cleaning" },
    { name: "AC Coil Cleaning", href: "/ac-coil-cleaning" },
    { name: "Plumbing", href: "/plumbing" },
    { name: "Home Maintenance", href: "/home-maintenance" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white">

      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4 transition-all">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="group">
            <Logo />
          </Link>

          {/* Desktop Links - Conversion Oriented */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-base font-bold tracking-tight text-primary hover:text-secondary transition-all">Home</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative py-4 group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link 
                href="/services"
                className={cn(
                  "flex items-center gap-1.5 text-base font-bold tracking-tight transition-all",
                  servicesOpen ? "text-secondary" : "text-primary hover:text-secondary"
                )}
              >
                Services <ChevronDown size={14} className={cn("transition-transform duration-300", servicesOpen && "rotate-180")} />
              </Link>
              
              <div className={cn(
                "absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-[0_40px_100px_-20px_rgba(31,32,97,0.15)] rounded-[32px] p-8 w-[500px] grid grid-cols-2 gap-x-8 gap-y-4 transition-all duration-300 z-[100] origin-top",
                servicesOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible translate-y-4 scale-95"
              )}>
                {services.map((svc) => (
                  <Link 
                    key={svc.name} 
                    href={svc.href}
                    className="group/svc text-sm font-bold text-primary/70 hover:text-secondary transition-all flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-primary/20 group-hover/svc:bg-secondary/10 group-hover/svc:text-secondary transition-all">
                      <ShieldCheck size={14} />
                    </div>
                    {svc.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations Dropdown */}
            <div 
              className="relative py-4 group"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <Link 
                href="/locations"
                className={cn(
                  "flex items-center gap-1.5 text-base font-bold tracking-tight transition-all",
                  locationsOpen ? "text-secondary" : "text-primary hover:text-secondary"
                )}
              >
                Locations <ChevronDown size={14} className={cn("transition-transform duration-300", locationsOpen && "rotate-180")} />
              </Link>
              
              <div className={cn(
                "absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-[0_40px_100px_-20px_rgba(31,32,97,0.15)] rounded-[32px] p-8 w-[680px] grid grid-cols-3 gap-x-10 gap-y-6 transition-all duration-300 z-[100] origin-top",
                locationsOpen ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible translate-y-4 scale-95"
              )}>
                {locations.map((loc) => (
                  <Link 
                    key={loc.name} 
                    href={loc.href}
                    className="group/loc text-sm font-bold text-primary/70 hover:text-secondary transition-all flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-primary/20 group-hover/loc:bg-secondary/10 group-hover/loc:text-secondary transition-all">
                      <MapPin size={14} />
                    </div>
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="text-base font-bold tracking-tight text-primary hover:text-secondary transition-all">About Us</Link>
          </div>

          {/* Action Buttons - Dominant CTA */}
          <div className="hidden md:flex items-center gap-5">

              <button
                onClick={() => onBookNow ? onBookNow() : window.open('https://wa.me/966501234567', '_blank')}
                className="bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#25D366]/20 hover:-translate-y-1 active:scale-95 flex items-center gap-3"
              >
              <WhatsAppIcon size={18} className="text-white" />
              WhatsApp Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 text-primary focus:ring-2 focus:ring-secondary rounded-lg outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 overflow-y-auto",
            mobileMenuOpen ? "max-h-[90vh] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col p-6 gap-2">
            <Link href="/" className="text-sm font-black uppercase tracking-widest text-primary p-4 bg-slate-50 rounded-xl" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            
            {/* Mobile Services Accordion */}
            <div className="flex flex-col">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between text-sm font-black uppercase tracking-widest text-primary p-4 text-left"
              >
                Services <ChevronDown size={18} className={cn("transition-transform", servicesOpen && "rotate-180")} />
              </button>
              
              <div className={cn(
                "flex flex-col gap-1 pl-4 overflow-hidden transition-all duration-300",
                servicesOpen ? "max-h-[800px] opacity-100 py-2" : "max-h-0 opacity-0"
              )}>
                {services.map((svc) => (
                  <Link 
                    key={svc.name} 
                    href={svc.href}
                    className="text-xs font-bold text-primary/60 p-3 hover:text-secondary flex items-center gap-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ShieldCheck size={14} className="text-secondary/40" />
                    {svc.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Locations Accordion */}
            <div className="flex flex-col">
              <button 
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="flex items-center justify-between text-sm font-black uppercase tracking-widest text-primary p-4 text-left"
              >
                Locations <ChevronDown size={18} className={cn("transition-transform", locationsOpen && "rotate-180")} />
              </button>
              
              <div className={cn(
                "flex flex-col gap-1 pl-4 overflow-hidden transition-all duration-300",
                locationsOpen ? "max-h-[800px] opacity-100 py-2" : "max-h-0 opacity-0"
              )}>
                {locations.map((loc) => (
                  <Link 
                    key={loc.name} 
                    href={loc.href}
                    className="text-xs font-bold text-primary/60 p-3 hover:text-secondary flex items-center gap-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <MapPin size={14} className="text-secondary/40" />
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="text-sm font-black uppercase tracking-widest text-primary p-4" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

            <div className="flex flex-col gap-4 mt-6">
              <a
                href="tel:+966501234567"
                className="flex items-center justify-center gap-4 bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20"
              >
                <Phone size={18} fill="currentColor" /> Call +966 50 123 4567
              </a>
              <button
                onClick={() => {
                  if (onBookNow) onBookNow();
                  else window.open('https://wa.me/966501234567', '_blank');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-4 bg-[#25D366] text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-[#25D366]/20"
              >
                <WhatsAppIcon size={18} className="text-white" /> WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
