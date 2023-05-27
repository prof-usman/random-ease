const { generateString } = require('../dist/utils');

describe('generateString', () => {
  test('should generate a string of the specified length', () => {
    const length = 10;
    const randomString = generateString(length);

    expect(randomString).toHaveLength(length);
  });

  test('should generate an empty string when length is 0', () => {
    const length = 0;
    const randomString = generateString(length);

    expect(randomString).toBe('');
  });

  test('should generate a string with alphanumeric characters', () => {
    const length = 12;
    const randomString = generateString(length);

    expect(randomString).toMatch(/^[a-zA-Z0-9]+$/);
  });
});
