// Immediately Invoked Function Expression (IIFE)


// In this function is executed instantly after declaretion,
// This is specially used for removing global scope polution

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('rohit');