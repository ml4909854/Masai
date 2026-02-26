let str1 = "mahesh"
let str2 = "kumarjjjjjjjjjjjjj"

function merge(str1, str2){
    let newStr = ""
    let max = Math.max(str1.length, str2.length)

    for(let i = 0; i < max; i++){
        let ch1 = str1[i] || ""
        let ch2 = str2[i] || ""
        newStr += ch1 + ch2
    }

    console.log(newStr)
}

// merge(str1, str2)

// let a = 10
// let b = 112
// [a,b] = [b,a]
// console.log(a , b)