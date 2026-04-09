
// function  func1(){
//     return 3 

// }

// function func2(){
//     return 4 
// }
// let a = (func1() , func2())
// console.log(a)
// // console.log(a)

// let arr = ["one" , "two " , "three"]
// let str= "Hello"

// let res = arr.includes("one")
// let resStr  = str.includes("ll")
// let resArr = arr.includes("onetwo")
// console.log(res , resStr , resArr)


// let a = 10 
// let b = new Number(10)
// let c = 10 
//console.log(a === b)
// anytging start with a new words it returns a object
// so  here we compare number and the object that why it gives false


// merge two strings. 
// let str1 = "hello"
// let str2 = "world2026"

// let bag  = ""
// for(let i = 0 ; i<str1.length ; i++){
//     bag += str1[i] + str2[i]
// }

// let remainChar = str2.slice(str1.length)
// console.log(remainChar)
// bag += remainChar
// console.log(bag)

// There is not another meeting is there merging two character as well how i tell him i don't know 


// let str1 = "hello"
// let str2 = "world2026"

// let maxlength = Math.max(str1.length , str2.length)
// let bag = ""
// for(let i = 0 ; i<maxlength ; i++){
//     if(str1[i]){
//         bag+= str1[i]
//     }
//     if(str2[i]){
//         bag+=str2[i]
//     }
// }

// // console.log(bag)


let arr = [[1 ,2 ] , [3 , 4] , [5 , 6]]
// let flat = arr.flat()
// console.log(flat)
// console.log(arr)

let bag = ""
for(let i = 0 ; i<arr.length; i++){
    // console.log(arr[i])
    
    for(let j = 0 ; j<arr[i].length; j++){
        bag += arr[i][j]     }
   
}
let res = bag.split("").map(Number)
console.log(res)
