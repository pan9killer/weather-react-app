// import { whatADay } from "../utils/weatherData";
const initialState = {};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'MY_LOCATION_WEATHER':
      return {...state, weather: action.payload};
    case 'CITY_LAT_LOT':
      return {...state, city: action.payload};
    case 'GET_WEATHER_IN_CITY':
      return {...state, weather: action.payload};
    case 'FOO':
      return {...state, data: action.payload}
    default:
      return state;
  };
};

export default reducer;