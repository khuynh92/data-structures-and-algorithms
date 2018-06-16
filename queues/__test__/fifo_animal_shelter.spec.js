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


});