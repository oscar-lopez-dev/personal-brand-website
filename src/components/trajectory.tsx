"use client";

import React from "react";
import { useTranslation } from "@/i18n/context";

export function Trajectory() {
  const { t } = useTranslation();

  const bridgeStages = [
    {
      title: t.trajectory.bridgeTitle1,
      tech: t.trajectory.bridgeTech1,
      accentClass: "text-brand-accent",
    },
    {
      title: t.trajectory.bridgeTitle2,
      tech: t.trajectory.bridgeTech2,
      accentClass: "text-brand-accent",
    },
    {
      title: t.trajectory.bridgeTitle3,
      tech: t.trajectory.bridgeTech3,
      accentClass: "text-brand-purple",
    },
  ];

  return (
    <section
      id="trajectory"
      aria-labelledby="trajectory-title"
      className="scroll-mt-20 max-w-5xl mx-auto px-6 py-16 border-t border-brand-border"
    >
      <p className="text-xs font-mono text-brand-accent uppercase tracking-widest mb-1">
        {t.trajectory.eyebrow}
      </p>
      <h2
        id="trajectory-title"
        className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-8"
      >
        {t.trajectory.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Narrative Journey: .NET Enterprise Backend -> Modern TypeScript/React -> Applied AI */}
        <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
          <p>{t.trajectory.paragraph1}</p>
          <p>{t.trajectory.paragraph2}</p>
          <p>{t.trajectory.paragraph3}</p>
        </div>

        {/* Visual Skills Bridge / Timeline */}
        <div className="bg-brand-surface/60 p-6 rounded-xl border border-brand-border space-y-4 font-mono text-xs shadow-lg">
          <ol className="space-y-3">
            {bridgeStages.map((stage) => (
              <li
                key={stage.title}
                className="flex items-center justify-between pb-3 border-b border-brand-border/60"
              >
                <span className="text-zinc-300 font-bold">{stage.title}</span>
                <span className={stage.accentClass}>{stage.tech}</span>
              </li>
            ))}
          </ol>
          <div className="pt-2 text-zinc-500 text-[11px] leading-relaxed">
            {t.trajectory.bridgeNote}
          </div>
        </div>
      </div>
    </section>
  );
}
