import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";

export default function Footer() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  const handleTogleDM = () => {
    document.querySelector("html")?.classList.contains("dark")
      ? document.querySelector("html")?.classList.remove("dark")
      : document.querySelector("html")?.classList.add("dark");
  };

  return (
    <header className={cn("flex justify-between py-4", RESPONSIVE_WRAPPER)}>
      <button>Коконтакты</button>
      <button onClick={handleTogleDM}>Toggle DarkMode</button>
    </header>
  );
}
