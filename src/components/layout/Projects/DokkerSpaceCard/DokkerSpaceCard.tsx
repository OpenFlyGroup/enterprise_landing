"use client";
import { Clock, FileText, Shield } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import screenshot from "@/public/screenshots/dokker.png";

const DokkerSpaceCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="card bg-neutral shadow-2xl overflow-hidden mb-16"
    >
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
          {/* Текстовый блок */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 flex items-center gap-3 justify-center lg:justify-start">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              Dokker Space
            </h3>

            <p className="text-lg sm:text-xl mb-4 text-base-content/80">
              Create legal documents quickly and securely.
            </p>
            <p className="text-base sm:text-lg mb-6 text-base-content/70">
              Your reliable assistant for drafting contracts online.
            </p>

            <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-center gap-3 text-base sm:text-lg">
                <Clock className="w-6 h-6 text-secondary shrink-0" />
                <span>Ready in seconds</span>
              </li>
              <li className="flex items-center gap-3 text-base sm:text-lg">
                <Shield className="w-6 h-6 text-secondary shrink-0" />
                <span>Secure & legally compliant</span>
              </li>
              <li className="flex items-center gap-3 text-base sm:text-lg">
                <FileText className="w-6 h-6 text-secondary shrink-0" />
                <span>Free templates + Pro from $2/mo</span>
              </li>
            </ul>
          </div>

          {/* Изображение */}
          <div className="flex-1 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              <div className="relative bg-base-200/50 border-2 border-dashed border-base-300 rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src={screenshot}
                  alt="Dokker Space – AI-powered legal documents"
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
                  priority
                />
              </div>

              {/* Подпись под скриншотом */}
              <div className="absolute bottom-0 left-0 right-0 rounded-2xl bg-linear-to-t from-black/70 to-transparent p-4 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-1" />
                <p className="text-sm font-semibold text-white">
                  Secure Document Engine
                </p>
                <p className="text-xs text-white/80">
                  Powered by AI + legal templates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DokkerSpaceCard;
