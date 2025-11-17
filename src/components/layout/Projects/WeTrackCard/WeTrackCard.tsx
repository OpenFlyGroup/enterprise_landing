"use client";
import { motion } from "motion/react";
import { Calendar, Coins, Users, Zap } from "lucide-react";

const WeTrackCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="card bg-neutral shadow-2xl overflow-hidden mb-16"
    >
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Текстовый блок */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 flex items-center gap-3 justify-center lg:justify-start">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              WeTrack
            </h3>

            <p className="text-lg sm:text-xl mb-6 text-base-content/80">
              Your balance companion: tasks, mood, gamification.
            </p>

            <ul className="space-y-4 text-left max-w-md mx-auto lg:mx-0">
              <li className="flex items-center gap-3 text-base sm:text-lg">
                <Zap className="w-6 h-6 text-secondary shrink-0" />
                <span>Mood Coins and achievements</span>
              </li>
              <li className="flex items-center gap-3 text-base sm:text-lg">
                <Users className="w-6 h-6 text-secondary shrink-0" />
                <span>Syncing with a partner/family</span>
              </li>
              <li className="flex items-center gap-3 text-base sm:text-lg">
                <Coins className="w-6 h-6 text-secondary shrink-0" />
                <span>Employment analysis and remind alerts</span>
              </li>
            </ul>
          </div>

          {/* Плейсхолдер изображения */}
          <div className="flex-1 w-full">
            <div className="relative bg-base-200/70 border-2 border-dashed border-base-300 rounded-2xl h-64 sm:h-80 lg:h-96 flex flex-col items-center justify-center text-center p-6">
              <div className="bg-base-300/30 rounded-full p-6 mb-4">
                <Calendar className="w-16 h-16 text-primary/70" />
              </div>
              <p className="text-xl sm:text-2xl font-semibold text-base-content/60">
                Coming Soon
              </p>
              <p className="text-sm text-base-content/50 mt-2">
                Screenshots will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeTrackCard;
