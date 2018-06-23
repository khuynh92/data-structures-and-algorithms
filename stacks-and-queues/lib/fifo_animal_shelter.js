'use strict';

class Animal {
  constructor(name, value) {
    this.name = name;
    this.type = value;
    this.next = null;
  }
}

class AnimalShelter {

  constructor() {
    this.head = null;
  }

  enqueue(name, animal) {

    if (animal === 'dog' || animal === 'cat') {
      let newAnimal = new Animal(name, animal);
      let current = this.head;

      if (!this.head) {
        this.head = newAnimal;
      } else {
        while (current.next) {
          current = current.next;
        }
        current.next = newAnimal;
      }
      return this;
    } else {
      return 'Only dogs and cats are allowed';
    }
  }

  dequeue(pref = null) {

    let current = this.head;

    if (pref === 'dog') {
      if (this.head.type === 'dog') {
        this.head = this.head.next;
        current.next = null;
        return current;
      } else {
        while (current) {
          if (current.next.type === 'dog') {
            let adopted = current.next;

            current.next = current.next.next;

            adopted.next = null;

            return adopted;
          }
          current = current.next;
        }
      }
    }


    if (pref === 'cat') {
      if (this.head.type === 'cat') {
        this.head = this.head.next;
        current.next = null;
        return current;
      } else {
        while (current) {
          if (current.next.type === 'cat') {
            let adopted = current.next;

            current.next = current.next.next;

            adopted.next = null;

            return adopted;
          }
          current = current.next;
        }
      }
    }


    this.head = current.next;
    current.next = null;
    return current;
  }

}

module.exports = AnimalShelter;