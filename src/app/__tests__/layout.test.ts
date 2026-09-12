import { describe, it, expect } from "vitest";
import { metadata } from "@/app/layout";

describe("RootLayout Metadata & SEO (Seam 3)", () => {
  it("defines canonical title and meta description", () => {
    expect(metadata.title).toBeDefined();
    const title =
      typeof metadata.title === "string"
        ? metadata.title
        : (metadata.title as any)?.default;
    expect(title).toContain("Oscar López Martínez");
    expect(title).toContain("Fullstack to AI Engineer");

    expect(metadata.description).toBeDefined();
    expect(metadata.description).toContain(".NET");
    expect(metadata.description).toContain("TypeScript");
    expect(metadata.description).toContain("AI");
  });

  it("configures OpenGraph metadata with required social sharing properties", () => {
    expect(metadata.openGraph).toBeDefined();
    const og = metadata.openGraph!;
    expect(og.title).toContain("Oscar López Martínez");
    expect(og.description).toContain("AI");
    expect((og as any).type).toBe("website");
    expect(og.images).toBeDefined();
  });

  it("configures Twitter card metadata for rich previews", () => {
    expect(metadata.twitter).toBeDefined();
    const twitter = metadata.twitter!;
    expect((twitter as any).card).toBe("summary");
    expect(twitter.title).toContain("Oscar López Martínez");
    expect(twitter.description).toBeDefined();
  });



  it("configures favicon icons", () => {
    expect(metadata.icons).toBeDefined();
  });
});
