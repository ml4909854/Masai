// Using an Object Literal
// Using the new Keyword
// Using an Object Constructor
// Using Object.assign()
// Using Object.create()
// Using Object.fromEntries()


let person = {
    fistname:"Mahesh",
    lastname:"Kumar",
    age:"43",
    gender:"Male"


}
console.log(PermissionStatus)
let x = person
console.log(x , "object created by litereals") 


// 
const person1 = new Object({
    firstname:"SuryaKumar",
    lastname: "Yadava",
    age:"33",
    gender:"Male"
})

console.log(person1)

//  object by using object .crestes

const person2 = Object.create(person)

person2.fisrtname = "Rinku singh"
console.log(person2)


// object create usning assingn values

const person3 = Object.assign(person)
console.log(person3)
// Person 3 ssame a person one


for(let key in person){
    console.log(key , person[key])
}

let arr = ["Orange" , "Mango" , "banana" , "Kaaju" , "badam"]
for(let ele in arr){
    console.log(arr[ele])
}

const person4 = Object.fromEntries(person)
console.log(person4)