module.exports = (str) => {

  let obj = {};
  let arr = str.split(' ');

  for (let element of arr) {
    let word = element.replace(/[^a-zA-Z\d]/i, '').toLowerCase();

    if (!!obj[word]) {
      return word;
    } else {
      obj[word] = 1;
    }
  }
};