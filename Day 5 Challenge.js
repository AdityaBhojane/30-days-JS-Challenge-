// task 1 - checking number is even or odd 
function checkingNumber(num1){
    num1%2==0? console.log("even"):console.log("odd")
}
checkingNumber(3)


// task 2 - square of number
function square(num){
    return num**2
}
let result = square(5)
console.log(result)


//task 3 - function expression which find maxi of two numbers
const maxNumber = function maxFinder(a,b){
    return a > b ? a : b;
}
console.log(maxNumber(2,5))


// task 4 - concat two string program
const concatString = (str1,str2)=>{
    return str1 + str2;
}
console.log(concatString('chai',' code'))


//task 5 - arrow function for sum
const sum = (a,b)=> a+b;
console.log(sum(5,6))


//task 6 -  character checker
const checkString = (str,char)=>{
    for (let i = 0; i < str.length; i++) {
        if(str[i] == char){
            return true
        }    
    }
    return false 
}
console.log(checkString('chai', 'a'))


// task 7 - square of number
function multiply(num,num2=10){
    return num*num2
}
let product = multiply(5)
console.log(product)



// task 8 - greeting msg for user
function greeting(name,age=18){
    return `hello! ${name}, you are ${age} years old`
}
let message = greeting('adi')
console.log(message)


//task 9 - HOF - function will call for number of times
function caller(cb,num){
    for (let i = 0; i < num; i++) {
        cb()
    }
}
caller(()=> console.log('i am a function'),2)

  


// task 10 - HOF with 3 functions
function hofPractice(fnc1, fnc2, value){
    const result2 = fnc1(value)
    return fnc2(result2)
}

const fnc1 = (value)=> value+1;
const fnc2 = (result2)=> result2 + 10;
console.log(hofPractice(fnc1,fnc2,10))
