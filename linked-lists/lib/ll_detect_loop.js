'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.visted = false;
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


  hasLoop() {

    if (!this.head.next) return false;

    let current = this.head;
    let nextNext = current.next;

    while(nextNext !== current) {

      current = current.next;

      if(!current.next) return false;

      nextNext = nextNext.next.next;

    }
    return true;
  }

  

}

module.exports = Linked_List;