'use strict';

const multiBracketValidation = require('../lib/multi-bracket-validation');

describe('multibracketvalidation', () => {

  it('should work for bracket only strings', () => {
    expect(multiBracketValidation('([{}])')).toBe(true);
  });

  it('should return false for incorrect brackets', () => {
    expect(multiBracketValidation('([{}]))')).toBe(false);
  });

  it('should return false for no brackets', () => {
    expect(multiBracketValidation('hello world')).toBe(true);
  });

  it('should return true for crazy brackets', () => {
    expect(multiBracketValidation('(w)o()()()((()))aaa[h][][][][][]{{{{}}}}{}{}{}{aaaaah}')).toBe(true);
  });

});