import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import { TECHNOLOGIES } from "../data/Technologies";
import Technology from "../components/Technology";

export default function Skills() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <section
      className={cn("flex justify-center gap-16 py-4", RESPONSIVE_WRAPPER)}
    >
      {TECHNOLOGIES.map((technology) => (
        <Technology key={technology.id} {...technology} />
      ))}
    </section>
  );
}
