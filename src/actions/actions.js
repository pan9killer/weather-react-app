import {getWeatherDataOnLoad, getWeatherDataFromInput, getCityLatLon} from '../services/api.service';

export const getWeatherOnYourLocation = () => ({type: 'MY_LOCATION_WEATHER'});
// export const getLanLotFromCity = () => ({type: 'CITY_LAT_LOT', payload: getCityLatLon()});
export const getWeatherFromInput = () => ({type: 'GET_WEATHER_IN_CITY', payload: getWeatherDataFromInput()});




export const getLatLonFromCity = () => {return async(dispatch, getState) => {
  const location = await getCityLatLon()
    dispatch({type: 'CITY_LAT_LOT', location})
}}

export const setFoo = () => { return async(dispatch, getState)=>{
  const location = await getWeatherDataOnLoad()
  // debugger
  dispatch({type: 'FOO', payload: location})
}}