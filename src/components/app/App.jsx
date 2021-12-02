import {useEffect} from 'react';
import styles from './App.module.scss';
import SearchBlock from '../searchBlock';
import WeatherBlock from '../weatherBlock';
import {getWeatherDataAPI, getWeatherDataOnLoad} from '../../services/api.service';
import store from '../../store/store';
import {getLatLonFromCity, getWeatherOnYourLocation, getWeatherData} from "../../actions/actions";
import { connect, useDispatch } from 'react-redux';

const App = ({getLatLonFromCity, foo, setFoo, data, weather, getWeatherOnYourLocation}) => {
  const dispatch = useDispatch();
  const state = store.getState();

  useEffect(
    async() => {
      const showPosition = async (position) => {
        const data = await getWeatherDataAPI(position.coords);
        console.log(data);
        dispatch(getWeatherData(data))
      }
      navigator.geolocation.getCurrentPosition(showPosition);
    },[])

  console.log(state);



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
, {getWeatherDataOnLoad, getLatLonFromCity})(App);
