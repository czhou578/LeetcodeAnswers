/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  //edge case is if    
  const tempGrid = grid.map(row => row.map(column => false)) //create temporary grid
  let islandCount = 0
  
  for (let i = 0; i < tempGrid.length; i++) {
    for (let j = 0; j < tempGrid[i].length; j++) {
      if (dfs(i, j, grid, tempGrid)) islandCount++
    }
  }

  return islandCount
};

const dfs = (i, j, grid, tempGrid) => {
  const stack = [[i, j]]
  let islandSize = 0;

  while (stack.length > 0) {
    let current = stack.pop() //pop out of stack
    let [i, j] = current //destructre i and j

    if (tempGrid[i][j]) continue
    tempGrid[i][j] = true //assign tempgrid value to true if it hasn't already been marked true

    if (grid[i][j] === '0') continue //if value is 0, means not island, continue
    islandSize++;

    let array = isAdjacent(i, j, grid, tempGrid)  
    stack.push(...array)
  }

  return islandSize > 0 ? true : false
}

const isAdjacent = (i, j, grid, tempGrid) => { //used to determine whether an adjacent neighbor in all directions exist
  const adjNeighbors = []

  if (i > 0 && !tempGrid[i - 1][j]) { //is a cell above
    adjNeighbors.push([i - 1, j])
  }

  if (i < grid.length - 1 && !tempGrid[i + 1][j]) {
    adjNeighbors.push([i + 1, j])
  }

  if (j > 0 && !tempGrid[i][j - 1]) { //is a cell above
    adjNeighbors.push([i, j - 1])
  }

  if (j < grid[0].length - 1 && !tempGrid[i][j + 1]) {
    adjNeighbors.push([i, j + 1])
  }


  return adjNeighbors
}

/**
 * brute force approach
 * dfs function is used to 
 */