'use strict';

const BinarySearchTree = require('../lib/find-maximum-value-binary-tree').BinarySearchTree;
const findMaximumValue = require('../lib/find-maximum-value-binary-tree').findMaximumValue;
const Node = require('../lib/find-maximum-value-binary-tree').Node;

describe('findMaximumValue', () => {

  it('should work for a single node in a tree', () => {
    let bst = new BinarySearchTree();
    bst.insert(100);

    expect(findMaximumValue(bst)).toBe(100);
  });

  it('should work for a binary search tree', () => {
    let bst = new BinarySearchTree();
    bst.insert(4);
    bst.insert(3);
    bst.insert(7);
    bst.insert(6);
    bst.insert(2);
    bst.insert(1);
    bst.insert(9);
    
    expect(findMaximumValue(bst)).toBe(9);
  });

  it('should work for a standard binary tree', () => {
    let bst = new BinarySearchTree();
    bst.insert(4);
    bst.root.right = new Node(3);
    bst.root.left = new Node(7);
    bst.root.left.left = new Node(200);

    expect(findMaximumValue(bst)).toBe(200);
  });
});