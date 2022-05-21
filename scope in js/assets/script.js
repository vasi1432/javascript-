var a = 10; //global scope
let b = true; //script scope
const c = { name: "Sanskrati" }; //script scope

function tryMe() {
  //function scope or local scope
  var a1 = 20;

  function tryMe2() {
    let a22 = 20;
    {
      var c2 = false;
    }
  }
  tryMe2();
}
tryMe();

let a = 20;
// var c = 10;

for (let i = 0; i < 10; i++) {} //block scope
for (k = 0; k < 10; k++) {} //block scope

for (var j = 0; j < 10; j++) {}
{
  let a2 = 10; //block scope
}

let a = 20; //script scope
// var c = 10;//script scope

function tryMe() {
  var a = 10;

  function tryMe2() {
    console.log(a);
    var a22 = 10;

    function tryMe3() {
      var a222 = 1000;
    }
    tryMe3();
  }

  tryMe2();
}

tryMe();
function x() {
  var a = 20;
  console.log(a);
}
x();
console.log(a);
