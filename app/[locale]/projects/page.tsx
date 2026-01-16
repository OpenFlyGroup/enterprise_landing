import Projects from "@/src/components/layout/Projects/Projects";
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our innovative projects: WeTrack for mood and task tracking, Dokker Space for legal document creation, and more tools for conscious living.",
  keywords: ["projects", "WeTrack", "Dokker Space", "apps", "tools", "productivity"],
  openGraph: {
    title: "Our Projects - OpenFly",
    description: "Explore our innovative projects: WeTrack for mood and task tracking, Dokker Space for legal document creation.",
    url: "/projects",
    images: [
      {
        url: "/brand/logo_horizontal.svg",
        width: 1200,
        height: 630,
        alt: "OpenFly Projects",
      },
    ],
  },
};

const ProjectsPage = async ({
  params
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <div className="min-h-screen mt-20">
        <Projects />
      </div>
    </>
  );
};

export default ProjectsPage;

