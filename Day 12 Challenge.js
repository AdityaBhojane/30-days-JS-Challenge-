const { any } = require("zod")

// task 1 try catch simple example
function errorHandling(){
    try {
        throw Error("Custom error")
    } catch (error) {
        console.log(error)
    }
}
// errorHandling()


// task 2 if denominator is zero then throw an error
function checkZero(num1,num2){
    let result = num1%num2
    try {
        if(isNaN(result)){
            throw Error("something is wrong")
        }else{
            console.log('success')
        }
    } catch (error) {
        console.log(error)
    }
}

// checkZero(2,0)


// task 3 try catch and finally
function checkZero(num1,num2){
    let result = num1%num2
    try {
        if(isNaN(result)){
            throw Error("something is wrong")
        }else{
            console.log('success')
        }
    } catch (error) {
        console.log(error)
    }finally{
        console.log('process done')
    }
}

// checkZero(2,2)


// task 4 custom error using class 

class customError extends Error{
    constructor(){
        console.log('error msg')
    }
}

function complexTask(){
    throw new customError("hello")
}

try {
    complexTask()
} catch (error) {
    console.log("there is an error")
}


// task 5 
function checkString(str){
    if(str.length == 0){
        throw Error
    }else{
        console.log(str)
    }
}
try {
    // checkString("")
} catch (error) {
    console.log("string length 0")
}


// task 6

const P = new Promise((res,rej)=>{
    setTimeout(() => {
        rej("rejected")
    }, 2000);
})

P.then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log(value)
})


// task 7

async function promiseCheck(){
    try {
        P.then((value)=>{
            console.log(value);
        })
    } catch (error) {
        console.log("Error in promise")
    }
}
// promiseCheck()


// task 8 fetch api

const response = fetch("fakeStore.com");
response.then(()=>{}).catch(()=>{
    // console.log("error on fetch")
})


// task 9 fetch using async and try catch

async function FetchData(){
    try {
        const response = await fetch("fakeStore.com");
        response.json()
    } catch (error) {
        console.log('wrong api')
    }
}
FetchData()