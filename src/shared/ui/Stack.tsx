"use client";
import { motion } from "motion/react";
import { IconType } from "react-icons";

export interface IStack {
  id: string;
  icon: IconType;
  name: string;
}

const Stack = ({ techs }: { techs: IStack[] }) => {
  return (
    <>
      <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className=" mx-auto bg-base-100 shadow-2xl rounded-2xl p-6 sm:p-8 lg:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center lg:text-left">
            Microservice ecosystem
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <div className="bg-base-200/70 backdrop-blur-sm p-6 rounded-xl border border-base-300">
              <h4 className="text-lg font-semibold mb-2">
                Gateway (NestJS + Fastify)
              </h4>
              <p className="text-sm sm:text-base text-base-content/80">
                High performance and quick routing
              </p>
            </div>
            <div className="bg-base-200/70 backdrop-blur-sm p-6 rounded-xl border border-base-300">
              <h4 className="text-lg font-semibold mb-2">
                Auth Service (Django)
              </h4>
              <p className="text-sm sm:text-base text-base-content/80">
                OAuth, JWT, SSO for all our services
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 sm:py-20 lg:py-28 bg-base-200/30">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
            Technologies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
            {techs.map((tech) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: Number(tech.id) * 0.08,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center group"
              >
                <div className="p-5 sm:p-6 bg-base-100 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110">
                  <tech.icon className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
                </div>
                <p className="mt-4 text-sm sm:text-base font-medium text-center wrap-break-word">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stack;
