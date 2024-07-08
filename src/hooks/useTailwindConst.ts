export function useTailwindConst() {
  const RESPONSIVE_WRAPPER = [
    "w-[90%]",
    "sm:w-[80%]",
    "md:w-[70%]",
    "lg:w-[60%]",
  ].join(" ");

  const THEME_BORDER = [
    "border-4",
    "border-stone-200",
    "dark:border-slate-400",
  ].join(" ");

  return { RESPONSIVE_WRAPPER, THEME_BORDER };
}
