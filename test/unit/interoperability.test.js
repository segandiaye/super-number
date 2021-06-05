'use strict';

const int = require('../../lib/index')([]);

describe('Interoperability', () => {

    test('has interoperability', () => {
        expect(int).toHaveProperty('findNearestInteger');

        // Even numbers
        expect(int).toHaveProperty('getLessEvenNumbers');
        expect(int).toHaveProperty('getLessOrEqualEvenNumbers');
        expect(int).toHaveProperty('getEvenNumbers');
        expect(int).toHaveProperty('getEvenNumbersLessThan');
        expect(int).toHaveProperty('getEvenNumbersLessOrEqualThan');
        expect(int).toHaveProperty('getEvenNumbersGreaterThan');
        expect(int).toHaveProperty('getEvenNumbersGreaterOrEqualThan');
        expect(int).toHaveProperty('isEvenNumber');

        // Odd numbers
        expect(int).toHaveProperty('getLessOddNumbers');
        expect(int).toHaveProperty('getLessOrEqualOddNumbers');
        expect(int).toHaveProperty('getOddNumbers');
        expect(int).toHaveProperty('getOddNumbersLessThan');
        expect(int).toHaveProperty('getOddNumbersLessOrEqualThan');
        expect(int).toHaveProperty('getOddNumbersGreaterThan');
        expect(int).toHaveProperty('getOddNumbersGreaterOrEqualThan');
        expect(int).toHaveProperty('isOddNumber');

        // Useful operations
        expect(int).toHaveProperty('getPositivesNumbers');
        expect(int).toHaveProperty('getNegativesNumbers');
        expect(int).toHaveProperty('getDivisiblesOf');
        expect(int).toHaveProperty('getMultiplesOf');
        expect(int).toHaveProperty('getGreatersThan');
        expect(int).toHaveProperty('getLessersThan');

        // Prime numbers
        expect(int).toHaveProperty('getLessPrimeNumbers');
        expect(int).toHaveProperty('getLessOrEqualPrimeNumbers');
        expect(int).toHaveProperty('getPrimeNumbers');
        expect(int).toHaveProperty('getPrimeNumbersLessThan');
        expect(int).toHaveProperty('getPrimeNumbersLessOrEqualThan');
        expect(int).toHaveProperty('getPrimeNumbersGreaterThan');
        expect(int).toHaveProperty('getPrimeNumbersGreaterOrEqualThan');
        expect(int).toHaveProperty('isPrimeNumber');
    });

});
