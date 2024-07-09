import { useTailwindConst } from "../hooks/useTailwindConst";
import { useLimitScore } from "../stores/limitStore";
import { cn } from "../utilities/cn";

export default function QuestionForm() {
  const setValue = useLimitScore((state) => state.setValue);

  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <section className={cn("flex flex-col items-center", RESPONSIVE_WRAPPER)}>
      <form className="flex flex-col items-center">
        <label
          htmlFor="limit"
          className="cursor-pointer text-center font-bold dark:text-white"
        >
          Сколько, по-вашему, проектов нужно выполнить, чтобы достичь мастерства
          в чём-либо?
        </label>
        <input id="limit" type="range" max={100} min={1} />
      </form>
    </section>
  );
}
