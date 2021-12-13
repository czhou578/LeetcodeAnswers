/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
  let set = new Set();

  for (let index = 0; index < emails.length; index++) {
    const element = emails[index].split("@");
    element[0] = (element[0].split("+"))[0]
    element[0] = element[0].replace(/\./g, "");
    set.add(element.join("@")) 
  }

  return set.size
};