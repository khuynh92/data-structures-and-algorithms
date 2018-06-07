# Lab 05 Data Structures and Algorithms

## To install

run `npm i` to install dependencies for the lab

## To test

run `npm i -D` to install all the dev dependencies that enable testing

To run a test, ensure you're in the project's root directory, and then run:

`npm test` <-- tests functionality of all functions
`npm run lint` <-- tests to ensure no lint errors exist.

## Linked List Methods

### .append(val)

append will add a new to the end of the Linked List If the linked list is empty, append will create a new head.

### .prepend(val)

prepend will add a new node to the beginning of the linked list. This will replace the existing head and shift the linked list over by one.

### .reverse()
reverse will take a linked list it is attached to and return the reverse array. The existing head will now be the last node in the linked list, and the old head will have a next of null

### .remove(offset)

remomove will find a node at the inputted offset and ignore that node. The node before the node at the offset will instead point to the next, next value

### .serialize()

serialize will turn an existing linked list object and convert it to a readable string. the string will hold the nodes value in square brackets, and use skinny arrows to poin to the next value. if  next  is null, the value will be x. 

`[4] -> [8] -> [15] -> [16] -> [23] -> [42] -> [x]`

### .deserialize(string)

deserialize will take a string that represents a stringified node, `[4] -> [8] -> [15] -> [16] -> [23] -> [42] -> [x]`, and return a Linked List.

