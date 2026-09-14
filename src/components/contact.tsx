"use client";

import React from "react";
import { useTranslation } from "@/i18n/context";

export const CONTACT_EMAIL = "oscar.bcn.1991@gmail.com";
export const LINKEDIN_URL = "https://linkedin.com/in/oscarlopezdev";
export const GITHUB_URL = "https://github.com/oscar-lopez-dev";

function ExternalLinkArrow() {
  return (
    <svg
      className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 max-w-4xl mx-auto px-6 py-20 text-center border-t border-brand-border"
    >
      <div className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-brand-surface/80 to-brand-surface/30 border border-brand-border overflow-hidden">
        {/* Subtle decorative glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <p className="text-xs font-mono text-brand-accent uppercase tracking-widest mb-2">
            {t.contact.eyebrow}
          </p>

          <h2
            id="contact-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4"
          >
            {t.contact.title}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {t.contact.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            {/* Primary Action: Direct Mailto */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label={t.contact.emailAria}
              className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2 shadow-lg shadow-cyan-950/40 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{t.contact.emailButton}</span>
            </a>

            {/* Verified External Link: LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.linkedinAria}
              className="group px-5 py-2.5 rounded-lg bg-brand-surface hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm border border-brand-border hover:border-zinc-600 transition-all duration-200 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <svg
                className="w-4 h-4 text-cyan-400 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V10.13H5.06v8.37z" />
              </svg>
              <span>{t.contact.linkedinButton}</span>
              <ExternalLinkArrow />
            </a>

            {/* Verified External Link: GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.githubAria}
              className="group px-5 py-2.5 rounded-lg bg-brand-surface hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm border border-brand-border hover:border-zinc-600 transition-all duration-200 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <svg
                className="w-4 h-4 text-zinc-300 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>{t.contact.githubButton}</span>
              <ExternalLinkArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
