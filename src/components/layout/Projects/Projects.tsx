import Link from "next/link";
import WeTrackCard from "./WeTrackCard/WeTrackCard";
import { ReactElement } from "react";
import DokkerSpaceCard from "./DokkerSpaceCard/DokkerSpaceCard";

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
  {
    id: "1",
    card: <DokkerSpaceCard />,
    url: "dokker_space",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 mx-auto px-4 md:px-8">
      <h2 className="text-4xl font-bold text-center mb-16">Our projects</h2>
      {projects.map((project) => (
        <Link key={project.id} href={BaseUrl + project.url}>
          {project.card}
        </Link>
      ))}
    </section>
  );
}
