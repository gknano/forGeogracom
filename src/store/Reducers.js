import actionTypes from './ActionTypes';
import { combineReducers } from 'redux';

const initialState = {
  userInfo: [],
};

export default function userInfoReducer(state = initialState, action) {
  const { GET_USER_INFO, SET_USER_INFO } = actionTypes;
  switch (action.type) {
    case GET_USER_INFO:
      state = {
        ...state,
        userInfo: action.payload,
      };
    // break;
    case SET_USER_INFO:
      state = {
        ...state,
        userInfo: action.payload,
      };
    // break;
    default:
      break;
  }
  return state;
}
