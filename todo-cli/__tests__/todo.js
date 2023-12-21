// Import the todoList module
const todoList = require("../todo");

describe("TodoList Test Suite", () => {
 // Create a fresh TodoList instance before each test
 let todo;

 beforeEach(() => {
   todo = todoList();
 });

 // Test cases:

 test("We Should create a new todo", () => {
   // Add a new todo item
   todo.add({
     title: "New Todo",
     completed: false,
     dueDate: "2023-12-31",
   });

   // Assert that the todo list contains one item
   expect(todo.all.length).toBe(1);
   // Assert that the first item's title is "New Todo"
   expect(todo.all[0].title).toBe("New Todo");
 });

 test("Should mark a todo as completed after its completion", () => {
   // Add an incomplete todo item
   todo.add({
     title: "Incomplete Todo",
     completed: false,
     dueDate: "2023-12-31",
   });

   // Mark the first item as completed
   todo.markAsComplete(0);

   // Assert that the first item is now marked as completed
   expect(todo.all[0].completed).toBe(true);
 });

 test("Should retrieve overdue items after the time is over", () => {
   // Add an overdue todo item
   todo.add({
     title: "Overdue Todo",
     completed: false,
     dueDate: "2023-01-01",
   });

   // Retrieve overdue items
   const allOverDueThings = todo.overdue();

   // Assert that one overdue item is retrieved
   expect(allOverDueThings.length).toBe(1);
   // Assert that the overdue item's title is "Overdue Todo"
   expect(allOverDueThings[0].title).toBe("Overdue Todo");
 });

 test("Should retrieve due today items which are mentioned", () => {
   // Get today's date in YYYY-MM-DD format
   const todayDate = new Date().toISOString().split("T")[0];

   // Add a todo item due today
   todo.add({
     title: "Due Today Todo",
     completed: false,
     dueDate: todayDate,
   });

   // Retrieve due today items
   const todayDueThings = todo.dueToday();

   // Assert that one item is due today
   expect(todayDueThings.length).toBe(1);
   // Assert that the due today item's title is "Due Today Todo"
   expect(todayDueThings[0].title).toBe("Due Today Todo");
 });

 test("Should retrieve due later items", () => {
   // Add a todo item due later
   todo.add({
     title: "Due Later Todo",
     completed: false,
     dueDate: "2023-12-31",
   });

   // Retrieve due later items
   const dueLaterThings = todo.dueLater();

   // Assert that one item is due later
   expect(dueLaterThings.length).toBe(1);
   // Assert that the due later item's title is "Due Later Todo"
   expect(dueLaterThings[0].title).toBe("Due Later Todo");
 });
});
