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

test("Pass string '2,2,4,5,6,7', add the numbers and sum should be equal to 26", () => {
  expect(add("2,2,4,5,6,7")).toBe(26);
});

test("Pass string '2\n3,4', add the numbers and sum should be equal to 9", () => {
  expect(add("2\n3,4")).toBe(9);
});
