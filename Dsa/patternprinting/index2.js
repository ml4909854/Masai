
// // Right traingel pattern

// let matrix = [
//     [1 ,2 ,3 ,4 ,5],
//     [6 , 7, 8, 8 , 10],
//     [11 , 12 ,13 ,14 ,15],
//     [16 , 17, 18 , 19 , 20],
//     [21 , 22 ,23 ,24 ,25]
// ]

// let rows = matrix.length
// let cols = matrix.length
// // console.log(rows , cols)

// for(let i =0 ; i<rows ; i++){
//     let bag = ""
//     for(let j = 0 ; j<=i ; j++){
// bag += "* "
//     }
//     console.log(bag)
// }


//  inverted right trangle
// let matrix = [
//     [1 ,2 ,3 ,4 ,5],
//     [6 , 7, 8, 8 , 10],
//     [11 , 12 ,13 ,14 ,15],
//     [16 , 17, 18 , 19 , 20],
//     [21 , 22 ,23 ,24 ,25]
// ]

// let rows = matrix.length
// let cols = matrix.length
// // console.log(rows , cols)

// for(let i = rows-1 ; i>=0 ; i--){
//     let bag = ""
//     for(let j = 0 ; j<=i ; j++){
// bag += "* "
//     }
//     console.log(bag)
// }



// printing first row last row
let matrix = [
    [1 ,2 ,3 ,4 ,5],
    [6 , 7, 8, 8 , 10],
    [11 , 12 ,13 ,14 ,15],
    [16 , 17, 18 , 19 , 20],
    [21 , 22 ,23 ,24 ,25]
]

let rows = matrix.length
let cols = matrix.length
// console.log(rows , cols)


// // printing first row last column
// for(let i = 0 ; i<rows; i++){
//     let bag = ""
//    for(let j = 0; j<cols; j++){
//     if(i===0 || i === rows-1){
//         bag += "* "
//     }
//    }
//    console.log(bag)
// }

// first columnlast column
// for(let i = 0 ; i<rows; i++){
//     let bag = ""
//    for(let j = 0; j<cols; j++){
//     if(j===0 || j === cols-1){
//         bag += "* "
//     }else{
//         bag +="  "
//     }
//    }
//    console.log(bag)
// }

// print l shape
// for(let i = 0 ; i<rows; i++){
//     let bag = ""
//    for(let j = 0; j<cols; j++){
//     if(i===rows-1 || j === 0){
//         bag += "* "
//     }else{
//         bag += "  "
//     }
//    }
//    console.log(bag)
// }


// make photophrame
// for(let i = 0 ; i<rows; i++){
//     let bag = ""
//    for(let j = 0; j<cols; j++){
//     if(i===0 || i === rows-1 || j === 0 || j ===cols-1){
//         bag += "* "
//     }else{
//         bag += "  "
//     }
//    }
//    console.log(bag)
// }