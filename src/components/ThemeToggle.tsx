import { Switch } from "@headlessui/react";
import { useThemeStore } from "../stores/themeStore";
import type { ThemeState } from "../stores/themeStore";
import { useEffect } from "react";
import { cn } from "../utilities/cn";

export default function ThemeToggle() {
  const { dark, togleTheme } = useThemeStore<ThemeState>((state) => ({
    dark: state.dark,
    togleTheme: state.togleTheme,
  }));

  useEffect(() => {
    if (dark) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [dark]);

  return (
    <Switch
      checked={dark}
      onChange={togleTheme}
      className="group relative inline-flex h-8 w-24 items-center rounded-full bg-[url('./assets/img/day-toggle.jpg')] bg-cover transition-all data-[checked]:bg-[url('./assets/img/nigth-toggle.jpg')]"
    >
      <span
        className={cn(
          "size-8 translate-x-0 rounded-full border-4 border-white bg-none transition group-data-[checked]:translate-x-16",
        )}
      />
    </Switch>
  );
}
