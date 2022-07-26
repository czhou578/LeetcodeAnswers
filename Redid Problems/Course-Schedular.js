/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  //arrays reversed contradict, so impossible ([0,1], [1, 0])
  //cannot have duplicate arrays
  //brute force: double for loop, compare 0 and 1 index to every other 0 and 1 index, if idx 0 === idx 1 and idx 1 === idx2, then we say impossible

  // if (prerequisites.length === 0) return true;
  // if (prerequisites.length === 1) return numCourses === 2;

  // let courses = 2;

  // for (let i = 0; i < prerequisites.length - 1; i++) {
  //   let temp = prerequisites[i];
  //   for (let j = i + 1; j < prerequisites.length; j++) {
  //     if (prerequisites[j][0] === temp[1] && prerequisites[j][1] === temp[0]) {
  //       courses -= 2;
  //     } else {
  //       courses += 2;
  //     }
  //   }
  // }

  // console.log(courses);

  // return courses === numCourses;

  let adjList = new Array(numCourses).fill(0).map(() => []);
  let inDegree = new Array(numCourses).fill(0);

  for (const [course, preCourse] of prerequisites) {
    inDegree[course]++;
    adjList[preCourse].push(course);
  }

  console.log(adjList);

  let queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  let count = 0;

  while (queue.length > 0) {
    let node = queue.shift();
    count++;
    for (const v of adjList[node]) {
      inDegree[v] -= 1;
      if (inDegree[v] === 0) queue.push(v);
    }
  }

  return numCourses === count;
};

console.log(
  canFinish(5, [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ])
);
