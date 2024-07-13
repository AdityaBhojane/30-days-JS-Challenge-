// task 1 declare variable using var and console log it 
var num = 22;
console.log(num);

// task 2 declare variable using let and console log it 
let str = "aditya";
console.log(str);

// task 3 declare variable using const and console log it 
const allowed = true;
console.log(allowed);

// task 4 declare variable of different data type and check type of 
// number, string, boolean, object, array

let score = 22;
let user = 'microsoft'
let login = false;
let obj = { brand:"samsung", modal:2023}
let arr = [1,2,3]
let fnc = ()=> "i am function"

console.log(`type of ${score} is + ${typeof score}`)
console.log(`type of ${user} is + ${typeof user}`)
console.log(`type of ${login} is + ${typeof login}`)
console.log(`type of ${obj} is + ${typeof obj}`)
console.log(`type of ${arr} is + ${typeof arr}`)
console.log(`type of ${fnc} is + ${typeof fnc}`)
           

// task 5 declare a value using let and reassign a new value then log it

let Value = 22;
console.log(Value)
Value = 7;
console.log(Value)

// Task 6   declare a value using const and reassign it and observe the error

const mobile = 'iphone';
// mobile = 'google'
// console.log(mobile) // error

// task 