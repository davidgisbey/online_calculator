function Calculator() {
  this.total = 0;
};

Calculator.prototype.add = function(number1, number2) {
  this.total = number1 + number2
};

Calculator.prototype.subtract = function(number1, number2) {
  this.total = number1 - number2
};

Calculator.prototype.multiply = function(number1, number2) {
  this.total = number1 * number2
};

Calculator.prototype.divide = function(number1, number2) {
  this.total = number1 / number2
};

// Calculator.prototype.square_root = function(user_number) {
//   var sum = 0;
//   var number = 1;
//   while (number <= 50) {
//   sum += number;
//   number++;
// }
// };

Calculator.prototype.square_number = function(number) {
  this.total = number * number
};
