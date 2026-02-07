

// problem 1 

const checkEvenOdd = function(num){
  if(num%2===0){
    return "Even"
  }else{
    return "Odd"
  }


}
// let result = checkEvenOdd(20)
// console.log(result)


// Problem 2 Find the maximum of two numbers

// const findMax = function(a , b){
//     //   let max = 0
//     if(a > b){
//         return a 
//     }else{
//         return b
//     }

      
//     //   return max
      
// }
// let result =  findMax(5 , 9)
// console.log(result)


const factorial = (a) => {
    let fac = 1;

    for (let i = 2; i <= a; i++) {
        fac = fac * i;
    }

    console.log(fac);
};

// factorial(5);

 const Prime = (num)=>{
      let isPrime = true

      for(let i = 2 ; i<num ; i++)
          if(num%i === 0){
            isPrime = false
            break;
          }

          if(isPrime){
            console.log("Prime")
          }else{
            console.log("Not prime")
          }
      }
//  Prime(12)

const sumNatural = (num)=>{
    let sum = 0
    for(let i = 0 ; i <=num ; i++){
  sum += i
    }
    console.log(sum)
}
sumNatural(99)


const reverseNumber = function (n){
    for(let i = n ; i>=0 ; i--){
   console.log(i)
    }
}
reverseNumber(55)



const isPalindrome = function(n){
    let str = n.toString()
    let reverseStr = ""
    for(let i = str.length-1 ; i>=0 ; i--){
        reverseStr+=str[i]
    }


    if(str === reverseStr){
        console.log("is Palindrome ")
    }else{
        console.log("Not palindrom")
    }
}

// isPalindrome(1221)


const findLargest = function(arr){
   console.log(arr)
   let max = -Infinity
   for(let i = 0 ; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
   }
   console.log(max)
}
// findLargest([10,45,3,99,23])

const SimpleCalculator = function(a , b , operator){
        console.log(a, operator , b)
}
SimpleCalculator(10 , 3 , "*")