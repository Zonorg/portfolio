import { ProjectCard } from "@/components/project-card";
import { IProject } from "@/types";
import projectsData from "@/config/projects.json";

export default function Projects() {
  const projects: IProject[] = projectsData.profesionalProjects;

  return (
    <div className="projects_section py-10 grid grid-cols-3 gap-y-10 justify-items-start max-2xl:grid-cols-2 max-xl:grid-cols-1">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
