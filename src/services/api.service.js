const axios = require('axios');
const instance = axios.create({baseURL: 'https://api.openweathermap.org/data/2.5/'});


export async function getWeatherDataOnLoad(){
  try{
    const getWeatherDataOnLoad = await instance.get(`onecall`, {
      params: {
        lat: 41.7202176,
        lon: 44.761088,
        exclude: 'daily',
        lang: 'ru',
        units: 'metric',
        appid: '15e2d862129fa12a6ba6633847af27ed'
      }
    })
    .then((response) => response);
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
    .then((response) => response);
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
}