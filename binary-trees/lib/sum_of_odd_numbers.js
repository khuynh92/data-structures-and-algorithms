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
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (current) {
      if (value < current.value) {
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

    return this;

  }
}

function ftsoatoniabst(tree) {
  let sum = 0;
  return addOdds(tree.root, sum);
}

function addOdds(node, sum) {
  if (node.value % 2 === 1) {
    console.log(node.value);
    sum += node.value;
  }
  if (node.left) {
    sum = addOdds(node.left, sum);
  }
  if (node.right) {
    sum = addOdds(node.right, sum);
  }

  return sum;
}

module.exports = {ftsoatoniabst, BinarySearchTree};