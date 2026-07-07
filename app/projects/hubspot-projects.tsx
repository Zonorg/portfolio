import { ProjectCard } from "@/components/project-card";
import { IProject } from "@/types";
import projectsData from "@/config/projects.json";

export default function HubspotProjects() {
  const projects: IProject[] = projectsData.hubspotProjects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[22px] py-10">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
