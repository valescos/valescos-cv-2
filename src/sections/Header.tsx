import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import ThemeToggle from "../components/ThemeToggle";
import { Button } from "@headlessui/react";

export default function Header() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <header
      className={cn(
        "z-20 flex items-center justify-between py-4",
        RESPONSIVE_WRAPPER,
      )}
    >
      <a href="https://drive.google.com/file/d/1pOFLgJd_jhoBY-7wOXHXeO62iiCQc7yR/view?usp=sharing">
        <Button
          className={cn(
            "self-start rounded-full bg-gradient-to-tr from-[#fea845] to-[#bc7152] px-4 py-2 text-sm text-white ring-white data-[active]:ring-4 data-[hover]:ring-4 dark:from-[#015088] dark:to-[#01315f]",
          )}
        >
          PDF резюме
        </Button>
      </a>

      <ThemeToggle />
    </header>
  );
}
