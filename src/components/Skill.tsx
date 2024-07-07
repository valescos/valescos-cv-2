import { Technology } from "../types";
import IconPiker from "./IconPiker";

type SkillProps = {
  name: Technology;
  icon?: string;
  isFav: boolean;
};

export default function Skill({ name, isFav }: SkillProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <IconPiker name={name} isColored={true} size={isFav ? 64 : 36} />
      <p>{name}</p>
    </div>
  );
}
