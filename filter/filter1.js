const tasks = [
  { description: "Finish homework", completed: false, priority: 1 },
  { description: "Grocery shopping", completed: true, priority: 2 },
  { description: "Team meeting", completed: false, priority: 1 },
  { description: "Call friend", completed: false, priority: 3 },
  { description: "Read a book", completed: true, priority: 2 }
];

//using the filter sort the completed taks and sort thme based on the priority

const pendingSortedTasks = tasks.filter((task) =>!task.completed).sort((a, b) =>a.priority-b.priority);

console.log(pendingSortedTasks);