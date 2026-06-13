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
      question: "How much does AC repair cost in Saudi Arabia?",
      answer: "The cost depends on the specific issue, such as a capacitor replacement, gas refill, or compressor repair. We offer transparent pricing with an upfront diagnostic quote before any work begins."
    },
    {
      question: "Do you offer same-day AC repair?",
      answer: "Yes, we prioritize emergency cooling failures. Our technicians are stationed across major cities to provide rapid, same-day HVAC repair services to restore your comfort quickly."
    },
    {
      question: "Which AC brands do you repair?",
      answer: "We repair and service all major international brands, including Daikin, Carrier, LG, Samsung, Midea, Gree, Hitachi, Panasonic, TCL, and York."
    },
    {
      question: "Do you provide AC gas refill services?",
      answer: "Yes, we provide professional refrigerant gas refilling (R410A and R22). We always perform a thorough leak test first to ensure your system retains the new gas."
    },
    {
      question: "How often should AC units be cleaned?",
      answer: "In the dusty and hot climate of Saudi Arabia, we highly recommend deep chemical cleaning of the evaporator and condenser coils every 4 to 6 months to maintain optimal airflow and efficiency."
    },
    {
      question: "Do you serve Jeddah and Dammam?",
      answer: "Yes, our service network covers all of Saudi Arabia. We have dedicated technician fleets in Riyadh, Jeddah, Dammam, Al Khobar, Makkah, Madinah, and other major regions."
    },
    {
      question: "Do you provide emergency AC repair?",
      answer: "Absolutely. We offer 24/7 emergency dispatch for sudden breakdowns, complete power trips, or severe water leakage issues across KSA."
    },
    {
      question: "Do you offer home maintenance services?",
      answer: "Yes, alongside our core AC services, we provide comprehensive plumbing and home maintenance solutions to keep your entire property in perfect condition."
    },
    {
      question: "How can I book an AC technician?",
      answer: "Booking is incredibly easy. Simply click the WhatsApp button on our website, send us a quick message detailing your issue, and we will dispatch a technician to your location within minutes."
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
