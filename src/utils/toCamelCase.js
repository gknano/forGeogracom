// Параметр user - строка с разделителями "-" или "_" следующего вида
// "имя-фамилия-отчество", "имя_Фамилия-отчество", "Имя_фамилия_Отчество"
// необходимо вернуть новую строку в формате CamelCase и пробелом как разделитель
// подробнее - https://ru.wikipedia.org/wiki/CamelCase
const toCamelCase = (userName) => {
    return userName
    .replace(/[\_\-]/g, ' ').toLowerCase()
    .split(' ')
    .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
}

export default toCamelCase;