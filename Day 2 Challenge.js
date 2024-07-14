// add two numbers
let num1 = 22;
let num2 = 7;
console.log(num1 + num2);

// subtract two numbers
console.log(num1 - num2);

// multiply two numbers
console.log(num1 * num2)

// divide two numbers
console.log(num1 / num2)

// remainder of two numbers
console.log(num1 % num2)

// use += to add numbers
let result = num1 += num2
console.log(result)

// use += to add numbers
let result2 = num1 -= num2
console.log(result2)

// compare values using < and > operator
console.log(num1 < num2)
console.log(num1 > num2)

// compare values using <= and >= operator
console.log(num1 <= num2)
console.log(num1 >= num2)


// compare values using == and === operator
console.log(22 == "22")
console.log(7 === "7")


// use of && operator
if(num1 == 22 && num2 == 7){
    console.log("condition pass")
}else{
    console.log('condition reject')
}

// use of || operator
if(num1 == 50 || num2 == 7){
    console.log("condition pass")
}else{
    console.log('condition reject')
}


// use of ! operator
if(!num1 == num2){
    console.log('correct')
}else{
    console.log('wrong')
}


// ternary operator
num1<0? console.log("negative"):console.log("positive")