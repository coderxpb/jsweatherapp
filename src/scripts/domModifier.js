import cloud from '../images/amcharts_weathericons/animated/cloudy.svg';
import clearD from '../images/amcharts_weathericons/animated/day.svg';
import clearN from '../images/amcharts_weathericons/animated/night.svg';
import rain from '../images/amcharts_weathericons/animated/rainy-7.svg';
import snow from '../images/amcharts_weathericons/animated/snowy-6.svg';
import thundestorm from '../images/amcharts_weathericons/animated/thunder.svg';
import weather from '../images/amcharts_weathericons/animated/cloudy-day-1.svg';
import drizzle from '../images/amcharts_weathericons/animated/rainy-5.svg';

const pageDom = {};
pageDom.body = document.querySelector('body');
pageDom.location = document.getElementById('weather-location');
pageDom.icon = document.getElementById('weather-icon');
pageDom.desc = document.getElementById('weather-desc');
pageDom.tempC = document.getElementById('weather-temp');
pageDom.windhumidity = document.getElementById('weather-windhumidity');
pageDom.icons = {
  clouds: cloud,
  clear: clearD,
  rain,
  snow,
  thundestorm,
  weather,
  drizzle,
};
pageDom.changePageDom = function (weatherData) {
  // const weatherJ = weatherI;
  if (Object.keys(pageDom.icons).includes(weatherData.main)) {
    pageDom.body.classList = weatherData.main;
    pageDom.icon.src = pageDom.icons[weatherData.main];
    console.log(weather);
  } else {
    pageDom.body.classList = 'snow';
    pageDom.icon.src = pageDom.icons.weather;
  }
  pageDom.location.textContent = weatherData.location;

  pageDom.desc.textContent = weatherData.desc;
  const tempC = weatherData.tempF - 273.15;
  const tempClean = tempC.toFixed(2);
  pageDom.tempC.textContent = `${tempClean} C`;
  pageDom.windhumidity.textContent = `Wind: ${weatherData.windspeed} \xa0\xa0 Humidity: ${weatherData.humidity}`;
};

export default pageDom;
