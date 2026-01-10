"use client";
import { motion } from "motion/react";
import { FC, ReactElement } from "react";
import { Link } from "@/src/i18n/routing";
import { MoveLeft } from "lucide-react";

export interface PreviewProps {
  title: string;
  paragraph: string;
  element?: ReactElement;
}

const Preview: FC<PreviewProps> = ({ title, paragraph, element }) => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-4 overflow-hidden mesh-gradient">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute top-0 left-0"
        >
          <Link 
            href="/#projects" 
            className="flex items-center gap-2 text-sm font-bold opacity-40 hover:opacity-100 hover:text-primary transition-all group"
          >
            <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-widest">Back to Projects</span>
          </Link>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           className="text-center pt-20"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8 max-w-6xl mx-auto">
            <span className="text-gradient block">{title}</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-base-content/70 mb-12 max-w-4xl mx-auto leading-tight">
            {paragraph}
          </p>

          {element && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex justify-center"
            >
              {element}
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Decorative bottom lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-base-content/10 to-transparent" />
    </section>
  );
};

export default Preview;

