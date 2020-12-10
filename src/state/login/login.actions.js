import { LOGIN_REQ } from './login.actionTypes';

export const loginReq = (user, password) => {
  return {
    type: LOGIN_REQ,
    user,
    password,
  };
};
