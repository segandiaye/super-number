'use strict';

let global_var;
/**
 * @param {Integer} n
 * @returns {Integer}
 *
 * n is the integer you want to find his nearest
 */
function findNearestInteger(n) {
    let integers = global_var;
    checkArrayIntegers(integers);
    // positives_values is an array than contain only greater than or equal zero integers
    const positives_values = [];
    // positives_values is an array than contain only greater than or equal zero integers
    const negatives_values = [];
    let nearest_integer;
    let is_only_posives_values = false;

    integers.forEach((val) => {
        if (val >= 0 && val != n) {
            positives_values.push(val);
        }
        if (val <= 0 && val != n) {
            negatives_values.push(val);
        }
    });

    const mininum_positives_values = Math.min(...positives_values);
    const maximum_negative_values = Math.max(...negatives_values);

    if (n == 0 && positives_values.length && negatives_values.length) {
        if (mininum_positives_values + maximum_negative_values > 0) {
            nearest_integer = maximum_negative_values;
        } else {
            nearest_integer = mininum_positives_values;
        }
    } else {
        if (n == 0 && !negatives_values.length) {
            is_only_posives_values = true;
            integers = positives_values;
        } else if (n == 0 && !positives_values.length) {
            integers = negatives_values;
        } else if (n > 0 && positives_values.length) {
            is_only_posives_values = true;
            integers = positives_values;
        } else if (n > 0 && !positives_values.length) {
            integers = negatives_values;
        } else if (n < 0 && negatives_values.length) {
            integers = negatives_values;
        } else if (n < 0 && !negatives_values.length) {
            is_only_posives_values = true;
            integers = positives_values;
        }

        nearest_integer = getNearestValue(integers, n, is_only_posives_values);
    }

    return nearest_integer;
}

/**
 * @param {Array} integers
 * @param {Boollean} bool
 * @returns {Integer}
 */
function getNearestValue(integers, n, bool) {
    let min = Number.MAX_SAFE_INTEGER;
    const distances = integers.map((val) => {
        const distance = {};
        const df = val - n;
        const elmt = !bool && val != 0 ? -val : val;
        const d_value = df >= 0 ? df : -df;

        distance['key'] = elmt;
        distance['d'] = d_value;

        return distance;
    });

    distances.forEach((value) => {
        if (min > value.d) {
            min = value.d;
        }
    });

    const d_mins = distances.filter((value) => {
        return min == value.d;
    });

    let nearest;
    if (d_mins.length > 1) {
        const key_mins = d_mins.map((value) => {
            return value.key;
        });
        nearest = Math.min(...key_mins);
    } else {
        nearest = d_mins[0].key;
    }

    if (!bool && nearest) {
        nearest = -nearest;
    }

    return nearest;
}

/**
 * @returns {Array}
 */
function getLessEvenNumbers() {
    const integer = global_var;
    const even_integers = [];
    let counter = 1;
    checkIfPositiveNumber(integer);
    while (counter < integer) {
        if (isEvenNumber(counter)) {
            even_integers.push(counter);
        }
        counter += 1;
    }

    return even_integers;
}

/**
 * @returns {Array}
 */
function getLessOrEqualEvenNumbers() {
    const integer = global_var;
    const even_integers = [];
    let counter = 1;
    checkIfPositiveNumber(integer);
    while (counter <= integer) {
        if (isEvenNumber(counter)) {
            even_integers.push(counter);
        }
        counter += 1;
    }

    return even_integers;
}

/**
 * @returns {Array}
 */
function getEvenNumbers() {
    const integers = global_var;
    checkArrayIntegers(integers);
    const even_integers = integers.filter((val) => {
        return isEvenNumber(val);
    });

    return even_integers;
}

/**
 * @param {Integer} integer
 * @returns {Array}
 */
function getEvenNumbersLessThan(integer) {
    const integers = global_var;
    checkArrayIntegers(integers);
    checkIfIsInteger(integer);
    const even_integers = integers.filter((val) => {
        return isEvenNumber(val) && val < integer;
    });

    return even_integers;
}

/**
 * @param {Integer} integer
 * @returns {Array}
 */
function getEvenNumbersLessOrEqualThan(integer) {
    const integers = global_var;
    checkArrayIntegers(integers);
    checkIfIsInteger(integer);
    const even_integers = integers.filter((val) => {
        return isEvenNumber(val) && val <= integer;
    });

    return even_integers;
}

/**
 * @param {Integer} integer
 * @returns {Array}
 */
function getEvenNumbersGreaterThan(integer) {
    const integers = global_var;
    checkArrayIntegers(integers);
    checkIfIsInteger(integer);
    const even_integers = integers.filter((val) => {
        return isEvenNumber(val) && val > integer;
    });

    return even_integers;
}

