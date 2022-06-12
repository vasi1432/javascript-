// const obj = {};
//   console.log(obj.something); //undefined
//   console.log(obj.something.something); //errrr

// another way of writing this line
//   if (obj && obj.something) {
//     console.log("yes", obj.something);
//   } else {
//     console.log("not a valid key");
//   }

// optional chaining
//   try {
//     if (obj.something.something) {
//       console.log("yes", obj.something);
//     } else {
//       console.log("ln:28", "not a valid key");
//     }
//   } catch (error) {
//     console.log("my error is", error);
//   }

// another method of destructuring
//   using "?"
//   if (obj?.something?.something) {
//     console.log("yes", obj.something);
//   } else {
//     console.log("ln:37", "not a valid key");
//   }

//   const profile = {
//     name: "vasi",
//     city: "indore",
//     phone: "2323232",
//     details: {
//       a: "a",
//       b: "b",
//     },
//   };
//   const profile2 = {};
//   //   console.log(profile2); //blank object
//   const { name, city, phone } = profile;
//   //assgning name and city to profile for using in profile2
//   //put both keys in  profile2
//   profile2.MYNAME = name;
//   profile2.mycity = city;
//   console.log(profile2);

//   //deleting a key in object
//   delete profile.details.a;
//   //that's how delete works
//   //we can also delete the keys of nested object using this
//   console.log("LN 61", profile);

// another method of deleting keys
// const profile = {
//   name: "vasi",
//   city: "indore",
//   phone: "2323232",
//   details: {
//     a: "a",
//     b: "b",
//   },
// };
// rest operator simply delete the mentioned keys on the brackets and give us the remaining keys of Object
// const { phone, details, ...restofdata } = profile;
// console.log(restofdata, profile);
