"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Users, Scale, BookOpen, Cpu, Award, Heart } from "lucide-react";

const Charity = () => {
  const t = useTranslations();

  return (
    <section id="charity" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30 -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-6">
            <Heart className="w-3 h-3" />
            <span>{t("charity.badge")}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            {t("charity.titlePrefix")}{" "}
            <span className="text-secondary italic">{t("charity.titleAccent")}</span>
          </h2>
          <p className="text-xl text-base-content/60 font-medium">
            {t("charity.tagline")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Founder Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass p-8 md:p-12 rounded-[2.5rem] border-secondary/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Award className="w-40 h-40 text-secondary" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded-lg bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest mb-6">
                {t("charity.founder.badge")}
              </div>
              <h3 className="text-3xl font-black mb-2">{t("charity.founder.name")}</h3>
              <p className="text-secondary font-bold mb-6 text-sm">{t("charity.founder.role")}</p>
              <p className="text-lg text-base-content/70 leading-relaxed mb-8">
                {t("charity.founder.bio")}
              </p>
              <div className="flex items-center gap-4 py-6 border-t border-base-content/5">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-sm font-bold italic opacity-60">"Legal help is a social tool, not just a service."</p>
              </div>
            </div>
          </motion.div>

          {/* Activities Grid */}
          <div className="lg:col-span-7 grid gap-6">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-black mb-2 px-1"
            >
              {t("charity.activities.title")}
            </motion.h4>
            
            {[
              { 
                icon: Scale, 
                title: t("charity.activities.personal.title"), 
                desc: t("charity.activities.personal.desc"),
                color: "primary"
              },
              { 
                icon: BookOpen, 
                title: t("charity.activities.education.title"), 
                desc: t("charity.activities.education.desc"),
                color: "accent"
              },
              { 
                icon: Cpu, 
                title: t("charity.activities.platform.title"), 
                desc: t("charity.activities.platform.desc"),
                color: "secondary"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-3xl flex flex-col md:flex-row gap-6 hover:translate-x-2 transition-transform border-base-content/5"
              >
                <div className={`w-14 h-14 shrink-0 rounded-2xl bg-${item.color}/10 flex items-center justify-center`}>
                  <item.icon className={`w-7 h-7 text-${item.color}`} />
                </div>
                <div>
                  <h5 className="text-xl font-bold mb-2">{item.title}</h5>
                  <p className="text-base-content/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 glass rounded-[3rem] border-primary/10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-mesh opacity-10" />
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-4">{t("charity.success.title")}</h3>
            <p className="text-xl text-base-content/60 max-w-2xl mx-auto italic">
              {t("charity.success.subtitle")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Charity;
