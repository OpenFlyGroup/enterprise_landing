"use client";
import { motion } from "motion/react";
import Link from "next/link";

export default function Join() {
  return (
    <section id="beta" className="py-20 mx-auto px-4 md:px-8 bg-base-200">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Join us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-base-100 p-6 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-3">Beta test</h3>
            <p className="mb-4">Wanna try WeTrack first?</p>
            <Link href="/projects/wetrack/#beta" className="btn btn-primary">
              Send application
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-base-100 p-6 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-3">Job opportunity</h3>
            <p className="mb-4">Join our services</p>
            <Link
              href="mailto:jobs@openfly.app"
              className="btn btn-outline btn-disabled"
            >
              There are no open job openings
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-base-100 p-6 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-3">Partners</h3>
            <p className="mb-4">Integrations, API, Investments</p>
            <a href="mailto:partners@openfly.app" className="btn btn-outline">
              Write us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
