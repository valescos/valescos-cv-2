import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";

export default function Hero() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <section className={cn("flex justify-between py-4", RESPONSIVE_WRAPPER)}>
      <p>Фото!</p>
      <p>Косарев ВЛНТН</p>
      <p>Контакты</p>
    </section>
  );
}
