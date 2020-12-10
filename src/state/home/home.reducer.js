import { GET_USERS_ERROR, GET_USERS_REQ, GET_USERS_SUCCESS } from './home.actionTypes';

const initialState = {
  pending: false,
  error: null,
  users: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQ:
      return {
        ...state,
        pending: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
