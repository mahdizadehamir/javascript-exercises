let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(array) {
  //this code base on my knowledge
  let seti = new Set(array);
  let newseti = new Set();
  seti.forEach((value,value2,set) => {
    newseti.add(value.toLowerCase().split('').sort().join(''));
    return newseti 
  })
  console.log(newseti)
}

// alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
aclean(arr);
