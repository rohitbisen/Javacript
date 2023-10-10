// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 24) // Here months and are arranged in the array formate that'swhy 0 is considered as First Month of Year. 
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myCreatedDateOne = new Date(2023, 0, 23, 4, 12)
// let myCreatedDateOne = new Date("2023-01-14")
let myCreatedDateOne = new Date("01-14-2020")
// console.log(myCreatedDateOne.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDateOne.getTime()); // This two methods will show time in milisecond.
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1); // Here we added +1 to get Exact month....

console.log(newDate.toLocaleString('Default', {
    weekday: "long"
}))   
// Thi s function will tell output as Name of Day

console.log(newDate.getDay()); // This will tell number of day