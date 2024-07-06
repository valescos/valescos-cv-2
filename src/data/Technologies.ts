//colored icons
import reactcolor from "../assets/icon/react-color.svg";
import typescriptcolor from "../assets/icon/typescript-color.svg";
import tailwindcsscolor from "../assets/icon/tailwindcss-color.svg";
import javascriptcolor from "../assets/icon/javascript-color.svg";
import html5color from "../assets/icon/html5-color.svg";
import css3color from "../assets/icon/css3-color.svg";
import vuedotjscolor from "../assets/icon/vuedotjs-color.svg";
import zodcolor from "../assets/icon/zod-color.svg";
import nodedotjscolor from "../assets/icon/nodedotjs-color.svg";
import expresscolor from "../assets/icon/express-color.svg";
import postgresqlcolor from "../assets/icon/postgresql-color.svg";
import vitecolor from "../assets/icon/vite-color.svg";
import reactquerycolor from "../assets/icon/reactquery-color.svg";
import reacthookformcolor from "../assets/icon/reacthookform-color.svg";

import pinia_icon from "../assets/icon/pinia_icon.svg";
import zustand_icon from "../assets/icon/zustand_icon.png";

//black and white icons
import css3 from "../assets/icon/css3.svg";
import express from "../assets/icon/express.svg";
import html5 from "../assets/icon/html5.svg";
import javascript from "../assets/icon/javascript.svg";
import nodedotjs from "../assets/icon/nodedotjs.svg";
import postgresql from "../assets/icon/postgresql.svg";
import react from "../assets/icon/react.svg";
import reacthookform from "../assets/icon/reacthookform.svg";
import reactquery from "../assets/icon/reactquery.svg";
import tailwindcss from "../assets/icon/tailwindcss.svg";
import typescript from "../assets/icon/typescript.svg";
import vite from "../assets/icon/vite.svg";
import vuedotjs from "../assets/icon/vuedotjs.svg";
import zod from "../assets/icon/zod.svg";

import { Technology } from "../types";

type TechnologyT = {
  id: string;
  name: Technology;
  icon: string;
  bwicon: string;
};

export const TECHNOLOGIES: TechnologyT[] = [
  {
    id: "t001",
    name: "React.js",
    icon: reactcolor,
    bwicon: react,
  },
  {
    id: "t002",
    name: "TypeScript",
    icon: typescriptcolor,
    bwicon: typescript,
  },
  {
    id: "t003",
    name: "TailwindCSS",
    icon: tailwindcsscolor,
    bwicon: tailwindcss,
  },
  {
    id: "t004",
    name: "JavaScript",
    icon: javascriptcolor,
    bwicon: javascript,
  },
  {
    id: "t005",
    name: "HTML",
    icon: html5color,
    bwicon: html5,
  },
  {
    id: "t006",
    name: "CSS",
    icon: css3color,
    bwicon: css3,
  },
  {
    id: "t007",
    name: "Vue.js",
    icon: vuedotjscolor,
    bwicon: vuedotjs,
  },
  {
    id: "t008",
    name: "Pinia",
    icon: pinia_icon,
    bwicon: "",
  },
  {
    id: "t009",
    name: "Zustand",
    icon: zustand_icon,
    bwicon: "",
  },
  {
    id: "t010",
    name: "Zod",
    icon: zodcolor,
    bwicon: zod,
  },
  {
    id: "t011",
    name: "Node.js",
    icon: nodedotjscolor,
    bwicon: nodedotjs,
  },
  {
    id: "t011",
    name: "Express",
    icon: expresscolor,
    bwicon: express,
  },
  {
    id: "t012",
    name: "PostgreSQL",
    icon: postgresqlcolor,
    bwicon: postgresql,
  },
  {
    id: "t013",
    name: "Vite",
    icon: vitecolor,
    bwicon: vite,
  },
  {
    id: "t014",
    name: "TanStack Query",
    icon: reactquerycolor,
    bwicon: reactquery,
  },
  {
    id: "t015",
    name: "React Hook Form",
    icon: reacthookformcolor,
    bwicon: reacthookform,
  },
];
