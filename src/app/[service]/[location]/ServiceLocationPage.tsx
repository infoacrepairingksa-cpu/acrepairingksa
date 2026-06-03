"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  Phone, MapPin, ShieldCheck, Clock, CheckCircle2,
  Star, ArrowRight, Zap, Award, ChevronRight
} from "lucide-react";

interface SvcData {
  title: string;
  description: string;
  emoji: string;
  color: string;
  entities: string[];
  problems: string[];
  steps: string[];
  faqs: { q: string; a: string }[];
}

interface LocData {
  nameAr?: string;
  type?: string;
  description?: string;
  nearbyAreas?: string[];
  commonProblems?: string[];
  population?: string;
}

interface Props {
  service: string;
  location: string;
  serviceName: string;
  locationName: string;
  svcData: SvcData;
  locData?: LocData;
}

const RELATED_SERVICES: Record<string, string[]> = {
  "ac-repair": ["ac-maintenance", "ac-gas-refill", "ac-cleaning"],
  "ac-cleaning": ["ac-filter-cleaning", "ac-coil-cleaning", "ac-duct-cleaning"],
  "ac-installation": ["ac-maintenance", "ac-repair", "ac-gas-refill"],
  "ac-maintenance": ["ac-repair", "ac-cleaning", "ac-gas-refill"],
  "ac-gas-refill": ["ac-repair", "ac-maintenance", "ac-coil-cleaning"],
  "ac-duct-cleaning": ["ac-cleaning", "ac-filter-cleaning", "ac-coil-cleaning"],
  "ac-filter-cleaning": ["ac-cleaning", "ac-coil-cleaning", "ac-maintenance"],
  "ac-coil-cleaning": ["ac-cleaning", "ac-filter-cleaning", "ac-maintenance"],
  "plumbing": ["ac-repair", "ac-maintenance", "ac-cleaning"],
};

