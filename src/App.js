import "./App.scss";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import UserCard from "./components/UserCard/UserCard";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <UserCard />
    </div>
  );
}

export default App;
