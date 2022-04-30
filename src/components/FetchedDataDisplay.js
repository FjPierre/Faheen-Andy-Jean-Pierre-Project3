import { useEffect } from "react";
import { useWeatherData } from "./useWeatherData";

export function FetchedDataDisplay({ cityName }) {
  const weatherData = useWeatherData(cityName);
  console.log(
    "🚀 ~ file: App.js ~ line 73 ~ FetchedDataDisplay ~ weatherData",
    weatherData
  );

  const { temperature, fullName } = getWeatherDetails(weatherData);
  return (
    <div>{weatherData ? JSON.stringify({ temperature, fullName }) : null}</div>
  );
}
function getWeatherDetails(weatherData) {
  return {
    temperature: weatherData.main.temp,
    fullName: weatherData.name,
  };
}
