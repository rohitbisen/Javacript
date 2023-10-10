const score = 300
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // used to decimals in digit

const otherNumber = 123.8557

// console.log(otherNumber.toPrecision(3));  // Used in Long GST calculations

const hundreds =  100000
// console.log(hundreds.toLocaleString('en-IN'));


//*********************** Maths ************************** */

// console.log(Math);
// console.log(Math.abs(-4));  // It converts negative digit to positive
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));  // It gives the highest value
// console.log(Math.floor(4.9)); // It gives the lowest value
// console.log(Math.min(2, 4, 1, 5));
// console.log(Math.max(2, 4, 1, 5));

// console.log(Math.random()); // It gives random value between 0-1 
// console.log((Math.random()*10) +1);
// console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20

// Now the below function will return the value between 10-20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);


//Trying a function for dice game which will return random value between 0-6

const minValue = 0
const maxValue = 6
console.log(Math.floor(Math.random()*(maxValue - minValue + 1)));