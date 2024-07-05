type TechnologyProps = {
  id: string;
  name: string;
  icon: string;
};

export default function Technology({ name, icon }: TechnologyProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={icon} alt={name} className="size-24" />
      <p>{name}</p>
    </div>
  );
}
