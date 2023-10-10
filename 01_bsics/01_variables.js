const accountId = 12345
let accountEmail = "rohit@Amazon.com"
var accountPassword = "12342"
accountCity = "Balaghat"
let accountState;

// accountId = 2 // not allowed

accountEmail = "ab@ab.com"
accountPassword = "21212212110"
accountCity = "Bhopal"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);