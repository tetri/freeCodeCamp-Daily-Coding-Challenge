const checkStrength = require('./script');

//1. checkStrength("123456") should return "weak".
//2. checkStrength("pass!!!") should return "weak".
//3. checkStrength("Qwerty") should return "weak".
//4. checkStrength("PASSWORD") should return "weak".
//5. checkStrength("PASSWORD!") should return "medium".
//6. checkStrength("PassWord%^!") should return "medium".
//7. checkStrength("qwerty12345") should return "medium".
//8. checkStrength("S3cur3P@ssw0rd") should return "strong".
//9. checkStrength("C0d3&Fun!") should return "strong".

test("checkStrength 1", () =>
  expect(checkStrength("123456")).toStrictEqual("weak"));

test("checkStrength 2", () =>
  expect(checkStrength("pass!!!")).toStrictEqual("weak"));

test("checkStrength 3", () =>
  expect(checkStrength("Qwerty")).toStrictEqual("weak"));

test("checkStrength 4", () =>
  expect(checkStrength("PASSWORD")).toStrictEqual("weak"));

test("checkStrength 5", () =>
  expect(checkStrength("PASSWORD!")).toStrictEqual("medium"));

test("checkStrength 6", () =>
  expect(checkStrength("PassWord%^!")).toStrictEqual("medium"));

test("checkStrength 7", () =>
  expect(checkStrength("qwerty12345")).toStrictEqual("medium"));

test("checkStrength 8", () =>
  expect(checkStrength("S3cur3P@ssw0rd")).toStrictEqual("strong"));

test("checkStrength 9", () =>
  expect(checkStrength("C0d3&Fun!")).toStrictEqual("strong"));