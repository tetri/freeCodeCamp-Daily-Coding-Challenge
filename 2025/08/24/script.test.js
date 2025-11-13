const battle = require("./script");

//1. battle("Hello", "World") should return "We lost".
//2. battle("pizza", "salad") should return "We won".
//3. battle("C@T5", "D0G$") should return "We won".
//4. battle("kn!ght", "orc") should return "Opponent retreated".
//5. battle("PC", "Mac") should return "We retreated".
//6. battle("Wizards", "Dragons") should return "It was a tie".
//7. battle("Mr. Smith", "Dr. Jones") should return "It was a tie".

test("battle 1", () => {
  expect(battle("Hello", "World")).toStrictEqual("We lost");
});

test("battle 2", () => {
  expect(battle("pizza", "salad")).toStrictEqual("We won");
});

test("battle 3", () => {
  expect(battle("C@T5", "D0G$")).toStrictEqual("We won");
});

test("battle 4", () => {
  expect(battle("kn!ght", "orc")).toStrictEqual("Opponent retreated");
});

test("battle 5", () => {
  expect(battle("PC", "Mac")).toStrictEqual("We retreated");
});

test("battle 6", () => {
  expect(battle("Wizards", "Dragons")).toStrictEqual("It was a tie");
});

test("battle 7", () => {
  expect(battle("Mr. Smith", "Dr. Jones")).toStrictEqual("It was a tie");
});
