let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

//this method is based on my knowledge
function groupById(array) {
  const newObj = array.reduce((acc, item, index, array) => {
    acc[item.id] = item;
    return acc;
  }, {});
  return newObj
  
}

let usersById = groupById(users);
console.log(usersById)