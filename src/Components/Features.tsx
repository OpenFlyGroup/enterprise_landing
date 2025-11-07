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
    title: "Общий календарь",
    desc: "Синхронизация задач в реальном времени",
  },
  { icon: Heart, title: "Трекер настроения", desc: "Оцени день: 1–5 + эмодзи" },
  {
    icon: BarChart3,
    title: "Анализ занятости",
    desc: "% времени на работу, семью, себя",
  },
  { icon: Bell, title: "Умные алерты", desc: "«Партнёр в стрессе»" },
  { icon: Lock, title: "Приватность", desc: "Вы решаете, что показывать" },
  { icon: Smartphone, title: "Офлайн-режим", desc: "Работает без интернета" },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-base-200/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Что внутри</h2>
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
