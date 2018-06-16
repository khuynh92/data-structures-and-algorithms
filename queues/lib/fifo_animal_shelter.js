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
  }

  dequeue(pref = null) {
    let current = this.head;

    if (pref === 'dog') {

      while (current) {
        if (current.type === 'dog') {

          if (current === this.head) {
            this.head = this.head.next;
            return current;
          }





          return current
        }
      }

    }


    if (pref === 'cat') {

      while (current) {
        if (current.type === 'cat') {

          if (current === this.head) {
            this.head = this.head.next;
            return current;
          }



        }
      }

    }
  }
}

module.exports = AnimalShelter;