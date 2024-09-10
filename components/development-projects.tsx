import { ProjectCard } from "./project-card";
import { IProject } from "@/types";

export default function Development() {
  const projects: IProject[] = [
    {
      src: "/projects/kwsolar.jpg",
      alt: "KwSolar",
      link: "https://cimadigital.com.ar/kwsolar/",
      title: "KwSolar",
      description:
        "KwSolar is a leading provider of solar energy solutions. They offer a wide range of services including solar panels, solar roof tiles, solar water heating, and more.",
    },
    {
      src: "/projects/delete.jpg",
      alt: "Delete Technology",
      link: "https://www.deletetechnology.com/-temporary-slug-bb7af0f4-0669-41f6-ae0e-cd3238fda02f?hs_preview=dMnNoQlr-159659264682",
      title: "Delete Technology",
      description:
        "Delete Technology Group: Experts in secure data erasure. Trusted by governments and organizations worldwide.",
    },
    {
      src: "/projects/quamtum-audio.jpg",
      alt: "Quamtum Audio",
      link: "https://quamtumaudio.com/",
      title: "Quamtum Audio",
      description:
        "Elevate your music experience with Quamtum Personal Audio. High-quality like the Style Pro QA10 Earbuds. Experience the perfect blend of design, quality, and functionality.",
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
