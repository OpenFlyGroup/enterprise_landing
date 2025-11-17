"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import screen1 from "@/public/screenshots/dokker.png";
import screen2 from "@/public/screenshots/dokker_all_templates.png";
import screen3 from "@/public/screenshots/dokker_popular_templates.png";

const screens = [
  { src: screen1, title: "Main page" },
  { src: screen2, title: "Selecting a template" },
  { src: screen3, title: "Popular templates" },
];

export default function FeaturesCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % screens.length);
  const prev = () => setIndex((i) => (i - 1 + screens.length) % screens.length);

  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
          How it works?
        </h2>

        <div className="relative">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-base-200/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-base-300">
              <div className="relative overflow-hidden rounded-xl shadow-inner">
                <Image
                  src={screens[index].src}
                  alt={screens[index].title}
                  width={1920}
                  height={1080}
                  className="w-full h-auto rounded-xl object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1000px"
                  priority
                />
              </div>

              <p className="text-center mt-6 text-lg sm:text-xl font-semibold text-base-content">
                {screens[index].title}
              </p>
            </div>
          </motion.div>

          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-primary shadow-lg z-10"
            aria-label="Предыдущий скриншот"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-primary shadow-lg z-10"
            aria-label="Следующий скриншот"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === index
                    ? "bg-primary w-10 h-3"
                    : "bg-base-300 w-3 h-3 hover:bg-primary/50"
                }`}
                aria-label={`Перейти к слайду ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
