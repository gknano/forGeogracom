// Параметр numbers - строка из 10 символов
// её необходимо преобразовать в вид '7 (xxx) xxx-xxxx'
const toPhoneNumber = (number) => {
  if (number) {
    const re = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})/;
    const pattern = '7 ($1) $2-$3';
    number = number.replace(re, pattern);
  }

  return number;
};

export default toPhoneNumber;
