import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Trajectory } from "@/components/trajectory";
import { Pillars } from "@/components/pillars";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Reactive Header with language switcher */}
      <Header />

      {/* Main content with Hero, Projects, Trajectory, Pillars, and Contact sections */}
      <main className="flex-1 w-full">
        <Hero />

        {/* Projects showcase section */}
        <Projects />

        {/* Professional trajectory and skills bridge */}
        <Trajectory />

        {/* Core pillars of value */}
        <Pillars />

        {/* Direct Contact section */}
        <Contact />
      </main>
    </div>
  );
}


