import { motion } from "motion/react";
import { TValues } from "../types";

const MissionCard = (props: TValues) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: Number(props.id) * 0.2 }}
    className="card bg-base-100 p-8 shadow-xl"
  >
    <props.icon className="w-16 h-16 text-primary mx-auto mb-4" />
    <h3 className="text-2xl font-bold mb-2">{props.title}</h3>
    <p className="text-base-content/70">{props.desc}</p>
  </motion.div>
);

export default MissionCard;
