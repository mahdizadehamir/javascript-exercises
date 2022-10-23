//this method base on my knowledge
function unique(arr) {
  let result = [];
  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O
