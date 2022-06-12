// how to create an Array
//first
let arr = [1, 2, 3, 4, 5]; //best way
//second
let arr2 = new Array(); //not recommended

//datatype of array is object
//always start with zero index
//accept all the data types as value

//check the size of an array
let a = arr.length;

//how to empty an array
arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr3 = []; //bad approach

arr3.length = 0; //good approach
//we will always delete the index of the array to empty the array

//   method to access the last element of array
arr3[arr3.length - 1]; //good
arr3.at(-1); //best

//   how to find the index of an Array
arr.indexOf(3);
//it will return the index of first occurence else -1

//how to chexk the element is exist or not
arr3.includes("2");
