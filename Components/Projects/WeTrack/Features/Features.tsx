"use client";
import { motion } from "framer-motion";
import {
  Calendar,
  Heart,
  Bell,
  Lock,
  Smartphone,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Shared calendar",
    desc: "Real-time task synchronization",
  },
  { icon: Heart, title: "Mood Tracker", desc: "Sentiment Analytics" },
  {
    icon: BarChart3,
    title: "Employment analysis",
    desc: "% of the time for work, family, self",
  },
  { icon: Bell, title: "Smart alerts", desc: "«Stressed partner»" },
  { icon: Lock, title: "Privacy", desc: "You decide what to show" },
  {
    icon: Smartphone,
    title: "Offline-mode",
    desc: "It works without internet connection",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-8 bg-base-200/50">
      <div>
        <h2 className="text-4xl font-bold text-center mb-16">
          What&apos;s inside
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card bg-base-100 shadow-xl p-6"
            >
              <f.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-base-content/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
