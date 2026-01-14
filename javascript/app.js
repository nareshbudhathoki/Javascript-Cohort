//classes and objects in the js

// const obj = {
//   fname : "jen",
//   lname : "ritchi",
//   getFullname: function(){
//     return `First name is : ${this.fname} and my last name is : ${this.lname}`;
//   }
// }

// console.log(obj);
// console.log(obj.getFullname());

//we can solve the issues of multiple objects using the single class

class Person{
  constructor(fname, lname){
    this.lname = lname;
    this.fname = fname;
  }

  getFullName(){
    return `First Name: ${this.fname} and last name is: ${this.lname}`;
  }
}

const p1 = new Person("ken", "Thompson"); //new keyword creates the memory in the heap and return address to the p1

const p2 = new Person("Denis", "Ritchie");
console.log(p1);
console.log(p2);
console.log(p2.getFullName());