const { shuffleArray } = require('../dist/utils');

describe('shuffleArray', () => {
  test('should shuffle the elements in the array', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray(array);

    expect(shuffledArray).not.toEqual(array);
  });

  test('should maintain the same elements in the shuffled array', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray(array);

    expect(shuffledArray.length).toEqual(array.length);
    array.forEach((element) => {
      expect(shuffledArray).toContain(element);
    });
  });

  test('should not modify the original array', () => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];
    shuffleArray(array);

    expect(array).toEqual(originalArray);
  });
});
