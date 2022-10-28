let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let mapMessages = new WeakMap()
for (let item of messages){
    mapMessages.set({"date":Date ()},item)
}
console.log(mapMessages)