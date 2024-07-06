import { Technology } from "../types";
import { TECHNOLOGIES } from "../data/Technologies";

type ProjectProps = {
  id: string;
  reporef: string;
  href: string;
  img: string;
  stack: Technology[];
};

export default function Project({
  id,
  reporef,
  href,
  img,
  stack,
}: ProjectProps) {
  return (
    <div className="basis-[80%] overflow-hidden rounded-xl border-4 border-slate-900 bg-slate-700 sm:basis-[34%] lg:basis-[22%] dark:border-slate-500">
      {img && <img src={img} />}
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
            <li key={index}>
              <img
                title={item}
                src={TECHNOLOGIES.find((tech) => tech.name === item)?.bwicon}
                alt=""
                className="size-6"
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
