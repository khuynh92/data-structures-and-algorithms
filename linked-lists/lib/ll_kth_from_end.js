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

  kThFromEnd(length) {

    let outerCurrent = this.head;

    while(outerCurrent.next) {

      let counter = 0;
      let innerCurrent = outerCurrent;
    
      while(innerCurrent.next) {

        counter++;
        innerCurrent = innerCurrent.next;

      }

      if (length === counter) { return outerCurrent; } 
      else if (length > counter) { return 'exception'; } 
      else { outerCurrent = outerCurrent.next; }

    }

    return outerCurrent;

  }
}

module.exports = Linked_List;
