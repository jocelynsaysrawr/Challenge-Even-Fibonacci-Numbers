/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  var prev = 1;
  var curr = 2;
  var next = null;

  while (curr <= maxFibValue){
    if (curr % 2 === 0) {
      sum += curr;
    }
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return sum;
}

console.log(_sumFibs(4000000));

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;
  var prev = 1;
  var curr = 2;
  var next = null;

  while (curr < maxFibValue) {
    highest = curr;
    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};