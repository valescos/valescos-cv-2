import { Technology } from "../types";
import { TECHNOLOGIES } from "../data/Technologies";
import LazyImg from "./LazyImg";
import IconPiker from "./IconPiker";

type ProjectProps = {
  id: string;
  reporef: string;
  href: string;
  img: string;
  bg: string;
  stack: Technology[];
};

export default function Project({
  id,
  reporef,
  href,
  img,
  bg,
  stack,
}: ProjectProps) {
  return (
    <div className="flex basis-[80%] flex-col items-center transition-all hover:scale-[105%] sm:basis-[40%] lg:basis-[30%]">
      <div className="overflow-hidden rounded-xl border-2 border-slate-900 dark:border-slate-500">
        <LazyImg src={img} bg={bg} />
      </div>
      <ul className="flex flex-wrap gap-2 p-2">
        {stack
          .filter((item) =>
            stack.every(
              (t) =>
                !TECHNOLOGIES.find(
                  (tech) => tech.name === item,
                )?.subtechto?.includes(t),
            ),
          )
          .map((item, index) => (
            <li
              key={index}
              className="fill-slate-900 stroke-none text-white dark:fill-white"
            >
              <IconPiker name={item} isColored={false} size={24} />
            </li>
          ))}
      </ul>
    </div>
  );
}
