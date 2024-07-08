import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import { PROJECTS } from "../data/Projects";
import Project from "../components/Project";

export default function Projects() {
  const { RESPONSIVE_WRAPPER, STYLED_HEADER } = useTailwindConst();

  return (
    <section className={cn("flex flex-col gap-8", RESPONSIVE_WRAPPER)}>
      <h2 className={cn(STYLED_HEADER)}>Примеры работ:</h2>
      <div className="flex flex-wrap justify-center gap-8 pb-16">
        {PROJECTS.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).map(
          (project) => (
            <Project key={project.id} {...project} />
          ),
        )}
      </div>
    </section>
  );
}
