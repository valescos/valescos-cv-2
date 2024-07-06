import { Technology } from "../types";

import l01 from "../assets/img/l01.png";
import l02 from "../assets/img/l02.png";
import l03 from "../assets/img/l03.png";
import l04 from "../assets/img/l04.png";
import t01 from "../assets/img/t01.png";
import t02 from "../assets/img/t02.png";
import t03 from "../assets/img/t03.png";
import cv01 from "../assets/img/cv01.png";

type ProjectT = {
  id: string;
  reporef: string;
  href: string;
  img: string;
  stack: Technology[];
};

export const PROJECTS: ProjectT[] = [
  {
    id: "p001",
    reporef: "https://github.com/valescos/valescos.github.io",
    href: "https://valescos.github.io/",
    img: l01,
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "p002",
    reporef: "https://github.com/valescos/valescos-cv",
    href: "https://valescos-cv.netlify.app/",
    img: cv01,
    stack: ["React.js", "TailwindCSS", "Vite", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "p003",
    reporef: "https://github.com/valescos/test-task-1",
    href: "https://valescos-test-task-1.netlify.app/",
    img: t01,
    stack: ["React.js", "TailwindCSS", "Vite", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "p004",
    reporef: "https://github.com/valescos/test-task-2",
    href: "https://valescos-test-task-2.netlify.app/",
    img: t02,
    stack: [
      "Vue.js",
      "Pinia",
      "TailwindCSS",
      "Vite",
      "HTML",
      "CSS",
      "TypeScript",
    ],
  },
  {
    id: "p005",
    reporef: "https://github.com/valescos/vsk-training-layout-1",
    href: "https://valescos-practice-1.netlify.app/",
    img: l02,
    stack: [
      "Vue.js",
      "Pinia",
      "TailwindCSS",
      "Vite",
      "HTML",
      "CSS",
      "TypeScript",
    ],
  },
  {
    id: "p006",
    reporef: "https://github.com/valescos/test-task-3",
    href: "https://valescos-test-task-3.netlify.app/",
    img: t03,
    stack: ["Vue.js", "TailwindCSS", "Vite", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "p007",
    reporef: "https://github.com/valescos/vsk-training-layout-2",
    href: "https://valescos-practice-2.netlify.app/",
    img: l03,
    stack: ["React.js", "TailwindCSS", "Vite", "HTML", "CSS", "TypeScript"],
  },
  {
    id: "p008",
    reporef: "https://github.com/valescos/vsk-planner-serv",
    href: "",
    img: "",
    stack: ["Node.js", "Express", "PostgreSQL", "JavaScript"],
  },
  {
    id: "p009",
    reporef: "https://github.com/valescos/vsk-planner-cl",
    href: "https://vsk-planner-cl.onrender.com/",
    img: l04,
    stack: [
      "React.js",
      "TanStack Query",
      "React Hook Form",
      "Zustand",
      "Zod",
      "TailwindCSS",
      "Vite",
      "TypeScript",
    ],
  },
];
