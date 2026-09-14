import type { Locale } from "@/i18n/types";

export type ProjectType = "Reference Architecture" | "System PoC";

export const PROJECT_TYPE_LABELS: Record<Locale, Record<ProjectType, string>> = {
  en: {
    "Reference Architecture": "Reference Architecture",
    "System PoC": "System PoC",
  },
  es: {
    "Reference Architecture": "Arquitectura de Referencia",
    "System PoC": "PoC de Sistema",
  },
};

export interface EngineeringProject {
  id: string;
  type: ProjectType;
  category: Record<Locale, string>;
  title: Record<Locale, string>;
  industryProblem: Record<Locale, string>;
  architectureDetails: Record<Locale, string>;
  implementationNotes: Record<Locale, string[]>;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: EngineeringProject[] = [
  {
    id: "devbrain",
    type: "Reference Architecture",
    category: {
      en: "RAG & Document Intelligence",
      es: "RAG & Inteligencia Documental",
    },
    title: {
      en: "DevBrain — Document Intelligence Platform",
      es: "DevBrain — Plataforma de Inteligencia Documental",
    },
    industryProblem: {
      en: "Organizations lose critical hours manually searching, extracting, and synthesizing information across disparate technical documents, PDFs, and codebase files.",
      es: "Organizaciones pierden horas críticas buscando, extrayendo y sintetizando información dispersa entre documentación técnica, PDFs y archivos de código fuente.",
    },
    architectureDetails: {
      en: "Production-grade RAG platform featuring hybrid semantic vector search with pgvector, multi-agent reasoning via LangGraph, and streaming responses with citation verification.",
      es: "Plataforma RAG de producción con búsqueda semántica vectorial híbrida mediante pgvector, razonamiento multi-agente con LangGraph y respuestas streaming con verificación de citas.",
    },
    implementationNotes: {
      en: [
        "Next.js 16+ frontend with TypeScript, React 19, and Tailwind CSS v4.",
        "High-throughput Python 3.12 / FastAPI backend with Pydantic v2 validation.",
        "PostgreSQL 16 + pgvector for dense and sparse semantic vector retrieval.",
        "Agentic orchestration with LangGraph, LiteLLM, and multi-model LLM routing (Gemini, Groq).",
      ],
      es: [
        "Frontend en Next.js 16+ con TypeScript, React 19 y Tailwind CSS v4.",
        "Backend de alto rendimiento en Python 3.12 / FastAPI con validación Pydantic v2.",
        "PostgreSQL 16 con extensión pgvector para recuperación semántica vectorial híbrida.",
        "Orquestación agéntica con LangGraph, LiteLLM y enrutamiento multi-modelo (Gemini, Groq).",
      ],
    },
    stack: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "LangGraph",
      "Docker",
    ],
    githubUrl: "https://github.com/oscar-lopez-dev/devbrain",
  },
  {
    id: "verifygo-web",
    type: "System PoC",
    category: {
      en: "Multimodal AI & Rapid Prototyping",
      es: "IA Multimodal & Prototipado Rápido",
    },
    title: {
      en: "VerifyGo — AI Hackathon App",
      es: "VerifyGo — App Hackathon con IA",
    },
    industryProblem: {
      en: "Fast-paced travel and event verification workflows require immediate multimodal validation of passes, tickets, and identity documents without human latency.",
      es: "Flujos dinámicos de viaje y eventos requieren validación multimodal instantánea de pases, billetes y documentos de identidad sin latencia humana.",
    },
    architectureDetails: {
      en: "Full-stack application engineered for the Talent Arena Hackathon using Google Gemini GenAI SDK for zero-shot document classification and fluid motion UI.",
      es: "Aplicación full-stack desarrollada para el Talent Arena Hackathon utilizando Google Gemini GenAI SDK para clasificación zero-shot de documentos y UI fluida animada.",
    },
    implementationNotes: {
      en: [
        "Modern React 19 frontend built with Vite and Tailwind CSS.",
        "Multimodal visual extraction leveraging Google Gemini API with zero-shot prompting.",
        "Fluid physics-based micro-interactions powered by Motion.",
        "Mobile-first responsive architecture designed for on-the-go verification.",
      ],
      es: [
        "Frontend moderno en React 19 construido con Vite y Tailwind CSS.",
        "Extracción visual multimodal aprovechando la API de Google Gemini con prompting zero-shot.",
        "Micro-interacciones fluidas basadas en física mediante Motion.",
        "Arquitectura responsiva mobile-first diseñada para validación sobre el terreno.",
      ],
    },
    stack: [
      "React 19",
      "TypeScript",
      "Google Gemini API",
      "Vite",
      "Tailwind CSS",
      "Motion",
    ],
    githubUrl: "https://github.com/oscar-lopez-dev/verifygo-web",
    demoUrl: "https://ai.studio/apps/aebeffc0-f5f6-4159-9b79-db261dd6579d",
  },
  {
    id: "redarbor-aspnetcore-ado",
    type: "Reference Architecture",
    category: {
      en: "Enterprise Backend & Data Access",
      es: "Backend Enterprise & Acceso a Datos",
    },
    title: {
      en: "Enterprise .NET Core Web API",
      es: "Web API Enterprise en .NET Core",
    },
    industryProblem: {
      en: "Enterprise microservices requiring maximum throughput and deterministic latency often suffer when bound to heavy ORM layers and unoptimized SQL execution.",
      es: "Microservicios empresariales que exigen máximo throughput y latencias deterministas sufren ante capas ORM pesadas y ejecución SQL no optimizada.",
    },
    architectureDetails: {
      en: "Production-ready ASP.NET Core Web API demonstrating Clean Architecture, ADO.NET direct SQL execution for optimal performance, and containerized Docker setup.",
      es: "ASP.NET Core Web API para producción demostrando Clean Architecture, ejecución SQL directa con ADO.NET para rendimiento óptimo y despliegue en Docker.",
    },
    implementationNotes: {
      en: [
        "Clean Architecture separation with explicit domain models and repository patterns.",
        "High-performance direct data access layer utilizing ADO.NET and parameterized queries.",
        "Automated unit testing suite built with Moq and xUnit.",
        "Fully containerized with Docker and OpenAPI / Swagger interactive documentation.",
      ],
      es: [
        "Separación en Clean Architecture con modelos de dominio y patrones repositorio explícitos.",
        "Capa de acceso a datos de alto rendimiento utilizando ADO.NET y consultas parametrizadas.",
        "Suite de pruebas unitarias automatizadas con Moq y xUnit.",
        "Totalmente contenedorizado con Docker y documentación interactiva OpenAPI / Swagger.",
      ],
    },
    stack: [
      ".NET Core",
      "C#",
      "ADO.NET",
      "SQL Server",
      "Swagger",
      "Docker",
    ],
    githubUrl: "https://github.com/oscar-lopez-dev/redarbor-aspnetcore-ado",
  },
];
