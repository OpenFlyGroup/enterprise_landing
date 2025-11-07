import Hero from "@/Components/ui/Hero";
import Mission from "@/Components/layout/Missions/Missions";
import Projects from "@/Components/layout/Projects/Projects";
import Join from "@/Components/layout/Join/Join";
import About from "@/Components/layout/About/About";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Mission />
      <Join />
    </main>
  );
}
