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
let shoppingList = [
    ["Clipper", 10000],
    ["Perfume", 5000],
    ["Toothpaste", 1000],
    ["T-Shirt", 2000],
    ["Pouch", 1500],
    ["Juice", 1200],
    ["Four Cousins", 5000]
];
// console.log(shoppingList.length)
// console.log(shoppingList)

// Access and change the elements of the first, fourth and sixth sub-arrays
// to ["Marker", 50], ["Clip", 25], ["Paper", 2000] respectively
// Creating a list of the index of array elements to be changed
let shopListInd = [0,3,5];
// Creating a list of new elements to replace the ones specified
let shopListChange = [
    ["Marker", 50],
    ["Clip", 25],
    ["Paper", 2000]
];

// Replacing the old elements with the new ones
for(let i of shopListInd){
    shoppingList.splice(i,1,shopListChange[shopListInd.indexOf(i)])
}
console.log(shoppingList)

let newShoppingList = [
    ["Bama", 3500], 
    ["Oats", 4000]
];

shoppingList = newShoppingList.concat(shoppingList);
console.log(shoppingList)
console.log(shoppingList.length)