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
});
