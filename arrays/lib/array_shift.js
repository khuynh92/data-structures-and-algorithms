'use strict';
module.exports = exports = {};

exports.insertShiftArray = (array, value) => {
  let newArray = [];
  let middle = array.length%2 === 1 ? (array.length + 1)/2 : array.length/2;

  for (let i = 0; i < array.length + 1; i++ ) {
    if (i < middle) {
      newArray[i] = array[i];
    } else if (i === middle) {
      newArray[i] = value;
    } else {
      newArray[i] = array[i - 1];
    }
  }  
  return newArray;
};

exports.removeMiddle = (array) => {
  let newArray = [];
  let middle = array.length%2 === 1 ? (array.length + 1)/2 : array.length/2 + 1;

  for (let i = 0; i < array.length - 1 ; i++ ) {
    if (i < middle - 1) {
      newArray[i] = array[i];
    } else {
      newArray[i] = array[i+1];
    }
  }  
  return newArray;
};

