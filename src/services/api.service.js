const axios = require('axios');
const instance = axios.create({baseURL: 'https://api.openweathermap.org/data/2.5/'});
require('dotenv').config();


export default async function getWeatherData(){
  try{
    const getWeather = await instance.get(`onecall`, {
      params: {
        // lat: ,
        // lon: ,
        exclude: daily,
        appid: process.env.API_KEY
      }
    })
    .then((response) => response.data);
    return getWeather;
  }catch(err){
    console.log(err);
  }
}