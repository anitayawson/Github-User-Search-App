import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import UserCard from "./components/UserCard/UserCard";
import "./App.scss";
import axios from "axios";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [userData, setUserData] = useState(null);

  const handleUserFound = (data) => {
    setUserData(data);
  };

  useEffect(() => {
    const fetchOctocatData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/octocat"
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching Octocat's data:", error);
      }
    };

    fetchOctocatData();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <SearchBar onUserFound={handleUserFound} isDarkMode={isDarkMode} />
      <UserCard userData={userData} isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
