"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mx-auto px-4 md:px-8"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
          <span className="text-primary block sm:inline">Welcome to </span>
          <span className="block sm:inline">OpenFly!</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-base-content/80 max-w-4xl mx-auto leading-relaxed">
          🌟 We are a vibrant community building innovative apps and a powerful
          service ecosystem to help people live balanced, fulfilling lives
        </p>
      </motion.div>
    </section>
  );
}
