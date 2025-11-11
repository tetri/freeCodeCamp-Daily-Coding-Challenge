const isMirror = require("./script");

//1. isMirror("helloworld", "helloworld") should return false.
//2. isMirror("Hello World", "dlroW olleH") should return true.
//3. isMirror("RaceCar", "raCecaR") should return true.
//4. isMirror("RaceCar", "RaceCar") should return false.
//5. isMirror("Mirror", "rorrim") should return false.
//6. isMirror("Hello World", "dlroW-olleH") should return true.
//7. isMirror("Hello World", "!dlroW !olleH") should return true.

test("isMirror 1", () => {
  expect(isMirror("helloworld", "helloworld")).toStrictEqual(false);
});

test("isMirror 2", () => {
  expect(isMirror("Hello World", "dlroW olleH")).toStrictEqual(true);
});

test("isMirror 3", () => {
  expect(isMirror("RaceCar", "raCecaR")).toStrictEqual(true);
});

test("isMirror 4", () => {
  expect(isMirror("RaceCar", "RaceCar")).toStrictEqual(false);
});

test("isMirror 5", () => {
  expect(isMirror("Mirror", "rorrim")).toStrictEqual(false);
});

test("isMirror 6", () => {
  expect(isMirror("Hello World", "dlroW !olleH")).toStrictEqual(true);
});

test("isMirror 7", () => {
  expect(isMirror("Hello World", "dlroW-olleH")).toStrictEqual(true);
});
