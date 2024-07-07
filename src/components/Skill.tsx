import { Technology } from "../types";
import IconPiker from "./IconPiker";

type TechnologyProps = {
  id: string;
  name: Technology;
  icon: string;
};

export default function Skill({ name }: TechnologyProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <IconPiker name={name} isColored={true} size={36} />

      <p>{name}</p>
    </div>
  );
}
