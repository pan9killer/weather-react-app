import { whatADay } from "../utils/weatherData";
const initialState = {foo: 'bar'};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'MY_LOCATION_WEATHER':
      console.log( action);
      return {...state, state: action.payload};
    case 'CITY_LAT_LOT':
      return {...state, city: action.payload};
    case 'GET_WEATHER_IN_CITY':
      return {...state, state: action.payload};
    case 'FOO':
      return {...state, foo: action.payload}
    default:
      return state;
  };
};

export default reducer;