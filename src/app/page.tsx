import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Reactive Header with language switcher */}
      <Header />

      {/* Main content with Hero and Projects sections */}
      <main className="flex-1 w-full">
        <Hero />

        {/* Projects showcase section */}
        <Projects />
        <section id="trajectory" className="scroll-mt-20" aria-label="Trajectory" />
        <section id="pillars" className="scroll-mt-20" aria-label="Pillars" />
        <section id="contact" className="scroll-mt-20" aria-label="Contact" />
      </main>
    </div>
  );
}
