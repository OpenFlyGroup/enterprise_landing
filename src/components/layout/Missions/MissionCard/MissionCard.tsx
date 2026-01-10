import { motion } from "motion/react";
import { TValues } from "../types";

const MissionCard = (props: TValues) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: Number(props.id) * 0.1, duration: 0.6 }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    <div className="card glass p-8 sm:p-12 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-base-content/5 h-full">
      <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
        <props.icon className="w-10 h-10 text-primary group-hover:text-primary-content transition-colors" />
      </div>
      <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{props.title}</h3>
      <p className="text-lg text-base-content/60 leading-relaxed">{props.desc}</p>
    </div>
  </motion.div>
);

export default MissionCard;

