import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import ThemeToggle from "../components/ThemeToggle";

export default function Header() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <header className={cn("flex justify-between py-4", RESPONSIVE_WRAPPER)}>
      <ThemeToggle />
      <ThemeToggle />
    </header>
  );
}
