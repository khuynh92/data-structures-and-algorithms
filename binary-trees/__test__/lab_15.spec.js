'use strict';

const BinarySearchTree = require('../lib/lab_15');

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
    bst.insert(8);
    expect(bst.root.right.value).toBe(6);
  });


  it('find should find one node', () => {
    bst.insert(4);
    expect(bst.find(4)).toBe(true);
  });

  it('find should find a  node to the right', () => {
    bst.insert(4);
    bst.insert(2);
    bst.insert(6);
    bst.insert(7);

    expect(bst.find(7)).toBe(true);
  });

  it('find should find a  node to the left', () => {
    bst.insert(4);
    bst.insert(2);
    bst.insert(6);
    bst.insert(1);

    expect(bst.find(1)).toBe(true);
  });

  it('find should return false if no node is found on left', () => {
    bst.insert(4);
    bst.insert(6);
    bst.insert(5);
    bst.insert(7);

    expect(bst.find(2)).toBe(false);
  });

  it('find should return false if no node is found on right', () => {
    bst.insert(4);
    bst.insert(1);
    bst.insert(2);
    bst.insert(3);

    expect(bst.find(5)).toBe(false);
  });

  it('find should return false if no node is found on right', () => {
    bst.insert(4);
    bst.insert(1);
    bst.insert(2);
    bst.insert(3);

    bst.remove(3);
    expect(bst.find(5)).toBe(false);
  });

});