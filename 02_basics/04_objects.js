// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "rohit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rohit",
            lastname: "bisen"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {

    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // We can check keys by using this operation
// console.log(Object.values(tinderUser)); // We can check values by using this operation
// console.log(Object.entries(tinderUser)); // We can check entries by using this operation

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course  // This is called de-structuring of an object so that it can be easily accessed

console.log(instructor);


// ----------------------->>>>>>>>>>>>>>>>> JSon Format which is used in api

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }   

[
    {},
    {},
    {}
]