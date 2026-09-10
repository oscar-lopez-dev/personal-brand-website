import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "@/app/page";

describe("HomePage - Shell and Foundation", () => {
  it("renders the root shell with Oscar López Martínez branding and canonical role", () => {
    render(<HomePage />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toContain("Oscar López Martínez");

    const badge = screen.getByText("Fullstack to AI Engineer");
    expect(badge).toBeInTheDocument();
  });

  it("renders the main shell container with structured header and content areas", () => {
    const { container } = render(<HomePage />);
    const main = container.querySelector("main");
    expect(main).toBeInTheDocument();
    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();
  });
});
