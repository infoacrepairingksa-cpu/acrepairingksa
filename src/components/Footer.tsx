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
import { Logo } from "@/components/Logo";

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
            { icon: <ShieldCheck size={26} />, title: "Certified Techs", sub: "In KSA" },
            { icon: <Clock size={26} />, title: "24/7 Available", sub: "Emergency Support" },
            { icon: <MapPin size={26} />, title: "KSA Fleet", sub: "Across Major Cities" },
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
            <Link href="/" className="group">
              <Logo light />
            </Link>
            <p className="text-white font-medium leading-relaxed text-sm pr-8 opacity-90">
              Professional AC repair, plumbing, and home maintenance services across all major cities of Saudi Arabia. Our technicians reach you within 30–60 minutes for fast and reliable service.
            </p>
          </div>

          {/* Services Group */}
          <div className="flex flex-col gap-10">
            <h3 className="font-heading font-black text-xl text-white uppercase tracking-[0.2em] border-b border-white/10 pb-4">Our Services</h3>
            <ul className="flex flex-col gap-5">
              {[
                { name: "AC Repair", href: "/ac-repair" },
                { name: "AC Cleaning", href: "/ac-cleaning" },
                { name: "AC Installation", href: "/ac-installation" },
                { name: "AC Maintenance", href: "/ac-maintenance" },
                { name: "AC Gas Refill", href: "/ac-gas-refill" },
                { name: "Plumbing Services", href: "/plumbing" },
                { name: "Home Maintenance", href: "/home-maintenance" },
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

          {/* Popular Service Areas - KSA Cities */}
          <div className="flex flex-col gap-10">
            <h3 className="font-heading font-black text-xl text-white uppercase tracking-[0.2em] border-b border-white/10 pb-4">Popular Service Areas</h3>
            <ul className="flex flex-col gap-5">
              {[
                { name: "Riyadh", href: "/locations/riyadh" },
                { name: "Jeddah", href: "/locations/jeddah" },
                { name: "Dammam", href: "/locations/dammam" },
                { name: "Al Khobar", href: "/locations/al-khobar" },
                { name: "Makkah", href: "/locations/makkah" },
                { name: "Madinah", href: "/locations/madinah" },
                { name: "Taif", href: "/locations/taif" },
                { name: "Jubail", href: "/locations/jubail" },
                { name: "Yanbu", href: "/locations/yanbu" },
                { name: "Abha", href: "/locations/abha" },
                { name: "Najran", href: "/locations/najran" },
                { name: "Tabuk", href: "/locations/tabuk" },
                { name: "Jazan", href: "/locations/jazan" },
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

          {/* Contact Info & Hours */}
          <div className="flex flex-col gap-10">
            <h3 className="font-heading font-black text-xl text-white uppercase tracking-[0.2em] border-b border-white/10 pb-4">Contact & Hours</h3>
            <div className="flex flex-col gap-4">
              <ContactLink 
                icon={<Phone size={18} fill="currentColor" />} 
                text="+966 51 094 2150" 
                href="tel:+966 51 094 2150" 
                ariaLabel="Call KSA Technical Support"
              />
              <ContactLink 
                icon={<MessageSquare size={18} fill="currentColor" />} 
                text="WhatsApp Us" 
                href="https://wa.me/966510942150?text=Hello" 
                ariaLabel="WhatsApp Technical Support"
              />
              <ContactLink 
                icon={<Mail size={18} />} 
                text="info@acrepairingksa.com" 
                href="mailto:info@acrepairingksa.com" 
                ariaLabel="Email AC Repairing KSA"
              />
              {/* Physical Address — Local SEO Trust Signal */}
              <div className="flex items-start gap-4 py-2">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <address className="not-italic text-sm font-bold text-white/80 leading-relaxed">
                  <span className="block text-white">AC Repairing KSA</span>
                  <span className="block">Saudi Arabia (KSA)</span>
                  <span className="block text-white/50 text-xs mt-1">Serving All Major KSA Cities</span>
                </address>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                <span className="text-white/60 text-xs font-black uppercase tracking-widest">Business Hours</span>
                <div className="flex flex-col gap-1 text-sm font-bold">
                  <span className="text-white">Saturday – Thursday: <span className="text-secondary">8:00 AM – 10:00 PM</span></span>
                  <span className="text-white">Friday: <span className="text-secondary">2:00 PM – 10:00 PM</span></span>
                  <span className="text-secondary font-black mt-1">🚨 24/7 Emergency Service Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed — Local SEO Signal */}
        <div className="mb-16 rounded-3xl overflow-hidden border border-white/10 h-56">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463412.31272916!2d46.54232857999999!3d24.688287899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1717000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AC Repairing KSA — Service Area Map"
          />
        </div>

        <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white/60 text-xs font-bold uppercase tracking-wider">
          <p>© {currentYear} AC Repairing KSA. Trusted HVAC & Home Services in Saudi Arabia.</p>
          <div className="flex items-center gap-10">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Technical Terms</Link>
          </div>
          <div className="flex items-center gap-4 text-secondary font-bold tracking-wider">
            <span>KSA's #1 Certified HVAC Fleet</span>
            <CheckCircle2 size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
