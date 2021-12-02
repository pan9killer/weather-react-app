import {whatADay} from '../utils/weatherData';
const axios = require('axios');
const instance = axios.create({baseURL: 'https://api.openweathermap.org/data/2.5/'});


let inputLatLot;
let latlon;
const showPosition = (position) => {
  latlon = position.coords;
}
navigator.geolocation.getCurrentPosition(showPosition);


export async function getWeatherDataOnLoad(){
  try{
    const getWeatherDataOnLoad = await instance.get(`onecall`, {
      params: {
        lat: latlon.latitude,
        lon: latlon.longitude,
        lang: 'ru',
        units: 'metric',
        appid: '15e2d862129fa12a6ba6633847af27ed'
      }
    })
    .then((response) => response.data);
    // getWeatherDataOnLoad.daily.forEach(dt => console.log(whatADay(dt.dt)));
    return getWeatherDataOnLoad;
  }catch(err){
    console.log(err);
  }
}

export async function getWeatherDataFromInput(){
  try{
    const getWeatherDataFromInput = await instance.get(`onecall`, {
      params: {
        lat: -0.1257,
        lon: 51.5085,
        exclude: 'daily',
        lang: 'ru',
        units: 'metric',
        appid: '15e2d862129fa12a6ba6633847af27ed'
      }
    })
    .then((response) => response.data);
    return getWeatherDataFromInput;
  }catch(err){
    console.log(err);
  }
}

export async function getCityLatLon(city){
  try{
    const getCityLanLot = await instance.get(`weather`, {
      params: {
        q: city,
        appid: '15e2d862129fa12a6ba6633847af27ed'
      }
    })
    .then((response) => response.data.coord);
    return getCityLanLot;
  }catch(err){
    console.log(err);
  }
};