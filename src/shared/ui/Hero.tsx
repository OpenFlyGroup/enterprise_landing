"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@/src/i18n/routing";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-32 pb-20 mesh-gradient">
      {/* Layered Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full animate-pulse-slow delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-secondary/5 blur-[100px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-12 border border-primary/20"
        >
          <Sparkles className="w-3 h-3" />
          <span>{t("hero.badge")}</span>
        </motion.div>

        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter mb-10 leading-[0.85] text-base-content">
          <span className="block opacity-90">{t("hero.titlePrefix") || "Welcome to"}</span>
          <span className="text-gradient block pb-4">{t("hero.titleAccent") || "OpenFly"}</span>
        </h1>

        <p className="text-lg md:text-2xl text-base-content/50 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#projects"
            className="btn btn-primary btn-lg rounded-full px-12 h-16 text-xs font-black uppercase tracking-widest shadow-2xl shadow-primary/20 group"
          >
            {t("navProjects")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#about"
            className="btn btn-ghost btn-lg rounded-full px-12 h-16 text-xs font-black uppercase tracking-widest border-base-content/10 hover:bg-base-content/5"
          >
            {t("learnMore")}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
