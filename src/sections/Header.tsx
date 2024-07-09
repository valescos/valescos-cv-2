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
      <Button
        onClick={() => {
          console.log(new Date().toLocaleDateString());
        }}
        className={cn(
          "self-start rounded-full bg-gradient-to-tr from-[#fea845] to-[#bc7152] px-4 py-2 text-sm text-white ring-white data-[active]:ring-4 data-[hover]:ring-4 dark:from-[#015088] dark:to-[#01315f]",
        )}
      >
        PDF резюме
      </Button>
      <ThemeToggle />
    </header>
  );
}
