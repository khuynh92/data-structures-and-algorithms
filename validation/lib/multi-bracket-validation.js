'use strict';

function multiBracketValidation(input) {

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '{' || input[i] === '[') {
      for (let j = i + 1; j < input.length; j++) {
        if (input.charCodeAt(j) === input.charCodeAt(i) + 2) {
          input = input.replace(input[j], '.');
          break;
        }
      }
    }

    if (input[i] === '(') {
      for (let j = i + 1; j < input.length; j++) {
        if (input.charCodeAt(j) === input.charCodeAt(i) + 1) {
          input = input.replace(input[j], '.');
          break;
        }
      }
    }

    if (/\}|\]|\)/.test(input[i])) return false;
  }
  return true;
}


module.exports = multiBracketValidation;