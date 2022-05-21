// Object
// thgis is a simple object
//all the keys are in string in the object
// we can define any datatype in Object
// we can define any datatype in Object
const profile = {
  fname: "vasi",
  lname: "ahmed",
  city: "indore",
  state: "mp",
  pincode: "452001",
  hobbies: ["travelling", " exploring", " biking"],
  //   getname: function () {
  //     const name = ankit;
  //     return name;
  //   },
  batch: {
    batchname: "chohort6",
    city: "indore",
    status: "active",
  },
};
// this is the way to call the Object
console.log(profile);
console.log(profile.fname);
console.log(profile.lname);
console.log(profile.city);
console.log(profile.state);
console.log(profile.pincode);
console.log(profile.hobbies);
//we add data in the object during run timee
console.log((profile.fname = "sahil"));
// console.log(profile.getname);
console.log(profile.batch); //we call the nested object
//now we call the nested object data
console.log(profile.batch.batchname);
console.log(profile.batch.city);
console.log(profile.batch.status);
// add value oin nested function
//now output will change from chohort6 to chohort7
console.log((profile.batch.batchname = "chohort7"));
