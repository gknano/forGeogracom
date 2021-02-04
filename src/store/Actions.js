import actionTypes from './ActionTypes';
import {
  getUserInfo as getUserInfoSelector,
  setUserInfo as setUserInfoSelector,
} from '../utils/selectors';

const { GET_USER_INFO, SET_USER_INFO } = actionTypes;

export const setUserInfoAction = (payload) => {
  setUserInfoSelector(JSON.stringify(payload));
  return {
    type: SET_USER_INFO,
    payload,
  };
};

export const getUserInfoAction = () => ({
  type: GET_USER_INFO,
  payload: getUserInfoSelector(),
});
