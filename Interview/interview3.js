// console.log("mahesh")
const x = { name: "suman", age: 22 };
const y = { name: "suman", age: 32 };

console.log(x === y); // compariring two object alwys give a false value.
// Now move on a other side where i am going to code as well
// let modX = JSON.stringify(x)
// let modY = JSON.stringify(y)
// console.log(modX === modY)
// comparing to object first create into a stringfy value. And now move on a second
// usecase.
// console.log(a)
// a = 10  undefined is the outputca

for (var i = 0; i < 5; i++) {
  let output = i;
  setTimeout(() => {
    console.log(output);
  }, 1000);
}


let str = "This is the string"
let updateStr= str.split(" ")
console.log(updateStr)
for(let i = 0 ; i<updateStr.length ; i++){
    console.log(updateStr[i])// each line printed in a new line
}