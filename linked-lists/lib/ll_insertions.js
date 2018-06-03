'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linked_List {

  constructor() {
    this.head = null;
  }

  append(val) {

    if (!this.head) this.head = new Node(val);

    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(val);
    }
  }

  insertBefore(val, newVal) {
    if (val === this.head.value) {
      let oldHead = this.head;
      this.head = new Node(newVal);
      this.head.next = oldHead;
    } else {
      let current = this.head;

      while (current.next.value !== val) {
        current = current.next;
      }

      let oldNext = current.next;
      current.next = new Node(newVal);

      current.next.next = oldNext;
    }
  }

  insertAfter(val, newVal) {
    let current = this.head;
    while(current.value !== val) {
      current = current.next;
    }
    let oldNext = current.next; 
    current.next = new Node(newVal);
    current.next.next = oldNext;
  }
}

module.exports = Linked_List;
