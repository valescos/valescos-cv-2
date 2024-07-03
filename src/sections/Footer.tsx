import ContactMe from "../components/ContactMe";
import { useTailwindConst } from "../hooks/useTailwindConst";
import { cn } from "../utilities/cn";

export default function Footer() {
  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <header className={cn("py-4", RESPONSIVE_WRAPPER)}>
      <ContactMe variant="row" />
    </header>
  );
}
