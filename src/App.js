import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import UserCard from "./components/UserCard/UserCard";
import "./App.scss";
import axios from "axios";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
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

  return (
    <ThemeProvider>
      <Header />
      <SearchBar onUserFound={handleUserFound} />
      <UserCard userData={userData} />
    </ThemeProvider>
  );
}

export default App;
