'use strict';

const ints = require('../../lib/index');

describe('Prime numbers', () => {

    test('get less prime numbers', () => {
        expect(ints(11).getLessPrimeNumbers()).toEqual([2, 3, 5, 7]);
    });

    test('get less or equal prime numbers', () => {
        expect(ints(11).getLessOrEqualPrimeNumbers()).toEqual([2, 3, 5, 7, 11]);
    });

    test('get prime numbers', () => {
        expect(ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbers()).toEqual([2, 3, 7, 11, 23]);
    });

    test('get less prime numbers than', () => {
        expect(ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbersLessThan(23)).toEqual([2, 3, 7, 11]);
    });

    test('get less or equal prime numbers than', () => {
        expect(ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbersLessOrEqualThan(23)).toEqual([2, 3, 7, 11, 23]);
    });

    test('get greater prime numbers than', () => {
        expect(ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbersGreaterThan(7)).toEqual([11, 23]);
    });

    test('get greater or equal prime numbers than', () => {
        expect(ints([2, 1, 3, 7, 10, 4, 20, 6, 11, 8, 23]).getPrimeNumbersGreaterOrEqualThan(7)).toEqual([7, 11, 23]);
    });

    test('check if number is a prime number', () => {
        expect(ints(2).isPrimeNumber()).toBe(true);
        expect(ints(4).isPrimeNumber()).toBe(false);
    });

});
