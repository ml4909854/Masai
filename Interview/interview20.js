// // console.log("start")
// // what is the event loop latency.

// console.log("start")
// setTimeout(() => {
//     console.log("timer!")
// }, 0);

// for(let i = 0 ; i<100; i++)
// {
//     console.log("Hello world!")
// }
// // there is highest event loop latency.
// console.log("End")

// let x = {}
// let y = {name:"salman"}
// let z = {name:"khan"}
// let a = {name:"suleman"}

// internally it like a
// object converted into a string
// x["object object"] = {name:"akshay"}
// so that why its print a last value of the code as well
// x[y] = {name:"Akshay"}
// x[z] = {name:"Kumar"}
// x[a] = {name:"shreeRam"}

// console.log(x[y])
// console.log(x[z])
// console.log(x[a])

// let arr = [1, 2, 3, 4, 5, 3, 5];
// // I have to find the repeatative elements in the array
// let freq = {};
// for (let ele of arr) {
//   if (freq[ele]) {
//     freq[ele] += 1;
//   } else {
//     freq[ele] = 1;
// //   }
// // }
// // for (let key in freq) {
// //   if (freq[key] > 1) {
// //     console.log(key);
// //   }
// // }


// let arr = [1 ,2 ,3,3,4,5,5,6]
// let seen = new Set();
// let repeated = new Set();

// for (let num of arr) {
//   if (seen.has(num)) {
//     repeated.add(num);
//   } else {
//     seen.add(num);
//   }
// // }

// // console.log([...repeated]); // [3, 5]


// // function curr(a){
// //     return function(b){
// //         return a+b
// //     }  // this is the example of curring where each agrument 
// // takes as a function and return as a function
// // let move on an another side of the code and write a full code
// // of our history as well i also want to addd this such kind of behaviour 
// // wher people add scuh kind of solution as well 

// // }
// // let res = curr(5)(10)
// // console.log(res)


// // infite curring


// function crr(a){
//     let total = a 

//     function inner(b){
//         if(b === undefined) return total
//         total += b
//         return inner
//     }

//     return inner
// }

// let res = crr(4)(4)(5)()
// console.log(res); // 13


// let obj = {name : "atif"}
// let obj2 = {name: "aslam"}
// // let obj2 = obj
// obj2 = obj
// // obj2.name = "shenaz"
// console.log(obj)
// console.log(obj2)


// let str = "mahesh"
// console.log(str.indexOf("h")) // return fist occurece of the charcter
// return the index of frist occurence of the character
// console.log(str.charAt(4)) it return character by passing index


// console.log(typeof null)
// console.log(typeof undefined)

// let arr = [1 , 2, 3, 4, 5]
// let res = arr.map((ele)=>{
//     return ele = 2
// })
// console.log(res)

// console.log(typeof class name {
//     constructor(parameters) {
        
//     }


// })

// console.log(typeof typeof 100)

// let abc = [..."hari"]
// console.log(abc)  // spread operatore speards the string itself
// let more on anoher side of the code discust the values one by one 

// // console.log(parseInt("a"))
// console.log(parseInt("100A"))
// // console.log(parseInt("A100"))

// let arr = [100 , 200 , 300]
// let res = arr.map((ele)=>{
//     if(ele>90)  return;
//     return ele*10
// })
// console.log(res)


// fun()
// var fun = function(){
//     console.log("I am here")
// }
// fun()
// function fun(){
//     console.log("This is mahesh kumar")
// }
// fun()
// function fun(){
//     console.log("I am there")
// }
// fun()