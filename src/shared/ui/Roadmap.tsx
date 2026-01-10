"use client";
import { motion } from "motion/react";
import { CheckCircle2, Circle, Flag } from "lucide-react";
import { useTranslations } from "next-intl";

export interface IRoadmap {
  quarter: string;
  title: string;
  desc: string;
  done: boolean;
}

const Roadmap = ({ roadmap }: { roadmap: IRoadmap[] }) => {
  const t = useTranslations();

  return (
    <section
      id="roadmap"
      className="section-padding px-4 relative overflow-hidden bg-base-200/20"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-mesh opacity-10 -z-10" />
      
      <div className="container mx-auto max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Flag className="w-3 h-3" />
            <span>{t("roadmap.badge")}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight flex flex-col md:flex-row justify-center gap-2 md:gap-4">
            <span>{t("roadmap.titlePrefix")}</span>
            <span className="text-gradient">{t("roadmap.titleAccent")}</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] sm:left-[39px] top-4 bottom-4 w-px bg-linear-to-b from-primary/50 via-accent/50 to-transparent" />

          <div className="space-y-16">
            {roadmap.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-start gap-8 sm:gap-12 relative"
              >
                <div className="flex flex-col items-center shrink-0 relative z-10">
                  <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    item.done ? "bg-primary text-primary-content shadow-lg shadow-primary/30" : "bg-base-100 border border-base-content/10 text-base-content/30"
                  }`}>
                    {item.done ? (
                      <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                    ) : (
                      <span className="text-lg sm:text-2xl font-black">{i + 1}</span>
                    )}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-base-content/5 text-sm font-black mb-4 uppercase tracking-tighter opacity-60">
                    {item.quarter}
                  </span>
                  
                  <div className={`card glass p-8 sm:p-10 shadow-xl border-base-content/5 group hover:border-primary/20 transition-all duration-300 max-w-3xl ${
                    item.done ? "border-primary/20" : ""
                  }`}>
                    <h3 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-base-content/60 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

