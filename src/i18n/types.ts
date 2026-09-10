export type Locale = "en" | "es";

export interface TranslationDictionary {
  nav: {
    projects: string;
    trajectory: string;
    pillars: string;
    contact: string;
  };
  header: {
    title: string;
    role: string;
    logoAria: string;
    toggleLanguageAria: string;
  };
  hero: {
    badge: string;
    name: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
    avatarAlt: string;
    status: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    challengeLabel: string;
    architectureLabel: string;
    notesTitle: string;
    viewBreakdown: string;
    hideBreakdown: string;
    viewGithub: string;
    viewDemo: string;
  };
}
