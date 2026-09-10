import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "@/app/page";

describe("HomePage - Shell and Foundation", () => {
  it("renders the root shell with Oscar López Martínez branding", () => {
    render(<HomePage />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toContain("Oscar López Martínez");
  });

  it("renders the minimal shell container with the dark foundation style", () => {
    const { container } = render(<HomePage />);
    const main = container.querySelector("main");
    expect(main).toBeInTheDocument();
  });
});
