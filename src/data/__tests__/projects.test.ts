import { describe, it, expect } from "vitest";
import {
  projects,
  PROJECT_TYPE_LABELS,
  type EngineeringProject,
  type ProjectType,
} from "@/data/projects";

describe("Engineering Projects Data Contract Integrity (Seam 2)", () => {
  it("exports an array of projects containing at least 2 reference architectures", () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThanOrEqual(2);

    const referenceArchitectures = projects.filter((p) => p.type === "Reference Architecture");
    expect(referenceArchitectures.length).toBeGreaterThanOrEqual(2);
  });

  it("contains the real featured engineering projects: DevBrain, VerifyGo, Modern CSS, and Enterprise .NET", () => {
    const projectIds = projects.map((p) => p.id);
    expect(projectIds).toContain("devbrain");
    expect(projectIds).toContain("verifygo-web");
    expect(projectIds).toContain("web-dev-learn-css");
    expect(projectIds).toContain("redarbor-aspnetcore-ado");

    const devbrainProject = projects.find((p) => p.id === "devbrain")!;
    expect(devbrainProject.title.en).toContain("DevBrain");
    expect(devbrainProject.title.es).toContain("DevBrain");

    const verifygoProject = projects.find((p) => p.id === "verifygo-web")!;
    expect(verifygoProject.title.en).toContain("VerifyGo");
    expect(verifygoProject.title.es).toContain("VerifyGo");
  });

  it("provides bilingual labels for all project types", () => {
    const validTypes: ProjectType[] = [
      "Reference Architecture",
      "System PoC",
      "Open Source Tool",
    ];

    for (const type of validTypes) {
      expect(PROJECT_TYPE_LABELS.en[type]).toBeDefined();
      expect(PROJECT_TYPE_LABELS.en[type].trim().length).toBeGreaterThan(0);
      expect(PROJECT_TYPE_LABELS.es[type]).toBeDefined();
      expect(PROJECT_TYPE_LABELS.es[type].trim().length).toBeGreaterThan(0);
    }

    expect(PROJECT_TYPE_LABELS.es["Reference Architecture"]).toBe("Arquitectura de Referencia");
  });

  it("strictly validates every project against the EngineeringProject schema with full EN and ES parity", () => {
    const validTypes: ProjectType[] = [
      "Reference Architecture",
      "System PoC",
      "Open Source Tool",
    ];

    for (const project of projects) {
      // id
      expect(typeof project.id).toBe("string");
      expect(project.id.trim().length).toBeGreaterThan(0);

      // type
      expect(validTypes).toContain(project.type);

      // category (bilingual)
      expect(project.category).toBeDefined();
      expect(typeof project.category.en).toBe("string");
      expect(project.category.en.trim().length).toBeGreaterThan(0);
      expect(typeof project.category.es).toBe("string");
      expect(project.category.es.trim().length).toBeGreaterThan(0);

      // title (bilingual)
      expect(project.title).toBeDefined();
      expect(typeof project.title.en).toBe("string");
      expect(project.title.en.trim().length).toBeGreaterThan(0);
      expect(typeof project.title.es).toBe("string");
      expect(project.title.es.trim().length).toBeGreaterThan(0);

      // industryProblem / challenge (bilingual)
      expect(project.industryProblem).toBeDefined();
      expect(typeof project.industryProblem.en).toBe("string");
      expect(project.industryProblem.en.trim().length).toBeGreaterThan(0);
      expect(typeof project.industryProblem.es).toBe("string");
      expect(project.industryProblem.es.trim().length).toBeGreaterThan(0);

      // architectureDetails (bilingual)
      expect(project.architectureDetails).toBeDefined();
      expect(typeof project.architectureDetails.en).toBe("string");
      expect(project.architectureDetails.en.trim().length).toBeGreaterThan(0);
      expect(typeof project.architectureDetails.es).toBe("string");
      expect(project.architectureDetails.es.trim().length).toBeGreaterThan(0);

      // implementationNotes (bilingual list)
      expect(project.implementationNotes).toBeDefined();
      expect(Array.isArray(project.implementationNotes.en)).toBe(true);
      expect(project.implementationNotes.en.length).toBeGreaterThan(0);
      expect(Array.isArray(project.implementationNotes.es)).toBe(true);
      expect(project.implementationNotes.es.length).toBeGreaterThan(0);

      for (const note of project.implementationNotes.en) {
        expect(typeof note).toBe("string");
        expect(note.trim().length).toBeGreaterThan(0);
      }
      for (const note of project.implementationNotes.es) {
        expect(typeof note).toBe("string");
        expect(note.trim().length).toBeGreaterThan(0);
      }

      // stack tags
      expect(Array.isArray(project.stack)).toBe(true);
      expect(project.stack.length).toBeGreaterThanOrEqual(3);
      for (const tag of project.stack) {
        expect(typeof tag).toBe("string");
        expect(tag.trim().length).toBeGreaterThan(0);
      }

      // external GitHub URL
      expect(typeof project.githubUrl).toBe("string");
      expect(project.githubUrl.startsWith("https://github.com/")).toBe(true);

      // external Demo URL (optional)
      if (project.demoUrl) {
        expect(typeof project.demoUrl).toBe("string");
        expect(project.demoUrl.startsWith("https://")).toBe(true);
      }
    }
  });
});
