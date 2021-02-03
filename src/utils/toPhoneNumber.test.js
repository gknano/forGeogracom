import toPhoneNumber from "./toPhoneNumber";

describe('Тест функции toPhoneNumber для', () => {

    test('первого случая строки', () => {
        expect(toPhoneNumber('1234567890')).toBe('7 (123) 456-7890');
    });

    test('второго случая', () => {
        expect(toPhoneNumber('1111111111')).toBe('7 (111) 111-1111');
    });

    test('третьего случая', () => {
        expect(toPhoneNumber('0987654321')).toBe('7 (098) 765-4321');
    });

});