import "./SearchBar.scss";
import searchIcon from "../../assets/icon-search.svg";

export default function SearchBar() {
  return (
    <div class="search-container">
      <img class="search-container__icon" src={searchIcon} alt="search" />
      <input
        class="search-container__input"
        type="text"
        placeholder="Search GitHub username…"
      />
      <button class="search-container__btn">Search</button>
    </div>
  );
}
