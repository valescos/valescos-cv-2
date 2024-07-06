import { Technology } from "../types";

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
      <ul className="p-2">
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
