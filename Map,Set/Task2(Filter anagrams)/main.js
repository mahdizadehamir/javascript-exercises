let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(array) {
  //this code is not based my knowledge
const mapper = new Map();
for(let word of array){
  let sorted = word.toLowerCase().split('').sort().join('');
  mapper.set(sorted,word)
}
return Array.from(mapper.values())
  
}

// alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
console.log(aclean(arr));
