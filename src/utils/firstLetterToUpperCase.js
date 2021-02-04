// функция замееняющая первую букву в слове на вархний регистр
export const firstLetterToUpperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
