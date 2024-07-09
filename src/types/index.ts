import { z } from "zod";

export const limitSchema = z.object({
  limit: z.coerce
    .number()
    .min(1, "Ну не меньше одного! :)")
    .max(100, "Давайте не жестить... :)"),
});

export type TlimitSchema = z.infer<typeof limitSchema>;

export type Technology =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "TailwindCSS"
  | "React.js"
  | "Vue.js"
  | "Pinia"
  | "Zustand"
  | "Zod"
  | "SQL"
  | "Node.js"
  | "Express"
  | "PostgreSQL"
  | "Vite"
  | "TanStack Query"
  | "React Hook Form";
