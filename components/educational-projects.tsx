import { ProjectCard } from "./project-card";
import { IProject } from "@/types";

export default function Educational() {
  const projects: IProject[] = [
    {
      src: "/projects/rickandmorty.jpg",
      alt: "Rick-and-Morty",
      link: "https://rick-and-morty-client-cyan.vercel.app/",
      title: "Rick and Morty",
      description: "A Rick and Morty API that allows you to search for characters and information about them.",
    },
    {
      src: "/projects/saldo.jpg",
      alt: "Saldo",
      link: "https://zg-currency-caculator.vercel.app/",
      title: "Saldo",
      description: "Currency Calculator",
    },
    {
      src: "/projects/electroshop.jpg",
      alt: "Electroshop",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7061449669389787136/",
      title: "Electroshop",
      description:
        "E-commerce platform that allows users to conduct accurate searches, compare products and process secure transactions from the comfort of their home or office.",
    },
  ];

  return (
    <div className="projects_section py-10 grid grid-cols-3 gap-y-10 max-2xl:grid-cols-2 max-lg:grid-cols-1">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
