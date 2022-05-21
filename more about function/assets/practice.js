var a = 20;
const a34 = 34;
var b = 40;
function fun1() {
  var a = 10;
  function fun2() {
    var c = 2;
  }
  return fun2();
}
// console.log(a);
// console.log(fun1());
// console.log(b);
//output of the code is 20 10 40
//talking aboutnthe hoisting
//first of all in memory allocartion face
//it will allocate the memory in global scope for every variable as undefined
//so when we call the function before initialization that's why it is showing undefined
//or in case of function it will store whole function in the global scope of memory as it is

var myfunction = (a, b) => a + b;
console.log(myfunction(6, 6));
//or in case of variable arrow function it will behave just like that it is behaving in variable case
