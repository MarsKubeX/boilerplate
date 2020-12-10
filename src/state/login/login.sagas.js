import { call, fork, put, take } from 'redux-saga/effects';
import { LOGIN_ERROR, LOGIN_REQ, LOGIN_SUCCESS } from './login.actionTypes';
import loginService from '../../components/login/login.service';

export default function* loginSaga() {
  const { user, password } = yield take(LOGIN_REQ);
  yield fork(login, user, password);
}

function* login(user, password) {
  try {
    yield call(loginService.login, user, password);
    yield put({ type: LOGIN_SUCCESS });
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error });
  }
}
