import { useTailwindConst } from "./hooks/useTailwindConstants";
import { cn } from "./utilities/cn";

function App() {
  const handleTogleDM = () => {
    document.querySelector("html")?.classList.contains("dark")
      ? document.querySelector("html")?.classList.remove("dark")
      : document.querySelector("html")?.classList.add("dark");
  };

  const { RESPONSIVE_WRAPPER } = useTailwindConst();

  return (
    <div className="flex flex-col items-center">
      <section className={cn(RESPONSIVE_WRAPPER)}>
        <button onClick={handleTogleDM}>Toggle DarkMode</button>
      </section>
    </div>
  );
}

export default App;
