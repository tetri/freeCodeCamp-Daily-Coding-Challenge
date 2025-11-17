const getWords = require("./script");

//1. getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding") should return ["coding", "python", "in"].
//2. getWords("I like coding. I like testing. I love debugging!") should return ["i", "like", "coding"].
//3. getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!") should return ["debug", "test", "deploy"].

test("getWords 1", () => {
  expect(
    getWords(
      "Coding in Python is fun because coding Python allows for coding in Python easily while coding"
    )
  ).toStrictEqual(["coding", "python", "in"]);
});

test("getWords 2", () => {
  expect(
    getWords("I like coding. I like testing. I love debugging!")
  ).toStrictEqual(["i", "like", "coding"]);
});

test("getWords 3", () => {
  expect(
    getWords(
      "Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!"
    )
  ).toStrictEqual(["debug", "test", "deploy"]);
});
