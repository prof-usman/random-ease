const { generateRandomRgbColor } = require('../dist/utils');

describe('generateRandomRgbColor', () => {
  test('should generate a random RGB color in the correct format', () => {
    const color = generateRandomRgbColor();
    const colorRegex = /^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/;

    expect(color).toMatch(colorRegex);
  });

  test('should generate a random RGB color with values within the range of 0 to 255', () => {
    const color = generateRandomRgbColor();
    const colorRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
    const [, r, g, b] = color.match(colorRegex);

    expect(parseInt(r, 10)).toBeGreaterThanOrEqual(0);
    expect(parseInt(r, 10)).toBeLessThanOrEqual(255);
    expect(parseInt(g, 10)).toBeGreaterThanOrEqual(0);
    expect(parseInt(g, 10)).toBeLessThanOrEqual(255);
    expect(parseInt(b, 10)).toBeGreaterThanOrEqual(0);
    expect(parseInt(b, 10)).toBeLessThanOrEqual(255);
  });
});
