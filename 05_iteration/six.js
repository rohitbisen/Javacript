// const coding = ['js', 'python', 'java', 'cpp', 'c']

// const values = coding.forEach( (item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);

// forEach loop doesn't return anything

const myNums = [1, 2, 3, 4, 5, 6, 7, 8 , 10]

// const newNums = myNums.filter( (num) => num > 4 )             // filter returns values
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } ) 

// console.log(newNums);

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 5) newNums.push(num)
// })

// console.log(newNums);

const books = [
    { title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'Book three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book six', genre: 'Fiction', publish: 1987, edition: 2010},
    { title: 'Book seven', genre: 'History', publish: 1986, edition: 1996},
    { title: 'Book eight', genre: 'Science', publish: 2011, edition: 2016},
]

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre ==='History'
})

console.log(userBooks);