"use client";
import { motion } from "motion/react";
import { FC, ReactElement } from "react";

export interface PreviewProps {
  title: string;
  paragraph: string;
  element?: ReactElement;
}

const Preview: FC<PreviewProps> = ({ title, paragraph, element }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="text-primary wrap-break-word">{title}</span>
          </h1>

          <p className="text-lg xs:text-xl md:text-2xl lg:text-3xl text-base-content/80 mb-10 max-w-5xl mx-auto leading-relaxed">
            {paragraph}
          </p>

          {element && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              {element}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Preview;
