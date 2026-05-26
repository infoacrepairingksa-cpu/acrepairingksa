const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'blog', '[slug]', 'BlogContent.tsx');

const content = `"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingActions from "@/components/FloatingActions";
import { BlogPost, blogPosts } from "@/data/blog-posts";
import { locations } from "@/data/locations";
import { 
  Calendar, Clock, User, Phone, MessageSquare, ArrowRight, ShieldCheck, 
  Star, Sparkles, MapPin, CheckCircle2, AlertTriangle, ThermometerSun, Zap, Wrench, HelpCircle
} from "lucide-react";
import Schema, { generateBreadcrumbSchema, generateFAQSchema } from "@/components/Schema";

// FormattedText Helper
const FormattedText = ({ text }: { text: string }) => {
  if (!text) return null;
  const linkRegex = /\\[([^\\]]+)\\]\\(([^)]+)\\)/g;
  const boldRegex = /\\*\\*([^*]+)\\*\\*/g;
  let parts: React.ReactNode[] = [];
  let currentIndex = 0;
  const tokens: { start: number; end: number; type: 'link' | 'bold'; text: string; data: string }[] = [];
  let match: RegExpExecArray | null;
  while ((match = linkRegex.exec(text)) !== null) {
    tokens.push({ start: match.index, end: linkRegex.lastIndex, type: 'link', text: match[1], data: match[2] });
  }
  linkRegex.lastIndex = 0;
  while ((match = boldRegex.exec(text)) !== null) {
    const isOverlapping = tokens.some(t => (match!.index >= t.start && match!.index < t.end));
    if (!isOverlapping) {
      tokens.push({ start: match.index, end: boldRegex.lastIndex, type: 'bold', text: match[1], data: '' });
    }
  }
  tokens.sort((a, b) => a.start - b.start);
  tokens.forEach((token) => {
    if (token.start > currentIndex) {
      parts.push(text.slice(currentIndex, token.start));
    }
    if (token.type === 'link') {
      parts.push(<Link key={token.start} href={token.data} className="text-secondary font-bold hover:underline">{token.text}</Link>);
    } else if (token.type === 'bold') {
      parts.push(<strong key={token.start} className="font-black text-primary">{token.text}</strong>);
    }
    currentIndex = token.end;
  });
  if (currentIndex < text.length) {
    parts.push(text.slice(currentIndex));
  }
  return <>{parts.length > 0 ? parts : text}</>;
};

// Generic Stock Images for Blog Insertion
const blogImages = [
  "https://images.pexels.com/photos/5691642/pexels-photo-5691642.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2249290/pexels-photo-2249290.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/5691631/pexels-photo-5691631.jpeg?auto=compress&cs=tinysrgb&w=800"
];

const genericFAQs = [
  { q: "Why is my AC running but not cooling?", a: "This is usually caused by clogged air filters, low refrigerant gas, a dirty condenser coil, or a faulty compressor capacitor. We recommend checking the filters first before calling a technician." },
  { q: "Can low refrigerant cause warm air?", a: "Yes. Refrigerant is responsible for absorbing heat from your room. If there's a leak and the gas level is low, the AC cannot cool the air, resulting in warm air blowing from the vents." },
  { q: "How often should AC filters be cleaned in Riyadh?", a: "Due to frequent sandstorms and high dust levels in Riyadh, we highly recommend washing your split AC filters every 2 weeks during summer." },
  { q: "Why does my AC cool at night but not during the day?", a: "During the day, Riyadh's 45°C+ heat puts extreme thermal stress on the outdoor condenser unit. If it's dirty or the compressor is weak, it will trip on thermal overload and stop cooling during peak heat hours." },
  { q: "Can dirty coils reduce cooling performance?", a: "Absolutely. A thick layer of dust on the evaporator or condenser coils acts as an insulator, blocking heat transfer and reducing cooling efficiency by up to 40%." },
  { q: "How long does an AC gas refill take?", a: "A professional technician can detect leaks, vacuum the system, and refill the exact amount of R410A or R22 gas in about 1 to 2 hours." },
  { q: "What are the signs of compressor failure?", a: "A loud clicking noise from the outdoor unit, warm air from indoor vents, tripped circuit breakers, and a humming sound without the fan starting are strong indicators." },
  { q: "Should I repair or replace my split AC?", a: "If your AC is less than 7 years old and the repair cost is under 50% of a new unit, repair it. If it has a burnt compressor and is over 10 years old, replacement is more cost-effective." }
];

export default function BlogContent({ post }: { post: BlogPost }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBookNow = () => setIsModalOpen(true);

  const generateArticleSchema = () => ({
    "@type": "BlogPosting",
    "@id": \`https://acrepairingksa.com/blog/\${post.slug}#article\`,
    "isPartOf": { "@id": "https://acrepairingksa.com/#website" },
    "publisher": { "@id": "https://acrepairingksa.com/#localbusiness" },
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": new Date(post.publishDate).toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0], // Always current or latest update
    "mainEntityOfPage": \`https://acrepairingksa.com/blog/\${post.slug}\`,
    "image": \`https://acrepairingksa.com\${post.image}\`,
    "author": { "@type": "Organization", "name": "AC Repairing KSA", "url": "https://acrepairingksa.com" }
  });

  const otherPosts = Object.values(blogPosts).filter(p => p.slug !== post.slug).slice(0, 3);
  const headings = post.sections.filter(s => s.type === 'heading').map(s => s.title);

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Schema type="LocalBusiness" data={generateArticleSchema()} />
      <Schema 
        type="BreadcrumbList" 
        data={generateBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: "AC Repair", item: "/ac-repair" },
          { name: post.title, item: \`/blog/\${post.slug}\` }
        ])} 
      />
      <Schema type="FAQPage" data={generateFAQSchema(genericFAQs)} />

      <Navbar onBookNow={handleBookNow} />

      {/* Hero Section (Enhanced) */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/blog" className="text-secondary text-xs font-black uppercase tracking-widest flex items-center gap-2 mb-6 hover:translate-x-[-4px] transition-all">
            ← Back to Blog Index
          </Link>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-primary leading-tight tracking-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm font-bold pt-6 border-t border-gray-100">
            <span className="flex items-center gap-2 bg-slate-100 text-primary px-4 py-2 rounded-full">
              📅 Updated June 2026
            </span>
            <span className="flex items-center gap-2 bg-slate-100 text-primary px-4 py-2 rounded-full">
              👨 HVAC Experts Team
            </span>
            <span className="flex items-center gap-2 bg-slate-100 text-primary px-4 py-2 rounded-full">
              ⏱ {post.readTime}
            </span>
            <span className="flex items-center gap-2 bg-blue-50 text-secondary px-4 py-2 rounded-full">
              📍 Riyadh, Saudi Arabia
            </span>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* Featured Image */}
              <div className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden shadow-2xl">
                <Image src={post.image} alt={post.title} fill className="object-cover" priority />
              </div>

              {/* QUICK ANSWER BOX */}
              <div className="bg-[#F0F7FF] border-l-4 border-secondary p-8 rounded-r-3xl shadow-sm relative overflow-hidden mt-4">
                <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12">
                   <Sparkles size={100} />
                </div>
                <div className="flex items-center gap-2 text-secondary font-black uppercase tracking-widest text-xs mb-3">
                  <Sparkles size={16} /> Quick Answer Summary
                </div>
                <h3 className="font-heading font-black text-xl text-primary mb-3">
                  Why is my Split AC acting up in Riyadh?
                </h3>
                <p className="text-primary font-bold leading-relaxed text-base md:text-lg italic">
                  "{post.metaDescription}"
                </p>
                <div className="mt-5">
                   <p className="text-sm text-primary/60">Most issues can be diagnosed with a few simple DIY checks before booking AC repair service.</p>
                </div>
              </div>

              {/* Intro Text First (Render the first paragraph from sections) */}
              {post.sections[0]?.type === 'paragraph' && (
                 <p className="text-lg leading-relaxed font-medium text-primary/70">
                    <FormattedText text={post.sections[0].content} />
                 </p>
              )}

              {/* TABLE OF CONTENTS (Moved after Intro) */}
              {headings.length > 0 && (
                <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm my-6">
                  <h3 className="font-heading font-black text-2xl text-primary mb-4 flex items-center gap-3">
                    📋 Table of Contents
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {headings.map((h, i) => (
                      <li key={i}>
                        <a href={\`#section-\${i}\`} className="text-primary/80 hover:text-secondary font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full" /> {h}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* DYNAMIC CONTENT RENDERING (Skip index 0 if we rendered it above) */}
              <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-black prose-headings:text-primary prose-a:text-secondary prose-p:text-primary/80 prose-strong:text-primary">
                {post.sections.slice(1).map((section, index) => {
                  
                  const showCTA = index > 0 && index % 4 === 0;
                  const showImage = index > 0 && index % 3 === 0 && blogImages[Math.floor(index / 3) % blogImages.length];

                  return (
                    <React.Fragment key={index}>
                      {showCTA && (
                        <div className="not-prose my-12 bg-primary text-white p-10 rounded-[32px] shadow-2xl flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
                          <div className="absolute -right-10 -bottom-10 opacity-10">
                            <Zap size={200} />
                          </div>
                          <div className="flex flex-col gap-3 relative z-10">
                            <h4 className="text-2xl font-black font-heading text-white">Need Emergency AC Repair?</h4>
                            <ul className="text-white/80 font-medium text-sm flex flex-col gap-2">
                              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Same Day Service</li>
                              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Certified HVAC Technicians</li>
                              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Split AC Specialists</li>
                              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> WhatsApp Booking Available</li>
                            </ul>
                          </div>
                          <button onClick={handleBookNow} className="w-full md:w-auto relative z-10 px-8 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl border-b-4 border-blue-700">
                            Book AC Repair
                          </button>
                        </div>
                      )}

                      {showImage && (
                        <div className="not-prose my-12 relative w-full h-[350px] rounded-[32px] overflow-hidden shadow-lg border border-gray-100">
                           <Image src={showImage as string} alt="AC Repair Service Riyadh" fill className="object-cover" />
                        </div>
                      )}

                      {section.type === 'heading' && (
                        <h2 id={\`section-\${headings.indexOf(section.title)}\`} className="text-3xl md:text-4xl mt-12 mb-6 scroll-mt-32">
                          <FormattedText text={section.title || ''} />
                        </h2>
                      )}

                      {section.type === 'paragraph' && (
                        <p className="mb-6 text-lg leading-relaxed font-medium">
                          <FormattedText text={section.content} />
                        </p>
                      )}

                      {section.type === 'list' && Array.isArray(section.content) && (
                        <ul className="mb-8 space-y-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm list-none pl-0">
                          {section.content.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 pl-0">
                              <CheckCircle2 size={24} className="text-secondary shrink-0 mt-0.5" />
                              <span className="text-lg leading-relaxed font-medium m-0"><FormattedText text={item} /></span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.type === 'alert' && (
                        <div className="my-8 bg-[#FFF4E5] border-l-4 border-[#FF9800] p-6 rounded-r-2xl flex items-start gap-4 shadow-sm">
                          <AlertTriangle size={24} className="text-[#FF9800] shrink-0 mt-1" />
                          <p className="text-[#B26A00] font-bold m-0 leading-relaxed"><FormattedText text={section.content} /></p>
                        </div>
                      )}

                      {section.type === 'table' && Array.isArray(section.content) && (
                        <div className="my-10 overflow-x-auto rounded-3xl border border-gray-100 shadow-sm">
                          <table className="w-full text-left border-collapse bg-white m-0">
                            <thead>
                              <tr className="bg-primary text-white">
                                {section.content[0].map((header: string, i: number) => (
                                  <th key={i} className="p-5 font-black text-sm uppercase tracking-widest border-b border-primary/20"><FormattedText text={header} /></th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {section.content.slice(1).map((row: string[], i: number) => (
                                <tr key={i} className="border-b border-gray-50 hover:bg-slate-50 transition-colors">
                                  {row.map((cell: string, j: number) => (
                                    <td key={j} className="p-5 text-primary/70 font-medium"><FormattedText text={cell} /></td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}

                {/* --- SEO ENHANCEMENT SECTIONS (End of article) --- */}

                {/* 1. Comparison Table (DIY vs Pro) */}
                <h2 className="text-3xl mt-16 mb-6">Warm Air Problems Comparison</h2>
                <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm mb-10">
                  <table className="w-full text-left bg-white m-0 border-collapse">
                     <thead>
                        <tr className="bg-slate-100 text-primary border-b-2 border-slate-200">
                           <th className="p-5 font-black text-lg">Issue</th>
                           <th className="p-5 font-black text-center text-lg">DIY Fix</th>
                           <th className="p-5 font-black text-center text-lg">Professional Repair</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr className="border-b border-gray-100 hover:bg-slate-50"><td className="p-5 font-bold">Dirty Filter</td><td className="p-5 text-center text-2xl">✅</td><td className="p-5 text-center text-2xl">❌</td></tr>
                        <tr className="border-b border-gray-100 hover:bg-slate-50"><td className="p-5 font-bold">Wrong Thermostat</td><td className="p-5 text-center text-2xl">✅</td><td className="p-5 text-center text-2xl">❌</td></tr>
                        <tr className="border-b border-gray-100 hover:bg-slate-50"><td className="p-5 font-bold">Low Refrigerant</td><td className="p-5 text-center text-2xl">❌</td><td className="p-5 text-center text-2xl">✅</td></tr>
                        <tr className="border-b border-gray-100 hover:bg-slate-50"><td className="p-5 font-bold">Capacitor Failure</td><td className="p-5 text-center text-2xl">❌</td><td className="p-5 text-center text-2xl">✅</td></tr>
                        <tr className="hover:bg-slate-50"><td className="p-5 font-bold">Compressor Issue</td><td className="p-5 text-center text-2xl">❌</td><td className="p-5 text-center text-2xl">✅</td></tr>
                     </tbody>
                  </table>
                </div>

                {/* 2. Riyadh Weather Impact */}
                <div className="bg-white border-2 border-secondary/10 p-8 rounded-3xl shadow-sm mb-10">
                   <div className="flex items-center gap-3 mb-4 text-secondary">
                      <ThermometerSun size={32} />
                      <h3 className="font-heading font-black text-2xl text-primary m-0">How Riyadh's Extreme Heat Affects Split AC Performance</h3>
                   </div>
                   <p className="text-primary/80 font-medium leading-relaxed">
                     During the peak of summer, Riyadh experiences massive dust storms and high ambient temperatures exceeding 45°C. This causes:
                   </p>
                   <ul className="list-disc pl-6 text-primary/80 font-medium">
                     <li>Faster filter blockage due to fine desert dust.</li>
                     <li>Condenser overheating and thermal compressor trips.</li>
                     <li>Continuous operation leading to higher electricity bills.</li>
                   </ul>
                </div>

                {/* 3. People Also Ask (PAA) */}
                <h2 className="text-3xl mt-16 mb-6">People Also Ask</h2>
                <div className="flex flex-col gap-4 mb-12">
                   {[
                     "Why is my split AC blowing warm air in summer?",
                     "Can low refrigerant damage a compressor?",
                     "How much refrigerant does a split AC need?",
                     "Why does my AC stop cooling during the afternoon?"
                   ].map((q, i) => (
                      <div key={i} className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm flex items-center gap-3 font-bold text-primary hover:border-secondary transition-colors cursor-pointer group">
                         <HelpCircle size={20} className="text-secondary group-hover:scale-110 transition-transform" /> {q}
                      </div>
                   ))}
                </div>

                {/* 4. Frequently Asked Questions */}
                <h2 className="text-3xl mt-16 mb-6">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-6 mb-16">
                  {genericFAQs.map((faq, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <h3 className="text-xl font-black text-primary mb-3 m-0 flex items-start gap-2">
                        <span className="text-secondary">Q:</span> {faq.q}
                      </h3>
                      <p className="text-primary/70 font-medium leading-relaxed m-0 flex items-start gap-2">
                        <span className="text-gray-400 font-black">A:</span> {faq.a}
                      </p>
                    </div>
                  ))}
                </div>

              </article>

              {/* Internal Links Block */}
              <div className="mt-10 mb-6 border-t border-gray-100 pt-10">
                 <h4 className="font-heading font-black text-2xl text-primary mb-6">Related Technical Services</h4>
                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                   <Link href="/ac-repair" className="bg-slate-50 p-4 rounded-xl font-bold text-sm text-center hover:bg-secondary hover:text-white transition-colors border border-gray-100">AC Repair Riyadh</Link>
                   <Link href="/ac-maintenance" className="bg-slate-50 p-4 rounded-xl font-bold text-sm text-center hover:bg-secondary hover:text-white transition-colors border border-gray-100">AC Maintenance Riyadh</Link>
                   <Link href="/ac-cleaning" className="bg-slate-50 p-4 rounded-xl font-bold text-sm text-center hover:bg-secondary hover:text-white transition-colors border border-gray-100">AC Cleaning Riyadh</Link>
                   <Link href="/ac-gas-refill" className="bg-slate-50 p-4 rounded-xl font-bold text-sm text-center hover:bg-secondary hover:text-white transition-colors border border-gray-100">AC Gas Refill Riyadh</Link>
                   <Link href="/ac-coil-cleaning" className="bg-slate-50 p-4 rounded-xl font-bold text-sm text-center hover:bg-secondary hover:text-white transition-colors border border-gray-100">AC Coil Cleaning</Link>
                   <Link href="/ac-filter-cleaning" className="bg-slate-50 p-4 rounded-xl font-bold text-sm text-center hover:bg-secondary hover:text-white transition-colors border border-gray-100">AC Filter Cleaning</Link>
                 </div>
              </div>

              {/* Strong Local SEO Hub Block */}
              <div className="bg-[#FAFAFA] p-8 md:p-10 rounded-[32px] border border-gray-100 shadow-inner mt-8">
                 <h4 className="font-heading font-black text-2xl text-primary mb-6 flex items-center gap-3">
                   <MapPin className="text-secondary" size={28} /> AC Repair Available Across Riyadh
                 </h4>
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
                   {Object.values(locations).slice(0, 18).map(loc => (
                     <Link key={loc.slug} href={\`/locations/\${loc.slug}\`} className="flex items-center gap-2 text-primary/70 font-bold hover:text-secondary hover:underline text-sm transition-all group">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-secondary transition-colors" />
                        AC Repair in {loc.name}
                     </Link>
                   ))}
                 </div>
                 <div className="mt-8 flex justify-center">
                    <Link href="/locations" className="text-secondary font-black uppercase tracking-widest text-sm hover:underline">View All Riyadh Service Areas →</Link>
                 </div>
              </div>

              {/* Author Bio (E-E-A-T Upgraded) */}
              <div className="mt-16 bg-white p-8 md:p-10 rounded-[32px] border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-md">
                 <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center font-black text-3xl shrink-0 shadow-lg mt-2">
                    {post.author.charAt(0)}
                 </div>
                 <div className="flex flex-col gap-3 text-center md:text-left">
                    <h4 className="font-heading font-black text-2xl text-primary">About the Author: {post.author}</h4>
                    <p className="text-primary/70 font-medium leading-relaxed">
                      This guide was reviewed by certified HVAC technicians with extensive experience servicing residential and commercial split AC systems throughout Riyadh.
                    </p>
                    <div className="mt-2 flex flex-col gap-2">
                       <span className="inline-block bg-green-100 text-green-800 text-xs font-black uppercase px-3 py-1 rounded-full w-fit mx-auto md:mx-0">✓ 5,000+ AC Repairs Completed</span>
                       <span className="inline-block bg-blue-100 text-blue-800 text-xs font-black uppercase px-3 py-1 rounded-full w-fit mx-auto md:mx-0">✓ Specialized in Split, Window & Central ACs</span>
                    </div>
                 </div>
              </div>

              {/* MASSIVE FINAL CTA */}
              <div className="mt-16 bg-gradient-to-br from-primary to-[#0f172a] text-white p-10 md:p-14 rounded-[40px] shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
                 <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                 <h2 className="text-3xl md:text-4xl font-black font-heading leading-tight mb-6 relative z-10">
                   Need Same-Day Split AC Repair in Riyadh?
                 </h2>
                 <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 text-white/90 font-bold mb-10 relative z-10">
                    <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-secondary" /> Certified HVAC Technicians</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-secondary" /> Emergency Support Available</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-secondary" /> Genuine Spare Parts</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={20} className="text-secondary" /> WhatsApp Booking</li>
                 </ul>
                 <button 
                   onClick={handleBookNow} 
                   className="w-full sm:w-auto px-12 py-6 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_20px_40px_-10px_rgba(34,197,94,0.5)] border-b-4 border-blue-700 relative z-10 text-lg flex items-center justify-center gap-3"
                 >
                   <Zap fill="currentColor" /> Book AC Repair Now
                 </button>
              </div>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8 sticky top-32">
              
              <div className="bg-primary text-white p-8 rounded-[32px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Phone size={100} />
                </div>
                <h3 className="text-2xl font-heading font-black mb-4 relative z-10">
                  Fast AC Repair in Riyadh
                </h3>
                <p className="text-white/80 font-medium mb-8 relative z-10">
                  Don't suffer in the heat. Our certified technicians are ready to fix your AC right now.
                </p>
                <div className="flex flex-col gap-4 relative z-10">
                  <a href="tel:+966590132864" className="w-full bg-white text-primary px-6 py-4 rounded-xl font-black text-sm uppercase tracking-widest text-center hover:bg-secondary hover:text-white transition-all shadow-lg flex items-center justify-center gap-3">
                    <Phone size={18} fill="currentColor" /> Call +966 590 132 864
                  </a>
                  <a href="https://wa.me/966590132864?text=Hello,%20I%20need%20AC%20repair%20services.%20Can%20you%20help?" className="w-full bg-[#25D366] text-white px-6 py-4 rounded-xl font-black text-sm uppercase tracking-widest text-center hover:bg-[#1DA851] transition-all shadow-lg flex items-center justify-center gap-3">
                    <MessageSquare size={18} fill="currentColor" /> WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-heading font-black text-primary mb-6 flex items-center gap-2">
                  <Wrench className="text-secondary" size={20} /> Popular Services
                </h3>
                <div className="flex flex-col gap-3">
                   {['AC Repair', 'AC Deep Cleaning', 'Freon Gas Refill', 'Plumbing Service', 'Home Maintenance'].map((srv, idx) => (
                      <button key={idx} onClick={handleBookNow} className="w-full text-left p-4 rounded-xl bg-slate-50 hover:bg-secondary hover:text-white font-bold text-primary transition-all border border-gray-100 hover:border-secondary flex items-center justify-between group">
                         {srv} <ArrowRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                      </button>
                   ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-heading font-black text-primary mb-6">
                  Recommended Reading
                </h3>
                <div className="flex flex-col gap-6">
                  {otherPosts.map((otherPost) => (
                    <Link key={otherPost.slug} href={\`/blog/\${otherPost.slug}\`} className="group flex flex-col gap-3">
                      <div className="relative w-full h-32 rounded-2xl overflow-hidden">
                        <Image src={otherPost.image} alt={otherPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <h4 className="font-bold text-primary leading-tight group-hover:text-secondary transition-colors">
                        {otherPost.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} serviceName="Blog Reader - AC Repair" />
    </main>
  );
}
`;

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated BlogContent.tsx with final massive 10/10 SEO features.");
