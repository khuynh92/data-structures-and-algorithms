function reverseArray(array) {
  let reversed = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}