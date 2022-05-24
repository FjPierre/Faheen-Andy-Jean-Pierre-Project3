// Modules
import { useState } from "react";
// Styling
import "./App.css";
// Components
import { FetchedDataDisplay } from "./components/FetchedDataDisplay";
import Footer from "./components/Footer";

const App = () => {
  const [cityName, setCityName] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const [citySearch, setCitySearch] = useState("");
  // const handleSearchBarInput () => {
  //   setCityName(handleSearchBarInput.target.value)
  // }
  const clearInput = () => {
    setCityName("");
  };

  return (
    <div className="App">
      <main>
        <h1>Welcome to the weather app</h1>
        <h2>Get the right temperature and dress according to the weather:</h2>

        {/* Search bar to grab user location */}
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            if (cityName) {
              setShouldFetch(true);
              setCitySearch(cityName);
            } 
          }}
        >
          <input 
          type="text"
          className="search-bar"
          placeholder="Select location..."
          value={cityName}
          onChange={(handleSearchBarInput) => setCityName(handleSearchBarInput.target.value)}
          />
          <div className="buttonContainer">
            <button>Get the weather</button>
            {shouldFetch ? (
              <FetchedDataDisplay {...{ cityName, clearInput, citySearch }} />
            ) : null}
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default App;
