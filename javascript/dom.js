Function.prototype.describe = function(){
  console.log(`Function name is ${this.name}`);
}

function add(a,b){
  return a + b;

}

add.describe();