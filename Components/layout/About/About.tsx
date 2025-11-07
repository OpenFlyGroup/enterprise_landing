"use client";
import { motion } from "motion/react";
import { Globe, Users, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-base-200/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-row md:flex items-center justify-between gap-32"
      >
        <div>
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <Globe className="w-10 h-10 text-primary" />
            About Us
          </h2>

          <p className="text-xl mb-6">
            At OpenFly, we&apos;re passionate about using technology to make
            life better. Our team of developers and dreamers is working on:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">📱</span>
              <div>
                <strong>WeTrack:</strong> A cross-platform app for managing
                business and mood.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">🛠️</span>
              <div>
                <strong>Services Ecosystem:</strong> A scalable network of
                services built with NestJS, Python, and Go.
              </div>
            </li>
          </ul>

          <div className="bg-base-100 p-6 rounded-xl border border-base-300">
            <p className="text-sm italic text-base-content/80">
              <strong>💡 Our point:</strong> To create tools that inspire
              balance, connection, and personal growth through collaboration.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="card bg-base-100 shadow-xl p-8"
        >
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-secondary" />
            Who We Are
          </h3>

          <p className="text-xl mb-4">
            We are a{" "}
            <strong>small team of developers from Novosibirsk, Russia</strong> —
            passionate enthusiasts from
            <strong> NSU (Novosibirsk State University)</strong> and{" "}
            <strong>
              NSUEM (Novosibirsk State University of Economics and Management)
            </strong>
            .
          </p>

          <p className="text-xl mb-6">
            Full-stack and backend engineers who strive to build{" "}
            <strong>modern, reliable, and user-friendly services</strong>
            that make a real difference in people&apos;s lives.
          </p>

          <div className="flex items-center gap-3 text-sm">
            <HeartHandshake className="w-5 h-5 text-primary" />
            <span>Building the future from Siberia with love ❤️</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
