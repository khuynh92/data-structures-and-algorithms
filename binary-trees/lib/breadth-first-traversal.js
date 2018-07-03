'use strict';

class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class QueueNode {
  constructor(node) {
    this.value = node;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
  }

  enqueue(value) {

    let node = new QueueNode(value);
    if(!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;

    while(current.next) {
      current = current.next;
    }

    current.next = node;

  }

  dequeue() {
    if(!this.head) {
      return 'Queue is already empty';
    }

    if(!this.head.next) {
      let removed = this.head.value;
      this.head = null;
      return removed;
    }

    let removed = this.head.value;
    this.head = this.head.next;
    return removed;

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
      if(value < current.value) {
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

function breadthFirstTraversal(tree) {

  let arr = [];
  let queue = new Queue();
  
  if(!tree.root) {
    return arr;
  }
  queue.enqueue(tree.root);
  console.log(queue);
  while(queue.head) {
    let node = queue.dequeue();
    if(node.left) {
      queue.enqueue(node.left);
    }
    if(node.right) {
      queue.enqueue(node.right);
    }
    arr.push(node.value);
    console.log(node.value);
  }

  return arr;

}

module.exports = {BinarySearchTree, breadthFirstTraversal};