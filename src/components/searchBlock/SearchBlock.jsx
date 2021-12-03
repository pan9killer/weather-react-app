import styles from "./SearchBlock.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { getCityLatLon, getWeatherDataAPI } from '../../services/api.service';
import { useRef } from 'react';
import { getWeatherData } from "../../actions/actions";


const SearchBlock = () => {
  const inputEl = useRef('');
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const findCity = async(e) => {
    e.preventDefault();
    const { value } = inputEl.current;
    const data = await getCityLatLon(value);
    if(!data){
      return alert('City not found! Try again.')
    }
    const newData = {
      latitude: data.lat,
      longitude: data.lon
    }
    const showCityWeather = await getWeatherDataAPI(newData)
    dispatch(getWeatherData(showCityWeather))
  };

  return(
    <div className={styles.search__block}>
      <h1>Weather in</h1>
        <form className="input-group mb-3" onSubmit={findCity} >
          <input 
            ref={inputEl}
            type="text" 
            className="form-control" 
            placeholder="City" 
            aria-label="Recipient's username" 
            aria-describedby="button-addon2" />
          <button className="btn btn-outline-secondary" id="button-addon2"
          >&#128269;</button>
      </form>
    </div>
  )
}

export default SearchBlock;