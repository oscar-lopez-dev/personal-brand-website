import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import React from "react";
import HomePage from "@/app/page";
import { I18nProvider } from "@/i18n/context";

describe("HomePage - Shell, Foundation & i18n Integration", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  function renderHomePage(initialLocale?: "en" | "es") {
    return render(
      <I18nProvider initialLocale={initialLocale}>
        <HomePage />
      </I18nProvider>
    );
  }

  it("renders the root shell with Oscar López Martínez branding and canonical role", () => {
    renderHomePage();
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toContain("Oscar López Martínez");

    const badges = screen.getAllByText("Fullstack to AI Engineer");
    expect(badges.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the main shell container with structured header and content areas", () => {
    const { container } = renderHomePage();
    const main = container.querySelector("main");
    expect(main).toBeInTheDocument();
    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();
  });

  it("renders the reactive Header with interactive language switcher inside HomePage", () => {
    renderHomePage();

    // Default English navigation in Header
    expect(screen.getByRole("link", { name: /^projects$/i })).toBeInTheDocument();

    // Toggle to Spanish
    const toggleButton = screen.getByRole("button", { name: /switch language|cambiar idioma/i });
    fireEvent.click(toggleButton);

    // Reactive update of navigation in Header without page reload
    expect(screen.getByRole("link", { name: /^casos de estudio$/i })).toBeInTheDocument();
  });

  it("renders Hero section within HomePage with positioning, CTA targets, and avatar", () => {
    renderHomePage();

    // Role badge
    expect(screen.getByText("Senior Fullstack Engineer → AI Engineer")).toBeInTheDocument();

    // Positioning headline
    expect(screen.getByText("Robust enterprise foundations.")).toBeInTheDocument();
    expect(screen.getByText("High-impact AI solutions.")).toBeInTheDocument();

    // CTA buttons and their targets
    const projectsBtn = screen.getByRole("link", { name: "Explore Projects" });
    expect(projectsBtn).toBeInTheDocument();
    expect(projectsBtn).toHaveAttribute("href", "#projects");

    const contactBtn = screen.getByRole("link", { name: "Get in Touch" });
    expect(contactBtn).toBeInTheDocument();
    expect(contactBtn).toHaveAttribute("href", "#contact");

    // Avatar component rendered
    const avatar = screen.getByRole("img", { name: /oscar lópez martínez/i });
    expect(avatar).toBeInTheDocument();
  });

  it("reactively translates all Hero copy when language switcher is clicked in HomePage", () => {
    renderHomePage();

    // Initial English content
    expect(screen.getByText("Robust enterprise foundations.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Explore Projects" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Get in Touch" })).toBeInTheDocument();

    // Click language switcher
    const toggleButton = screen.getByRole("button", { name: /switch language|cambiar idioma/i });
    fireEvent.click(toggleButton);

    // Reactively translated Spanish content in Hero
    expect(screen.getByText("Bases enterprise robustas.")).toBeInTheDocument();
    expect(screen.getByText("Soluciones con IA de alto impacto.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Explorar Proyectos" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contactar" })).toBeInTheDocument();

    // Toggle back to English
    fireEvent.click(toggleButton);
    expect(screen.getByText("Robust enterprise foundations.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Explore Projects" })).toBeInTheDocument();
  });
});
