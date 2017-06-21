const API_KEY = '42cea71d868337f8a1c12498f6fb5f8c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},au`

  return {
    type: FETCH_WEATHER
  };
}
