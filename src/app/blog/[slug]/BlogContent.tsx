"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingActions from "@/components/FloatingActions";
import { BlogPost, blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, User, Phone, MessageSquare, ArrowRight, ShieldCheck, Star } from "lucide-react";
import Schema, { generateBreadcrumbSchema } from "@/components/Schema";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

// Helper component to parse simple markdown formatting (Bold & Links)
const FormattedText = ({ text }: { text: string }) => {
  if (!text) return null;

  // Regex to match markdown links: [Link Text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  // Regex to match bold markdown: **bold text**
  const boldRegex = /\*\*([^*]+)\*\*/g;

  // We can split the string by both matches
  let parts: React.ReactNode[] = [];
  let currentIndex = 0;

  // Simple tokenization using standard regex execution
  // First, find all links and bolds to build a flat list of text segments
  const tokens: { start: number; end: number; type: 'link' | 'bold'; text: string; data: string }[] = [];
  
  let match;
  while ((match = linkRegex.exec(text)) !== null) {
    tokens.push({
      start: match.index,
      end: linkRegex.lastIndex,
      type: 'link',
      text: match[1],
      data: match[2]
    });
  }

  // Reset regex
  linkRegex.lastIndex = 0;

  while ((match = boldRegex.exec(text)) !== null) {
    // Only add if it doesn't overlap with a link token
    const isOverlapping = tokens.some(t => (match!.index >= t.start && match!.index < t.end));
    if (!isOverlapping) {
      tokens.push({
        start: match.index,
        end: boldRegex.lastIndex,
        type: 'bold',
        text: match[1],
        data: ''
      });
    }
  }

  // Sort tokens by start index
  tokens.sort((a, b) => a.start - b.start);

  // Reconstruct text with React nodes
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
      "@id": `https://acrepairingksa.com/blog/${post.slug}#article`,
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
      "mainEntityOfPage": `https://acrepairingksa.com/blog/${post.slug}`,
      "image": `https://acrepairingksa.com${post.image}`,
      "author": {
        "@type": "Organization",
        "name": "AC Repairing KSA",
        "url": "https://acrepairingksa.com"
      }
    };
  };

  // Get other blog posts to recommend in the sidebar
  const otherPosts = Object.values(blogPosts).filter(p => p.slug !== post.slug);

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Schema type="LocalBusiness" data={generateArticleSchema()} /> {/* Injecting the article metadata schema */}
      <Schema 
        type="BreadcrumbList" 
        data={generateBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" },
          { name: post.title, item: `/blog/${post.slug}` }
        ])} 
      />
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

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative h-[300px] md:h-[500px] w-full rounded-[32px] overflow-hidden shadow-xl">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              priority
              className="object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Article Body & Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content (75% equivalent) */}
            <div className="lg:col-span-8 bg-white rounded-[32px] p-6 md:p-10 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
              <div className="flex flex-col gap-8 text-primary/80 text-base md:text-lg leading-relaxed font-medium">
                {post.sections.map((section, idx) => {
                  switch (section.type) {
                    case 'paragraph':
                      return (
                        <p key={idx}>
                          <FormattedText text={section.content} />
                        </p>
                      );
                    case 'heading':
                      return (
                        <div key={idx} className="mt-6 first:mt-0 flex flex-col gap-2">
                          <h2 className="text-2xl md:text-3xl font-heading font-black text-primary tracking-tight">
                            {section.title}
                          </h2>
                          {section.content && (
                            <p className="text-primary/75 mt-2">
                              <FormattedText text={section.content} />
                            </p>
                          )}
                        </div>
                      );
                    case 'list':
                      return (
                        <ul key={idx} className="flex flex-col gap-3 list-disc pl-6 text-primary/75">
                          {(section.content as string[]).map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <FormattedText text={item} />
                            </li>
                          ))}
                        </ul>
                      );
                    case 'table':
                      const rows = section.content as string[][];
                      const headers = rows[0];
                      const dataRows = rows.slice(1);
                      return (
                        <div key={idx} className="overflow-x-auto my-6 rounded-2xl border border-gray-100 shadow-sm">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-primary text-white text-sm font-bold">
                                {headers.map((h, hIdx) => (
                                  <th key={hIdx} className="p-4">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {dataRows.map((row, rowIdx) => (
                                <tr key={rowIdx} className="border-b border-gray-50 text-sm font-medium hover:bg-slate-50 transition-colors">
                                  {row.map((cell, cellIdx) => (
                                    <td key={cellIdx} className="p-4 text-primary/80">
                                      <FormattedText text={cell} />
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    case 'alert':
                      return (
                        <div key={idx} className="bg-orange-50 border-l-4 border-orange-500 rounded-r-2xl p-6 my-6 text-orange-950 font-bold text-sm md:text-base leading-relaxed shadow-sm">
                          <FormattedText text={section.content} />
                        </div>
                      );
                    case 'link-box':
                      return (
                        <div key={idx} className="bg-slate-50 border border-gray-100 rounded-3xl p-8 my-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                          <div className="flex-1 flex flex-col gap-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Service Recommendation</span>
                            <p className="text-primary font-bold leading-normal">
                              {section.content.text}
                            </p>
                          </div>
                          <Link 
                            href={section.content.link}
                            className="bg-secondary hover:bg-blue-600 text-white font-black text-sm uppercase tracking-wider px-6 py-4 rounded-xl transition-all shadow-md shrink-0 text-center w-full md:w-auto"
                          >
                            {section.content.buttonText}
                          </Link>
                        </div>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </div>

            {/* Sidebar (25% equivalent) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              
              {/* Direct Booking Hook */}
              <div className="bg-primary rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-6">
                  <span className="bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full w-fit">
                    Immediate Support
                  </span>
                  <h3 className="text-2xl font-heading font-black tracking-tight leading-tight">
                    Riyadh's #1 Certified HVAC Crew
                  </h3>
                  <p className="text-white/70 text-sm font-medium leading-relaxed">
                    Same-day diagnostics, split/central AC repair, leakage sealing, and chemical deep cleans. Available across Riyadh.
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <a 
                      href="tel:+966501234568" 
                      className="bg-secondary hover:bg-blue-600 text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg"
                    >
                      <Phone size={16} fill="currentColor" /> Call Support
                    </a>
                    
                    <a 
                      href="https://wa.me/966501234568"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#1DA851] text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg"
                    >
                      <WhatsAppIcon size={16} className="text-white" /> WhatsApp
                    </a>

                    <button 
                      onClick={handleBookNow} 
                      className="bg-white/10 hover:bg-white/20 text-white font-black text-sm uppercase tracking-wider py-4 rounded-xl transition-all text-center w-full"
                    >
                      Book Online Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Other Articles Recommendation */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.01)] flex flex-col gap-6">
                <h3 className="text-xl font-heading font-black text-primary tracking-tight">
                  Related Guides
                </h3>
                <div className="flex flex-col gap-5">
                  {otherPosts.slice(0, 4).map((op) => (
                    <div key={op.slug} className="flex gap-4 items-start group">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                        <Image src={op.image} alt={op.title} fill className="object-cover" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <Link 
                          href={`/blog/${op.slug}`}
                          className="text-sm font-bold text-primary group-hover:text-secondary leading-snug line-clamp-2 transition-colors"
                        >
                          {op.title}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
