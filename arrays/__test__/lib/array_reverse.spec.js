'use strict';

const reverseArray = require('../../lib/array_reverse');

describe('array_reverse Module', () => {
  it('should reverse the inputed array', () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  }); 

});