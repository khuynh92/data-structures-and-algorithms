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

    // Big O <-- 0(n);
  }

  prepend(val) {

    if (!this.head) this.head = new Node(val);

    else {
      let oldHead = this.head;

      this.head = new Node(val);
      this.head.next = oldHead;
    }

  // Big O <-- 0(1);
  }

  reverse() {
    if (this.head.next === null) {
      return this;
    } else {
      let current = this.head;
      let prev = null;
      while (current.next) {
        let holdNext = current.next;
        current.next = prev;
        prev = current;
        current = holdNext; 
      }
      this.head = current;
      this.head.next = prev;
    }
    // Big O <-- 0(n);
  }

  remove(offset) {
    let current = this.head;
    let counter = 1;

    if(offset === 1) {
      this.head=null;
    }
    while(current.next) {
      counter++;
      if(counter === offset) {
        current.next = current.next.next;
      } else if(current.next.next === null) {
        current.next = null;
      } else {
        current = current.next;
      }
    }
    //Big O <-- 0(n);
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

  deserialize(string) {
    if (string === `[x]`) return new Linked_List;
    else {
      let newList = new Linked_List;
      let nodeArray = string.split(/\[/).map(node => node.split(/\]/)[0]);

      for(let i = 1; i < nodeArray.length - 1; i++) {
        nodeArray[i] =  isNaN(parseInt(nodeArray[i])) ? nodeArray[i] : parseInt(nodeArray[i])
        newList.append(nodeArray[i]);
      }
      return newList;
    }

    // Big O <-- 0(n);
  }
}

module.exports = Linked_List;
