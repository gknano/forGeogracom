import { createSelector } from 'reselect';
import { createRootSelector } from './RootSelector';

const rootSelector = createRootSelector('userInfoReducer');

export const getUserInfo = createSelector(
  rootSelector,
  (data) => data.userInfo
);
