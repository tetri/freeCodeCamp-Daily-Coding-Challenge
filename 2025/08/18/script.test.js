const factorial = require("./script");

//1. factorial(0) should return 1.
//2. factorial(5) should return 120.
//3. factorial(20) should return 2432902008176640000.

test("factorial 1", () => {
  expect(factorial(0)).toBe(1);
});

test("factorial 2", () => {
  expect(factorial(5)).toBe(120);
});

test("factorial 3", () => {
  expect(factorial(20)).toBe(2432902008176640000);
});
