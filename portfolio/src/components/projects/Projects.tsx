import Project from "./components/Project";
import { projects } from "./data/projects";

const Projects = () => {
  return (
    <div
      className="w-full flex flex-row flex-wrap gap-x-20 mt-10 place-content-center
    "
    >
      {projects.map((project) => (
        <Project
          title={project.title}
          githubLink={project.githubLink}
          websiteLink={project.websiteLink}
          image={project.image}
          description={project.description}
          tech={project.tech}
        />
      ))}
    </div>
  );
};

export default Projects;
