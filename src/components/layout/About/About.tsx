"use client";
import { motion } from "motion/react";
import { Globe, Users, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-base-200/50">
      <div className="mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 xl:gap-32 items-start"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
              <Globe className="w-9 h-9 md:w-10 md:h-10 text-primary" />
              About Us
            </h2>

            <p className="text-lg md:text-xl mb-6 text-base-content/90">
              At OpenFly, we&apos;re passionate about using technology to make
              life better. Our team of developers and dreamers is working on:
            </p>

            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-0.5">📱</span>
                <div>
                  <strong className="text-lg">WeTrack:</strong>{" "}
                  <span className="text-base-content/80">
                    A cross-platform app for managing business and mood.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary text-2xl mt-0.5">🛠️</span>
                <div>
                  <strong className="text-lg">Services Ecosystem:</strong>{" "}
                  <span className="text-base-content/80">
                    A scalable network of services built with NestJS, Python,
                    and Go.
                  </span>
                </div>
              </li>
            </ul>

            <div className="bg-base-100 p-6 rounded-2xl border border-base-300 shadow-sm">
              <p className="text-sm md:text-base italic text-base-content/80">
                <strong className="text-primary">💡 Our point:</strong> To
                create tools that inspire balance, connection, and personal
                growth through collaboration.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 md:order-2"
          >
            <div className="card bg-base-100 shadow-xl p-6 md:p-8 lg:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-secondary" />
                Who We Are
              </h3>

              <p className="text-lg md:text-xl mb-5 leading-relaxed">
                We are a{" "}
                <strong>
                  small team of developers from Novosibirsk, Russia
                </strong>{" "}
                — passionate enthusiasts from <strong>NSU</strong> and{" "}
                <strong>NSUEM</strong>.
              </p>

              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                Full-stack and backend engineers who strive to build{" "}
                <strong>modern, reliable, and user-friendly services</strong>{" "}
                that make a real difference in people&apos;s lives.
              </p>

              <div className="flex items-center gap-3 text-base md:text-lg">
                <HeartHandshake className="w-6 h-6 text-primary shrink-0" />
                <span>Building the future from Siberia with love ❤️</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
