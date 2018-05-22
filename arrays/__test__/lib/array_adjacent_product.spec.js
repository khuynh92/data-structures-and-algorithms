const largestProduct = require('../../lib/array_adjacent_product');

describe('largestProduct module', () => {
  it('should find the largest product of a 2D array', () => {
    let newArray = [
      [5, 5, 5],
      [5, 9, 5],
      [6, 5, 5],
    ];

    expect(largestProduct(newArray)).toEqual(54);
  });

  it('should find the largest product of a 2D array when the array contains multiple of the same largest value', () => {
    let newArray = [
      [100, 100, 1, 1, 1, 1],
      [1, 10, 1, 1, 1, 1],
      [1, 1, 1, 1, 75, 80],
      [1, 1, 1, 1, 50, 100],
      [1, 1, 1, 1, 5, 5],
    ];

    expect(largestProduct(newArray)).toEqual(10000);
  });

  it('should find the largest product of a 2D array when the largest value is in the center', () => {
    let newArray = [
      [100, 100, 1, 1, 1, 1],
      [1, 10, 1, 1, 1, 1],
      [1, 1, 1, 1000, 75, 80],
      [1, 1, 1, 1, 50, 100],
      [1, 1, 1, 1, 5, 5],
    ];

    expect(largestProduct(newArray)).toEqual(75000);
  });
});