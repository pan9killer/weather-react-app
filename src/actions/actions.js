import {getCityLatLon} from '../services/api.service';

export const getWeatherOnYourLocation = (payload) => ({type: 'MY_LOCATION_WEATHER', payload});
// export const getLanLotFromCity = () => ({type: 'CITY_LAT_LOT', payload: getCityLatLon()});
export const getWeatherData = (payload) => ({type: 'GET_WEATHER_IN_CITY', payload});




export const getLatLonFromCity = () => {return async(dispatch, getState) => {
  const location = await getCityLatLon()
    dispatch({type: 'CITY_LAT_LOT', location})
}}

// export const getWeatherOnYourLocation = () => { return async(dispatch, getState)=>{
//   const location = await getWeatherDataOnLoad()
//   dispatch({type: 'MY_LOCATION_WEATHER', payload: location})
// }}