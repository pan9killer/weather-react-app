import {getWeatherDataOnLoad, getWeatherDataFromInput, getCityLatLon} from '../services/api.service';

export const getWeatherOnYourLocation = () => ({type: 'MY_LOCATION_WEATHER', payload: getWeatherDataOnLoad()});
export const getLanLotFromCity = () => ({type: 'CITY_LAT_LOT', payload: getCityLatLon()});
export const getWeatherFromInput = () => ({type: 'GET_WEATHER_IN_CITY', payload: getWeatherDataFromInput()});
