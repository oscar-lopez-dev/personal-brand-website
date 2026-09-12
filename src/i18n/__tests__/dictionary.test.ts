import { describe, it, expect } from "vitest";
import { en } from "@/i18n/en";
import { es } from "@/i18n/es";

// Helper to recursively collect all keys with dot notation
function getDeepKeys(obj: Record<string, any>, prefix = ""): string[] {
  return Object.keys(obj).reduce<string[]>((acc, key) => {
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      acc.push(...getDeepKeys(obj[key], prefixedKey));
    } else {
      acc.push(prefixedKey);
    }
    return acc;
  }, []);
}

// Helper to get nested value by dot path
function getDeepValue(obj: Record<string, any>, path: string): any {
  return path.split(".").reduce((acc, part) => acc?.[part], obj);
}

describe("i18n Dictionary Contract Integrity (Seam 1)", () => {
  it("has matching keys in both en and es dictionaries (100% key parity)", () => {
    const enKeys = getDeepKeys(en).sort();
    const esKeys = getDeepKeys(es).sort();

    expect(enKeys).toEqual(esKeys);
  });

  it("contains non-empty translation strings for all keys", () => {
    const enKeys = getDeepKeys(en);

    for (const key of enKeys) {
      const enVal = getDeepValue(en, key);
      const esVal = getDeepValue(es, key);

      expect(typeof enVal).toBe("string");
      expect(typeof esVal).toBe("string");
      expect(enVal.trim().length).toBeGreaterThan(0);
      expect(esVal.trim().length).toBeGreaterThan(0);
    }
  });

  it("defines essential navigation and header keys", () => {
    expect(en.nav.projects).toBeDefined();
    expect(en.nav.trajectory).toBeDefined();
    expect(en.nav.pillars).toBeDefined();
    expect(en.nav.contact).toBeDefined();

    expect(es.nav.projects).toBeDefined();
    expect(es.nav.trajectory).toBeDefined();
    expect(es.nav.pillars).toBeDefined();
    expect(es.nav.contact).toBeDefined();
  });

  it("defines trajectory section translation keys", () => {
    expect(en.trajectory).toBeDefined();
    expect(es.trajectory).toBeDefined();
    expect(en.trajectory.title).toBeDefined();
    expect(es.trajectory.title).toBeDefined();
    expect(en.trajectory.paragraph1).toBeDefined();
    expect(es.trajectory.paragraph1).toBeDefined();
    expect(en.trajectory.bridgeTitle1).toBeDefined();
    expect(es.trajectory.bridgeTitle1).toBeDefined();
  });

  it("defines pillars section translation keys", () => {
    expect(en.pillars).toBeDefined();
    expect(es.pillars).toBeDefined();
    expect(en.pillars.title).toBeDefined();
    expect(es.pillars.title).toBeDefined();
    expect(en.pillars.pillar1Title).toBeDefined();
    expect(es.pillars.pillar1Title).toBeDefined();
  });

  it("defines contact section translation keys", () => {
    expect((en as any).contact).toBeDefined();
    expect((es as any).contact).toBeDefined();
    expect((en as any).contact.title).toBeDefined();
    expect((es as any).contact.title).toBeDefined();
    expect((en as any).contact.description).toBeDefined();
    expect((es as any).contact.emailButton).toBeDefined();
    expect((en as any).contact.linkedinButton).toBeDefined();
    expect((en as any).contact.githubButton).toBeDefined();
  });
});

