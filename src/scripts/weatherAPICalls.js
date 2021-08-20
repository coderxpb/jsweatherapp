import pageDom from './domModifier';

function getUsefulWeatherData(location, data) {
  const newData = {};
  newData.location = location;
  newData.main = data.weather[0].main;
  newData.desc = data.weather[0].description;
  newData.tempF = data.main.temp;
  newData.humidity = data.main.humidity;
  newData.windspeed = data.wind.speed;
  return newData;
}

export default async function getWeatherData() {
  try {
    // const inputLocation = prompt('Enter your location: ');
    const inputLocation = 'Bangalore';
    console.log(inputLocation);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=ab0f54a57cc1277f45830d3aebbcf28e`, { mode: 'cors' });
    const data = await response.json();
    const usefulData = getUsefulWeatherData(inputLocation, data);
    console.log(usefulData);
    pageDom.changePageDom(usefulData);
  } catch (err) {
    console.log(err);
  }
}
