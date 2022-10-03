function Calculator() {
  this.newArray = [];
  this.result = null;
  this.Allfunctions = [
    { operator: "+", work: (a, b) => +a + +b },
    { operator: "-", work: (a, b) => +a - +b },
  ];
  this.calculate = function (string) {
    this.newArray = string.split(" ");
    for (let item of this.Allfunctions) {
      if (item.operator === this.newArray[1]) {
        return item.work(this.newArray[0], this.newArray[2]);
      }
    }
  };
  this.addMethod = function (operator, newFunction) {
    this.Allfunctions.push({ operator:operator, work:newFunction });
  };
}
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result );
