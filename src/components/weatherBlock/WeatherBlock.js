import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import "./WeatherBlock.css"

const data = [
  {
    name: 'Monday',
    uv: 30
  },
  {
    name: 'Tuesday',
    uv: 18
  },
  {
    name: 'Wednesday',
    uv: 22
  },
  {
    name: 'Thursday',
    uv: 25
  },
  {
    name: 'Friday',
    uv: 13
  },
  {
    name: 'Saturday',
    uv: 30
  },
  {
    name: 'Sunday',
    uv: 21
  },
];

const WeatherBlock = () => {
  return (
    <div className="wather__block">
    <BarChart width={640} height={480} data={data}>
      <Bar dataKey="uv" fill="#BF6799" />
      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
    </div>
  );
}

export default WeatherBlock;
