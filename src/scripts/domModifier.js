import weatherI from '../images/amcharts_weathericons/animated/weather.svg';

const pageDom = {};
pageDom.location = document.getElementById('weather-location');
pageDom.icon = document.getElementById('weather-icon');
pageDom.desc = document.getElementById('weather-desc');
pageDom.tempF = document.getElementById('weather-temp');
pageDom.windhumidity = document.getElementById('weather-windhumidity');

pageDom.changePageDom = function (weatherData) {
  pageDom.location.textContent = weatherData.location;
  pageDom.icon.src = weatherI;
  pageDom.desc.textContent = weatherData.desc;

  pageDom.tempF.textContent = weatherData.tempF;
};

export default pageDom;
