const accountId = 12345
let accountEmail = "nayan@gmail.com"
var accountPassword = "54321"
accountCity = "Mumbai"

// accountId = 2 // not allowed as constant can't change

accountEmail = "nayan@yahoo.com"
accountPassword = "21212121"
accountCity = "Bhubaneshwar"

console.log(accountId);

// Prefer not use 'var' because of block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity])