import { BarChart, Bar, XAxis, YAxis } from "recharts";
import styles from "./WeatherBlock.module.scss";
import store from '../../store/store';
import { whatADay } from '../../utils/weatherData';
import {useState, useEffect} from 'react';


const WeatherBlock = () => {
  const state = store.getState();
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    if(state.weather){
      setWeather(state.weather.daily.map(dayData => {
        return {
          name: whatADay(dayData.dt), 
          uv: Math.floor(dayData.temp.eve)
        }}));
      return weather
    }
  }, [state.weather]);

  return (
    <div className={styles.wather__block}>
    <BarChart width={800} height={400} data={weather}>
      <Bar dataKey="uv" fill="#BF6799" />
      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
    </div>
  );
}
export default WeatherBlock;
