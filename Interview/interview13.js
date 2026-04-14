// // console.log("mahesh")

// var a = 10
// console.log(a)
// function a(){
//     console.log(20)
// }

// console.log(a)


// // console.log([])// empty arr printend
// // console.log("")  // empty string is printend
// // console.log({}) // emtpy obect is printend

// // console.log(Array(1 , 3)) // it create a  array
// // console.log(Array(4))

// if(NaN){
//     console.log("mahesh")
// }
// else{
//     console.log("Kumar")
// } This is the falsy value that wh else conditioned printned


// let arr = [1  , 2, 3, 4, 5, 6]
// let res = arr.reduce((acc , cur)=> acc < cur)
// console.log(res)


// console.log(fun())
// function fun(){
//     console.log("pqr")
// } it will print funtion value as well as eac h aeverything about the funtion
// fun()


// function abc(){
//     return function(){
//         console.log("mahesh")
//     }
// }
// // abc()  it is not printing anything
// let res = abc()
// //  console.log(res) // it is alos return a new funtion
// console.log(res()) // it will print the value but i don;t not why we get undefined answer

// const c = {
//     name:"mahesh"
// } becauase we are not initialit we a=cant resisgn

// // const d;
// // d = c

// let c = {
//     name:"mahesh"
// }

// let d ; 
// d  = c
// c.name = "kumar"
// console.log(d) object kumar

// let value = mahesh 
// values = "kumar "

// var a = "sita"
// var b = "rames"
// console.log(b)

// let a = "sita"
// let a = "ram"

// const d ;
// d= c

// const d = "mahesh"
// d = "suraj"
// console.log(d)


// let arr = [1 , 2,3 ,4 ,5 ]
// let res = arr.filter((ele , i , arr)=>{
//     return ele >3
// })

// console.log(res)

// // infinite currying 

// // function sum(a){
// //     let total = a 
// //     return function(b){
// //         if(b === undefined) return total
// //         total -= b
// //         return sum(total)
// //     }
// // }

// // console.log(sum(1)(2)(3)(4)())


// let obj = {
//     sum:200
// }
// console.log(obj.sum)
// console.log(delete obj.sum)
// console.log(obj) // it give output true because value is deleted
// console.log(delete obj.sum) // here it also give the balue 
// console.log(obj.sum) // it will be undefined if I delete sum values 
// // which is related to the interveiw 


// let obj = {
//     name:"mahesh",
//     lname:"kumar",
//     age:"2345",
//     description:"srikantvarma"
// }

// let {name , lname , ...detail} = obj
// console.log(name)
// console.log(lname)
// console.log(detail)

// destruture the arrays

// let arr = [1 ,2 ,3 ,4 ,5, 6, 7,8]
// // let [a , b, c , ...d] = arr
// // console.log(a , b, c, d)// spread opertor return a new arrays

// // function print(a , ...b){
// //     console.log("hello")
// //     console.log(b)
// //     console.log( a )// after code the return keyword code is not executed
// //     console.log(a+b)
// // }

// // console.log(print(1 ,2 ,3 ,4, 5))



// function print1(a = 3 , b = 5){
//     console.log(a+b)
// }

// print1(undefined, 4)
// console.log(undefined+6)


// function print2(a = 6 , b = 3){
//     console.log(a + b)
// }
// print2(null , 6)


// // let sum = 100 + Score   
// // var Score = 5000
// // console.log(sum)


// let obj = {
//     test:"value1"
// }
// console.log(obj)
// // let obj2 = obj   It will copy refrence 
// let obj2 = {...obj} // it will create a new object
// obj2.test = "value2"
// console.log(obj) // the value of orignal object is also changed
// console.log(obj2)

let arr = [1 ,2 ,2 ,2 ,4, 5, 6, 3 ,2]
let newArr = []

for(let i = 0 ; i < arr.length; i++){
    let repeated = false

    for(let j = 0 ; j < i; j++){
        if(arr[i] === arr[j]){
            repeated = true
            break;
        }
    }

}

console.log(newArr)