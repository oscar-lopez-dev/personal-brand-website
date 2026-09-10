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

  // Normalize Next.js static asset path if "/public/avatar.jpg" is passed
  const resolvedSrc = src?.startsWith("/public/") ? src.replace("/public", "") : src;
  const showFallback = hasError || !resolvedSrc;

  return (
    <div
      data-testid="avatar-container"
      className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-zinc-800/40 shadow-xl shadow-cyan-500/5 ${className}`}
    >
      {/* Ambient background glow */}
      <div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 blur-lg opacity-50 -z-10"
        aria-hidden="true"
      />

      {!showFallback ? (
        <Image
          src={resolvedSrc}
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
          {/* High-fidelity geometric SVG avatar */}
          <svg
            className="w-full h-full"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="avatar-grid"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 16 0 L 0 0 0 16"
                  fill="none"
                  stroke="#27272a"
                  strokeWidth="0.75"
                />
              </pattern>
              <linearGradient
                id="geom-gradient-primary"
                x1="20"
                y1="20"
                x2="140"
                y2="140"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="0.5" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="1" stopColor="#06b6d4" stopOpacity="0.2" />
              </linearGradient>
              <radialGradient
                id="core-glow"
                cx="80"
                cy="80"
                r="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#06b6d4" stopOpacity="0.25" />
                <stop offset="0.7" stopColor="#8b5cf6" stopOpacity="0.1" />
                <stop offset="1" stopColor="#09090b" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Coordinate grid background */}
            <rect width="160" height="160" fill="url(#avatar-grid)" />
            <circle cx="80" cy="80" r="56" fill="url(#core-glow)" />

            {/* Concentric geometric tech rings */}
            <circle
              cx="80"
              cy="80"
              r="62"
              stroke="#27272a"
              strokeWidth="1"
            />
            <circle
              cx="80"
              cy="80"
              r="48"
              stroke="#06b6d4"
              strokeOpacity="0.3"
              strokeDasharray="4 4"
            />
            <circle
              cx="80"
              cy="80"
              r="34"
              stroke="#8b5cf6"
              strokeOpacity="0.4"
            />

            {/* Faceted geometric polygon architecture */}
            <polygon
              points="80,26 126,53 126,107 80,134 34,107 34,53"
              stroke="url(#geom-gradient-primary)"
              strokeWidth="1.5"
              fill="rgba(6, 182, 212, 0.04)"
            />
            <polygon
              points="80,44 111,62 111,98 80,116 49,98 49,62"
              stroke="#06b6d4"
              strokeWidth="1.2"
              strokeOpacity="0.6"
              fill="rgba(139, 92, 246, 0.05)"
            />
            <polygon
              points="80,58 98,70 98,90 80,102 62,90 62,70"
              stroke="#8b5cf6"
              strokeWidth="1"
              strokeOpacity="0.8"
              fill="rgba(6, 182, 212, 0.1)"
            />

            {/* Central energy nexus */}
            <circle cx="80" cy="80" r="6" fill="#06b6d4" />
            <circle cx="80" cy="80" r="2.5" fill="#ffffff" />

            {/* Precision corner crosshairs */}
            <path
              d="M 12 20 L 12 12 L 20 12"
              stroke="#06b6d4"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 148 20 L 148 12 L 140 12"
              stroke="#8b5cf6"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 12 140 L 12 148 L 20 148"
              stroke="#8b5cf6"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M 148 140 L 148 148 L 140 148"
              stroke="#06b6d4"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
