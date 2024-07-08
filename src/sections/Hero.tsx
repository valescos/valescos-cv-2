import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import avatar from "../assets/img/avatar_sm.png";
import ContactMe from "../components/ContactMe";
import StyledHeader from "../components/StyledHeader";

export default function Hero() {
  const { RESPONSIVE_WRAPPER, THEME_BORDER } = useTailwindConst();

  return (
    <section
      className={cn(
        "-mt-4 flex flex-col items-center gap-8 md:-mt-20",
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
      <ContactMe />
      <h2 className="text-center font-main text-3xl tracking-wider">
        Здравствуйте, меня зовут <strong>Валентин</strong> и вы на
        страничке-резюме, документирующей мой путь во фронтэнд разработке. 
      </h2>
      <p className="text-center text-xl">
        Ниже приведены примеры работ и информация о навыках :)
      </p>
    </section>
  );
}
