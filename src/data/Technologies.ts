import zustand_icon from "../assets/icon/zustand_icon.png";

import { Technology } from "../types";

type TechnologyT = {
  id: string;
  name: Technology;
  subtechto: Technology[] | null;
  icon?: string;
  isFav: boolean;
};

export const TECHNOLOGIES: TechnologyT[] = [
  {
    id: "t001",
    name: "React.js",
    subtechto: null,
    isFav: true,
  },
  {
    id: "t002",
    name: "TypeScript",
    subtechto: null,
    isFav: true,
  },
  {
    id: "t003",
    name: "TailwindCSS",
    subtechto: null,
    isFav: true,
  },
  {
    id: "t004",
    name: "JavaScript",
    subtechto: ["React.js", "Vue.js", "TypeScript", "Node.js"],
    isFav: false,
  },
  {
    id: "t005",
    name: "HTML",
    subtechto: ["React.js", "Vue.js", "TypeScript", "JavaScript"],
    isFav: false,
  },
  {
    id: "t006",
    name: "CSS",
    subtechto: ["TailwindCSS"],
    isFav: false,
  },
  {
    id: "t007",
    name: "Vue.js",
    subtechto: null,
    isFav: false,
  },
  {
    id: "t008",
    name: "Pinia",
    subtechto: null,
    isFav: false,
  },
  {
    id: "t009",
    name: "Zustand",
    subtechto: null,
    icon: zustand_icon,
    isFav: false,
  },
  {
    id: "t010",
    name: "Zod",
    subtechto: null,
    isFav: false,
  },
  {
    id: "t011",
    name: "Node.js",
    subtechto: ["Express"],
    isFav: false,
  },
  {
    id: "t012",
    name: "Express",
    subtechto: null,
    isFav: false,
  },
  {
    id: "t013",
    name: "PostgreSQL",
    subtechto: null,
    isFav: false,
  },
  {
    id: "t014",
    name: "Vite",
    subtechto: null,
    isFav: false,
  },
  {
    id: "t015",
    name: "TanStack Query",
    subtechto: null,
    isFav: false,
  },
  {
    id: "t016",
    name: "React Hook Form",
    subtechto: null,
    isFav: false,
  },
];
