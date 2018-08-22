function commonWord(str) {
  let arr = str.split(' ');
  let obj = [];
  let greatest = ['', 0];

  for(let i = 0; i < arr.length; i++) {

    if(obj[arr[i].toLowerCase()]) {
      obj[arr[i].toLowerCase()]++;
    } else {
      obj[arr[i].toLowerCase()] = 1;
    }
  }

  Object.entries(obj).forEach(element => {
    greatest = element[1] > greatest[1] ? element : greatest;
  })

  return greatest[0];
}

module.export = commonWord;