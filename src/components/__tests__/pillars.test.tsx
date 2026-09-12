import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import React from "react";
import { I18nProvider } from "@/i18n/context";
import { Pillars } from "@/components/pillars";

describe("Pillars Component (Seam 2)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  function renderPillars(locale?: "en" | "es") {
    return render(
      <I18nProvider initialLocale={locale}>
        <Pillars />
      </I18nProvider>
    );
  }

  it("renders the section element with id='pillars', eyebrow, and level 2 heading", () => {
    renderPillars("en");

    const section = document.getElementById("pillars");
    expect(section).toBeInTheDocument();
    expect(section?.tagName.toLowerCase()).toBe("section");
    expect(section).toHaveAttribute("aria-labelledby", "pillars-title");

    // Eyebrow and heading
    expect(screen.getByText("Work Philosophy")).toBeInTheDocument();
    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Three Core Pillars of Value",
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "pillars-title");
  });

  it("renders three core pillar cards with numbered badges, titles, and descriptions", () => {
    renderPillars("en");

    // Numbered badges
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();

    // Pillar titles
    expect(
      screen.getByRole("heading", { level: 3, name: "Analytical Rigor & Enterprise Foundations" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Accelerated Adaptation" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Pragmatic Business AI" })
    ).toBeInTheDocument();

    // Pillar descriptions
    expect(
      screen.getByText(/Architecting for edge cases, security, and long-term maintainability/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Relentless technical curiosity paired with a disciplined method/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/AI is an engineering multiplier for operational efficiency/i)
    ).toBeInTheDocument();
  });

  it("renders all Pillars copy in Spanish when locale is es", () => {
    renderPillars("es");

    // Spanish eyebrow & title
    expect(screen.getByText("Filosofía de Trabajo")).toBeInTheDocument();
    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Tres Pilares de Valor",
    });
    expect(heading).toBeInTheDocument();

    // Spanish badges
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();

    // Spanish titles
    expect(
      screen.getByRole("heading", { level: 3, name: "Rigor Analítico y Bases Enterprise" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Adaptación Acelerada" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "IA para Negocio Real" })
    ).toBeInTheDocument();

    // Spanish descriptions
    expect(
      screen.getByText(/Diseño pensando en casos límite, seguridad y mantenibilidad/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Curiosidad insaciable y método riguroso para asimilar nuevas tecnologías/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/La IA es una herramienta para multiplicar la rentabilidad/i)
    ).toBeInTheDocument();
  });

  it("renders semantic articles within a responsive grid container", () => {
    const { container } = renderPillars("en");

    const articles = container.querySelectorAll("article");
    expect(articles.length).toBe(3);

    const grid = container.querySelector(".grid");
    expect(grid).toBeInTheDocument();
    expect(grid?.className).toContain("sm:grid-cols-3");
  });
});
