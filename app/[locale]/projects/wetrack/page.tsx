"use client";
import BetaForm from "@/src/components/Projects/WeTrack/BetaForm/BetaForm";
import Features from "@/src/components/Projects/WeTrack/Features/Features";
import Preview, { PreviewProps } from "@/src/shared/ui/Preview";
import Roadmap, { IRoadmap } from "@/src/shared/ui/Roadmap";
import Stack, { IStack } from "@/src/shared/ui/Stack";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import {
  SiDjango,
  SiDocker,
  SiGo,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
} from "react-icons/si";

const stack: IStack[] = [
  { id: "0", icon: SiReact, name: "React Native / React" },
  { id: "1", icon: SiNestjs, name: "NestJS" },
  { id: "2", icon: SiDjango, name: "Django" },
  { id: "3", icon: SiGo, name: "Go" },
  { id: "4", icon: SiPostgresql, name: "PostgreSQL" },
  { id: "5", icon: SiMongodb, name: "MongoDB" },
  { id: "6", icon: SiDocker, name: "Docker" },
  { id: "7", icon: SiRabbitmq, name: "RabbitMQ" },
];

const WeTrackPage = () => {
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
    <main>
      <Preview {...PreviewContent} />
      <Features />
      {/* <Stack techs={stack} /> */}
      <Roadmap roadmap={roadmap} />
      <BetaForm />
    </main>
  );
};

export default WeTrackPage;
