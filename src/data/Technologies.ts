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
  brandColor: string;
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
    brandColor: "#61DAFB",
  },
  {
    id: "t002",
    name: "TypeScript",
    subtechto: null,
    isFav: true,
    brandColor: "#3178C6",
  },
  {
    id: "t003",
    name: "TailwindCSS",
    subtechto: null,
    isFav: true,
    brandColor: "#06B6D4",
  },
  {
    id: "t004",
    name: "JavaScript",
    subtechto: ["React.js", "Vue.js", "TypeScript", "Node.js"],
    isFav: false,
    brandColor: "#F7DF1E",
  },
  {
    id: "t005",
    name: "HTML",
    subtechto: ["React.js", "Vue.js", "TypeScript", "JavaScript"],
    isFav: false,
    brandColor: "#E34F26",
  },
  {
    id: "t006",
    name: "CSS",
    subtechto: ["TailwindCSS"],
    isFav: false,
    brandColor: "#1572B6",
  },
  {
    id: "t007",
    name: "Vue.js",
    subtechto: null,
    isFav: false,
    brandColor: "#4FC08D",
  },
  {
    id: "t018",
    name: "Redux",
    subtechto: null,
    isFav: false,
    brandColor: "#764ABC",
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
    brandColor: "#ffc93f",
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
    brandColor: "#f76f2e",
  },
  {
    id: "t010",
    name: "Zod",
    subtechto: null,
    isFav: false,
    brandColor: "#3E67B1",
  },
  {
    id: "t011",
    name: "Node.js",
    subtechto: ["Express"],
    isFav: false,
    brandColor: "#5FA04E",
  },
  {
    id: "t012",
    name: "Express",
    subtechto: null,
    isFav: false,
    brandColor: "#5FA04E",
  },
  {
    id: "t013",
    name: "PostgreSQL",
    subtechto: null,
    isFav: false,
    brandColor: "#4169E1",
  },
  {
    id: "t014",
    name: "Vite",
    subtechto: null,
    isFav: false,
    brandColor: "#646CFF",
  },
  {
    id: "t015",
    name: "TanStack Query",
    subtechto: null,
    isFav: false,
    brandColor: "#FF4154",
  },
  {
    id: "t016",
    name: "React Hook Form",
    subtechto: null,
    isFav: false,
    brandColor: "#EC5990",
  },
  {
    id: "t017",
    name: "Headless UI",
    subtechto: null,
    isFav: false,
    brandColor: "#66E3FF",
  },
];
