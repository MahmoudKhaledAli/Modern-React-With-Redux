import axios from "axios";

const API_KEY = '81d969ab5f7e8e928b1b1442626e07b8';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},us&appid=${API_KEY}`);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}