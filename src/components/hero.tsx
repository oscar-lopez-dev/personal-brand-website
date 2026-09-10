"use client";

import React from "react";
import { useTranslation } from "@/i18n/context";
import { Avatar } from "@/components/avatar";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative max-w-5xl mx-auto px-6 pt-12 pb-20 sm:pt-16 sm:pb-24 flex flex-col items-center text-center"
    >
      {/* Avatar with Linear Executive frame and status pill */}
      <div className="mb-10">
        <Avatar
          alt={t.hero.avatarAlt}
          statusLabel={t.hero.status}
          priority
        />
      </div>

      {/* Canonical Role Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-accent mb-6 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
        <span>{t.hero.badge}</span>
      </div>

      {/* Oscar's Name */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
        {t.hero.name}
      </h1>

      {/* Positioning Headline */}
      <p className="text-xl sm:text-3xl font-bold tracking-tight text-zinc-100 mb-6 leading-snug max-w-2xl">
        <span>{t.hero.titleLine1}</span>{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
          {t.hero.titleLine2}
        </span>
      </p>

      {/* Narrative Paragraph */}
      <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
        {t.hero.description}
      </p>

      {/* Dual Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <a
          href="#projects"
          className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-accent hover:bg-cyan-400 text-black font-semibold text-sm transition duration-200 shadow-lg shadow-cyan-500/20 text-center"
        >
          {t.hero.ctaProjects}
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-surface hover:bg-zinc-800 text-zinc-100 font-medium text-sm border border-brand-border hover:border-zinc-700 transition duration-200 text-center"
        >
          {t.hero.ctaContact}
        </a>
      </div>
    </section>
  );
}
