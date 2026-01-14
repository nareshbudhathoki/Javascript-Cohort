const arr =[1, 2, 3, 4, 5];

let sum = arr.reduce((accu, element)=>(accu+element));

console.log(sum);

//the above was the simple example of the reduce
//here is the example that a interview can ask compare using the reduce

const expenses = [
  {name:"ram", expense:2000},
  {name:"jen", expense:500},
  {name:"rancho", expense:5400}
]

const maxExpense = expenses.reduce((max, current) =>{
  return max.expense>= current.expense?max:current;
})

console.log(maxExpense.expense);