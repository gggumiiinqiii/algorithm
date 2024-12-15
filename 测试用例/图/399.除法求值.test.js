const calcEquation = require("../../图/399.除法求值");
const equations = [
  ["a", "b"],
  ["b", "c"],
];
const values = [2.0, 3.0];
// const queries = [
//   ["a", "c"],
//   ["b", "a"],
//   ["a", "e"],
//   ["a", "a"],
//   ["x", "x"],
// ];
const queries = [["a", "c"]];
console.log(calcEquation(equations, values, queries));
// [6.00000,0.50000,-1.00000,1.00000,-1.00000]
