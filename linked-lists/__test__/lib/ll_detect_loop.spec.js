'use strict';

const Linked_List = require('../../lib/ll_detect_loop');

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

  it('hasloop should detect a normal list', () => {

    let newList = new Linked_List;
    newList.append(5);
    newList.append(10);
    newList.append(15);

    expect(newList.hasLoop()).toBeFalsy();

  });

  it('hasloop should detect a looped list', () => {

    let newList = new Linked_List;
    newList.append(5);
    newList.append(10);
    newList.append(15);
    newList.append(20);
    newList.append(25);
    let firstNode = newList.head.next.next;
    newList.head.next.next.next.next.next = firstNode;

    expect(newList.hasLoop()).toBeTruthy();

  });

});