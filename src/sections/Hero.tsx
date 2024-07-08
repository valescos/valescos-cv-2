import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import avatar from "../assets/img/avatar_sm.png";

export default function Hero() {
  const { RESPONSIVE_WRAPPER, THEME_BORDER } = useTailwindConst();

  return (
    <section
      className={cn(
        "flex flex-col items-center gap-8 py-4",
        RESPONSIVE_WRAPPER,
      )}
    >
      <div
        className={cn(
          "size-64 overflow-hidden rounded-3xl bg-[url('/src/assets/img/day-theme-bg.jpg')] bg-cover transition-all dark:bg-[url('/src/assets/img/nigth-theme-bg.jpg')]",
          THEME_BORDER,
        )}
      >
        <img
          src={avatar}
          alt="Аватар автора сайта"
          className="dark:saturate-[0.5]"
        />
      </div>
      <h2 className="text-3xl">
        Здравствуйте, меня зовут <strong>Валентин</strong> и вы на
        страничке-резюме, документирующей мой путь во фронтэнд разработке. 
      </h2>
    </section>
  );
}
