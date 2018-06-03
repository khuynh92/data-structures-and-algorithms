'use strict';

const Linked_List = require('../../lib/ll_insertions');

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

  it('the last node should have a next of null', () => {

    let newList = new Linked_List;
    newList.append(5);
    newList.append(10);
    newList.append(15);

    expect(newList.head.next.next.next).toBeNull();
  });

  it('insertBefore should create a new node as the head if given value is the head', () => {
    let newList = new Linked_List;
    newList.append(5);
    newList.insertBefore(5, 20);

    expect(newList.head.value).toBe(20);
  });

  it('insertBefore should create a new node before given value', () => {

    let newList = new Linked_List;
    newList.append(5);
    newList.append(10);
    newList.append(15);
    newList.insertBefore(15, 20);

    expect(newList.head.next.next.value).toBe(20);
  });

  it('insertBefore should have a next value that points to the inpuuted value', () => {

    let newList = new Linked_List;
    newList.append(5);
    newList.append(10);
    newList.append(15);
    newList.insertBefore(15, 20);

    expect(newList.head.next.next.next.value).toBe(15);
  });

  it('insertAfter should create a new node with a next value of null if it reaches the end of the list', () => {

    let newList = new Linked_List;
    newList.append(5);
    newList.append(10);
    newList.insertAfter(10, 20);

    expect(newList.head.next.next.next).toBe(null);
  });

  it('insertAfter should create a new node in the middle of the linked list, with a next value of the inputted value\'s next', () => {

    let newList = new Linked_List;
    newList.append(5);
    newList.append(10);
    newList.insertAfter(5, 20);

    expect(newList.head.next.value).toBe(20);

  });

  it('insertAfter should create a new node in the middle of the linked list, with a next value of the inputted value\'s next', () => {

    let newList = new Linked_List;
    newList.append(5);
    newList.append(10);
    newList.insertAfter(5, 20);

    expect(newList.head.next.next.value).toBe(10);

  });
});
