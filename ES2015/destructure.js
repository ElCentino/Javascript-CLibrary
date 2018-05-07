
let [first, last] = "Danny Ansari";

let destructureName = function(...names) {
  console.log(`first name is : ${names[0]}, last name is ${names[1]}`);
};

let destructureName2 = function() {
  console.log(`first name is : ${arguments[0]}, last name is ${arguments[1]}`);
};

const vars = ["Danny", "Ansari"];

destructureName2(...vars);
