import { BarChart, Bar, XAxis, YAxis } from "recharts";
import weatherData from "../../utils/weatherData";
import styles from "./WeatherBlock.module.scss";


const WeatherBlock = () => {
  return (
    <div className={styles.wather__block}>
    <BarChart width={800} height={400} data={weatherData}>
      <Bar dataKey="uv" fill="#BF6799" />
      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
    </div>
  );
}

export default WeatherBlock;
