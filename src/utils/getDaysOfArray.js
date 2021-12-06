import { whatADay } from '../utils/weatherData';

export const getArrayOfDays = (arr) => {
  return arr.map(dayData => {
    return {
      dayOfWeek: whatADay(dayData.dt), 
      temp: Math.floor(dayData.temp.eve),
      dayTemp: Math.floor(dayData.temp.day),
      nightTemp: Math.floor(dayData.temp.night),
      maxTemp: Math.floor(dayData.temp.max),
      minTemp: Math.floor(dayData.temp.min),
      weather: dayData.weather[0].main
    };
  });
};