import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import { PROJECTS } from "../data/Projects";
import Project from "../components/Project";
import StyledHeader from "../components/StyledHeader";

export default function Projects() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <section className={cn("flex flex-col gap-8", RESPONSIVE_WRAPPER)}>
      <StyledHeader>Примеры работ:</StyledHeader>
      <div className="flex flex-wrap justify-center gap-8 pb-16">
        {PROJECTS.sort((a, b) => Number(b.id) - Number(a.id)).map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
