"use client";
import FeaturesCarousel from "@/src/components/Projects/DokkerSpace/FeaturesCarousel/FeaturesCarousel";
import Pricing from "@/src/components/Projects/DokkerSpace/Pricing/Pricing";
import Preview, { PreviewProps } from "@/src/shared/ui/Preview";
import Roadmap, { IRoadmap } from "@/src/shared/ui/Roadmap";
import Stack, { IStack } from "@/src/shared/ui/Stack";
import Link from "next/link";
import {
  SiDjango,
  SiDocker,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

const PreviewContent: PreviewProps = {
  title: "Dokker Space",
  paragraph:
    "Create legal documents quickly and securely. Your reliable assistant for drafting contracts online.",
  element: (
    <Link href="#roadmap" className="btn btn-ghost btn-lg">
      Roadmap 2026
    </Link>
  ),
};

const roadmap: IRoadmap[] = [
  {
    quarter: "Q2 2026",
    title: "MVP Launch",
    desc: "Templates + Editor",
    done: false,
  },
  {
    quarter: "Q4 2026",
    title: "Digital Signatures",
    desc: "e-Sign & Sharing",
    done: false,
  },
  {
    quarter: "2027+",
    title: "AI Legal Assistant",
    desc: "Auto-fill & Compliance",
    done: false,
  },
];

const stack: IStack[] = [
  { id: "0", icon: SiNextdotjs, name: "Next.js" },
  { id: "1", icon: SiNestjs, name: "NestJS" },
  { id: "2", icon: SiDjango, name: "Django" },
  { id: "3", icon: SiDocker, name: "Docker" },
  { id: "4", icon: SiPostgresql, name: "PostgreSQL" },
];

const DokkerSpacePage = () => {
  return (
    <main>
      <Preview {...PreviewContent} />
      <FeaturesCarousel />
      <Stack techs={stack} />
      <Roadmap roadmap={roadmap} />
      <Pricing />
    </main>
  );
};

export default DokkerSpacePage;
