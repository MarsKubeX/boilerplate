import { LOGIN_REQ, LOGIN_SUCCESS, LOGIN_ERROR } from './login.actionTypes';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  pending: false,
  error: null,
  user: user ? user : {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQ:
      return {
        ...state,
        pending: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
