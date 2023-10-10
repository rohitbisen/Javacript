// Singleton  :----- If the object is created is using constructor, it will become singleton

// Object literals :---- 

// Object.create  // This is created using constructor

const mySym = Symbol("key1")  // Declaring a symbol

const jsUser = {
    name: "Rohit",
    "full name": "Rohit bisen",
    [mySym]: "mykey1",
    age: "21",
    location: "balaghat",
    email: "rohit@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Sunday"]

} 

// console.log(jsUser.name);
// console.log(jsUser["email"]); // This is better way to print
// console.log(jsUser["full name"]);
// // console.log(typeof jsUser.mySym);     // We cant access Symbol object by this method.
// console.log(typeof jsUser[mySym]);
// console.log(jsUser[mySym]);

jsUser.email = "rohit@microsoft.com"
// Object.freeze(jsUser) // This method will freeze jsUser, means we cant manipulate this object 
// jsUser.email = "rohit@hsbc.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello Js user");
}   

// This function will not execute untill you comment out above freeze method.

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo ());