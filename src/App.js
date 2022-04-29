import './App.css';
import { useEffect, useState } from 'react';

// API call
const api = {
  key: "44082ee5fdfb89d4da8cad9697c38e7f",
  url: "https://api.openweathermap.org/data/2.5/weather"
}

function App() {

  const date = (e) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday", "Sunday"];
  }
  

  return (
    <div className="App">
      <h1>Welcome to the weather app</h1>

      {/* Search bar to grab user location */}
      <input
      type="text"
      className="search-bar"
      placeholder="Select location..."
      />
    </div>
  );
}

export default App;
