const add = require("./delimiter-counter.js");

test("Empty string", () => {
  expect(add()).toBe(0);
});

test("Pass string '1', add the numbers and sum should be equal to 1", () => {
  expect(add("1")).toBe(1);
});

test("Pass string '2,2', add the numbers and sum should be equal to 4", () => {
  expect(add("2,2")).toBe(4);
});
