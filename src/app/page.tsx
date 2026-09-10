export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-dark text-zinc-100 flex flex-col">
      {/* Shell Header */}
      <header className="sticky top-0 z-40 glass-nav">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-mono font-bold text-black text-sm">
              OL
            </div>
            <span className="font-semibold tracking-tight text-white">
              Oscar López Martínez
            </span>
          </div>
        </div>
      </header>

      {/* Shell Content */}
      <div className="flex-1 max-w-5xl mx-auto px-6 py-16 w-full glow-effect">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Senior Fullstack Engineer → AI Engineer
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Oscar López Martínez
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Robust enterprise foundations (.NET) meets modern applied AI
          engineering (TypeScript, React, Next.js).
        </p>
      </div>
    </main>
  );
}
