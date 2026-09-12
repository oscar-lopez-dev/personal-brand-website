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

    // Target anchor sections exist in DOM for smooth scrolling
    const projectsSection = document.getElementById("projects");
    expect(projectsSection).toBeInTheDocument();
    expect(projectsSection?.className).toContain("scroll-mt-20");

    const contactSection = document.getElementById("contact");
    expect(contactSection).toBeInTheDocument();
    expect(contactSection?.className).toContain("scroll-mt-20");

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
    expect(screen.getByText("Available for AI Engineering")).toBeInTheDocument();

    // Click language switcher
    const toggleButton = screen.getByRole("button", { name: /switch language|cambiar idioma/i });
    fireEvent.click(toggleButton);

    // Reactively translated Spanish content in Hero
    expect(screen.getByText("Bases enterprise robustas.")).toBeInTheDocument();
    expect(screen.getByText("Soluciones con IA de alto impacto.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Explorar Proyectos" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contactar" })).toBeInTheDocument();
    expect(screen.getByText("Disponible para Proyectos de IA")).toBeInTheDocument();

    // Toggle back to English
    fireEvent.click(toggleButton);
    expect(screen.getByText("Robust enterprise foundations.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Explore Projects" })).toBeInTheDocument();
    expect(screen.getByText("Available for AI Engineering")).toBeInTheDocument();
  });

  it("renders the Projects showcase section with reference architecture cards within HomePage", () => {
    renderHomePage();

    // Section exists and has heading
    const projectsHeading = screen.getByRole("heading", {
      level: 2,
      name: "Featured Reference Architectures",
    });
    expect(projectsHeading).toBeInTheDocument();

    // Contains project titles matching spec
    expect(
      screen.getByText("Financial RAG Copilot")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Asynchronous Document Pipeline")
    ).toBeInTheDocument();

    // Expandable technical breakdown interaction within HomePage
    const toggleButtons = screen.getAllByRole("button", {
      name: /\[\+\] view technical architecture breakdown/i,
    });
    expect(toggleButtons.length).toBeGreaterThanOrEqual(2);

    // Expand first project notes
    fireEvent.click(toggleButtons[0]);
    expect(toggleButtons[0]).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(/Frontend developed in Next.js 15/)
    ).toBeInTheDocument();
  });

  it("reactively translates Projects section copy when language switcher is clicked in HomePage", () => {
    renderHomePage();

    // Initial English content in Projects
    expect(
      screen.getByRole("heading", { level: 2, name: "Featured Reference Architectures" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Financial RAG Copilot")
    ).toBeInTheDocument();

    // Click language switcher
    const toggleButton = screen.getByRole("button", { name: /switch language|cambiar idioma/i });
    fireEvent.click(toggleButton);

    // Reactively translated Spanish content in Projects
    expect(
      screen.getByRole("heading", { level: 2, name: "Arquitecturas de Referencia Destacadas" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Copiloto RAG Financiero")
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: /\[\+\] ver desglose técnico de arquitectura/i }).length
    ).toBeGreaterThanOrEqual(2);
  });

  it("renders Trajectory section with narrative and visual skills bridge within HomePage", () => {
    renderHomePage();

    // Section anchor exists
    const trajectorySection = document.getElementById("trajectory");
    expect(trajectorySection).toBeInTheDocument();
    expect(trajectorySection?.className).toContain("scroll-mt-20");
    expect(trajectorySection).toHaveAttribute("aria-labelledby", "trajectory-title");

    // Eyebrow, title and narrative
    expect(screen.getByText("Trajectory & Evolution")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "The Bridge: From Enterprise Rigor to Applied AI" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/My background is rooted in the \.NET \/ C# enterprise ecosystem/i)
    ).toBeInTheDocument();

    // Visual skills bridge
    expect(screen.getByText("1. ENTERPRISE FOUNDATIONS")).toBeInTheDocument();
    expect(screen.getByText("2. MODERN ECOSYSTEM")).toBeInTheDocument();
    expect(screen.getByText("3. APPLIED AI ENGINEERING")).toBeInTheDocument();
  });

  it("reactively translates Trajectory section copy when language switcher is clicked in HomePage", () => {
    renderHomePage();

    // English initial
    expect(screen.getByText("Trajectory & Evolution")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "The Bridge: From Enterprise Rigor to Applied AI" })
    ).toBeInTheDocument();

    // Toggle language
    const toggleButton = screen.getByRole("button", { name: /switch language|cambiar idioma/i });
    fireEvent.click(toggleButton);

    // Spanish translation
    expect(screen.getByText("Trayectoria & Evolución")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "El Puente: De la Solidez Enterprise a la IA" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Vengo de construir software en el ecosistema \.NET \/ C#/i)
    ).toBeInTheDocument();
    expect(screen.getByText("1. FUNDAMENTOS ENTERPRISE")).toBeInTheDocument();
  });

  it("renders Pillars section with 3 core pillars within HomePage", () => {
    renderHomePage();

    // Section anchor exists
    const pillarsSection = document.getElementById("pillars");
    expect(pillarsSection).toBeInTheDocument();
    expect(pillarsSection?.className).toContain("scroll-mt-20");
    expect(pillarsSection).toHaveAttribute("aria-labelledby", "pillars-title");

    // Title and badges
    expect(
      screen.getByRole("heading", { level: 2, name: "Three Core Pillars of Value" })
    ).toBeInTheDocument();
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();

    // Pillar headings
    expect(
      screen.getByRole("heading", { level: 3, name: "Analytical Rigor & Enterprise Foundations" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Accelerated Adaptation" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Pragmatic Business AI" })
    ).toBeInTheDocument();
  });

  it("reactively translates Pillars section copy when language switcher is clicked in HomePage", () => {
    renderHomePage();

    // English initial
    expect(
      screen.getByRole("heading", { level: 2, name: "Three Core Pillars of Value" })
    ).toBeInTheDocument();

    // Toggle language
    const toggleButton = screen.getByRole("button", { name: /switch language|cambiar idioma/i });
    fireEvent.click(toggleButton);

    // Spanish translation
    expect(
      screen.getByRole("heading", { level: 2, name: "Tres Pilares de Valor" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Rigor Analítico y Bases Enterprise" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Adaptación Acelerada" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "IA para Negocio Real" })
    ).toBeInTheDocument();
  });
});

