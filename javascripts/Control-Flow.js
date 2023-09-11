// const myArrLines = [
//     "Normal Line",
//     "Solid Line",
//     "Dotted Line",
//     "Wavy Line",
//     "Dashed Line",
//     "Double Line",
//     "Groove Line",
//     "Ridge Line",
//     "Outset Line",
//     "Inset Line"
// ]
// for(const line of myArrLines){
//     if(line.startsWith('D')) continue
//     console.log(line)
// }

// for(const line of myArrLines){
//     if(line.startsWith('D')) {
//         console.log(`String starting with "D" removed`)
//         continue
//     }
//     console.log(line)
// }


// let myArr1 = ["Teenoq", "Auxide", "Kukut", "Peace", "Bethel"]
// let myArr2 = ["Emmanuella", "Felicia", "Teenoq", "Wills", "Richie"]
// firstLoop: for(const arrElem1 of myArr1){
//     console.log(arrElem1)
//     secondLoop: for(const arrElem2 of myArr2){
//         if(arrElem1 == arrElem2){
//             continue //firstLoop
//         }
//         console.log(`"${arrElem1}" and "${arrElem2}" can be paired`)
//     }
// }

// Class of August 30, 2023
// for(i =0; i < 10; i++){
//     console.log("Hello there!")
// }

// const names = ["Abraham", "John", "Jane", "Smith", "Ken", "Lean", "Tom"];
// let i = 0;
// let max = names.length;

// for( ; i < max; i++){
//     console.log(`Hello, dear ${names[i]}`)
// }

// The for loop can take more than one initializing expresions
// all separated by commas before putting the semi-colon at the end
// of the initializing expressions.

// Question 1: Console.log the numbers from 1 to 5 using a for loop
// Answer

// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }

// Question 2: Calculate the sum of numbers from 1 to 10 using a for loop
// Answer

// let numLength = 0;
// for(let i = 1; i <= 10; i++){
//     numLength = numLength + i;
// }
// console.log(numLength);

// function sumOfNums(maxNum){
//     let numSum = 0;
//     for(let i = 1; i <= maxNum; i++){
//         numSum = numSum + i;
//     }
//     console.log(numSum);
// }
// sumOfNums(10)


// Using the do while loop, iterate over the car object as long as 
// i < the length of car
// let i = 0;
// const car = ["Volvo", "Benz", "Toyota", "Tesla", "Honda", "Ferrari"];
// do{
//     // console.log(car[i]);
//     console.log(car[i].slice(1,3));
//     i++;
// } 
// while(i < car.length)


// // using the i-- post-iteraton-condition
// let arr1 = ["a", "b", "c", "d"];
// for(i = arr1.length -1; i >=0; i--){
//     console.log(arr1[i]);
// }

// let x = arr1.length;
// while(x > 0){
//     arr1.pop();
//     x--;
// }
// console.log(arr1);

// do{
//     arr1.shift();
//     x--;
// } while(x>0)
// console.log(arr1);

// let i = 0;
// let j = 1;
// let k = 0;
// console.log("Starting Fibbonaci Series");
// while(k <=10){
//     k = i + j
//     i = j
//     j = k
//     console.log(`k = ${k}, i = ${i}, j = ${j}`)
// }

// let obj1 ={a: "a", b: "b", c: "c"}
// for(const elem in obj1){
//     console.log(elem)
// }

// Class of September 11, 2023
// let numArr = [10,20,30,40,50,60];
// let sumArr = [];
// for(const arr1 of numArr){
//     sumArr.push(arr1 + 10)
// }
// // console.log(sumArr)

// let newArr = [];
// let numArr1 = [70, 80, 20, 90, 50];
// firstLoop: for(let arr of numArr){
//     secondLoop: for (let arr1 of numArr1){
//         if (arr == arr1) newArr.push(arr)
//     }
// }
// console.log(newArr)

const myArrLines = [
    "Normal Line",
    "Solid Line",
    "Dotted line",
    "Wavy Line",
    "Dashed line",
    "Double Line",
    "Groove Line",
    "Ridge Line",
    "Outset Line",
    "Inset Line"
];

let newArrLines = [];
for(let myElem of myArrLines){
    if(myElem.length == 11 && myElem[7] === "L"){
        newArrLines.unshift(myElem)
    }
}
console.log(newArrLines)

// Using the .map array method 
let numArr1 = [70, 80, 20, 90, 50];
let newArr = numArr1.map(x => x + 10)
console.log(newArr)

let fname = ["Nengak", "Igbarak", "Songrit", "Maritji"];
let sname = ["Goltong"];
let fulnames = fname.map(x => `${x} ${sname}`);
console.log(fulnames);