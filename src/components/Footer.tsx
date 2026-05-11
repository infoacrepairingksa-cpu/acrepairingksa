"use client";

import React from "react";
import Link from "next/link";
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Clock,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const acServicesList = [
    { name: "AC Repair", href: "/ac-repair" },
    { name: "AC Installation", href: "/ac-installation" },
    { name: "AC Maintenance", href: "/ac-maintenance" },
    { name: "AC Cleaning", href: "/ac-cleaning" },
    { name: "AC Gas Refill", href: "/ac-gas-refill" },
    { name: "AC Duct Cleaning", href: "/ac-duct-cleaning" },
    { name: "AC Filter Cleaning", href: "/ac-filter-cleaning" },
    { name: "AC Coil Cleaning", href: "/ac-coil-cleaning" },
  ];

  const maintenanceList = [
    { name: "Plumbing Services", href: "/plumbing" },
    { name: "Home Maintenance", href: "/home-maintenance" },
  ];

  const ContactLink = ({ icon, text, href, ariaLabel }: { icon: React.ReactNode, text: string, href: string, ariaLabel: string }) => (
    <a 
      href={href}
      aria-label={ariaLabel}
      className="flex items-center gap-4 text-white hover:text-secondary transition-all group py-2 focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary rounded-xl outline-none"
    >
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
        {icon}
      </div>
      <span className="font-bold text-sm uppercase tracking-wider">{text}</span>
    </a>
  );

  return (
    <footer className="bg-primary pt-32 pb-12 overflow-hidden text-white border-t border-white/5">
      <div className="container mx-auto px-4">
        {/* Top Trust Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-20 mb-20 border-b border-white/10">
          {[
            { icon: <ShieldCheck size={26} />, title: "Certified Techs", sub: "In Riyadh" },
            { icon: <Clock size={26} />, title: "24/7 Available", sub: "Emergency Support" },
            { icon: <MapPin size={26} />, title: "Riyadh Fleet", sub: "Across All Areas" },
            { icon: <CheckCircle2 size={26} />, title: "Service Warranty", sub: "90-Day Guarantee" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-xl">
                {item.icon}
              </div>
              <span className="text-sm font-bold uppercase tracking-wider leading-relaxed">{item.title} <br /> <span className="text-white/60">{item.sub}</span></span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary font-bold text-3xl shadow-2xl transition-transform hover:scale-110">
                R
              </div>
              <span className="font-heading font-black text-2xl tracking-tighter text-white">
                Riyadh Home Fix
              </span>
            </Link>
            <p className="text-white font-medium leading-relaxed text-sm pr-8 opacity-90">
              Professional AC repair, plumbing, and home maintenance services across all areas of Riyadh. Our technicians reach you within 30–60 minutes for fast and reliable service.
            </p>
          </div>

          {/* Quick Links List */}
          <div className="flex flex-col gap-10">
            <h3 className="font-heading font-black text-xl text-white uppercase tracking-[0.2em] border-b border-white/10 pb-4">Quick Links</h3>
            <ul className="flex flex-col gap-5">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Locations", href: "/locations" },
                { name: "Contact Us", href: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-white hover:translate-x-2 transition-all flex items-center gap-4 text-sm font-bold uppercase tracking-wider group"
                  >
                    <ArrowRight size={14} className="text-secondary opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Group */}
          <div className="flex flex-col gap-10">
            <h3 className="font-heading font-black text-xl text-white uppercase tracking-[0.2em] border-b border-white/10 pb-4">Our Services</h3>
            <ul className="flex flex-col gap-5">
              {[...acServicesList, ...maintenanceList].slice(0, 10).map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-white/80 hover:text-white hover:translate-x-2 transition-all flex items-center gap-4 text-sm font-bold uppercase tracking-wider group"
                  >
                    <ArrowRight size={14} className="text-secondary opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/services"
                  className="text-secondary hover:text-white hover:translate-x-2 transition-all flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] group mt-4 pt-4 border-t border-white/5"
                >
                  <ArrowRight size={14} className="text-secondary group-hover:translate-x-1 transition-all" />
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-10">
            <h3 className="font-heading font-black text-xl text-white uppercase tracking-[0.2em] border-b border-white/10 pb-4">Contact Info</h3>
            <div className="flex flex-col gap-4">
              <ContactLink 
                icon={<Phone size={18} fill="currentColor" />} 
                text="+966 50 123 4568" 
                href="tel:+966501234568" 
                ariaLabel="Call Riyadh Home Fix Technical Support"
              />
              <ContactLink 
                icon={<Mail size={18} />} 
                text="info@riyadhhomefix.com" 
                href="mailto:info@riyadhhomefix.com" 
                ariaLabel="Email Riyadh Home Fix for inquiries"
              />
              
              <ContactLink 
                icon={<MapPin size={18} />} 
                text="View All Locations" 
                href="/locations" 
                ariaLabel="View all service locations in Riyadh"
              />
              <div className="flex items-center gap-4 py-4 px-6 bg-white/5 rounded-2xl border border-white/10 w-fit mt-10">
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-white font-bold text-sm uppercase tracking-wider leading-none">Riyadh Status: Online Now</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white/60 text-xs font-bold uppercase tracking-wider">
          <p>© {currentYear} Riyadh Home Fix. Trusted Home Services in Riyadh City.</p>
          <div className="flex items-center gap-10">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Technical Terms</Link>
          </div>
          <div className="flex items-center gap-4 text-secondary font-bold tracking-wider">
            <span>Riyadh's #1 Certified Maintenance Fleet</span>
            <CheckCircle2 size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
