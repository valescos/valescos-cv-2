import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import { TECHNOLOGIES } from "../data/Technologies";
import Skill from "../components/Skill";

export default function Skills() {
  const { RESPONSIVE_WRAPPER, STYLED_HEADER } = useTailwindConst();

  return (
    <section
      className={cn(
        "flex flex-col items-center gap-4 py-4",
        RESPONSIVE_WRAPPER,
      )}
    >
      <h2 className={cn(STYLED_HEADER)}>Cфокусирован сейчас:</h2>
      <div className="flex flex-wrap justify-center gap-2 py-4">
        {TECHNOLOGIES.filter((tech) => tech.isFav).map((technology) => (
          <Skill key={technology.id} {...technology} isFav={true} />
        ))}
      </div>
      <h2 className={cn(STYLED_HEADER)}>Также знаком:</h2>
      <div className="flex flex-wrap justify-center gap-2 py-4">
        {TECHNOLOGIES.filter((tech) => !tech.isFav).map((technology) => (
          <Skill key={technology.id} {...technology} isFav={false} />
        ))}
      </div>
    </section>
  );
}
