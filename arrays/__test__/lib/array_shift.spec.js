'use strict';

const insertShiftArray = require('../../lib/array_shift');

describe('array_shift Module', () => {
  it('should reverse the inputed array (odd length test)', () => {
    expect(insertShiftArray([1, 2, 3, 4, 5], 100)).toEqual([1, 2, 3, 100, 4, 5]);
  }); 

  it('should reverse the inputed array (even length test)', () => {
    expect(insertShiftArray([1, 2, 3, 4], 100)).toEqual([1, 2, 100, 3, 4]);
  }); 

  it('should work for non numbers', () => {
    expect(insertShiftArray(['foo', 'bar'], 'baz')).toEqual(['foo', 'baz', 'bar']);
  })

});