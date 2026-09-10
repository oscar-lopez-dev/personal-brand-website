import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import React from "react";
import { I18nProvider } from "@/i18n/context";
import { Header } from "@/components/header";

describe("Header & Language Switcher (Seam 3)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  function renderHeader(initialLocale?: "en" | "es") {
    return render(
      <I18nProvider initialLocale={initialLocale}>
        <Header />
      </I18nProvider>
    );
  }

  it("renders with glassmorphism backdrop blur and logo monogram", () => {
    renderHeader();

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
    expect(header.className).toContain("backdrop-blur");
    expect(header.className).toContain("sticky");

    expect(screen.getByText("OL")).toBeInTheDocument();
    expect(screen.getByText("Oscar López Martínez")).toBeInTheDocument();
    expect(screen.getByText("Fullstack to AI Engineer")).toBeInTheDocument();
  });

  it("renders navigation anchor links with English labels by default", () => {
    renderHeader();

    const projectsLink = screen.getByRole("link", { name: /projects/i });
    expect(projectsLink).toHaveAttribute("href", "#projects");

    const trajectoryLink = screen.getByRole("link", { name: /trajectory/i });
    expect(trajectoryLink).toHaveAttribute("href", "#trajectory");

    const pillarsLink = screen.getByRole("link", { name: /pillars/i });
    expect(pillarsLink).toHaveAttribute("href", "#pillars");

    const contactLink = screen.getByRole("link", { name: /get in touch/i });
    expect(contactLink).toHaveAttribute("href", "#contact");
  });

  it("renders the interactive [EN | ES] switcher showing active state", () => {
    renderHeader();

    const switcher = screen.getByRole("button", { name: /switch language|cambiar idioma/i });
    expect(switcher).toBeInTheDocument();
    expect(switcher.textContent).toContain("EN");
    expect(switcher.textContent).toContain("ES");

    // By default, EN is active
    const enIndicator = screen.getByText("EN");
    expect(enIndicator.className).toContain("text-brand-accent");
  });

  it("toggles language to Spanish when switcher is clicked, updating navigation reactively", () => {
    renderHeader();

    const switcher = screen.getByRole("button", { name: /switch language|cambiar idioma/i });

    // Initial: English
    expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();

    // Click toggle
    fireEvent.click(switcher);

    // Visible navigation text updates reactively to Spanish
    expect(screen.getByRole("link", { name: /casos de estudio/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /trayectoria/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /pilares/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /hablemos/i })).toBeInTheDocument();

    // ES is now active
    const esIndicator = screen.getByText("ES");
    expect(esIndicator.className).toContain("text-brand-accent");
    expect(localStorage.getItem("preferred_locale")).toBe("es");

    // Click toggle again to return to English
    fireEvent.click(switcher);

    expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /get in touch/i })).toBeInTheDocument();
    expect(localStorage.getItem("preferred_locale")).toBe("en");
  });
});
