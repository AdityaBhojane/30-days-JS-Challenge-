// create array and log 
let arr = [1,2,3,4,5];
console.log(arr);

// access the 1st element
let firstElement = arr[0];
console.log(firstElement);


// use push method
arr.push(6);
console.log(arr)

// use pop method
arr.pop()
console.log(arr)


// use shift method
arr.shift()
console.log(arr)


// use unshift method
arr.unshift(0)
console.log(arr)


// map method
let newArr = arr.map((e)=>{
    return e*2
})

console.log(newArr)


// filter method
let EvenNum = arr.filter((e)=>{
    return e%2 == 0
})
console.log(EvenNum)


// reduce method 
let sum = arr.reduce((acc,curr)=>{
    return acc + curr
},0)
console.log(`sum of array ${arr} is ${sum}`)


// for loop to print each element of array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


//for each method
arr.forEach((e)=>console.log(e))

// 2 dimensional array
let twoD = [[11,12,36],['b','c','d'],[1,2,3]]
console.log(twoD)


// access a specific value
console.log(twoD[0][2])