// create some code using node

// function sum(a , b){
//  return a+b
// }
// console.log(sum(5 , 5))

// using modules

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function Division(a, b) {
  return a / b;
}

// function printName(){
//     // name by  using input
//     // console.log()
//     let args = process.argv
//     args = args.splice(2)
//     let name = args.join(" ")
//     console.log(name)

// }
// printName()

// here is problem perform sum task using process.argv
function Calculator() {
  let args = process.argv;
  args = args.slice(2);
  
  console.log(args)

  let num1 = Number(args[0]);
   let num2 = Number(args[1]);

  function add(num1 , num2) {
    // retur a + b
    console.log(num1 , num2);
  }
  add()
  function mul(a, b) {
    // retur a + b
    console.log(a * b);
  }
  mul()
  function minus(a, b) {
    // retur a + b
    console.log(a - b);
  }
  minus()
}

Calculator()
module.exports = { sum, multiply, Division };
