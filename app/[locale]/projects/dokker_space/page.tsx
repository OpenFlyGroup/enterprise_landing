import FeaturesCarousel from "@/src/components/Projects/DokkerSpace/FeaturesCarousel/FeaturesCarousel";

import Preview, { PreviewProps } from "@/src/shared/ui/Preview";
import Roadmap, { IRoadmap } from "@/src/shared/ui/Roadmap";

import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Dokker Space - Legal Document Creation",
    description: "Create legal documents quickly and securely with Dokker Space. Your reliable assistant for drafting contracts online with AI-powered templates and digital signatures.",
    keywords: ["Dokker Space", "legal documents", "contracts", "AI templates", "document creation", "online legal", "digital signature", "legal assistance"],
    alternates: {
      canonical: "/projects/dokker_space",
    },
    openGraph: {
      title: "Dokker Space - Legal Document Creation",
      description: "Create legal documents quickly and securely with AI-powered templates and digital signatures.",
      url: "/projects/dokker_space",
      images: [
        {
          url: "/screenshots/dokker.png",
          width: 1200,
          height: 630,
          alt: "Dokker Space Screenshot",
        },
      ],
    },
  };
}



const DokkerSpaceClient = () => {
  const t = useTranslations();

  const PreviewContent: PreviewProps = {
    title: t("projectPages.dokkerSpace.title"),
    paragraph: t("projectPages.dokkerSpace.description"),
    element: (
      <Link
        href="#roadmap"
        className="btn btn-primary btn-lg rounded-full px-12 shadow-xl shadow-primary/20"
      >
        {t("projectPages.dokkerSpace.roadmapButton")}
      </Link>
    ),
  };

  const roadmap: IRoadmap[] = [
    {
      quarter: t("projectPages.dokkerSpace.roadmap.0.quarter"),
      title: t("projectPages.dokkerSpace.roadmap.0.title"),
      desc: t("projectPages.dokkerSpace.roadmap.0.desc"),
      done: false,
    },
    {
      quarter: t("projectPages.dokkerSpace.roadmap.1.quarter"),
      title: t("projectPages.dokkerSpace.roadmap.1.title"),
      desc: t("projectPages.dokkerSpace.roadmap.1.desc"),
      done: false,
    },
    {
      quarter: t("projectPages.dokkerSpace.roadmap.2.quarter"),
      title: t("projectPages.dokkerSpace.roadmap.2.title"),
      desc: t("projectPages.dokkerSpace.roadmap.2.desc"),
      done: false,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Dokker Space",
            "description": "Create legal documents quickly and securely. Your reliable assistant for drafting contracts online.",
            "url": "https://openfly.tech/projects/dokker_space",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free tier with basic templates"
            },
            "featureList": [
              "AI-powered templates",
              "Legal document creation",
              "Secure document storage",
              "Digital signatures"
            ],
            "publisher": {
              "@type": "Organization",
              "name": "OpenFly"
            }
          })
        }}
      />
      <main>
      <Preview {...PreviewContent} />
      <FeaturesCarousel />
      {/* <Stack techs={stack} /> */}
      <Roadmap roadmap={roadmap} />
      {/* <Pricing /> */}
    </main>
    </>
  );
};

const DokkerSpacePage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <DokkerSpaceClient />;
};

export default DokkerSpacePage;
