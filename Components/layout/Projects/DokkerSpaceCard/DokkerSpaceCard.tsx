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
      className="card bg-neutral shadow-2xl p-8 mb-16"
    >
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 justify-end md:justify-start">
            <FileText className="text-primary" /> Dokker Space
          </h3>
          <p className="text-lg mb-6">
            Create legal documents quickly and securely.
          </p>
          <p className="text-base mb-6">
            Your reliable assistant for drafting contracts online.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Clock className="text-secondary" /> Ready in seconds
            </li>
            <li className="flex items-center gap-2">
              <Shield className="text-secondary" /> Secure & legally compliant
            </li>
            <li className="flex items-center gap-2">
              <FileText className="text-secondary" /> Free templates + Pro from
              $2/mo
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="relative bg-linear-to-br from-primary/20 to-secondary/20 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center p-6">
            <Image
              src={screenshot}
              alt="Dokker Space screenshot"
              fill
              className="object-cover object-top rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-2">
              <Shield className="w-10 h-10 text-primary mb-1" />
              <p className="text-sm text-black/70 font-medium">
                Secure Document Engine
              </p>
              <p className="text-xs text-black/70">
                Powered by AI + legal templates
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DokkerSpaceCard;
