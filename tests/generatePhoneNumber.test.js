const { generatePhoneNumber } = require('../dist/utils');

describe('generatePhoneNumber', () => {
  test('should generate a valid phone number in the correct format', () => {
    const phoneNumber = generatePhoneNumber();

    // Example: +99-123-4567890
    const phoneNumberPattern = /^\+\d{2}-\d{3}-\d{7}$/;
    expect(phoneNumber).toMatch(phoneNumberPattern);
  });

  test('should generate a different phone number each time', () => {
    const phoneNumber1 = generatePhoneNumber();
    const phoneNumber2 = generatePhoneNumber();

    expect(phoneNumber1).not.toEqual(phoneNumber2);
  });
});
