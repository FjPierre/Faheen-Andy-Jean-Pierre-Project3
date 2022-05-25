import { useEffect, useState } from "react";

// API call
const api = {
  key: "44082ee5fdfb89d4da8cad9697c38e7f",
  url: "https://api.openweathermap.org/data/2.5/weather",
};

export function useWeatherData(cityName, clearInput, citySearch) {
  const [weatherData, setWeatherData] = useState(null);

  // fetch the weather data on mount and save to state
  useEffect(() => {
    (async () => {
      // 1. get the coordinates of the city
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${api.key}`;

      const resp = await fetch(url);
      const data = await resp.json();

      const { lat, lon } = data[0] ?? { lat: null, lon: null };

      if (!lon) {
        return `"OH NO no coords found"`;
      }

      // 2. use these coords to fetch the weather data
      const weatherResp = await fetch(
        `${api.url}?lat=${lat}&lon=${lon}&appid=${api.key}&main.feels_like&units=metric`
      );
      const weatherRespData = await weatherResp.json();
      setWeatherData(weatherRespData);
      clearInput();
    })();
  }, [citySearch]);
  return weatherData;
}

// function useMount(cb) {
//   // eslint-disable-next-line
//   return useEffect(cb, []);
// }
