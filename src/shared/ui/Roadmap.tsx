"use client";
import { motion } from "motion/react";
import { CheckCircle2, Circle } from "lucide-react";

export interface IRoadmap {
  quarter: string;
  title: string;
  desc: string;
  done: boolean;
}

const Roadmap = ({ roadmap }: { roadmap: IRoadmap[] }) => {
  return (
    <section
      id="roadmap"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-20">
          Roadmap
        </h2>

        <div className="space-y-12 lg:space-y-16">
          {roadmap.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex items-start gap-6 sm:gap-8"
            >
              <div className="flex flex-col items-center shrink-0">
                <span className="text-lg sm:text-xl font-bold text-primary mb-3">
                  {item.quarter}
                </span>

                {item.done ? (
                  <CheckCircle2 className="w-9 h-9 sm:w-10 sm:h-10 text-primary" />
                ) : (
                  <Circle className="w-9 h-9 sm:w-10 sm:h-10 text-primary/40 stroke-[1.5]" />
                )}
              </div>

              <div
                className={`flex-1 bg-base-200/70 backdrop-blur-sm border border-base-300 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  item.done ? "ring-2 ring-primary/20" : ""
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-base-content">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg text-base-content/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
