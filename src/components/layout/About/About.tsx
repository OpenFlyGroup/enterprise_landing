"use client";
import { motion } from "motion/react";
import { Globe, Users, HeartHandshake, Code, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();

  return (
    <section id="about" className="section-padding bg-base-200/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Globe className="w-4 h-4" />
              <span>{t("about.sectionTitle")}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              {t("about.titlePrefix")}{" "}
              <span className="text-primary italic">
                {t("about.titleAccent")}
              </span>{" "}
              {t("about.titleSuffix")}
            </h2>

            <p className="text-xl mb-12 text-base-content/70 leading-relaxed max-w-2xl">
              {t("about.mainText")}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-3xl group hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t("about.card1Title")}
                </h3>
                <p className="text-base-content/60 text-sm leading-relaxed">
                  {t("about.weTrack")}
                </p>
              </div>

              <div className="glass p-6 rounded-3xl group hover:border-accent/50 transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {t("about.card2Title")}
                </h3>
                <p className="text-base-content/60 text-sm leading-relaxed">
                  {t("about.services")}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Visual element / Card group */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 blur-3xl rounded-full" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card glass shadow-2xl p-8 md:p-12 relative z-10 border-base-content/10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-8">
                <Users className="w-4 h-4" />
                <span>{t("about.whoWeAre")}</span>
              </div>

              <h3 className="text-3xl font-black mb-6">
                {t("about.teamTitlePrefix")}{" "}
                <span className="text-secondary">
                  {t("about.teamTitleAccent")}
                </span>
              </h3>

              <p className="text-lg opacity-80 mb-6 leading-relaxed">
                {t("about.teamDesc")}
              </p>

              <p className="text-lg opacity-80 mb-10 leading-relaxed">
                {t("about.servicesDesc")}
              </p>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-content/5 border border-base-content/5">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5 text-primary" />
                </div>
                <span className="font-bold text-sm tracking-wide uppercase italic">
                  {t("about.love")}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
