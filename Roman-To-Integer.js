var romanToInt = function(s) {
  let valueMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }  
  var total = 0;

  if (s.length == 1) return total += valueMap[s.charAt(0)]

  for (let i = 0; i < s.length; i++) {
    let next = s.charAt(i + 1);
    
    if (next) { //if next element exists
      if (valueMap[next] > valueMap[(s.charAt(i))]) {
        total += valueMap[next] - valueMap[(s.charAt(i))]
        i++
        
      } else {
        total += valueMap[s.charAt(i)]
      }

    } else {
      total += valueMap[s.charAt(i)]
    }
  }

  return total;
};

console.log(romanToInt("D"));