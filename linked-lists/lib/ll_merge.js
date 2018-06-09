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

  static merge(list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;
  
    while (current1 || current2) {

      if (!current2) {
        return list1;
      }

      if(!current1.next) {
        current1.next = current2;
        return list1;
      }
    
      let hold1 = current1.next;
      let hold2 = current2.next;
      current1.next = current2;
      current2.next = hold1;
      
      current1 = hold1;
      current2 = hold2;
    }
  }
}


module.exports = Linked_List;
