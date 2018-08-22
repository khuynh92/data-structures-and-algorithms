function hasUniqueChars(str) {
  let obj = {};

  for(let i = 0; i < str.length; i++) {
    if(obj[str[i].toLowerCase()]) {
      return false;
    }

    if(str[i].toLowerCase() !== ' ') {
      obj[str[i].toLowerCase() ]= 1;
    }
  }
  return true;
}

module.export = hasUniqueChars;