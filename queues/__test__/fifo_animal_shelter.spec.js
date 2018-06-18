'use strict';

const AnimalShelter = require('../lib/fifo_animal_shelter');

describe('fifo animal shelter', () => {

  it('enqueue should make a new head if queue is empty', () => {
    
    let shelter = new AnimalShelter;

    shelter.enqueue('doug', 'dog');
    expect(shelter.head.name).toBe('doug');
  });

  it('enqueue should create next properties', () => {

    let shelter = new AnimalShelter;

    shelter.enqueue('doug', 'dog');
    shelter.enqueue('kitty', 'cat');
    expect(shelter.head.next.name).toBe('kitty');
  });
  
  it('enqueue should not allow all animals', () => {

    let shelter = new AnimalShelter;

    shelter.enqueue('doug', 'dog');
    shelter.enqueue('kitty', 'cat');
    shelter.enqueue('moo', 'cow');
    expect(shelter.head.next.name).toBe('kitty');
  });

  it('dequeue should work with no preferences', () => {

    let shelter = new AnimalShelter;

    shelter.enqueue('doug', 'dog');
    shelter.enqueue('kitty', 'cat');
    shelter.enqueue('moo', 'cow');

    expect(shelter.dequeue().name).toBe('doug');
    expect(shelter.head.name).toBe('kitty');
  });

  it('dequeue should work with dog preference', () => {

    let shelter = new AnimalShelter;

    shelter.enqueue('kitty', 'cat');
    shelter.enqueue('meow', 'cat');
    shelter.enqueue('doug', 'dog');
    shelter.enqueue('moo', 'cow');

    expect(shelter.dequeue('dog').name).toBe('doug');
    expect(shelter.head.name).toBe('kitty');
  });

  it('dequeue should work with cat preference', () => {

    let shelter = new AnimalShelter;

    shelter.enqueue('doug', 'dog');
    shelter.enqueue('moo', 'cow');
    shelter.enqueue('doggo', 'dog');
    shelter.enqueue('kitty', 'cat');


    expect(shelter.dequeue('cat').name).toBe('kitty');
    expect(shelter.head.name).toBe('doug');
  });

  it('dequeue should work with dog preference when that dog is first in queue', () => {

    let shelter = new AnimalShelter;

    shelter.enqueue('doug', 'dog');
    shelter.enqueue('moo', 'cow');
    shelter.enqueue('kitty', 'cat');


    expect(shelter.dequeue('dog').name).toBe('doug');
    expect(shelter.head.name).toBe('kitty');
  });

  it('dequeue should work with cat preference when that cat is first in queue', () => {

    let shelter = new AnimalShelter;

    shelter.enqueue('kitty', 'cat');
    shelter.enqueue('doug', 'dog');
    shelter.enqueue('moo', 'cow');


    expect(shelter.dequeue('cat').name).toBe('kitty');
    expect(shelter.head.name).toBe('doug');
  });

});