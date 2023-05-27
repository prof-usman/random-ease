const { generateAddress } = require('../dist/utils');

describe('generateAddress', () => {
  test('should generate a valid address in the correct format', () => {
    const address = generateAddress();

    // Example: 123 Main St, New York
    const addressPattern = /^\d+ [A-Za-z\s]+, [A-Za-z\s]+$/;
    expect(address).toMatch(addressPattern);
  });

  test('should generate a different address each time', () => {
    const address1 = generateAddress();
    const address2 = generateAddress();

    expect(address1).not.toEqual(address2);
  });
});
