import { create } from "zustand";

export type LimitState = {
  value: number;
  setValue: (updatedValue: number) => void;
};

export const useLimitScore = create<LimitState>()((set) => ({
  value: 10,
  setValue: (updatedValue: number) => set(() => ({ value: updatedValue })),
}));
