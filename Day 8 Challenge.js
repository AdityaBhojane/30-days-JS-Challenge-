// template string
let name = 'aditya';
let age = '10';
console.log(`Welcome ${name}, your age is ${age}`)


// multiline string literal 
console.log(`Welcome ${name},\nyour age is ${age}`)


// destructuring of array 
let [first, second] = [1,0]
console.log(first,second)


// destructuring of object
let {mobile,year} = {mobile:"apple 16", year:2024};
console.log(mobile,year);


// spread operator
let arr = [1,2,3];
let arr2 = [4,5,6] 
let newArr = [...arr,...arr2];
console.log(newArr)


// rest operator
function sum(...arg){
    let result = 0;
    arg.forEach((elm)=>{
        result += elm;
    })
    return result;
}
let result = sum(5,5,5,5)
console.log(result)



// function with default parameter
function product(num1, num2=1){
    return num1*num2
}
let answer = product(4,6);
let anotherAnswer = product(8);
console.log(answer,anotherAnswer)



// enhanced object 
let car = "rolls royals";
let model = "2024";
let info = ()=>{
    console.log(`car name ${car} and model year ${model}`)
}
let encObj = {
    car,
    model,
    info
}
console.log(encObj)



// named based variable properties of objects
let teacher = 'name';
let rating = 'rate';
 
// if we want to use variable value as a key in object the we have to warp that into square brackets
// it is called Computed Property Names

let mentor = {
    [teacher]:"hitesh",
    [rating]:4.8
}
console.log(mentor)
