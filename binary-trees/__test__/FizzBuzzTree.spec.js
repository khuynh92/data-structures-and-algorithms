'use strict';

const BinarySearchTree = require('../lib/FizzBuzzTree.js');

describe('BST', () => {

  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  it('insert should insert a new node', () => {
    bst.insert(4);
    expect(bst.root.value).toBe(4);
  });

  it('insert should insert a new node to the left', () => {
    bst.insert(4);
    bst.insert(2);
    expect(bst.root.left.value).toBe(2);
  });

  it('insert should insert a new node to the right', () => {
    bst.insert(4);
    bst.insert(2);
    bst.insert(6);
    expect(bst.root.right.value).toBe(6);
  });

  it('FizzBuzzTree should change values divisible by 3 to buzz', () => {
    bst.insert(3);
    bst.insert(6);
    bst.insert(9);
    BinarySearchTree.fizzBuzzTree(bst);

    expect(bst.root.value).toBe('fizz');
  });

  it('FizzBuzzTree should change values divisible by 5 to fizz', () => {
    bst.insert(9);
    bst.insert(10);
    bst.insert(5);
    BinarySearchTree.fizzBuzzTree(bst);

    expect(bst.root.value).toBe('fizz');
    expect(bst.root.left.value).toBe('buzz');
    expect(bst.root.right.value).toBe('buzz');

  });

  it('FizzBuzzTree should change values divisible by 3 AND 5 to fizzbuzz', () => {
    bst.insert(15);
    bst.insert(9);
    bst.insert(30);
    BinarySearchTree.fizzBuzzTree(bst);

    expect(bst.root.value).toBe('fizzbuzz');
    expect(bst.root.left.value).toBe('fizz');
    expect(bst.root.right.value).toBe('fizzbuzz');

  });

  it('FizzBuzzTree should not change any values that are not divisble by 3 or 5', () => {
    bst.insert(8);
    bst.insert(10);
    bst.insert(7);
    BinarySearchTree.fizzBuzzTree(bst);

    expect(bst.root.value).toBe(8);
    expect(bst.root.left.value).toBe(7);
    expect(bst.root.right.value).toBe('buzz');

  });

});