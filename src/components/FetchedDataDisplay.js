import { useWeatherData } from "./useWeatherData";

export function FetchedDataDisplay({ cityName, clearInput }) {
  const weatherData = useWeatherData(cityName, clearInput);

  // fullName = City name
  const { temperature, fullName, feelsLike } = getWeatherDetails(weatherData);
  return (
    <div className="temperatureContainer">
      <p>
        The temperature today in {fullName} is <span>{temperature}℃ </span>and feels like <span>{feelsLike}ºC.</span>
      </p>
    </div>
  );
}

function getWeatherDetails(weatherData) {
  if (weatherData !== null) {
    return {
      temperature: weatherData.main.temp,
      fullName: weatherData.name,
      feelsLike: weatherData.main.feels_like,
    };
  } else {
    return {
      temperature: null,
      fullName: null,
      feelsLike: null,
    };
  }
}
