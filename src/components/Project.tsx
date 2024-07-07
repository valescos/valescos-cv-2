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
  reporef,
  href,
  img,
  bg,
  stack,
}: ProjectProps) {
  return (
    <div className="flex basis-[80%] flex-col items-center transition-all hover:scale-[105%] sm:basis-[40%] lg:basis-[30%]">
      <div className="relative overflow-hidden rounded-xl border-2 border-slate-900 dark:border-slate-500">
        <div className="target absolute inset-0 flex items-center justify-center gap-4 bg-slate-500/75 opacity-0 transition-all focus-within:opacity-100 hover:opacity-100">
          {reporef && (
            <a href={reporef}>
              <div className="rounded-full bg-white p-2 transition-all hover:scale-[115%]">
                {github}
              </div>
            </a>
          )}
          {href && (
            <a href={href}>
              <div className="rounded-full bg-white p-2 transition-all hover:scale-[115%]">
                {globe}
              </div>
            </a>
          )}
        </div>
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

const github = (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
  >
    <title>Проект на GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const globe = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={36}
    height={36}
  >
    <title>Проект в интернете</title>
    <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
  </svg>
);
