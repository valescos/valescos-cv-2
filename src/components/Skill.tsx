import { Technology } from "../types";
import CircleProgressBar from "./CircleProgressBar";
import IconPiker from "./IconPiker";
import { PROJECTS } from "../data/Projects";
import { PNGIcon } from "../data/Technologies";
import { cn } from "../utilities/cn";

type SkillProps = {
  name: Technology;
  icon?: PNGIcon;
  isFav: boolean;
};

export default function Skill({ name, isFav, icon }: SkillProps) {
  const skillussage = PROJECTS.reduce((acu, p) => {
    if (p.stack.includes(name)) return acu + 1;
    else return acu;
  }, 0);
  const divider = 10;

  return (
    <div className="relative flex flex-col items-center gap-2">
      <CircleProgressBar
        persentage={skillussage > divider ? 1 : skillussage / divider}
        circleWidth={isFav ? 200 : 120}
        radius={isFav ? 80 : 50}
      />
      <div className={cn("absolute", icon ? "top-[18%]" : "top-[24.5%]")}>
        {icon ? (
          <img
            src={icon.main}
            alt=""
            className={cn(
              "transition-all hover:scale-[125%]",
              isFav ? "size-24" : "size-12",
            )}
          />
        ) : (
          <IconPiker name={name} isColored={true} size={isFav ? 64 : 36} />
        )}
      </div>
      <p>{name}</p>
      {skillussage > divider ? (
        <p className="-mt-2 font-main font-black uppercase">{divider}+</p>
      ) : (
        <p className="-mt-2 font-main font-black uppercase">
          {skillussage} / {divider}
        </p>
      )}
    </div>
  );
}
