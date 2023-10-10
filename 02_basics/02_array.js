const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // This method will add full array of dc_heros as an single element at last index 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // This method will add both array properly
// console.log(allHeros);

const all_new_Heros = [...marvel_heros, ...dc_heros]  // Here ... spreads all the element of array into single ones
console.log(all_new_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



// This method used in data scraping

console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));  // This method is used to convert Data into Array
console.log(Array.from({name: "Rohit" }));  // Interesting Array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));