import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import { Avatar } from "@/components/avatar";

describe("Avatar Component (Seam 1)", () => {
  it("renders an image pointing to /avatar.jpg by default with alt text", () => {
    render(<Avatar alt="Oscar López Martínez" />);

    const img = screen.getByRole("img", { name: "Oscar López Martínez" });
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toMatch(/avatar\.jpg/);
  });

  it("displays high-fidelity geometric fallback avatar when image fails to load", () => {
    render(<Avatar alt="Oscar López Martínez" />);

    const img = screen.getByRole("img", { name: "Oscar López Martínez" });
    fireEvent.error(img);

    // Image is no longer displayed; fallback avatar container is rendered
    expect(screen.queryByRole("img", { name: "Oscar López Martínez" })).toBeInTheDocument();
    expect(screen.getByTestId("geometric-avatar-fallback")).toBeInTheDocument();
    expect(screen.getByText("OL")).toBeInTheDocument();
  });

  it("renders geometric fallback immediately when src is empty", () => {
    render(<Avatar src="" alt="Oscar López Martínez" />);

    expect(screen.getByTestId("geometric-avatar-fallback")).toBeInTheDocument();
  });
});
