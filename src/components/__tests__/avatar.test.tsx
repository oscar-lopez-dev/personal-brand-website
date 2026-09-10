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

  it("renders status pill alongside geometric fallback when image fails to load", () => {
    render(
      <Avatar
        alt="Oscar López Martínez"
        statusLabel="Available for AI Engineering"
      />
    );

    const img = screen.getByRole("img", { name: "Oscar López Martínez" });
    fireEvent.error(img);

    expect(screen.getByTestId("geometric-avatar-fallback")).toBeInTheDocument();
    expect(screen.getByText("Available for AI Engineering")).toBeInTheDocument();
  });

  it("displays high-fidelity geometric fallback avatar with SVG when image fails to load", () => {
    render(<Avatar alt="Oscar López Martínez" />);

    const img = screen.getByRole("img", { name: "Oscar López Martínez" });
    fireEvent.error(img);

    // Image is no longer displayed; fallback avatar container is rendered with accessible role and SVG
    const fallback = screen.getByTestId("geometric-avatar-fallback");
    expect(fallback).toBeInTheDocument();
    expect(fallback).toHaveAttribute("role", "img");
    expect(fallback).toHaveAttribute("aria-label", "Oscar López Martínez");
    expect(fallback.querySelector("svg")).toBeInTheDocument();
  });

  it("renders geometric fallback immediately when src is empty", () => {
    render(<Avatar src="" alt="Oscar López Martínez" />);

    expect(screen.getByTestId("geometric-avatar-fallback")).toBeInTheDocument();
  });

  it("applies responsive sizing classes to avatar container", () => {
    render(<Avatar alt="Oscar López Martínez" />);

    const container = screen.getByTestId("avatar-container");
    expect(container.className).toContain("w-36");
    expect(container.className).toContain("h-36");
    expect(container.className).toContain("sm:w-44");
    expect(container.className).toContain("sm:h-44");
  });

  it("renders floating status pill when statusLabel is provided", () => {
    render(
      <Avatar
        alt="Oscar López Martínez"
        statusLabel="Available for AI Engineering"
      />
    );

    expect(screen.getByText("Available for AI Engineering")).toBeInTheDocument();
  });
});
