import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "../../../types";

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

const projectTypeLabels: Record<Project["type"], string> = {
  professional: "Professional",
  freelance: "Freelance",
  academic: "Academic",
  thesis: "B.Sc. Thesis",
  personal: "Personal",
};

export default function ProjectCard({
  project,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-md">
      <button
        type="button"
        onClick={onViewDetails}
        className="block w-full text-left"
        aria-label={`View case study for ${project.title}`}
      >
        <div className="aspect-16/10 overflow-hidden bg-surface-100">
          {project.image ? (
            <img
              src={project.image.src}
              alt={`${project.title} preview`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-text-subtle">
              Project preview
            </div>
          )}
        </div>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {projectTypeLabels[project.type]}
        </span>

        <h3 className="mt-3 text-xl font-bold">{project.title}</h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-text-muted">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-surface-100 px-2.5 py-1 text-xs font-medium text-text-secondary"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <button
            type="button"
            onClick={onViewDetails}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition hover:text-primary-600"
          >
            View case study
            <FiArrowUpRight size={15} aria-hidden="true" />
          </button>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="text-text-muted transition hover:text-text-primary"
              >
                <FiGithub size={18} aria-hidden="true" />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live ${project.title} project`}
                className="text-text-muted transition hover:text-text-primary"
              >
                <FiExternalLink size={18} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}