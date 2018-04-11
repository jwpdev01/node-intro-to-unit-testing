// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizBuzzer` function
describe('fizzBuzzer', function() {

it('should return "fizz-buzz" for multiples of 15', function(){
    [15, 45, 60].forEach(function(input) {
        expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
});

it('should return "fizz" for multiples of 3', function() {
    [3, 6, 9].forEach(function(input) {
        expect(fizzBuzzer(input)).to.equal('fizz');
    });
});

it('should return "buzz" for multiples of 5', function() { 
    [5, 10, 20].forEach(function(input) {
        expect(fizzBuzzer(input)).to.equal('buzz');
    });
});

it('should return input if not multiple of 3 of 15', function() {
    [2, 4, 8].forEach(function(input) {
        expect(fizzBuzzer(input)).to.equal(input);
    });
});

it('should produce error if input isn\'t number', function() {
    const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]];
    badInputs.forEach(function(input) {
      expect(function() {
          fizzBuzzer(input);
      }).to.throw(Error);
    });
  });



});