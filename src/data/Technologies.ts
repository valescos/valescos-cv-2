import react_icon from "../assets/icon/react_icon.svg";
import typescript_icon from "../assets/icon/typescript_icon.svg";
import tailwindcss_icon from "../assets/icon/tailwindcss_icon.svg";
import javascript_icon from "../assets/icon/javascript_icon.svg";
import html_icon from "../assets/icon/html_icon.svg";
import css_icon from "../assets/icon/css_icon.svg";
import vue_icon from "../assets/icon/vue_icon.svg";
import pinia_icon from "../assets/icon/pinia_icon.svg";
import zustand_icon from "../assets/icon/zustand_icon.png";
import zod_icon from "../assets/icon/zod_icon.svg";
import node_icon from "../assets/icon/node_icon.svg";
import express_icon from "../assets/icon/express_icon.svg";
import postgressql_icon from "../assets/icon/postgressql_icon.svg";
import vire_icon from "../assets/icon/vire_icon.svg";
import react_query_icon from "../assets/icon/react_query_icon.svg";

import { Technology } from "../types";

type TechnologyT = {
  id: string;
  name: Technology;
  icon: string;
};

export const TECHNOLOGIES: TechnologyT[] = [
  {
    id: "t001",
    name: "React.js",
    icon: react_icon,
  },
  {
    id: "t002",
    name: "TypeScript",
    icon: typescript_icon,
  },
  {
    id: "t003",
    name: "TailwindCSS",
    icon: tailwindcss_icon,
  },
  {
    id: "t004",
    name: "JavaScript",
    icon: javascript_icon,
  },
  {
    id: "t005",
    name: "HTML",
    icon: html_icon,
  },
  {
    id: "t006",
    name: "CSS",
    icon: css_icon,
  },
  {
    id: "t007",
    name: "Vue.js",
    icon: vue_icon,
  },
  {
    id: "t008",
    name: "Pinia",
    icon: pinia_icon,
  },
  {
    id: "t009",
    name: "Zustand",
    icon: zustand_icon,
  },
  {
    id: "t010",
    name: "Zod",
    icon: zod_icon,
  },
  {
    id: "t011",
    name: "Node.js",
    icon: node_icon,
  },
  {
    id: "t011",
    name: "Express",
    icon: express_icon,
  },
  {
    id: "t012",
    name: "PostgreSQL",
    icon: postgressql_icon,
  },
  {
    id: "t013",
    name: "Vite",
    icon: vire_icon,
  },
  {
    id: "t014",
    name: "TanStack Query",
    icon: react_query_icon,
  },
];
