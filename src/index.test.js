import FizzBuzz from './index';
import { FIZZ, BUZZ} from './constants';

describe( 'FizzBuzz', () => {
    const fizzBuzz = new FizzBuzz();

    test('Deberia responder a 0 con 0', () => {
        expect(fizzBuzz.respondeA(0)).toBe(0);
    });
    test('Deberia responder a 1 con 1', () => {
        expect(fizzBuzz.respondeA(1)).toBe(1);
    });
    test('Deberia responder a 3 con Fizz', () => {
        expect(fizzBuzz.respondeA(3)).toBe(FIZZ);
    });
    
    test('Deberia responder a 4 con 4', () => {
        expect(fizzBuzz.respondeA(4)).toBe(4);
    });
    
    test('Deberia responder a 5 con Buzz', () => {
        expect(fizzBuzz.respondeA(5)).toBe(BUZZ);
    });
    
    test('Deberia responder a 6 con Fizz', () => {
        expect(fizzBuzz.respondeA(6)).toBe(FIZZ);
    });
    
    test('Deberia responder a 10 con Buzz', () => {
        expect(fizzBuzz.respondeA(10)).toBe(BUZZ);
    });
    
    test('Deberia responder a 15 con FizzBuzz', () => {
        expect(fizzBuzz.respondeA(15)).toBe( FIZZ + BUZZ);
    });
    
    test('Deberia responder a 45 con FizzBuzz', () => {
        expect(fizzBuzz.respondeA(45)).toBe( FIZZ + BUZZ);
    });

    test('Deberia responder a 32 con Fizz', () => {
        expect(fizzBuzz.respondeA(32)).toBe(FIZZ);
    });

    test('Deberia responder a 52 con Fizz', () => {
        expect(fizzBuzz.respondeA(52)).toBe(BUZZ);
    });
    test('Deberia responder a 35 con Fizz', () => {
        expect(fizzBuzz.respondeA(35)).toBe( FIZZ + BUZZ);
    });

    test('Deberia responder a 54 con FizzBuzz', () => {
        expect(fizzBuzz.respondeA(54)).toBe( FIZZ + BUZZ);
    });
});

describe('mostrar todos', () => {
    const fizzBuzz = new FizzBuzz();

    test('Deberia mostrar todos', () => {
        expect(fizzBuzz.mostrarAll()).toMatchSnapshot();
    });
})