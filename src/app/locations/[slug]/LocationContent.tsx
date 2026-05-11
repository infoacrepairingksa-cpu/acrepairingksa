"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Snowflake, 
  Droplets, 
  Zap, 
  Wind, 
  Settings, 
  CheckCircle2, 
  Star,
  MessageSquare,
  Sparkles,
  ArrowRight,
  UserCheck,
  Search,
  Award
} from "lucide-react";
import FloatingActions from "@/components/FloatingActions";
import { LocationData } from "@/data/locations";

export default function LocationContent({ data }: { data: LocationData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    if (data) {
      setSelectedService(`${data.name} General Service`);
    }
  }, [data]);

  const handleBookNow = (service: string) => {
    setSelectedService(`${service} in ${data.name}`);
    setIsModalOpen(true);
  };

  const services = [
    { title: "AC Repair", desc: `Professional split and central cooling repair for villas in ${data.name}.`, icon: <Snowflake />, badge: "Urgent", imageUrl: "https://images.pexels.com/photos/4421160/pexels-photo-4421160.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "AC Cleaning", desc: `Deep chemical pressure washing to restore airflow in ${data.name}.`, icon: <Droplets />, badge: "Popular", imageUrl: "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "AC Gas Refill", desc: "Original R410A refrigerant refill with safe leak detection.", icon: <Zap />, imageUrl: "https://images.pexels.com/photos/5691630/pexels-photo-5691630.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "AC Installation", desc: "Expert mounting and configuration of new AC systems.", icon: <Wind />, imageUrl: "https://images.pexels.com/photos/4421110/pexels-photo-4421110.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "AC Maintenance", desc: "Seasonal health check and part optimization for peak efficiency.", icon: <Settings />, imageUrl: "https://images.pexels.com/photos/5691657/pexels-photo-5691657.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Plumbing Support", desc: "Fast fix for leaks, pipes, and master water heater work.", icon: <Wrench />, imageUrl: "https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar onBookNow={() => handleBookNow(`${data.name} Navbar Inquiry`)} />

      {/* Elegant Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#F4F8FB] flex flex-col items-center justify-center min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="w-[800px] h-[800px] bg-gradient-to-r from-secondary/5 to-transparent rounded-full blur-[120px] absolute -top-40 -left-40" />
          <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto flex flex-col items-center gap-6"
          >
            <span className="bg-white text-secondary border border-secondary/10 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
              Certified District Maintenance
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-primary leading-[1.05] tracking-tight">
              Expert <span className="text-secondary">Repairs</span> <br /> in {data.name}
            </h1>
            <p className="text-base md:text-xl text-primary/70 max-w-2xl font-medium leading-relaxed">
              {data.heroDesc} Dedicated technical fleet stationed in {data.name} for 30-minute arrival and guaranteed fixed rates.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
              <a href="tel:+966501234567" className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-secondary transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-3">
                <Phone size={20} fill="currentColor" /> Call Specialist
              </a>
              <button 
                onClick={() => handleBookNow(`${data.name} Hero`)}
                className="w-full sm:w-auto bg-white border-2 border-primary/5 text-primary px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-secondary hover:text-secondary transition-all shadow-sm flex items-center justify-center gap-3"
              >
                Request Call Back
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20 flex flex-col items-center gap-4">
            <span className="text-secondary font-black tracking-widest uppercase text-xs">District Coverage</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">
              Our Services in <span className="text-secondary">{data.name}</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-white border border-gray-100 rounded-[32px] overflow-hidden hover:border-secondary hover:shadow-2xl transition-all flex flex-col"
              >
                <div className="h-56 relative overflow-hidden">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-4 text-white">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                      {React.cloneElement(service.icon as React.ReactElement<any>, { size: 20 })}
                    </div>
                    <h3 className="text-2xl font-heading font-black tracking-tight">{service.title}</h3>
                  </div>
                  {service.badge && (
                    <div className="absolute top-6 right-6 bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                      {service.badge}
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-primary/70 font-medium text-sm leading-relaxed mb-8">{service.desc}</p>
                  <div className="mt-auto flex flex-col gap-3">
                    <button 
                      onClick={() => handleBookNow(service.title)}
                      className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/10"
                    >
                      <WhatsAppIcon size={18} /> Book via WhatsApp
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About District Section */}
      <section className="py-24 bg-[#FAFAFA] overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 relative">
              <div className="rounded-[48px] overflow-hidden shadow-2xl border-8 border-white">
                <img src={data.aboutImage} alt={`Services in ${data.name}`} className="w-full h-[550px] object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[32px] shadow-2xl border border-gray-100 hidden md:flex items-center gap-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                  <UserCheck size={32} />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-primary leading-none">250+</span>
                  <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Techs in {data.name}</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-8">
              <span className="text-secondary font-black tracking-widest uppercase text-xs">Why Choose Us</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-primary leading-tight tracking-tight">
                Trusted Home Maintenance <br /> across <span className="text-secondary">{data.name}</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-primary/70 font-medium leading-relaxed">
                  {data.aboutText1}
                </p>
                <div className="bg-white p-8 rounded-3xl border border-primary/5 shadow-sm">
                  <p className="text-lg text-primary font-bold leading-relaxed">
                    {data.aboutText2}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#25D366]" size={20} />
                  <span className="text-sm font-bold text-primary/80 uppercase tracking-wider">Fixed Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#25D366]" size={20} />
                  <span className="text-sm font-bold text-primary/80 uppercase tracking-wider">Same Day Fix</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20 flex flex-col items-center gap-4">
             <span className="bg-primary/5 text-primary/80 font-bold tracking-widest uppercase text-xs px-6 py-2 rounded-full">3 Easy Steps</span>
             <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">How it Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Instant Booking", desc: "Contact us via WhatsApp or Call. Our team responds in seconds.", icon: <MessageSquare /> },
              { step: "02", title: "Rapid Arrival", desc: `Our technician reaches your ${data.name} location within 60 minutes.`, icon: <MapPin /> },
              { step: "03", title: "Certified Fix", desc: "Expert repair with original parts and 90-day warranty.", icon: <Award /> }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-6 group">
                <div className="w-24 h-24 rounded-[32px] bg-[#F8FAFC] flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all shadow-sm relative">
                  <span className="absolute -top-3 -right-3 text-4xl font-black text-primary/5 group-hover:text-white/20 transition-all">{item.step}</span>
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl font-heading font-black tracking-tight">{item.title}</h3>
                <p className="text-primary/60 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-[#FAFAFA] border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 flex flex-col items-center gap-4">
             <h2 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">FAQs for {data.name}</h2>
             <p className="text-primary/60 font-medium">Common questions from your neighbors</p>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <h3 className="text-lg font-heading font-black text-primary mb-4 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0 text-sm">Q</span>
                  {faq.q}
                </h3>
                <p className="text-primary/70 font-medium text-base leading-relaxed pl-12">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-primary rounded-[56px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none -rotate-12">
              <MapPin size={300} />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-10">
              <h2 className="text-4xl md:text-6xl font-heading font-black leading-tight tracking-tight">
                Ready for <span className="text-secondary uppercase">Elite</span> <br /> Service in {data.name}?
              </h2>
              <p className="text-lg md:text-xl font-medium opacity-80 max-w-2xl leading-relaxed">
                Join 1,000+ satisfied residents in {data.name}. We are online 24/7 for all your maintenance needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-xl">
                <a href="tel:+966501234567" className="w-full sm:flex-1 bg-white text-primary py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
                  <Phone size={20} fill="currentColor" /> Call Now
                </a>
                <a href="https://wa.me/966501234567" className="w-full sm:flex-1 bg-[#25D366] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#1DA851] transition-all shadow-xl flex items-center justify-center gap-3">
                  <WhatsAppIcon size={20} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName={selectedService} />
    </main>
  );
}
