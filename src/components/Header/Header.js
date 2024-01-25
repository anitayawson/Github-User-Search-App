import "./Header.scss";
import { useTheme } from "../../components/ThemeProvider";
import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../assets/icon-sun.svg";

export default function Header() {
  const { theme, toggleDarkMode } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <div className="logo">devfinder</div>
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        <p className="dark-mode-btn__text">
          {theme === "dark" ? "Light" : "Dark"}
        </p>
        <div className="dark-mode-btn__icon">
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </div>
      </button>
    </header>
  );
}
