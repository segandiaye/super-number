'use strict';

const ints = require('../../lib/index');

describe('Nearrest number', () => {

    test('find nearest intseger', () => {
        expect(ints([-5, -2, 0, 1, 5]).findNearestInteger(0)).toBe(1);
        expect(ints([-5, -2, 0, 1, 5]).findNearestInteger(1)).toBe(0);
        expect(ints([-5, -2, 0, 1, 5]).findNearestInteger(5)).toBe(1);
        expect(ints([0, 1, 2, 5, 6]).findNearestInteger(5)).toBe(6);
        expect(ints([-1, 0, 1]).findNearestInteger(0)).toBe(1);
        expect(ints([-5, -2, 0, 1, 5]).findNearestInteger(-2)).toBe(0);
        expect(ints([-5, -2, 0, 1, 5]).findNearestInteger(-5)).toBe(-2);
        expect(ints([-5, -4, -2, 0]).findNearestInteger(-2)).toBe(0);
    });

});
