// function Person(first, last, age, eyecolor) {
//   this.firstname = first;
//   this.lastname = last;
//   this.age = age;
//   this.eyecolor = eyecolor;
//   this.country = "India";
//   this.fullname = function(){
//     return this.firstname + " " + this.lastname
//   }
// }

// let myfather = new Person("Pratap", "Lodhi", 55, "brown");
// myfather.nationality = "Indian";
// let full = myfather.fullname()
// console.log(full)

// add method for full name
// myfather.name = function(){
//     return this.firstname + " " + this.lastname
// }

// // add properties using prototype
// Person.prototype.city = "Bhopal"


// Person.prototype.method = function(){
//     return this.age
    
// }
// console.log(myfather);


// classs contgructore

class CarName{
  constructor(name , year){
     this.name = name
     this.year = year
  }
  age()  {
       const date = new Date()
        return date.getFullYear() - this.year;
  }
}

const Mahesh = new CarName("Volvo" , 2000)
console.log(Mahesh.age())


let arr = [1 , 4, ,5 ,6,6,8]
const result = arr.map((ele , index , arr)=>{
   console.log(ele , index , arr) 
})