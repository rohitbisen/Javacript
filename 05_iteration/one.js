// for loop

for (let i = 0; i <=10 ; i++) {
    const element = i;
    // console.log(element);
    
}
for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5 ) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++){
    // console.log(`Outer loop element: ${i}`); 
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value of j: ${j} and value of i: ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
    }
}

for (let i = 0; i <= 20; i++) {
    const element = i;
    if(element == 5){
        console.log(`${element} is the best number`);
        // break
        continue
    }
    console.log(`Value of i is: ${element}`);
    
}