function App() {
  const handleTogleDM = () => {
    document.querySelector("html")?.classList.contains("dark")
      ? document.querySelector("html")?.classList.remove("dark")
      : document.querySelector("html")?.classList.add("dark");
  };

  return (
    <>
      <button onClick={handleTogleDM}>Toggle DarkMode</button>
    </>
  );
}

export default App;
