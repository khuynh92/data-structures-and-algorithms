'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(n) {
    let node = new Node(n);

    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.tail;
      this.tail = node;
    }
  }

  pop() {
    let popcorn = this.tail.value;

    if(this.tail.value === this.head.value) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.next;
    }

    return popcorn;
  }

  enqueue(n) {
    return this.push(n);
  }

  dequeue() {
    if(this.tail.value === this.head.value) {
      let tail = this.tail.value;
      this.tail = null;
      this.head = null;
      return tail;
    }

  }
}


module.exports = Stack;