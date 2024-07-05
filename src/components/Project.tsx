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
    <div className="basis-[80%] border-2 border-slate-900 sm:basis-[34%] lg:basis-[22%] dark:border-white">
      {id}
      <ul>
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
