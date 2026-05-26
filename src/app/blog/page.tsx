"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { blogPosts } from "@/data/blog-posts";
import { BookOpen, Calendar, Clock, ArrowRight, ShieldCheck, Star } from "lucide-react";
import Schema, { generateBreadcrumbSchema } from "@/components/Schema";

export default function BlogIndexPage() {
  
  const handleBookNow = (service?: any) => {
    const sName = service && typeof service === 'string' ? service : "AC Repair";
    const text = `Hello, I need ${sName} services. Can you help?`;
    window.open(`https://wa.me/966590132864?text=${encodeURIComponent(text)}`, '_blank');
  };

  const postsArray = Object.values(blogPosts);

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Schema 
        type="BreadcrumbList" 
        data={generateBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Blog", item: "/blog" }
        ])} 
      />
      <Navbar onBookNow={handleBookNow} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,115,230,0.1),transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="bg-secondary/20 text-secondary border border-secondary/30 px-5 py-2 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 inline-block">
            Expert Insights & Advice
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight mb-6">
            AC Repairing KSA <span className="text-secondary">Blog Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
            Read professional guides, troubleshooting tips, and energy-saving advice tailored for Riyadh's extreme climate.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsArray.map((post) => (
              <article 
                key={post.slug} 
                className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-primary/50 font-bold mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-secondary" />
                      {post.publishDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-secondary" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-heading font-black text-primary leading-tight mb-4 group-hover:text-secondary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-primary/65 font-medium leading-relaxed mb-6 flex-1">
                    {post.metaDescription}
                  </p>

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-secondary font-black text-sm uppercase tracking-wider flex items-center gap-2 mt-auto group-hover:gap-3 transition-all"
                  >
                    Read Full Article <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-primary rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <span className="bg-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-4 inline-block">
                Emergency Support
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black leading-tight tracking-tight mb-4">
                AC Broken Down in Riyadh?
              </h2>
              <p className="text-white/70 mb-8 font-medium leading-relaxed">
                Our certified technicians are stationed across Riyadh (Al Olaya, Al Malqa, Hittin, etc.) and are ready to restore your cooling today. Get guaranteed, fast, transparent HVAC services.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="tel:+966590132864" 
                  className="w-full sm:w-auto px-8 py-4 bg-secondary hover:bg-blue-600 text-white rounded-xl font-black text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3"
                >
                  Call Now
                </a>
                <button 
                  onClick={handleBookNow} 
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-black text-sm tracking-widest uppercase transition-all"
                >
                  Book Service Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
      
    </main>
  );
}
