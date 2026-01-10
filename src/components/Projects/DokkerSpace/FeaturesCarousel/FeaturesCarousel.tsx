"use client";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

import screen1 from "@/public/screenshots/dokker.png";
import screen2 from "@/public/screenshots/dokker_all_templates.png";
import screen3 from "@/public/screenshots/dokker_popular_templates.png";

export default function FeaturesCarousel() {
  const t = useTranslations();
  const [index, setIndex] = useState(0);

  const screens = [
    { src: screen1, title: t("dokkerSpace.carousel.title1") },
    { src: screen2, title: t("dokkerSpace.carousel.title2") },
    { src: screen3, title: t("dokkerSpace.carousel.title3") },
  ];

  const next = () => setIndex((i) => (i + 1) % screens.length);
  const prev = () => setIndex((i) => (i - 1 + screens.length) % screens.length);

  return (
    <section className="section-padding px-4 bg-base-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
             <PlayCircle className="w-3 h-3" />
             <span>{t("dokkerSpace.visualTour")}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            {t("dokkerSpace.howItWorks").split(" ").map((word, i) => 
               i === 2 ? <span key={i} className="text-gradient">{word}</span> : word + " "
            )}
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="glass rounded-[2.5rem] p-4 sm:p-6 lg:p-10 shadow-3xl border-base-content/5 group">
                <div className="relative overflow-hidden rounded-[2rem] shadow-inner aspect-video bg-base-300/50">
                  <Image
                    src={screens[index].src}
                    alt={screens[index].title}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                <div className="text-center mt-10">
                   <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-gradient inline-block">
                    {screens[index].title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:px-6 pointer-events-none">
            <button
              onClick={prev}
              className="btn btn-circle btn-lg glass bg-base-100/50 hover:bg-primary hover:text-primary-content border-base-content/5 shadow-2xl pointer-events-auto transition-all"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={next}
              className="btn btn-circle btn-lg glass bg-base-100/50 hover:bg-primary hover:text-primary-content border-base-content/5 shadow-2xl pointer-events-auto transition-all"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-500 rounded-full h-2 ${
                  i === index
                    ? "bg-primary w-12"
                    : "bg-base-content/20 w-4 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