/**
 * @param {Integer} integer
 * @returns {Array}
 */
function getEvenNumbersGreaterOrEqualThan(integer) {
    const integers = global_var;
    checkArrayIntegers(integers);
    checkIfIsInteger(integer);
    const even_integers = integers.filter((val) => {
        return isEvenNumber(val) && val >= integer;
    });

    return even_integers;
}

/**
 * @param {Integer} integer(Optional)
 * @returns {Boollean}
 */
function isEvenNumber(integer = global_var) {
    checkIfIsInteger(integer);
    if (integer % 2 != 0) {
        return false;
    }
    return true;
}

/**
 * @returns {Array}
 */
function getLessOddNumbers() {
    const integer = global_var;
    const odd_integers = [];
    let counter = 1;
    checkIfIsInteger(integer);
    checkIfPositiveNumber(integer);
    while (counter < integer) {
        if (isOddNumber(counter)) {
            odd_integers.push(counter);
        }
        counter += 1;
    }

    return odd_integers;
}

/**
 * @returns {Array}
 */
function getLessOrEqualOddNumbers() {
    const integer = global_var;
    const odd_integers = [];
    let counter = 1;
    checkIfIsInteger(integer);
    checkIfPositiveNumber(integer);
    while (counter <= integer) {
        if (isOddNumber(counter)) {
            odd_integers.push(counter);
        }
        counter += 1;
    }

    return odd_integers;
}

/**
 * @returns {Array}
 */
function getOddNumbers() {
    const integers = global_var;
    checkArrayIntegers(integers);
    const odd_integers = integers.filter((val) => {
        return isOddNumber(val);
    });

    return odd_integers;
}

/**
 * @param {Integer} integer
 * @returns {Array}
 */
function getOddNumbersLessThan(integer) {
    const integers = global_var;
    checkArrayIntegers(integers);
    checkIfIsInteger(integer);
    const l_odd_integers = integers.filter((val) => {
        return isOddNumber(val) && val < integer;
    });

    return l_odd_integers;
}

/**
 * @param {Integer} integer
 * @returns {Array}
 */
function getOddNumbersLessOrEqualThan(integer) {
    const integers = global_var;
    checkArrayIntegers(integers);
    checkIfIsInteger(integer);
    const le_odd_integers = integers.filter((val) => {
        return isOddNumber(val) && val <= integer;
    });

    return le_odd_integers;
}

/**
 * @param {Integer} integer
 * @returns {Array}
 */
function getOddNumbersGreaterThan(integer) {
    const integers = global_var;
    checkArrayIntegers(integers);
    checkIfIsInteger(integer);
    const g_odd_integers = integers.filter((val) => {
        return isOddNumber(val) && val > integer;
    });

    return g_odd_integers;
}

/**
 * @param {Integer} integer
 * @returns {Array}
 */
function getOddNumbersGreaterOrEqualThan(integer) {
    const integers = global_var;
    checkIfIsInteger(integer);
    const ge_odd_integers = integers.filter((val) => {
        return isOddNumber(val) && val >= integer;
    });

    return ge_odd_integers;
}

/**
 * @param {Integer} integer(Optional)
 * @returns {Boollean}
 */
function isOddNumber(integer = global_var) {
    checkIfIsInteger(integer);
    if (isEvenNumber(integer)) {
        return false;
    }
    return true;
}

/**
 * @param {Integer} integers(Optional)
 * @returns {Array}
 */
function getPositivesNumbers(integers = global_var) {
    checkArrayIntegers(integers);
    const positives = integers.filter((val) => {
        return val > 0;
    });

    return positives;
}

/**
 * @param {Integer} integers(Optional)
 * @returns {Array}
 */
function getNegativesNumbers(integers = global_var) {
    checkArrayIntegers(integers);
    const negatives = integers.filter((val) => {
        return val < 0;
    });

    return negatives;
}

/**
 * @param {Integer} integer
 * @returns {Array}
 */
function getDivisiblesOf(integer) {
    checkIfIsInteger(integer);
    const integers = global_var;
    const divisibles = integers.filter((val) => {
        return integer % val == 0;
    });

    return divisibles;
}

/**
 * @param {Integer} integer
 * @returns {Array}
 */
function getMultiplesOf(integer) {
    checkIfIsInteger(integer);
    const integers = global_var;
    const multiples = integers.filter((val) => {
        return val % integer == 0;
    });

    return multiples;
}

/**
 * @param {Integer} integer
 * @returns {Array}
 */
function getGreatersThan(integer) {
    checkIfIsInteger(integer);
    const integers = global_var;
    const greaters = integers.filter((val) => {
        return val > integer;
    });

    return greaters;
}

/**
 * @param {Integer} integer
 * @returns {Array}
 */
