import './styles/main.scss';
import getWeatherData from './scripts/weatherAPICalls';

const searchBox = document.getElementById('weather-search');

function logKey(event) {
  if (event.code === 'Enter' || event.keyCode === '13') {
    console.log(searchBox.value);
    getWeatherData(searchBox.value);
  }
}

searchBox.addEventListener('keydown', logKey);

getWeatherData('Bangalore');
