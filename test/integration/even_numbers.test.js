'use strict';

const ints = require('../../lib/index');

describe('Even numbers', () => {

    test('get less even numbers', () => {
        expect(ints(10).getLessEvenNumbers()).toEqual([2, 4, 6, 8]);
    });

    test('get less or equal even numbers', () => {
        expect(ints(10).getLessOrEqualEvenNumbers()).toEqual([2, 4, 6, 8, 10]);
    });

    test('get even numbers', () => {
        expect(ints([1, -2, 3, 4, -6, 7, 11]).getEvenNumbers()).toEqual([-2, 4, -6]);
    });

    test('get even numbers less than', () => {
        expect(ints([0, 3, -4, 7, 9, 10, 13, 20]).getEvenNumbersLessThan(20)).toEqual([0, -4, 10]);
        expect(ints([0, 3, -4, 7, 9, -10, 13, 20]).getEvenNumbersLessThan(-4)).toEqual([-10]);
    });

    test('get even numbers less or equal than', () => {
        expect(ints([0, 3, 4, 7, 9, -10, 13, 20]).getEvenNumbersLessOrEqualThan(20)).toEqual([0, 4, -10, 20]);
        expect(ints([0, -3, 4, -7, 9, -10, 13, -20]).getEvenNumbersLessOrEqualThan(-7)).toEqual([-10, -20]);
    });

    test('get even numbers greater than', () => {
        expect(ints([0, -2, -4, 7, 9, 10, 13, 20]).getEvenNumbersGreaterThan(4)).toEqual([10, 20]);
        expect(ints([0, -2, -4, 7, 9, 10, 13, 20]).getEvenNumbersGreaterThan(-4)).toEqual([0, -2, 10, 20]);

    });

    test('get even numbers greater or equal than', () => {
        expect(ints([0, -2, -4, 4, 7, 9, 10, 13, 20]).getEvenNumbersGreaterOrEqualThan(4)).toEqual([4, 10, 20]);
        expect(ints([0, -2, -4, 7, 9, 10, 13, 20]).getEvenNumbersGreaterOrEqualThan(-4)).toEqual([0, -2, -4, 10, 20]);
    });

    test('check if is a even number', () => {
        expect(ints().isEvenNumber(2)).toEqual(true);
        expect(ints().isEvenNumber(3)).toEqual(false);
        expect(ints().isEvenNumber(-2)).toEqual(true);
        expect(ints().isEvenNumber(-3)).toEqual(false);
    });

});
