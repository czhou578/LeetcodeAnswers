/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {

  if (s1.length == 1 && s2.includes(s1)) return true

  let map = new Map()

  for (let i = 0; i < s1.length; i++) {
    map.set(s1.charAt(i), map.get(s1.charAt(i)) + 1 || 1)
  }

  for (let j = 0, k = s1.length - 1; k < s2.length; j++, k++) {
    if (!map.has(s2.charAt(j)) || !map.has(s2.charAt(k))) continue

    let pointer = j

    while (pointer <= k && map.get(s2.charAt(pointer))) {
      map.set(s2.charAt(pointer), map.get(s2.charAt(pointer)) - 1)
      pointer++
    }

    if (pointer > k) return true

    for (let l = j; l < pointer; l++) {
      map.set(s2[l], map.get(s2[l]) + 1)      
    }
  }

  return false
};

// function checkInclusion(s1, s2) {
// 	// Create a map of s1 chars
// 	const map = new Map();
// 	for (let i = 0; i < s1.length; i++) 
// 		map.set(s1[i], map.get(s1[i]) + 1 || 1);

// 	for (let start = 0, end = s1.length - 1; end < s2.length; start++, end++) {
// 		// Move window until both start & end chars match
// 		if (!map.has(s2[start]) || !map.has(s2[end])) continue;

// 		// Check chars inside the window
// 		let i = start;
// 		do {
// 			map.set(s2[i], map.get(s2[i]) - 1);
// 			i++;
// 		} while (i <= end && map.get(s2[i]));

// 		// Check if all chars were in the window
// 		if (i > end) return true;

// 		// Reset the map if any chars in the window didn't match
// 		for (let j = start; j < i; j++) 
// 			map.set(s2[j], map.get(s2[j]) + 1);
// 	}

// 	return false;
// }

let s1 = "adc"
let s2 = "dcda"

console.log(checkInclusion(s1, s2));