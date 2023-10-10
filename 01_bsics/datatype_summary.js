// Primitive (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 45
const scoreValue = 45.8

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 22244278078437347035757n



// Reference (Non primitive)

// Array, Object, function

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Rohit",
    age: 21,
}

const myFunction = function () {
    console.log("Hello world");
}

console.log(typeof myObj);




//******************************************************** */

// Stack(Primitive), Heap (Non-Primitive)

let myName = "Rohit"

let anotherName = myName
anotherName = "bisen ji"

console.log(myName);
console.log(anotherName);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl",
}

let user2 = user1;
user2.email = "rohit@google.com"

console.log(user1.email);
console.log(user2.email);