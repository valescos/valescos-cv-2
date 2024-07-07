import zustand_icon from "../assets/icon/zustand_icon.png";

import { Technology } from "../types";

type TechnologyT = {
  id: string;
  name: Technology;
  subtechto: Technology[] | null;
  icon?: string;
};

export const TECHNOLOGIES: TechnologyT[] = [
  {
    id: "t001",
    name: "React.js",
    subtechto: null,
  },
  {
    id: "t002",
    name: "TypeScript",
    subtechto: null,
  },
  {
    id: "t003",
    name: "TailwindCSS",
    subtechto: null,
  },
  {
    id: "t004",
    name: "JavaScript",
    subtechto: ["React.js", "Vue.js", "TypeScript", "Node.js"],
  },
  {
    id: "t005",
    name: "HTML",
    subtechto: ["React.js", "Vue.js", "TypeScript", "JavaScript"],
  },
  {
    id: "t006",
    name: "CSS",
    subtechto: ["TailwindCSS"],
  },
  {
    id: "t007",
    name: "Vue.js",
    subtechto: null,
  },
  {
    id: "t008",
    name: "Pinia",
    subtechto: null,
  },
  {
    id: "t009",
    name: "Zustand",
    subtechto: null,
    icon: zustand_icon,
  },
  {
    id: "t010",
    name: "Zod",
    subtechto: null,
  },
  {
    id: "t011",
    name: "Node.js",
    subtechto: ["Express"],
  },
  {
    id: "t012",
    name: "Express",
    subtechto: null,
  },
  {
    id: "t013",
    name: "PostgreSQL",
    subtechto: null,
  },
  {
    id: "t014",
    name: "Vite",
    subtechto: null,
  },
  {
    id: "t015",
    name: "TanStack Query",
    subtechto: null,
  },
  {
    id: "t016",
    name: "React Hook Form",
    subtechto: null,
  },
];
