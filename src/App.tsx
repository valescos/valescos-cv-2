import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="flex flex-col items-center gap-8 font-body">
      <Header />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
