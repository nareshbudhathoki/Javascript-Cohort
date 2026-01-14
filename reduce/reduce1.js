const expenses = [
  { description: "Lunch", amount: 12, category: "Food" },
  { description: "Bus Ticket", amount: 3, category: "Transport" },
  { description: "Dinner", amount: 20, category: "Food" },
  { description: "Taxi", amount: 15, category: "Transport" },
  { description: "Snacks", amount: 5, category: "Food" }
];

//here we are going to make the expense tracker app functionality
//using the reduce method

const expenseReport = expenses.reduce((report, expense)=>{
  if(!report[expense.category]){
    report[expense.category] = 0;
  }
  report[expense.category] += expense.amount;
  return report;

}, {})

console.log(expenseReport);