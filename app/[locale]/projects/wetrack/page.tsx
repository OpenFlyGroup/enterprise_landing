import BetaForm from "@/src/components/Projects/WeTrack/BetaForm/BetaForm";
import Features from "@/src/components/Projects/WeTrack/Features/Features";
import Preview, { PreviewProps } from "@/src/shared/ui/Preview";
import Roadmap, { IRoadmap } from "@/src/shared/ui/Roadmap";

import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "WeTrack - Mood and Task Tracking App",
    description: "WeTrack is your ultimate companion for tracking tasks, mood, and relationships. Achieve balance with smart analytics and real-time synchronization.",
    keywords: ["WeTrack", "mood tracking", "task management", "relationships", "productivity", "app", "family sync", "conscious living"],
    alternates: {
      canonical: "/projects/wetrack",
    },
    openGraph: {
      title: "WeTrack - Mood and Task Tracking App",
      description: "Track tasks, mood, and relationships with WeTrack. Real-time synchronization for couples and families.",
      url: "/projects/wetrack",
      images: [
        {
          url: "/screenshots/wetrack.png",
          width: 1200,
          height: 630,
          alt: "WeTrack App Screenshot",
        },
      ],
    },
  };
}



const WeTrackClient = () => {
  const t = useTranslations();

  const PreviewContent: PreviewProps = {
    title: t("projectPages.weTrack.title"),
    paragraph: t("projectPages.weTrack.description"),
    element: (
      <Link href="#roadmap" className="btn btn-primary btn-lg rounded-full px-12 shadow-xl shadow-primary/20">
        {t("projectPages.weTrack.roadmapButton")}
      </Link>
    ),
  };

  const roadmap: IRoadmap[] = [
    {
      quarter: t("projectPages.weTrack.roadmap.0.quarter"),
      title: t("projectPages.weTrack.roadmap.0.title"),
      desc: t("projectPages.weTrack.roadmap.0.desc"),
      done: false,
    },
    {
      quarter: t("projectPages.weTrack.roadmap.1.quarter"),
      title: t("projectPages.weTrack.roadmap.1.title"),
      desc: t("projectPages.weTrack.roadmap.1.desc"),
      done: false,
    },
    {
      quarter: t("projectPages.weTrack.roadmap.2.quarter"),
      title: t("projectPages.weTrack.roadmap.2.title"),
      desc: t("projectPages.weTrack.roadmap.2.desc"),
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
            "@type": "MobileApplication",
            "name": "WeTrack",
            "description": "Your ultimate companion for tracking tasks, mood, and relationships. Perfect for individuals, couples, and families.",
            "url": "https://openfly.tech/projects/wetrack",
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Beta access available"
            },
            "featureList": [
              "Mood tracking",
              "Task management",
              "Relationship analytics",
              "Family synchronization",
              "Smart alerts",
              "Offline mode"
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
      <Features />
      {/* <Stack techs={stack} /> */}
      <Roadmap roadmap={roadmap} />
      <BetaForm />
    </main>
    </>
  );
};

const WeTrackPage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <WeTrackClient />;
};

export default WeTrackPage;
