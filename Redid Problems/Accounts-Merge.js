// /**
//  * @param {string[][]} accounts
//  * @return {string[][]}
//  */
// var accountsMerge = function (accounts) {
//   let result = [];

//   let map = new Map();

//   for (let i = 0; i < accounts.length; i++) {
//     let nameKey = accounts[i].shift();
//     console.log("account: " + accounts[i]);

//     if (map.has(nameKey)) {
//       console.log("asdasdasd");
//       for (let email of accounts[i]) {
//         if (map.get(nameKey).includes(email)) {
//           let set = new Set([nameKey, ...accounts[i], ...map.get(nameKey)]);
//           let newArray = Array.from(set);
//           result.push(newArray);
//         }
//       }
//     } else {
//       map.set(nameKey, accounts[i]);
//       result.push([nameKey, ...accounts[i]]);
//     }
//   }

//   return result;
// };

// let accounts = [
//   ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//   ["John", "johnsmith@mail.com", "john00@mail.com"],
//   ["Mary", "mary@mail.com"],
//   ["John", "johnnybravo@mail.com"],
// ];

// console.log(accountsMerge(accounts));
