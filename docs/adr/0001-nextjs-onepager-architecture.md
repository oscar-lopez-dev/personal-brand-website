# Next.js App Router y Arquitectura One-Pager

## Contexto y Decisión

Para la web de marca personal de Oscar López Martínez, elegimos **Next.js (App Router) + TypeScript + Tailwind CSS** con una arquitectura inicial **One-Pager narrativo**, en lugar de Astro o un sitio multi-página tradicional.

## Razones del Trade-off

1. **Sinergia formativa y coherencia de posicionamiento**: El objetivo profesional es consolidar y proyectar competencias en TypeScript, React y desarrollo moderno; construir la propia web en Next.js sirve de práctica real ("dogfooding") de la tecnología objetivo.
2. **Capacidad nativa para IA**: Next.js provee Server Components, API routes y Server Actions integrados, permitiendo añadir demostraciones interactivas con LLMs en el futuro sin requerir un backend externo.
3. **Conversión y retención en B2B**: Un One-Pager cohesivo permite a directivos y directores técnicos captar en menos de un minuto la trayectoria (.NET a AI), los pilares analíticos y las arquitecturas de referencia sin sufrir fricción de navegación.
4. **Escalabilidad desacoplada**: Los datos de proyectos se modelan de forma desacoplada (`src/data/projects.ts`), lo que permitirá añadir rutas individuales (`/projects/[slug]`) o soporte MDX sin reescribir la aplicación.
