import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import React from "react";
import { I18nProvider } from "@/i18n/context";
import { Hero } from "@/components/hero";

describe("Hero Component (Seam 2)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  function renderHero(locale?: "en" | "es") {
    return render(
      <I18nProvider initialLocale={locale}>
        <Hero />
      </I18nProvider>
    );
  }

  it("renders Oscar's name, canonical role badge, positioning headline, narrative paragraph, and avatar", () => {
    renderHero("en");

    // Oscar's name in primary heading
    const heading = screen.getByRole("heading", { level: 1, name: /oscar lópez martínez/i });
    expect(heading).toBeInTheDocument();

    // Canonical role badge
    expect(screen.getByText("Senior Full-Stack AI Engineer")).toBeInTheDocument();

    // Positioning headline
    expect(screen.getByText("Robust enterprise foundations.")).toBeInTheDocument();
    expect(screen.getByText("High-impact AI solutions.")).toBeInTheDocument();

    // Narrative paragraph
    expect(
      screen.getByText(/Senior software engineer with proven backend architecture experience/i)
    ).toBeInTheDocument();

    // Avatar component present with status pill
    expect(screen.getByRole("img", { name: /oscar lópez martínez/i })).toBeInTheDocument();
    expect(screen.getByText("Available for AI Engineering")).toBeInTheDocument();
  });

  it("renders responsive dual call-to-action buttons with targets #projects and #contact", () => {
    renderHero("en");

    const projectsCta = screen.getByRole("link", { name: "Explore Projects" });
    expect(projectsCta).toBeInTheDocument();
    expect(projectsCta).toHaveAttribute("href", "#projects");

    const contactCta = screen.getByRole("link", { name: "Get in Touch" });
    expect(contactCta).toBeInTheDocument();
    expect(contactCta).toHaveAttribute("href", "#contact");
  });

  it("renders all Hero copy in Spanish when locale is es", () => {
    renderHero("es");

    // Spanish headline
    expect(screen.getByText("Bases enterprise robustas.")).toBeInTheDocument();
    expect(screen.getByText("Soluciones con IA de alto impacto.")).toBeInTheDocument();

    // Spanish narrative
    expect(
      screen.getByText(/Ingeniero de software sénior con experiencia contrastada/i)
    ).toBeInTheDocument();

    // Spanish CTA buttons
    const projectsCta = screen.getByRole("link", { name: "Explorar Proyectos" });
    expect(projectsCta).toBeInTheDocument();
    expect(projectsCta).toHaveAttribute("href", "#projects");

    const contactCta = screen.getByRole("link", { name: "Contactar" });
    expect(contactCta).toBeInTheDocument();
    expect(contactCta).toHaveAttribute("href", "#contact");

    // Spanish status pill
    expect(screen.getByText("Disponible para Proyectos de IA")).toBeInTheDocument();
  });

  it("applies responsive layout and typography classes to hero and CTA elements", () => {
    renderHero("en");

    const projectsCta = screen.getByRole("link", { name: "Explore Projects" });
    const contactCta = screen.getByRole("link", { name: "Get in Touch" });

    // Buttons adapt from full width on mobile to auto on larger screens
    expect(projectsCta.className).toContain("w-full sm:w-auto");
    expect(contactCta.className).toContain("w-full sm:w-auto");

    // CTA container flexes vertically on mobile and horizontally on desktop
    const ctaContainer = projectsCta.parentElement;
    expect(ctaContainer?.className).toContain("flex-col sm:flex-row");

    // Primary heading has responsive sizing
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.className).toContain("text-4xl sm:text-6xl");
  });
});
