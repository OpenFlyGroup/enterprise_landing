"use client";

import { Link } from "@/src/i18n/routing";
import WeTrackCard from "./WeTrackCard/WeTrackCard";
import { ReactElement } from "react";
import DokkerSpaceCard from "./DokkerSpaceCard/DokkerSpaceCard";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

const BaseUrl = "/projects/";

export default function Projects() {
  const t = useTranslations();

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-base-100">
      {/* Mesh background effect */}
      <div className="absolute inset-0 bg-mesh opacity-5 -z-10" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            {t("projects.titlePrefix")}{" "}
            <span className="text-gradient">{t("projects.titleSuffix")}</span>
          </h2>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-32">
          <WeTrackCard />
          <DokkerSpaceCard />
        </div>
      </div>
    </section>
  );
}

