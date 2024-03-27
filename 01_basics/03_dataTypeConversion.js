let age = "24"
let score = 85
console.log(typeof age);

let valueInNumber = Number(age)
let valueInstring = String(score)

console.log(typeof valueInNumber);
console.log("Age in Number:",valueInNumber);
console.log(typeof valueInstring);
console.log("Score in String:",valueInstring);


/*
NaN (type: number): Not a number [let age = "24abc"]
"34abs" ==> NaN
null ==> 0
undefined ==> NaN
true ==> 1
false ==> 0
"ravi" ==> NaN
*/

let loggedIn = 1

let booleanLoggedIn = Boolean(loggedIn)

console.log(typeof loggedIn);
console.log(typeof booleanLoggedIn);
console.log(booleanLoggedIn);

/*
1 ==> true
"" ==> false
0 ==> false
any no ==> true
"ravi" ==> true
*/