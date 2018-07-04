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
      if (value < current.value)
        if (!current.left) {
          current.left = node;
          break;
        } else {
          current = current.left;
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

  find(value) {

    return contains(this.root, value);

  }

  remove(value) {
    delete(this.root, value);
  }

}

function contains(node, n) {
  if (node.value === n) {
    return true;
  }
  if (n < node.value) {
    if (!node.left) {
      return false;
    } else {
      return contains(node.left, n);
    }
  } else {
    if (!node.right) {
      return false;
    } else {
      return contains(node.right, n);
    }
  }
}

function delete (node, n) {
  if(node !== null) {
    let current = node
    let stack = [];
  }
};

module.exports = BinarySearchTree;