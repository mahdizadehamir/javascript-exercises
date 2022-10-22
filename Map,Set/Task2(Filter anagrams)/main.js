let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
  allSets = new Set();
  for (let i = 0; i < arr.length; i++) {
     arr[i] = arr[i].toLowerCase();
    allSets.add(new Set (arr[i]))
  }
  console.log(allSets)
  console.log(allSets[0] == allSets[1])
}

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
