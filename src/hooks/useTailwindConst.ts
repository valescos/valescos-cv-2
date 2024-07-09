export function useTailwindConst() {
  const RESPONSIVE_WRAPPER = [
    "w-[90%]",
    "sm:w-[80%]",
    "md:w-[70%]",
    "lg:w-[60%]",
  ].join(" ");

  const THEME_BORDER = [
    "border-4",
    "border-zinc-300",
    "dark:border-slate-300",
  ].join(" ");

  const STYLED_HEADER = [
    "text-center",
    "font-main",
    "text-2xl",
    "tracking-wider",
  ].join(" ");

  return { RESPONSIVE_WRAPPER, THEME_BORDER, STYLED_HEADER };
}
