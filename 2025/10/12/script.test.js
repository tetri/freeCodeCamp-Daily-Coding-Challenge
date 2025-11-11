const battle = require("./script");

//1. battle("hello world", "hello word") should return "We win".
//2. battle("Hello world", "hello world") should return "We win".
//3. battle("lorem ipsum", "kitty ipsum") should return "We lose".
//4. battle("hello world", "world hello") should return "Draw".
//5. battle("git checkout", "git switch") should return "We win".
//6. battle("Cheeseburger with fries", "Cheeseburger with Fries") should return "We lose".
//7. battle("We must never surrender", "Our team must win") should return "Draw".

test("battle 1", () => {
  expect(battle("hello world", "hello word")).toStrictEqual("We win");
});

test("battle 2", () => {
  expect(battle("Hello world", "hello world")).toStrictEqual("We win");
});

test("battle 3", () => {
  expect(battle("lorem ipsum", "kitty ipsum")).toStrictEqual("We lose");
});

test("battle 4", () => {
  expect(battle("hello world", "world hello")).toStrictEqual("Draw");
});

test("battle 5", () => {
  expect(battle("git checkout", "git switch")).toStrictEqual("We win");
});

test("battle 6", () => {
  expect(
    battle("Cheeseburger with fries", "Cheeseburger with Fries")
  ).toStrictEqual("We lose");
});

test("battle 7", () => {
  expect(battle("We must never surrender", "Our team must win")).toStrictEqual(
    "Draw"
  );
});
