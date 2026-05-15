"use client";

import React from "react";

export const Logo = ({ className = "", light = false }: { className?: string, light?: boolean }) => {
  const primaryColor = light ? "#FFFFFF" : "#0F172A";
  const secondaryColor = "#0073E6";
  const textColor = light ? "text-white" : "text-primary";

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {/* Refined Premium HVAC Icon */}
      <div className="relative shrink-0">
        <svg
          width="52"
          height="52"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main AC Unit Silhouette - Clean & Robust */}
          <rect
            x="10"
            y="30"
            width="80"
            height="40"
            rx="8"
            stroke={primaryColor}
            strokeWidth="8"
          />
          {/* Internal Vents */}
          <path
            d="M25 45H75M25 55H75"
            stroke={primaryColor}
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Integrated Snowflake - High Visibility */}
          <circle cx="50" cy="50" r="18" fill={light ? "#0F172A" : "#FFFFFF"} stroke={secondaryColor} strokeWidth="2" />
          <g stroke={secondaryColor} strokeWidth="4" strokeLinecap="round">
            <path d="M50 38V62M38 50H62" />
            <path d="M42 42L58 58M58 42L42 58" />
          </g>
          {/* Airflow Indicators */}
          <path
             d="M15 78C25 82 35 82 45 78M55 78C65 82 75 82 85 78"
             stroke={secondaryColor}
             strokeWidth="3"
             strokeLinecap="round"
             opacity="0.6"
          />
        </svg>
      </div>

      {/* Optimized Typography Hierarchy */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-3">
          <span className={`font-heading font-black text-2xl lg:text-3xl tracking-tighter ${textColor} leading-none uppercase`}>
            AC Repairing
          </span>
          {/* KSA as a Professional Badge/Suffix */}
          <div className="bg-secondary px-2.5 py-1 rounded-md shadow-sm">
            <span className="text-white font-heading font-black text-xs lg:text-sm tracking-widest uppercase">
              KSA
            </span>
          </div>
        </div>
        
        {/* Refined Tagline with Tighter Spacing */}
        <span className={`text-[10px] font-bold uppercase tracking-[0.35em] ${light ? "text-white/60" : "text-primary/50"} leading-none mt-1.5`}>
          Serving Riyadh & Beyond
        </span>
      </div>
    </div>
  );
};
