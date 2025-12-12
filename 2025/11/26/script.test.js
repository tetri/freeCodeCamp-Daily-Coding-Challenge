const isFizzBuzz = require("./script");

//1. isFizzBuzz([1, 2, "Fizz", 4]) should return true.
//2. isFizzBuzz([1, 2, 3, 4]) should return false.
//3. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", 7]) should return false.
//4. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"]) should return false.
//5. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"]) should return false.
//6. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"]) should return false.
//7. isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]) should return true.

test("isFizzBuzz 1", () => {
  expect(isFizzBuzz([1, 2, "Fizz", 4])).toStrictEqual(true);
});
test("isFizzBuzz 2", () => {
  expect(isFizzBuzz([1, 2, 3, 4])).toStrictEqual(false);
});
test("isFizzBuzz 3", () => {
  expect(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", 7])).toStrictEqual(false);
});
test("isFizzBuzz 4", () => {
  expect(
    isFizzBuzz([
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
      "FizzBuzz",
    ])
  ).toStrictEqual(false);
});
test("isFizzBuzz 5", () => {
  expect(
    isFizzBuzz([
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
      "Fizz",
    ])
  ).toStrictEqual(false);
});
test("isFizzBuzz 6", () => {
  expect(
    isFizzBuzz([
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
      "Buzz",
    ])
  ).toStrictEqual(false);
});
test("isFizzBuzz 7", () => {
  expect(
    isFizzBuzz([
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
    ])
  ).toStrictEqual(true);
});
