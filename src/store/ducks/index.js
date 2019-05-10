import { combineReducers } from 'redux';
import localization from './localization';
import user from './user';

export default combineReducers({
  localization,
  user,
});
