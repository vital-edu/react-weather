import axios from 'axios';

const appId = process.env.OPEN_WEATHER_MAP_API_KEY;

if (!appId) {
  console.error('It is necessary to create the .env file in the root directory and set the variable OPEN_WEATHER_MAP_API_KEY');
}

const openweather_url = `http://api.openweathermap.org/data/2.5/weather?appid=${appId}&units=metric`;

function getTemp(location) {
  let encodedLocation = encodeURIComponent(location);
  let requestUrl = `${openweather_url}&q=${encodedLocation}`;
  return axios.get(requestUrl).then((res) => {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message);
    } {
      return res.data.main.temp;
    }
  }).catch((err) => {
    throw new Error(err);
  });
}

module.exports = {getTemp};