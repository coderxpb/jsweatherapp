async function getWeatherData() {
  try {
    const inputLocation = prompt('Enter your location: ');
    console.log(inputLocation);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=ab0f54a57cc1277f45830d3aebbcf28e`, { mode: 'cors' });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getWeatherData();
