import pageDom from './domModifier';

function getUsefulWeatherData(data) {
  const newData = {};
  newData.location = data.name;
  newData.main = data.weather[0].main.toLowerCase();
  newData.desc = data.weather[0].description;
  newData.tempF = data.main.temp;
  newData.humidity = data.main.humidity;
  newData.windspeed = data.wind.speed;
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
    console.log(data.name);
    pageDom.changePageDom(usefulData);
  } catch (err) {
    console.log('enter a valid location');
    console.log(err);
  }
}
