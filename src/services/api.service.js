// import {whatADay} from '../utils/weatherData';

const axios = require('axios');
const instance = axios.create({baseURL: 'https://api.openweathermap.org/data/2.5/'});


export async function getWeatherDataAPI(data){
  try{
    const getWeatherDataFromInput = await instance.get(`onecall`, {
      params: {
        lat: data.latitude,
        lon: data.longitude,
        exclude: 'hourly,minutely',
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