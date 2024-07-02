import { useTailwindConst } from "../hooks/useTailwindConstants";
import { cn } from "../utilities/cn";

export default function Experience() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <section className={cn("py-4 flex flex-col gap-2", RESPONSIVE_WRAPPER)}>
      <div className="w-full h-16 border-2 border-slate-900 dark:border-white" />
      <div className="w-full h-16 border-2 border-slate-900 dark:border-white" />
      <div className="w-full h-16 border-2 border-slate-900 dark:border-white" />
      <div className="w-full h-16 border-2 border-slate-900 dark:border-white" />
    </section>
  );
}
