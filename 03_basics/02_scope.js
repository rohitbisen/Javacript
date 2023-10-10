let a = 300

if (true) {
    let a = 10
    const b = 30
    var c = 40
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "rohit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()



if(true){
    const username = "rohit"
    if(username === "rohit") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);  // We can not access the variable outside the scope, It will throw error
}

// console.log(username);

console.log(addOne(5))

function addOne(num){
    return num +1
}

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(7))