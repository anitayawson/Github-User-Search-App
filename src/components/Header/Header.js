import "./Header.scss";
import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">devfinder</div>
      <button className="dark-mode-btn">
        <p className="dark-mode-btn__text">Dark</p>
        <div className="dark-mode-btn__icon">
          <MoonIcon />
        </div>
      </button>
    </header>
  );
}
