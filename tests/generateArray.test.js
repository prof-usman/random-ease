const { generateArray } = require('../dist/utils');

describe('generateArray', () => {
  test('should generate an array of the specified length', () => {
    const length = 5;
    const min = 1;
    const max = 10;
    const array = generateArray(length, min, max);

    expect(array).toHaveLength(length);
  });

  test('should generate an empty array when length is 0', () => {
    const length = 0;
    const min = 1;
    const max = 10;
    const array = generateArray(length, min, max);

    expect(array).toEqual([]);
  });

  test('should generate an array with numbers within the specified range', () => {
    const length = 10;
    const min = 5;
    const max = 15;
    const array = generateArray(length, min, max);

    expect(array).toHaveLength(length);
    array.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(min);
      expect(number).toBeLessThanOrEqual(max);
    });
  });

  test('should generate an array with random numbers', () => {
    const length = 3;
    const min = 1;
    const max = 100;
    const array1 = generateArray(length, min, max);
    const array2 = generateArray(length, min, max);

    expect(array1).not.toEqual(array2);
  });
});
