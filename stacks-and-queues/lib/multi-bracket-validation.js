'use strict';

function multiBracketValidation(input) {

  for (let i = 0; i < input.length; i++) {

    if (input[i] === '{') {
      if (/\}/.test(input)) {
        input = input.replace(/\}/, '.');
      } else {
        return false;
      }
    }
    
    if (input[i] === '[') {
      if (/\]/.test(input)) {
        input = input.replace(/\]/, '.');
      } else {
        return false;
      } 
    }

    if (input[i] === '(') {
      if (/\)/.test(input)) {
        input = input.replace(/\)/, '.');
      } else {
        return false;
      }

    }
  }
  
  if (/\}|\]|\)/.test(input)) return false;

  return true;
}

module.exports = multiBracketValidation;