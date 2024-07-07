import { Technology } from "../types";
import { TECHNOLOGIES } from "../data/Technologies";
import LazyImg from "./LazyImg";

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
    <div className="flex basis-[80%] flex-col items-center sm:basis-[40%] lg:basis-[30%]">
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
            <li key={index} className="fill-white stroke-white text-white">
              <img
                title={item}
                src={TECHNOLOGIES.find((tech) => tech.name === item)?.bwicon}
                alt=""
                className="size-6 fill-current"
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
