import "./Header.scss";
import moonIcon from "../../assets/icon-moon.svg";

export default function Header() {
  return (
    <header class="header">
      <div class="logo">devfinder</div>
      <div class="dark-mode-btn">
        <p class="dark-mode-btn__text">Dark</p>
        <img class="dark-mode-btn__icon" src={moonIcon} alt="moon" />
      </div>
    </header>
  );
}
