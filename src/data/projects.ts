import type { Locale } from "@/i18n/types";

export type ProjectType = "Reference Architecture" | "System PoC" | "Open Source Tool";

export const PROJECT_TYPE_LABELS: Record<Locale, Record<ProjectType, string>> = {
  en: {
    "Reference Architecture": "Reference Architecture",
    "System PoC": "System PoC",
    "Open Source Tool": "Open Source Tool",
  },
  es: {
    "Reference Architecture": "Arquitectura de Referencia",
    "System PoC": "PoC de Sistema",
    "Open Source Tool": "Herramienta Open Source",
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
    id: "financial-rag-copilot",
    type: "Reference Architecture",
    category: {
      en: "RAG & Enterprise Data",
      es: "RAG & Datos Enterprise",
    },
    title: {
      en: "Financial RAG Copilot",
      es: "Copiloto RAG Financiero",
    },
    industryProblem: {
      en: "Executive leaders lost hours waiting for ad-hoc SQL reports to make critical operational decisions, creating reporting bottlenecks and inconsistent metrics across departments.",
      es: "Directivos perdían horas esperando reportes SQL ad-hoc para tomar decisiones operativas, generando cuellos de botella y discrepancias en métricas clave entre departamentos.",
    },
    architectureDetails: {
      en: "Hybrid RAG pipeline combining deterministic AST schema validation with semantic vector search and LLM function calling to guarantee audit-proof, sub-second query responses.",
      es: "Pipeline RAG híbrido que combina validación determinista de esquemas mediante AST con búsqueda vectorial semántica y OpenAI Function Calling para garantizar respuestas auditables en sub-segundos.",
    },
    implementationNotes: {
      en: [
        "Frontend developed in Next.js 15 (App Router, React Server Components, and Tailwind CSS).",
        "Ingestion backend and semantic indexation built in .NET 8 / C# exposing secure gRPC endpoints.",
        "PostgreSQL with pgvector for hybrid dense/sparse vector retrieval with deterministic schema safety guardrails.",
        "Strict AST generation to prevent SQL injection and hallucinated column lookups before execution.",
      ],
      es: [
        "Frontend desarrollado en Next.js 15 (App Router, Server Components y Tailwind CSS).",
        "Backend de ingestión e índices semánticos en .NET 8 / C# exponiendo endpoints gRPC seguros.",
        "PostgreSQL con extensión pgvector para recuperación híbrida densa/dispersa y guardrails de seguridad de esquemas.",
        "Generación estricta de AST para prevenir inyecciones SQL y alucinaciones de columnas antes de la ejecución.",
      ],
    },
    stack: [
      "Next.js 15",
      "TypeScript",
      ".NET 8",
      "C#",
      "gRPC",
      "PostgreSQL",
      "pgvector",
      "OpenAI API",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/oscar-lopez-martinez/financial-rag-copilot",
    demoUrl: "https://financial-rag-demo.oscarlopez.dev",
  },
  {
    id: "async-document-pipeline",
    type: "Reference Architecture",
    category: {
      en: "Asynchronous Processing & Vision LLMs",
      es: "Procesamiento Asíncrono & Vision LLMs",
    },
    title: {
      en: "Asynchronous Document Pipeline",
      es: "Pipeline Asíncrono de Documentos",
    },
    industryProblem: {
      en: "Massive daily intake of heterogeneous scanned delivery notes and invoices processed manually, resulting in operational delays, invoice discrepancies, and manual data-entry errors.",
      es: "Entrada diaria masiva de albaranes y facturas escaneadas heterogéneas procesadas manualmente, causando retrasos operativos, discrepancias contables y errores humanos de digitación.",
    },
    architectureDetails: {
      en: "Event-driven ingestion architecture utilizing multimodal Vision LLMs with strict Zod JSON Schema parsing, idempotent worker pools, and fault-tolerant retry queues.",
      es: "Arquitectura de ingestión guiada por eventos que utiliza Vision LLMs multimodales con validación estricta JSON Schema mediante Zod, pools de workers idempotentes y colas tolerantes a fallos.",
    },
    implementationNotes: {
      en: [
        "Distributed worker architecture orchestrated using Node.js / Bun and Redis BullMQ queues with dead-letter monitoring.",
        "Structured multimodal extraction leveraging Vision LLMs with enforced JSON Schema validation via Zod.",
        "Automated inventory reconciliation engine cross-referencing extracted line items against ERP database records.",
        "Exponential backoff and failure isolation ensuring zero document loss under burst traffic.",
      ],
      es: [
        "Arquitectura distribuida de workers sobre Node.js / Bun y colas Redis BullMQ con monitorización de dead-letter.",
        "Extracción multimodal estructurada mediante Vision LLMs con validación estricta de JSON Schema con Zod.",
        "Motor de conciliación automática cotejando líneas de albarán contra registros de inventario en bases de datos ERP.",
        "Backoff exponencial y aislamiento de fallos garantizando cero pérdida de documentos ante picos de tráfico.",
      ],
    },
    stack: [
      "TypeScript",
      "Node.js",
      "Redis",
      "BullMQ",
      "Vision LLMs",
      "Zod",
      "Docker",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/oscar-lopez-martinez/async-document-pipeline",
    demoUrl: "https://document-pipeline-demo.oscarlopez.dev",
  },
];
