function unique(arr) {
  return Array.from(new Set(arr));
  
}
// Array.from convert Iterable to one Array

let values = [
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

alert(unique(values)); // Hare, Krishna, :-O
