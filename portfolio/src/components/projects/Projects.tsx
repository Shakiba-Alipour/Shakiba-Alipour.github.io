import Project from "./components/Project";
import { projects } from "./data/projects";

const Projects = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-x-10 mt-10">
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
