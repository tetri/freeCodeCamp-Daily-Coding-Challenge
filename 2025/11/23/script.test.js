const countCharacters = require("./script");

//1. countCharacters("hello world") should return ["d 1", "e 1", "h 1", "l 3", "o 2", "r 1", "w 1"].
//2. countCharacters("I love coding challenges!") should return ["a 1", "c 2", "d 1", "e 3", "g 2", "h 1", "i 2", "l 3", "n 2", "o 2", "s 1", "v 1"].
//3. countCharacters("// TODO: Complete this challenge ASAP!") should return ["a 3", "c 2", "d 1", "e 4", "g 1", "h 2", "i 1", "l 3", "m 1", "n 1", "o 3", "p 2", "s 2", "t 3"].

test("countCharacters 1", () => {
  expect(countCharacters("hello world")).toStrictEqual([
    "d 1",
    "e 1",
    "h 1",
    "l 3",
    "o 2",
    "r 1",
    "w 1",
  ]);
});

test("countCharacters 2", () => {
  expect(countCharacters("I love coding challenges!")).toStrictEqual([
    "a 1",
    "c 2",
    "d 1",
    "e 3",
    "g 2",
    "h 1",
    "i 2",
    "l 3",
    "n 2",
    "o 2",
    "s 1",
    "v 1",
  ]);
});

test("countCharacters 3", () => {
  expect(
    countCharacters("// TODO: Complete this challenge ASAP!")
  ).toStrictEqual([
    "a 3",
    "c 2",
    "d 1",
    "e 4",
    "g 1",
    "h 2",
    "i 1",
    "l 3",
    "m 1",
    "n 1",
    "o 3",
    "p 2",
    "s 2",
    "t 3",
  ]);
});
