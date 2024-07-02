import { useTailwindConst } from "../hooks/useTailwindConstants";
import { cn } from "../utilities/cn";

export default function Hero() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <section className={cn("py-4 flex justify-between", RESPONSIVE_WRAPPER)}>
      <p>Фото!</p>
      <p>Косарев ВЛНТН</p>
      <p>Контакты</p>
    </section>
  );
}
