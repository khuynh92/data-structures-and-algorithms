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
    this.root = deleting(this.root, value);
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

function deleting(node, n) {
  if (node !== null) {
    let current = node;
    let parent;
    while (current) {
      if (current.value === n) {

        //no children
        if (!current.left && !current.right) {
          if (parent && parent.left && parent.left.value === n) {
            parent.left === null;
          } else if(parent && parent.right && parent.right.value === n) {
            parent.right === null;
          } else {
            node = null;
          }
        }
        //has ONLY left children
        else if (current.left && !current.right) {
          if (parent && parent.left && parent.left.value === n) {
            parent.left = current.left;
          } else if(parent && parent.right && parent.right.value){
            parent.right = current.left;
          } else {
            node = current.left;
          }
        }
        //has ONLY right children
        else if (!current.left && current.right) {
          if (parent && parent.left && parent.left.value === n) {
            parent.left = current.right;
          } else if(parent && parent.right && parent.right.value) {
            parent.right = current.right;
          } else {
            node = current.right;
          }
        }

        //has both children
        else {
          let min = current.right;
          while (min.left) {
            if (min.left) {
              min = min.left;
            }
          }
          current = deleting(current, min.value);

          current.value = min.value;

        }

        break;
  
      } else if (n < current.value) {
        parent = current;
        current = current.left;
      } else if (n > current.value) {
        parent = current;
        current = current.right;
      }
    }
  }
  return node;
}

module.exports = BinarySearchTree;