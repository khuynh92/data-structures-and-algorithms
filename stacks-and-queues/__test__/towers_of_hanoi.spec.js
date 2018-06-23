'use stict';

const Stack = require('../lib/towers_of_hanoi.js');


describe('towers of hanoi', () => {
  it('should work for a stack of 1', () => {
    expect(Stack.towersOfHanoi(1).top.value).toBe(1);
  });

  it('should work for a stack of 3', () => {
    expect(Stack.towersOfHanoi(3).top.next.next.value).toBe(3);
  });

  it('should work for a stack of larger numbers', () => {
    expect(Stack.towersOfHanoi(7).top.next.next.next.next.next.next.value).toBe(7);
  });

  
});