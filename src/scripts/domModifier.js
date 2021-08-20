import weatherI from '../images/amcharts_weathericons/animated/weather.svg';

const pageDom = {};
pageDom.location = document.getElementById('weather-location');
pageDom.icon = document.getElementById('weather-icon');
pageDom.desc = document.getElementById('weather-desc');
pageDom.tempF = document.getElementById('weather-temp');
pageDom.windhumidity = document.getElementById('weather-windhumidity');

pageDom.changePageDom = function (weatherData) {
  const weatherJ = weatherI;
  pageDom.location.textContent = weatherData.location;
  pageDom.icon.src = weatherJ;
  console.log(weatherJ);
  pageDom.desc.textContent = weatherData.desc;

  pageDom.tempF.textContent = weatherData.tempF;
  pageDom.windhumidity.textContent = `${weatherData.windspeed} ${weatherData.humidity}`;
};

export default pageDom;
