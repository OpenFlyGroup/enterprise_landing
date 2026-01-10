"use client";
import { motion } from "motion/react";
import {
  Calendar,
  Heart,
  Bell,
  Lock,
  Smartphone,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations();

  const features = [
    {
      icon: Calendar,
      title: t("weTrack.sharedCalendar"),
      desc: t("weTrack.sharedCalendarDesc"),
    },
    {
      icon: Heart,
      title: t("weTrack.moodTracker"),
      desc: t("weTrack.moodTrackerDesc"),
    },
    {
      icon: BarChart3,
      title: t("weTrack.employmentAnalysis"),
      desc: t("weTrack.employmentAnalysisDesc"),
    },
    {
      icon: Bell,
      title: t("weTrack.smartAlerts"),
      desc: t("weTrack.smartAlertsDesc"),
    },
    {
      icon: Lock,
      title: t("weTrack.privacy"),
      desc: t("weTrack.privacyDesc"),
    },
    {
      icon: Smartphone,
      title: t("weTrack.offlineMode"),
      desc: t("weTrack.offlineModeDesc"),
    },
  ];
  return (
    <section className="section-padding bg-base-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3" />
            <span>{t("weTrack.featuresBadge")}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            {t("weTrack.whatsInside").split(" ").map((word, i) => 
               i === 1 ? <span key={i} className="text-gradient"> {word} </span> : word + " "
            )}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="card glass p-8 shadow-xl border-base-content/5 group hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                <f.icon className="w-8 h-8 text-primary group-hover:text-primary-content transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
              <p className="text-base-content/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

