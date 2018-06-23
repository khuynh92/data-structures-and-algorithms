'use strict';

function multiBracketValidation(input) {
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    if (/\{|\[|\(/.test(input[i])) stack.push(input[i]);

    if (/\}|\]|\)/.test(input[i])) {
      if (stack.length && (input.charCodeAt(i) - 2 === stack[stack.length - 1].charCodeAt(0) || input.charCodeAt(i) - 1 === stack[stack.length - 1].charCodeAt(0))) {
        stack.pop();
      }
      else {
        return false;
      }
    }
  }

  if (!stack.length) return true;

}

module.exports = multiBracketValidation;