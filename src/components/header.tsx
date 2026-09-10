"use client";

import React from "react";
import { useTranslation } from "@/i18n/context";

export function Header() {
  const { locale, toggleLocale, t } = useTranslation();

  return (
    <header className="sticky top-0 z-40 bg-brand-background/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Monogram, Brand & Role */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#hero"
            className="flex items-center gap-3 group shrink-0"
            aria-label={t.header.logoAria}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-mono font-bold text-black text-sm transition group-hover:opacity-90 shrink-0">
              OL
            </div>
            <span className="font-semibold tracking-tight text-white group-hover:text-brand-accent transition whitespace-nowrap">
              {t.header.title}
            </span>
          </a>
          <span className="hidden lg:inline-block text-xs font-mono text-zinc-500 border-l border-brand-border pl-3 whitespace-nowrap">
            {t.header.role}
          </span>
        </div>

        {/* Desktop Navigation & Actions */}
        <div className="flex items-center gap-4 lg:gap-6 shrink-0">
          <nav
            className="hidden md:flex items-center gap-4 lg:gap-6 text-sm text-zinc-400 shrink-0"
            aria-label="Main Navigation"
          >
            <a
              href="#projects"
              className="hover:text-zinc-100 transition whitespace-nowrap"
            >
              {t.nav.projects}
            </a>
            <a
              href="#trajectory"
              className="hover:text-zinc-100 transition whitespace-nowrap"
            >
              {t.nav.trajectory}
            </a>
            <a
              href="#pillars"
              className="hover:text-zinc-100 transition whitespace-nowrap"
            >
              {t.nav.pillars}
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-md bg-brand-surface hover:bg-zinc-800 text-zinc-100 font-medium text-xs border border-brand-border hover:border-brand-accent/50 transition whitespace-nowrap shrink-0"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Interactive [EN | ES] Language Switcher */}
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={t.header.toggleLanguageAria}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border text-xs font-mono transition hover:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-brand-accent whitespace-nowrap shrink-0"
          >
            {(["en", "es"] as const).map((lang, idx) => (
              <React.Fragment key={lang}>
                {idx > 0 && <span className="text-zinc-600 select-none">|</span>}
                <span
                  className={
                    locale === lang
                      ? "text-brand-accent font-bold"
                      : "text-zinc-500 hover:text-zinc-300 transition"
                  }
                >
                  {lang.toUpperCase()}
                </span>
              </React.Fragment>
            ))}
          </button>
        </div>
      </div>
    </header>
  );
}
