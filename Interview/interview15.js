


function findLongestString(str){
 // let split the string into two part
   let arr =  str.split(" ")
   console.log(arr)
   let maxString = arr[0]
   for(let i = 0 ; i<arr.length; i++){
    if(arr[i].length > maxString.length){
        maxString = arr[i]
    }
   }
   console.log(maxString)
}


// findLongestString("This is the longest interview")

// let arr = [1 ,2 ,3 ,4 , 5]
// let newArr = arr.slice(1 , 3)
// console.log(newArr) // slice return a update arr
// console.log(arr) /


let arr= [1 , 2, 3, 4, 5,6]

arr.splice(1 , 2 , [9 , 10])
console.log(arr) // splice update a orignal array 
// but slice return a new array it is not update a orignal array
// now lets move on the other topic that's give me a spcific strength as well
// now lets move on the other direction of the code as well
