import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import { PROJECTS } from "../data/Projects";
import Project from "../components/Project";

export default function Projects() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <section
      className={cn("flex flex-wrap justify-center gap-8", RESPONSIVE_WRAPPER)}
    >
      {PROJECTS.sort((a, b) => Number(b.id) - Number(a.id)).map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
}
