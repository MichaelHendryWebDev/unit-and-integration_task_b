var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add 1 and 4 together and get 5', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    assert.equal(calculator.runningTotal, 5)
  })

  it('it should subtract 4 from 7 and get 3', function(){
  calculator.previousTotal = 7
  calculator.subtract(4)
  assert.equal(calculator.runningTotal, 3)
})

  it('it should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 5
    calculator.multiply(3)
    assert.equal(calculator.runningTotal, 15)
  })

  it('it should divide 21 by 7 and get 0.3', function(){
    calculator.previousTotal = 7
    calculator.divide(21)
    assert.equal(calculator.runningTotal, 0.3333333333333333)
  })

  it('it should concatenate multiple number button clicks', function() {
    calculator.numberClick(5)
    calculator.numberClick(7)
    calculator.numberClick(2)
    assert.equal(calculator.runningTotal, 572)
  })

  it('it should chain multiple operations together', function() {
    calculator.previousOperator = '-'
    calculator.operatorClick('=')
    assert.equal(calculator.previousOperator, null)
  })

  it('it should clear running total without affecting the calculation', function() {
    calculator.runningTotal = 5
    calculator.clearClick()
    calculator.previousOperator = null
    calculator.previousTotal = null
    assert.equal(calculator.runningTotal, 0)
  })
});
