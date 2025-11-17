import About from "@/src/components/layout/About/About";
import Join from "@/src/components/layout/Join/Join";
import Missions from "@/src/components/layout/Missions/Missions";
import Projects from "@/src/components/layout/Projects/Projects";
import Hero from "@/src/shared/ui/Hero";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <Hero />
        <About />
        <Projects />
        <Missions />
        <Join />
      </div>
    </main>
  );
}
