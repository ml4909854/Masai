
// console.log("interview24.js")

// // closure examples

// function outer(){
//     let message = "hello"
//     function inner(){
//         console.log(message)
//     }
//     return inner
// }

// const myFunction = outer() // outer function calls here
// myFunction()

// timer examples of closure
// let count = 0 
// function counter(){
//     console.log(count+=1)
// }  closure create fron outerscope
// counter()
// // counter()
// // counter()

// // function outer(){
// //     let counter = 0 
// //     function inner(){
// //         console.log(counter+=1)
// //     }
// //     return inner
// // }
// //    let myFunction = outer() // outer function called here
// //    myFunction()
// //    myFunction()

// function createCounter() {
//     let count = 0;  // Private variable
    
//     return function() {
//         count++;     // Remembers count
//         return count;
//     };
// }

// let myFunction = createCounter()
// console.log(myFunction())44