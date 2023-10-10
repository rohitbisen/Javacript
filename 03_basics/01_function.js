function sayMyname() {
    console.log("R");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
}

// sayMyname // this is referene of a function
// sayMyname() // As we add () it becomes execution of function

// function addTwoNumbers(number1, number2) {

//     console.log(number1 + number2);

// }
// addTwoNumbers(3, 4)

function addTwoNumbers(number1, number2) {

    var result = number1 + number2

    return result

}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("rohit"))
// console.log(loginUserMessage())


// This type of function is majorly used in shopping application
// Here ... defined as Rest operater
function calculateCartPrice(val1, val, ...num1){
    return num1
}

// console.log(calculateCartPrice(100, 300, 400, 1000));
// In this situation first two argument values will be assigned to first two parameters and rest will go into Rest operater 

const user = {
    username: "rohit",
    price: 199
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelObject(user)
handelObject({
    username: "sam",
    price: 199
})

const mynewArray = [300, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue[100, 300, 400]);