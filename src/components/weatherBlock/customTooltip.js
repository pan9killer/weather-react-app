import styles from "./WeatherBlock.module.scss";

export const CustomTooltip = ({ active, payload, label }) => {
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
};