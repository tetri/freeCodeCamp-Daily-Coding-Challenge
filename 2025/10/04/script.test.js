const classification = require("./script");

//1. classification(5778) should return "G".
//2. classification(2400) should return "M".
//3. classification(9999) should return "A".
//4. classification(3700) should return "K".
//5. classification(3699) should return "M".
//6. classification(210000) should return "O".
//7. classification(6000) should return "F".
//8. classification(11432) should return "B".

test("classification 1", () => {
  expect(classification(5778)).toStrictEqual("G");
});

test("classification 2", () => {
  expect(classification(2400)).toStrictEqual("M");
});

test("classification 3", () => {
  expect(classification(9999)).toStrictEqual("A");
});

test("classification 4", () => {
  expect(classification(3700)).toStrictEqual("K");
});

test("classification 5", () => {
  expect(classification(3699)).toStrictEqual("M");
});

test("classification 6", () => {
  expect(classification(210000)).toStrictEqual("O");
});

test("classification 7", () => {
  expect(classification(6000)).toStrictEqual("F");
});

test("classification 8", () => {
  expect(classification(11432)).toStrictEqual("B");
});