function getLessersThan(integer) {
    checkIfIsInteger(integer);
    const integers = global_var;
    const lessers = integers.filter((val) => {
        return val < integer;
    });

    return lessers;
}

/**
 * @returns {Array}
 */
function getLessPrimeNumbers() {
    const number = global_var;
    checkIfPositiveNumber(number);
    const prime_numbers = [];
    for (let i = 2; i < number; i++) {
        if (isPrimeNumber(i)) {
            prime_numbers.push(i);
        }
    }

    return prime_numbers;
}

/**
 * @returns {Array}
 */
function getLessOrEqualPrimeNumbers() {
    const number = global_var;
    checkIfPositiveNumber(number);
    const prime_numbers = [];
    for (let i = 2; i <= number; i++) {
        if (isPrimeNumber(i)) {
            prime_numbers.push(i);
        }
    }

    return prime_numbers;
}

/**
 * @returns {Array}
 */
function getPrimeNumbers() {
    const numbers = global_var;
    const prime_numbers = numbers.filter((val) => {
        return val > 0 && isPrimeNumber(val) && val != 1;
    });

    return prime_numbers;
}

/**
 * @param {Number} number
 * @returns {Array}
 */
function getPrimeNumbersLessThan(number) {
    const numbers = global_var;
    checkIfPositiveNumber(number);
    const l_prime_numbers = numbers.filter((val) => {
        return isPrimeNumber(val) && val != 1 && val < number;
    });

    return l_prime_numbers;
}

/**
 * @param {Number} number
 * @returns {Array}
 */
function getPrimeNumbersLessOrEqualThan(number) {
    const numbers = global_var;
    checkIfPositiveNumber(number);
    const le_prime_numbers = numbers.filter((val) => {
        return isPrimeNumber(val) && val != 1 && val <= number;
    });

    return le_prime_numbers;
}

/**
 * @param {Number} number
 * @returns {Array}
 */
function getPrimeNumbersGreaterThan(number) {
    const numbers = global_var;
    checkIfPositiveNumber(number);
    const g_prime_numbers = numbers.filter((val) => {
        return isPrimeNumber(val) && val != 1 && val > number;
    });

    return g_prime_numbers;
}

/**
 * @param {Number} number
 * @returns {Array}
 */
function getPrimeNumbersGreaterOrEqualThan(number) {
    const numbers = global_var;
    checkIfPositiveNumber(number);
    const ge_prime_numbers = numbers.filter((val) => {
        return isPrimeNumber(val) && val != 1 && val >= number;
    });

    return ge_prime_numbers;
}

/**
 * @param {Number} number(Optional)
 * @returns {Boollean}
 */
function isPrimeNumber(number = global_var) {
    checkIfPositiveNumber(number);
    let counter = 1;
    for (let i = 2; i <= number; i++) {
        if (number % i == 0 && number != i) {
            counter = 0;
            break;
        }
    }

    if (!counter) {
        return false;
    }

    return true;
}

function checkArrayIntegers(integers) {
    if (!integers || integers && !integers.length) {
        throw new Error('Missing or empty array.');
    }

    global_var.forEach((val) => {
        checkIfIsInteger(val);
    });
}

function checkIfIsInteger(integer) {
    if (!Number.isInteger(integer)) {
        throw new Error(`${integer} is not an integer.`);
    }
}

function checkIfPositiveNumber(number) {
    if (Array.isArray(number)) {
        throw new Error(`${number} is not a number type.`);
    } else if (Math.sign(number) != 1) {
        throw new Error(`${number} is not a positive number.`);
    }
}

module.exports = function(param) {
    global_var = param;

    return {
        findNearestInteger,
        getLessEvenNumbers,
        getLessOrEqualEvenNumbers,
        getEvenNumbers,
        getEvenNumbersLessThan,
        getEvenNumbersLessOrEqualThan,
        getEvenNumbersGreaterThan,
        getEvenNumbersGreaterOrEqualThan,
        isEvenNumber,
        getLessOddNumbers,
        getLessOrEqualOddNumbers,
        getOddNumbers,
        getOddNumbersLessThan,
        getOddNumbersLessOrEqualThan,
        getOddNumbersGreaterThan,
        getOddNumbersGreaterOrEqualThan,
        isOddNumber,
        getPositivesNumbers,
        getNegativesNumbers,
        getDivisiblesOf,
        getMultiplesOf,
        getGreatersThan,
        getLessersThan,
        getLessPrimeNumbers,
        getLessOrEqualPrimeNumbers,
        getPrimeNumbers,
        getPrimeNumbersLessThan,
        getPrimeNumbersLessOrEqualThan,
        getPrimeNumbersGreaterThan,
        getPrimeNumbersGreaterOrEqualThan,
        isPrimeNumber,
    };
};
