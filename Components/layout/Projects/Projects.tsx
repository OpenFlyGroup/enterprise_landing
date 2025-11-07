import Link from "next/link";
import WeTrackCard from "./WeTrackCard/WeTrackCard";
import { ReactElement } from "react";

const BaseUrl = "projects/";

type TProject = {
  id: string;
  card: ReactElement;
  url: string;
};

const projects: TProject[] = [
  {
    id: "0",
    card: <WeTrackCard />,
    url: "wetrack",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-16">Our projects</h2>
      {projects.map((project) => (
        <Link key={project.id} href={BaseUrl + project.url}>
          {project.card}
        </Link>
      ))}
    </section>
  );
}
