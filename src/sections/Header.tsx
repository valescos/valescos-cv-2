import { useEffect } from "react";
import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import { useThemeStore } from "../stores/themeStore";

export default function Header() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();
  const dark = useThemeStore((state) => state.dark);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.theme = "dark";
      document.querySelector("html")?.classList.add("dark");
    } else {
      localStorage.theme = "ligth";
      document.querySelector("html")?.classList.remove("dark");
    }
  }, []);

  const handleTogleDM = () => {
    if (document.querySelector("html")?.classList.contains("dark")) {
      document.querySelector("html")?.classList.remove("dark");
      localStorage.theme = "ligth";
    } else {
      document.querySelector("html")?.classList.add("dark");
      localStorage.theme = "ligth";
    }
  };

  return (
    <header className={cn("flex justify-between py-4", RESPONSIVE_WRAPPER)}>
      <button>Скачать PDF</button>
      <button onClick={handleTogleDM}>Toggle DarkMode</button>
    </header>
  );
}
