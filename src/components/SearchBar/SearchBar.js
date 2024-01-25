import "./SearchBar.scss";
import { useState } from "react";
import axios from "axios";
import searchIcon from "../../assets/icon-search.svg";

export default function SearchBar({ isDarkMode, onUserFound }) {
  const [username, setUsername] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      onUserFound(response.data);
      setNoResults(false);
    } catch (error) {
      console.error("Error getting user:", error);
      setNoResults(true);
    }
  };
  return (
    <div className="search-container">
      <img className="search-container__icon" src={searchIcon} alt="search" />
      <input
        className={`search-container__input ${isDarkMode ? "dark-mode" : ""}`}
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Search GitHub username…"
      />
      <button onClick={handleSearch} className="search-container__btn">
        Search
      </button>
      {noResults && (
        <p
          className={`search-container__no-results ${
            isDarkMode ? "dark-mode" : ""
          }`}
        >
          No results
        </p>
      )}
    </div>
  );
}
