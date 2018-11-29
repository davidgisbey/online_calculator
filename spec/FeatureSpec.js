'use strict';

describe('feature test', function() {

  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  describe('calculator functions', function() {
    it("can add two numbers and store tore the answer in #total", function() {
      calculator.add(1,3);
      expect(calculator.total).toEqual(4);
    });

    it("can subtract two numbers and store the answer in #total", function() {
      calculator.subtract(5,3);
      expect(calculator.total).toEqual(2);
    });

    it("can multiply two numbers and store the answer in #total", function() {
      calculator.multiply(5,3);
      expect(calculator.total).toEqual(15);
    });

    it("can divide two numbers and store the answer in #total", function() {
      calculator.divide(30,4);
      expect(calculator.total).toEqual(7.5);
    });
    //
    // it("can find a square root and store the answer in #total", function() {
    //   calculator.square_root(16);
    //   expect(calculator.total).toEqual(4);
    // });

    it("can divide find a numbers square of a number and store the answer in #total", function() {
      calculator.square_number(4);
      expect(calculator.total).toEqual(16);
    });
  });
});
