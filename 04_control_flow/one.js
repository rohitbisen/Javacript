// if
// const isUserloggedIn = true
const temp = 41 

// if (temp < 41) {
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }


// = is used for assigning values, == is used for comparision, === is used for datatype comparision
// In if code will be executed only when the condition is true

const score = 500

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power ${power}`);
// }
// console.log(`User power ${power}`);

// var is a globar variable

// const balance = 1000

// if(balance > 100) console.log("test"),console.log("test2");  // never write code like this

// if (balance < 500) {
//     console.log("less than");
// }
// else if(balance < 750) {
//     console.log("less than 750");
// }
// else {
//     console.log("less than 1200");
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromEmail = false
const loggedInFromGoogle = true

if (isUserLoggedIn && debitCard  && 2==3) {
    console.log("Allow to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}