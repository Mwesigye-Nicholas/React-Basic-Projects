import useLocalStorage from "./useLocalStorage";
import "./LightDarkMode.css"

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme)
    };
    
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h3> Light Dark Mode</h3>
        <button onClick={handleToggleTheme}>Change Theme.</button>
      </div>
    </div>
  );
};
export default LightDarkMode;
