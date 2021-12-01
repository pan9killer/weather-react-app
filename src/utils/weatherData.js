export const whatADay = (date) => {
  const showDate = new Date(date * 1000);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[showDate.getDay()];
}

export const weatherData = [
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
