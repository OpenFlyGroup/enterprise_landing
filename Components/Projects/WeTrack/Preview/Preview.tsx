"use client";
import { motion } from "motion/react";
import Link from "next/link";

const Preview = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <Image
            src={logo}
            alt="OpenFly"
            width={140}
            height={140}
            className="mx-auto mb-8 float"
          /> */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">WeTrack</span>
          </h1>
          <p className="text-xl md:text-2xl text-base-content/80 mb-8 max-w-3xl mx-auto">
            is your ultimate companion for tracking tasks, mood, and
            relationships. Whether you&apos;re flying solo, in a relationship,
            or managing a family, this app has you covered! 🌍
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#roadmap" className="btn btn-ghost btn-lg">
              Roadmap 2026
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Preview;
