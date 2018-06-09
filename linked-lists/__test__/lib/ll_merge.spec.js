'use strict';

const Linked_List = require('../../lib/ll_merge');

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

  it('should work for even lists', () => {

    let newList1 = new Linked_List;
    newList1.append(1);
    newList1.append(3);
    newList1.append(5);

    
    let newList2 = new Linked_List;
    newList2.append(2);
    newList2.append(4);
    newList2.append(6);
   

    expect(Linked_List.merge(newList1, newList2).head.next.value).toBe(2);
  });

  it('should work for when list 2 is shorter than list 1', () => {

    let newList1 = new Linked_List;
    newList1.append(4);
    newList1.append(15);
    newList1.append(23);

    
    let newList2 = new Linked_List;
    newList2.append(8);
 
    let twoList = Linked_List.merge(newList1, newList2);

    expect(twoList.head.next.next.value).toBe(15);
  });

  it('should work for when list 1 is shorter than list 2', () => {

    let newList1 = new Linked_List;
    newList1.append(5);


    
    let newList2 = new Linked_List;
    newList2.append(10);
    newList2.append(15);
    newList2.append(20);
 
    let twoList = Linked_List.merge(newList1, newList2);

    expect(twoList.head.next.next.value).toBe(15);
  });
});