"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex justify-center items-center px-8">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between"
        >
          <h1 className="text-5xl md:text-8xl font-bold mb-6 text-left">
            <span className="text-primary">Welcome to OpenFly!</span>
          </h1>
          <p className="text-xl md:text-3xl font-semibold mb-8 max-w-2xl mx-auto text-right">
            🌟 We are a vibrant community building innovative apps and a
            powerful service ecosystem to help people live balanced, fulfilling
            lives
          </p>
        </motion.div>
      </div>
    </section>
  );
}
