"use client";
import FeaturesCarousel from "@/src/components/Projects/DokkerSpace/FeaturesCarousel/FeaturesCarousel";
import Pricing from "@/src/components/Projects/DokkerSpace/Pricing/Pricing";
import Preview, { PreviewProps } from "@/src/shared/ui/Preview";
import Roadmap, { IRoadmap } from "@/src/shared/ui/Roadmap";
import Stack, { IStack } from "@/src/shared/ui/Stack";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import {
  SiDjango,
  SiDocker,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

const stack: IStack[] = [
  { id: "0", icon: SiNextdotjs, name: "Next.js" },
  { id: "1", icon: SiNestjs, name: "NestJS" },
  { id: "2", icon: SiDjango, name: "Django" },
  { id: "3", icon: SiDocker, name: "Docker" },
  { id: "4", icon: SiPostgresql, name: "PostgreSQL" },
];

const DokkerSpacePage = () => {
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
    <main>
      <Preview {...PreviewContent} />
      <FeaturesCarousel />
      {/* <Stack techs={stack} /> */}
      <Roadmap roadmap={roadmap} />
      {/* <Pricing /> */}
    </main>
  );
};

export default DokkerSpacePage;
