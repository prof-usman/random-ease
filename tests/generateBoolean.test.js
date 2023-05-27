const { generateBoolean } = require('../dist/utils');

describe('generateBoolean', () => {
  test('should generate a boolean value', () => {
    const result = generateBoolean();

    expect(typeof result).toBe('boolean');
  });
});
