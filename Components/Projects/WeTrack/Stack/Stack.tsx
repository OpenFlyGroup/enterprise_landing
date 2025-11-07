"use client";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNestjs,
  SiDjango,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiRabbitmq,
} from "react-icons/si";

const stack = [
  { icon: SiReact, name: "React Native / React" },
  { icon: SiNestjs, name: "NestJS" },
  { icon: SiDjango, name: "Django" },
  { icon: SiGo, name: "Go" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiRabbitmq, name: "RabbitMQ" },
];

export default function Stack() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="shadow-xl p-8"
      >
        <h3 className="text-2xl font-bold mb-6">Microservice ecosystem</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-base-200 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">Gateway (NestJS + Fastify)</h4>
            <p className="text-sm">High performance and quick routing</p>
          </div>
          <div className="bg-base-200 p-6 rounded-xl">
            <h4 className="font-semibold mb-2">Auth Service (Django)</h4>
            <p className="text-sm">OAuth, JWT, Sso for all our services</p>
          </div>
        </div>
      </motion.div>
      <section className="py-20 px-8 bg-base-200/50">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stack.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <s.icon className="w-16 h-16 text-primary mb-3" />
                <p className="text-sm font-medium">{s.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
