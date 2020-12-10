import { call, fork, put, take } from 'redux-saga/effects';
import { GET_USERS_ERROR, GET_USERS_SUCCESS, GET_USERS_REQ } from './home.actionTypes';
import homeService from '../../components/home/home.service';

export default function* homeSaga() {
  yield take(GET_USERS_REQ);
  yield fork(getUsers);
}

function* getUsers() {
  console.log('homeSaga');
  try {
    yield call(homeService.getUsers);
    yield put({ type: GET_USERS_SUCCESS });
  } catch (error) {
    yield put({ type: GET_USERS_ERROR, error });
  }
}
