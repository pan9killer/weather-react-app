import {MY_LOCATION_WEATHER, CITY_LAT_LOT, GET_WEATHER_IN_CITY} from './constants'
export const getWeatherOnYourLocation = (payload) => ({type: MY_LOCATION_WEATHER, payload});
export const getLanLotFromCity = (payload) => ({type: CITY_LAT_LOT, payload});
export const getWeatherData = (payload) => ({type: GET_WEATHER_IN_CITY, payload});
