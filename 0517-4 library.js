let add = function (n1, n2) {
  console.log(n1 + n2);
};
let multiply = function (n3, n4) {
  console.log(n3 * n4);
};
let math = {
  add: add,
  multiply: multiply,
};
export default math;
export { add, multiply };
