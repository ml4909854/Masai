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

for(let i =0 ; i<rows ; i++){
    let bag = ""
    for(let j = 0; j<cols ; j++){
       bag += "* " 
    }
    console.log(bag)
}