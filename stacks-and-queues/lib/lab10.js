class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);

    if (!this.top) {
      this.top = node;
      return this;
    }

    let oldTop = this.top;
    this.top = node;
    this.top.next = oldTop;
    return this;
    // Big O <-- 0(1);

  }

  pop() {

    if(!this.top) {
      return 'list is empty';
    }

    let current = this.top;

    if (!current.next) {
      this.top = null;
      return current.value;
    }
    let oldTop = current.value;
    this.top = this.top.next;
    return oldTop;

    // Big O <-- 0(1);

  }
  serialize() {
    let cereal = '';
    let current = this.top;

    if(!this.top) return `[x]`;

    while(current.next) {
      cereal += `[${current.value}] -> `;
      current = current.next;
    }
    cereal += `[${current.value}] -> [x]`;
    return cereal;

    // Big O <-- 0(n);
  }

  static deserialize(string) {
    if (string === `[x]`) return new Stack;
    else {
      let stack = new Stack;
      let nodeArray = string.split(/\[/).map(node => node.split(/\]/)[0]);
      console.log(nodeArray);
      for(let i = nodeArray.length - 2; i >= 1; i--) {
        nodeArray[i] =  isNaN(parseInt(nodeArray[i])) ? nodeArray[i] : parseInt(nodeArray[i]);
        stack.push(nodeArray[i]);
      }
      return stack;
    }

    // Big O <-- 0(n);
  }

}

class Queue {
  constructor() {
    this.head = null;
  }

  enqueue(n) {

    let node = new Node(n);

    if(!this.head) {
      this.head = node;
      return this;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = node;
    // Big O <-- 0(n);
  }

  dequeue() {

    if (!this.head) {
      return 'list is already empty';
    }

    let dq = this.head.value;

    if(!this.head.next) {
      this.head = null;
      return dq;
    }

    this.head = this.head.next;
    return dq;

    // Big O <-- 0(1);

  }

  serialize() {
    let cereal = '';
    let current = this.head;

    if(!this.head) return `[x]`;

    while(current.next) {
      cereal += `[${current.value}] -> `;
      current = current.next;
    }
    cereal += `[${current.value}] -> [x]`;
    return cereal;

    // Big O <-- 0(n);
  }

  static deserialize(string) {
    if (string === `[x]`) return new Queue;
    else {
      let queue = new Queue;
      let nodeArray = string.split(/\[/).map(node => node.split(/\]/)[0]);

      for(let i = 1; i < nodeArray.length - 1; i++) {
        nodeArray[i] =  isNaN(parseInt(nodeArray[i])) ? nodeArray[i] : parseInt(nodeArray[i]);
        queue.enqueue(nodeArray[i]);
      }
      return queue;
    }

    // Big O <-- 0(n);
  }

}
module.exports = {
  Stack: Stack,
  Queue: Queue,
};