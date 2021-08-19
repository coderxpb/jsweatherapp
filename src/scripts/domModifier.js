const pageDom = (function () {
  const location = document.getElementById('weather-location');
  // const search = Document.getElementById('weather-search');
  // const icon = Document.getElementById('weather-icon');
  const desc = document.getElementById('weather-desc');

  function changePageDom(weatherData) {
    location.textContent = weatherData.location;
    desc.textContent = weatherData.desc;
  }
}());

export default pageDom;
