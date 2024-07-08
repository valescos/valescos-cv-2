import zustand from "../assets/icon/zustand.png";
import zustand_w from "../assets/icon/zustand_w.png";
import zustand_b from "../assets/icon/zustand_b.png";

import pinia from "../assets/icon/pinia.png";
import pinia_w from "../assets/icon/pinia_w.png";
import pinia_b from "../assets/icon/pinia_b.png";

import { Technology } from "../types";

type TechnologyT = {
  id: string;
  name: Technology;
  subtechto: Technology[] | null;
  icon?: PNGIcon;
  isFav: boolean;
};

export type PNGIcon = {
  main: string;
  b: string;
  w: string;
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
    icon: {
      main: pinia,
      b: pinia_b,
      w: pinia_w,
    },
    isFav: false,
  },
  {
    id: "t009",
    name: "Zustand",
    subtechto: null,
    icon: {
      main: zustand,
      b: zustand_b,
      w: zustand_w,
    },
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
