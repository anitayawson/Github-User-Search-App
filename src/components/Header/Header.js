import "./Header.scss";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <div className={`logo ${isDarkMode ? "dark-mode" : ""}`}>devfinder</div>
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );
}
