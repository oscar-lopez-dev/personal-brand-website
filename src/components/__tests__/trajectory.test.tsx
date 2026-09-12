import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import React from "react";
import { I18nProvider } from "@/i18n/context";
import { Trajectory } from "@/components/trajectory";

describe("Trajectory Component (Seam 2)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  function renderTrajectory(locale?: "en" | "es") {
    return render(
      <I18nProvider initialLocale={locale}>
        <Trajectory />
      </I18nProvider>
    );
  }

  it("renders the section element with id='trajectory', eyebrow, and level 2 heading", () => {
    renderTrajectory("en");

    const section = document.getElementById("trajectory");
    expect(section).toBeInTheDocument();
    expect(section?.tagName.toLowerCase()).toBe("section");
    expect(section).toHaveAttribute("aria-labelledby", "trajectory-title");

    // Eyebrow and heading
    expect(screen.getByText("Trajectory & Evolution")).toBeInTheDocument();
    const heading = screen.getByRole("heading", {
      level: 2,
      name: "The Bridge: From Enterprise Rigor to Applied AI",
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "trajectory-title");
  });

  it("renders narrative paragraphs articulating the journey from .NET enterprise to modern AI engineering", () => {
    renderTrajectory("en");

    // Paragraph 1: .NET enterprise roots
    expect(
      screen.getByText(/My background is rooted in the \.NET \/ C# enterprise ecosystem/i)
    ).toBeInTheDocument();

    // Paragraph 2: Modern web stack adoption
    expect(
      screen.getByText(/My natural curiosity led me to adopt the modern web stack/i)
    ).toBeInTheDocument();

    // Paragraph 3: Applied AI systems
    expect(
      screen.getByText(/Today, I leverage that exact foundation to engineer applied AI systems/i)
    ).toBeInTheDocument();
  });

  it("renders the visual skills bridge with all three stages and architectural takeaway note", () => {
    renderTrajectory("en");

    // Stage 1: Enterprise Foundations
    expect(screen.getByText("1. ENTERPRISE FOUNDATIONS")).toBeInTheDocument();
    expect(screen.getByText(".NET / C# / SQL")).toBeInTheDocument();

    // Stage 2: Modern Ecosystem
    expect(screen.getByText("2. MODERN ECOSYSTEM")).toBeInTheDocument();
    expect(screen.getByText("TypeScript / React / Next.js")).toBeInTheDocument();

    // Stage 3: Applied AI Engineering
    expect(screen.getByText("3. APPLIED AI ENGINEERING")).toBeInTheDocument();
    expect(screen.getByText("RAG / Agents / LLM Ops")).toBeInTheDocument();

    // Semantic ordered list for stages
    const list = screen.getByRole("list");
    expect(list.tagName.toLowerCase()).toBe("ol");
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(3);

    // Takeaway note
    expect(
      screen.getByText(/→ An engineering mindset that bridges deep systems architecture and business ROI\./i)
    ).toBeInTheDocument();
  });

  it("renders all trajectory copy in Spanish when locale is es", () => {
    renderTrajectory("es");

    // Spanish eyebrow & title
    expect(screen.getByText("Trayectoria & Evolución")).toBeInTheDocument();
    const heading = screen.getByRole("heading", {
      level: 2,
      name: "El Puente: De la Solidez Enterprise a la IA",
    });
    expect(heading).toBeInTheDocument();

    // Spanish narrative
    expect(
      screen.getByText(/Vengo de construir software en el ecosistema \.NET \/ C#/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Mi inquietud natural me llevó a incorporar el stack moderno/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Hoy aplico esa misma base para construir sistemas de IA aplicados/i)
    ).toBeInTheDocument();

    // Spanish skills bridge stages
    expect(screen.getByText("1. FUNDAMENTOS ENTERPRISE")).toBeInTheDocument();
    expect(screen.getByText("2. ECOSISTEMA MODERNO")).toBeInTheDocument();
    expect(screen.getByText("3. INGENIERÍA DE IA")).toBeInTheDocument();

    // Spanish takeaway note
    expect(
      screen.getByText(/→ Un perfil con criterio arquitectónico que entiende tanto la máquina como el negocio\./i)
    ).toBeInTheDocument();
  });

  it("applies responsive layout structure to the narrative and visual timeline", () => {
    const { container } = renderTrajectory("en");

    const grid = container.querySelector(".grid");
    expect(grid).toBeInTheDocument();
    expect(grid?.className).toContain("md:grid-cols-2");
  });
});
