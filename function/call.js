const person1 ={
  personName:"jen",
  greet: function(){
    console.log(`hello ${this.personName}`);
  }
}

//using the call and giving the context inside the call to call greet function inside the person1 object

person1.greet.call({personName:"jenith"}); //here we are passing context as object