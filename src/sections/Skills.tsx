import { useTailwindConst } from "../hooks/useTailwindConstants";
import { cn } from "../utilities/cn";

export default function Skills() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <section className={cn("py-4 flex justify-between", RESPONSIVE_WRAPPER)}>
      <div className="size-16 rounded-full border-2 border-slate-900 dark:border-white" />
      <div className="size-16 rounded-full border-2 border-slate-900 dark:border-white" />
      <div className="size-16 rounded-full border-2 border-slate-900 dark:border-white" />
      <div className="size-16 rounded-full border-2 border-slate-900 dark:border-white" />
    </section>
  );
}
