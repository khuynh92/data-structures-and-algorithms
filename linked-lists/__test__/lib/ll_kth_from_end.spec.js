'use strict';

const Linked_List = require('../../lib/ll_kth_from_end');

describe('Singly Linked List Module', ()=> {

  it('should create a new list with a head of null', () => {

    let newList = new Linked_List;

    expect(newList.head).toBeNull();
  });

  it('append should create a new head if head is null', () => {

    let newList = new Linked_List;
    newList.append(5);

    expect(newList.head.value).toBe(5);
  });

  it('append should create a new node if the head is filled', () => {

    let newList = new Linked_List;
    newList.append(5);
    newList.append(10);
    newList.append(15);

    expect(newList.head.next.next.value).toBe(15);
  });

  it('append should have the last node have a next of null', () => {

    let newList = new Linked_List;
    newList.append(5);
    newList.append(10);
    newList.append(15);

    expect(newList.head.next.next.next).toBeNull();
  });

  it('kThFromEnd should take in a value and determine which node is kth from the end', () => {
    let newList = new Linked_List;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);

    expect(newList.kThFromEnd(0).value).toBe(4);
  });

  it('kThFromEnd should take in a value and determine which node is kth from the end', () => {
    let newList = new Linked_List;
    newList.append(1);
    newList.append(2);
    newList.append(3);
    newList.append(4);
    
    expect(newList.kThFromEnd(20)).toBe('exception');
  });

});