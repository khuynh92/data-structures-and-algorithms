'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if(!this.root) {
      this.root = node;
      return this;
    }
    
    let current = this.root;

    while(current) {
      if (value < current.value) {
        if(!current.left) {
          current.left = node;
          break;
        } else {
          current = current.left;
        } 
      } else {
        if(!current.right) {
          current.right = node;
          break;
        } else {
          current = current.right;
        }
      }
    }

    return this;

  }
}

function findMaximumValue(tree) {

  if(!tree.root.right && !tree.root.left) {
    return tree.root.value;
  }

  return bigNode(tree.root, tree.root.value);

}

function bigNode(node, big) {
  let largest = node.value > big ? node.value : big;

  if(node.left) {
    largest = bigNode(node.left, largest);
  }
  if(node.right) {
    largest = bigNode(node.right, largest);
  }
  return largest;
}

module.exports = {
  Node,
  BinarySearchTree,
  findMaximumValue,
};