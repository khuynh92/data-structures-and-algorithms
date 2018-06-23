'use strict';

let Stack = require('../lib/queue_with_stacks');

describe('queue with stacks', () => {

  it('push should create a new tail and head that have the same value' , () => {
    let newStack = new Stack;
    newStack.push(1);
    expect(newStack.head.value).toEqual(newStack.tail.value);
  });

  it('push should create a new tail that points to the old tail' , () => {
    let newStack = new Stack;
    newStack.push(4);
    newStack.push(8);
    newStack.push(15);
    
    expect(newStack.head.value).toBe(4);
    expect(newStack.tail.value).toBe(15);
    expect(newStack.tail.next.value).toBe(8);
  });

  it('pop should take off the last item(tail) that was given to the stack', () => {
    let newStack = new Stack;
    newStack.push(4);
    newStack.push(8);
    newStack.push(15);

    expect(newStack.pop()).toBe(15);
    expect(newStack.tail.value).toBe(8);
  });

  it('pop should take off the last item(tail) that was given to the stack', () => {
    let newStack = new Stack;
    newStack.push(4);


    expect(newStack.pop()).toBe(4);
    expect(newStack.tail).toBeNull();
    expect(newStack.head).toBeNull();

  });

  it('enqueue should create a new tail and head that have the same value' , () => {
    let newStack = new Stack;
    newStack.enqueue(1);
    expect(newStack.head.value).toEqual(newStack.tail.value);
  });

  it('enqueue should create a new tail that points to the old tail' , () => {
    let newStack = new Stack;
    newStack.enqueue(4);
    newStack.enqueue(8);
    newStack.enqueue(15);
    
    expect(newStack.head.value).toBe(4);
    expect(newStack.tail.value).toBe(15);
    expect(newStack.tail.next.value).toBe(8);
  });

  it('dequeue should remove only one item in the stack' , () => {

    let newStack = new Stack;
    newStack.enqueue(4);

    expect(newStack.dequeue()).toBe(4);
    expect(newStack.head).toBeNull();
    expect(newStack.tail).toBeNull();

  });

  it('dequeue should remove only one item in the stack' , () => {

    let newStack = new Stack;
    newStack.enqueue(4);
    newStack.enqueue(8);
    newStack.enqueue(15);

    expect(newStack.dequeue()).toBe(4);
    expect(newStack.head.value).toBe(8);
    expect(newStack.dequeue()).toBe(8);
    expect(newStack.head.value).toBe(15);

  });

  it('dequeue should not work for an empty stack' , () => {

    let newStack = new Stack;

    expect(newStack.dequeue()).toBe('Cannot dequeue non existent nodes');

  });

});

