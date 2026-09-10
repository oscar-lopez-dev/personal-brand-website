import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import React from "react";
import { I18nProvider, useTranslation } from "@/i18n/context";

describe("i18n Context & useTranslation Hook (Seam 2)", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = "en";
    vi.restoreAllMocks();
  });

  it("defaults to English on first visit when localStorage is empty", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <I18nProvider>{children}</I18nProvider>
    );

    const { result } = renderHook(() => useTranslation(), { wrapper });

    expect(result.current.locale).toBe("en");
    expect(result.current.t.nav.projects).toBe("Projects");
  });

  it("restores locale preference from localStorage if present", () => {
    localStorage.setItem("preferred_locale", "es");

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <I18nProvider>{children}</I18nProvider>
    );

    const { result } = renderHook(() => useTranslation(), { wrapper });

    expect(result.current.locale).toBe("es");
    expect(result.current.t.nav.projects).toBe("Casos de Estudio");
  });

  it("updates locale, dictionary, and localStorage when setLocale is called", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <I18nProvider>{children}</I18nProvider>
    );

    const { result } = renderHook(() => useTranslation(), { wrapper });

    act(() => {
      result.current.setLocale("es");
    });

    expect(result.current.locale).toBe("es");
    expect(result.current.t.nav.projects).toBe("Casos de Estudio");
    expect(localStorage.getItem("preferred_locale")).toBe("es");
    expect(document.documentElement.lang).toBe("es");
  });

  it("toggles between en and es reactively when toggleLocale is called", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <I18nProvider>{children}</I18nProvider>
    );

    const { result } = renderHook(() => useTranslation(), { wrapper });

    expect(result.current.locale).toBe("en");
    expect(document.documentElement.lang).toBe("en");

    act(() => {
      result.current.toggleLocale();
    });

    expect(result.current.locale).toBe("es");
    expect(result.current.t.nav.projects).toBe("Casos de Estudio");
    expect(localStorage.getItem("preferred_locale")).toBe("es");
    expect(document.documentElement.lang).toBe("es");

    act(() => {
      result.current.toggleLocale();
    });

    expect(result.current.locale).toBe("en");
    expect(result.current.t.nav.projects).toBe("Projects");
    expect(localStorage.getItem("preferred_locale")).toBe("en");
    expect(document.documentElement.lang).toBe("en");
  });

  it("throws an informative error if useTranslation is used outside of I18nProvider", () => {
    expect(() => {
      renderHook(() => useTranslation());
    }).toThrow("useTranslation must be used within an I18nProvider");
  });
});
