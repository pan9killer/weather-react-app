import {useEffect, useState} from 'react';
import styles from './App.module.scss';
import SearchBlock from '../searchBlock';
import WeatherBlock from '../weatherBlock';
import {getWeatherDataFromInput, getWeatherDataOnLoad , getCityLatLon} from '../../services/api.service';
import store from '../../store/store';
import {getLatLonFromCity, getWeatherOnYourLocation, getWeatherFromInput} from "../../actions/actions";
import { connect, useDispatch } from 'react-redux';

const App = ({getLatLonFromCity, foo, setFoo, data, weather, getWeatherOnYourLocation}) => {

  // const getWeatherOnYourLocations = () => { return async(dispatch, getState)=>{
  //   const location = await getWeatherDataOnLoad()
  //   dispatch({type: 'MY_LOCATION_WEATHER', payload: location})
  // }}

  const dispatch = useDispatch();

  useEffect(async()=>{
    const data = await getWeatherDataOnLoad();
    dispatch(getWeatherOnYourLocation(data))
  },[])

  const state = store.getState();
  console.log(state.weather);



  return (
    <div className={styles.app}>
      <SearchBlock />
      {/* <button onClick={getWeatherOnYourLocation()}>lolalal</button> */}
      {/* {console.log(weather, data, getWeatherOnYourLocation, state)} */}
      <WeatherBlock />
    </div>
  );
}

export default connect(
  (state)=>({
    data: state.weather
  })
, {getWeatherDataOnLoad, getLatLonFromCity, getWeatherOnYourLocation})(App);
