'use strict';

const BinarySearchTree = require('../lib/sum_of_odd_numbers.js').BinarySearchTree;
const sumOfOddNumbers = require('../lib/sum_of_odd_numbers.js').ftsoatoniabst;


describe('sum of odd numebrs', () => {

  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it('should work for a single node in a BST', () => {
    bst.insert(5);
    expect(sumOfOddNumbers(bst)).toBe(5);

  });

  it('should work on a right/left only tree', () => {
    bst.insert(10);
    bst.insert(11);
    bst.insert(17);
    bst.insert(12);

    expect(sumOfOddNumbers(bst)).toBe(28);

  });

  it('should work on a big tree', () => {
    bst.insert(10);
    bst.insert(11);
    bst.insert(17);
    bst.insert(12);
    bst.insert(7);
    bst.insert(3);
    bst.insert(8);

    expect(sumOfOddNumbers(bst)).toBe(38);

  });
});