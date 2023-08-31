// // This class is all about comparison operators

// var age = 10;
// if(age < 19){
//     console.log("Too Young")
// }

// var num = "5";
// console.log(num == 5);
// // strictly equal to checks whether the datatypes are the same
// console.log(num === 5);

// var x = 6;
// var y = 3;
// console.log(x <10 && y > 1);
// console.log(x ==5 || y ==5);
// console.log(!(x == y));


// Working with the 'typeof' operator
// let myStr = "string type";
// let myNum  = 5;
// let myBool = false;
// let myObj = {name: "Dave"};
// let myArr = ["One", 2, "Thee", 4];
// console.log(typeof myStr);
// console.log(typeof myNum);
// console.log(typeof myBool);
// console.log(typeof myObj);
// console.log(typeof myArr);


// // working with the 'instanceof' operator
// var mobile = ["Vivo", "Sony", "LG"];
// console.log(mobile instanceof Array);
// console.log(mobile instanceof Object);
// console.log(mobile instanceof String);
// console.log(mobile instanceof Number);
// console.log(mobile instanceof Boolean);
// console.log("Vivo" in mobile); //gives a false
// console.log("Sony" in mobile);
// console.log(0 in mobile);
// console.log(2 in mobile);
// console.log(3 in mobile);


// // Working with Conditional(Ternary) Operator
// var a = 10;
// var b = 20;
// var myValue = (a > b ? 100 : 200);
// console.log(myValue);

// // The bitwise and operator
// var x = 50;
// var y = 10;
// var result = x & y;
// console.log(result);

// Check on assignment of Aug 14, 2023
// console.log(122 | 13);
// console.log(110 | 50);
// console.log(333 | 555);
// console.log(255 | 168);
// console.log(192 | 456);


// let a = 50;
// let b = 100;
// let result = a ^ b;
// console.log(result);

// let c = 10;
// let d = -10;
// console.log(~c);
// console.log(~d);

// Conditional Statements
// The 'if' Statement
// var age = 20;
// if(age > 17){
//     console.log("qualified to code");
// }

// The 'if ... else' statement
// var age = 15;
// if(age > 17){
//     console.log("qualified to code");
// }
// else{
//     console.log("not qualified to code")
// }


// Class for August 18, 2023
let name = "Debby";
// alert(name);

// This is interpolation
console.log(`My name is ${name}`);
console.log(name.length);

// the .slice function allows to pick part of a variable 
// using the index.
// The .slice function takes in two arguments,
// -- the first argument is the starting point
// -- the second argument is the number of characters to pick
console.log(name.slice(0,1));

// The Prompt function
prompt("Name");