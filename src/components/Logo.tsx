"use client";

import React from "react";

export const Logo = ({ className = "", light = false }: { className?: string, light?: boolean }) => {
  const primaryColor = light ? "#FFFFFF" : "#0F172A";
  const secondaryColor = "#0073E6";
  const textColor = light ? "text-white" : "text-primary";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Icon part mimicking Image 2 */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Snowflake Base (Bright Blue / Secondary) */}
        <path
          d="M50 10V90M10 50H90M22 22L78 78M78 22L22 78"
          stroke={secondaryColor}
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Wrench Diagonal (Primary Color) */}
        <g transform="rotate(-45 50 50)">
          <rect
            x="44"
            y="20"
            width="12"
            height="60"
            rx="2"
            fill={primaryColor}
          />
          {/* Wrench Head Top */}
          <path
            d="M50 20C58 20 62 14 62 8V5H38V8C38 14 42 20 50 20Z"
            fill={primaryColor}
          />
          {/* Wrench Head Bottom */}
          <path
            d="M50 80C42 80 38 86 38 92V95H62V92C62 86 58 80 50 80Z"
            fill={primaryColor}
          />
          {/* Wrench Cutout (Transparent Hole) */}
          <circle cx="50" cy="12" r="6" fill="white" className={light ? "fill-primary" : "fill-background"} style={{ fill: light ? "#0F172A" : "#FAFAFA" }} />
        </g>
      </svg>

      <div className="flex flex-col -gap-1">
        <div className="flex items-center">
          <span className="font-heading font-black text-xl lg:text-2xl tracking-tighter text-secondary leading-none uppercase">
            AC Repairing
          </span>
          <span className={`font-heading font-black text-xl lg:text-2xl tracking-tighter ${textColor} leading-none ml-1.5 uppercase`}>
            KSA
          </span>
        </div>
        <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${light ? "text-white/40" : "text-primary/30"} mt-1`}>
          Serving Riyadh & Beyond
        </span>
      </div>
    </div>
  );
};
