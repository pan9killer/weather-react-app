export const getWeatherOnYourLocation = (payload) => ({type: 'MY_LOCATION_WEATHER', payload});
export const getLanLotFromCity = (payload) => ({type: 'CITY_LAT_LOT', payload});
export const getWeatherData = (payload) => ({type: 'GET_WEATHER_IN_CITY', payload});




// export const getLatLonFromCity = () => {return async(dispatch, getState) => {
//   const location = await getCityLatLon()
//     dispatch({type: 'CITY_LAT_LOT', location})
// }}
