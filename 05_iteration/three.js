// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world"

for (const greet of greetings) {
    if(greet == " ") {
        // break
    }
    // console.log(`Each character is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('SL', "Lanka")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObj = {
    'game1': "NFS",
    'game': "PUBg"
}

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);
// }  
// Object is not iterable in forof loop
