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
      question: "Why is my AC not cooling?",
      answer: "AC not cooling is usually caused by dirty air filters, low refrigerant gas (R410A/R22), a faulty compressor, or blocked condenser coils. Our technicians can diagnose the exact issue within 30 minutes in Riyadh."
    },
    {
      question: "How often should AC be serviced in Riyadh?",
      answer: "Due to Riyadh's high dust levels, we recommend a professional AC service every 3 to 6 months. For high-usage commercial units, quarterly maintenance ensures optimal performance and lower electricity bills."
    },
    {
      question: "How long does AC repair take?",
      answer: "Most AC repairs, such as capacitor replacement or leak fixing, are completed within 1 to 2 hours. Complex jobs like compressor replacement may take 3 to 4 hours."
    },
    {
      question: "Do you offer emergency AC repair in Riyadh?",
      answer: "Yes, we provide 24/7 emergency AC repair across all Riyadh districts. We understand that cooling failures in summer are urgent, and guarantee a 30-60 minute arrival."
    },
    {
      question: "What is included in AC deep cleaning?",
      answer: "Our deep AC cleaning includes evaporator coil chemical wash, condenser unit high-pressure cleaning, drain line flushing, filter sanitization, and antibacterial treatment to remove mold and odor."
    },
    {
      question: "How much does AC gas refill cost?",
      answer: "AC gas refill costs depend on the type of refrigerant (R410A or R22) and the amount needed. We perform a leak test before refilling to ensure you don't lose gas again."
    },
    {
      question: "Why is my AC leaking water inside?",
      answer: "Indoor water leaks are typically caused by a clogged condensate drain line, frozen evaporator coils (due to low gas or dirty filters), or a cracked drain pan. We clear the blockage and flush the system."
    },
    {
      question: "Do you fix central AC systems?",
      answer: "Yes, our certified HVAC technicians are experts in central AC systems, VRF units, split ACs, and package units for both residential villas and commercial buildings."
    },
    {
      question: "Why is my AC making a loud noise?",
      answer: "Clicking noises often indicate electrical issues or a failing capacitor. Grinding or squealing sounds usually point to blower motor bearings or fan belt problems. Immediate inspection is recommended."
    },
    {
      question: "Do you provide a warranty on repairs?",
      answer: "Yes, all our AC repair services come with a 90-day service warranty. We use genuine manufacturer spare parts to guarantee durability."
    },
    {
      question: "Can I clean my AC filter myself?",
      answer: "Yes, you can clean the basic mesh filter with water every 2 weeks. However, internal evaporator coils and blower fans require professional chemical cleaning to prevent mold."
    },
    {
      question: "Which areas in Riyadh do you serve?",
      answer: "We cover all major Riyadh neighborhoods including Al Olaya, Al Malaz, Al Yasmin, Al Narjis, Hittin, Al Nakheel, Al Sulaymaniyah, and surrounding districts."
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
              href="https://wa.me/966590132864?text=Hello,%20I%20need%20home%20maintenance%20and%20AC%20repair%20services.%20Can%20you%20help?"
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
