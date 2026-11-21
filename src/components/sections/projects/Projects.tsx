import { useState } from "react";
import { projects } from "../../../data/projects";
import type { Project } from "../../../types";
import SectionTitle from "../../ui/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <SectionTitle tag="Projects" title="Things I've built and worked on" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            (project) =>
              project.displayOnSite && (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ),
          )}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
