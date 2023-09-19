// let name = prompt("What is your name?");
// let otherNames = prompt("Please enter your other names:");
// // alert(`Welcome ${name} ${otherNames}`);
// let dogStatus = prompt(`${name}, do you have a dog? (Yes/No)`);
// if (dogStatus == "Yes"){
//     let dogAge = prompt("how old is your dog?");
//     let humanAge = (dogAge - 2)*4 + 21;
//     alert(`Dear ${name} ${otherNames}, you are ${humanAge} years old`);
// } 
// else{
//     alert(`Dear ${name} ${otherNames}, it is not possible to predict your age at this time since you do not have a dog`);
// }


// let grade = "E";
// console.log("Entering Switch Statement");
// switch(grade){
//     case 'A': console.log("Good Job")
//         break;
//     case 'B': console.log("Pretty good")
//         break;
//     case 'C': console.log("You passed")
//         break;
//     case 'D': console.log("Not so good")
//         break;
//     case 'E': console.log("Failed")
//         break;
//     default: console.log("No Grade")
// }
// console.log("Exiting Switch Statement");


// const myNavigator = [
//     "serviceWorker",
//     "webkitPersistentStorage",
//     "geolocation",
//     "doNotTrack",
//     "onLine",
//     "languages",
//     "language",
//     "userAgent",
//     "product",
//     "platform",
//     "appVersion",
//     "appName",
//     "appCondeName",
//     "hardwareCurrency"
// ]
// for(const aProp of myNavigator){
//     // 'const aProp of myNavigator' does the following tasks:
//     // creates a constant called 'aProp'
//     // assigns values of 'myNavigator' to 'aProp' in sequence
//     console.log(aProp, "\n")
//     if(aProp == "appVersion"){
//         break;
//     }
// }


// The While Loop
// let numElem = 0;
// while (numElem <20){
//     document.write(numElem, "\n" + '<br> <br>')
//     if(numElem == 10){
//         break
//     }
//     // console.log(numElem, "\n")
//     numElem++
// }


// Loops with operand(label)
// let myArr1 = ["a", "b", "c", "d", "e"];
// let myArr2 = ["e", "f", "g", "h", "i"];
// toploop: for(const arr1Elem of myArr1){
//     bottomloop: for(const arr2Elem of myArr2){
//         if(arr1Elem == arr2Elem){
//             break toploop
//         }
//         // console.log(`${arr1Elem} ${arr2Elem}`)
//         document.write(`${arr1Elem} ${arr2Elem} \n <br> <br>`)
//     }
// }


// Class of August 23, 2023
// let myArr1 = ["a", "b", "c", "d", "e"];
// let myArr2 = ["t", "c", "g", "h", "i"];
// toploop: for(const arr1Elem of myArr1){
//     console.log(arr1Elem);
//     bottomloop: for(const arr2Elem of myArr2){
//         if(arr1Elem == arr2Elem){
//             break bottomloop
//         }
//         console.log(`${arr1Elem} ${arr2Elem}`)
//         // document.write(`${arr1Elem} ${arr2Elem} \n <br> <br>`)
//     }
// }

// for(let i=0; i < 5; i++){
//     console.log(i, "\n")
// }

// let myArr1 = ["a", "b", "c", "d", "e"];
// let myArr2 = ["e", "f", "g", "h", "i"];
// topLoop: for(let i = 0; i < myArr1.length; i++){
//     console.log(myArr1[i], "\n")
//     bottomLoop: for(let j = 0; j < myArr2.length; j++){
//         if(i == 2) break bottomLoop
//         if(i == 4) break topLoop
//         console.log(myArr2[j], "\n")
//     }
// }


// Class of September 15, 2023
// Class Work Number 1


// Create a multi-dimensional (nested) array containing seven sub-arrays
// The first element of each sub-array should be a string as the name of the item
// The second element should be a number representing the quantity
// let shoppingList = [
//     ["Clipper", 10000],
//     ["Perfume", 5000],
//     ["Toothpaste", 1000],
//     ["T-Shirt", 2000],
//     ["Pouch", 1500],
//     ["Juice", 1200],
//     ["Four Cousins", 5000]
// ];
// console.log(shoppingList.length)
// console.log(shoppingList)

// Access and change the elements of the first, fourth and sixth sub-arrays
// to ["Marker", 50], ["Clip", 25], ["Paper", 2000] respectively
// Creating a list of the index of array elements to be changed

// let shopListInd = [0,3,5];
// Creating a list of new elements to replace the ones specified

// let shopListChange = [
//     ["Marker", 50],
//     ["Clip", 25],
//     ["Paper", 2000]
// ];

// Replacing the old elements with the new ones
// for(let i of shopListInd){
//     shoppingList.splice(i,1,shopListChange[shopListInd.indexOf(i)])
// }
// console.log(shoppingList)

// let newShoppingList = [
//     ["Bama", 3500], 
//     ["Oats", 4000]
// ];

// shoppingList = newShoppingList.concat(shoppingList);
// console.log(shoppingList)
// console.log(shoppingList.length)


// Functions in JavaScript
// function displayText(){
//     console.log(`function displaying string`)
// }

// displayText()

// function displayText(myString){
//     console.log(`function displaying string ${myString}`)
// }

// displayText("using interpolation")

// function concatSomeString(first, last){
//     return `${first} + " " + ${last}`
// }

// function displayConcat(){
//     console.log(concatSomeString("Zara", "Ali"))
// }

// displayConcat()


// Class of September 18, 2023

// Class work
// Write a function 'inQueue' which takes an array
// 'arr' and a number 'item' as arguments.
// Add the number to the end of the array, 
// then remove the first element of the array
// The function should return the element removed.


function inQueue(arr, item){
        arr.push(item);
        return arr.shift();
}

let arr1 = [
    "geoLocate",
    "setAntenna",
    "windowsOffsetX"
];

let item1 = 50;

console.log(inQueue(arr1, item1))

// let remArr = shoppingList.shift()
// console.log(remArr)

// let shoppingList = [
//         ["Clipper", 10000],
//         ["Perfume", 5000],
//         ["Toothpaste", 1000],
//         ["T-Shirt", 2000],
//         ["Pouch", 1500],
//         ["Juice", 1200],
//         ["Four Cousins", 5000]
//     ];

// let num1 = 300;
// console.log(inQueue(shoppingList, num1))
console.log(inQueue([], 5))
console.log(inQueue([], 1))
console.log(inQueue([2], 1))
console.log(inQueue([5,6,7,8,9], 1))


// the switch statement

function ageChecker(age){
    switch(true){
        case age >=0 && age <=5: console.log(`Child`)
            break;
        case age <= 12: console.log(`Adolescent`)
            break;
        case age <= 18: console.log(`Teen`)
            break;
        default: console.log(`Adult`)
    }

    // switch(age){
    //     case 0: 
    //     case 1: 
    //     case 2: 
    //     case 3:
    //     case 4:  
    //     case 5: console.log(`Child`)
    //         break;
    //     case 6:
    //     case 7:  
    //     case 8: 
    //     case 9: 
    //     case 10: 
    //     case 11: 
    //     case 12: console.log(`Adolescent`)
    //         break;
    //     case 13: 
    //     case 14: 
    //     case 15: 
    //     case 16: 
    //     case 17: 
    //     case 18: console.log(`Teen`)
    //         break;
    //     default: console.log(`Adult`)
    // }
}

ageChecker(3)
ageChecker(13)
ageChecker(30)
