"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/brand/logo.svg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src={logo}
            alt="OpenFly"
            width={120}
            height={120}
            className="mx-auto mb-6 float"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            Синхронизируй время и эмоции
          </h1>
          <p className="text-xl md:text-2xl text-base-content/80 mb-10">
            Общий календарь + трекер настроения = меньше стресса, больше
            гармонии
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="#beta" className="btn btn-primary btn-lg text-lg">
            Записаться на бета-тест
          </a>
        </motion.div>
      </div>
    </section>
  );
}
