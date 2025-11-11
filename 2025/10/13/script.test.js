const to12 = require("./script");

//1. to12("1124") should return "11:24 AM".
//2. to12("0900") should return "9:00 AM".
//3. to12("1455") should return "2:55 PM".
//4. to12("2346") should return "11:46 PM".
//5. to12("0030") should return "12:30 AM".

test("to12 1", () => {
  expect(to12("1124")).toStrictEqual("11:24 AM");
});

test("to12 2", () => {
  expect(to12("0900")).toStrictEqual("9:00 AM");
});

test("to12 3", () => {
  expect(to12("1455")).toStrictEqual("2:55 PM");
});

test("to12 4", () => {
  expect(to12("2346")).toStrictEqual("11:46 PM");
});

test("to12 5", () => {
  expect(to12("0030")).toStrictEqual("12:30 AM");
});
