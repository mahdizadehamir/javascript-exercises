let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean (arr){
let map = new Map(arr)
console.log(map.size)
}
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"