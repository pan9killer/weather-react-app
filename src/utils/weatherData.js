export const whatADay = (date) => {
  const showDate = new Date(date * 1000);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[showDate.getDay()];
}

