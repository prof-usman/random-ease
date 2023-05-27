const { generateEmailAddress } = require('../dist/utils');

describe('generateEmailAddress', () => {
  test('should generate a valid email address in the correct format', () => {
    const emailAddress = generateEmailAddress();

    // Example: abcdefg@example.com
    const emailAddressPattern = /^[A-Za-z0-9]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    expect(emailAddress).toMatch(emailAddressPattern);
  });

  test('should generate a different email address each time', () => {
    const emailAddress1 = generateEmailAddress();
    const emailAddress2 = generateEmailAddress();

    expect(emailAddress1).not.toEqual(emailAddress2);
  });
});
