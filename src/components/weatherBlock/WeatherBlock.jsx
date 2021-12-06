import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import styles from "./WeatherBlock.module.scss";
import store from '../../store/store';
import {useState, useEffect} from 'react';
import { CustomTooltip } from "./customTooltip";
import { getArrayOfDays } from "../../utils/getDaysOfArray";

const WeatherBlock = () => {
  const state = store.getState();
  const [weather, setWeather] = useState([]);
  
  useEffect(() => {
    if(state.weather){
      const daysArray = getArrayOfDays(state.weather.daily);
      setWeather(daysArray);
    }
  }, [state.weather]);

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
};

export default WeatherBlock;
