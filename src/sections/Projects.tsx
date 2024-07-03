import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import { PROJECTS } from "../data/Projects";
import Project from "../components/Project";

export default function Projects() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <section
      className={cn(
        "flex flex-wrap justify-center gap-x-4 gap-y-8 py-4",
        RESPONSIVE_WRAPPER,
      )}
    >
      {PROJECTS.sort((a, b) => b.id - a.id).map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
}
