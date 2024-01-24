import "./SearchBar.scss";
import searchIcon from "../../assets/icon-search.svg";

export default function SearchBar({ isDarkMode }) {
  return (
    <div className="search-container">
      <img className="search-container__icon" src={searchIcon} alt="search" />
      <input
        className={`search-container__input ${isDarkMode ? "dark-mode" : ""}`}
        type="text"
        placeholder="Search GitHub username…"
      />
      <button className="search-container__btn">Search</button>
    </div>
  );
}
