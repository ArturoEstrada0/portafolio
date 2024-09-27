import { ProjectCard } from "./ProjectCard";

const ProjectShowcase = ({ projects }) => {
  return (
    <section id="proyectos">
      <div className="bg-black min-h-screen px-16 z-50">
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
