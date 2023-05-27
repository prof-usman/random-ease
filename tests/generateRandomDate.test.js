const { generateRandomDate } = require('../dist/utils');

describe('generateRandomDate', () => {
  test('should generate a random date within the specified range', () => {
    const start = new Date('2022-01-01');
    const end = new Date('2022-12-31');
    const randomDate = generateRandomDate(start, end);

    expect(randomDate).toBeInstanceOf(Date);
    expect(randomDate.getTime()).toBeGreaterThanOrEqual(start.getTime());
    expect(randomDate.getTime()).toBeLessThanOrEqual(end.getTime());
  });

  test('should generate a random date equal to the start date', () => {
    const start = new Date('2022-01-01');
    const end = new Date('2022-01-01');
    const randomDate = generateRandomDate(start, end);

    expect(randomDate).toEqual(start);
  });

  test('should generate a random date equal to the end date', () => {
    const start = new Date('2022-12-31');
    const end = new Date('2022-12-31');
    const randomDate = generateRandomDate(start, end);

    expect(randomDate).toEqual(end);
  });

  test('should generate a random date with millisecond precision', () => {
    const start = new Date('2022-01-01');
    const end = new Date('2022-01-01');
    const randomDate = generateRandomDate(start, end);

    expect(randomDate.getMilliseconds()).toBeGreaterThanOrEqual(0);
    expect(randomDate.getMilliseconds()).toBeLessThanOrEqual(999);
  });
});
