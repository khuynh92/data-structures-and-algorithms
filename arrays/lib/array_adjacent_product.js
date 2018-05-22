'use strict';

module.exports = largestProduct;

function largestProduct(array) {

  let largestNum = getLargest(array);

  return getProduct(array, largestNum);
}

function getLargest(array) {
  let biggestNumber = 0;
  for(let i = 0; i < array.length; i ++) {
    for(let j = 0; j < array[i].length - 1; j++) {
      let currentLargest = array[i][j] > array[i][j + 1] ? array[i][j] : array[i][j + 1];
      biggestNumber = biggestNumber > currentLargest ? biggestNumber : currentLargest;
    }
  }
  return biggestNumber;
}

function getProduct(array, num) {

  let curBigProduct = 0;

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
      if (array[i][j] === num) {
        let compare = productToCompare(array,i,j);
        curBigProduct = curBigProduct > compare ? curBigProduct : compare;
      }
    }
  }
  return curBigProduct;
}

function productToCompare(array,index1, index2) {
  let largest = 0;
  for(let i = index1 - 1; i < index1 + 2; i++) {
    for (let j = index2 - 1; j < index2 + 2; j++) {
      if(index1 === i && index2 === j ) {
        //skip
      } else if (i >= 0 && j >= 0 && j < array[index1].length && i < array.length) {
        largest = largest > array[i][j]*array[index1][index2] ? largest : array[i][j]*array[index1][index2];
      }
    }
  }
  return largest;
}