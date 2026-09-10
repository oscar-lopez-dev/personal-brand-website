"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface AvatarProps {
  src?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
}

export function Avatar({
  src = "/avatar.jpg",
  alt = "Oscar López Martínez",
  priority = false,
  className = "",
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);
  const showFallback = hasError || !src;

  return (
    <div
      className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-zinc-800/40 shadow-xl shadow-cyan-500/5 ${className}`}
    >
      {/* Ambient background glow */}
      <div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 blur-lg opacity-50 -z-10"
        aria-hidden="true"
      />

      {!showFallback ? (
        <Image
          src={src}
          alt={alt}
          width={160}
          height={160}
          priority={priority}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover rounded-2xl bg-brand-surface"
        />
      ) : (
        <div
          data-testid="geometric-avatar-fallback"
          role="img"
          aria-label={alt}
          className="w-full h-full rounded-2xl bg-brand-surface/90 border border-brand-border/80 overflow-hidden relative flex items-center justify-center"
        >
          {/* High-fidelity geometric background grid and tech lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="avatar-grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="#27272a"
                  strokeWidth="1"
                />
              </pattern>
              <linearGradient
                id="avatar-grad"
                x1="0"
                y1="0"
                x2="160"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="0.5" stopColor="#8b5cf6" stopOpacity="0.3" />
                <stop offset="1" stopColor="#09090b" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <rect width="160" height="160" fill="url(#avatar-grid)" />
            <polygon
              points="80,15 145,52 145,127 80,145 15,127 15,52"
              stroke="url(#avatar-grad)"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="80"
              cy="80"
              r="38"
              stroke="#06b6d4"
              strokeOpacity="0.3"
              strokeDasharray="3 3"
            />
            {/* Corner crosshairs */}
            <path
              d="M 8 16 L 8 8 L 16 8"
              stroke="#06b6d4"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 152 16 L 152 8 L 144 8"
              stroke="#8b5cf6"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 8 144 L 8 152 L 16 152"
              stroke="#8b5cf6"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 152 144 L 152 152 L 144 152"
              stroke="#06b6d4"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          {/* Monogram and indicator */}
          <div className="relative z-10 flex flex-col items-center justify-center select-none">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-brand-surface rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  OL
                </span>
              </div>
            </div>
            <span className="mt-1.5 text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
              DEV // AI
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
