let range = {
  from: 1,
  to: 5,
  [Symbol.iterator] :function(){
    this.current = this.from;
    return this;
  },
  next(){
    if(this.current <= this.to){
      return {done:false,value:this.current++}
    }
    else{
      return {done:true}
    }
  }
};
for(let item of range){
  alert(item)
}

