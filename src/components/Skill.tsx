type TechnologyProps = {
  id: string;
  name: string;
  icon: string;
};

export default function Skill({ name, icon }: TechnologyProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={icon} alt={name} className="h-24" />
      <p>{name}</p>
    </div>
  );
}
