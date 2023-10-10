const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, currvalue) => {
    console.log(`acc: ${acc} and currValue: ${currvalue}`);
    return acc + currvalue
}, 3)  // whatever we put after , will be used as acc

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 1999
    },
    {
        itemName: "mob dev course",
        price: 11999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPrice);