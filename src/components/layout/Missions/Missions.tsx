"use client";
import { Heart, Brain, Rocket, Sparkles } from "lucide-react";
import { TValues } from "./types";
import MissionCard from "./MissionCard/MissionCard";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function Missions() {
  const t = useTranslations();

  const values: TValues[] = [
    {
      id: "0",
      icon: Heart,
      title: t("missionSection.cards.0.title"),
      desc: t("missionSection.cards.0.description"),
    },
    {
      id: "1",
      icon: Brain,
      title: t("missionSection.cards.1.title"),
      desc: t("missionSection.cards.1.description"),
    },
    {
      id: "2",
      icon: Rocket,
      title: t("missionSection.cards.2.title"),
      desc: t("missionSection.cards.2.description"),
    },
  ];

  return (
    <section
      id="ourMission"
      className="section-padding relative overflow-hidden bg-base-100"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-10 -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
             <Sparkles className="w-4 h-4" />
             <span>{t("missionSection.badge")}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            {t("missionSection.titlePrefix")}{" "}
            <span className="text-gradient">{t("missionSection.titleAccent")}</span>{" "}
            {t("missionSection.titleSuffix")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {values.map((mission) => (
            <MissionCard key={mission.id} {...mission} />
          ))}
        </div>
      </div>
    </section>
  );
}

