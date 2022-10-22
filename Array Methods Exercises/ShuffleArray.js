let arr = [1, 2, 3];
//My Code Base on My Knowledge
// function shuffle(arr) {
//   return arr.sort((a, b) => Math.random() * a - Math.random() * b);
// }

//fisher and Yates algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    //destructuring Method
    [array[i], array[j]] = [array[j], array[i]];
  }
}
let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};
for (let i = 0; i < 100000; i++) {
  shuffle(arr);
  count[arr.join("")]++;
}
for (let key in count) {
  console.log(`${key} : ${count[key]}`);
}
