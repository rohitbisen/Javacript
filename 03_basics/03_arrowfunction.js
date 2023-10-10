const user = {
    username: "rohit",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

    // Basically this keyword is used to refer current context like username in above function.
}
// Arrow function does not support this keyword


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); 

// Window is global object inside browser 

// function chai(){
//     let username = "rohit"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "rohit"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// If you are giving single line output so you dont need to write return.

// const addTwo = (num1, num2) =>( num1 + num2)

const addTwo = (num1, num2) => ({username: "rohit"})

// If you want to return an objct from arrow function so you need to wrap that inside ()

console.log(addTwo(3, 4));


const myArray = [3, 4, 5, 6]

myArray.forEach(() => {}) 