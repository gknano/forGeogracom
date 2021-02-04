// Параметр user - строка с разделителями "-" или "_" следующего вида
// "имя-фамилия-отчество", "имя_Фамилия-отчество", "Имя_фамилия_Отчество"
// необходимо вернуть новую строку в формате CamelCase и пробелом как разделитель
// подробнее - https://ru.wikipedia.org/wiki/CamelCase

import { firstLetterToUpperCase } from './firstLetterToUpperCase';
const toCamelCase = (userName) => {
  if (userName) {
    // проверяем что строка содержит символы, которые нужно заменить
    if (userName.includes('_') || userName.includes('-')) {
      // меняем "_" и "-" на пробелы
      userName = userName.replace(/-|_/g, ' ');
      // делаем ис строки массив с пробелом в виде разделителя
      userName = userName.split(' ');
      // в цикле меняем регистр у нужного нам слова
      userName = userName.map((word, i) =>
        i ? firstLetterToUpperCase(word) : word
      );
      // объединяем массив обратно в строку
      userName = userName.join(' ');
    }
  }
  return userName;
};

export default toCamelCase;
