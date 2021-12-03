import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import styles from "./WeatherBlock.module.scss";
import store from '../../store/store';
import { whatADay } from '../../utils/weatherData';
import {useState, useEffect} from 'react';


const WeatherBlock = () => {
  const state = store.getState();
  const [weather, setWeather] = useState([]);
  
  useEffect(() => {
    if(state.weather){
      const daysArray = getArrayOfDays();
      setWeather(daysArray);
    }
  }, [state.weather]);

  const getArrayOfDays = () => {
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


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload?.length) {
      return (
        <div className={styles.labels}>
          <p className="label">{`${label}: ${payload[0].value}°C`}<br />
          {`Day: ${payload[0].payload.dayTemp}°C`}<br />
          {`Night: ${payload[0].payload.nightTemp}°C`}<br />
          {`Max: ${payload[0].payload.maxTemp}°C`}<br />
          {`Min: ${payload[0].payload.minTemp}°C`}<br />
          {`Weather: ${payload[0].payload.weather}`}</p>
        </div>
      );
    }
    return null;
  }

  return (
    <div className={styles.wather__block}>
    <BarChart width={800} height={400} data={weather}>
      <Bar dataKey="temp" fill="#BF6799" />
      <XAxis dataKey="dayOfWeek" />
      <Tooltip content={<CustomTooltip />} />
      <YAxis />
    </BarChart>
    </div>
  );
}
export default WeatherBlock;
