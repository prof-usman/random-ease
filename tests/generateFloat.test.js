const { generateFloat } = require('../dist/utils');

describe('generateFloat', () => {
  test('should generate a random float within the specified range', () => {
    const min = 1.5;
    const max = 10.8;
    const randomFloat = generateFloat(min, max);

    expect(randomFloat).toBeGreaterThanOrEqual(min);
    expect(randomFloat).toBeLessThanOrEqual(max);
  });

  test('should generate a float with decimal places', () => {
    const min = 0;
    const max = 1;
    const randomFloat = generateFloat(min, max);

    const decimalPlaces = randomFloat.toString().split('.')[1].length;
    expect(decimalPlaces).toBeGreaterThan(0);
  });
});
