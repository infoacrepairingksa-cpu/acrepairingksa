"use client";

import React from "react";

export const Logo = ({ className = "", light = false }: { className?: string, light?: boolean }) => {
  const primaryColor = light ? "#FFFFFF" : "#0F172A";
  const secondaryColor = "#0073E6";
  const textColor = light ? "text-white" : "text-primary";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Exact Icon Replication from the provided Mockup */}
      <svg
        width="60"
        height="60"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Broken Circular Frame (Primary Color) */}
        <path
          d="M80 20C86.3 28.5 90 38.8 90 50C90 72.1 72.1 90 50 90C38.8 90 28.5 86.3 20 80M20 20C13.7 28.5 10 38.8 10 50C10 72.1 27.9 90 50 90"
          stroke={primaryColor}
          strokeWidth="6"
          strokeLinecap="round"
        />
        
        {/* Detailed Snowflake (Secondary Color) */}
        <g stroke={secondaryColor} strokeWidth="4" strokeLinecap="round">
          {/* Vertical */}
          <path d="M50 25V75" />
          <path d="M44 32L50 38L56 32" />
          <path d="M44 68L50 62L56 68" />
          
          {/* Horizontal */}
          <path d="M25 50H75" />
          <path d="M32 44L38 50L32 56" />
          <path d="M68 44L62 50L68 56" />
          
          {/* Diagonal 1 */}
          <path d="M32 32L68 68" />
          <path d="M35 42L42 42L42 35" />
          <path d="M65 58L58 58L58 65" />
          
          {/* Diagonal 2 */}
          <path d="M68 32L32 68" />
          <path d="M58 35L58 42L65 42" />
          <path d="M42 65L42 58L35 58" />
        </g>

        {/* Diagonal Wrench (Primary Color) */}
        <g transform="rotate(-45 50 50)">
          <rect
            x="44"
            y="15"
            width="12"
            height="70"
            rx="2"
            fill={primaryColor}
          />
          {/* Wrench Head Top */}
          <path
            d="M50 18C58 18 64 12 64 4V0H36V4C36 12 42 18 50 18Z"
            fill={primaryColor}
          />
          <circle cx="50" cy="5" r="5" fill={light ? "#0F172A" : "#FFFFFF"} />
          
          {/* Wrench Head Bottom */}
          <path
            d="M50 82C42 82 36 88 36 96V100H64V96C64 88 58 82 50 82Z"
            fill={primaryColor}
          />
        </g>
      </svg>

      {/* Typography Stack: Exact Mockup Alignment */}
      <div className="flex flex-col -gap-1">
        <span className={`font-heading font-black text-[22px] tracking-tight ${primaryColor === "#FFFFFF" ? "text-white" : "text-[#1F2061]"} leading-tight uppercase`}>
          AC Repairing
        </span>
        <span className={`font-heading font-black text-[42px] tracking-tighter ${primaryColor === "#FFFFFF" ? "text-white" : "text-[#1F2061]"} leading-[0.8] uppercase`}>
          KSA
        </span>
        <span className={`text-[10px] font-bold uppercase tracking-[0.25em] ${light ? "text-white/50" : "text-[#1F2061]/40"} mt-2`}>
          Serving Riyadh & Beyond
        </span>
      </div>
    </div>
  );
};
