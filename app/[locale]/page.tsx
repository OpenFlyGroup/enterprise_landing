import About from "@/src/components/layout/About/About";
import Charity from "@/src/components/layout/Charity/Charity";
import Join from "@/src/components/layout/Join/Join";
import Missions from "@/src/components/layout/Missions/Missions";
import Projects from "@/src/components/layout/Projects/Projects";
import Hero from "@/src/shared/ui/Hero";
import { setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <Hero />
        <About />
        <Projects />
        <Missions />
        {/* <Charity /> */}
        <Join />
      </div>
    </main>
  );
}
