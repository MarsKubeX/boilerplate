import { fork } from 'redux-saga/effects';
import loginSaga from './login/login.sagas';
import homeSaga from './home/home.sagas';

export default function* sagas() {
  yield fork(loginSaga);
  yield fork(homeSaga);
}
