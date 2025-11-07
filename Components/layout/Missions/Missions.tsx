"use client";
import { Heart, Brain, Rocket } from "lucide-react";
import { TValues } from "./types";
import MissionCard from "./MissionCard/MissionCard";

const values: TValues[] = [
  {
    id: "0",
    icon: Heart,
    title: "Connection",
    desc: "Helping people get closer",
  },
  {
    id: "1",
    icon: Brain,
    title: "Mindfulness",
    desc: "Understand yourself and others",
  },
  {
    id: "2",
    icon: Rocket,
    title: "Advancement",
    desc: "Grow through play and data",
  },
];

export default function Missions() {
  return (
    <section id="ourMission" className="py-20 px-8 bg-base-200/50">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-16">Our mission</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((mission) => (
            <MissionCard key={mission.id} {...mission} />
          ))}
        </div>
      </div>
    </section>
  );
}
