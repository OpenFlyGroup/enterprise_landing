"use client";
import { motion } from "motion/react";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import { Send, Briefcase, Handshake, Sparkles } from "lucide-react";

export default function Join() {
  const t = useTranslations();

  const joinCards = [
    {
      title: t("join.betaTest.title"),
      description: t("join.betaTest.description"),
      buttonText: t("join.betaTest.button"),
      href: "/projects/wetrack",
      icon: Send,
      color: "primary",
      disabled: false
    },
    {
      title: t("join.jobOpportunity.title"),
      description: t("join.jobOpportunity.description"),
      buttonText: t("join.jobOpportunity.button"),
      href: "mailto:jobs@openfly.app",
      icon: Briefcase,
      color: "secondary",
      disabled: true
    },
    {
      title: t("join.partners.title"),
      description: t("join.partners.description"),
      buttonText: t("join.partners.button"),
      href: "mailto:team@openfly.tech",
      icon: Handshake,
      color: "accent",
      disabled: false
    }
  ];

  return (
    <section id="join" className="section-padding bg-base-200/30 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -z-10" />
      
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>{t("join.opportunities")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black">{t("join.sectionTitle")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {joinCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="card glass p-8 shadow-xl border-base-content/5 group h-full flex flex-col justify-between"
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto bg-${card.color}/10 group-hover:bg-${card.color}/20 transition-colors`}>
                  <card.icon className={`w-8 h-8 text-${card.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-base-content/60 mb-8 leading-relaxed">
                  {card.description}
                </p>
              </div>
              
              <Link 
                href={card.href} 
                className={`btn btn-${card.color} ${card.disabled ? 'btn-disabled' : ''} rounded-full px-8 shadow-lg group-hover:shadow-${card.color}/25 transition-all`}
              >
                {card.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

