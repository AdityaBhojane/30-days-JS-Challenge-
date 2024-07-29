// task 1 resolve promise in 2 sec 

const P = new Promise((res,rej)=>{
    setTimeout(() => {
        res("fulfilled")
    }, 2000);
})

P.then((value)=>{
    console.log(value);
})

// task 2 promise that reject after 2 sec

const p2 = new Promise((res,rej)=>{
    setTimeout(() => {
        rej('rejected')
    }, 2000);
})

p2.then().catch((value)=>{
    console.log(value)
})


// task 3 fetching data in .then chaining

function fetchingData(server){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res()
            console.log(`data form ${server}`)
        }, 2000);
    })
}

// fetchingData('Fetching Started')
// .then(()=>fetchingData('server one'))
// .then(()=>fetchingData('server two'))
// .then(()=>fetchingData('server three'))
// .then(()=>fetchingData('server four'))
// .then(()=>fetchingData('all received'))
// .catch(()=>console.log('error'))


//  task 4 async await function

async function login(){
    const getUser = await P;
    console.log("Async function :" + getUser)
}
login()


//  task 5 async await function

async function login2(){
    try {
        const getUser = await p2;
        console.log("Async function :" + getUser)
    } catch (error) {
        console.log("Async function :" + error)
    }
        
}
login2()


//  task 6 public api using promise

// const PublicApi = fetch('https://fakestoreapi.-



// task 7 public api async await function

async function fakeStoreApi(){
    try {
        const getUser = await fetch('https://fakestoreapi.com/products/1');
        const data = await getUser.json();
        console.log("Api :" , data);
    } catch (error) {
        console.log("Api :" , error);
    }
        
}
// fakeStoreApi();


// task 8 and task 9 promise methods 

const promiseOne = new Promise((res,rej)=>{
    setTimeout(() => {
        res('one')
        console.log('one resolved')
    }, 1000);
})
const promiseTwo = new Promise((res,rej)=>{
    setTimeout(() => {
        res('two')
        console.log('two resolved')
    }, 2000);
})
const promiseThree = new Promise((res,rej)=>{
    setTimeout(() => {
        res('three')
        console.log('three resolved')
    }, 500);
})

Promise.all([promiseOne,promiseTwo,promiseThree])
Promise.race([promiseOne,promiseTwo,promiseThree]).then((value)=>{
    console.log("fast resolved :" , value)
})