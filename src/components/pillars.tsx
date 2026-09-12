"use client";

import React from "react";
import { useTranslation } from "@/i18n/context";

export function Pillars() {
  const { t } = useTranslation();

  const pillarItems = [
    {
      badge: t.pillars.pillar1Badge,
      title: t.pillars.pillar1Title,
      description: t.pillars.pillar1Description,
    },
    {
      badge: t.pillars.pillar2Badge,
      title: t.pillars.pillar2Title,
      description: t.pillars.pillar2Description,
    },
    {
      badge: t.pillars.pillar3Badge,
      title: t.pillars.pillar3Title,
      description: t.pillars.pillar3Description,
    },
  ];

  return (
    <section
      id="pillars"
      aria-labelledby="pillars-title"
      className="scroll-mt-20 max-w-5xl mx-auto px-6 py-16 border-t border-brand-border"
    >
      <p className="text-xs font-mono text-brand-accent uppercase tracking-widest mb-1">
        {t.pillars.eyebrow}
      </p>
      <h2
        id="pillars-title"
        className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8"
      >
        {t.pillars.title}
      </h2>

      <div className="grid sm:grid-cols-3 gap-6">
        {pillarItems.map((pillar) => (
          <article
            key={pillar.badge}
            className="p-6 rounded-xl bg-brand-surface/60 border border-brand-border hover:border-zinc-700 transition duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="w-8 h-8 rounded-lg bg-zinc-800 text-brand-accent border border-brand-border flex items-center justify-center font-bold mb-4 font-mono text-sm group-hover:border-brand-accent/50 transition">
                {pillar.badge}
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                {pillar.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
