// Modules
import { useEffect, useState } from "react";
import axios from "axios";
// Styling
import "./App.css";
// Components
import { FetchedDataDisplay } from "./components/FetchedDataDisplay";

const App = () => {
  const date = () => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Satuday",
      "Sunday",
    ];
  };

  const [cityName, setCityName] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  return (
    <div className="App">
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
          onChange={(event) => {
            setCityName(event.target.value);
          }}
        />
        <div className="buttonContainer">
          <button>Get the weather</button>
          {shouldFetch ? <FetchedDataDisplay {...{ cityName }} /> : null}
        </div>
      </form>
      <footer className="footer">
        <h4>
          Created at <a href="https://junocollege.com/">Juno College</a> &
          developed by
          <a href="https://www.developedbyfj.com/"> FJ</a>.
        </h4>
      </footer>
    </div>
  );
};

export default App;
