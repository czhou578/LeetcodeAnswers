/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let map = new Map();
  for (let i = 0; i < numCourses; i++) {
    map.set(i, []);
  }

  console.log(map);

  for (const [crs, pre] of prerequisites) {
    let temp = map.get(crs);
    temp.push(pre);
    map.set(crs, temp);
  }
  console.log(map);

  let set = new Set();

  const dfs = (crs) => {
    if (set.has(crs)) {
      return false;
    }

    if (map[crs] == []) {
      return true;
    }

    set.add(crs);

    for (let prereq of map.get(crs)) {
      if (!dfs(prereq)) return false;
    }

    set.delete(crs);
    map.set(map.get(crs), []);
    return true;
  };

  for (let j = 0; j < numCourses; j++) {
    if (!dfs(j)) return false;
  }

  return true;
};

console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);

//passed 48/52 test cases
