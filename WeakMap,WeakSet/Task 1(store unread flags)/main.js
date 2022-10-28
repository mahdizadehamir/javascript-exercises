let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  let mapMessages = new WeakMap()
  for (let item of messages){
    mapMessages.set(item,{'reading':true})
  }
  console.log(mapMessages)
  messages[0] = null;
  console.log(mapMessages)