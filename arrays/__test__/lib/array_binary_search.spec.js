const binarySearch = require('../../lib/array_binary_search');

describe('array_binary_search Module', () => {

  it('should return -1 if they key does not match the array', () => {
    expect(binarySearch([1,2,3,4,5], 6)).toEqual(-1);
  });

  it('should return the index of the array (first half of array && odd length test)', () => {
    expect(binarySearch([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 12)).toEqual(2);
  });
  
  it('should return the index of the array (last half of array && even test)', () => {
    expect(binarySearch([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 12)).toEqual(2);
  });

  it('should return the index of the array when the key matches the middle of the array', () => {
    expect(binarySearch([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 16)).toEqual(6);
  });

  //stretch goal
  
  it('should be effecient for an array size of 100', () => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(i);
    }
    expect(binarySearch(arr, 1)).toEqual(1);
  });

  it('should be effecient for an array size of 10000', () => {
    let arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(i);
    }
    expect(binarySearch(arr, 1)).toEqual(1);
  });

  it('should be effecient for an array size of 100000', () => {
    let arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(i);
    }
    expect(binarySearch(arr, 20000000)).toEqual(-1);
  });
});