import {useEffect, useState} from 'react';
import styles from './App.module.scss';
import SearchBlock from '../searchBlock';
import WeatherBlock from '../weatherBlock';
import {getWeatherDataFromInput, getWeatherDataOnLoad , getCityLatLon} from '../../services/api.service';
import store from '../../store/store';
import {getLatLonFromCity, getWeatherOnYourLocation, getWeatherFromInput, setFoo} from "../../actions/actions";
import { connect } from 'react-redux';

const App = ({getLatLonFromCity, foo, setFoo}) => {
  const[weather1, setWeather1] = useState({});
  const[weather2, setWeather2] = useState({});
  const[cityLatLon, setCityLatLon] = useState({});

  useEffect(()=>{
    const changeState = async() =>{
    let getSymbols = await getWeatherDataFromInput();
    let fromTo = await getWeatherDataOnLoad();
    let getCity = await getCityLatLon('Minsk');
    setWeather1(getSymbols);
    setWeather2(fromTo)
    setCityLatLon(getCity)
    };
    changeState();
  }, [])

  // console.log(weather1);
  console.log(weather2);
  // console.log(cityLatLon);

  const state = store.getState();
  console.log(state);


  return (
    <div className={styles.app}>
      <SearchBlock city={cityLatLon}/>
      <button onClick={setFoo}>lolalal</button>
      {/* <div>{foo}</div> */}
      <WeatherBlock />
    </div>
  );
}

export default connect(
  (state)=>({
    foo: state.foo
  })
, {getWeatherDataOnLoad, getLatLonFromCity, setFoo})(App);
// export default App;
