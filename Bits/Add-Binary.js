/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let str = "";
  let carry = 0;

  a.split("").reverse().join("");
  b.split("").reverse().join("");

  console.log(a);
  console.log(b);

  let maxlength = Math.max(a.length, b.length);

  for (let i = 0; i < maxlength; i++) {
    let digitA;
    let digitB;

    if (i < a.length) {
      // console.log("asdfasdfadf");
      digitA = parseInt(a[i], 2);
    } else {
      digitA = 0;
    }

    if (i < b.length) {
      digitB = parseInt(b[i], 2);
    } else {
      digitB = 0;
    }

    let total = digitA + digitB + carry;
    let char = "" + (total % 2);
    console.log("char: " + char);
    str = char + str;
    carry = Math.floor(total / 2);
  }

  if (carry !== 0) str = "1" + str;
  return str;
};

console.log(addBinary("1010", "1011"));
