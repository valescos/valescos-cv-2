import type { TProjectType } from "../data/Projects";

type ProjectProps = TProjectType;

export default function Project({
  id,
  reporef,
  href,
  img,
  stack,
}: ProjectProps) {
  return (
    <div className="basis-[80%] border-2 border-slate-900 sm:basis-[40%] lg:basis-[30%] dark:border-white">
      {id}
      <ul>
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
