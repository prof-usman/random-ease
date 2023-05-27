const { generateAvatar } = require('../dist/utils');

describe('generateAvatar', () => {
  test('should generate a different avatar each time', () => {
    const avatar1 = generateAvatar();
    const avatar2 = generateAvatar();

    expect(avatar1).not.toEqual(avatar2);
  });
});
