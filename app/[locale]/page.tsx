import About from "@/src/components/layout/About/About";

import Join from "@/src/components/layout/Join/Join";
import Missions from "@/src/components/layout/Missions/Missions";
import Projects from "@/src/components/layout/Projects/Projects";
import Hero from "@/src/shared/ui/Hero";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // We can't use useTranslations here directly as it's not a component
  // But we can get the current locale if needed, however metadata usually stays in English 
  // unless we specifically want to localize it.
  // For simplicity and better SEO, let's keep it descriptive.
  return {
    title: "Tools for Conscious Living",
    description: "Welcome to OpenFly - a vibrant community building innovative apps and a powerful service ecosystem to help people live balanced, fulfilling lives. Discover our projects: WeTrack and Dokker Space.",
    keywords: ["OpenFly", "conscious living", "WeTrack", "Dokker Space", "productivity apps", "mood tracking", "legal assistance", "community project"],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "OpenFly - Tools for Conscious Living",
      description: "Building innovative apps and services to help people live balanced, fulfilling lives.",
      url: "/",
      images: [
        {
          url: "/brand/logo_horizontal.svg",
          width: 1200,
          height: 630,
          alt: "OpenFly Logo",
        },
      ],
    },
  };
}

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
