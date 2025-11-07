"use client";
import BetaForm from "@/Components/Projects/WeTrack/BetaForm/BetaForm";
import Features from "@/Components/Projects/WeTrack/Features/Features";
import Preview, { PreviewProps } from "@/Components/ui/Preview";
import Link from "next/link";
import Roadmap, { IRoadmap } from "@/Components/ui/Roadmap";
import Stack, { IStack } from "@/Components/ui/Stack";
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

const PreviewContent: PreviewProps = {
  title: "WeTrack",
  paragraph:
    "is your ultimate companion for tracking tasks, mood, and relationships. Whether you&apos;re flying solo, in a relationship, or managing a family, this app has you covered! 🌍",
  element: (
    <Link href="#roadmap" className="btn btn-ghost btn-lg">
      Roadmap 2026
    </Link>
  ),
};

const roadmap: IRoadmap[] = [
  {
    quarter: "Q1 2026",
    title: "MVP WeTrack",
    desc: "Magazine, mood, analytics",
    done: false,
  },
  {
    quarter: "Q3 2026",
    title: "Synchronization",
    desc: "Couples, families, analytics",
    done: false,
  },
  {
    quarter: "2027+",
    title: "AI and growth",
    desc: "Recommendations, challenges, integrations",
    done: false,
  },
];

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
  return (
    <main>
      <Preview {...PreviewContent} />
      <Features />
      <Stack techs={stack} />
      <Roadmap roadmap={roadmap} />
      <BetaForm />
    </main>
  );
};

export default WeTrackPage;
