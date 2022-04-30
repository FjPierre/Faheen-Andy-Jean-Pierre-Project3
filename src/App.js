// Modules
import { useEffect, useState } from "react";
import axios from "axios";
// Styling
import "./App.css";
import { FetchedDataDisplay } from "./components/FetchedDataDisplay";
// Components

// console.log(url);

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
  console.log(date);

  return (
    <div className="App">
      <h1>Welcome to the weather app</h1>

      {/* Search bar to grab user location */}
      <input
        type="text"
        className="search-bar"
        placeholder="Select location..."
        value={cityName}
        onChange={(event) => {
          setCityName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setShouldFetch(true);
        }}
        disabled={!cityName}
      >
        fetch
      </button>
      {shouldFetch ? <FetchedDataDisplay {...{ cityName }} /> : null}
    </div>
  );
};

export default App;
