// creating a object called 'John'

const John = {
    name: "John",
    weight: 50,
    hobbies: ["sleeping", "eating", "coding"],
    // put the values of an array in a box bracket '[ ]'
    // An array is a variable which can hold more than one value
    colour: "melanin",
    age: 30,
    job: true,
    wife: false
};

// console.log(John.wife);
// console.log(John.hobbies);
// console.log(John["wife"]);
console.log(John["hobbies"][1]);
console.log(John.hobbies[1]);

const vehicle = {
    wheel: 4,
    engine: function(){
        return 'Vroooommm'
    }
}

console.log(vehicle.engine);
console.log(vehicle.engine());

// Objects can have methods as attributes
const person ={
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    // Note that 'fullName' is a method
    fullName: function(){
        return this.firstName + " " + this.lastName;
        // the '+' symbol allows us to concatenate strings together
    }
}

console.log(person.fullName());

// We can have nested objects as well
const myObject = {
    firstName: 'John',
    lastName: 'Smith',
    hobbies: ['sleeping', 'eating', 'coding'],
    beverages: {
        morning: "coffee",
        afternoon: "Iced Tea"
    },
    action: function(){
        return `Time for ${this.beverages.morning}`
        // the back tick '`' and '$' is used for interpolation
    },
    d_action: function(){
        return `Time for ${this.beverages.morning} and ${this.beverages.afternoon}`
        // the back tick '`' and '$' is used for interpolation
        // the back tick is called the template string
    }
};

console.log(myObject.action());
console.log(myObject.d_action());

// To add a new attribute to myObject, we use
// 'objectname.newattributename = value;'
myObject.middleName = "Moses";

console.log(myObject);