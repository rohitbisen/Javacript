// Array ---------------
/* Note :-- Assosiate Arrays are those array which can be accessed by using String references of index 
like :---
        console.log(myArr["one"])  
Fact :-- JavaScript Does not support assosiative array
*/

const myArr = [1, 2, 3, 4, 5, 6]
const myHeros = ['Shaktiman', 'Nagraaj']

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1])

// Array Methods

// myArr.push(6);
// myArr.push(9);
// myArr.pop();

// console.log(myArr);

// myArr.unshift(9)  //This method adds the element at 0th index of an array
// myArr.shift()     //This method removes the element of 0th index

// console.log(myArr);

// console.log(myArr2.includes(4));
// console.log(myHeros.indexOf("Nagraaj"));

const newArr = myArr.join()  //This join operation converts a Number array to String

// console.log(newArr);
// console.log(typeof newArr);


// Slice, Splice 

/* The major difference beetween slice and splice operation is that slice only prints
the array between given range but splice manipulates the whole array */

console.log("A ", myArr);

const myn1 = myArr.slice(1, 4)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 4)
console.log("C ", myArr);
console.log(myn2);
