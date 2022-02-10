/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  if (numRows < 1) return []
  if (numRows === 1) return [[1]]

  let triangleTop = [[1]]

  for (let i = 1; i < numRows; i++) {
    let previousRow = triangleTop[i - 1]

    let row = []
    row.push(1)

    for (let j = 1; j < previousRow.length; j++) {
      row[j] = previousRow[j] + previousRow[j - 1]
    }
    row.push(1)

    triangleTop.push(row)
  }

  return triangleTop
  
  
};