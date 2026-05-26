const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'blog', '[slug]', 'BlogContent.tsx');

const content = `"use client";

import React, { useState, useEffect } from "react";
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
  Star, Sparkles, MapPin, CheckCircle2, AlertTriangle, ThermometerSun 
} from "lucide-react";
import Schema, { generateBreadcrumbSchema, generateFAQSchema } from "@/components/Schema";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

// Helper component to parse simple markdown formatting (Bold & Links)
const FormattedText = ({ text }: { text: string }) => {
  if (!text) return null;

  const linkRegex = /\\[([^\\]]+)\\]\\(([^)]+)\\)/g;
  const boldRegex = /\\*\\*([^*]+)\\*\\*/g;

  let parts = [];
  let currentIndex = 0;
  const tokens = [];
  
  let match;
  while ((match = linkRegex.exec(text)) !== null) {
    tokens.push({ start: match.index, end: linkRegex.lastIndex, type: 'link', text: match[1], data: match[2] });
  }

  linkRegex.lastIndex = 0;

  while ((match = boldRegex.exec(text)) !== null) {
    const isOverlapping = tokens.some(t => (match.index >= t.start && match.index < t.end));
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
      parts.push(
        <Link key={token.start} href={token.data} className="text-secondary font-bold hover:underline">
          {token.text}
        </Link>
      );
    } else if (token.type === 'bold') {
      parts.push(
        <strong key={token.start} className="font-black text-primary">
          {token.text}
        </strong>
      );
    }
    
    currentIndex = token.end;
  });

  if (currentIndex < text.length) {
    parts.push(text.slice(currentIndex));
  }

  return <>{parts.length > 0 ? parts : text}</>;
};

export default function BlogContent({ post }: { post: BlogPost }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBookNow = () => setIsModalOpen(true);

  // Generate NewsArticle/BlogPosting schema dynamically
  const generateArticleSchema = () => {
    return {
      "@type": "BlogPosting",
      "@id": \`https://acrepairingksa.com/blog/\${post.slug}#article\`,
      "isPartOf": {
        "@id": "https://acrepairingksa.com/#website"
      },
      "publisher": {
        "@id": "https://acrepairingksa.com/#localbusiness"
      },
      "headline": post.title,
      "description": post.metaDescription,
      "datePublished": new Date(post.publishDate).toISOString().split('T')[0],
      "dateModified": new Date().toISOString().split('T')[0],
      "mainEntityOfPage": \`https://acrepairingksa.com/blog/\${post.slug}\`,
      "image": \`https://acrepairingksa.com\${post.image}\`,
      "author": {
        "@type": "Organization",
        "name": "AC Repairing KSA",
        "url": "https://acrepairingksa.com"
      }
    };
  };

  const otherPosts = Object.values(blogPosts).filter(p => p.slug !== post.slug).slice(0, 3);
  
  // Extract headings for Table of Contents
  const headings = post.sections.filter(s => s.type === 'heading').map(s => s.title);

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Schema type="LocalBusiness" data={generateArticleSchema()} />
      <Schema 
        type="BreadcrumbList" 
        data={generateBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: post.title, item: \`/blog/\${post.slug}\` }
        ])} 
      />
      
      {/* FAQ Schema for GEO/AEO */}
      {post.sections.filter(s => s.type === 'faq' || s.title?.includes('FAQ')).length > 0 && (
        <Schema type="FAQPage" data={generateFAQSchema([
          { q: "Why is my AC running but not cooling in Riyadh?", a: "Most commonly caused by dirty filters, low refrigerant gas, or a choked condenser unit due to sandstorms." },
          { q: "How often should I clean AC filters in Riyadh?", a: "During the summer, you should clean your split AC filters every 2 weeks to maintain optimal cooling and prevent freezing." },
          { q: "What is the cost of Split AC repair in Riyadh?", a: "Diagnostic visits are highly affordable. Final repair costs depend on whether you need gas refill, capacitor replacement, or a simple filter cleaning." }
        ])} />
      )}

      <Navbar onBookNow={handleBookNow} />

      {/* Article Header */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link 
            href="/blog" 
            className="text-secondary text-xs font-black uppercase tracking-widest flex items-center gap-2 mb-6 hover:translate-x-[-4px] transition-all"
          >
            ← Back to Blog Index
          </Link>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-primary leading-tight tracking-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-primary/60 font-bold border-t border-gray-100 pt-6">
            <span className="flex items-center gap-2">
              <User size={16} className="text-secondary" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-secondary" />
              {post.publishDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-secondary" />
              {post.readTime}
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
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>

              {/* TABLE OF CONTENTS (MUST HAVE) */}
              {headings.length > 0 && (
                <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm">
                  <h3 className="font-heading font-black text-2xl text-primary mb-4 flex items-center gap-3">
                    📋 Table of Contents
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {headings.map((h, i) => (
                      <li key={i}>
                        <a href={\`#section-\${i}\`} className="text-primary/70 hover:text-secondary font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full" /> {h}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* QUICK ANSWER BOX (GEO/AEO Feature) */}
              <div className="bg-[#F0F7FF] border-l-4 border-secondary p-8 rounded-r-3xl shadow-sm relative overflow-hidden">
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
                   <p className="text-sm text-primary/60">Most issues can be diagnosed with simple DIY checks before booking a professional AC repair service.</p>
                </div>
              </div>

              {/* DYNAMIC CONTENT RENDERING */}
              <article className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-black prose-headings:text-primary prose-a:text-secondary prose-p:text-primary/70 prose-strong:text-primary">
                {post.sections.map((section, index) => {
                  
                  // CTA INJECTION: Inject a conversion block every 3 sections
                  const showCTA = index > 0 && index % 3 === 0;

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
                              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Same Day Service in Riyadh</li>
                              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> Certified HVAC Technicians</li>
                              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-secondary" /> 30-Min Rapid Response</li>
                            </ul>
                          </div>
                          <button onClick={handleBookNow} className="w-full md:w-auto relative z-10 px-8 py-5 bg-secondary text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-xl border-b-4 border-blue-700">
                            Book AC Repair
                          </button>
                        </div>
                      )}

                      {/* Regular Content Rendering */}
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
                        <ul className="mb-8 space-y-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                          {section.content.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 size={24} className="text-secondary shrink-0 mt-0.5" />
                              <span className="text-lg leading-relaxed font-medium"><FormattedText text={item} /></span>
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

                {/* --- SEO ENHANCEMENT SECTIONS --- */}

                {/* 1. Comparison Table (DIY vs Pro) */}
                <h2 className="text-3xl mt-12 mb-6">Repair Cost & Action Guide (Riyadh)</h2>
                <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm mb-10">
                  <table className="w-full text-left bg-white m-0">
                     <thead>
                        <tr className="bg-slate-100 text-primary">
                           <th className="p-5 font-black">Issue / Symptom</th>
                           <th className="p-5 font-black text-center">DIY Fix?</th>
                           <th className="p-5 font-black text-center">Professional Repair</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr className="border-b border-gray-50"><td className="p-5 font-bold">Dirty Filter / Low Airflow</td><td className="p-5 text-center text-green-500 font-bold">✅ Yes</td><td className="p-5 text-center text-gray-400">❌ No</td></tr>
                        <tr className="border-b border-gray-50"><td className="p-5 font-bold">Wrong Thermostat Setting</td><td className="p-5 text-center text-green-500 font-bold">✅ Yes</td><td className="p-5 text-center text-gray-400">❌ No</td></tr>
                        <tr className="border-b border-gray-50"><td className="p-5 font-bold">Low Refrigerant (Gas Leak)</td><td className="p-5 text-center text-gray-400">❌ No</td><td className="p-5 text-center text-secondary font-bold">✅ Yes</td></tr>
                        <tr className="border-b border-gray-50"><td className="p-5 font-bold">Capacitor Failure (Clicking)</td><td className="p-5 text-center text-gray-400">❌ No</td><td className="p-5 text-center text-secondary font-bold">✅ Yes</td></tr>
                        <tr className="border-b border-gray-50"><td className="p-5 font-bold">Compressor Not Starting</td><td className="p-5 text-center text-gray-400">❌ No</td><td className="p-5 text-center text-secondary font-bold">✅ Yes</td></tr>
                     </tbody>
                  </table>
                </div>

                {/* 2. Riyadh Weather Impact */}
                <div className="bg-white border-2 border-secondary/10 p-8 rounded-3xl shadow-sm mb-10">
                   <div className="flex items-center gap-3 mb-4 text-secondary">
                      <ThermometerSun size={32} />
                      <h3 className="font-heading font-black text-2xl text-primary m-0">How Riyadh's 45°C Heat Affects ACs</h3>
                   </div>
                   <p className="text-primary/70 font-medium leading-relaxed">
                     Riyadh's extreme ambient temperatures combined with seasonal dust storms put immense pressure on Split AC condenser units. Continuous operation without deep cleaning leads to faster filter blockage, condenser overheating, and ultimately, thermal trips. Regular maintenance is not optional in Saudi Arabia; it's a requirement for survival.
                   </p>
                </div>

                {/* 3. Internal Links naturally integrated */}
                <h3 className="text-2xl mt-12 mb-4">Related AC Services in Riyadh</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-12">
                   <Link href="/ac-repair" className="p-4 bg-white border border-gray-100 rounded-xl font-bold text-primary hover:border-secondary hover:text-secondary transition-all flex items-center justify-between group">AC Repair Riyadh <ArrowRight size={16} className="text-gray-300 group-hover:text-secondary transition-colors" /></Link>
                   <Link href="/ac-cleaning" className="p-4 bg-white border border-gray-100 rounded-xl font-bold text-primary hover:border-secondary hover:text-secondary transition-all flex items-center justify-between group">AC Deep Cleaning <ArrowRight size={16} className="text-gray-300 group-hover:text-secondary transition-colors" /></Link>
                   <Link href="/ac-gas-refill" className="p-4 bg-white border border-gray-100 rounded-xl font-bold text-primary hover:border-secondary hover:text-secondary transition-all flex items-center justify-between group">Freon Gas Refill <ArrowRight size={16} className="text-gray-300 group-hover:text-secondary transition-colors" /></Link>
                   <Link href="/ac-maintenance" className="p-4 bg-white border border-gray-100 rounded-xl font-bold text-primary hover:border-secondary hover:text-secondary transition-all flex items-center justify-between group">Annual Maintenance <ArrowRight size={16} className="text-gray-300 group-hover:text-secondary transition-colors" /></Link>
                </div>

              </article>

              {/* Author Bio (E-E-A-T) */}
              <div className="mt-16 bg-white p-8 rounded-[32px] border border-gray-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                 <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center font-black text-3xl shrink-0 shadow-lg">
                    {post.author.charAt(0)}
                 </div>
                 <div className="flex flex-col gap-2 text-center md:text-left">
                    <h4 className="font-heading font-black text-2xl text-primary">About {post.author}</h4>
                    <p className="text-primary/60 font-medium leading-relaxed">
                      This technical guide was reviewed and approved by certified HVAC engineers with over 15 years of experience repairing residential and commercial split AC systems across Riyadh. We strictly adhere to manufacturer specifications and safety protocols.
                    </p>
                 </div>
              </div>

              {/* Location Relevance Section */}
              <div className="mt-16 bg-[#FAFAFA] p-8 rounded-[32px] border border-gray-100 text-center">
                 <h4 className="font-heading font-black text-xl text-primary mb-4 flex items-center justify-center gap-2"><MapPin className="text-secondary" /> Expert AC Service Across Riyadh</h4>
                 <div className="flex flex-wrap justify-center gap-2">
                   {Object.values(locations).slice(0, 15).map(loc => (
                     <Link key={loc.slug} href={\`/locations/\${loc.slug}\`} className="bg-white px-4 py-2 rounded-full border border-gray-200 text-xs font-bold text-primary hover:border-secondary hover:text-secondary transition-all shadow-sm">
                        {loc.name}
                     </Link>
                   ))}
                   <Link href="/locations" className="bg-secondary px-4 py-2 rounded-full border border-secondary text-xs font-black text-white hover:bg-primary transition-all shadow-sm">
                      + View All Districts
                   </Link>
                 </div>
              </div>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8 sticky top-32">
              
              {/* Quick Contact Card */}
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
                  <a 
                    href="tel:+966590132864" 
                    className="w-full bg-white text-primary px-6 py-4 rounded-xl font-black text-sm uppercase tracking-widest text-center hover:bg-secondary hover:text-white transition-all shadow-lg flex items-center justify-center gap-3"
                  >
                    <Phone size={18} fill="currentColor" /> Call +966 590 132 864
                  </a>
                  <a 
                    href="https://wa.me/966590132864?text=Hello,%20I%20need%20home%20maintenance%20and%20AC%20repair%20services.%20Can%20you%20help?" 
                    className="w-full bg-[#25D366] text-white px-6 py-4 rounded-xl font-black text-sm uppercase tracking-widest text-center hover:bg-[#1DA851] transition-all shadow-lg flex items-center justify-center gap-3"
                  >
                    <MessageSquare size={18} fill="currentColor" /> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Related Services Links List */}
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

              {/* Related Articles */}
              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-heading font-black text-primary mb-6">
                  Recommended Reading
                </h3>
                <div className="flex flex-col gap-6">
                  {otherPosts.map((otherPost) => (
                    <Link 
                      key={otherPost.slug} 
                      href={\`/blog/\${otherPost.slug}\`}
                      className="group flex flex-col gap-3"
                    >
                      <div className="relative w-full h-32 rounded-2xl overflow-hidden">
                        <Image 
                          src={otherPost.image} 
                          alt={otherPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
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
console.log("Updated BlogContent.tsx with supercharged SEO features.");
