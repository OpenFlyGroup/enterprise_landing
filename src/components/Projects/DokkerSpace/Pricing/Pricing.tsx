"use client";
import { motion } from "motion/react";
import { Link } from "@/src/i18n/routing";
import { Check, Zap, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations();

  const plans = [
    {
      name: t("pricing.plans.free.name"),
      price: "$0",
      features: t.raw("pricing.plans.free.features"),
      icon: Zap,
      cta: t("pricing.plans.free.cta"),
      color: "ghost",
      popular: false
    },
    {
      name: t("pricing.plans.pro.name"),
      price: "$20",
      period: "/mo",
      features: t.raw("pricing.plans.pro.features"),
      icon: Star,
      cta: t("pricing.plans.pro.cta"),
      color: "primary",
      popular: true
    }
  ];

  return (
    <section className="section-padding px-4 bg-linear-to-b from-transparent to-accent/5">
      <div className="container mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
             <Star className="w-3 h-3" />
             <span>{t("pricing.badge")}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            {t("pricing.titlePrefix")} <span className="text-gradient">{t("pricing.titleAccent")}</span>
          </h2>
          <p className="text-xl text-base-content/50 mt-4 max-w-2xl mx-auto font-medium">
            {t("pricing.tagline")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative card glass p-10 shadow-2xl border-base-content/5 flex flex-col justify-between overflow-hidden group hover:-translate-y-2 transition-all duration-300 ${
                plan.popular ? "ring-2 ring-primary/40" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-content px-6 py-2 rounded-bl-3xl font-black text-sm uppercase tracking-widest shadow-lg">
                  {t("pricing.mostPopular")}
                </div>
              )}

              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-base-content/10'}`}>
                   <plan.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-3xl font-black mb-2 tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black">{plan.price}</span>
                  {plan.period && <span className="text-base-content/40 font-bold">{plan.period}</span>}
                </div>

                <ul className="space-y-4 mb-10">
                  {(plan.features as string[]).map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-lg font-medium text-base-content/70 group-hover:text-base-content transition-colors">
                      <Check className={`w-5 h-5 ${plan.popular ? 'text-primary' : 'text-base-content/40'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="#" 
                className={`btn btn-lg rounded-2xl ${plan.popular ? 'btn-primary shadow-xl shadow-primary/25' : 'btn-outline border-base-content/10 hover:bg-base-content/5'} h-16 text-lg font-black transition-all`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


