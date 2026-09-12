import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import React from "react";
import { I18nProvider } from "@/i18n/context";
import { Contact } from "@/components/contact";

describe("Contact Component (Seam 2)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  function renderContact(locale: "en" | "es" = "en") {
    return render(
      <I18nProvider initialLocale={locale}>
        <Contact />
      </I18nProvider>
    );
  }


  it("renders the section element with id='contact', eyebrow, and level 2 heading", () => {
    renderContact("en");

    const section = document.getElementById("contact");
    expect(section).toBeInTheDocument();
    expect(section?.tagName.toLowerCase()).toBe("section");
    expect(section).toHaveAttribute("aria-labelledby", "contact-title");

    // Eyebrow and heading
    expect(screen.getByText("Direct Contact")).toBeInTheDocument();
    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Let's discuss a technical or business challenge",
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "contact-title");
  });

  it("renders direct mailto action button with correct address and accessible label", () => {
    renderContact("en");

    const mailButton = screen.getByRole("link", {
      name: /send direct email/i,
    });
    expect(mailButton).toBeInTheDocument();
    expect(mailButton).toHaveAttribute("href", "mailto:oscar.bcn.1991@gmail.com");
    expect(mailButton).toHaveAttribute(
      "aria-label",
      "Send direct email to Oscar López Martínez"
    );
  });

  it("renders verified LinkedIn and GitHub profile links opening securely in new tabs", () => {
    renderContact("en");

    // LinkedIn link
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin/i,
    });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/oscarlopez1991"
    );
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");

    // GitHub link
    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/oscarlopez1991"
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders all Contact copy in Spanish when locale is es", () => {
    renderContact("es");

    // Eyebrow and heading in Spanish
    expect(screen.getByText("Contacto Directo")).toBeInTheDocument();
    const heading = screen.getByRole("heading", {
      level: 2,
      name: "¿Hablamos de un reto técnico o de negocio?",
    });
    expect(heading).toBeInTheDocument();

    // Spanish buttons
    expect(
      screen.getByRole("link", { name: /enviar email directo/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /linkedin/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /github/i })
    ).toBeInTheDocument();
  });

  it("exports canonical contact and social profile constants matching spec", async () => {
    const contactModule = await import("@/components/contact");
    expect(contactModule.CONTACT_EMAIL).toBe("oscar.bcn.1991@gmail.com");
    expect(contactModule.LINKEDIN_URL).toBe("https://linkedin.com/in/oscarlopez1991");
    expect(contactModule.GITHUB_URL).toBe("https://github.com/oscarlopez1991");
  });
});

