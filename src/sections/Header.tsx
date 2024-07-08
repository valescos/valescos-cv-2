import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import ThemeToggle from "../components/ThemeToggle";
import { Button } from "@headlessui/react";

export default function Header() {
  const { RESPONSIVE_WRAPPER, THEME_BORDER } = useTailwindConst();

  return (
    <header
      className={cn(
        "z-20 flex items-center justify-between py-4",
        RESPONSIVE_WRAPPER,
      )}
    >
      <Button
        onClick={() => {
          console.log(new Date().toLocaleDateString());
        }}
        className={cn(
          "self-start rounded-full bg-gradient-to-tr from-[#fea845] to-[#bc7152] px-4 py-2 text-sm text-white data-[active]:opacity-80 data-[hover]:opacity-80 dark:from-[#015088] dark:to-[#01315f]",
          THEME_BORDER,
        )}
      >
        PDF резюме
      </Button>
      <ThemeToggle />
    </header>
  );
}
