// ==========================================
// TASK MANAGEMENT APP - JAVASCRIPT BASICS
// ==========================================

// A comment explains code and is ignored by JavaScript.

// ------------------------------------------
// 1. VARIABLES: const and let
// ------------------------------------------

// Use const when the value should not be reassigned.
const applicationName = "Task Management App";
const defaultCategory = "General";
const sampleTaskTitle = "Complete JavaScript assignment";
const taskPriority = "High";
const taskDueDate = "2026-08-05";

// Use let when the value may change.
let isTaskCompleted = false;
let totalTasks = 5;
let completedTasks = 2;

console.log("Application:", applicationName);
console.log("Default category:", defaultCategory);

// ------------------------------------------
// 2. REASSIGNING A let VARIABLE
// ------------------------------------------

console.log("Task completed before update:", isTaskCompleted);

isTaskCompleted = true;

console.log("Task completed after update:", isTaskCompleted);

// This would cause an error because const cannot be reassigned:
// applicationName = "New Application Name";

// ------------------------------------------
// 3. DATA TYPES
// ------------------------------------------

const taskName = "Learn JavaScript"; // String
const estimatedHours = 3;            // Number
const isUrgent = true;               // Boolean
let assignedUser;                    // Undefined
const deletedTask = null;            // Null

console.log("Task name type:", typeof taskName);
console.log("Estimated hours type:", typeof estimatedHours);
console.log("Is urgent type:", typeof isUrgent);
console.log("Assigned user type:", typeof assignedUser);
console.log("Deleted task value:", deletedTask);

// JavaScript reports null as object.
// This is an old JavaScript behavior.
console.log("typeof null:", typeof deletedTask);

// ------------------------------------------
// 4. ARITHMETIC OPERATORS
// ------------------------------------------

const pendingTasks = totalTasks - completedTasks;
const tasksCreatedToday = 3;
const updatedTotalTasks = totalTasks + tasksCreatedToday;
const averageTasksPerDay = updatedTotalTasks / 2;

console.log("Pending tasks:", pendingTasks);
console.log("Updated total tasks:", updatedTotalTasks);
console.log("Average tasks per day:", averageTasksPerDay);

// Other arithmetic operators
console.log("Multiplication:", 4 * 3);
console.log("Remainder:", 10 % 3);
console.log("Power:", 2 ** 3);

// ------------------------------------------
// 5. ASSIGNMENT OPERATORS
// ------------------------------------------

let taskCount = 4;

taskCount = taskCount + 1;
console.log("After adding one task:", taskCount);

taskCount += 2;
console.log("After adding two more tasks:", taskCount);

taskCount -= 1;
console.log("After deleting one task:", taskCount);

// ------------------------------------------
// 6. COMPARISON OPERATORS
// ------------------------------------------

const maximumTasks = 10;

console.log("Are total tasks greater than 3?", totalTasks > 3);
console.log("Are total tasks less than 10?", totalTasks < maximumTasks);
console.log("Are total tasks equal to 5?", totalTasks === 5);
console.log("Are total tasks not equal to 5?", totalTasks !== 5);

// ------------------------------------------
// 7. STRICT EQUALITY
// ------------------------------------------

const numberValue = 5;
const stringValue = "5";

// Loose equality converts values automatically.
console.log("Loose equality:", numberValue == stringValue);

// Strict equality checks both value and data type.
console.log("Strict equality:", numberValue === stringValue);

// Recommended:
console.log("Correct number comparison:", numberValue === 5);

// ------------------------------------------
// 8. LOGICAL OPERATORS
// ------------------------------------------

const userIsLoggedIn = true;
const userHasPermission = true;
const taskIsCompleted = false;

// AND operator: both conditions must be true.
const canEditTask = userIsLoggedIn && userHasPermission;

// OR operator: at least one condition must be true.
const shouldShowTask = taskIsCompleted || userHasPermission;

// NOT operator: reverses a boolean value.
const taskIsPending = !taskIsCompleted;

console.log("Can edit task:", canEditTask);
console.log("Should show task:", shouldShowTask);
console.log("Task is pending:", taskIsPending);

// ------------------------------------------
// 9. OPERATOR PRECEDENCE
// ------------------------------------------

const resultWithoutBrackets = 10 + 5 * 2;
const resultWithBrackets = (10 + 5) * 2;

console.log("Without brackets:", resultWithoutBrackets);
console.log("With brackets:", resultWithBrackets);

// Multiplication happens before addition unless brackets change the order.

// ------------------------------------------
// 10. STRING CONCATENATION
// ------------------------------------------

const traineeName = "Ali";

const concatenatedMessage =
  traineeName + " is working on " + sampleTaskTitle + ".";

console.log(concatenatedMessage);

// ------------------------------------------
// 11. TEMPLATE LITERALS
// ------------------------------------------

const taskMessage = `${traineeName} is working on "${sampleTaskTitle}".
Priority: ${taskPriority}
Due date: ${taskDueDate}
Completed: ${isTaskCompleted}`;

