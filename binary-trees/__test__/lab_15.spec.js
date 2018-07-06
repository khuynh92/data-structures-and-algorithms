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

  it('return a null root for removing one', () => {
    bst.insert(4);

    bst.remove(4);

    expect(bst.root).toBe(null);
  });

  it('remove the root and change it to 5', () => {
    bst.insert(4);
    bst.insert(5);
    
    bst.remove(4);

    expect(bst.root.value).toBe(5);
  });

  it('remove the root and change it to 5', () => {
    bst.insert(4);
    bst.insert(3);
    
    bst.remove(4);

    expect(bst.root.value).toBe(3);
  });

  it('the removed node is to the right of the parent with no children', () => {
    bst.insert(4);
    bst.insert(5);
    
    bst.remove(5);

    expect(bst.root.value).toBe(4);
  });
  it('the removed node is to the right of the parent with only left children', () => {
    bst.insert(4);
    bst.insert(6);
    bst.insert(7);
    
    bst.remove(5);

    expect(bst.root.value).toBe(4);
  });
  it('the removed node is to the right of the parent with no children', () => {
    bst.insert(4);
    bst.insert(3);
    
    bst.remove(3);

    expect(bst.root.left.value).toBe(3);
  });

  it('remove the a node that only has a left child', () => {
    bst.insert(10);
    bst.insert(9);
    bst.insert(11);
    bst.insert(8);
    
    bst.remove(9);
    expect(bst.root.left.value).toBe(8);
  });

  it('remove the a node that only has a right child', () => {
    bst.insert(11);
    bst.insert(9);
    bst.insert(10);
    bst.insert(12);
    
    bst.remove(9);
    expect(bst.root.left.value).toBe(10);
  });

  it('remove the a node that has both children', () => {
    bst.insert(11);
    bst.insert(9);
    bst.insert(10);
    bst.insert(12);
    
    bst.remove(11);
    expect(bst.root.value).toBe(12);
  });

  it('preorder should work for one value', () => {
    bst.insert(28);
    
    let bsts = bst.serialize();

    expect(bsts[0]).toBe(28);
    expect(bsts[1]).toBe('x');
    expect(bsts[2]).toBe('x');

  });

  it('serialize should work for left only trees', () => {
    bst.insert(10);
    bst.insert(8);
    bst.insert(7);
    bst.insert(6);
    
    let bsts = bst.serialize();

    expect(bsts).toEqual([10, 8, 7, 6, 'x', 'x', 'x', 'x', 'x']);

  });

  it('serialize should work for right only trees', () => {
    bst.insert(6);
    bst.insert(7);
    bst.insert(8);
    bst.insert(9);
    
    let bsts = bst.serialize();

    expect(bsts).toEqual([6, 'x', 7, 'x', 8, 'x', 9, 'x', 'x']);

  });

  it('deserialize should work for a one node tree', () => {
    let bst = BinarySearchTree.deserialize([28, 'x', 'x']);

    expect(bst.root.value).toBe(28);
  });

  it('deserialize should work for left only trees', () => {
    let bst = BinarySearchTree.deserialize([10, 8, 7, 6, 'x', 'x', 'x', 'x', 'x']);

    expect(bst.root.value).toBe(10);
    expect(bst.root.left.value).toBe(8);
    expect(bst.root.left.left.value).toBe(7);
    expect(bst.root.right).toBe(null);

  });

  it('deserialize should work for right only trees', () => {
    let bst = BinarySearchTree.deserialize([6, 'x', 7, 'x', 8, 'x', 9, 'x', 'x']);

    expect(bst.root.value).toBe(6);
    expect(bst.root.right.value).toBe(7);
    expect(bst.root.right.right.value).toBe(8);
    expect(bst.root.left).toBe(null);

  });
});