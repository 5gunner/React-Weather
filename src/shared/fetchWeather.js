import weatherIcons from "./weather-icon";
import Countries from "./countries";
import Store from "../Store";

const fetchWeather = function(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=4cb0abadb2bf1742c69878c17015cc4e`
  )
    .then(blob => blob.json())
    .then(data => {
      data.icon = getIcon(data);
      return data;
    })
    .then(data => {
      let isoCountry = data.sys.country;
      data.country = getCountryName(isoCountry);
      return data;
    })
    .then(data => Store.dispatch({ type: "WEATHER_RETRIEVED", payload: data }));
}

function getIcon(response) {
  let prefix = "wi wi-";
  let code = response.weather[0].id;
  let icon = weatherIcons[code].icon;

  // If we are not in the ranges mentioned above, add a day/night prefix.
  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    icon = "day-" + icon;
  }

  // Finally tack on the prefix.
  icon = prefix + icon;
  return icon;
}

function getCountryName(countryCode) {
  if (Countries.hasOwnProperty(countryCode)) {
    return Countries[countryCode];
  } else {
    return countryCode;
  }
}

export default fetchWeather;