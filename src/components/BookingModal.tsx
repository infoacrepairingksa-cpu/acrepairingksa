"use client";

import React, { useEffect, useState } from "react";
import { X, CheckCircle2, Phone, Calendar, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

const BookingModal = ({ isOpen, onClose, serviceName = "General Maintenance" }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    device: "Split AC",
    message: ""
  });

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setStep(1); // Reset step on close
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2); // Show success state
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-[32px] shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X size={24} className="text-gray-400" />
            </button>

            {step === 1 ? (
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-action/10 flex items-center justify-center text-action">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-primary tracking-tight">Book a Technician</h2>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Request Service: {serviceName}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: Ahmed Al-Fahad"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-secondary transition-all rounded-xl p-4 text-sm font-bold text-primary outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Phone Number</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input 
                        required
                        type="tel" 
                        placeholder="+966 50 XXX XXXX"
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-secondary transition-all rounded-xl p-4 pl-12 text-sm font-bold text-primary outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 ml-1">Unit Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Split AC", "Central AC", "Window AC", "Other"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({...formData, device: type})}
                          className={cn(
                            "py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all border-2",
                            formData.device === type 
                              ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20" 
                              : "bg-white text-primary/40 border-gray-100 hover:border-gray-200"
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-action hover:bg-action-hover text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all shadow-xl shadow-action/20 flex items-center justify-center gap-3 active:scale-95 translate-y-2"
                  >
                    Submit Request <ArrowRight size={18} />
                  </button>
                </form>

                <p className="mt-8 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  Secure & Confidential • 24/7 Response Guaranteed
                </p>
              </div>
            ) : (
              <div className="p-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-action/10 rounded-full flex items-center justify-center text-action mx-auto mb-8 animate-bounce">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-black text-primary tracking-tight mb-4">Request Received!</h2>
                <p className="text-gray-500 font-medium leading-relaxed mb-10 text-lg">
                  We have received your booking. A technician from our **Riyadh fleet** 
                  will call you within **15-30 minutes** to confirm details.
                </p>
                <button 
                  onClick={onClose}
                  className="bg-primary text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all hover:bg-secondary active:scale-95 shadow-xl shadow-primary/10"
                >
                  Back to Website
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
