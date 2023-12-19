// This file defines Jest tests for various functions in the todo.js module.

const db = require("../models");

// Utility function to generate a Date object in the future/past based on days offset.
const getJSDate = (days) => {
  if (!Number.isInteger(days)) {
    throw new Error("Need to pass an integer as days");
  }
  const today = new Date();
  const oneDay = 60 * 60 * 24 * 1000;
  return new Date(today.getTime() + days * oneDay);
};

describe("Tests for functions in todo.js", function () {
  // Runs database synchronization before each test suite.
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  // Tests the overdue function.
  test("Todo.overdue should return all tasks (including completed ones) that are past their due date", async () => {
    // Create a sample todo item with due date set 2 days ago and status as false (incomplete).
    const todo = await db.Todo.addTask({ title: "This is a sample item", dueDate: getJSDate(-2), completed: false });
    const items = await db.Todo.overdue();
    expect(items.length).toBe(1); // Expect only the created item to be returned.
  });

  // ... other tests with similar comments ...
});
