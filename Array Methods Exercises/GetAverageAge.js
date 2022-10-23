let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [john, pete, mary];
//this method is based on my knowledge
// function getAverageAge(array) {
//   let sum = 0;
//   for (let dude of array) {
//     sum += dude.age;
//   }
//   return sum / array.length
// }

//use reduce method
function getAverageAge(array) {
  return array.reduce((prev, item) => prev + item.age, 0) / array.length;
}
alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
