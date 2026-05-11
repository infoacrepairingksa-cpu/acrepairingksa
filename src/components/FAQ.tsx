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
        <span className={cn(
          "text-lg font-heading font-black transition-all tracking-tight leading-tight",
          isOpen ? "text-secondary" : "text-primary group-hover:text-secondary"
        )}>
          {question}
        </span>
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
      question: "How fast can AC technician arrive in Riyadh?",
      answer: "We guarantee a 30-60 minute arrival time for all AC repair calls in Riyadh. Our technician fleet is stationed across all major districts including Malqa, Sahafa, and Olaya to ensure immediate response."
    },
    {
      question: "Do you offer emergency AC repair in Riyadh?",
      answer: "Yes, we provide 24/7 emergency AC repair services across Riyadh. Whether it's a complete system failure or a gas leak, our technicians are available even late at night and on weekends."
    },
    {
      question: "Is same-day AC service available in Riyadh?",
      answer: "Absolutely. We specialize in same-day AC cleaning, repair, and installation. If you book before 9 PM, we guarantee a technician will visit your home the same day."
    },
    {
      question: "What is included in your AC deep cleaning service?",
      answer: "Our premium Riyadh AC cleaning includes high-pressure coil flushing, drainage pipe clearing, filter sanitization, and antibacterial chemical spray. This process improves cooling efficiency and restores ice-cold performance instantly."
    },
    {
      question: "Do you provide a warranty on repairs and spare parts?",
      answer: "Yes, every technical job we complete in Riyadh comes with a comprehensive service warranty. We only use original manufacturer-approved genuine spare parts to ensure long-term durability and peace of mind."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
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
              href="https://wa.me/966501234567"
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
