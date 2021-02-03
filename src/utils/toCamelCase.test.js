import toCamelCase from "./toCamelCase";

describe('Тест функции toCamelCase для', () => {

    test('пустой строки', () => {
        expect(toCamelCase('')).toBe('');
    });

    test('строки с нижним подчеркиванием', () => {
        expect(toCamelCase('иван_федорович_крузенштерн')).toBe('иван Федорович Крузенштерн');
    });

    test('строки с тире', () => {
        expect(toCamelCase('Иван-федорович-крузенштерн')).toBe('Иван Федорович Крузенштерн');
    });

    test('строки с короткими словами и тире', () => {
        expect(toCamelCase('я-не-знаю')).toBe('я Не Знаю');
    });

    test('строки с короткими словами и нижним подчеркиванием', () => {
        expect(toCamelCase('Я_не_знаю')).toBe('Я Не Знаю');
    });

});