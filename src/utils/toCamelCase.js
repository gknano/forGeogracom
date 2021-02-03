// Параметр user - строка с разделителями "-" или "_" следующего вида
// "имя-фамилия-отчество", "имя_Фамилия-отчество", "Имя_фамилия_Отчество"
// необходимо вернуть новую строку в формате CamelCase и пробелом как разделитель
// подробнее - https://ru.wikipedia.org/wiki/CamelCase
const toCamelCase = (user) => {
    return user;
}

export default toCamelCase;