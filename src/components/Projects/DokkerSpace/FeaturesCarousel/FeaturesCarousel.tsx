"use client";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, PlayCircle, Maximize2 } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import screen1 from "@/public/screenshots/dokker.png";
import screen2 from "@/public/screenshots/dokker_all_templates.png";
import screen3 from "@/public/screenshots/dokker_popular_templates.png";

export default function FeaturesCarousel() {
  const t = useTranslations();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const screens = [
    {
      src: screen1,
      title: t("dokkerSpace.carousel.title1"),
      desc: t("dokkerSpace.carousel.desc1"),
      width: 1920,
      height: 1080,
    },
    {
      src: screen2,
      title: t("dokkerSpace.carousel.title2"),
      desc: t("dokkerSpace.carousel.desc2"),
      width: 1920,
      height: 1080,
    },
    {
      src: screen3,
      title: t("dokkerSpace.carousel.title3"),
      desc: t("dokkerSpace.carousel.desc3"),
      width: 1920,
      height: 1080,
    },
  ];

  const slides = screens.map((screen) => ({
    src: screen.src.src,
    alt: screen.title,
    width: screen.width,
    height: screen.height,
  }));

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : screens.length - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex < screens.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="section-padding px-4 bg-base-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 blur-[100px] rounded-full -translate-x-1/2 -z-10" />

      <div className="container mx-auto max-w-5xl">
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

        {/* Inline Gallery Container */}
        <div className="relative group">
          <div 
            className="glass rounded-[2rem] p-3 sm:p-5 shadow-2xl border-base-content/5 overflow-hidden cursor-zoom-in relative"
            onClick={() => setIsOpen(true)}
          >
            <Lightbox
              plugins={[Inline, Zoom]}
              slides={slides}
              index={currentIndex}
              inline={{
                style: {
                  width: "100%",
                  aspectRatio: "16 / 9",
                  borderRadius: "1rem",
                }
              }}
              carousel={{
                finite: false,
                preload: 1,
                spacing: 0,
              }}
              toolbar={{
                buttons: []
              }}
              render={{
                buttonPrev: () => null,
                buttonNext: () => null,
              }}
              on={{
                view: ({ index }) => setCurrentIndex(index),
              }}
            />
            
            {/* Hover Overlay Hint */}
            <div className="absolute inset-x-0 bottom-8 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-base-100/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-xl border border-base-content/10">
                <Maximize2 className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider">{t("learnMore")}</span>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Aligned relative to the image container */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-12 btn btn-circle btn-md lg:btn-lg glass bg-base-100/90 hover:bg-primary hover:text-primary-content border-base-content/10 shadow-xl transition-all z-20"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6 lg:w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-12 btn btn-circle btn-md lg:btn-lg glass bg-base-100/90 hover:bg-primary hover:text-primary-content border-base-content/10 shadow-xl transition-all z-20"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6 lg:w-8 h-8" />
          </button>
        </div>

        {/* Fullscreen Lightbox */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentIndex}
          slides={slides}
          plugins={[Zoom]}
          on={{
            view: ({ index }) => setCurrentIndex(index),
          }}
        />

          {/* Current Slide Info */}
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-gradient mb-4">
                {screens[currentIndex]?.title}
              </h3>
              <p className="text-lg text-base-content/60 leading-relaxed">
                {screens[currentIndex]?.desc}
              </p>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-4 mt-8">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-500 rounded-full h-3 ${
                  i === currentIndex
                    ? "bg-primary w-12"
                    : "bg-base-content/20 w-3 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
    </section>
  );
}

