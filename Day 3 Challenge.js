// if else statement
let num = 22;
if(num < 0){
    console.log('negative')
}else if(num > 0){
    console.log('positive')
}else{
    console.log('zero')
}


// voting eligibility
let age = 18;

if(age > 18){
    console.log('eligible for vote')
}else{
    console.log('not eligible for vote')
}

// nested if else
let num1 = 22;
let num2 = 7;
let num3 = 31;

if(num1>num2){
    if(num1>num3){
        console.log(`${num1} is greater than ${num2} and ${num3}`)
    }else{
        console.log(`${num3} is greater than ${num1} and ${num2}`) 
    }
}else {
    if(num2 > num3){
        console.log(`${num2} is greater than ${num1} and ${num3}`) 
    }
}


// switch case statement

let day = 7;

switch (day) {
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
    case 6:
        console.log("saturday")
        break;

    default:
        console.log('sunday')
        break;
}

// grade system
let score = 80  ;

switch (true) {
    case score >= 80:
        console.log("grade A")
        break;
    case score >= 70:
        console.log("grade B")
        break;
    case score >= 60:
        console.log("grade C")
        break;
    case score >= 40:
        console.log("grade D")
        break;
    default:
        console.log("grade F")
        break;
}


// ternary for even and odd

let even = 22;
even%2 ==0? console.log("number is even"):console.log("number is odd")

// leap year 
let year = 2007;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`${year} is a leap year.`);
        } else {
            console.log(`${year} is not a leap year.`);
        }
    } else {
        console.log(`${year} is a leap year.`);
    }
} else {
    console.log(`${year} is not a leap year.`);
}