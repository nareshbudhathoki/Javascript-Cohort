//here we are learning the set timeout function which executes itself after given time

// setTimeout(() =>{
//   console.log(`Welcome to the marvel world`)
// },5000);

// console.log("Hello world of billionare");

// setTimeout(()=> console.log(`I'm delayed`), 5*1000);

// console.log("welcome to the top 1 percent club");


//even in this case there is 0 in time delay it will log first regular code then will execute timeout function

// console.log("Hello world of billionare");

// setTimeout(()=> console.log(`I'm delayed`), 0);

// console.log("welcome to the top 1 percent club");


const obj = {
  personName : "jenith",
  greet: function(){
    console.log(`Hello, ${this.personName}`);
  }
}

console.log("hello from js world");

setTimeout(obj.greet.bind(obj), 2000); //here 2000, is the minimum time after that u have to run this code and maximum can go any number depends on whethere the call stack is empty or not

console.log("by bye")