import './styles/main.scss';
import getWeatherData from './scripts/weatherAPICalls';

const searchBox = document.getElementById('weather-search');

function logKey() {
  console.log(searchBox.value);
  getWeatherData(searchBox.value);
}

// searchBox.addEventListener('keydown', logKey);
searchBox.onsearch = logKey;
getWeatherData('Bangalore');
