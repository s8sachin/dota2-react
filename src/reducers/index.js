import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';

export default combineReducers({
  heroesData: heroesReducer,
});
