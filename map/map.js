const arr = [1,2,3,4,5];
const square = arr.map((element) => element**2);

console.log(square);

//another examples with object

const array = [
  {name:"ejn", profession:"doctor"},
  {name:"ken", profession:"engineer"},
  {name:"richard", profession:"singer"}
]

const professions = array.map((element)=>element.profession);

console.log(professions);