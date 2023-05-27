const { generateRandomHexColor } = require('../dist/utils');

describe('generateRandomHexColor', () => {
  test('should generate a random hex color in the correct format', () => {
    const color = generateRandomHexColor();
    const colorRegex = /^#[0-9a-fA-F]{6}$/;

    expect(color).toMatch(colorRegex);
  });

  test('should generate a random hex color with values within the range of 000000 to FFFFFF', () => {
    const color = generateRandomHexColor();
    const colorRegex = /^#([0-9a-fA-F]{6})$/;
    const [, hex] = color.match(colorRegex);

    expect(parseInt(hex, 16)).toBeGreaterThanOrEqual(0x000000);
    expect(parseInt(hex, 16)).toBeLessThanOrEqual(0xFFFFFF);
  });
});
