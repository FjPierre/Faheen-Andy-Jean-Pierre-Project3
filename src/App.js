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
            }
          }}
        >
          <input
            type="text"
            className="search-bar"
            placeholder="Select location..."
            value={cityName}
            onChange={(handleSearchBarInput) => {
              setCityName(handleSearchBarInput.target.value);
            }}
          />
          <div className="buttonContainer">
            <button>Get the weather</button>
            {shouldFetch ? <FetchedDataDisplay {...{ cityName }} /> : null}
          </div>
        </form>
      </main>
      <Footer />
      {/* <footer className="footer">
        <h4>
          Created at <a href="https://junocollege.com/">Juno College</a> &
          developed by
          <a href="https://www.developedbyfj.com/"> FJ</a>.
        </h4>
      </footer> */}
    </div>
  );
};

export default App;
