import './styles/main.scss';
import getWeatherData from './scripts/weatherAPICalls';
import pageDom from './scripts/domModifier';

getWeatherData();
pageDom.changePageDom({ location: 'Bangalore', desc: 'Description' });
