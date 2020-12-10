import { combineReducers } from 'redux';

import loginReducer from './login/login.reducer';
import homeReducer from './home/home.reducer';

const rootReducer = combineReducers({
  loginReducer,
  homeReducer,
});

export default rootReducer;
