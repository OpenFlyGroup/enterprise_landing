"use client";
import { Clock, FileText, Shield, Sparkles, MoveRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import screenshot from "@/public/screenshots/dokker.png";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";

const DokkerSpaceCard = () => {
  const t = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="group relative"
    >
      <Link href="/projects/dokker_space" className="block relative">
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-linear-to-r from-accent/20 to-primary/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative card glass shadow-2xl overflow-hidden rounded-[2rem] border-base-content/5 group-hover:border-accent/20 transition-all duration-500">
          <div className="p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
              {/* Изображение - Left in grid (order handles this on LG) */}
              <div className="relative order-2 lg:order-1">
                <div className="relative group/img overflow-hidden rounded-3xl border border-base-content/10 shadow-2xl shadow-accent/10">
                  <Image
                    src={screenshot}
                    alt="Dokker Space – AI-powered legal documents"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-base-300/80 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold truncate">{t("dokkerSpace.card.secureEngine")}</p>
                      <p className="text-xs opacity-60">{t("dokkerSpace.card.poweredBy")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Текстовый блок - Right in grid (order handles this on LG) */}
              <div className="relative z-10 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3 h-3" />
                  <span>{t("dokkerSpace.card.aiPowered")}</span>
                </div>
                
                <h3 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight flex items-center gap-4">
                  Dokker<span className="text-accent italic">Space</span>
                </h3>

                <p className="text-xl mb-4 text-base-content/80 leading-relaxed font-bold">
                  {t("dokkerSpace.card.description")}
                </p>
                
                <p className="text-lg mb-8 text-base-content/60 leading-relaxed">
                  {t("dokkerSpace.card.subtitle")}
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Clock, text: t("dokkerSpace.card.readyInSeconds") },
                    { icon: Shield, text: t("dokkerSpace.card.secureCompliant") },
                    { icon: FileText, text: t("dokkerSpace.card.templates") }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-base-content/5 group-hover:bg-accent/10 transition-colors">
                      <div className="w-10 h-10 bg-base-100 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-semibold text-base-content/80">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 flex items-center gap-2 text-accent font-bold group-hover:translate-x-2 transition-transform">
                  <span>{t("dokkerSpace.card.viewCaseStudy")}</span>
                  <MoveRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DokkerSpaceCard;

