import {useEffect} from 'react';
import styles from './App.module.scss';
import SearchBlock from '../searchBlock';
import WeatherBlock from '../weatherBlock';
import {getWeatherDataAPI} from '../../services/api.service';
import {getWeatherData} from "../../actions/actions";
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useSelector(state => state);

  useEffect(
    () => {
      navigator.geolocation.getCurrentPosition(async (position)=>{
        const data = await getWeatherDataAPI(position.coords);
        dispatch(getWeatherData(data))
      })
    },[dispatch])

  return (
    <div className={styles.app}>
      <SearchBlock />
      <WeatherBlock />
    </div>
  );
}

export default App;
