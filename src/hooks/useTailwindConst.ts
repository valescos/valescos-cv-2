export function useTailwindConst() {
  const RESPONSIVE_WRAPPER = [
    "w-[90%]",
    "sm:w-[80%]",
    "md:w-[70%]",
    "lg:w-[60%]",
  ].join(" ");

  return { RESPONSIVE_WRAPPER };
}
