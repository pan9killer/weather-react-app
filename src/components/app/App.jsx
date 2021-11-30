import {useEffect, useState} from 'react';
import styles from './App.module.scss';
import SearchBlock from '../searchBlock';
import WeatherBlock from '../weatherBlock';
import {getWeatherDataFromInput, getWeatherDataOnLoad , getCityLatLon} from '../../services/api.service'

const App = () => {
  const[weather1, setWeather1] = useState({});
  const[weather2, setWeather2] = useState({});
  const[cityLatLon, setCityLatLon] = useState({});

  useEffect(()=>{
    const changeState = async() =>{
    let getSymbols = await getWeatherDataFromInput();
    let fromTo = await getWeatherDataOnLoad();
    let getCity = await getCityLatLon('Tbilisi');
    setWeather1(getSymbols);
    setWeather2(fromTo)
    setCityLatLon(getCity)
    };
    changeState();
  }, [])

  console.log(weather1);
  console.log(weather2);
  console.log(cityLatLon);


  return (
    <div className={styles.app}>
      <SearchBlock city={cityLatLon}/>
      <WeatherBlock />
    </div>
  );
}

export default App;
