import "./SearchBar.scss";
import { useState } from "react";
import axios from "axios";
import searchIcon from "../../assets/icon-search.svg";

export default function SearchBar({ isDarkMode, onUserFound }) {
  const [username, setUsername] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      onUserFound(response.data);
    } catch (error) {
      console.error("Error getting user:", error);
    }
  };
  return (
    <div className="search-container">
      <img className="search-container__icon" src={searchIcon} alt="search" />
      <input
        className={`search-container__input ${isDarkMode ? "dark-mode" : ""}`}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search GitHub username…"
      />
      <button onClick={handleSearch} className="search-container__btn">
        Search
      </button>
    </div>
  );
}
