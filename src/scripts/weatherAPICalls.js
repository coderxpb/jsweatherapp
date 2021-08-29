import pageDom from './domModifier';

function getUsefulWeatherData(data) {
  const newData = {};
  newData.location = data.name;
  newData.main = data.weather[0].main.toLowerCase();
  newData.desc = data.weather[0].description;
  newData.tempF = data.main.temp;
  newData.humidity = data.main.humidity;
  newData.windspeed = data.wind.speed;
  newData.feelsLike = data.main.feels_like - 273.15;
  newData.clouds = data.clouds.all;
  newData.rain = data.rain['1h'];
  return newData;
}

export default async function getWeatherData(inputLocation) {
  try {
    // const inputLocation = prompt('Enter your location: ');
    // const inputLocation = 'Egypt';
    // console.log(inputLocation);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=ab0f54a57cc1277f45830d3aebbcf28e`, { mode: 'cors' });
    const data = await response.json();
    const usefulData = getUsefulWeatherData(data);
    console.log(data);
    pageDom.changePageDom(usefulData);
    // const responseHD = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude={current,minutely,alerts}&appid=ab0f54a57cc1277f45830d3aebbcf28e`, { mode: 'cors' });
    // const dataHD = await responseHD.json();
    // console.log(dataHD);
  } catch (err) {
    console.log('enter a valid location');
    console.log(err);
  }
}
