'use strict';

const BinarySearchTree = require('../lib/breadth-first-traversal.js').BinarySearchTree;
const breadthFirstTraversal = require('../lib/breadth-first-traversal.js').breadthFirstTraversal;


describe('breadth-first-traversal', () => {
  
  it('represent order of console logs as an array', () => {
    let bst = new BinarySearchTree();
    bst.insert(5);
    bst.insert(4);
    bst.insert(6);
    bst.insert(7);
    bst.insert(1);
    expect(breadthFirstTraversal(bst).length).toBe(5);
    expect(breadthFirstTraversal(bst)[0]).toBe(5);
    expect(breadthFirstTraversal(bst)[3]).toBe(1);

  });

  it('represent an empty array to represent nothing being console logged for an empty tree', () => {

    let bst = new BinarySearchTree();

    expect(breadthFirstTraversal(bst).length).toBe(0);

  });

  it('should work for tree with one node', () => {

    let bst = new BinarySearchTree();
    bst.insert(4);

    expect(breadthFirstTraversal(bst).length).toBe(1);
    expect(breadthFirstTraversal(bst)[0]).toBe(4);

  });
  
});