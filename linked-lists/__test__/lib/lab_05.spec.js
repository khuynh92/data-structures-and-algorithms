'use strict';

'use strict';

const Linked_List = require('../../lib/lab_05');

describe('Lab 05 Singly Linked List Module', ()=> {
  

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

  it('prepend should createa a new node if the head does not exist', () => {
    let newList = new Linked_List;

    newList.prepend(100);

    expect(newList.head.value).toBe(100);

  });

  it('prepend should createa a new head if the head does exist', () => {
    let newList = new Linked_List;
    newList.append(5);
    newList.prepend(100);

    expect(newList.head.value).toBe(100);

  });

  it('prepend should create a a new head for a longer list ', () => {
    let newList = new Linked_List;
    newList.append(5);
    newList.append(10);
    newList.append(15);
    newList.append(20);
    newList.prepend(100);

    expect(newList.head.value).toBe(100);

  });

  it('reverse should not reverse if linked list only contains the head', () => {

    let newList = new Linked_List;
    newList.append(4);
    newList.reverse();
    
    expect(newList.head.value).toBe(4);

  });

  it('reverse the array of a Linked list containing 2 nodes', () => {

    let newList = new Linked_List;
    newList.append(1);
    newList.append(2);
    newList.reverse();
    expect(newList.head.value).toBe(2);
    expect(newList.head.next.next).toBeNull();

  });

  it('reverse the array of a Linked list containing many nodes', () => {

    let newList = new Linked_List;
    newList.append(4);
    newList.append(8);
    newList.append(15);
    newList.append(16);
    newList.append(23);
    newList.append(42);
    newList.reverse();
    expect(newList.head.value).toBe(42);
    expect(newList.head.next.next.next.next.next.next).toBeNull();

  });

  it('remove() should leave an empty list if there is only a head.', () => {

    let newList = new Linked_List;
    newList.append(4);

    newList.remove(1);
    expect(newList.head).toBeNull();
  });

  it('remove() should find the node at the given value and remove it. should set second to last node\'s next to null', () => {

    let newList = new Linked_List;
    newList.append(4);
    newList.append(8);
    newList.append(15);
    newList.append(16);
    newList.append(23);
    newList.append(42);
    newList.remove(6);
    
    expect(newList.head.next.next.next.next.next).toBeNull();

  });

  it('remove() should find the node at the given value and remove it.', () => {

    let newList = new Linked_List;
    newList.append(4);
    newList.append(8);
    newList.append(15);
    newList.append(16);
    newList.append(23);
    newList.append(42);
    newList.remove(3);

    expect(newList.head.next.next.value).toBe(16);

  });

  it('serialize() should take the linked list and represent it as a readable string, if linked list is empty, return [x]', () => {
    let newList = new Linked_List;
  
    console.log(newList.serialize());
    expect(newList.serialize()).toBe('[x]');

  });

  it('serialize() should take the linked list and represent it as a readable string', () => {
    let newList = new Linked_List;
    newList.append(4);
    newList.append(8);
    console.log(newList.serialize());
    expect(newList.serialize()).toBe('[4] -> [8] -> [x]');

  });

  it('serialize() should take the linked list and represent it as a readable string, and should work for one node', () => {
    let newList = new Linked_List;
    newList.append(350);
    console.log(newList.serialize());
    expect(newList.serialize()).toBe('[350] -> [x]');

  });

  it('deserialize should take a stringified linked list and create a new linked list', () => {
    let newList = new Linked_List;

    expect(newList.deserialize('[x]').head).toBeNull();
  });

  it('deserialize should take a stringified linked list and create a new linked list', () => {
    let newList = new Linked_List;
    
    let actual = newList.deserialize(('[100] -> [x]'));
    expect(actual.head.value).toBe(100);
  });

  it('deserialize should take a stringified linked list and create a new linked list', () => {

    let newList = new Linked_List;
 
    let actual = newList.deserialize(('[100] -> [200] -> [300] -> [x]'));
    expect(actual.head.next.next.value).toBe(300);
  });

});
