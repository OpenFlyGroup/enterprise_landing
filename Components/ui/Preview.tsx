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
    <section className="min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">{title}</span>
          </h1>
          <p className="text-xl md:text-2xl text-base-content/80 mb-8 max-w-3xl mx-auto">
            {paragraph}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {element}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Preview;
