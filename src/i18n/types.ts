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
  trajectory: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    bridgeTitle1: string;
    bridgeTech1: string;
    bridgeTitle2: string;
    bridgeTech2: string;
    bridgeTitle3: string;
    bridgeTech3: string;
    bridgeNote: string;
  };
  pillars: {
    eyebrow: string;
    title: string;
    pillar1Badge: string;
    pillar1Title: string;
    pillar1Description: string;
    pillar2Badge: string;
    pillar2Title: string;
    pillar2Description: string;
    pillar3Badge: string;
    pillar3Title: string;
    pillar3Description: string;
  };
}
