"use client";
import { motion } from "framer-motion";
export interface IRoadmap {
  quarter: string;
  title: string;
  desc: string;
  done: boolean;
}
const Roadmap = ({ roadmap }: { roadmap: IRoadmap[] }) => {
  return (
    <section id="roadmap" className="py-20 px-8">
      <div>
        <h2 className="text-4xl font-bold text-center mb-16">Roadmap</h2>
        <div className="space-y-8">
          {roadmap.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`card p-6 ${
                i % 2 === 0 ? "bg-base-100" : "bg-base-200"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-32 text-right">
                  <p className="text-lg font-bold text-primary">
                    {item.quarter}
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-base-content/70">{item.desc}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary/20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
