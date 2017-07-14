import { StoreWeather } from "../actions";
import { fetchWeather } from "../shared";

const WeatherReducer = (state = {}, action) => {
  switch (action.type) {
    case "WEATHER_RETRIEVED":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function getCurrentLocationWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    throw "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  fetchWeather(latitude, longitude);
}

getCurrentLocationWeather();

export { WeatherReducer, getCurrentLocationWeather };