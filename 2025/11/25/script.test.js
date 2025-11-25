const fizzBuzz = require("./script");

//1. fizzBuzz(2) should return [1, 2].
//2. fizzBuzz(4) should return [1, 2, "Fizz", 4].
//3. fizzBuzz(8) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8].
//4. fizzBuzz(20) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"].
//5. fizzBuzz(50) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"].

test("fizzBuzz 1", () => {
  expect(fizzBuzz(2)).toStrictEqual([1, 2]);
});

test("fizzBuzz 2", () => {
  expect(fizzBuzz(4)).toStrictEqual([1, 2, "Fizz", 4]);
});

test("fizzBuzz 3", () => {
  expect(fizzBuzz(8)).toStrictEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8]);
});

test("fizzBuzz 4", () => {
  expect(fizzBuzz(20)).toStrictEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
    16,
    17,
    "Fizz",
    19,
    "Buzz",
  ]);
});

test("fizzBuzz 5", () => {
  expect(fizzBuzz(50)).toStrictEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
    16,
    17,
    "Fizz",
    19,
    "Buzz",
    "Fizz",
    22,
    23,
    "Fizz",
    "Buzz",
    26,
    "Fizz",
    28,
    29,
    "FizzBuzz",
    31,
    32,
    "Fizz",
    34,
    "Buzz",
    "Fizz",
    37,
    38,
    "Fizz",
    "Buzz",
    41,
    "Fizz",
    43,
    44,
    "FizzBuzz",
    46,
    47,
    "Fizz",
    49,
    "Buzz",
  ]);
});
