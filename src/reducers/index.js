import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import PlayerReducer from './PlayerReducer';

export default combineReducers({
  home: HomeReducer,
  player: PlayerReducer,
});
