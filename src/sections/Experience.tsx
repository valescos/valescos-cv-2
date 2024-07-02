import { useTailwindConst } from "../hooks/useTailwindConstants";
import { cn } from "../utilities/cn";

export default function Experience() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <section className={cn("flex flex-col gap-2 py-4", RESPONSIVE_WRAPPER)}>
      <div className="h-16 w-full border-2 border-slate-900 dark:border-white" />
      <div className="h-16 w-full border-2 border-slate-900 dark:border-white" />
      <div className="h-16 w-full border-2 border-slate-900 dark:border-white" />
      <div className="h-16 w-full border-2 border-slate-900 dark:border-white" />
    </section>
  );
}
