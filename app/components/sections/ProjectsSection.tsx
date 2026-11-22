import ProjectCard from '../project/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-12 pt-24 scroll-mt-6">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Selected work
        </h2>

        <p className="max-w-2xl text-base leading-7 text-[#e5f4f5]">
          A collection of projects that show how I build interfaces, solve
          problems, and turn ideas into usable products.
        </p>
      </div>

      <div className="grid items-start gap-x-8 gap-y-16 pb-10 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

      </div>
    </section>
  );
}
