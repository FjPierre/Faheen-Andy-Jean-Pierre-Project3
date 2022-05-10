import { useWeatherData } from "./useWeatherData";

export function FetchedDataDisplay({ cityName, clearInput }) {
  const weatherData = useWeatherData(cityName, clearInput);

  // fullName = City name
  const { temperature, fullName } = getWeatherDetails(weatherData);
  return (
    <div className="temperatureContainer">
      <p>
        The temperature today in {fullName} is {temperature} ℃
      </p>
    </div>
  );
}

function getWeatherDetails(weatherData) {
  if (weatherData !== null) {
    return {
      temperature: weatherData.main.temp,
      fullName: weatherData.name,
    };
  } else {
    return {
      temperature: null,
      fullName: null,
    };
  }
}
