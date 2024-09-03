const add = require("./delimiter-counter.js");

test("Pass string '//;\n1;2', add the numbers and sum should be equal to 3", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("Pass string '//;\n1', add the numbers and sum should be equal to 1", () => {
  expect(add("//;\n1")).toBe(1);
});

test("Pass string '//:\n1:2, add the numbers and sum should be equal to 0", () => {
  expect(add("//:\n1:2")).toBe(3);
});

test("Pass string '//,\n1,2,5' add the numbers and sum should be equal to 8", () => {
  expect(add("//,\n1,2,5")).toBe(8);
});

test("Pass string '//\n1:2', add the numbers and sum should be equal to 'The passed string is invalid'", () => {
  expect(add("//\n1:2")).toBe("The passed string is invalid");
});

test("Pass string '//,\n1,-2,-5', find the negative numbers and return the negative number", () => {
  expect(add("//,\n1,-2,-5")).toBe("Negative numbers -2,-5 not allowed");
});
