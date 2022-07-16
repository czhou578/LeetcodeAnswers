/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sum = n;
  let alreadySeenSums = {};

  while (sum !== 1) {
    var digits = sum.toString().split("");
    var realDigits = digits.map(Number);

    sum = 0;

    for (let digit of realDigits) {
      sum += Math.pow(digit, 2);
    }

    if (alreadySeenSums[sum]) return false;

    alreadySeenSums[sum] = 1;
  }

  return true;
};
