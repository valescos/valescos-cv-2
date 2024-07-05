import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";

//temp imports
import avatar from "../assets/img/avatar_sm.png";
import ContactMe from "../components/ContactMe";

export default function Hero() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <section
      className={cn(
        "flex items-center justify-center gap-8 py-4",
        RESPONSIVE_WRAPPER,
      )}
    >
      <div className="overflow-hidden rounded-3xl bg-[url('./assets/img/day-theme-bg.jpg')] bg-cover transition-all dark:bg-[url('./assets/img/nigth-theme-bg.jpg')]">
        <img
          src={avatar}
          alt="Аватар автора сайта"
          className="dark:saturate-[0.5]"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1>Валентин Косарев</h1>
          <p>Фронтенд-разработчик</p>
        </div>
        <ContactMe variant="col" />
      </div>
    </section>
  );
}
