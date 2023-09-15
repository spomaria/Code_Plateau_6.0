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




// let myNum = 50;
// do {
//     console.log(myNum);
// }



// for(let i =1; i < 6; i++){
//     console.log(i)
// }

// const myArrLines = [
//         "Normal Line",
//         "Solid Line",
//         "Dotted Line",
//         "Wavy Line",
//         "Dashed Line",
//         "Double Line",
//         "Groove Line",
//         "Ridge Line",
//         "Outset Line",
//         "Inset Line"
//     ]
//     for(const line of myArrLines){ //for .. of 
//         if(line.startsWith('D')) {
//             console.log(`String starting with 'D' was skipped`)
//             continue
//         }
//         console.log(line)
// }

// for(let i =5; i > 1; i--){
//     console.log(i)
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

const myArrLines = [
        "Normal Line",
        "Solid Line",
        "Dotted Line",
        "Wavy Line",
        "Dashed Line",
        "Double Line",
        "Groove Line",
        "Ridge Line",
        "Outset Line",
        "Inset Line"
    ]
    for(const elem of myArrLines){ 
        // if word length is not up to nine, don't print
        if(elem.length > 9 ) {
            if(elem.startsWith('I'))
            continue
        }
        console.log(elem)
}
