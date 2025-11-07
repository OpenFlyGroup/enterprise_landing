"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import screen1 from "@/public/screenshots/dokker.png";
import screen2 from "@/public/screenshots/dokker_all_templates.png";
import screen3 from "@/public/screenshots/dokker_popular_templates.png";

const screens = [
  { src: screen1, title: "Home page" },
  { src: screen2, title: "Choose Template" },
  { src: screen3, title: "Popular Templates" },
];

export default function FeaturesCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % screens.length);
  const prev = () => setIndex((i) => (i - 1 + screens.length) % screens.length);

  return (
    <section className="pb-20 px-24">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

        <div className="relative">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="relative"
          >
            <div className="bg-base-200 rounded-2xl p-6 shadow-2xl">
              <Image
                src={screens[index].src}
                alt={screens[index].title}
                width={1920}
                height={1080}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
              <p className="text-center mt-4 font-medium text-lg">
                {screens[index].title}
              </p>
            </div>
          </motion.div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 btn btn-circle btn-active"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 btn btn-circle btn-active"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="flex justify-center gap-2 mt-6">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index ? "bg-primary w-8" : "bg-base-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
