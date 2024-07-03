import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";

//temp imports
import avatar from "../assets/img/avatar_sm.png";

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
          className="dark:saturate-[0.65]"
        />
      </div>
      <div>
        <h1>Валентин Косарев</h1>
        <p>Фронтенд-разработчик</p>
        <p>
          <a href="https://github.com/valescos">valescos</a>
        </p>
        <p>
          <a href="mailto:valescos1986@gmail.com">valescos1986@gmail.com</a>
        </p>
        <p>
          <a href="https://t.me/Valescos">t.me/Valescos</a>
        </p>
      </div>
    </section>
  );
}
