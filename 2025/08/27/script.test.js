const evaluate = require("./script");

//1. evaluate([5, 6, 7, 8, 9], ['+', '-']) should return 3
//2. evaluate([17, 61, 40, 24, 38, 14], ['+', '%']) should return 38
//3. evaluate([20, 2, 4, 24, 12, 3], ['*', '/']) should return 60
//4. evaluate([11, 4, 10, 17, 2], ['*', '*', '%']) should return 30
//5. evaluate([33, 11, 29, 13], ['/', '-']) should return -2

test("evaluate 1", () =>
  expect(evaluate([5, 6, 7, 8, 9], ["+", "-"])).toStrictEqual(3));

test("evaluate 2", () =>
  expect(evaluate([17, 61, 40, 24, 38, 14], ["+", "%"])).toStrictEqual(38));

test("evaluate 3", () =>
  expect(evaluate([20, 2, 4, 24, 12, 3], ["*", "/"])).toStrictEqual(60));

test("evaluate 4", () =>
  expect(evaluate([11, 4, 10, 17, 2], ["*", "*", "%"])).toStrictEqual(30));

test("evaluate 5", () =>
  expect(evaluate([33, 11, 29, 13], ["/", "-"])).toStrictEqual(-2));
