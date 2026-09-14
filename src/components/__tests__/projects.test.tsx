import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import React from "react";
import { Projects } from "@/components/projects";
import { I18nProvider } from "@/i18n/context";
import { projects } from "@/data/projects";

describe("Projects Component - UI & Interaction Contract (Seam 1)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  function renderProjects(initialLocale: "en" | "es" = "en") {
    return render(
      <I18nProvider initialLocale={initialLocale}>
        <Projects />
      </I18nProvider>
    );
  }

  it("renders the projects section with id='projects' and default English header copy", () => {
    renderProjects("en");
    const section = document.getElementById("projects");
    expect(section).toBeInTheDocument();
    expect(section?.tagName.toLowerCase()).toBe("section");

    expect(screen.getByText("Evidence & Track Record")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /featured reference architectures/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Problem → AI Solution → Impact")).toBeInTheDocument();
  });

  it("renders all project cards with category badges, titles, challenge, technical architecture, and tech tags", () => {
    renderProjects("en");

    for (const project of projects) {
      // Title
      expect(screen.getByText(project.title.en)).toBeInTheDocument();

      // Category badge
      expect(screen.getByText(project.category.en)).toBeInTheDocument();

      // Type badge
      expect(screen.getAllByText("Reference Architecture").length).toBeGreaterThanOrEqual(1);

      // Industry challenge
      expect(screen.getByText(project.industryProblem.en)).toBeInTheDocument();

      // Technical architecture
      expect(screen.getByText(project.architectureDetails.en)).toBeInTheDocument();

      // Stack tags
      for (const tag of project.stack) {
        const matchingTags = screen.getAllByText(tag);
        expect(matchingTags.length).toBeGreaterThanOrEqual(1);
      }
    }
  });

  it("renders external GitHub and demo links with target='_blank' and rel='noopener noreferrer'", () => {
    renderProjects("en");

    for (const project of projects) {
      const githubLinks = screen.getAllByRole("link", { name: /view code \(github\)|github/i });
      const projectGithubLink = githubLinks.find(
        (link) => link.getAttribute("href") === project.githubUrl
      );
      expect(projectGithubLink).toBeDefined();
      expect(projectGithubLink).toHaveAttribute("target", "_blank");
      expect(projectGithubLink).toHaveAttribute("rel", "noopener noreferrer");

      if (project.demoUrl) {
        const demoLinks = screen.getAllByRole("link", { name: /live demo/i });
        const projectDemoLink = demoLinks.find(
          (link) => link.getAttribute("href") === project.demoUrl
        );
        expect(projectDemoLink).toBeDefined();
        expect(projectDemoLink).toHaveAttribute("target", "_blank");
        expect(projectDemoLink).toHaveAttribute("rel", "noopener noreferrer");
      }
    }
  });

  it("toggles the technical architecture breakdown panel with aria-expanded and dynamic button text", () => {
    renderProjects("en");

    const toggleButtons = screen.getAllByRole("button", {
      name: /\[\+\] view technical architecture breakdown/i,
    });
    expect(toggleButtons.length).toBe(projects.length);

    // Test first project card
    const firstButton = toggleButtons[0];
    const firstProject = projects[0];

    // Initially collapsed
    expect(firstButton).toHaveAttribute("aria-expanded", "false");
    expect(firstButton.textContent).toContain("[+] View technical architecture breakdown");

    const panelId = firstButton.getAttribute("aria-controls")!;
    expect(panelId).toBeTruthy();

    // The element referenced by aria-controls MUST exist in the DOM (WAI-ARIA compliance)
    const panelElement = document.getElementById(panelId);
    expect(panelElement).toBeInTheDocument();
    expect(panelElement).toHaveAttribute("hidden");
    expect(panelElement?.className).toContain("hidden");

    // Click to expand
    fireEvent.click(firstButton);

    // Now expanded
    expect(firstButton).toHaveAttribute("aria-expanded", "true");
    expect(firstButton.textContent).toContain("[-] Hide technical architecture breakdown");
    expect(panelElement).not.toHaveAttribute("hidden");
    expect(panelElement?.className).not.toContain("hidden");

    // Implementation notes are visible
    expect(screen.getByText(firstProject.implementationNotes.en[0])).toBeInTheDocument();
    for (const note of firstProject.implementationNotes.en) {
      expect(screen.getByText(note)).toBeInTheDocument();
    }

    // Click to collapse again
    fireEvent.click(firstButton);

    // Collapsed back
    expect(firstButton).toHaveAttribute("aria-expanded", "false");
    expect(firstButton.textContent).toContain("[+] View technical architecture breakdown");
    expect(panelElement).toHaveAttribute("hidden");
    expect(panelElement?.className).toContain("hidden");
  });

  it("reactively displays Spanish copy when locale is 'es'", () => {
    renderProjects("es");

    // Spanish section header aligned with CONTEXT.md
    expect(screen.getByText("Evidencia & Trabajo")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /arquitecturas de referencia destacadas/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Problema → Solución IA → Impacto")).toBeInTheDocument();

    // Spanish project cards
    for (const project of projects) {
      expect(screen.getByText(project.title.es)).toBeInTheDocument();
      expect(screen.getByText(project.category.es)).toBeInTheDocument();
      expect(screen.getByText(project.industryProblem.es)).toBeInTheDocument();
      expect(screen.getByText(project.architectureDetails.es)).toBeInTheDocument();
    }

    // Localized project type badges in Spanish
    expect(screen.getAllByText("Arquitectura de Referencia").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("PoC de Sistema").length).toBeGreaterThanOrEqual(1);

    // Spanish toggle button text
    const esToggleButtons = screen.getAllByRole("button", {
      name: /\[\+\] ver desglose técnico de arquitectura/i,
    });
    expect(esToggleButtons.length).toBe(projects.length);

    // Click Spanish toggle button
    fireEvent.click(esToggleButtons[0]);
    expect(esToggleButtons[0]).toHaveAttribute("aria-expanded", "true");
    expect(esToggleButtons[0].textContent).toContain("[-] Ocultar desglose técnico de arquitectura");
    expect(screen.getByText(projects[0].implementationNotes.es[0])).toBeInTheDocument();
  });
});
