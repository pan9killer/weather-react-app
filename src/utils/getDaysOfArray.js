import { whatADay } from '../utils/weatherData';
import store from '../store/store';

export const getArrayOfDays = () => {
  const state = store.getState();
  return state.weather.daily.map(dayData => {
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