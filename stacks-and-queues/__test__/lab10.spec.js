'use strict';

const Stack = require('../lib/lab10.js').Stack;
const Queue = require('../lib/lab10.js').Queue;

describe('stack', () => {

  it('push should work for an empty list',() => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toBe(1);
    expect(stack.top.next).toBeNull();
  });

  it('push should work for a list ',() => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toBe(2);
    expect(stack.top.next.value).toBe(1);
  });

  it('push should work for a longer list ',() => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.top.value).toBe(4);
    expect(stack.top.next.value).toBe(3);
  });

  it('pop should return a string for an empty list ',() => {
    let stack = new Stack();
    
    expect(stack.pop()).toBe('list is empty');
  });

  it('pop should return null list if list is one',() => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.pop()).toBe(1);
    expect(stack.top).toBeNull();
  });

  it('pop should return the top node value of a longer list',() => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.pop()).toBe(4);
    expect(stack.top.value).toBe(3);
  });

  it('serialize() should take the linked list and represent it as a readable string, if linked list is empty, return [x]', () => {
    let stack = new Stack;
  
    console.log(stack.serialize());
    expect(stack.serialize()).toBe('[x]');

  });

  it('serialize() should take the linked list and represent it as a readable string', () => {
    let stack = new Stack;
    stack.push(4);
    stack.push(8);
    console.log(stack.serialize());
    expect(stack.serialize()).toBe('[8] -> [4] -> [x]');

  });

  it('serialize() should take the linked list and represent it as a readable string, and should work for one node', () => {
    let stack = new Stack;
    stack.push(350);
    console.log(stack.serialize());
    expect(stack.serialize()).toBe('[350] -> [x]');

  });

  it('deserialize should take a stringified linked list and create a new linked list', () => {

    expect(Stack.deserialize('[x]').top).toBeNull();
  });

  it('deserialize should take a stringified linked list and create a new linked list', () => {

    let actual = Stack.deserialize(('[100] -> [x]'));
    expect(actual.top.value).toBe(100);
  });

  it('deserialize should take a stringified linked list and create a new linked list', () => {

 
    let actual = Stack.deserialize(('[100] -> [200] -> [300] -> [x]'));
    expect(actual.top.value).toBe(100);
  });

  it('deserialize should work for non numbers', () => {

 
    let actual = Stack.deserialize(('[hello] -> [world] -> [baz] -> [x]'));
    expect(actual.top.next.next.value).toBe('baz');
  });
  

});

describe('Queue', () => {
  it('enqueue should work for an empty list', () => {
    let queue = new Queue();
    queue.enqueue(100);

    expect(queue.head.value).toBe(100);
    expect(queue.head.next).toBeNull();

  });

  it('enqueue should work for bigger lists', () => {
    let queue = new Queue();
    queue.enqueue(100);
    queue.enqueue(200);

    expect(queue.head.value).toBe(100);
    expect(queue.head.next.value).toBe(200);

  });

  it('enqueue should work for bigger lists', () => {
    let queue = new Queue();
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(400);
    queue.enqueue(500);
    queue.enqueue(1000);

    expect(queue.head.value).toBe(100);
    expect(queue.head.next.next.next.next.value).toBe(1000);

  });

  it('dequeue should error for empty list', () => {
    let queue = new Queue();
    expect(queue.dequeue()).toBe('list is already empty');
  });

  it('dequeue should error for list of one', () => {
    let queue = new Queue();
    queue.enqueue(100);

    expect(queue.dequeue()).toBe(100);
    expect(queue.head).toBeNull();
  });

  it('dequeue should work for longer lists', () => {
    let queue = new Queue();
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(400);
    queue.enqueue(500);
    queue.enqueue(1000);

    expect(queue.dequeue()).toBe(100);
    expect(queue.head.value).toBe(200);
  });

  it('serialize() should take the linked list and represent it as a readable string, if linked list is empty, return [x]', () => {
    let queue = new Queue;
  
    console.log(queue.serialize());
    expect(queue.serialize()).toBe('[x]');

  });

  it('serialize() should take the linked list and represent it as a readable string', () => {
    let queue = new Queue;
    queue.enqueue(4);
    queue.enqueue(8);
    console.log(queue.serialize());
    expect(queue.serialize()).toBe('[4] -> [8] -> [x]');

  });

  it('serialize() should take the linked list and represent it as a readable string, and should work for one node', () => {
    let queue = new Queue;
    queue.enqueue(350);
    console.log(queue.serialize());
    expect(queue.serialize()).toBe('[350] -> [x]');

  });

  it('deserialize should take a stringified linked list and create a new linked list', () => {

    expect(Queue.deserialize('[x]').head).toBeNull();
  });

  it('deserialize should take a stringified linked list and create a new linked list', () => {

    let actual = Queue.deserialize(('[100] -> [x]'));
    expect(actual.head.value).toBe(100);
  });

  it('deserialize should take a stringified linked list and create a new linked list', () => {

 
    let actual = Queue.deserialize(('[100] -> [200] -> [300] -> [x]'));
    expect(actual.head.next.next.value).toBe(300);
  });

  it('deserialize should work for non numbers', () => {

 
    let actual = Queue.deserialize(('[hello] -> [world] -> [baz] -> [x]'));
    expect(actual.head.next.next.value).toBe('baz');
  });
  

});