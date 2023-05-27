const { generateNumber } = require('../dist/utils');

describe('generateNumber', () => {
  test('should generate a random number within the specified range', () => {
    const min = 1;
    const max = 10;
    const randomNumber = generateNumber(min, max);

    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });

  test('should generate a random number within a negative range', () => {
    const min = -10;
    const max = -1;
    const randomNumber = generateNumber(min, max);

    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });

  test('should generate the minimum number when min and max are the same', () => {
    const min = 5;
    const max = 5;
    const randomNumber = generateNumber(min, max);

    expect(randomNumber).toBe(min);
  });

  test('should generate a random number within a large range', () => {
    const min = 1;
    const max = 1000000;
    const randomNumber = generateNumber(min, max);

    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });
});
