import { useEffect, useState } from "react";

// API call
const api = {
  key: "44082ee5fdfb89d4da8cad9697c38e7f",
  url: "https://api.openweathermap.org/data/2.5/weather",
};

export function useWeatherData(cityName) {
  const [weatherData, setWeatherData] = useState(null);

  // fetch the weather data on mount and save to state
  useMount(() => {
    (async () => {
      // 1. get the coordinates of the city
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${api.key}`;

      const resp = await fetch(url);
      const data = await resp.json();

      const { lat, lon } = data[0] ?? { lat: null, lon: null };

      if (!lon) {
        console.warn("OH NO no coords found");
      }

      // 2. use these coords to fetch the weather data
      // https://openweathermap.org/current
      const weatherResp = await fetch(
        `${api.url}?lat=${lat}&lon=${lon}&appid=${api.key}&units=metric`
      );
      const weatherRespData = await weatherResp.json();
      setWeatherData(weatherRespData);
    })();
  });
  return weatherData;
}

function useMount(cb) {
  return useEffect(cb, []);
}
