import { create } from "zustand";

type ThemeState = {
  dark: boolean;
  togleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()((set) => ({
  dark: true,
  togleTheme: () => set((state) => ({ dark: !state.dark })),
}));
