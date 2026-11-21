import { useEffect } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import type { Project } from "../../../types";
import ProjectGallery from "./ProjectGallery";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const projectTypeLabels: Record<Project["type"], string> = {
  professional: "Professional",
  freelance: "Freelance",
  academic: "Academic",
  thesis: "B.Sc. Thesis",
  personal: "Personal",
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const galleryImages = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-surface shadow-2xl scrollbar-none"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-surface-50 text-text-muted shadow-md backdrop-blur transition hover:text-text-primary"
        >
          <FiX size={20} aria-hidden="true" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="pr-12">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              {projectTypeLabels[project.type]}
            </span>

            <h2
              id="project-modal-title"
              className="mt-3 text-2xl font-bold sm:text-3xl"
            >
              {project.title}
            </h2>
          </div>

          {project.images && (
            <div className="mt-7">
              <ProjectGallery images={project.images} title={project.title} />
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-lg font-semibold">Overview</h3>

            <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-base">
              {project.longDescription}
            </p>
          </div>

          {project.highlights.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold">Key contributions</h3>

              <ul className="mt-4 space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-text-secondary sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8">
            <h3 className="text-lg font-semibold">Technologies</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-surface-100 px-3 py-1.5 text-sm font-medium text-text-secondary"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {(project.live || project.github) && (
            <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-600"
                >
                  View live project
                  <FiExternalLink size={15} aria-hidden="true" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-text-secondary transition hover:border-border-strong hover:text-text-primary"
                >
                  View on GitHub
                  <FiGithub size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
