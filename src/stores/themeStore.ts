import { create } from "zustand";

export type ThemeState = {
  dark: boolean;
  togleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()((set) => ({
  dark: window.matchMedia("(prefers-color-scheme: dark)").matches,
  togleTheme: () => set((state) => ({ dark: !state.dark })),
}));
