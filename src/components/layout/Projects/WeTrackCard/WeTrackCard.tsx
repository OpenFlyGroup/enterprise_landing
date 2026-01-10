"use client";
import { motion } from "motion/react";
import { Calendar, Coins, Users, Zap, MoveRight } from "lucide-react";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

const WeTrackCard = () => {
  const t = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <Link href="/projects/wetrack" className="block relative">
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative card glass shadow-2xl overflow-hidden rounded-[2rem] border-base-content/5 group-hover:border-primary/20 transition-all duration-500">
          <div className="p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Текстовый блок */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <Zap className="w-3 h-3" />
                  <span>{t("projects.featuredProject")}</span>
                </div>
                
                <h3 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight flex items-center gap-4">
                  <span className="text-primary italic">We</span>Track
                </h3>

                <p className="text-xl mb-10 text-base-content/70 leading-relaxed">
                  {t("weTrack.card.description")}
                </p>

                <div className="grid sm:grid-cols-1 gap-4">
                  {[
                    { icon: Zap, text: t("weTrack.card.moodCoins") },
                    { icon: Users, text: t("weTrack.card.syncing") },
                    { icon: Coins, text: t("weTrack.card.employmentAnalysis") }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-base-content/5 group-hover:bg-primary/10 transition-colors">
                      <div className="w-10 h-10 bg-base-100 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold text-base-content/80">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform">
                  <span>View Case Study</span>
                  <MoveRight className="w-5 h-5" />
                </div>
              </div>

              {/* Visual Block */}
              <div className="relative group-hover:scale-[1.02] transition-transform duration-700">
                <div className="aspect-square bg-linear-to-br from-base-200 to-base-300 rounded-3xl overflow-hidden flex flex-col items-center justify-center relative p-8 border border-base-content/5">
                  <div className="absolute inset-0 bg-mesh opacity-30"></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-[2rem] flex items-center justify-center mb-6 animate-float">
                      <Calendar className="w-12 h-12 text-primary drop-shadow-lg" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{t("weTrack.card.comingSoon")}</h4>
                    <p className="text-base-content/50 max-w-[15rem]">
                      {t("weTrack.card.screenshots")}
                    </p>
                  </div>
                  
                  {/* Decorative UI elements */}
                  <div className="absolute top-8 right-8 w-20 h-4 bg-primary/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 left-8 w-32 h-4 bg-accent/10 rounded-full animate-pulse delay-75"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default WeTrackCard;

