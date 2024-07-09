import { Technology } from "../types";

import l01 from "../assets/img/l01.png";
import l02 from "../assets/img/l02.png";
import l03 from "../assets/img/l03.png";
import l04 from "../assets/img/l04.png";
import t01 from "../assets/img/t01.png";
import t02 from "../assets/img/t02.png";
import t03 from "../assets/img/t03.png";
import cv01 from "../assets/img/cv01.png";
import cv02 from "../assets/img/cv02.png";
import serv01 from "../assets/img/serv01.png";

import l01small from "../assets/img/l01small.png";
import l02small from "../assets/img/l02small.png";
import l03small from "../assets/img/l03small.png";
import l04small from "../assets/img/l04small.png";
import t01small from "../assets/img/t01small.png";
import t02small from "../assets/img/t02small.png";
import t03small from "../assets/img/t03small.png";
import cv01small from "../assets/img/cv01small.png";
import serv01small from "../assets/img/serv01small.png";
import cv02small from "../assets/img/cv02small.png";

type ProjectT = {
  id: string;
  reporef: string;
  href: string;
  img: string;
  bg: string;
  stack: Technology[];
  date: string;
};

export const PROJECTS: ProjectT[] = [
  {
    id: "p001",
    reporef: "https://github.com/valescos/valescos.github.io",
    href: "https://valescos.github.io/",
    img: l01,
    bg: l01small,
    stack: ["HTML", "CSS", "JavaScript"],
    date: "11-31-2023",
  },
  {
    id: "p002",
    reporef: "https://github.com/valescos/valescos-cv",
    href: "https://valescos-cv.netlify.app/",
    img: cv01,
    bg: cv01small,
    stack: ["React.js", "TailwindCSS", "Vite", "HTML", "CSS", "JavaScript"],
    date: "05-06-2024",
  },
  {
    id: "p003",
    reporef: "https://github.com/valescos/test-task-1",
    href: "https://valescos-test-task-1.netlify.app/",
    img: t01,
    bg: t01small,
    stack: ["React.js", "TailwindCSS", "Vite", "HTML", "CSS", "JavaScript"],
    date: "04-28-2024",
  },
  {
    id: "p004",
    reporef: "https://github.com/valescos/test-task-2",
    href: "https://valescos-test-task-2.netlify.app/",
    img: t02,
    bg: t02small,
    stack: [
      "Vue.js",
      "Pinia",
      "TailwindCSS",
      "Vite",
      "HTML",
      "CSS",
      "TypeScript",
      "JavaScript",
    ],
    date: "05-03-2024",
  },
  {
    id: "p005",
    reporef: "https://github.com/valescos/vsk-training-layout-1",
    href: "https://valescos-practice-1.netlify.app/",
    img: l02,
    bg: l02small,
    stack: [
      "Vue.js",
      "Pinia",
      "TailwindCSS",
      "Vite",
      "HTML",
      "CSS",
      "TypeScript",
      "JavaScript",
    ],
    date: "06-03-2024",
  },
  {
    id: "p006",
    reporef: "https://github.com/valescos/test-task-3",
    href: "https://valescos-test-task-3.netlify.app/",
    img: t03,
    bg: t03small,
    stack: ["Vue.js", "TailwindCSS", "Vite", "HTML", "CSS", "JavaScript"],
    date: "06-07-2024",
  },
  {
    id: "p007",
    reporef: "https://github.com/valescos/vsk-training-layout-2",
    href: "https://valescos-practice-2.netlify.app/",
    img: l03,
    bg: l03small,
    stack: ["React.js", "TailwindCSS", "Vite", "HTML", "CSS", "JavaScript"],
    date: "06-12-2024",
  },
  {
    id: "p008",
    reporef: "https://github.com/valescos/vsk-planner-serv",
    href: "",
    img: serv01,
    bg: serv01small,
    stack: ["Node.js", "Express", "PostgreSQL", "JavaScript"],
    date: "06-22-2024",
  },
  {
    id: "p009",
    reporef: "https://github.com/valescos/vsk-planner-cl",
    href: "https://vsk-planner-cl.onrender.com/",
    img: l04,
    bg: l04small,
    stack: [
      "React.js",
      "TanStack Query",
      "React Hook Form",
      "Zustand",
      "Zod",
      "TailwindCSS",
      "Vite",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    date: "06-23-2024",
  },
  {
    id: "p010",
    reporef: "https://github.com/valescos/valescos-cv-2",
    href: "https://valescoscv.netlify.app/",
    img: cv02,
    bg: cv02small,
    stack: [
      "React.js",
      "Zustand",
      "TailwindCSS",
      "Vite",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Headless UI",
    ],
    date: "07-09-2024",
  },
];
