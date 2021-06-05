'use strict';

const ints = require('../../lib/index');

describe('Odd numbers', () => {

    test('get less add numbers', () => {
        expect(ints(11).getLessOddNumbers()).toEqual([1, 3, 5, 7, 9]);
    });

    test('get less or equal odd numbers', () => {
        expect(ints(11).getLessOrEqualOddNumbers()).toEqual([1, 3, 5, 7, 9, 11]);
    });

    test('get odd numbers', () => {
        expect(ints([0, 1, 2, -3, 4, 6, 7, 11]).getOddNumbers()).toEqual([1, -3, 7, 11]);
    });

    test('get less odd numbers than', () => {
        expect(ints([0, 1, 2, -3, 4, 6, 7, 11]).getOddNumbersLessThan(11)).toEqual([1, -3, 7]);
        expect(ints([0, 1, -2, -3, -5, 6, 7, 11]).getOddNumbersLessThan(-3)).toEqual([-5]);
    });

    test('get less or equal odd numbers than', () => {
        expect(ints([0, 1, 2, -3, 4, 6, 7, 11]).getOddNumbersLessOrEqualThan(11)).toEqual([1, -3, 7, 11]);
        expect(ints([0, 1, -2, -3, -5, 6, 7, 11]).getOddNumbersLessOrEqualThan(-3)).toEqual([-3, -5]);
    });

    test('get greater odd numbers than', () => {
        expect(ints([0, 1, 2, -3, 4, 6, 7, 11]).getOddNumbersGreaterThan(3)).toEqual([7, 11]);
        expect(ints([0, 1, -2, -3, 4, 6, 7, 11]).getOddNumbersGreaterThan(-3)).toEqual([1, 7, 11]);
    });

    test('get greater or equal odd numbers than', () => {
        expect(ints([0, 1, -2, 3, 4, 6, 7, 11]).getOddNumbersGreaterOrEqualThan(3)).toEqual([3, 7, 11]);
        expect(ints([0, 1, -2, -3, -5, 6, 7, 11]).getOddNumbersGreaterOrEqualThan(-3)).toEqual([1, -3, 7, 11]);
    });

    test('check if is a odd number', () => {
        expect(ints().isOddNumber(3)).toEqual(true);
        expect(ints().isOddNumber(2)).toEqual(false);
        expect(ints().isOddNumber(-3)).toEqual(true);
        expect(ints().isOddNumber(-2)).toEqual(false);
    });

});
