import "./DarkModeToggle.scss";
import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../assets/icon-sun.svg";

export default function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
  return (
    <button className="dark-mode-btn" onClick={toggleDarkMode}>
      <p className="dark-mode-btn__text">{isDarkMode ? "Light" : "Dark"}</p>
      <div className="dark-mode-btn__icon">
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </div>
    </button>
  );
}
