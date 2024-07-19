// create an object title, author and year
let book = {
    title:"DSA",
    author:"hitesh",
    year:2024
}
console.log(book);


// access title and author form object
console.log(`title of the book is ${book.title} and author is ${book.author}`)

// add method which return title and author (create an custom method)
book.info = ()=>{
    console.log(`title of the book is ${book.title} and author is ${book.author}`)
}
book.info()


// add method to update book year 
book.updateYear = (newYear) =>{
     book.year = newYear
}
book.updateYear(2025)
console.log(book)


// creating library object with properties like name and books [array of books object]
let library = {
    name:"chai aur code",
    books:[
        {title:"DSA",author:"hitesh", year:2024},
        {title:"js",author:"aditya", year:2024},
        {title:"python",author:"harry", year:2024},
    ]
}
console.log(library)



// add method book using this keyword and return title and year
book.context = function(){
    return `title of the book is ${this.title} and author is ${this.year}`
}
console.log(book.context())


// for in for book object
for (const key in book) {
    console.log(book[key])
}


// using methods to get object keys and values
let objKeys = Object.keys(book)
let objValue = Object.values(book)
console.log(objKeys)
console.log(objValue)