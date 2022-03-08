/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
  if (s.length === 1) return s

  let result = ""

  let map = new Map() //key insert order remembered

  for (let i = 0; i < s.length; i++) { //add each key value pair to map (character in string, # of occurrences)
    if (map.get(s.charAt(i))) {
      map.set(s.charAt(i), map.get(s.charAt(i)) + 1)
    } else {
      map.set(s.charAt(i), 1)
    }
  }

  let array = Array.from(map) //convert to array of key value pairs

  array.sort(function(a, b) { //sort array descending by value in key value pair
    return b[1] - a[1]
  })

  //for every element, add chars that are specified by the corresponding value  
  //ex: if ['e': 2], then add 'e' twice to the result string
  
  for (let i = 0; i < array.length; i++) { 
    for (let j = 0; j < array[i][1]; j++) {
      result += array[i][0]
    }
  }

  return result
};

let test = "tree"

console.log(frequencySort(test));