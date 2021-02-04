// сохраняем данные в localStorage
export const setUserInfo = (userInfo) => {
  localStorage.setItem('USER_INFO', userInfo);
};
// получаем данные из localStorage
export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('USER_INFO') || '[]');
};
