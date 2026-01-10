"use client";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { IconType } from "react-icons";
import { Cpu, Zap } from "lucide-react";

export interface IStack {
  id: string;
  icon: IconType;
  name: string;
}

const Stack = ({ techs }: { techs: IStack[] }) => {
  const t = useTranslations();

  return (
    <>
      <section className="section-padding px-4 bg-linear-to-b from-transparent to-base-200/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-[3rem] p-8 md:p-16 border-base-content/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10" />
            
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <Cpu className="w-3 h-3" />
                  <span>{t("stack.badge")}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
                  {t("stack.titlePrefix")} <span className="text-gradient">{t("stack.titleAccent")}</span>
                </h3>
                <p className="text-xl text-base-content/60 leading-relaxed font-medium">
                  {t("stack.description")}
                </p>
              </div>

              <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6 w-full">
                <div className="card glass p-8 border-base-content/5 hover:border-primary/20 transition-all transition-duration-300">
                  <h4 className="text-xl font-black mb-3">
                    {t("stack.gatewayTitle")}
                  </h4>
                  <p className="text-base-content/50 font-medium">
                    {t("stack.gatewayDesc")}
                  </p>
                </div>
                <div className="card glass p-8 border-base-content/5 hover:border-primary/20 transition-all transition-duration-300">
                  <h4 className="text-xl font-black mb-3">
                    {t("stack.authTitle")}
                  </h4>
                  <p className="text-base-content/50 font-medium">
                    {t("stack.authDesc")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3 h-3" />
              <span>{t("stack.techBadge")}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
              {t("stack.techTitlePrefix")} <span className="text-gradient">{t("stack.techTitleAccent")}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {techs.map((tech) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: Number(tech.id) * 0.05,
                }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center group"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 glass rounded-3xl flex items-center justify-center mb-6 shadow-xl border-base-content/5 group-hover:bg-primary group-hover:shadow-primary/20 transition-all duration-500">
                  <tech.icon className="w-12 h-12 sm:w-16 sm:h-16 text-primary group-hover:text-primary-content transition-colors duration-500" />
                </div>
                <p className="text-lg font-black tracking-tighter uppercase opacity-40 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stack;

