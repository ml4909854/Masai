


// clousrers funtion 

// solve counter dilema using closures. I think its a best topic and many interviewrs ask in this code
// a clousres is a funtion which has acees of a parent scope

function myCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}
const add = myCounter();
const result = add()
console.log(result)
console.log(result)
console.log(result)
console.log(result)

// the 
