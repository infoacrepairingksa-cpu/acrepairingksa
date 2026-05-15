"use client";

import React from "react";

export const Logo = ({ className = "", light = false }: { className?: string, light?: boolean }) => {
  const primaryColor = light ? "#FFFFFF" : "#0F172A";
  const secondaryColor = "#0073E6";
  const textColor = light ? "text-white" : "text-primary";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Exact SVG Icon Replication from Image 1 */}
      <svg
        width="56"
        height="56"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Broken Circular Frame */}
        <path
          d="M25 85C15.6112 78.4116 10 67.8724 10 56C10 33.9086 27.9086 16 50 16C72.0914 16 90 33.9086 90 56C90 78.0914 72.0914 96 50 96C44.5 96 39.2 94.9 34.4 92.9"
          stroke={primaryColor}
          strokeWidth="6"
          strokeLinecap="round"
        />
        
        {/* Detailed Snowflake (Secondary Color) */}
        <g stroke={secondaryColor} strokeWidth="4.5" strokeLinecap="round">
          {/* Main vertical arm */}
          <path d="M50 30V82" />
          <path d="M42 40L50 48L58 40" />
          <path d="M42 65L50 57L58 65" />
          
          {/* Diagonal arm 1 */}
          <path d="M28 42L72 70" />
          <path d="M35 38L42 46" />
          <path d="M60 58L67 66" />
          
          {/* Diagonal arm 2 */}
          <path d="M72 42L28 70" />
          <path d="M65 38L58 46" />
          <path d="M40 58L33 66" />
        </g>

        {/* Professional Wrench (Primary Color) */}
        <g transform="rotate(-40 50 50)">
          {/* Handle */}
          <rect
            x="44"
            y="12"
            width="12"
            height="76"
            rx="2"
            fill={primaryColor}
          />
          {/* Top Wrench Head */}
          <path
            d="M50 15C58 15 64 10 64 2V0H36V2C36 10 42 15 50 15Z"
            fill={primaryColor}
          />
          <circle cx="50" cy="5" r="5" fill={light ? "#0F172A" : "#FFFFFF"} />
          
          {/* Bottom Wrench Head */}
          <path
            d="M50 85C42 85 36 90 36 98V100H64V98C64 90 58 85 50 85Z"
            fill={primaryColor}
          />
          <circle cx="50" cy="95" r="5" fill={light ? "#0F172A" : "#FFFFFF"} />
        </g>
      </svg>

      {/* Brand Text Stacked Exactly as Image 1 */}
      <div className="flex flex-col">
        <span className="font-heading font-black text-lg tracking-tight text-secondary leading-none uppercase">
          AC Repairing
        </span>
        <span className={`font-heading font-black text-4xl tracking-tighter ${textColor} leading-[0.8] uppercase mt-1`}>
          KSA
        </span>
        <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${light ? "text-white/40" : "text-primary/30"} mt-2`}>
          Serving Riyadh & Beyond
        </span>
      </div>
    </div>
  );
};
