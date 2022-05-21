var a = 1 + 2;
console.log(a);

var a = 1 * 2;
console.log(a);

var a = 11 - 2;
console.log(a);

var a = 10 / 2;
console.log(a);

// output will be 2010
// because here we add number with String
// so plus operator behaves like adding two data not operations

var a = "20" + 10;
console.log(a);
// output will be 10
// because only plus operator change behavior while operating with different datatype
// other than plus operator doesn't change the bahaviour
var a = "20" - 10;
console.log(a);

var a = "20" + 12 - 10;
console.log(a);

// we have increment(++) and decrement(--) operators also
// increment increase the value by one
// increment decrease the value by one

// or we have and(&&) or(||) operators

//  and (&&)operator
// if both conditions were true then it will be executed
// if will be false then it will not going to execute

if (1 === 1 && 1 === 1) {
  console.log("&& it is true");
} else {
  console.log("&& it is false");
}

// or(||)operator
//if first will true it will be executed
//  never jump to second condition to check true or not
// if first will false then it will check the second condition
// if any one of both will true then it will be executed

if (1 === 2 || 1 === 1) {
  console.log("||it is true");
} else {
  console.log("|| it is false");
}

// truthy value -- all valid value is truthy
//  falsy value-- invalid value like null,,Nan, undefined,"",false, 0

if (null || undefined || "" || false || 0 || NaN) {
  console.log("value is valid");
} else {
  console.log("value is invalid");
}
