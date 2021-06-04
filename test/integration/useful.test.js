'use strict';

const ints = require('../../lib/index');

describe('Useful', () => {

    test('get positive numbers', () => {
        expect(ints([-5, -2, 0, 1, 5]).getPositivesNumbers()).toEqual([1, 5]);
    });

    test('get negatives numbers', () => {
        expect(ints([-5, -2, 0, 1, 5]).getNegativesNumbers()).toEqual([-5, -2]);
    });

    test('get divisibles of', () => {
        expect(ints([3, -2, 4, 5, 10, 7, 8, 9, 12, 20]).getDivisiblesOf(10)).toEqual([-2, 5, 10]);
    });

    test('get multiples of', () => {
        expect(ints([3, 2, 4, 5, -10, 7, 8, 9, 12, 20]).getMultiplesOf(10)).toEqual([-10, 20]);
    });

    test('get greaters than', () => {
        expect(ints([3, 2, 4, 5, 10, 7, 8, 9, 12, -20]).getGreatersThan(10)).toEqual([12]);
        expect(ints([3, 2, 4, 5, 10, 7, 8, 9, 12, -20]).getGreatersThan(-10)).toEqual([3, 2, 4, 5, 10, 7, 8, 9, 12]);
    });

    test('get lessers than', () => {
        expect(ints([3, 2, 4, 5, 10, 7, 8, 9, 12, -20]).getLessersThan(10)).toEqual([3, 2, 4, 5, 7, 8, 9, -20]);
        expect(ints([3, 2, 4, 5, 10, 7, 8, 9, 12, -20]).getLessersThan(-10)).toEqual([-20]);
    });

});
