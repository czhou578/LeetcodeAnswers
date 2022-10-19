/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const graph = {}; //graph
  const emailToName = {};

  for (let account of accounts) {
    const name = account[0];
    const firstEmail = account[1];

    for (let i = 1; i < account.length; i++) {
      //looping from first email to last email in specific account element
      const email = account[i];

      emailToName[email] = name; //keep track of which name belongs to which email

      addEdge(graph, firstEmail, email);
      console.log(graph);
      addEdge(graph, email, firstEmail);
      console.log(graph);
    }
  }
};

function addEdge(graph, from, to) {
  if (from in graph === false) {
    graph[from] = [];
  }

  graph[from].push(to);
}

let accounts = [
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["Mary", "mary@mail.com"],
  ["John", "johnnybravo@mail.com"],
];

console.log(accountsMerge(accounts));
