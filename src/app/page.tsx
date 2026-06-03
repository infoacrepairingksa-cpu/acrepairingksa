"use client";

import React from "react";
import { 
  ShieldCheck, Clock, MapPin, Star, CheckCircle2, 
  CalendarCheck2, Award, Phone, Settings, AlertTriangle,
  Snowflake, Droplets, PenTool, BatteryCharging, Factory, FileQuestion
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Schema, { 
  generateWebSiteSchema, 
  generateBreadcrumbSchema, 
  generateOrganizationSchema, 
  generateLocalBusinessSchema 
} from "@/components/Schema";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

// 3. TRUST BAR
const TrustBar = () => {
  const points = [
    { text: "Same Day Service", icon: <Clock size={16} /> },
    { text: "Licensed Technicians", icon: <ShieldCheck size={16} /> },
    { text: "Emergency Support", icon: <AlertTriangle size={16} /> },
    { text: "All AC Brands", icon: <Snowflake size={16} /> },
    { text: "Residential & Commercial", icon: <Factory size={16} /> },
  ];
  return (
    <div className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm font-bold tracking-wide">
        {points.map((p, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-secondary">{p.icon}</span>
            {p.text}
          </div>
        ))}
      </div>
    </div>
  );
};

// 5. WHY CHOOSE US
const WhyChooseUs = () => {
  const points = [
    { title: "Experienced technicians", desc: "Our team consists of certified HVAC professionals with years of Riyadh-specific experience." },
    { title: "Fast response times", desc: "We guarantee a 30-minute arrival across all Riyadh districts for emergency AC repairs." },
    { title: "Genuine spare parts", desc: "We only use original compressor and electrical components for lasting repairs." },
    { title: "Transparent communication", desc: "Clear, upfront pricing with no hidden fees or surprise charges after the job." },
    { title: "Emergency availability", desc: "Our fleet is stationed 24/7 to handle critical cooling failures immediately." },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Why Choose Our AC Services?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We combine technical excellence with local expertise to provide cooling solutions that last in Riyadh's extreme climate.</p>
        </div>
        <ul className="space-y-4">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-gray-100">
              <CheckCircle2 className="text-secondary shrink-0 mt-1" />
              <div>
                <strong className="text-primary block mb-1">{p.title}</strong>
                <span className="text-gray-600">{p.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// 6. SERVICE PROCESS
const ServiceProcess = () => {
  const steps = [
    "Inspection: Complete visual and technical check of the AC unit.",
    "Diagnosis: Identifying the root cause of the cooling failure.",
    "Repair: Using genuine parts to fix the compressor or refrigerant leak.",
    "Testing: Running the system to ensure optimal airflow and temperature.",
    "Completion: Site cleanup and providing a 90-day service warranty."
  ];
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">How Our Service Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, i) => {
            const [title, desc] = step.split(": ");
            return (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center font-black text-xl mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-primary mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-gray-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// 7. COMMON AC PROBLEMS
const CommonProblems = () => {
  const problems = [
    "AC not cooling", "AC leaking water", "AC making noise", 
    "Weak airflow", "Refrigerant leaks", "Thermostat issues"
  ];
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">Problems We Fix</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {problems.map((p, i) => (
            <span key={i} className="bg-red-50 text-red-700 px-6 py-3 rounded-full font-bold text-sm border border-red-100 shadow-sm flex items-center gap-2">
              <AlertTriangle size={14} /> {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// 8. AC BRANDS WE SERVICE
const Brands = () => {
  const brands = ["LG", "Samsung", "Gree", "Carrier", "York", "Daikin", "Mitsubishi"];
  return (
    <section className="py-16 bg-slate-50 border-y border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">AC Brands We Service</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
          {brands.map((b, i) => (
            <span key={i} className="text-xl md:text-2xl font-black text-primary/80 grayscale">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

// 9. SERVICE AREAS
const ServiceAreas = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">Service Areas in Riyadh</h2>
        <p className="text-lg text-gray-600 leading-relaxed bg-blue-50 p-8 rounded-3xl border border-blue-100">
          We provide AC repair and maintenance services throughout <strong>Riyadh</strong> including <strong>Al Olaya, Al Malaz, Al Yasmin, Al Narjis, Hittin, Al Nakheel</strong> and nearby neighborhoods. Our local teams are stationed strategically to ensure rapid response times across the city.
        </p>
      </div>
    </section>
  );
};

// 10. COST FACTORS
const CostFactors = () => {
  const factors = ["AC type (Split vs Central)", "Issue severity", "Parts required", "Refrigerant type (R410A vs R22)", "Unit age"];
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-black text-primary text-center mb-8">What Affects AC Repair Costs?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {factors.map((f, i) => (
            <li key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 font-bold text-gray-700">
              <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">💰</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// 11. REPAIR VS REPLACEMENT
const RepairVsReplacement = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-black text-primary text-center mb-8">AC Repair vs AC Replacement</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 text-left">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-5 font-black text-lg">Factor</th>
                <th className="p-5 font-black text-lg border-l border-white/20">AC Repair</th>
                <th className="p-5 font-black text-lg border-l border-white/20">AC Replacement</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="p-5 font-bold text-gray-700">Cost</td>
                <td className="p-5 text-gray-600 border-l border-gray-100">Lower cost</td>
                <td className="p-5 text-gray-600 border-l border-gray-100">Higher cost</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="p-5 font-bold text-gray-700">Time</td>
                <td className="p-5 text-gray-600 border-l border-gray-100">Faster (1-2 hours)</td>
                <td className="p-5 text-gray-600 border-l border-gray-100">Longer (1-2 days)</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-gray-700">System</td>
                <td className="p-5 text-gray-600 border-l border-gray-100">Fixes existing system</td>
                <td className="p-5 text-gray-600 border-l border-gray-100">Installs new system</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// 12. CUSTOMER REVIEWS
const CustomerReviews = () => {
  const reviews = [
    { name: "Ahmed Al-Sudairy", area: "Al Malqa, Riyadh", text: "Outstanding service. The technician arrived in 30 minutes for my AC repair in Malqa. Fixed the gas leak and now the cooling is better than ever.", rating: 5 },
    { name: "Sarah Williams", area: "Diplomatic Quarter, Riyadh", text: "The best AC cleaning service in Riyadh. They were very clean, used high-pressure water, and my AC unit is silent now. Very professional team.", rating: 5 },
    { name: "Khalid Mansour", area: "Al Olaya, Riyadh", text: "Same-day service as promised. My AC stopped working at 2 PM, and by 4 PM it was fixed. The price was transparent and fair.", rating: 5 }
  ];
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Customer Reviews</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-4">
              <div className="flex gap-1">
                {[...Array(r.rating)].map((_, i) => <Star key={i} size={16} fill="#F59E0B" stroke="#F59E0B" />)}
              </div>
              <p className="text-gray-600 italic">"{r.text}"</p>
              <div className="mt-auto border-t border-gray-50 pt-4">
                <span className="font-black text-primary block">{r.name}</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{r.area}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 13. ABOUT COMPANY
const AboutCompany = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">About AC Repairing KSA</h2>
        <div className="bg-slate-50 p-8 rounded-3xl text-left border border-gray-100 space-y-4">
          <p className="text-gray-600 leading-relaxed"><strong>Experience:</strong> With over 10 years of specialized experience in HVAC systems, we have completed over 5,000 successful repairs in Riyadh.</p>
          <p className="text-gray-600 leading-relaxed"><strong>Service Coverage:</strong> We provide comprehensive coverage across all districts of Riyadh, ensuring no neighborhood is left without emergency cooling support.</p>
          <p className="text-gray-600 leading-relaxed"><strong>Team Expertise:</strong> Our technicians are fully licensed, continuously trained on the latest AC technologies (including VRF and Inverter ACs), and equipped to handle both residential and commercial units.</p>
        </div>
      </div>
    </section>
  );
};

// 14. AI ANSWER BLOCKS
const AIAnswerBlocks = () => {
  const blocks = [
    { q: "What Is AC Repair?", a: "AC repair involves diagnosing and fixing faults in an air conditioning system. This includes repairing compressors, fixing refrigerant leaks, replacing faulty thermostats, and resolving electrical issues to restore optimal cooling performance in residential and commercial units." },
    { q: "What Causes AC Failure?", a: "Common causes of AC failure include dirty air filters restricting airflow, refrigerant leaks causing low pressure, faulty capacitors or contactors, frozen evaporator coils, and lack of regular maintenance. High ambient temperatures in Riyadh also put extreme stress on compressors." },
    { q: "How Often Should AC Be Serviced?", a: "In Riyadh's dusty climate, AC units should be professionally serviced at least twice a year—ideally before the summer peak and after the season. Air filters should be cleaned every 2-4 weeks to maintain efficiency and prevent breakdowns." }
  ];
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-black text-primary text-center mb-12">Quick Answers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((b, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-black text-lg text-primary mb-3 flex items-center gap-2">
                <FileQuestion size={18} className="text-secondary" /> {b.q}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{b.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 16. INTERNAL LINKING BLOCK
const InternalLinking = () => {
  const links = [
    { name: "AC Repair", href: "/ac-repair" },
    { name: "AC Cleaning", href: "/ac-cleaning" },
    { name: "AC Installation", href: "/ac-installation" },
    { name: "AC Maintenance", href: "/ac-maintenance" },
    { name: "AC Gas Refill", href: "/ac-gas-refill" },
    { name: "Plumbing", href: "/plumbing" },
    { name: "Home Maintenance", href: "/home-maintenance" },
  ];
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6">Popular Services</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {links.map((l, i) => (
            <Link key={i} href={l.href} className="bg-slate-50 hover:bg-primary hover:text-white transition-colors text-primary px-5 py-2 rounded-full font-bold text-sm border border-gray-100">
              {l.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// 17. CTA BANNER
const CTABanner = () => (
  <section className="py-24 bg-white flex flex-col items-center relative overflow-hidden">
    <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-secondary p-12 md:p-20 rounded-[48px] text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none -rotate-12 scale-150">
          <Award size={400} />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          <span className="bg-white/20 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest text-white border border-white/20">Available in Your District Today</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black leading-tight tracking-tight">
            Need AC Repair? <br /> Technician in 30 Mins.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-4">
            <a href="tel:+966590132864" className="w-full sm:w-auto bg-white text-secondary px-8 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
              <Phone size={24} fill="currentColor" /> Call Now
            </a>
            <a href="https://wa.me/966590132864?text=Hello,%20I%20need%20AC%20repair%20services.%20Can%20you%20help?" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-[#1DA851] transition-all shadow-xl flex items-center justify-center gap-3">
              <WhatsAppIcon size={24} className="text-white" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);


export default function Home() {
  const handleBookNow = (serviceName?: any) => {
    const sName = serviceName && typeof serviceName === 'string' ? serviceName : "Home Maintenance and AC Repair";
    const text = `Hello, I need ${sName} services. Can you help?`;
    window.open(`https://wa.me/966590132864?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen">
      {/* Schema */}
      <Schema type="WebSite" data={generateWebSiteSchema()} />
      <Schema type="LocalBusiness" data={generateLocalBusinessSchema()} />
      <Schema type="BreadcrumbList" data={generateBreadcrumbSchema([{ name: "Home", item: "/" }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "AC Repairing KSA - Professional AC Repair & Maintenance in Riyadh",
        "url": "https://acrepairingksa.com/",
        "speakable": {
          "@type": "SpeakableSpecification",
          "xpath": ["/html/head/title", "/html/head/meta[@name='description']/@content"]
        }
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "AC Repairing KSA",
        "url": "https://acrepairingksa.com/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "542"
        }
      })}} />

      <Navbar onBookNow={() => handleBookNow("Navbar")} />
      
      <div className="flex flex-col">
        <Hero onBookNow={handleBookNow} />
        <TrustBar />
        <Services onBookNow={handleBookNow} />
        <WhyChooseUs />
        <ServiceProcess />
        <CommonProblems />
        <Brands />
        <ServiceAreas />
        <CostFactors />
        <RepairVsReplacement />
        <CustomerReviews />
        <AboutCompany />
        <AIAnswerBlocks />
        <FAQ />
        <InternalLinking />
        <CTABanner />
      </div>

      <Footer />
      <FloatingActions />
    </main>
  );
}
