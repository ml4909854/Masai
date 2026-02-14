
const fs = require('fs')
const { text } = require('stream/consumers')

// Read file by using fs module both synchronous and asynchronous way

// synchronouse
// let res = fs.readFileSync("text.txt" , "utf-8")
// console.log(res)

// asyncrnous
// fs.readFile("text.txt" , "utf-8" , (err , data)=>{
//     console.log(err , data)
// })

// delete text file using fs.ulnlik modules
// fs.unlink("text.txt" , (err)=>{
//     console.log(err)
// })


// write a text in text.txt file by using fs.writeFile. It is used to reight code in a file
// fs.writeFileSync("text.txt" , "Hello world!" ,"utf-8" , (err)=>{
//     console.log(err)
// })

// fs.readFile("text.txt" , "utf-8" , (err , data)=>{
//     console.log(data)
// })

// fs.writeFileSync("text.text" , "Mahesh Kumar" , "utf-8")
// fs.readFile("text.txt" , "utf-8" , (err , data)=>{
//     console.log(data)
// })

// add a json file using write a json data using
// let data = {
//     name:"Mahesh",
//     lasname:"Kumar"

// }
// fs.writeFileSync("data.json" , JSON.stringify(data))
// fs.readFile("data.json" , "utf-8" , (err , data)=>{console.log(data)})

// let data = {
//     name:"srikant",
//     lastname:"Tiwari"
// }
// fs.appendFileSync("data.json" , JSON.stringify(data))

// fs.readFile("data.json" , "utf-8" , (err , data)=>{
//     console.log(data)
// })

fs.writeFileSync("text.txt" , "Mahesh Kumar")
fs.appendFileSync("text.txt" , "suraj Kumar , vishwass sarang")
let res = fs.readFileSync("text.txt" , "utf-8")
console.log(res)