

// Array is used to staro a star. In arry we can store a data in form of number , string , bolean , 
// ojbect as well 


// creates arrya 
// using object liter we can create a array  let fruits  = ["apple" , "banana" , "orange"]
// using new Array() we can create a 
// using empty array we can create a arrya
// using Array.of we can create a arrya 
// using Arra.from create a form string 


// Lets discuss array methods.


// #push
// push is used to add element in the and of the arrya
// let fruits = ["apple" , "orange"
// ]
// fruits.push("banana")
// console.log(fruits)


// #pop() remove from end 
// let fruits = ["apple" , "banana"]
// fruits.pop()
// console.log(fruits)

// # unshift add to begining
// let fruits = ["apple", "banana", "orange"];
// fruits.unshift("kela")
// console.log(fruits)

// // # shift() is used remove from begining
// let fruits = ["apple" , "banana" , "orange"]
// fruits.shift()
// console.log(fruits)


// splice Adding and removing from anywhere

// let fruits = ["apple" , "banana" , "orange" , "grape"]
// // removed elements 
// // let removed = fruits.splice(1 , 2)
// // means 1 index two elements deleted the output 
// // console.log(fruits)
// let removed = fruits.splice(1 , 2 , "santara" , "anar")
// console.log(fruits)

// # concat is used to combine that arrays returns a new array 
// let arr1 = [1, 2, 3]
// let arr2 = [4 , 5 ,6]

// let combined = arr1.concat(arr2)
// console.log(combined)  // now this is the combined array


// Method which is used to finding an elements 

// # indexOf
// let fruits = [
//     "apple" , "orange" , "banana" , "grape"
// ]
// console.log(fruits.indexOf("banana"))

// # lastIndexOf method to find the last index of the element
// let fruits = ["apple" , "orange" , 
//     "banana"  , "banana" , "tree"
// ]
// let index = fruits.lastIndexOf("banana")
// console.log(index)


// # 9 check element ef element exits or not 
// let fruits = ["apple" , "banana" , "orange"]
// console.log(fruits.includes("apple"))
// console.log(fruits.includes("bajrangiBhaijaan"))

// #10 find() Find first elemetn matching conditon
// let numbers = [5, 12, 8, 130, 44]
// find number greater than 2
// let res = numbers.find(num =>num>100)
// console.log(res)

// let users = [
//     {id:1 , name:"John"},
//     {id:2 , name :"mahesh"},
//     {id:3 , name:"sangeeta"}
// ]
// using find we can find the any user that we want lets move on the inder index

// let res = users.find(item=>item.name == "John")
// console.log(res)


// let numbers = [5 , 12 , 58 , 139 , 44]
// let findIndex = numbers.findIndex(numbers => numbers>58)
// console.log(findIndex)


// tranforming Arrays we have a differnt methods
// # map() Transform every element (Most important)
// let numbers = [1 , 2 ,3 , 4 ,5]
// // double each number
// let doubled = numbers.map(num => num*2)
// console.log(doubled)

// # filter => keep elements that pass test
// let numbers = [1 , 2  , 3 ,4 ,5 ,6 ,7,8,9 , 10]
// // get even number by using filter
// let res = numbers.filter(num => num%2==0)
// console.log(res)

// # reduce() - Reduce array to single value
// let numbers = [1 , 2 ,3 ,4 ,5]
// let total = numbers.reduce( (acc , crr)=> acc+crr , 0)
// console.log(total)

// # foreach - do something with each elemen
// let fruit = ["apple" , "banana" , "orange"]
// fruit.forEach((data)=>{
//     console.log(data)
// })


// sorting and reversing array
// sort() - Sort elements (Modifies orginal)
// let fruits = ["banana" , "apple" , "orange" , "grape"]
// fruits.sort() // arrya is sorted
// console.log(fruits)


// sliceing and joing 
// // slice() extract portion(return new array)

// let fruits = ["apple" , 
//     "banana" , "orange" , "green" , "mango"
// ]
// let res = fruits.slice(1 , 4)
// let res1 = fruits.slice(2)
// let res2 = fruits.slice(-2) // last two elements printed

// console.log(res  , res1 , res2 , fruits ) // orignal array unchanged

// console.log(res)

// join is used to combine elemts into string

// let num = [1 , 3, 4, 5,6] // join converts array into string.
// console.log(typeof(num.join()))



//***********checking conditons*********** */
// every()- check if all elements pass test 

// let number = [2 , 4 ,1 , 8]
// let alleven = number.every(num => num%2==0)
// console.log(alleven)


// other useful methods fill araay with value
// let arr = new Array(5).fill(0)
// let numbers = [1 ,2 ,3 , 4 ,5]
// numbers.fill(0 , 2 , 4)
// console.log(numbers)
// console.log(arr)

// flat() flat nested array
// let nested = [1  ,[2 , 4] , [2 , [4 ,5]]]
// let newArr = nested.flat()
// console.log(nested)
// console.log(newArr)



// Dsa for pattern printing


// square pattern//

