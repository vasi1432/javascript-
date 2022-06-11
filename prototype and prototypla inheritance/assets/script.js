let obj = {
  name: "vasi",
  age: 21,
  fun: function () {
    console.log("i am a function in object");
  },
};
let arr = ["vasi,", 2];

console.log(obj);
//we can see the prototype of obj with obj.__proto__ commant
console.log(arr);
//In array we have a nested prototype which is nothing but just a object prototype
//obj.__proto__.__proto__
//or if we access the nested prototype of object it will give null
//or if we access the prototype of a reference object if the keys is available in the obj then it will give
//or  the key is unavailable then it will check its parents obj and return it
//this is called prototypele inheritence
