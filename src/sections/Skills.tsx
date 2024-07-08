import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import { TECHNOLOGIES } from "../data/Technologies";
import Skill from "../components/Skill";
import StyledHeader from "../components/StyledHeader";

export default function Skills() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <section className={cn("flex flex-col gap-4 py-4", RESPONSIVE_WRAPPER)}>
      <StyledHeader>То, на чём сфокусирован сейчас:</StyledHeader>
      <div className="flex flex-wrap justify-center gap-8 py-4">
        {TECHNOLOGIES.filter((tech) => tech.isFav).map((technology) => (
          <Skill key={technology.id} {...technology} isFav={true} />
        ))}
      </div>
      <StyledHeader>Также знаком:</StyledHeader>
      <div className="flex flex-wrap justify-center gap-4 py-4">
        {TECHNOLOGIES.filter((tech) => !tech.isFav).map((technology) => (
          <Skill key={technology.id} {...technology} isFav={false} />
        ))}
      </div>
    </section>
  );
}