function toTitleCase(slug: string): string {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

const NEARBY: Record<string, string[]> = {
  "al-olaya": ["al-sulaymaniyah", "al-malqa", "al-aqiq"],
  "al-malaz": ["al-rawdah", "al-munsiyah", "al-qadisiyah"],
  "al-yasmin": ["al-narjis", "hittin", "al-malqa"],
  "al-narjis": ["al-yasmin", "al-nakheel", "hittin"],
  "al-sahafa": ["al-malqa", "al-nakheel", "al-narjis"],
  "al-malqa": ["al-yasmin", "al-aqiq", "al-olaya"],
  "al-aqiq": ["al-malqa", "al-olaya", "al-sulaymaniyah"],
  "hittin": ["al-yasmin", "al-narjis", "al-malqa"],
  "al-nakheel": ["al-narjis", "al-sahafa", "hittin"],
  "al-rawdah": ["al-malaz", "al-munsiyah", "al-shifa"],
  "al-sulaymaniyah": ["al-olaya", "al-aqiq", "al-malqa"],
  "al-rabwah": ["al-munsiyah", "al-shifa", "al-qadisiyah"],
  "al-munsiyah": ["al-malaz", "al-rawdah", "al-rabwah"],
  "al-qadisiyah": ["al-malaz", "al-rawdah", "al-munsiyah"],
  "al-shifa": ["al-rabwah", "al-qadisiyah", "al-munsiyah"],
};

export default function ServiceLocationPage({
  service, location, serviceName, locationName, svcData, locData
}: Props) {
  const waText = `Hello, I need ${serviceName} service in ${locationName}, Riyadh. Can you help?`;
  const waLink = `https://wa.me/966590132864?text=${encodeURIComponent(waText)}`;
  const nearby = NEARBY[location] || [];
  const related = RELATED_SERVICES[service] || [];

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: serviceName, href: `/${service}` },
    { name: locationName, href: `/${service}/${location}` },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Schema — Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((b, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": b.name,
              "item": `https://acrepairingksa.com${b.href}`,
            })),
          }),
        }}
      />

      {/* Schema — LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            "name": `AC Repairing KSA – ${serviceName} in ${locationName}`,
            "url": `https://acrepairingksa.com/${service}/${location}`,
            "telephone": "+966590132864",
            "areaServed": { "@type": "Place", "name": `${locationName}, Riyadh, Saudi Arabia` },
            "priceRange": "$$",
            "openingHours": "Mo-Su 00:00-23:59",
            "description": `Professional ${serviceName} service in ${locationName}, Riyadh. Same-day response, certified technicians.`,
          }),
        }}
      />

      {/* Schema — FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": svcData.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a },
            })),
          }),
        }}
      />

      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-gray-100 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-primary/60 font-medium flex-wrap">
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={b.href}>
                {i > 0 && <ChevronRight size={14} className="text-primary/30" />}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={b.href} className="hover:text-secondary transition-colors">{b.name}</Link>
                ) : (
                  <span className="text-primary font-bold">{b.name}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-slate-900 via-primary to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 text-[300px] font-black leading-none select-none">{svcData.emoji}</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <span className="bg-secondary text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">{locationName}</span>
              <span className="bg-white/10 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full flex items-center gap-2">
                <Clock size={12} /> 24/7 Available
              </span>
              <span className="bg-white/10 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full flex items-center gap-2">
                <Zap size={12} /> 30-Min Response
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-black leading-tight tracking-tight mb-6">
              {serviceName} in <span className="text-secondary">{locationName}</span>
              <br /><span className="text-white/80 text-2xl md:text-3xl font-bold">Riyadh, Saudi Arabia</span>
            </h1>

            {/* Quick Answer Box — for AI Overviews */}
            <div className="bg-secondary/20 border border-secondary/30 rounded-2xl p-6 mb-8 max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <Star size={16} className="text-secondary" fill="currentColor" />
                <span className="text-xs font-black uppercase tracking-widest text-secondary">Quick Answer</span>
              </div>
              <p className="text-white/90 font-medium leading-relaxed text-base">
                {serviceName} in {locationName} is available 24/7 from AC Repairing KSA. Our certified technicians
                arrive within 30 minutes across {locationName} for all {serviceName.toLowerCase()} needs.
                {locData?.description ? ` ${locData.description.slice(0, 100)}...` : ""}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+966590132864"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-xl"
              >
                <Phone size={20} fill="currentColor" /> Call Now: +966 59 013 2864
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#1DA851] transition-all shadow-xl"
              >
                <WhatsAppIcon size={20} className="text-white" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is this service — Definition Section for AI */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-blue-50 border-l-4 border-secondary rounded-r-2xl p-8 mb-8">
            <h2 className="text-2xl font-black text-primary mb-3">
              What Is {serviceName}?
            </h2>
            <p className="text-primary/80 font-medium leading-relaxed">
              {svcData.description}. In {locationName}, Riyadh, where summer temperatures regularly exceed 45°C,
              professional {serviceName.toLowerCase()} is essential for comfortable living.
              Our certified HVAC technicians use industry-standard equipment and genuine parts for all services.
            </p>
          </div>

          {/* Entity Cloud */}
          <div className="mb-8">
            <h3 className="text-lg font-black text-primary mb-4">Key Technical Components</h3>
            <div className="flex flex-wrap gap-2">
              {svcData.entities.map(entity => (
                <span key={entity} className="bg-slate-100 text-primary/70 font-bold text-sm px-4 py-2 rounded-xl border border-slate-200">
                  {entity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-primary mb-8">
            Common {serviceName} Problems in {locationName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {svcData.problems.map((problem, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-500 font-black text-sm">{i + 1}</span>
                </div>
                <span className="font-bold text-primary/80">{problem}</span>
              </div>
            ))}
          </div>

          {/* Area-specific problems */}
          {locData?.commonProblems && (
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
              <h3 className="font-black text-primary mb-3 text-lg">
                {locationName}-Specific Issues Our Team Sees
              </h3>
              <ul className="space-y-2">
                {locData.commonProblems.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-primary/80 font-medium">
                    <MapPin size={14} className="text-secondary shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CTA Block 1 */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">
            Need {serviceName} in {locationName} Now?
          </h2>
          <p className="text-white/70 mb-8 font-medium">Our team is stationed in {locationName} — 30-minute arrival guaranteed</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+966590132864" className="inline-flex items-center justify-center gap-3 bg-white text-primary px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">
              <Phone size={20} fill="currentColor" /> +966 59 013 2864
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#1DA851] transition-all">
              <WhatsAppIcon size={20} className="text-white" /> WhatsApp {serviceName}
            </a>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-primary mb-8">
            How Our {serviceName} Process Works in {locationName}
          </h2>
          <div className="space-y-4">
            {svcData.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-gray-100">
                <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center shrink-0 font-black text-lg">
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-primary">{step}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <ShieldCheck size={24} />, label: "5,000+ Repairs Done", sub: "Verified Experience" },
              { icon: <Clock size={24} />, label: "30-Min Response", sub: `In ${locationName}` },
              { icon: <Award size={24} />, label: "90-Day Warranty", sub: "On All Repairs" },
              { icon: <Star size={24} />, label: "4.9/5 Rating", sub: "500+ Reviews" },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-slate-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <p className="font-black text-primary text-sm">{item.label}</p>
                <p className="text-xs text-primary/50 font-bold mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section — Critical for AI Overviews */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black text-primary mb-8">
            Frequently Asked Questions — {serviceName} in {locationName}
          </h2>
          <div className="space-y-4">
            {svcData.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="p-6 border-b border-gray-50">
                  <h3 className="font-black text-primary text-lg">{faq.q}</h3>
                </div>
                <div className="p-6 bg-slate-50/50">
                  <p className="text-primary/80 font-medium leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links — Nearby Areas (Same Service) */}
      {nearby.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-black text-primary mb-6">
              {serviceName} in Nearby Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {nearby.map(area => (
                <Link
                  key={area}
                  href={`/${service}/${area}`}
                  className="flex items-center gap-3 p-5 bg-slate-50 rounded-2xl border border-gray-100 hover:border-secondary hover:text-secondary transition-all group"
                >
                  <MapPin size={18} className="text-secondary shrink-0" />
                  <div>
                    <p className="font-black text-primary group-hover:text-secondary text-sm">
                      {serviceName} in {area.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                    </p>
                    <p className="text-xs text-primary/40 font-bold">Same-day available</p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-primary/20 group-hover:text-secondary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Links — Related Services in Same Location */}
      {related.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-black text-primary mb-6">
              Other Services in {locationName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map(rel => (
                <Link
                  key={rel}
                  href={`/${rel}/${location}`}
                  className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-gray-100 hover:border-secondary transition-all group"
                >
                  <CheckCircle2 size={18} className="text-secondary shrink-0" />
                  <div>
                    <p className="font-black text-primary group-hover:text-secondary text-sm">
                      {toTitleCase(rel)} in {locationName}
                    </p>
                    <p className="text-xs text-primary/40 font-bold">Professional service</p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-primary/20 group-hover:text-secondary" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-4">
            Book {serviceName} in {locationName} Today
          </h2>
          <p className="text-white/80 font-medium mb-8 max-w-xl mx-auto">
            Certified technicians. 30-minute arrival. 90-day warranty. Available 24/7 across {locationName}, Riyadh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+966590132864" className="inline-flex items-center justify-center gap-3 bg-white text-primary px-10 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-2xl">
              <Phone size={22} fill="currentColor" /> Call Now
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#1DA851] transition-all shadow-2xl">
              <WhatsAppIcon size={22} className="text-white" /> WhatsApp Us
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-white/60 text-sm font-bold">
            <span>✅ Same-day service</span>
            <span>✅ 90-day warranty</span>
            <span>✅ Fixed pricing</span>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
}
