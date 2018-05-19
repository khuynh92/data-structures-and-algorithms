'use strict';

const shift = require('../../lib/array_shift');

describe('array_shift Module', () => {
  it('insertShiftArray() should remove the middle value the inputed array and replace it with the inputted value (odd length test)', () => {
    expect(shift.insertShiftArray([1, 2, 3, 4, 5], 100)).toEqual([1, 2, 3, 100, 4, 5]);
  }); 

  it('insertShiftArray() should remove the middle value the inputed array and replace it with the inputted value (even length test)', () => {
    expect(shift.insertShiftArray([1, 2, 3, 4], 100)).toEqual([1, 2, 100, 3, 4]);
  }); 

  it('insertShiftArray() should work for non numbers', () => {
    expect(shift.insertShiftArray(['foo', 'bar'], 'baz')).toEqual(['foo', 'baz', 'bar']);
  });

  it('removeMiddle() should remove the middle value and adjust the array accordingly (odd test)', () =>{
    expect(shift.removeMiddle([1, 2, 3, 4, 5])).toEqual([1, 2, 4, 5]);
  });

  it('removeMiddle() should remove the middle value rounded up and adjust the array accordingly (even test)', () =>{
    expect(shift.removeMiddle([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 5, 6]);
  });

  it('removeMiddle() should work for non numbers', () => {
    expect(shift.removeMiddle(['foo', 'bar', 'baz'], 'baz')).toEqual(['foo', 'baz']);
  });
});