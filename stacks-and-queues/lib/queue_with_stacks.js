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
    let newStack = new Stack();
    
    if(this.tail === null) {
      return 'Cannot dequeue non existent nodes';
    }

    if(this.tail.value === this.head.value) {
      let tail = this.tail.value;
      this.tail = null;
      this.head = null;
      return tail;
    }
  
    while(this.tail) {
      let popcorn = this.pop();
      newStack.push(popcorn);
    }

    let first = newStack.pop();
    
    while(newStack.tail) {
      let popcorn = newStack.pop();
      this.push(popcorn);
    }

    return first;
  }
}


module.exports = Stack;