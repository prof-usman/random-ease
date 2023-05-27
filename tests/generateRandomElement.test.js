const { generateRandomElement } = require('../dist/utils');

describe('generateRandomElement', () => {
  test('should return a random element from the array', () => {
    const array = [1, 2, 3, 4, 5];
    const randomElement = generateRandomElement(array);

    expect(array).toContain(randomElement);
  });

  test('should return undefined for an empty array', () => {
    const array = [];
    const randomElement = generateRandomElement(array);

    expect(randomElement).toBeUndefined();
  });
});
