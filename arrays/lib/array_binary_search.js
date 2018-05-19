function binarySearch(array, key) {
  let answer = -1;
  let middle = array.length % 2 === 1 ? (array.length + 1) / 2 : array.length / 2;

  if (key >= array[middle - 1]) {
    for (let i = middle - 1; i < array.length; i++) {
      if (key === array[i]) answer = i;
    }
  } else {
    for (let i = middle; i >= 0; i--) {
      if (key === array[i]) answer = i;
    }
  }
  return answer;
}

module.exports = binarySearch;