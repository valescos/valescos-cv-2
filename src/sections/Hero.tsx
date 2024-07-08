import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";
import ContactMe from "../components/ContactMe";
import { Button } from "@headlessui/react";

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
      <div className="overflow-hidden rounded-3xl bg-[url('/src/assets/img/day-theme-bg.jpg')] bg-cover transition-all dark:bg-[url('/src/assets/img/nigth-theme-bg.jpg')]">
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
        <Button className="self-start rounded bg-gradient-to-tr from-[#fea845] to-[#bc7152] px-4 py-2 text-sm text-white data-[active]:opacity-90 data-[hover]:opacity-90 dark:from-[#015088] dark:to-[#01315f]">
          PDF резюме
        </Button>
      </div>
    </section>
  );
}
