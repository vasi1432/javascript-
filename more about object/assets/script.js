//checking prototype of objects
const object1 = {
  name: "vasi",
  city: "indore",
  getcity: function () {
    return this.city;
  },
};
const object2 = Object.create(object1);
object2.name = "vasi ahmed";
console.log(object1.name);
console.log(object2.__proto__.getcity());
//when we simply getthe name by key we will get output as vasi ahmed
//if we get the prototype of that object then we will get the output vasi
//because the pototype of object1 and object2 is same

//check the key is present or not

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//if we want to check 5 is presenr in arrv or not
//then we have to iterate every value of arr
//but in case of object we simply check the key is present  in it or not
//we have methods for this in object
const object3 = {
  1: "vasi",
  2: "vasi",
  3: "vasi",
  4: "vasi",
  5: "vasi",
  6: "vasi",
  7: "vasi",
  8: "vasi",
  9: "undefined",
};
//method to check key is present or not
const check = object3.hasOwnProperty("9");
console.log(check);
//alternative method
const check2 = "10" in object3;
console.log(check2);

//freeze an object method
const object4 = {};
object4.city = "indori"; //we have an object with two keys
object4.name = "vasi gouri";

Object.freeze(object4);
object4.fname = "vasi ahmed gouri";
//we can not add any key after freeezing the object
//we cannot do anything with object after freeze
//we only see the object is present in memory
//   console.log(object4);
//now how to check object is freexen or not
const result = Object.isFrozen(object4);
console.log(result);
// return true if frozen otherwise false

//   how to add multiple objects into one
const obj_1 = {
  name: "Aman",
  city: "Delhi",
};

const obj_2 = {
  name: "Tarun",
  state: "Delhi",
};

const obj_3 = {
  name: "Tarun",
  state: "Delhi",
};

const obj_4 = {
  State: "New Delhi",
  country: "India",
};

//   /one mehot is to use spread operato

const finalresult = { ...obj_1, ...obj_2, ...obj_3, ...obj_4 };
//spread operator return the intersaction of all the objects
console.log("LN93", finalresult);
//we have anothe inbuilt method to add object

const finalresult2 = Object.assign(obj_1, obj_2, obj_3, obj_4);
console.log("LN97", finalresult2);
