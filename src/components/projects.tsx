"use client";

import React, { useState } from "react";
import { useTranslation } from "@/i18n/context";
import { projects, PROJECT_TYPE_LABELS, type EngineeringProject } from "@/data/projects";

function ProjectCard({ project }: { project: EngineeringProject }) {
  const { locale, t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const panelId = `project-notes-${project.id}`;

  return (
    <article className="p-6 rounded-xl bg-brand-surface/60 border border-brand-border hover:border-zinc-700 transition duration-200 group">
      {/* Header: Localized Category & Type Badges, Title */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-500/10 text-brand-accent border border-cyan-500/20">
              {project.category[locale]}
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700/50">
              {PROJECT_TYPE_LABELS[locale][project.type]}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
            {project.title[locale]}
          </h3>
        </div>
      </div>

      {/* Two-column Problem & Architecture Grid */}
      <div className="grid sm:grid-cols-2 gap-4 text-sm mb-4">
        <div className="bg-zinc-950/60 p-4 rounded-lg border border-brand-border/60">
          <span className="block text-xs font-mono text-zinc-500 font-semibold mb-1.5 tracking-wider">
            {t.projects.challengeLabel}
          </span>
          <p className="text-zinc-300 text-xs leading-relaxed">
            {project.industryProblem[locale]}
          </p>
        </div>

        <div className="bg-zinc-950/60 p-4 rounded-lg border border-brand-border/60">
          <span className="block text-xs font-mono text-brand-accent font-semibold mb-1.5 tracking-wider">
            {t.projects.architectureLabel}
          </span>
          <p className="text-zinc-300 text-xs leading-relaxed">
            {project.architectureDetails[locale]}
          </p>
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/40"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer Actions: Breakdown Toggle & External Links */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-brand-border/60 text-xs font-mono text-zinc-400">
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-brand-accent hover:text-cyan-300 hover:underline flex items-center gap-1 font-semibold transition"
        >
          <span>{isExpanded ? t.projects.hideBreakdown : t.projects.viewBreakdown}</span>
        </button>

        <div className="flex items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition inline-flex items-center gap-1"
          >
            {t.projects.viewGithub} ↗
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition inline-flex items-center gap-1"
            >
              {t.projects.viewDemo} ↗
            </a>
          )}
        </div>
      </div>

      {/* Accessible Expandable Technical Architecture Breakdown */}
      <div
        id={panelId}
        hidden={!isExpanded}
        className={
          isExpanded
            ? "mt-4 pt-4 border-t border-brand-border text-xs text-zinc-400 font-mono bg-black/40 p-4 rounded-lg"
            : "hidden"
        }
      >
        <p className="text-zinc-200 mb-2 font-bold">{t.projects.notesTitle}</p>
        <ul className="space-y-1.5 list-disc list-inside text-zinc-300">
          {project.implementationNotes[locale].map((note, index) => (
            <li key={index} className="leading-relaxed">
              {note}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="scroll-mt-20 max-w-5xl mx-auto px-6 py-16 border-t border-brand-border"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-10">
        <div>
          <p className="text-xs font-mono text-brand-accent uppercase tracking-widest mb-1">
            {t.projects.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {t.projects.title}
          </h2>
        </div>
        <span className="text-xs text-zinc-500 font-mono hidden sm:inline-block">
          {t.projects.subtitle}
        </span>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
