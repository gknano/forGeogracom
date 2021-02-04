import { createStore, combineReducers } from 'redux';
import userInfoReducer from './Reducers';

const initialState = { userInfoReducer: { userInfo: [] } };
const store = createStore(combineReducers({ userInfoReducer }), initialState);
console.log(store.getState());
export default store;
