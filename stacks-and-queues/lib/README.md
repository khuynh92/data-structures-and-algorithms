# Lab 10 Stacks and Queues

## To install

run `npm i` to install dependencies for the lab

## To test

run `npm i -D` to install all the dev dependencies that enable testing

To run a test, ensure you're in the project's root directory, and then run:

`npm test` <-- tests functionality of all functions
`npm run lint` <-- tests to ensure no lint errors exist.

## Queue Methods

### .enqueue(val)

enqueue will add a new node with the given (val) to the end of the queue. If the stack is empty, append will create a new top.

```
let queue = new Queue(); // [x]
queue.enqueue(15);  // [top: 15] --> [x]
queue.enqueue(16);  // [top: 15] --> [16] --> [x]
```

### .dequeue()

dequeue will remove the first added item in the queue (head) and reassign the head to the next value in the stack.

```
let queue = new Queue(); // [x]
queue.enqueue(23);  // [top: 23] --> [x]
queue.enqueue(42);  // [top: 23] --> [42] --> [x]

queue.dequeue();  // 23
```

### .serialize()

serialize will turn an existing linked list object and convert it to a readable string. the string will hold the nodes value in square brackets, and use skinny arrows to point to the next value. if  next  is null, the value will be x. 

```
[4] -> [8] -> [15] -> [16] -> [23] -> [42] -> [x]
```

### .deserialize(string)

deserialize will take a string that represents a stringified node, `[4] -> [8] -> [15] -> [16] -> [23] -> [42] -> [x]`, and return a queue.


## Stack Methods

### .push(val)

push will add a new node with the given (val) to the beginning of the stack as the 'top'. If the stack is empty, append will create a new top.

```
let stack = new Stack(); // [x]
stack.push(4);  // [top: 4] --> [x]
stack.push(8);  // [top: 8] --> [4] --> [x]
```

### .pop()

pop will remove the last added item in the stack (top) and reassign the top to the next value in the stack.

```
let stack = new Stack(); // [x]
stack.push(4);  // [top: 4] --> [x]
stack.push(8);  // [top: 8] --> [4] --> [x]

stack.pop();  // 8
```

### .serialize()

serialize will turn an existing linked list object and convert it to a readable string. the string will hold the nodes value in square brackets, and use skinny arrows to point to the next value. if  next  is null, the value will be x. 

```
[4] -> [8] -> [15] -> [16] -> [23] -> [42] -> [x]
```

### .deserialize(string)

deserialize will take a string that represents a stringified node, `[4] -> [8] -> [15] -> [16] -> [23] -> [42] -> [x]`, and return a stack.

