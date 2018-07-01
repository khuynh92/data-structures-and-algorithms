'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  } 

  insert(value) {
    let node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;

    while(current) {
      if(value < current.value) {
        if (!current.left) {
          current.left = node;
          break;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = node;
          break;
        } else {
          current = current.right;
        }
      }
    }
  }

  static fizzBuzzTree(tree) {
    inOrder(tree.root);

    function inOrder(node) {
      if (node) {
        if(node.left !== null) {
          inOrder(node.left);
        }

        threeFiveCheck(node);

        if(node.right !== null) {
          inOrder(node.right);
        }
      }      
    }

    function threeFiveCheck(node) {
      if (node.value % 3 === 0 && node.value % 5 === 0) node.value = 'fizzbuzz';
      else if(node.value % 3 === 0) node.value = 'fizz';
      else if (node.value % 5 === 0) node.value = 'buzz';
      console.log(node.value);

    }
    return tree;

  }
}

module.exports = BinarySearchTree;