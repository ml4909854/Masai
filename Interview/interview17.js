// console.log(
// "Hello world!"
// )

// function currrying

// function sum (a){
//     return function(b){
//         return function(c){
//             return a + b +c
//         }
//     }
// }

// let a = sum(1)(3)(4)
// console.log(a) // the output is 8

// conde for infinite currying

// function sum(a) {
//   let total = a;

//   function inner(b) {
//     if (b === undefined) return total;

//     total += b;
//     return inner; // return same function again
//   }

//   return inner;
// }

// console.log(sum(1)(2)(3)(4)()); // 10

// let arr = [1 ,2 ,3 ,4 ,5 ,6]
// let res = arr.find((ele)=>ele>3)
// console.log(res)

// count the frequency of the character

// let str = "mahesh kumar"
// let freq = {}

// for(let char of str){
//     if(char === " ")continue;
//     if(freq[char]){
//         freq[char]+=1
//     }else{
//         freq[char] = 1
//     }
// }
// console.log(freq)

// lets count the frequen of the arrays eleemnsta

// let arr = [1 ,3 ,4, 5, 4, 3,2 ,3 ,1 ,3,4 ,5, 4, 2,2]
// let freq  = {}
// for(let char of arr){
//     if(freq[char]){
//         freq[char]+=1
//     }else{
//         freq[char] = 1
//     }
// }
// console.log(freq)

// console.log("j" > 9)
// console.log("mahesh" < 1)
// console.log("6" > 1)

// // [y] = [9 , 2, 3, 4, 5, 6]
// // console.log(y)

// let a = 100
// let b = ++a
// let c = a++
// console.log(b)
// console.log(c)
// let d = b + c
// console.log(d)
// let e = c+b
// console.log(e)

// let a = 100
// let b = ++a + a++
// console.log(b)

// let name = "m3hesh"
// name[1] = "spngeeta"
// console.log(name)
// console.log(name[1])

// let arr = [[1 ,2 ,3 ,4] , [6 , 7, 8, 9]]
// // the length of the array is 2
// let arr1 = [,,,,,,,]
// console.log(arr.length)
// console.log(arr1.length)

// let arr = [[1,2,3,4],[5,6,7,8]]

// for(let i = 0 ; i<arr.length; i++){
//     for(let j = 0 ; j<arr[i].length; j++){
//         console.log(arr[i][j])
//     }
// }

// let arr = [13, 4, 6, 234, 52, 5];

// for (let i = 0; i < arr.length; i++) {
// //   for (let j = 0; j < arr.length - 1; j++) {
// //     if (arr[j] > arr[j + 1]) {
// //       let temp = arr[j];
// //       arr[j] = arr[j + 1];
// //       arr[j + 1] = temp;
// //     }
// //   }
// // }
// // console.log(arr);



// function abc (x , y , z){

// }
// function xyz(a = 0 , b , c){

// }
// function pqr(a , b=0 , c){

// }
// console.log(abc.length)
// console.log(xyz.length)
// console.log(pqr.length)


// let str = "This is my interview Ram jane mera nam tum ko kyu batao"

// let arr = str.split(" ")
// let orignalStr = ""
// for(let i = 0 ; i<arr.length; i++){
//      let newArr= arr[i].split("") 
//      let bag = ""
//      for(let j = 0 ; j<newArr.length; j++){
//         if(j === 0){
//            bag+= newArr[j].toUpperCase()
//         }else{
//             bag+= newArr[j]
//         }
//      }
//      orignalStr+=bag + " "
     
   
// }
// console.log(orignalStr)

// console.log(null == undefined) 

// let str = "mahesh"
// let vowel = "aeiouAEIOU"
// let count = 0
// for(let i=0 ; i<str.length; i++ ){
//     if(vowel.includes(str[i])){
//         count++
//     }  this is the require output of the code
// }
// console.log(count)

// let str = 'naman'
// let reverseStr = ""
// for(let i = str.length-1 ; i>=0 ; i--){
//     reverseStr+=str[i]
// }

// if(str === reverseStr){
//     console.log("Its a palindrome")
// }else{
//     console.log("Not palindrome")
// }


// let arr = ["a" , "b" , 100 , 20 , "c"]
// let char = []
// let num = []
// for(let i= 0 ; i<arr.length ; i++){
//      if(typeof arr[i] === "string"){
//         char.push(arr[i])
//      }else{
//         num.push(arr[i])
//      }
// }
// console.log(char)
// console.log(num)


//  findfirst reapeat character 

// function firstRepeat(str){
//    for(let i = 0 ; i<str.length ; i++){
//     for(let j = i+1; j<str.length; j++){
//         if(str[i] == str[j]){
//             return str[i]
//         }
//     }
//    }
//    return "No repeat"
// }
// let res = firstRepeat("heenah")
// console.log(res)