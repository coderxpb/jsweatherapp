const pageDom = {};
pageDom.location = document.getElementById('weather-location');
pageDom.desc = document.getElementById('weather-desc');

pageDom.changePageDom = function (weatherData) {
  pageDom.location.textContent = weatherData.location;
  pageDom.desc.textContent = weatherData.desc;
};

export default pageDom;
