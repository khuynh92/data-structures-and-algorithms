# Lab 15 Trees

## To install

run `npm i` to install dependencies for the lab

## To test

run `npm i -D` to install all the dev dependencies that enable testing

To run a test, ensure you're in the project's root directory, and then run:

`npm test` <-- tests functionality of all functions
`npm run lint` <-- tests to ensure no lint errors exist.

## Making a tree

to make a tree require lab-15.js as a dependency

```
const BinarySearchTree = require(./lab15.js);
```
## Binary Tree methods

### .insert(n)

enqueue will add a new node with the given (val) to the tree. If the tree is empty, insert will create a new root.
If the value is greater than root, it will add it to the right, if lower, it will add it to the left.

```
let bst = new BinarySearchTree(); // [x]
bst.insert(15);  // {root: {value: 15, right: null, left: null}}
bst.insert(16);  // {root: {value: 15, right: null, left: {right: null, left:null, value:16}}
```

### .find(n)

find will return a boolean in the binary search tree stating if a value exists. True if the value exists in the tree, false if it does not.

```
let bst = new BinarySearchTree(); // [x]
bst.insert(23); 
bst.insert(42); 

bst.find(23);  // true
```

### .remove(val)

remove will first locate and delete the given val. Tree will remodel itself accordinly depending on if the removed node has children. The new tree will be returned 

```
let bst = new BinarySearchTree(); // [x]
bst.insert(23);
bst.insert(42);

bst.remove(23);
```

### .serialize()

serialize will turn an existing tree and convert it to a readable array. The array will represent a preordered tree, in a root-left-right order. if a node has no children, two x's will show. if a tree has one child, 1 x will apear.
```
let bst = new BinarySearchTree(); // [x]

    bst.insert(6);
    bst.insert(7);
    bst.insert(8);
    bst.insert(9);
    
    let bsts = bst.serialize(); // [6, 'x', 7, 'x', 8, 'x', 9, 'x', 'x']
```

### .deserialize(string)

deserialize will take the above array that represents a tree , and return a tree