console.log(taskMessage);

// ------------------------------------------
// 12. BASIC TYPE CONVERSION
// ------------------------------------------

// Values from input fields are normally strings.
const firstInputValue = "10";
const secondInputValue = "5";

console.log("String addition:", firstInputValue + secondInputValue);

// Convert strings to numbers.
const firstNumber = Number(firstInputValue);
const secondNumber = Number(secondInputValue);

console.log("Number addition:", firstNumber + secondNumber);

// Convert other types to strings.
const taskCountText = String(totalTasks);
console.log("Converted to string:", taskCountText);
console.log("Converted value type:", typeof taskCountText);

// Convert values to booleans.
console.log("Boolean of 1:", Boolean(1));
console.log("Boolean of 0:", Boolean(0));
console.log('Boolean of "hello":', Boolean("hello"));
console.log('Boolean of empty string:', Boolean(""));

// ------------------------------------------
// 13. CONSOLE METHODS
// ------------------------------------------

console.log("This is a normal console message.");

console.error("Example error: Task title is missing.");

console.warn("Example warning: Due date is approaching.");

const sampleTask = {
  title: sampleTaskTitle,
  category: defaultCategory,
  priority: taskPriority,
  completed: isTaskCompleted,
  dueDate: taskDueDate,
};

console.log("Sample task object:", sampleTask);
console.table(sampleTask);

// Display multiple tasks as a table.
const tasks = [
  {
    id: 1,
    title: "Learn variables",
    priority: "High",
    completed: true,
  },
  {
    id: 2,
    title: "Practice operators",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    title: "Use the browser console",
    priority: "Low",
    completed: false,
  },
];

console.table(tasks);

// ------------------------------------------
// 14. FORMATTED PROJECT OUTPUT
// ------------------------------------------

console.log(`
=================================
${applicationName}
=================================
Task: ${sampleTaskTitle}
Category: ${defaultCategory}
Priority: ${taskPriority}
Due Date: ${taskDueDate}
Completed: ${isTaskCompleted}
Total Tasks: ${totalTasks}
Completed Tasks: ${completedTasks}
Pending Tasks: ${pendingTasks}
=================================
`);

// ------------------------------------------
// 15. PREDICT THE OUTPUT
// ------------------------------------------

// Ask trainees to predict these before running them.

console.log("Prediction 1:", 5 + 2 * 3);
console.log("Prediction 2:", (5 + 2) * 3);
console.log("Prediction 3:", "5" + 2);
console.log("Prediction 4:", Number("5") + 2);
console.log("Prediction 5:", true && false);
console.log("Prediction 6:", true || false);
console.log("Prediction 7:", !true);
console.log("Prediction 8:", 10 === "10");

// ------------------------------------------
// 16. INTENTIONAL ERRORS
// ------------------------------------------

// Uncomment one example at a time.

// ReferenceError:
// The variable name does not exist.
// console.log(unknownTask);

// ReferenceError caused by case sensitivity:
// console.log(ApplicationName);

// SyntaxError:
// The string is missing its closing quotation mark.
// const brokenMessage = "JavaScript is running;

// TypeError:
// A number does not have the toUpperCase method.
// const taskNumber = 10;
// console.log(taskNumber.toUpperCase());

// ------------------------------------------
// 17. FINAL PROJECT CONSTANTS
// ------------------------------------------

const projectAppName = "Task Management App";
const projectDefaultCategory = "Personal";
const projectSampleTaskTitle = "Build JavaScript task logic";
const projectPriority = "Medium";
let projectCompletionState = false;
const projectDueDate = "2026-08-07";

console.table({
  projectAppName,
  projectDefaultCategory,
  projectSampleTaskTitle,
  projectPriority,
  projectCompletionState,
  projectDueDate,
});




// ------------------------------------------
// 18. ARRAYS
// ------------------------------------------



const priorities = ["low", "medium", "high"];

console.log(priorities[0]);       // low
console.log(priorities[2]);       // high
console.log(priorities.length);   // 3
priorities.push("higher");
priorities.push("highest");
console.log(priorities);
priorities.pop();
console.log(priorities);
priorities.unshift("lower");
priorities.unshift("lowest");
console.log(priorities);
priorities.shift();
console.log(priorities);

const slicedPriorities = priorities.slice(1, 4);
console.log("After Slice", slicedPriorities);
console.log("Array not changed",priorities);

const splicedPriorities = priorities.splice(1, 3);
console.log("After Splice", splicedPriorities);
console.log("Array changed",priorities);

const newtasks = [
  { id: 101, title: "Learn arrays" },
  { id: 102, title: "Practice map" },
  { id: 103, title: "Build task logic" }
];
newtasks.forEach((task) => {
  console.log(task.title);
});


const task = {
  id: 101,
  title: "Prepare presentation",
  category: {
    id: 3,
    name: "Training"
  },
  tags: ["javascript", "arrays"]
};

console.log(task.category.name);
console.log(task.tags[0]);

