// 'use strict';

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {

//   constructor() {
//     this.head = null;
//   }

//   insert(value) {
//     let node = new Node(value);

//     if(!this.head) {
//       this.head = node;
//       return this;
//     }

//     let current = this.head;

//     while(current.next) {
//       current = current.next;
//     }

//     current.next = node;

//     return this;
//   }

//   palindrome() {
//     let arr = [];

//     if (!this.head) {
//       return true;
//     }

//     if(!this.head.next) {
//       return true;
//     }

//     let current = this.head;
//     while(current) {
//       arr.push(current.value);
//       current = current.next;
//     }
//   }

//   reverse() {
//     if(!this.head) {
//       return null;
//     }

//     if(!this.head.next) {
//       return this;
//     }

//     let current = this.head;
//     let hold = current.next.next;

//     while(current.next) {
      
//     }



//   }

// }


// module.exports = LinkedList;