let user = {
    name: 'John',
    age: 30
  };
    function count (object){
        return Object.entries(object).length
    } 
  alert( count(user) ); // 2