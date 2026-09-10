import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Reactive Header with language switcher */}
      <Header />

      {/* Shell Content */}
      <main id="hero" className="flex-1 max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-accent mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          Fullstack to AI Engineer
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Oscar López Martínez
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Robust enterprise foundations (.NET) meets modern applied AI
          engineering (TypeScript, React, Next.js).
        </p>
      </main>
    </div>
  );
}
