import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  Inter: () => ({ variable: "--font-inter" }),
  JetBrains_Mono: () => ({ variable: "--font-mono" }),
}));


class MemoryStorage implements Storage {
  private store = new Map<string, string>();

  get length(): number {
    return this.store.size;
  }

  clear(): void {
    this.store.clear();
  }

  getItem(key: string): string | null {
    return this.store.has(key) ? this.store.get(key)! : null;
  }

  key(index: number): string | null {
    const keys = Array.from(this.store.keys());
    return keys[index] ?? null;
  }

  removeItem(key: string): void {
    this.store.delete(key);
  }

  setItem(key: string, value: string): void {
    this.store.set(key, String(value));
  }
}

const storageInstance = new MemoryStorage();

Object.defineProperty(globalThis, "localStorage", {
  value: storageInstance,
  configurable: true,
  writable: true,
});

if (typeof window !== "undefined") {
  Object.defineProperty(window, "localStorage", {
    value: storageInstance,
    configurable: true,
    writable: true,
  });
}

