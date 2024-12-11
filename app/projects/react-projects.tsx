import { ProjectCard } from "@/components/project-card";
import { IProject } from "@/types";
import projectsData from "@/config/projects.json";

export default function ReactProjects() {
  const projects: IProject[] = projectsData.reactProjects;

  return (
    <div className="projects_section py-10 grid grid-cols-3 gap-y-10 max-2xl:grid-cols-2 max-lg:grid-cols-1">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
