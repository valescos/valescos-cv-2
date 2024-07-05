import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import { TECHNOLOGIES } from "../data/Technologies";
import Skill from "../components/Skill";

export default function Skills() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <section
      className={cn(
        "flex flex-wrap justify-center gap-16 py-4",
        RESPONSIVE_WRAPPER,
      )}
    >
      {TECHNOLOGIES.map((technology) => (
        <Skill key={technology.id} {...technology} />
      ))}
    </section>
  );
}
