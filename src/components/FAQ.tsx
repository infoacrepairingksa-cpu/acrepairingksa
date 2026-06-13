"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b last:border-0 border-gray-100 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none group gap-6"
      >
        <h3 className={cn(
          "text-lg font-heading font-black transition-all tracking-tight leading-tight",
          isOpen ? "text-secondary" : "text-primary group-hover:text-secondary"
        )}>
          {question}
        </h3>
        <div className={cn(
          "flex items-center justify-center w-10 h-10 rounded-xl transition-all shrink-0 shadow-sm",
          isOpen ? "bg-secondary text-white shadow-secondary/20" : "bg-primary/5 text-primary group-hover:bg-primary/10"
        )}>
          {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-2">
              <p className="text-gray-500 leading-relaxed max-w-4xl font-medium text-base">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const items = [
    {
      question: "How fast can you repair my AC in Saudi Arabia?",
      answer: "We offer 30-minute emergency dispatch in major cities like Riyadh, Jeddah, Dammam, and Al Khobar. Our local teams are stationed to ensure rapid response times."
    },
    {
      question: "Do you provide a warranty on AC repairs?",
      answer: "Yes, all our HVAC repairs and installations come with a solid 90-day guarantee on parts and labor. We stand behind the quality of our work."
    },
    {
      question: "How often should I service my AC in KSA?",
      answer: "Due to the high heat and dust across the Kingdom, we recommend deep cleaning and maintenance every 4 to 6 months to prevent unexpected breakdowns and high electricity bills."
    },
    {
      question: "Why is my AC running but not cooling?",
      answer: "This is commonly caused by low refrigerant gas, dirty condenser coils, blocked air filters, or a failing compressor. A diagnostic check can identify the exact cause."
    },
    {
      question: "Do you service central AC units or just split ACs?",
      answer: "Our teams are fully equipped to handle all cooling systems: Wall-mounted Splits, Window ACs, Central ducted systems, VRF, and commercial Package units."
    },
    {
      question: "How much does an AC gas refill cost?",
      answer: "Prices vary based on unit size and gas type (R410A vs R22). We provide transparent, upfront quotes before starting, and always perform a leak test prior to refilling."
    },
    {
      question: "Why is my indoor AC unit leaking water?",
      answer: "A clogged drain line, a cracked drip pan, or a frozen evaporator coil (usually due to low gas) typically causes indoor water leakage. We quickly clear the blockage."
    },
    {
      question: "Are your technicians certified?",
      answer: "Absolutely. Every technician undergoes rigorous training, background checks, and certification processes before entering your home or business."
    },
    {
      question: "Do you use genuine replacement parts?",
      answer: "Yes, we source original OEM parts for Daikin, LG, Carrier, Gree, Samsung, and all major international brands to ensure optimal performance and longevity."
    },
    {
      question: "Do you offer commercial HVAC maintenance contracts?",
      answer: "Yes, we provide 24/7 facility management and preventive maintenance contracts for offices, hotels, hospitals, and retail stores across Saudi Arabia."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-20">
          
          {/* Section Header */}
          <div className="text-center flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-2">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-[36px] font-heading font-black text-primary leading-tight tracking-tighter">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white border-2 border-primary/5 rounded-[48px] p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(31,32,97,0.05)]">
            {items.map((item, idx) => (
              <FAQItem key={idx} {...item} index={idx} />
            ))}
          </div>

          {/* Support CTA */}
          <div className="mt-4 p-12 bg-primary rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-primary/20 relative overflow-hidden group">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-700">
               <MessageSquare size={200} />
            </div>

            <div className="flex flex-col gap-3 relative z-10 text-center md:text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Direct Technical Assistance</span>
              <h3 className="text-3xl font-heading font-black tracking-tight leading-tight">Couldn't find the answer? <br /> Speak to our Engineer.</h3>
            </div>
            
            <a
              href="https://wa.me/966510942150?text=Hello,%20I%20need%20home%20maintenance%20and%20AC%20repair%20services.%20Can%20you%20help?"
              className="relative z-10 w-full md:w-auto inline-flex items-center justify-center gap-4 bg-secondary hover:bg-white hover:text-primary text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:shadow-xl hover:-translate-y-1 group"
            >
              WhatsApp Support <MessageSquare size={18} fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
