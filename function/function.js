//function with call

const person1 ={
  name:"jen",
  greet: function(){
    console.log(`hello ${this.name}`);
  }
}
person1.greet();

const person2 = {
  name:"thompson"
}

//it helps to use the method of another function using the call
person1.greet.call(person2);

//using bind, but bind returns the call back function

const bindGreet = person1.greet.bind(person2);

bindGreet();