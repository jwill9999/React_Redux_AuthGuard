import { combineReducers } from 'redux';
import authenticationReducer from './Authentication';

const rootReducer = combineReducers({
  authentication: authenticationReducer
});

export default rootReducer;
