"use client";
import { motion } from "motion/react";
import { Calendar, Coins, Users, Zap } from "lucide-react";

const WeTrackCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="card bg-neutral shadow-2xl p-8 mb-16"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Calendar className="text-primary" />
            WeTrack
          </h3>
          <p className="text-lg mb-6">
            Your balance companion: tasks, mood, gamification.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Zap className="text-secondary" />
              Mood Coins and achievements
            </li>
            <li className="flex items-center gap-2">
              <Users className="text-secondary" />
              Syncing with a partner/family
            </li>
            <li className="flex items-center gap-2">
              <Coins className="text-secondary" />
              Employment analysis and remind alerts
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="bg-base-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
            <p className="text-2xl text-base-content/50">Soon: screenshots</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeTrackCard;
