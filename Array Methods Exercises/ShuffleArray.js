let arr = [1, 2, 3];
function shuffle(arr) {
  return alert(arr.sort((a, b) => Math.random() * a - Math.random() * b));
}
shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
