let salaries = {
  // john: 100,
  // pete: 300,
  // mary: 250,
  // amir: 300,
  // ahamad: 260,
};
//base on my knowledge
// function topSalay(obj) {
//   let personWithSal = Object.entries(obj);
//   console.log(personWithSal)
//   if (personWithSal !== []) {
//     let [person] = personWithSal;
//     let [[personName = null, salari = null]] = personWithSal;
//     for (let element of personWithSal) {
//       if (element[1] > salari) {
//         personName = element[0];
//         salari = element[1];
//       }
//     }
  
//   return [personName, salari];
// }
// else {
//     return false
// }
// }
//true Solution
function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }
console.log(topSalary(salaries));
